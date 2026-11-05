(function () {
  const ALL = [...window.KLASIK, ...window.MODERN];
  const BY_ID = Object.fromEntries(ALL.map((c) => [c.id, c]));
  const app = document.getElementById("app");
  const S = window.Store;

  const STATUS_LABEL = ["Başlanmadı", "Okunuyor", "Tamamlandı"];
  const LEVEL_LABEL = { 1: "Giriş", 2: "Orta", 3: "İleri" };
  const TRACK_LABEL = { klasik: "Klasik", modern: "Modern" };

  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const courseTitle = (id) => (id === "hifz" ? "Hıfz" : BY_ID[id] ? BY_ID[id].title : id);

  // ───────── İlerleme hesapları ─────────
  // Ana metinler (alt olmayanlar) ders ilerlemesini belirler; "okunuyor" yarım sayılır.
  function courseProgress(c) {
    const main = c.texts.filter((t) => !t.alt);
    if (!main.length) return 0;
    const sum = main.reduce((a, t) => a + S.textStatus(c.id, t.id) / 2, 0);
    return sum / main.length;
  }
  const courseStatus = (c) => {
    const p = courseProgress(c);
    if (p >= 1) return 2;
    return c.texts.some((t) => S.textStatus(c.id, t.id) > 0) ? 1 : 0;
  };
  const avg = (list) => (list.length ? list.reduce((a, c) => a + courseProgress(c), 0) / list.length : 0);
  const pct = (x) => Math.round(x * 100) + "%";
  const missingPrereqs = (c) => c.prereq.map((id) => BY_ID[id]).filter((p) => p && courseStatus(p) < 2);

  const bar = (p, cls = "") => `<div class="bar ${cls}"><span style="width:${pct(p)}"></span></div>`;
  const ring = (p, label) => {
    const r = 34, C = 2 * Math.PI * r;
    return `<div class="ring"><svg viewBox="0 0 80 80" aria-hidden="true">
      <circle cx="40" cy="40" r="${r}" class="ring-bg"/>
      <circle cx="40" cy="40" r="${r}" class="ring-fg" stroke-dasharray="${C}" stroke-dashoffset="${C * (1 - p)}"/>
    </svg><div class="ring-txt"><b>${pct(p)}</b><small>${label}</small></div></div>`;
  };

  // ───────── Görünümler ─────────
  function viewPanel() {
    const kp = avg(window.KLASIK), mp = avg(window.MODERN), all = avg(ALL);
    const today = S.minutesOn(S.todayStr());
    const goal = S.state.dailyGoal;
    const active = ALL.filter((c) => courseStatus(c) === 1);
    const suggestions = ALL
      .filter((c) => courseStatus(c) === 0 && missingPrereqs(c).length === 0)
      .sort((a, b) => a.stage - b.stage)
      .slice(0, 4);

    // Son 14 gün
    const days = [];
    for (let i = 13; i >= 0; i--) {
      const d = new Date(); d.setDate(d.getDate() - i);
      const ds = S.todayStr(d);
      days.push({ ds, m: S.minutesOn(ds), lbl: d.toLocaleDateString("tr-TR", { weekday: "narrow" }) });
    }
    const maxM = Math.max(goal, ...days.map((d) => d.m));

    return `
      <section class="hero">
        <div>
          <h1>Bismillah.</h1>
          <p class="muted">Klasik medrese silsilesi ile çağdaş din eğitimini tek bir yolda takip et.</p>
        </div>
        <div class="rings">
          ${ring(kp, "Klasik")}
          ${ring(mp, "Modern")}
          ${ring(all, "Toplam")}
        </div>
      </section>

      <section class="grid3">
        <div class="card stat">
          <small>Bugün</small>
          <b>${today} <span>/ ${goal} dk</span></b>
          ${bar(Math.min(1, today / goal))}
        </div>
        <div class="card stat">
          <small>Seri</small>
          <b>${S.streak()} <span>gün</span></b>
          <p class="muted tiny">Her gün az da olsa çalış: “Amellerin Allah katında en sevimlisi az da olsa devamlı olanıdır.”</p>
        </div>
        <div class="card stat">
          <small>Son 14 gün</small>
          <div class="spark">${days.map((d) => `<i title="${d.ds}: ${d.m} dk" style="height:${Math.max(4, (d.m / maxM) * 100)}%" class="${d.m >= goal ? "ok" : ""}"></i>`).join("")}</div>
        </div>
      </section>

      <section class="grid3">
        <a class="card stat link" href="#/tekrar">
          <small>Ezber kartları</small>
          <b>${S.dueCards().length} <span>kart bekliyor</span></b>
          <p class="muted tiny">Toplam ${Object.keys(S.state.cards).length} kart tekrar listende.</p>
        </a>
        <a class="card stat link" href="#/hifz">
          <small>Hıfz</small>
          <b>${Object.keys(S.state.hifz.pages).length} <span>/ 604 sayfa</span></b>
          ${bar(Object.keys(S.state.hifz.pages).length / 604)}
        </a>
        <a class="card stat link" href="#/cekim">
          <small>Sarf aracı</small>
          <b lang="ar" style="font-size:1.5rem">نَصَرَ يَنْصُرُ</b>
          <p class="muted tiny">Bir kökü 14 sîgada çek, ezber modunda kendini sına.</p>
        </a>
      </section>

      <section>
        <div class="row-head"><h2>Devam eden dersler</h2></div>
        ${active.length ? `<div class="list">${active.map(courseRow).join("")}</div>`
          : `<p class="empty">Henüz başlanmış ders yok. Aşağıdaki önerilerden biriyle başlayabilirsin.</p>`}
      </section>

      <section>
        <div class="row-head"><h2>Sıradaki öneriler</h2><a href="#/mufredat/birlesik">Tüm müfredat →</a></div>
        <div class="list">${suggestions.map(courseRow).join("") || `<p class="empty">Maşallah, tüm dersler başlanmış.</p>`}</div>
      </section>`;
  }

  function courseRow(c) {
    const p = courseProgress(c);
    const miss = missingPrereqs(c);
    return `<a class="course-row" href="#/ders/${c.id}">
      <span class="tag ${c.track}">${TRACK_LABEL[c.track]} · ${c.stage}</span>
      <span class="cr-main"><b>${esc(c.title)}</b><small>${esc(c.area)}${miss.length ? ` · <em class="warn">önkoşul: ${miss.map((m) => esc(m.title)).join(", ")}</em>` : ""}</small></span>
      <span class="cr-ar" lang="ar">${c.arabic}</span>
      <span class="cr-p">${bar(p)}<small>${pct(p)}</small></span>
    </a>`;
  }

  function viewMufredat(track, q = "") {
    const tabs = ["birlesik", "klasik", "modern"].map((t) =>
      `<a href="#/mufredat/${t}" class="${t === track ? "on" : ""}">${{ birlesik: "Birleşik Yol", klasik: "Klasik Medrese", modern: "Çağdaş Müfredat" }[t]}</a>`
    ).join("");

    const match = (c) => {
      if (!q) return true;
      const hay = [c.title, c.arabic, c.area, c.summary, ...c.texts.map((t) => t.title + " " + t.author)].join(" ").toLocaleLowerCase("tr");
      return hay.includes(q.toLocaleLowerCase("tr"));
    };

    let body = "";
    for (const st of [1, 2, 3, 4]) {
      if (track === "birlesik") {
        const k = window.KLASIK.filter((c) => c.stage === st && match(c));
        const m = window.MODERN.filter((c) => c.stage === st && match(c));
        if (!k.length && !m.length) continue;
        body += `<section class="stage">
          <h2><span class="num">${st}</span> ${window.STAGES.birlesik[st]}
            <small>${window.STAGES.klasik[st]} + ${window.STAGES.modern[st]}</small></h2>
          <div class="two-col">
            <div><h3 class="col-h klasik">Klasik</h3>${k.map(card).join("") || '<p class="empty">—</p>'}</div>
            <div><h3 class="col-h modern">Çağdaş</h3>${m.map(card).join("") || '<p class="empty">—</p>'}</div>
          </div></section>`;
      } else {
        const list = window[track === "klasik" ? "KLASIK" : "MODERN"].filter((c) => c.stage === st && match(c));
        if (!list.length) continue;
        body += `<section class="stage"><h2><span class="num">${st}</span> ${window.STAGES[track][st]}</h2>
          <div class="cards">${list.map(card).join("")}</div></section>`;
      }
    }

    return `
      <div class="tabs">${tabs}</div>
      <input id="search" class="search" type="search" placeholder="Ders, kitap veya müellif ara… (ör. Teftâzânî, belâgat)" value="${esc(q)}">
      ${track === "birlesik" ? `<p class="muted intro">Birleşik yol, her merhalede klasik metinleri çağdaş derslerle yan yana koyar. Klasik taraf “metin ve meleke”yi, çağdaş taraf “tarih, yöntem ve güncel bağlam”ı verir. Köprü ikonu (⇄) birbirini tamamlayan dersleri gösterir.</p>` : ""}
      ${body || `<p class="empty">“${esc(q)}” için sonuç bulunamadı.</p>`}`;
  }

  function card(c) {
    const p = courseProgress(c);
    const st = courseStatus(c);
    const bridges = window.BRIDGES.filter((b) => b.includes(c.id)).length;
    return `<a class="ccard ${st === 2 ? "done" : ""}" href="#/ders/${c.id}">
      <div class="cc-top"><small>${esc(c.area)}</small>${bridges ? `<span class="bridge" title="Köprü dersleri var">⇄</span>` : ""}</div>
      <div class="cc-title"><b>${esc(c.title)}</b><span lang="ar">${c.arabic}</span></div>
      <p>${esc(c.summary)}</p>
      <div class="cc-foot">${bar(p, c.track)}<small>${c.texts.filter((t) => !t.alt).length} metin · ${STATUS_LABEL[st]}</small></div>
    </a>`;
  }

  function viewDers(id) {
    const c = BY_ID[id];
    if (!c) return `<p class="empty">Ders bulunamadı. <a href="#/mufredat/birlesik">Müfredata dön</a></p>`;
    const p = courseProgress(c);
    const miss = missingPrereqs(c);
    const bridged = window.BRIDGES.filter((b) => b.includes(id)).map((b) => BY_ID[b[0] === id ? b[1] : b[0]]);
    const unlocks = ALL.filter((x) => x.prereq.includes(id));
    const logs = S.state.logs.filter((l) => l.courseId === id);
    const total = logs.reduce((a, l) => a + l.minutes, 0);

    return `
      <a class="back" href="#/mufredat/${c.track}">← ${c.track === "klasik" ? "Klasik Medrese" : "Çağdaş Müfredat"}</a>
      <section class="ders-head ${c.track}">
        <div>
          <span class="tag ${c.track}">${TRACK_LABEL[c.track]} · ${c.stage}. merhale · ${esc(window.STAGES[c.track][c.stage])}</span>
          <h1>${esc(c.title)}</h1>
          <p class="muted">${esc(c.area)}</p>
        </div>
        <div class="ders-ar" lang="ar">${c.arabic}</div>
      </section>

      <p class="lead">${esc(c.summary)}</p>
      ${miss.length ? `<div class="notice">Önerilen önkoşul: ${miss.map((m) => `<a href="#/ders/${m.id}">${esc(m.title)}</a>`).join(", ")}. Yine de başlayabilirsin; sıra bir tavsiyedir.</div>` : ""}

      <div class="ders-grid">
        <div>
          ${window.Views.lessonsBlock(c)}
          ${c.id === "k-sarf" ? `<p><a class="btn alt" href="#/cekim">Çekim Aracı'nı aç →</a></p>` : ""}
          <h2>Metinler ve kaynaklar <small class="muted">${pct(p)}</small></h2>
          ${bar(p, c.track)}
          <ol class="texts">
            ${c.texts.map((t) => {
              const s = S.textStatus(c.id, t.id);
              return `<li class="text s${s} ${t.alt ? "alt" : ""}">
                <div class="t-main">
                  <b>${esc(t.title)}</b>
                  <small>${esc(t.author)} · ${LEVEL_LABEL[t.level]}${t.alt ? " · <em>alternatif/ek</em>" : ""}</small>
                  ${t.note ? `<small class="t-note">${esc(t.note)}</small>` : ""}
                </div>
                <div class="seg" role="group" aria-label="Durum">
                  ${[0, 1, 2].map((v) => `<button data-text="${t.id}" data-s="${v}" class="${s === v ? "on" : ""}">${STATUS_LABEL[v]}</button>`).join("")}
                </div>
              </li>`;
            }).join("")}
          </ol>

          <h2>Notlarım</h2>
          <textarea id="note" rows="7" placeholder="Bu derse dair notlar, ezberler, sorular, hocanın açıklamaları…">${esc(S.note(c.id))}</textarea>
          <small class="muted" id="note-status">Otomatik kaydedilir.</small>
        </div>

        <aside>
          <div class="card">
            <h3>Kazanımlar</h3>
            <ul class="goals">${c.goals.map((g) => `<li>${esc(g)}</li>`).join("")}</ul>
          </div>
          ${bridged.length ? `<div class="card"><h3>⇄ Köprü dersler</h3><ul class="links">${bridged.map((b) => `<li><a href="#/ders/${b.id}">${esc(b.title)}</a> <span class="tag ${b.track}">${TRACK_LABEL[b.track]}</span></li>`).join("")}</ul></div>` : ""}
          ${unlocks.length ? `<div class="card"><h3>Bu dersten sonra</h3><ul class="links">${unlocks.map((b) => `<li><a href="#/ders/${b.id}">${esc(b.title)}</a></li>`).join("")}</ul></div>` : ""}
          <div class="card">
            <h3>Çalışma kaydı</h3>
            <p class="muted tiny">Bu derse toplam ${total} dk (${logs.length} oturum)</p>
            <form id="quicklog" class="qlog">
              <input name="minutes" type="number" min="1" max="600" value="30" aria-label="Dakika"> <span>dk</span>
              <button type="submit">Ekle</button>
            </form>
          </div>
        </aside>
      </div>`;
  }

  function viewGunluk() {
    const logs = [...S.state.logs].sort((a, b) => (b.date + b.id).localeCompare(a.date + a.id));
    const groups = {};
    for (const l of logs) (groups[l.date] = groups[l.date] || []).push(l);
    const opts = ["klasik", "modern"].map((t) =>
      `<optgroup label="${t === "klasik" ? "Klasik Medrese" : "Çağdaş Müfredat"}">${ALL.filter((c) => c.track === t).map((c) => `<option value="${c.id}">${esc(c.title)}</option>`).join("")}</optgroup>`
    ).join("") + `<option value="hifz">Hıfz</option>`;

    return `
      <h1>Çalışma Günlüğü</h1>
      <form id="logform" class="card logform">
        <label>Tarih<input type="date" name="date" value="${S.todayStr()}" required></label>
        <label>Ders<select name="courseId" required>${opts}</select></label>
        <label>Süre (dk)<input type="number" name="minutes" min="1" max="600" value="30" required></label>
        <label class="wide">Not<input type="text" name="note" placeholder="Ör. İzzî, 3. bab; 10 sayfa"></label>
        <button type="submit">Kaydet</button>
      </form>
      ${Object.keys(groups).length ? Object.entries(groups).map(([d, ls]) => `
        <section class="day">
          <h3>${new Date(d + "T00:00").toLocaleDateString("tr-TR", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}
            <small>${ls.reduce((a, l) => a + l.minutes, 0)} dk</small></h3>
          <ul>${ls.map((l) => {
            const c = BY_ID[l.courseId];
            return `<li><span class="tag ${c ? c.track : ""}">${l.minutes} dk</span>
              <a href="${l.courseId === "hifz" ? "#/hifz" : "#/ders/" + l.courseId}">${esc(courseTitle(l.courseId))}</a>
              ${l.note ? `<span class="muted">— ${esc(l.note)}</span>` : ""}
              <button class="x" data-del="${l.id}" title="Sil">×</button></li>`;
          }).join("")}</ul>
        </section>`).join("") : `<p class="empty">Henüz kayıt yok.</p>`}`;
  }

  function viewAyarlar() {
    return `
      <h1>Ayarlar</h1>
      <div class="card">
        <h3>Günlük hedef</h3>
        <form id="goalform" class="qlog"><input type="number" name="goal" min="5" max="600" value="${S.state.dailyGoal}"> <span>dk / gün</span> <button>Kaydet</button></form>
      </div>
      <div class="card">
        <h3>Yedekleme</h3>
        <p class="muted tiny">Tüm ilerleme bu tarayıcıda saklanır. Cihaz değiştirirken yedek al.</p>
        <div class="btns">
          <button id="export">Yedeği indir (JSON)</button>
          <label class="btn">Yedekten yükle<input type="file" id="import" accept="application/json" hidden></label>
          <button id="reset" class="danger">Tüm ilerlemeyi sıfırla</button>
        </div>
      </div>
      <div class="card">
        <h3>Hakkında</h3>
        <p class="muted tiny">Müfredat: ${window.KLASIK.length} klasik, ${window.MODERN.length} çağdaş ders · ${ALL.reduce((a, c) => a + c.texts.length, 0)} metin/kaynak.
        Klasik müfredat ağırlıklı olarak Osmanlı/Anadolu medrese geleneğini (Hanefî-Mâtürîdî) esas alır; Şâfiî ve diğer gelenekler için alternatif metinler “alternatif/ek” olarak işaretlidir.</p>
      </div>`;
  }

  // ───────── Yönlendirme ve olaylar ─────────
  let searchQ = "";

  function render() {
    const parts = (location.hash.replace(/^#\/?/, "") || "").split("/");
    const route = parts[0] || "panel";

    const navKey = route === "ders" || route === "sinav" || route === "cekim" ? "mufredat" : route;
    document.querySelectorAll("[data-nav]").forEach((a) => a.classList.toggle("on", a.dataset.nav === navKey));

    const V = window.Views;
    const special =
      route === "ders" && parts[2] ? V.lesson(parts[1], parts[2]) :
      route === "sinav" ? V.sinav(parts[1], parts[2]) :
      route === "tekrar" ? V.tekrar() :
      route === "hifz" ? V.hifz() :
      route === "cekim" ? V.cekim() : null;
    if (special) {
      app.innerHTML = special.html;
      if (special.bind) special.bind();
      return;
    }

    let html;
    if (route === "mufredat") html = viewMufredat(["klasik", "modern"].includes(parts[1]) ? parts[1] : "birlesik", searchQ);
    else if (route === "ders") html = viewDers(parts[1]);
    else if (route === "gunluk") html = viewGunluk();
    else if (route === "ayarlar") html = viewAyarlar();
    else html = viewPanel();
    app.innerHTML = html;
    bind(route, parts);
  }

  function bind(route, parts) {
    if (route === "mufredat") {
      const s = document.getElementById("search");
      s.addEventListener("input", () => {
        searchQ = s.value;
        const pos = s.selectionStart;
        render();
        const n = document.getElementById("search");
        n.focus(); n.setSelectionRange(pos, pos);
      });
    }

    if (route === "ders") {
      const id = parts[1];
      app.querySelectorAll("[data-text]").forEach((b) => b.addEventListener("click", () => {
        const y = window.scrollY;
        S.setTextStatus(id, b.dataset.text, +b.dataset.s);
        render(); window.scrollTo(0, y);
      }));
      const note = document.getElementById("note");
      if (note) {
        let t;
        note.addEventListener("input", () => {
          clearTimeout(t);
          document.getElementById("note-status").textContent = "Yazılıyor…";
          t = setTimeout(() => { S.setNote(id, note.value); document.getElementById("note-status").textContent = "Kaydedildi."; }, 400);
        });
      }
      const ql = document.getElementById("quicklog");
      if (ql) ql.addEventListener("submit", (e) => {
        e.preventDefault();
        const m = +ql.minutes.value;
        if (m > 0) { S.addLog({ date: S.todayStr(), courseId: id, minutes: m, note: "" }); render(); }
      });
    }

    if (route === "gunluk") {
      const f = document.getElementById("logform");
      f.addEventListener("submit", (e) => {
        e.preventDefault();
        S.addLog({ date: f.date.value, courseId: f.courseId.value, minutes: +f.minutes.value, note: f.note.value.trim() });
        render();
      });
      app.querySelectorAll("[data-del]").forEach((b) => b.addEventListener("click", () => { S.removeLog(b.dataset.del); render(); }));
    }

    if (route === "ayarlar") {
      document.getElementById("goalform").addEventListener("submit", (e) => { e.preventDefault(); S.setDailyGoal(+e.target.goal.value); render(); });
      document.getElementById("export").addEventListener("click", () => {
        const a = document.createElement("a");
        a.href = URL.createObjectURL(new Blob([S.exportJSON()], { type: "application/json" }));
        a.download = `medrese-yedek-${S.todayStr()}.json`;
        a.click();
      });
      document.getElementById("import").addEventListener("change", async (e) => {
        const file = e.target.files[0];
        if (!file) return;
        try { S.importJSON(await file.text()); alert("Yedek yüklendi."); render(); }
        catch (err) { alert("Yüklenemedi: " + err.message); }
      });
      document.getElementById("reset").addEventListener("click", () => {
        if (confirm("Tüm ilerleme, notlar ve günlük silinecek. Emin misin?")) { S.reset(); render(); }
      });
    }
  }

  window.U = { esc, BY_ID, ALL, bar, render: () => render() };

  window.addEventListener("hashchange", () => {
    if (!location.hash.startsWith("#/mufredat")) searchQ = "";
    window.Views.resetSession();
    render(); window.scrollTo(0, 0);
  });
  render();

  if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }
})();
