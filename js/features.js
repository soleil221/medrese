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
    if (cid === "tahlil") {
      const t = (window.TAHLIL || {})[+lid], a = t && t.ayetler.find((x) => String(x.n) === i);
      const ad = ((window.AMME || []).find((s) => s.no === +lid) || {}).ad;
      return a ? { cid, lid, metin: true, lesson: { title: `${ad} ${a.n}` }, front: `<span lang="ar">${a.ar}</span>`, back: a.tr } : null;
    }
    if (cid === "metin") {
      const t = (window.METINLER || []).find((x) => x.id === lid);
      const r = t && t.satirlar && t.satirlar.find((x) => String(x.no) === i);
      return r ? { cid, lid, metin: true, lesson: { title: `${t.title} · ${r.baslik || r.no}` }, front: `<span lang="ar">${r.ar}</span>`, back: r.tr } : null;
    }
    const l = lessonOf(cid, lid);
    return l && l.cards[+i] ? { cid, lid, lesson: l, front: l.cards[+i][0], back: l.cards[+i][1] } : null;
  };
  const stripTags = (h) => h.replace(/<[^>]+>/g, "");
  // Düz metindeki Arapça parçaları yön yalıtımlı span'e alır (önce HTML kaçışı yapılır)
  const arWrap = (t) => U().esc(t).replace(/([\u0600-\u06FF][\u0600-\u06FF\u064B-\u0652 ]*[\u0600-\u06FF\u064B-\u0652])|([\u0600-\u06FF])/g, '<span lang="ar">$&</span>');

  // ═════════════ ÇEKİM TABLOLARI (ders içinde) ═════════════
  function miniTable(root, babN) {
    const Sf = window.Sarf, an = Sf.analyze(root), bab = Sf.BABS[babN - 1];
    if (an.error) return "";
    const out = Sf.conjugate(an, bab);
    if (out.error) return "";
    const r = out.r;
    return `<div class="tbl-wrap mini">
      <div class="mini-h"><b lang="ar">${r.maziMalum[0]} ${r.muzariMalum[0]}</b>
        <small class="muted">${an.label} · ${babN}. bab</small>
        <a href="#/cekim/${root}/${babN}">Tam çekim →</a></div>
      <table class="cekim"><thead><tr><th>Sîga</th><th>Mâzî</th><th>Muzâri</th><th>Emir</th></tr></thead>
      <tbody>${Sf.SIGA.map(([ad], i) => `<tr><td><small>${ad}</small></td><td lang="ar">${r.maziMalum[i]}</td><td lang="ar">${r.muzariMalum[i]}</td><td lang="ar">${i >= 6 && i < 12 ? r.emir[i - 6] : ""}</td></tr>`).join("")}</tbody></table></div>`;
  }
  function emsileTable(root, babN) {
    const Sf = window.Sarf, rows = Sf.emsile(Sf.analyze(root), Sf.BABS[babN - 1]);
    if (!rows) return "";
    return `<div class="tbl-wrap"><table class="cekim emsile"><tbody>${rows.map((x) =>
      `<tr><td><b>${x.ad}</b>${x.tr ? `<small class="muted">${x.tr}</small>` : ""}</td><td lang="ar">${x.ar}</td></tr>`).join("")}</tbody></table></div>`;
  }
  function metinBlock(id, key) {
    const t = (window.METINLER || []).find((x) => x.id === id);
    if (!t) return "";
    const rows = t.satirlar.filter((r) => r.ders === key);
    return `<div class="metin metin-inline">${rows.map((r) => `<div class="mrow">
      <div class="mhead"><a href="#/metin/${id}"><b>${U().esc(t.title)}</b></a> <small class="muted">§${t.satirlar.indexOf(r) + 1} · ${U().esc(r.baslik)}${r.ozet ? " · özet" : ""}</small></div>
      <div class="mar" lang="ar">${r.ar}</div><div class="mtr">${U().esc(r.tr)}</div></div>`).join("")}</div>`;
  }
  const renderTokens = (html) => html
    .replace(/\{\{(tablo|emsile):([^:}]+):(\d)\}\}/g, (_, kind, root, bab) => (kind === "emsile" ? emsileTable(root, +bab) : miniTable(root, +bab)))
    .replace(/\{\{metin:([^:}]+):([^:}]+)\}\}/g, (_, id, key) => metinBlock(id, key));

  function exercisesBlock(l) {
    if (!l.exercises) return "";
    const roles = window.IRAB_ROLLER.map(([g, rs]) => `<optgroup label="${g}">${rs.map((r) => `<option>${r}</option>`).join("")}</optgroup>`).join("");
    return `<section class="card"><h3>İ'râb alıştırması</h3>
      <p class="muted tiny">Her kelimenin cümledeki görevini seç, sonra “Kontrol et”e bas.</p>
      ${l.exercises.map((ex, ei) => `<div class="ex" data-ex="${ei}">
        <p class="ar-block" lang="ar">${ex.ar}</p>
        <div class="ex-words">${ex.words.map(([w], wi) => `<div class="exw"><b lang="ar">${w}</b>
          <select data-w="${wi}"><option value="">— seç —</option>${roles}</select><small class="exr"></small></div>`).join("")}</div>
        <button class="sm" data-check="${ei}">Kontrol et</button> <small class="ex-score"></small>
      </div>`).join("")}</section>`;
  }
  function bindExercises(l) {
    document.querySelectorAll("[data-check]").forEach((b) => b.onclick = () => {
      const ei = +b.dataset.check, ex = l.exercises[ei], box = document.querySelector(`.ex[data-ex="${ei}"]`);
      let ok = 0;
      box.querySelectorAll("select").forEach((sel) => {
        const [, role, irab] = ex.words[+sel.dataset.w];
        const res = sel.parentElement.querySelector(".exr"), right = sel.value === role;
        if (right) ok++;
        sel.parentElement.className = "exw " + (right ? "ok" : "bad");
        res.textContent = right ? "✓ " + irab : "✗ Doğrusu: " + role + " — " + irab;
      });
      box.querySelector(".ex-score").textContent = `${ok} / ${ex.words.length} doğru`;
    });
  }

  // ═════════════ TECVİD: ÖRNEK ÂYETLER VE SES ═════════════
  function ayetBlock(cid, l) {
    if (!l.ayetler || !window.Ses) return "";
    const Ses = window.Ses, kari = Ses.getKari();
    return `<section class="card ayetler">
      <div class="row-head"><h3>Örnek âyetler: dinle ve oku</h3>
        <label class="kari">Kârî <select id="kari">${Ses.KARILER.map((k) => `<option value="${k.id}" ${k.id === kari ? "selected" : ""}>${k.ad}</option>`).join("")}</select></label></div>
      <p class="muted tiny">Önce kârîyi dinle, sonra kendi okuyuşunu kaydedip karşılaştır. Kârî sesleri internetten (everyayah.com) gelir; kayıtların yalnızca bu cihazda saklanır.</p>
      <ul>${l.ayetler.map(([kural, ar, sure, ayet, sad], i) => `
        <li data-i="${i}">
          <div class="ay-top"><b>${U().esc(kural)}</b> <small class="muted">${sad} ${ayet} (${sure}:${ayet})</small></div>
          <div class="ay-ar" lang="ar">${ar}</div>
          <div class="btns">
            <button class="sm" data-dinle="${i}">▶ Kârîyi dinle</button>
            <button class="sm alt" data-kaydet="${i}">● Kaydet</button>
            <button class="sm ghost" data-benim="${i}" disabled>▶ Kaydımı dinle</button>
            <button class="sm ghost" data-sil="${i}" hidden>Kaydı sil</button>
            <small class="ay-msg muted"></small>
          </div>
        </li>`).join("")}</ul>
    </section>`;
  }
  function bindAyetler(cid, l) {
    if (!l.ayetler || !window.Ses) return;
    const Ses = window.Ses, key = (i) => `${cid}/${l.id}/${i}`;
    const msg = (i, t) => { const e = document.querySelector(`li[data-i="${i}"] .ay-msg`); if (e) e.textContent = t; };
    const refresh = async (i) => {
      const has = !!(await Ses.get(key(i)));
      const b = document.querySelector(`[data-benim="${i}"]`), d = document.querySelector(`[data-sil="${i}"]`);
      if (b) b.disabled = !has;
      if (d) d.hidden = !has;
    };
    l.ayetler.forEach((_, i) => refresh(i));
    const sel = document.getElementById("kari");
    if (sel) sel.onchange = () => Ses.setKari(sel.value);
    document.querySelectorAll("[data-dinle]").forEach((b) => b.onclick = () => {
      const i = +b.dataset.dinle, [, , sure, ayet] = l.ayetler[i];
      msg(i, "Yükleniyor…");
      Ses.play(Ses.url(Ses.getKari(), sure, ayet), () => msg(i, ""))
        .then(() => msg(i, "Çalıyor…"))
        .catch(() => msg(i, "Ses yüklenemedi. İnternet bağlantını kontrol et veya başka bir kârî seç."));
    });
    if (!Ses.supported()) document.querySelectorAll("[data-kaydet]").forEach((b) => { b.disabled = true; b.title = "Bu tarayıcı ses kaydını desteklemiyor"; });
    let rec = null;
    document.querySelectorAll("[data-kaydet]").forEach((b) => b.onclick = async () => {
      const i = +b.dataset.kaydet;
      if (rec) {
        const r = rec; rec = null;
        await r.stop();
        b.textContent = "● Kaydet"; b.classList.remove("danger");
        msg(i, "Kaydedildi.");
        refresh(i);
        return;
      }
      try {
        Ses.stop();
        rec = await Ses.startRecording(key(i));
        b.textContent = "■ Durdur"; b.classList.add("danger");
        msg(i, "Kaydediliyor… okumayı bitirince Durdur'a bas.");
      } catch (e) { msg(i, "Mikrofona erişilemedi: izin vermen gerekiyor."); }
    });
    document.querySelectorAll("[data-benim]").forEach((b) => b.onclick = async () => {
      const i = +b.dataset.benim, blob = await Ses.get(key(i));
      if (!blob) return;
      const u = URL.createObjectURL(blob);
      Ses.play(u, () => { URL.revokeObjectURL(u); msg(i, ""); }).then(() => msg(i, "Kaydın çalıyor…"));
    });
    document.querySelectorAll("[data-sil]").forEach((b) => b.onclick = async () => {
      const i = +b.dataset.sil;
      await Ses.del(key(i)); msg(i, "Kayıt silindi."); refresh(i);
    });
  }

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
        <div class="prose">${renderTokens(l.body)}</div>
        ${ayetBlock(cid, l)}
        ${exercisesBlock(l)}

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
      bindExercises(l);
      bindAyetler(cid, l);
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
    }).join("") + (window.METINLER || []).filter((t) => t.satirlar).map((t) => {
      const keys = t.satirlar.map((r) => `metin/${t.id}/${r.no}`);
      const inDeck = keys.filter((k) => S.card(k)).length, d = due.filter((k) => keys.includes(k)).length;
      return `<li><a href="#/metin/${t.id}">${U().esc(t.title)}</a>
        <small class="muted">${inDeck}/${keys.length} kart${d ? ` · <b>${d} bekliyor</b>` : ""}</small>
        ${inDeck < keys.length ? `<button class="ghost sm" data-addmetin="${t.id}">Tümünü ekle</button>` : ""}</li>`;
    }).join("");

    const boxes = [0, 1, 2, 3, 4, 5].map((b) => all.filter((k) => S.state.cards[k].box === b).length);
    const key = session.queue[0];
    const card = key && cardByKey(key);

    let main;
    if (card) {
      main = `<div class="flash card">
        <small class="muted">${card.metin ? "Metinler" : U().esc(U().BY_ID[card.cid].title)} · ${U().esc(card.lesson.title)} · kalan ${session.queue.length}</small>
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
      document.querySelectorAll("[data-addmetin]").forEach((b) => b.onclick = () => {
        const t = window.METINLER.find((x) => x.id === b.dataset.addmetin);
        S.addCards(t.satirlar.map((r) => `metin/${t.id}/${r.no}`));
        session = null; U().render();
      });
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
    const h = S.state.hifz, today = S.todayStr(), prev = h.plan;
    const mem = Object.keys(h.pages).map(Number).filter((p) => h.pages[p].m !== today);
    const yeni = pageOrder().filter((p) => !h.pages[p]).slice(0, h.newPerDay);
    const yakin = mem.filter((p) => h.pages[p].m !== OLD)
      .sort((a, b) => (h.pages[b].m + String(b).padStart(3, "0")).localeCompare(h.pages[a].m + String(a).padStart(3, "0")))
      .slice(0, h.nearCount);
    const rest = mem.filter((p) => !yakin.includes(p));
    let uzak, cuz = null, cuzPrev = null;
    if (h.farMode === "cuz") {
      // Her gün sıradaki ezberli cüzün tamamı; aynı gün yeniden planlanırsa cüz değişmez
      cuzPrev = prev && prev.date === today ? prev.cuzPrev : prev ? prev.cuz : 0;
      const juzler = [...new Set(rest.map(juzOf))].sort((a, b) => a - b);
      cuz = juzler.find((j) => j > (cuzPrev || 0)) || juzler[0] || null;
      uzak = cuz ? rest.filter((p) => juzOf(p) === cuz).sort((a, b) => a - b) : [];
    } else {
      const score = (p) => new Date(h.pages[p].r).getTime() - (3 - h.pages[p].s) * 5 * 864e5;
      uzak = rest.sort((a, b) => score(a) - score(b) || a - b).slice(0, h.farPerDay).sort((a, b) => a - b);
    }
    S.setHifz({ plan: { date: today, yeni, yakin: yakin.sort((a, b) => a - b), uzak, cuz, cuzPrev } });
  }

  let selPage = null;

  function hifz() {
    const h = S.state.hifz, today = S.todayStr(), esc = U().esc;
    if (!h.plan || h.plan.date !== today) makePlan();
    const plan = S.state.hifz.plan;
    const memCount = Object.keys(h.pages).length;
    const isDone = (p, kind) => h.pages[p] && (kind === "yeni" ? h.pages[p].m === today : h.pages[p].r === today);
    const all = [...plan.yeni.map((p) => [p, "yeni"]), ...plan.yakin.map((p) => [p, "yakin"]), ...plan.uzak.map((p) => [p, "uzak"])];
    const doneN = all.filter(([p, k]) => isDone(p, k)).length;

    const item = (p, kind) => {
      const d = isDone(p, kind), pg = h.pages[p];
      return `<li class="${d ? "done" : ""}"><span><b>Sayfa ${p}</b> <small class="muted">${esc(window.sureOfPage(p).ad)} · ${juzOf(p)}. cüz${pg && kind !== "yeni" ? ` · ${STRENGTH[pg.s]}` : ""}</small></span>
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
      return `<div class="juz"><span class="jn"><b>${j}</b> <small>${esc(window.sureOfPage(juzStart(j)).ad)}</small></span><div class="cells">${pages.map((p) =>
        `<i data-p="${p}" class="s${h.pages[p] ? h.pages[p].s : 0} ${selPage === p ? "sel" : ""} ${window.surelerStartingOn(p).length ? "sb" : ""}" title="Sayfa ${p} · ${esc(window.sureOfPage(p).ad)}"></i>`).join("")}</div>
        <small class="muted">${m}/${pages.length}</small></div>`;
    }).join("");

    const sp = selPage && h.pages[selPage];
    const starting = selPage ? window.surelerStartingOn(selPage) : [];
    const editor = selPage ? `<div class="card page-ed">
        <b>Sayfa ${selPage}</b> <small class="muted">${esc(window.sureOfPage(selPage).ad)} · ${juzOf(selPage)}. cüz${starting.length ? ` · bu sayfada başlayan: ${starting.map((s) => esc(s.ad)).join(", ")}` : ""}${sp ? ` · ezber: ${sp.m === OLD ? "önceden" : sp.m} · son tekrar: ${sp.r}` : ""}</small>
        <div class="btns">${[0, 1, 2, 3].map((s) => `<button class="${(sp ? sp.s : 0) === s ? "" : "ghost"} sm" data-set="${s}">${s ? STRENGTH[s] : "Ezberlenmedi"}</button>`).join("")}</div></div>` : "";

    const farTitle = h.farMode === "cuz" ? `Uzak tekrar${plan.cuz ? ` — ${plan.cuz}. cüz` : ""}` : "Uzak tekrar";
    const farDesc = h.farMode === "cuz" ? "Cüz usulü: her gün ezberli cüzlerden sıradakinin tamamı okunur." : "En uzun süredir tekrar edilmeyen ve zayıf sayfalar öne alınır.";

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
        ${list(farTitle, farDesc, plan.uzak, "uzak")}
      </div>
      <div class="btns"><button class="ghost sm" id="replan">Planı yenile</button>
        <form id="hlog" class="qlog"><input name="m" type="number" min="1" max="600" value="45"> <span>dk</span><button class="sm">Hıfz çalışmasını günlüğe ekle</button></form></div>

      <h2 style="margin-top:28px">Mushaf haritası</h2>
      <p class="muted tiny">604 sayfalık Medine mushafı düzeni (1. cüz 21, 30. cüz 23, diğerleri 20 sayfa). Altı çizgili hücrelerde yeni bir sure başlar. Daha önce ezberlediğin yerleri işaretlemek için bir sayfaya tıkla ya da toplu işaretlemeyi kullan.</p>
      <div class="card bulk">
        <label>Sure <select id="bulk-sure">${window.SURELER.map((s) => `<option value="${s.no}">${s.no}. ${esc(s.ad)} (s. ${s.sayfa})</option>`).join("")}</select></label>
        <button class="sm" id="bulk-sure-go">Sureyi “Orta” işaretle</button>
        <label>Cüz <select id="bulk-juz">${Array.from({ length: 30 }, (_, i) => `<option>${i + 1}</option>`).join("")}</select></label>
        <button class="sm" id="bulk-juz-go">Cüzü “Orta” işaretle</button>
        <small class="muted">Yalnızca işaretsiz sayfalar “önceden ezberlendi” olarak eklenir. Sure sınırındaki sayfayı iki sure paylaşabilir.</small>
      </div>
      <div class="legend"><span><i class="s0"></i>Ezberlenmedi</span><span><i class="s1"></i>Zayıf</span><span><i class="s2"></i>Orta</span><span><i class="s3"></i>Sağlam</span></div>
      ${editor}
      <div class="mushaf">${grid}</div>

      <div class="card" style="margin-top:20px"><h3>Hıfz ayarları</h3>
        <form id="hset" class="hset">
          <label>Günlük yeni sayfa<input type="number" name="newPerDay" min="0" max="20" value="${h.newPerDay}"></label>
          <label>Yakın tekrar (sayfa)<input type="number" name="nearCount" min="0" max="60" value="${h.nearCount}"></label>
          <label>Uzak tekrar usulü<select name="farMode">
            <option value="sayfa" ${h.farMode !== "cuz" ? "selected" : ""}>Sayfa usulü (en eski önce)</option>
            <option value="cuz" ${h.farMode === "cuz" ? "selected" : ""}>Cüz usulü (her gün sıradaki cüz)</option></select></label>
          <label>Uzak tekrar (sayfa/gün)<input type="number" name="farPerDay" min="0" max="200" value="${h.farPerDay}" ${h.farMode === "cuz" ? "disabled" : ""}></label>
          <label>Ezber sırası<select name="order">
            <option value="bastan" ${h.order === "bastan" ? "selected" : ""}>Baştan (1. cüzden)</option>
            <option value="sondan" ${h.order === "sondan" ? "selected" : ""}>Sondan (30. cüzden geriye)</option></select></label>
          <button>Kaydet</button>
        </form></div>`;

    const bind = () => {
      const markOld = (pages) => { pages.forEach((p) => { if (!h.pages[p]) S.setPage(p, { s: 2, m: OLD, r: today }); }); makePlan(); U().render(); };
      document.querySelectorAll("[data-mem]").forEach((b) => b.onclick = () => { S.setPage(+b.dataset.mem, { s: 2, m: today, r: today }); S.logHifz("yeni"); U().render(); });
      document.querySelectorAll("[data-rev]").forEach((b) => b.onclick = () => { const p = +b.dataset.rev; S.setPage(p, Object.assign({}, h.pages[p], { s: +b.dataset.s, r: today })); S.logHifz("tekrar"); U().render(); });
      document.querySelectorAll(".cells i").forEach((c) => c.onclick = () => { selPage = +c.dataset.p; U().render(); });
      document.querySelectorAll("[data-set]").forEach((b) => b.onclick = () => {
        const s = +b.dataset.set, old = h.pages[selPage];
        S.setPage(selPage, s ? { s, m: old ? old.m : OLD, r: today } : null);
        U().render();
      });
      document.getElementById("bulk-sure-go").onclick = () => markOld(window.surePages(+document.getElementById("bulk-sure").value));
      document.getElementById("bulk-juz-go").onclick = () => {
        const j = +document.getElementById("bulk-juz").value, ps = [];
        for (let p = juzStart(j); p <= juzEnd(j); p++) ps.push(p);
        markOld(ps);
      };
      document.getElementById("replan").onclick = () => { makePlan(); U().render(); };
      document.getElementById("hlog").onsubmit = (e) => { e.preventDefault(); S.addLog({ date: today, courseId: "hifz", minutes: +e.target.m.value, note: "" }); alert("Günlüğe eklendi."); };
      document.getElementById("hset").onsubmit = (e) => {
        e.preventDefault(); const f = e.target;
        S.setHifz({ newPerDay: +f.newPerDay.value, nearCount: +f.nearCount.value, farPerDay: +(f.farPerDay.value || h.farPerDay), order: f.order.value, farMode: f.farMode.value });
        makePlan(); U().render();
      };
    };
    return { html, bind };
  }

  // ═════════════ ÇEKİM ARACI ═════════════
  const cekimState = { root: "نصر", mode: "mucerred", bab: 1, mezid: "ifal", rubai: "rubai", hide: false, applied: "" };
  const RUBAI_ORNEK = [["دحرج", "rubai"], ["زلزل", "rubai"], ["ترجم", "rubai"], ["وسوس", "rubai"], ["دحرج", "tefallul"], ["حرجم", "ifinlal"], ["قشعر", "ifillal"], ["طمأن", "ifillal"]];
  const ORNEKLER = [
    ["Sâlim", [["كتب", 1], ["جلس", 2], ["ذهب", 3], ["شرب", 4], ["كرم", 5]]],
    ["Mehmûz", [["أكل", 1], ["سأل", 3], ["قرأ", 3]]],
    ["Muzâaf", [["مدد", 1], ["فرر", 2]]],
    ["Misâl", [["وعد", 2], ["وجل", 4]]],
    ["Ecvef", [["قول", 1], ["بيع", 2], ["خوف", 4]]],
    ["Nâkıs", [["دعو", 1], ["رمي", 2], ["سعي", 3], ["رضي", 4]]],
    ["Lefîf", [["وقي", 2], ["ولي", 6], ["طوي", 2]]],
    ["Birleşik", [["أتي", 2], ["جيء", 2], ["أمم", 1]]]
  ];
  const MEZID_ORNEK = [
    ["Sâlim", null],
    ["Mehmûz", [["أمن", "ifal"], ["أخذ", "iftial"]]],
    ["Muzâaf", [["حبب", "ifal"], ["مدد", "istifal"], ["حجج", "mufaale"]]],
    ["Misâl", [["وجد", "ifal"], ["وصل", "iftial"]]],
    ["Ecvef", [["قوم", "ifal"], ["قوم", "istifal"], ["خير", "iftial"], ["قود", "infial"]]],
    ["Nâkıs", [["عطو", "ifal"], ["سمي", "tefil"], ["ندو", "mufaale"], ["شري", "iftial"], ["لقي", "tefaul_"], ["علو", "tefaul"]]],
    ["Lefîf", [["وقي", "iftial"], ["وصي", "ifal"], ["حيي", "ifal"]]]
  ];

  // #/cekim/KÖK/BAB  veya  #/cekim/KÖK/mezîd-anahtarı
  function applyParams(root, b) {
    const key = `${root}/${b}`;
    if (!root || cekimState.applied === key) return;
    cekimState.applied = key;
    cekimState.root = root;
    if (/^\d$/.test(b)) { cekimState.bab = +b; cekimState.mode = "mucerred"; }
    else if (window.Sarf.MEZID.some((m) => m.k === b)) { cekimState.mezid = b; cekimState.mode = "mezid"; }
    else if (window.Sarf.RUBAI.some((m) => m.k === b)) { cekimState.rubai = b; cekimState.mode = "rubai"; }
  }

  function cekim(root, b) {
    applyParams(root, b);
    const Sf = window.Sarf, st = cekimState, esc = U().esc;
    const an = st.mode === "rubai" ? Sf.analyzeRubai(st.root) : Sf.analyze(st.root);
    const cell = (t) => `<td lang="ar" class="${st.hide ? "hid" : ""}">${t == null ? "—" : t}</td>`;

    let out = null, content = "";
    if (an.error) content = `<div class="notice">${an.error}</div>`;
    else if (st.mode === "emsile") {
      const rows = Sf.emsile(an, Sf.BABS[st.bab - 1]);
      content = rows ? `<div class="tbl-wrap"><table class="cekim emsile"><tbody>${rows.map((x) =>
        `<tr><td><b>${x.ad}</b>${x.tr ? `<small class="muted">${x.tr}</small>` : ""}</td>${cell(x.ar)}</tr>`).join("")}</tbody></table></div>`
        : `<div class="notice">Emsile-i muhtelife şimdilik yalnız sâlim kökler için üretilir. Bu kök: ${an.label}.</div>`;
    } else {
      out = st.mode === "mezid" ? Sf.mezid(an, st.mezid) : st.mode === "rubai" ? Sf.rubai(an, st.rubai) : Sf.conjugate(an, Sf.BABS[st.bab - 1]);
      if (out.error) content = `<div class="notice">${out.error}</div>`;
      else {
        const r = out.r;
        content = `
          ${out.notes && out.notes.length ? `<div class="tip">${out.notes.map(arWrap).join("<br>")}</div>` : ""}
          <div class="card"><div class="ism">
            ${r.masdar ? `<div><small class="muted">Masdar</small><b lang="ar">${r.masdar}</b></div>` : ""}
            <div><small class="muted">İsm-i fâil</small><b lang="ar">${r.ismiFail}</b></div>
            <div><small class="muted">İsm-i mef'ûl</small><b lang="ar">${r.ismiMeful || "—"}</b></div>
          </div></div>
          <div class="tbl-wrap"><table class="cekim">
            <thead><tr><th>#</th><th>Sîga</th><th>Mâzî ma'lûm</th><th>Mâzî meçhul</th><th>Muzâri ma'lûm</th><th>Muzâri meçhul</th></tr></thead>
            <tbody>${Sf.SIGA.map(([ad, anl], i) => `<tr><td>${i + 1}</td><td><b>${ad}</b><small class="muted">${anl}</small></td>
              ${cell(r.maziMalum[i])}${cell(r.maziMechul && r.maziMechul[i])}${cell(r.muzariMalum[i])}${cell(r.muzariMechul && r.muzariMechul[i])}</tr>`).join("")}</tbody>
          </table></div>
          <div class="tbl-wrap"><table class="cekim">
            <thead><tr><th>#</th><th>Sîga</th><th>Emr-i hâzır</th><th>Nehy-i hâzır</th></tr></thead>
            <tbody>${r.emir.map((e, i) => `<tr><td>${i + 7}</td><td><b>${Sf.SIGA[i + 6][0]}</b><small class="muted">${Sf.SIGA[i + 6][1]}</small></td>${cell(e)}${cell(r.nehy[i])}</tr>`).join("")}</tbody>
          </table></div>`;
      }
    }

    const babButtons = st.mode === "rubai"
      ? Sf.RUBAI.map((m) => `<button class="${m.k === st.rubai ? "" : "ghost"}" data-rb="${m.k}" title="${esc(m.anlam)}"><small>${m.ad}</small> <span lang="ar">${m.mazi.replace(/F/g, "ف").replace(/A/g, "ع").replace(/L/g, "ل").replace(/M/g, "ل")}${"\u064E"}</span></button>`).join("")
      : st.mode === "mezid"
      ? Sf.MEZID.map((m) => `<button class="${m.k === st.mezid ? "" : "ghost"}" data-mz="${m.k}" title="${esc(m.anlam)}"><small>${m.ad}</small> <span lang="ar">${m.mazi.replace(/F/g, "ف").replace(/A/g, "ع").replace(/L/g, "ل").replace(/T/g, "ت")}${"َ"}</span></button>`).join("")
      : Sf.BABS.map((x) => `<button class="${x.n === st.bab ? "" : "ghost"}" data-bab="${x.n}"><small>${x.n}. bab</small> <span lang="ar">${x.ad}</span></button>`).join("");
    const mz = st.mode === "rubai" ? Sf.RUBAI.find((m) => m.k === st.rubai) : Sf.MEZID.find((m) => m.k === st.mezid);
    const examples = st.mode === "rubai"
      ? RUBAI_ORNEK.map(([k, rk]) => `<button class="ghost sm" data-ex="${k}" data-rbk="${rk}"><span lang="ar">${k}</span> <small>${Sf.RUBAI.find((m) => m.k === rk).ad}</small></button>`).join("")
      : st.mode === "mezid"
      ? MEZID_ORNEK.map(([grp, xs]) => `<span class="exg"><small class="muted">${grp}:</small> ${(xs || Sf.MEZID.map((m) => [m.ornek, m.k]))
          .map(([k, mk]) => `<button class="ghost sm" data-ex="${k}" data-mzk="${mk}"><span lang="ar">${k}</span> <small>${xs ? Sf.MEZID.find((m) => m.k === mk).ad : ""}</small></button>`).join("")}</span>`).join("")
      : ORNEKLER.map(([grp, xs]) => `<span class="exg"><small class="muted">${grp}:</small> ${xs.map(([k, n]) => `<button class="ghost sm" data-ex="${k}" data-b="${n}" lang="ar">${k}</button>`).join("")}</span>`).join("");

    const html = `
      <a class="back" href="#/ders/k-sarf">← Sarf</a>
      <h1>Çekim Aracı <span lang="ar" class="muted">تصريف</span></h1>
      <p class="muted intro">Üç harfli kökü gir. İlletli fiillerde kökün aslını yaz: <span lang="ar">قال</span> → <span lang="ar">قول</span>, <span lang="ar">دعا</span> → <span lang="ar">دعو</span>. Sâlim, mehmûz, muzâaf, misâl, ecvef, nâkıs ve lefîf fiiller hem sülâsî mücerredde hem 8 mezîd babında; dört harfli fiiller de “Rubâî” sekmesinde 4 babta çekilir.</p>
      <div class="tabs">${[["mucerred", "Sülâsî mücerred"], ["mezid", "Sülâsî mezîd"], ["rubai", "Rubâî"], ["emsile", "Emsile-i muhtelife"]].map(([k, t]) => `<a href="javascript:void 0" data-mode="${k}" class="${st.mode === k ? "on" : ""}">${t}</a>`).join("")}</div>
      <div class="card cekim-form">
        <div class="root-row"><label>Kök (${st.mode === "rubai" ? 4 : 3} harf)<input id="root" lang="ar" dir="rtl" value="${esc(st.root)}" maxlength="12" autocomplete="off"></label>
          ${an.error ? "" : `<span class="tag klasik">${an.label}</span>`}
          ${(st.mode === "mezid" || st.mode === "rubai") && mz ? `<small class="muted">${mz.ad}: ${esc(mz.anlam)}</small>` : ""}</div>
        <div class="babs">${babButtons}</div>
        <div class="btns exs"><small class="muted">Örnekler:</small> ${examples}</div>
        <label class="check"><input type="checkbox" id="hide" ${st.hide ? "checked" : ""}> Ezber modu (hücreleri gizle, tıklayınca açılır)</label>
      </div>
      ${content}`;

    const bind = () => {
      const rootEl = document.getElementById("root");
      rootEl.oninput = () => { st.root = rootEl.value; const pos = rootEl.selectionStart; U().render(); const n = document.getElementById("root"); n.focus(); n.setSelectionRange(pos, pos); };
      document.querySelectorAll("[data-mode]").forEach((a) => a.onclick = (e) => {
        e.preventDefault();
        st.mode = a.dataset.mode;
        const n = [...st.root.replace(/[\u064B-\u0652\s]/g, "")].length;
        if (st.mode === "rubai" && n !== 4) st.root = "دحرج";
        if (st.mode !== "rubai" && n === 4) st.root = "نصر";
        U().render();
      });
      document.querySelectorAll("[data-bab]").forEach((x) => x.onclick = () => { st.bab = +x.dataset.bab; U().render(); });
      document.querySelectorAll("[data-mz]").forEach((x) => x.onclick = () => { st.mezid = x.dataset.mz; U().render(); });
      document.querySelectorAll("[data-rb]").forEach((x) => x.onclick = () => { st.rubai = x.dataset.rb; U().render(); });
      document.querySelectorAll("[data-ex]").forEach((x) => x.onclick = () => {
        st.root = x.dataset.ex;
        if (x.dataset.rbk) st.rubai = x.dataset.rbk; else if (x.dataset.mzk) st.mezid = x.dataset.mzk; else st.bab = +x.dataset.b;
        U().render();
      });
      document.getElementById("hide").onchange = (e) => { st.hide = e.target.checked; U().render(); };
      document.querySelectorAll("td.hid").forEach((td) => td.onclick = () => td.classList.remove("hid"));
    };
    return { html, bind };
  }

  // ═════════════ METİNLER ═════════════
  const metinState = { hideTr: false, hideHarake: false };
  const HARAKE = /[ً-ْٰ]/g;

  function metinler() {
    const esc = U().esc;
    const html = `
      <h1>Metinler</h1>
      <p class="muted intro">Arapça metinler ve Türkçe tercümeleri yan yana. Tercümeyi veya harekeleri gizleyerek okuma pratiği yapabilirsin.</p>
      <div class="cards">${window.METINLER.map((t) => `<a class="ccard" href="#/metin/${t.id}">
        <div class="cc-top"><small>${esc(t.tur)}</small></div>
        <div class="cc-title"><b>${esc(t.title)}</b></div>
        <p>${esc(t.aciklama)}</p>
        <div class="cc-foot"><small>${t.satirlar ? t.satirlar.length + (t.tur === "Hadis" ? " hadis" : " bölüm") : "Çekim motoruyla üretilir"}</small></div></a>`).join("")}
        <a class="ccard" href="#/tahlil"><div class="cc-top"><small>Tefsir</small></div>
          <div class="cc-title"><b>Amme Cüzü Tahlili</b><span lang="ar">جزء عمّ</span></div>
          <p>Kısa surelerin kelime kelime i'râbı, sarfı ve belâgat notları; âyetleri kârîden dinleme.</p>
          <div class="cc-foot"><small>${Object.keys(window.TAHLIL || {}).length} / 37 sure hazır</small></div></a></div>`;
    return { html };
  }

  function metin(id) {
    const t = window.METINLER.find((x) => x.id === id), esc = U().esc;
    if (!t) return { html: `<p class="empty">Metin bulunamadı.</p>` };
    const st = metinState;
    const ar = (s) => (st.hideHarake ? s.replace(HARAKE, "") : s);
    let rows;
    if (t.uretilen) {
      const Sf = window.Sarf;
      rows = Sf.emsile(Sf.analyze(t.uretilen.kok), Sf.BABS[t.uretilen.bab - 1]).map((x) => ({ ar: x.ar, tr: `<b>${x.ad}</b>${x.tr ? " — " + x.tr : ""}` }));
    } else {
      rows = t.satirlar.map((r, i) => ({
        head: r.baslik ? `<b>${i + 1}. ${esc(r.baslik)}</b>${r.ozet ? ` <span class="tag">özet</span>` : ""}${r.not ? `<div class="tip tiny">${esc(r.not)}</div>` : ""}` : `<b>${r.no}. hadis</b> <small class="muted">Râvi: ${esc(r.ravi)} · ${esc(r.kaynak)}</small>${r.not ? `<div class="tip tiny">${esc(r.not)}</div>` : ""}`,
        ar: r.ar, tr: esc(r.tr),
        kelimeler: r.kelimeler
      }));
    }
    const keys = t.satirlar ? t.satirlar.map((r) => `metin/${t.id}/${r.no}`) : [];
    const inDeck = keys.filter((k) => S.card(k)).length;

    const html = `
      <a class="back" href="#/metinler">← Metinler</a>
      <h1>${esc(t.title)}</h1>
      <p class="muted intro">${esc(t.aciklama)}</p>
      <div class="btns metin-tools">
        <label class="check"><input type="checkbox" id="hideTr" ${st.hideTr ? "checked" : ""}> Tercümeyi gizle</label>
        <label class="check"><input type="checkbox" id="hideHr" ${st.hideHarake ? "checked" : ""}> Harekeleri gizle</label>
        ${keys.length ? (inDeck < keys.length ? `<button class="sm" id="addm">Hadisleri tekrar listeme ekle</button>` : `<small class="muted">✓ Tümü tekrar listende</small>`) : ""}
      </div>
      <div class="metin">${rows.map((r) => `
        <div class="mrow">
          ${r.head ? `<div class="mhead">${r.head}</div>` : ""}
          <div class="mar" lang="ar">${ar(r.ar)}</div>
          <div class="mtr ${st.hideTr ? "hid" : ""}">${r.tr}</div>
          ${r.kelimeler ? `<div class="kel">${r.kelimeler.map(([w, kok, aciklama, bab]) => {
            const link = kok && bab ? `#/cekim/${kok}/${bab}` : "";
            return `<${link ? `a href="${link}"` : "span"} class="kchip"><b lang="ar">${w}</b> <small>${arWrap(aciklama)}</small>${link ? " ↗" : ""}</${link ? "a" : "span"}>`;
          }).join("")}</div>` : ""}
        </div>`).join("")}</div>`;

    const bind = () => {
      document.getElementById("hideTr").onchange = (e) => { st.hideTr = e.target.checked; U().render(); };
      document.getElementById("hideHr").onchange = (e) => { st.hideHarake = e.target.checked; U().render(); };
      document.querySelectorAll(".mtr.hid").forEach((el) => el.onclick = () => el.classList.remove("hid"));
      const addm = document.getElementById("addm");
      if (addm) addm.onclick = () => { S.addCards(keys); U().render(); };
    };
    return { html, bind };
  }

  window.Views = { lessonsBlock, lesson, sinav, tekrar, resetSession, hifz, cekim, metinler, metin };
})();
