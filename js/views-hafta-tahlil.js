// Amme cüzü tahlili ve haftalık hedef/rapor ekranları.
(function () {
  const S = window.Store;
  const U = () => window.U;
  const V = window.Views;

  // ═════════════ AMME CÜZÜ TAHLİLİ ═════════════
  const tahlilState = { gizliMeal: false, gizliIrab: false };
  const sureAdi = (no) => (window.AMME.find((s) => s.no === no) || {}).ad || no;
  const hazir = () => window.AMME.filter((s) => window.TAHLIL[s.no]).map((s) => s.no);

  function tahlilList() {
    const esc = U().esc;
    const html = `
      <a class="back" href="#/metinler">← Metinler</a>
      <h1>Amme Cüzü Tahlili <span lang="ar" class="muted">جزء عمّ</span></h1>
      <div class="sure-grid">${window.AMME.map((s) => {
        const ok = !!window.TAHLIL[s.no];
        return ok
          ? `<a class="sure-cell on" href="#/tahlil/${s.no}"><small>${s.no}</small><b>${esc(s.ad)}</b><span>${window.TAHLIL[s.no].ayetler.length} âyet</span></a>`
          : `<div class="sure-cell"><small>${s.no}</small><b>${esc(s.ad)}</b><span>—</span></div>`;
      }).join("")}</div>`;
    return { html };
  }

  function tahlil(no) {
    no = +no;
    const t = window.TAHLIL[no], esc = U().esc;
    if (!t) return tahlilList();
    const st = tahlilState, list = hazir(), i = list.indexOf(no);
    const prev = list[i - 1], next = list[i + 1];
    const keys = t.ayetler.map((a) => `tahlil/${no}/${a.n}`);
    const inDeck = keys.filter((k) => S.card(k)).length;
    const arw = (txt) => esc(txt).replace(/([؀-ۿ][؀-ۿً-ْ ]*[؀-ۿً-ْ]|[؀-ۿ])/g, '<span lang="ar">$&</span>');

    const html = `
      <a class="back" href="#/tahlil">← Amme Cüzü</a>
      <section class="ders-head klasik"><div><span class="tag klasik">${no}. sure</span><h1>${esc(sureAdi(no))} Sûresi</h1><p class="muted">${esc(t.giris)}</p></div></section>
      <div class="btns metin-tools">
        <label class="check"><input type="checkbox" id="gMeal" ${st.gizliMeal ? "checked" : ""}> Meali gizle</label>
        <label class="check"><input type="checkbox" id="gIrab" ${st.gizliIrab ? "checked" : ""}> İ'râbı gizle (tıklayınca açılır)</label>
        ${inDeck < keys.length ? `<button class="sm" id="addAyet">Âyet meallerini tekrar listeme ekle</button>` : `<small class="muted">✓ Âyetler tekrar listende</small>`}
      </div>
      ${t.ayetler.map((a) => `
        <article class="card ayet">
          <div class="ay-top"><span class="ayno">${a.n}</span>
            <button class="sm ghost" data-oku="${a.n}">▶ Dinle</button><small class="ay-msg muted" data-msg="${a.n}"></small></div>
          <div class="ay-ar big" lang="ar">${a.ar}</div>
          <p class="meal ${st.gizliMeal ? "hid" : ""}">${esc(a.tr)}</p>
          <div class="tbl-wrap"><table class="tahlil">
            <thead><tr><th>Kelime</th><th>İ'râb</th><th>Sarf</th></tr></thead>
            <tbody>${a.k.map(([w, irab, sarf, kok, bab]) => `<tr>
              <td lang="ar" class="tw">${w}</td>
              <td class="${st.gizliIrab ? "hid" : ""}">${arw(irab)}</td>
              <td>${arw(sarf || "")}${kok && bab ? ` <a href="#/cekim/${kok}/${bab}" title="Sarf atölyesinde aç">↗</a>` : ""}</td></tr>`).join("")}</tbody>
          </table></div>
          ${a.b && a.b.length ? `<div class="belagat"><b>Belâgat</b><ul>${a.b.map((x) => `<li>${arw(x)}</li>`).join("")}</ul></div>` : ""}
        </article>`).join("")}
      <nav class="pager">
        ${prev ? `<a href="#/tahlil/${prev}">← ${esc(sureAdi(prev))}</a>` : "<span></span>"}
        ${next ? `<a href="#/tahlil/${next}">${esc(sureAdi(next))} →</a>` : "<span></span>"}
      </nav>`;

    const bind = () => {
      document.getElementById("gMeal").onchange = (e) => { st.gizliMeal = e.target.checked; U().render(); };
      document.getElementById("gIrab").onchange = (e) => { st.gizliIrab = e.target.checked; U().render(); };
      document.querySelectorAll(".hid").forEach((el) => el.onclick = () => el.classList.remove("hid"));
      const add = document.getElementById("addAyet");
      if (add) add.onclick = () => { S.addCards(keys); U().render(); };
      document.querySelectorAll("[data-oku]").forEach((b) => b.onclick = () => {
        const n = +b.dataset.oku, m = document.querySelector(`[data-msg="${n}"]`);
        m.textContent = "Yükleniyor…";
        window.Ses.play(window.Ses.url(window.Ses.getKari(), no, n), () => (m.textContent = ""))
          .then(() => (m.textContent = "Çalıyor…"))
          .catch(() => (m.textContent = "Ses yüklenemedi."));
      });
    };
    return { html, bind };
  }

  // ═════════════ HAFTALIK HEDEF VE RAPOR ═════════════
  const TURLER = {
    sure: { ad: "Çalışma süresi", birim: "dk", sayisal: true },
    gun: { ad: "Çalışılan gün", birim: "gün", sayisal: true },
    ders: { ad: "Ders tamamla", birim: "", sayisal: false },
    hifz: { ad: "Yeni ezber", birim: "sayfa", sayisal: true },
    hifztekrar: { ad: "Hıfz tekrarı", birim: "sayfa", sayisal: true },
    kart: { ad: "Kart tekrarı", birim: "kart", sayisal: true },
    serbest: { ad: "Serbest hedef", birim: "", sayisal: false }
  };

  const addDays = (ds, n) => { const d = new Date(ds + "T00:00"); d.setDate(d.getDate() + n); return S.todayStr(d); };
  const weekDays = (wk) => Array.from({ length: 7 }, (_, i) => addDays(wk, i));
  const inWeek = (wk, ds) => ds >= wk && ds <= addDays(wk, 6);
  const allLessons = () => Object.entries(window.DERSLER).flatMap(([cid, ls]) => ls.map((l) => ({ key: `${cid}/${l.id}`, cid, title: l.title })));
  const lessonTitle = (key) => { const x = allLessons().find((l) => l.key === key); return x ? `${U().BY_ID[x.cid] ? U().BY_ID[x.cid].title + " · " : ""}${x.title}` : key; };

  function weekStats(wk) {
    const st = S.state, days = weekDays(wk);
    const logs = st.logs.filter((l) => inWeek(wk, l.date));
    const perDay = days.map((d) => logs.filter((l) => l.date === d).reduce((a, l) => a + l.minutes, 0));
    const perCourse = {};
    logs.forEach((l) => (perCourse[l.courseId] = (perCourse[l.courseId] || 0) + l.minutes));
    const lessons = Object.entries(st.lessons).filter(([, d]) => inWeek(wk, d)).map(([k]) => k);
    const yeni = Object.values(st.hifz.pages).filter((p) => p.m && inWeek(wk, p.m)).length;
    const tekrar = days.reduce((a, d) => a + ((st.hifzLog[d] || {}).tekrar || 0), 0);
    const kart = days.reduce((a, d) => a + (st.reviewLog[d] || 0), 0);
    return { days, perDay, perCourse, toplam: perDay.reduce((a, b) => a + b, 0), gun: perDay.filter((m) => m > 0).length, lessons, yeni, tekrar, kart };
  }

  function progress(g, w) {
    const val = { sure: w.toplam, gun: w.gun, hifz: w.yeni, hifztekrar: w.tekrar, kart: w.kart }[g.tur];
    if (g.tur === "ders") return { val: w.lessons.includes(g.ders) || S.lessonDone(g.ders) ? 1 : 0, hedef: 1 };
    if (g.tur === "serbest") return { val: g.bitti ? 1 : 0, hedef: 1 };
    return { val, hedef: g.hedef || 1 };
  }

  function weekLabel(wk) {
    const a = new Date(wk + "T00:00"), b = new Date(addDays(wk, 6) + "T00:00");
    const f = (d, o) => d.toLocaleDateString("tr-TR", o);
    return `${f(a, { day: "numeric", month: "long" })} – ${f(b, { day: "numeric", month: "long", year: "numeric" })}`;
  }

  function goalText(g) {
    const T = TURLER[g.tur];
    if (g.tur === "ders") return `Ders: ${lessonTitle(g.ders)}`;
    if (g.tur === "serbest") return g.metin;
    return `${T.ad}: ${g.hedef} ${T.birim}`;
  }

  function hafta(wkParam) {
    const esc = U().esc, wk = /^\d{4}-\d{2}-\d{2}$/.test(wkParam || "") ? S.weekKey(new Date(wkParam + "T00:00")) : S.weekKey();
    const w = weekStats(wk), goals = S.goals(wk), cur = S.weekKey();
    const done = goals.filter((g) => { const p = progress(g, w); return p.val >= p.hedef; }).length;
    const maxD = Math.max(30, ...w.perDay);
    const gunAd = ["Pzt", "Sal", "Çar", "Per", "Cum", "Cmt", "Paz"];
    const lessonOpts = Object.entries(window.DERSLER).map(([cid, ls]) =>
      `<optgroup label="${esc(U().BY_ID[cid] ? U().BY_ID[cid].title : cid)}">${ls.map((l) => `<option value="${cid}/${l.id}">${esc(l.title)}</option>`).join("")}</optgroup>`).join("");
    const prevWk = addDays(wk, -7);

    const html = `
      <div class="row-head week-nav">
        <a href="#/hafta/${addDays(wk, -7)}">← Önceki</a>
        <h1>${weekLabel(wk)}</h1>
        ${wk < cur ? `<a href="#/hafta/${addDays(wk, 7)}">Sonraki →</a>` : "<span></span>"}
      </div>

      <section class="grid3">
        <div class="card stat"><small>Toplam çalışma</small><b>${w.toplam} <span>dk · ${w.gun} gün</span></b>
          <div class="wbars">${w.perDay.map((m, i) => `<div><i style="height:${Math.max(3, (m / maxD) * 100)}%" title="${w.days[i]}: ${m} dk"></i><small>${gunAd[i]}</small></div>`).join("")}</div></div>
        <div class="card stat"><small>Hedefler</small><b>${done} <span>/ ${goals.length} tamam</span></b>${U().bar(goals.length ? done / goals.length : 0)}
          <p class="muted tiny">${goals.length ? (done === goals.length ? "Bârekallah, haftanın bütün hedefleri tamam!" : "Az da olsa devamlı olan amel daha sevimlidir.") : "Bu hafta için henüz hedef yok."}</p></div>
        <div class="card stat"><small>Hıfz ve tekrar</small>
          <b>${w.yeni} <span>yeni sayfa · ${w.tekrar} tekrar</span></b>
          <p class="muted tiny">${w.kart} ezber kartı tekrar edildi · ${w.lessons.length} ders tamamlandı</p></div>
      </section>

      <section class="card">
        <h3>Haftanın hedefleri</h3>
        ${goals.length ? `<ul class="goals-list">${goals.map((g) => {
          const p = progress(g, w), ok = p.val >= p.hedef;
          return `<li class="${ok ? "ok" : ""}">
            ${g.tur === "serbest" ? `<input type="checkbox" data-gcheck="${g.id}" ${g.bitti ? "checked" : ""}>` : `<span class="gmark">${ok ? "✓" : "○"}</span>`}
            <span class="gtext">${esc(goalText(g))}</span>
            ${TURLER[g.tur].sayisal ? `<span class="gprog">${U().bar(Math.min(1, p.val / p.hedef))}<small>${p.val}/${p.hedef}</small></span>` : ""}
            <button class="x" data-gdel="${g.id}" title="Sil">×</button></li>`;
        }).join("")}</ul>` : `<p class="empty">Aşağıdan hedef ekle. Örnek: “Kâfiye: İstisnâ dersi”, “Yeni ezber: 2 sayfa”, “Çalışma süresi: 300 dk”.</p>`}
        <form id="gform" class="gform">
          <label>Tür<select name="tur">${Object.entries(TURLER).map(([k, t]) => `<option value="${k}">${t.ad}</option>`).join("")}</select></label>
          <label class="g-num">Hedef<input type="number" name="hedef" min="1" value="60"></label>
          <label class="g-ders" hidden>Ders<select name="ders">${lessonOpts}</select></label>
          <label class="g-serbest" hidden>Hedef<input type="text" name="metin" placeholder="Ör. Emsile'yi baştan sona ezbere oku"></label>
          <button>Ekle</button>
        </form>
        ${!goals.length && S.goals(prevWk).length ? `<button class="ghost sm" id="kopya">Geçen haftanın hedeflerini kopyala</button>` : ""}
      </section>

      <section class="card">
        <h3>Haftalık rapor</h3>
        ${Object.keys(w.perCourse).length ? `<table class="rapor"><tr><th>Ders</th><th>Süre</th></tr>${Object.entries(w.perCourse).sort((a, b) => b[1] - a[1]).map(([cid, m]) =>
          `<tr><td>${esc(cid === "hifz" ? "Hıfz" : U().BY_ID[cid] ? U().BY_ID[cid].title : cid)}</td><td>${m} dk</td></tr>`).join("")}</table>` : `<p class="empty">Bu hafta çalışma kaydı yok.</p>`}
        ${w.lessons.length ? `<h4>Tamamlanan dersler</h4><ul>${w.lessons.map((k) => `<li>${esc(lessonTitle(k))}</li>`).join("")}</ul>` : ""}
        <div class="btns"><button class="sm" id="raporKopya">Raporu metin olarak kopyala</button><small class="muted" id="raporMsg"></small></div>
      </section>`;

    const raporMetni = () => [
      `Medrese haftalık rapor — ${weekLabel(wk)}`,
      `Toplam çalışma: ${w.toplam} dk (${w.gun} gün)`,
      `Hıfz: ${w.yeni} yeni sayfa, ${w.tekrar} sayfa tekrar`,
      `Ezber kartı tekrarı: ${w.kart}`,
      w.lessons.length ? `Tamamlanan dersler:\n${w.lessons.map((k) => "  - " + lessonTitle(k)).join("\n")}` : "",
      goals.length ? `Hedefler (${done}/${goals.length}):\n${goals.map((g) => { const p = progress(g, w); return `  ${p.val >= p.hedef ? "[x]" : "[ ]"} ${goalText(g)}${TURLER[g.tur].sayisal ? ` (${p.val}/${p.hedef})` : ""}`; }).join("\n")}` : ""
    ].filter(Boolean).join("\n");

    const bind = () => {
      const f = document.getElementById("gform");
      const sync = () => {
        const t = f.tur.value;
        f.querySelector(".g-num").hidden = !TURLER[t].sayisal;
        f.querySelector(".g-ders").hidden = t !== "ders";
        f.querySelector(".g-serbest").hidden = t !== "serbest";
        f.hedef.value = { sure: 300, gun: 5, hifz: 5, hifztekrar: 100, kart: 100 }[t] || f.hedef.value;
      };
      f.tur.onchange = sync; sync();
      f.onsubmit = (e) => {
        e.preventDefault();
        const t = f.tur.value, g = { tur: t };
        if (TURLER[t].sayisal) g.hedef = Math.max(1, +f.hedef.value);
        if (t === "ders") g.ders = f.ders.value;
        if (t === "serbest") { g.metin = f.metin.value.trim(); if (!g.metin) return; g.bitti = false; }
        S.addGoal(wk, g); U().render();
      };
      document.querySelectorAll("[data-gdel]").forEach((b) => b.onclick = () => { S.removeGoal(wk, b.dataset.gdel); U().render(); });
      document.querySelectorAll("[data-gcheck]").forEach((c) => c.onchange = () => { S.updateGoal(wk, c.dataset.gcheck, { bitti: c.checked }); U().render(); });
      const k = document.getElementById("kopya");
      if (k) k.onclick = () => { S.goals(prevWk).forEach((g) => { const c = Object.assign({}, g, { bitti: false }); delete c.id; S.addGoal(wk, c); }); U().render(); };
      document.getElementById("raporKopya").onclick = async () => {
        const m = document.getElementById("raporMsg");
        try { await navigator.clipboard.writeText(raporMetni()); m.textContent = "Kopyalandı."; }
        catch (e) { m.textContent = "Kopyalanamadı; tarayıcı izin vermedi."; }
      };
    };
    return { html, bind };
  }

  // Panel için kısa özet
  function haftaOzet() {
    const wk = S.weekKey(), w = weekStats(wk), goals = S.goals(wk);
    const done = goals.filter((g) => { const p = progress(g, w); return p.val >= p.hedef; }).length;
    return `<a class="card stat link" href="#/hafta">
      <small>Bu hafta</small>
      <b>${done} <span>/ ${goals.length} hedef · ${w.toplam} dk</span></b>
      ${U().bar(goals.length ? done / goals.length : 0)}
      <p class="muted tiny">${goals.length ? goals.slice(0, 3).map((g) => (progress(g, w).val >= progress(g, w).hedef ? "✓ " : "○ ") + U().esc(goalText(g))).join("<br>") : "Haftalık hedef belirlemek için tıkla."}</p>
    </a>`;
  }

  Object.assign(V, { tahlilList, tahlil, hafta, haftaOzet });
})();
