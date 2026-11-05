// Ders içeriği, sınav, aralıklı tekrar, hıfz ve çekim aracı görünümleri.
// Her görünüm { html, bind } döndürür; app.js yönlendirmede bunları kullanır.
(function () {
  const S = window.Store;
  const U = () => window.U; // app.js tarafından doldurulur
  const D = window.DERSLER;

  const shuffle = (a) => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const lessonOf = (cid, lid) => (D[cid] || []).find((l) => l.id === lid);
  const cardKeys = (cid, l) => l.cards.map((_, i) => `${cid}/${l.id}/${i}`);
  const cardByKey = (key) => {
    const [cid, lid, i] = key.split("/");
    const l = lessonOf(cid, lid);
    return l && l.cards[+i] ? { cid, lid, lesson: l, front: l.cards[+i][0], back: l.cards[+i][1] } : null;
  };
  const stripTags = (h) => h.replace(/<[^>]+>/g, "");

  // ═════════════ DERS İÇERİĞİ ═════════════
  function lessonsBlock(c) {
    const ls = D[c.id];
    if (!ls) return "";
    return `<h2>Dersler <small class="muted">${ls.filter((l) => S.lessonDone(`${c.id}/${l.id}`)).length}/${ls.length}</small></h2>
      <ol class="lessons">${ls.map((l, i) => {
        const k = `${c.id}/${l.id}`, q = S.quizBest(k);
        return `<li><a href="#/ders/${c.id}/${l.id}" class="${S.lessonDone(k) ? "done" : ""}">
          <span class="ln">${i + 1}</span><span class="lt">${U().esc(l.title)}</span>
          <small>${l.cards.length} kart${q != null ? ` · sınav %${q}` : ""}${S.lessonDone(k) ? " · ✓" : ""}</small></a></li>`;
      }).join("")}</ol>`;
  }

  function lesson(cid, lid) {
    const c = U().BY_ID[cid], ls = D[cid] || [], l = lessonOf(cid, lid);
    if (!c || !l) return { html: `<p class="empty">Ders bulunamadı.</p>` };
    const idx = ls.indexOf(l), key = `${cid}/${lid}`;
    const keys = cardKeys(cid, l);
    const inDeck = keys.filter((k) => S.card(k)).length;
    const prev = ls[idx - 1], next = ls[idx + 1];
    const best = S.quizBest(key);

    const html = `
      <a class="back" href="#/ders/${cid}">← ${U().esc(c.title)}</a>
      <article class="lesson">
        <header><small class="muted">${idx + 1}. ders / ${ls.length}</small><h1>${U().esc(l.title)}</h1></header>
        <div class="prose">${l.body}</div>

        <section class="card">
          <div class="row-head"><h3>Ezber kartları (${l.cards.length})</h3>
            <small class="muted">${inDeck ? `${inDeck} kart tekrar listende` : "Henüz tekrar listende değil"}</small></div>
          <div class="flist">${l.cards.map(([f, b]) => `<div class="fc"><div>${f}</div><div class="muted">${b}</div></div>`).join("")}</div>
          <div class="btns">
            ${inDeck < keys.length ? `<button id="add-deck">Kartları tekrar listeme ekle</button>` : `<button id="rm-deck" class="ghost">Tekrar listemden çıkar</button>`}
            <a class="btn alt" href="#/sinav/${cid}/${lid}">Sınav ol${best != null ? ` (en iyi: %${best})` : ""}</a>
          </div>
        </section>

        <label class="check"><input type="checkbox" id="done" ${S.lessonDone(key) ? "checked" : ""}> Bu dersi tamamladım</label>

        <nav class="pager">
          ${prev ? `<a href="#/ders/${cid}/${prev.id}">← ${U().esc(prev.title)}</a>` : "<span></span>"}
          ${next ? `<a href="#/ders/${cid}/${next.id}">${U().esc(next.title)} →</a>` : `<a href="#/ders/${cid}">Derse dön →</a>`}
        </nav>
      </article>`;

    const bind = () => {
      const add = document.getElementById("add-deck"), rm = document.getElementById("rm-deck");
      if (add) add.onclick = () => { S.addCards(keys); U().render(); };
      if (rm) rm.onclick = () => { S.removeCards(key); U().render(); };
      document.getElementById("done").onchange = (e) => {
        S.setLessonDone(key, e.target.checked);
        if (e.target.checked) S.addCards(keys);
        U().render();
      };
    };
    return { html, bind };
  }

  // ═════════════ SINAV ═════════════
  let quiz = null;

  function buildQuiz(cid, lid) {
    const l = lessonOf(cid, lid);
    const pool = l.cards.length >= 4 ? l.cards : (D[cid] || []).flatMap((x) => x.cards);
    const qs = shuffle(l.cards).slice(0, 10).map(([front, back]) => {
      const others = shuffle([...new Set(pool.map((c) => c[1]).filter((b) => stripTags(b) !== stripTags(back)))]).slice(0, 3);
      return { front, back, options: shuffle([back, ...others]), picked: null };
    });
    return { key: `${cid}/${lid}`, cid, lid, qs, i: 0 };
  }

  function sinav(cid, lid) {
    const l = lessonOf(cid, lid);
    if (!l) return { html: `<p class="empty">Ders bulunamadı.</p>` };
    if (!quiz || quiz.key !== `${cid}/${lid}`) quiz = buildQuiz(cid, lid);
    const q = quiz.qs[quiz.i];
    const back = `<a class="back" href="#/ders/${cid}/${lid}">← ${U().esc(l.title)}</a>`;

    if (!q) {
      const right = quiz.qs.filter((x) => x.picked === x.back).length;
      const p = Math.round((right / quiz.qs.length) * 100);
      S.recordQuiz(quiz.key, p);
      const wrong = quiz.qs.filter((x) => x.picked !== x.back);
      const html = `${back}
        <div class="card quiz-end">
          <h1>%${p}</h1>
          <p>${quiz.qs.length} sorudan ${right} doğru. ${p === 100 ? "Bârekallah!" : p >= 70 ? "Güzel, biraz daha tekrarla." : "Konuyu bir kez daha oku, sonra tekrar dene."}</p>
          ${wrong.length ? `<h3>Yanlışlar</h3><div class="flist">${wrong.map((x) => `<div class="fc"><div>${x.front}</div><div class="ok-txt">${x.back}</div></div>`).join("")}</div>` : ""}
          <div class="btns"><button id="again">Tekrar dene</button><a class="btn alt" href="#/ders/${cid}/${lid}">Derse dön</a></div>
        </div>`;
      return { html, bind: () => { document.getElementById("again").onclick = () => { quiz = buildQuiz(cid, lid); U().render(); }; } };
    }

    const html = `${back}
      <div class="quiz card">
        <div class="row-head"><small class="muted">Soru ${quiz.i + 1} / ${quiz.qs.length}</small>${U().bar(quiz.i / quiz.qs.length)}</div>
        <div class="q">${q.front}</div>
        <div class="opts">${q.options.map((o, i) => {
          let cls = "";
          if (q.picked != null) cls = o === q.back ? "right" : o === q.picked ? "wrong" : "dim";
          return `<button class="opt ${cls}" data-o="${i}" ${q.picked != null ? "disabled" : ""}>${o}</button>`;
        }).join("")}</div>
        ${q.picked != null ? `<button id="next" class="next">${quiz.i + 1 < quiz.qs.length ? "Sonraki →" : "Sonucu gör"}</button>` : ""}
      </div>`;
    const bind = () => {
      document.querySelectorAll(".opt").forEach((b) => b.onclick = () => { q.picked = q.options[+b.dataset.o]; U().render(); });
      const n = document.getElementById("next");
      if (n) { n.onclick = () => { quiz.i++; U().render(); }; n.focus(); }
    };
    return { html, bind };
  }

  // ═════════════ ARALIKLI TEKRAR ═════════════
  let session = null;

  function tekrar() {
    const due = S.dueCards().filter(cardByKey);
    if (!session) session = { queue: shuffle(due), shown: false, right: 0, wrong: 0 };
    const all = Object.keys(S.state.cards).filter(cardByKey);

    const decks = Object.entries(D).map(([cid, ls]) => {
      const c = U().BY_ID[cid];
      const total = ls.reduce((a, l) => a + l.cards.length, 0);
      const inDeck = all.filter((k) => k.startsWith(cid + "/")).length;
      const d = due.filter((k) => k.startsWith(cid + "/")).length;
      return `<li><a href="#/ders/${cid}">${U().esc(c.title)}</a>
        <small class="muted">${inDeck}/${total} kart${d ? ` · <b>${d} bekliyor</b>` : ""}</small>
        ${inDeck < total ? `<button class="ghost sm" data-addall="${cid}">Tümünü ekle</button>` : ""}</li>`;
    }).join("");

    const boxes = [0, 1, 2, 3, 4, 5].map((b) => all.filter((k) => S.state.cards[k].box === b).length);
    const key = session.queue[0];
    const card = key && cardByKey(key);

    let main;
    if (card) {
      main = `<div class="flash card">
        <small class="muted">${U().esc(U().BY_ID[card.cid].title)} · ${U().esc(card.lesson.title)} · kalan ${session.queue.length}</small>
        <div class="f-front">${card.front}</div>
        ${session.shown ? `<div class="f-back">${card.back}</div>
          <div class="btns center"><button id="no" class="danger">Bilemedim</button><button id="yes">Bildim</button></div>`
        : `<div class="btns center"><button id="show">Cevabı göster</button></div>`}
      </div>`;
    } else if (session.right + session.wrong) {
      main = `<div class="card quiz-end"><h2>Bugünkü tekrar tamam</h2><p>${session.right} bildin, ${session.wrong} kez tekrar ettin. Yarın görüşmek üzere.</p></div>`;
    } else {
      main = `<div class="card"><p class="empty">${all.length ? "Bugün tekrar edilecek kart yok. Maşallah!" : "Tekrar listen boş. Bir dersin sayfasından kartları ekleyerek başla."}</p></div>`;
    }

    const html = `
      <h1>Tekrar</h1>
      <p class="muted intro">Kartlar Leitner usulüyle tekrar edilir: bildiğin kart bir üst kutuya geçer ve daha seyrek gelir (1, 3, 7, 16, 35 gün). Bilemediğin kart başa döner.</p>
      ${main}
      <div class="card"><h3>Kutular</h3>
        <div class="boxes">${boxes.map((n, i) => `<div><b>${n}</b><small>${i === 0 ? "Yeni" : i + ". kutu"}</small></div>`).join("")}</div></div>
      <div class="card"><h3>Kart desteleri</h3><ul class="decks">${decks}</ul></div>`;

    const bind = () => {
      const g = (id) => document.getElementById(id);
      if (g("show")) { g("show").onclick = () => { session.shown = true; U().render(); }; g("show").focus(); }
      if (g("yes")) g("yes").onclick = () => { S.gradeCard(key, true); session.right++; session.queue.shift(); session.shown = false; U().render(); };
      if (g("no")) g("no").onclick = () => { S.gradeCard(key, false); session.wrong++; session.queue.push(session.queue.shift()); session.shown = false; U().render(); };
      document.querySelectorAll("[data-addall]").forEach((b) => b.onclick = () => {
        const cid = b.dataset.addall;
        S.addCards(D[cid].flatMap((l) => cardKeys(cid, l)));
        session = null; U().render();
      });
    };
    return { html, bind };
  }
  const resetSession = () => { session = null; quiz = null; };

  // ═════════════ HIFZ ═════════════
  const TOTAL = 604;
  const juzStart = (j) => (j === 1 ? 1 : 20 * (j - 1) + 2);
  const juzEnd = (j) => (j === 30 ? TOTAL : 20 * j + 1);
  const juzOf = (p) => (p <= 21 ? 1 : Math.min(30, Math.floor((p - 2) / 20) + 1));
  const STRENGTH = ["", "Zayıf", "Orta", "Sağlam"];
  const OLD = "0000-00-00"; // uygulamadan önce ezberlenmiş sayfalar

  function pageOrder() {
    const order = [];
    if (S.state.hifz.order === "sondan") {
      for (let j = 30; j >= 1; j--) for (let p = juzStart(j); p <= juzEnd(j); p++) order.push(p);
    } else for (let p = 1; p <= TOTAL; p++) order.push(p);
    return order;
  }

  function makePlan() {
    const h = S.state.hifz, today = S.todayStr();
    const mem = Object.keys(h.pages).map(Number).filter((p) => h.pages[p].m !== today);
    const yeni = pageOrder().filter((p) => !h.pages[p]).slice(0, h.newPerDay);
    const yakin = mem.filter((p) => h.pages[p].m !== OLD).sort((a, b) => (h.pages[b].m + String(b).padStart(3, "0")).localeCompare(h.pages[a].m + String(a).padStart(3, "0"))).slice(0, h.nearCount);
    const score = (p) => new Date(h.pages[p].r).getTime() - (3 - h.pages[p].s) * 5 * 864e5;
    const uzak = mem.filter((p) => !yakin.includes(p)).sort((a, b) => score(a) - score(b) || a - b).slice(0, h.farPerDay).sort((a, b) => a - b);
    S.setHifz({ plan: { date: today, yeni, yakin: yakin.sort((a, b) => a - b), uzak } });
  }

  let selPage = null;

  function hifz() {
    const h = S.state.hifz, today = S.todayStr();
    if (!h.plan || h.plan.date !== today) makePlan();
    const plan = S.state.hifz.plan;
    const memCount = Object.keys(h.pages).length;
    const isDone = (p, kind) => h.pages[p] && (kind === "yeni" ? h.pages[p].m === today : h.pages[p].r === today);
    const all = [...plan.yeni.map((p) => [p, "yeni"]), ...plan.yakin.map((p) => [p, "yakin"]), ...plan.uzak.map((p) => [p, "uzak"])];
    const doneN = all.filter(([p, k]) => isDone(p, k)).length;

    const item = (p, kind) => {
      const d = isDone(p, kind), pg = h.pages[p];
      return `<li class="${d ? "done" : ""}"><span><b>Sayfa ${p}</b> <small class="muted">${juzOf(p)}. cüz${pg && kind !== "yeni" ? ` · ${STRENGTH[pg.s]}` : ""}</small></span>
        ${kind === "yeni"
          ? (d ? `<small>✓ ezberlendi</small>` : `<button class="sm" data-mem="${p}">Ezberledim</button>`)
          : (d ? `<small>✓ ${STRENGTH[pg.s]}</small>` : `<span class="seg sm">${[1, 2, 3].map((s) => `<button data-rev="${p}" data-s="${s}">${STRENGTH[s]}</button>`).join("")}</span>`)}
      </li>`;
    };
    const list = (title, desc, arr, kind) => `<div class="card plan"><h3>${title} <small class="muted">${arr.length} sayfa</small></h3><p class="muted tiny">${desc}</p>
      ${arr.length ? `<ul>${arr.map((p) => item(p, kind)).join("")}</ul>` : `<p class="empty tiny">—</p>`}</div>`;

    const grid = Array.from({ length: 30 }, (_, i) => {
      const j = i + 1, pages = [];
      for (let p = juzStart(j); p <= juzEnd(j); p++) pages.push(p);
      const m = pages.filter((p) => h.pages[p]).length;
      return `<div class="juz"><span class="jn">${j}</span><div class="cells">${pages.map((p) =>
        `<i data-p="${p}" class="s${h.pages[p] ? h.pages[p].s : 0} ${selPage === p ? "sel" : ""}" title="Sayfa ${p}"></i>`).join("")}</div>
        <small class="muted">${m}/${pages.length}</small></div>`;
    }).join("");

    const sp = selPage && h.pages[selPage];
    const editor = selPage ? `<div class="card page-ed">
        <b>Sayfa ${selPage}</b> <small class="muted">${juzOf(selPage)}. cüz${sp ? ` · ezber: ${sp.m === OLD ? "önceden" : sp.m} · son tekrar: ${sp.r}` : ""}</small>
        <div class="btns">${[0, 1, 2, 3].map((s) => `<button class="${(sp ? sp.s : 0) === s ? "" : "ghost"} sm" data-set="${s}">${s ? STRENGTH[s] : "Ezberlenmedi"}</button>`).join("")}
        <button class="ghost sm" data-juz="${juzOf(selPage)}">${juzOf(selPage)}. cüzün tamamını “Orta” işaretle</button></div></div>` : "";

    const html = `
      <h1>Hıfz</h1>
      <section class="grid3">
        <div class="card stat"><small>Ezberlenen</small><b>${memCount} <span>/ ${TOTAL} sayfa</span></b>${U().bar(memCount / TOTAL)}</div>
        <div class="card stat"><small>Cüz karşılığı</small><b>${(memCount / 20).toFixed(1)} <span>cüz</span></b><p class="muted tiny">${memCount ? `Kalan: ${TOTAL - memCount} sayfa` : "Bismillah, ilk sayfayla başla."}</p></div>
        <div class="card stat"><small>Bugünkü plan</small><b>${doneN} <span>/ ${all.length}</span></b>${U().bar(all.length ? doneN / all.length : 0)}</div>
      </section>

      <div class="plan-grid">
        ${list("Yeni ezber", "Sıradaki sayfa(lar). Ezberleyip hocana/kendine dinlettikten sonra işaretle.", plan.yeni, "yeni")}
        ${list("Yakın tekrar", `Son ezberlenen ${h.nearCount} sayfa; her gün okunur.`, plan.yakin, "yakin")}
        ${list("Uzak tekrar", "En uzun süredir tekrar edilmeyen ve zayıf sayfalar öne alınır.", plan.uzak, "uzak")}
      </div>
      <div class="btns"><button class="ghost sm" id="replan">Planı yenile</button>
        <form id="hlog" class="qlog"><input name="m" type="number" min="1" max="600" value="45"> <span>dk</span><button class="sm">Hıfz çalışmasını günlüğe ekle</button></form></div>

      <h2 style="margin-top:28px">Mushaf haritası</h2>
      <p class="muted tiny">604 sayfalık (Medine / hafızlık) mushaf düzeni: 1. cüz 21, 30. cüz 23, diğerleri 20 sayfa. Daha önce ezberlediğin yerleri işaretlemek için bir sayfaya tıkla.</p>
      <div class="legend"><span><i class="s0"></i>Ezberlenmedi</span><span><i class="s1"></i>Zayıf</span><span><i class="s2"></i>Orta</span><span><i class="s3"></i>Sağlam</span></div>
      ${editor}
      <div class="mushaf">${grid}</div>

      <div class="card" style="margin-top:20px"><h3>Hıfz ayarları</h3>
        <form id="hset" class="hset">
          <label>Günlük yeni sayfa<input type="number" name="newPerDay" min="0" max="20" value="${h.newPerDay}"></label>
          <label>Yakın tekrar (sayfa)<input type="number" name="nearCount" min="0" max="60" value="${h.nearCount}"></label>
          <label>Uzak tekrar (sayfa/gün)<input type="number" name="farPerDay" min="0" max="200" value="${h.farPerDay}"></label>
          <label>Ezber sırası<select name="order">
            <option value="bastan" ${h.order === "bastan" ? "selected" : ""}>Baştan (1. cüzden)</option>
            <option value="sondan" ${h.order === "sondan" ? "selected" : ""}>Sondan (30. cüzden geriye)</option></select></label>
          <button>Kaydet</button>
        </form></div>`;

    const bind = () => {
      const set = (p, s) => {
        if (!s) return S.setPage(p, null);
        const old = h.pages[p];
        S.setPage(p, { s, m: old ? old.m : OLD, r: today });
      };
      document.querySelectorAll("[data-mem]").forEach((b) => b.onclick = () => { const p = +b.dataset.mem; S.setPage(p, { s: 2, m: today, r: today }); U().render(); });
      document.querySelectorAll("[data-rev]").forEach((b) => b.onclick = () => { const p = +b.dataset.rev; S.setPage(p, Object.assign({}, h.pages[p], { s: +b.dataset.s, r: today })); U().render(); });
      document.querySelectorAll(".cells i").forEach((c) => c.onclick = () => { selPage = +c.dataset.p; U().render(); });
      document.querySelectorAll("[data-set]").forEach((b) => b.onclick = () => { set(selPage, +b.dataset.set); U().render(); });
      document.querySelectorAll("[data-juz]").forEach((b) => b.onclick = () => {
        const j = +b.dataset.juz;
        for (let p = juzStart(j); p <= juzEnd(j); p++) if (!h.pages[p]) S.setPage(p, { s: 2, m: OLD, r: today });
        U().render();
      });
      document.getElementById("replan").onclick = () => { makePlan(); U().render(); };
      document.getElementById("hlog").onsubmit = (e) => { e.preventDefault(); S.addLog({ date: today, courseId: "hifz", minutes: +e.target.m.value, note: "" }); alert("Günlüğe eklendi."); };
      document.getElementById("hset").onsubmit = (e) => {
        e.preventDefault(); const f = e.target;
        S.setHifz({ newPerDay: +f.newPerDay.value, nearCount: +f.nearCount.value, farPerDay: +f.farPerDay.value, order: f.order.value });
        makePlan(); U().render();
      };
    };
    return { html, bind };
  }

  // ═════════════ ÇEKİM ARACI ═════════════
  let cekimState = { root: "نصر", bab: 1, hide: false };

  function cekim() {
    const Sf = window.Sarf;
    const bab = Sf.BABS.find((b) => b.n === cekimState.bab);
    const parsed = Sf.parseRoot(cekimState.root);
    const cell = (t) => `<td lang="ar" class="${cekimState.hide ? "hid" : ""}">${t}</td>`;

    let table = "";
    if (parsed.error) table = `<div class="notice">${parsed.error}</div>`;
    else {
      const r = Sf.conjugate(parsed.root, bab);
      table = `
        <div class="card"><div class="ism">
          <div><small class="muted">İsm-i fâil</small><b lang="ar">${r.ismiFail}</b></div>
          <div><small class="muted">İsm-i mef'ûl</small><b lang="ar">${r.ismiMeful}</b></div>
        </div>${bab.n === 5 ? `<p class="muted tiny">Not: 5. bab fiilleri lâzımdır; meçhul ve ism-i mef'ûl kalıpları teorik olarak gösterilmiştir. Bu babda ism-i fâil yerine genellikle sıfat-ı müşebbehe kullanılır (${"<span lang=ar>حَسَنٌ، كَرِيمٌ</span>"}).</p>` : ""}</div>
        <div class="tbl-wrap"><table class="cekim">
          <thead><tr><th>#</th><th>Sîga</th><th>Mâzî ma'lûm</th><th>Mâzî meçhul</th><th>Muzâri ma'lûm</th><th>Muzâri meçhul</th></tr></thead>
          <tbody>${Sf.SIGA.map(([ad, an], i) => `<tr><td>${i + 1}</td><td><b>${ad}</b><small class="muted">${an}</small></td>
            ${cell(r.maziMalum[i])}${cell(r.maziMechul[i])}${cell(r.muzariMalum[i])}${cell(r.muzariMechul[i])}</tr>`).join("")}</tbody>
        </table></div>
        <div class="tbl-wrap"><table class="cekim">
          <thead><tr><th>#</th><th>Sîga</th><th>Emr-i hâzır</th><th>Nehy-i hâzır</th></tr></thead>
          <tbody>${r.emir.map((e, i) => `<tr><td>${i + 7}</td><td><b>${Sf.SIGA[i + 6][0]}</b><small class="muted">${Sf.SIGA[i + 6][1]}</small></td>${cell(e)}${cell(r.nehy[i])}</tr>`).join("")}</tbody>
        </table></div>`;
    }

    const html = `
      <a class="back" href="#/ders/k-sarf">← Sarf</a>
      <h1>Çekim Aracı <span lang="ar" class="muted">تصريف</span></h1>
      <p class="muted intro">Sülâsî mücerred, sâlim bir kök gir ve babını seç. Araç 14 sîgayı mâzî, muzâri (ma'lûm/meçhul), emir ve nehiy olarak çeker. Mehmûz, muzâaf ve mu'tel kökler sonraki sürümlerde eklenecek.</p>
      <div class="card cekim-form">
        <label>Kök (3 harf)<input id="root" lang="ar" dir="rtl" value="${U().esc(cekimState.root)}" maxlength="12" autocomplete="off"></label>
        <div class="babs">${Sf.BABS.map((b) => `<button class="${b.n === cekimState.bab ? "" : "ghost"}" data-bab="${b.n}"><small>${b.n}. bab</small> <span lang="ar">${b.ad}</span></button>`).join("")}</div>
        <div class="btns"><small class="muted">Örnek kökler:</small>
          ${[["كتب", 1], ["دخل", 1], ["جلس", 2], ["ذهب", 3], ["شرب", 4], ["كرم", 5]].map(([k, b]) => `<button class="ghost sm" data-ex="${k}" data-b="${b}" lang="ar">${k}</button>`).join("")}
          <label class="check"><input type="checkbox" id="hide" ${cekimState.hide ? "checked" : ""}> Ezber modu (hücreleri gizle)</label></div>
      </div>
      ${table}`;

    const bind = () => {
      const root = document.getElementById("root");
      root.oninput = () => { cekimState.root = root.value; const pos = root.selectionStart; U().render(); const n = document.getElementById("root"); n.focus(); n.setSelectionRange(pos, pos); };
      document.querySelectorAll("[data-bab]").forEach((b) => b.onclick = () => { cekimState.bab = +b.dataset.bab; U().render(); });
      document.querySelectorAll("[data-ex]").forEach((b) => b.onclick = () => { cekimState.root = b.dataset.ex; cekimState.bab = +b.dataset.b; U().render(); });
      document.getElementById("hide").onchange = (e) => { cekimState.hide = e.target.checked; U().render(); };
      document.querySelectorAll("td.hid").forEach((td) => td.onclick = () => td.classList.remove("hid"));
    };
    return { html, bind };
  }

  window.Views = { lessonsBlock, lesson, sinav, tekrar, resetSession, hifz, cekim };
})();
