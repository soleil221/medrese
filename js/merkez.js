// İlim merkezi: ana sayfa, Kur'an, meseleler, âlimler, öğrenme yolları, ilim defteri, Derinleş.
(function () {
  const S = window.Store;
  const U = () => window.U;
  const esc = (s) => U().esc(s == null ? "" : s);
  const AL = () => Object.fromEntries(window.ALIMLER.map((a) => [a.id, a]));
  const MS = () => Object.fromEntries(window.MESELELER.map((m) => [m.id, m]));
  const SURE = (no) => window.SURE_ANLAM.find((s) => s.no === +no);
  const sureAyetleri = (s) => s.ayetler || ((window.TAHLIL || {})[s.no] ? window.TAHLIL[s.no].ayetler.map((a) => ({ n: a.n, ar: a.ar, tr: a.tr })) : []);
  const KV = () => Object.fromEntries((window.KAVRAMLAR || []).map((k) => [k.id, k]));
  const KN = () => Object.fromEntries((window.KONULAR || []).map((k) => [k.id, k]));
  const RH = () => Object.fromEntries((window.REHBERLER || []).map((k) => [k.id, k]));
  function refBilgi(ref) {
    const i = ref.indexOf(":"), t = ref.slice(0, i), id = ref.slice(i + 1);
    if (t === "mesele") { const m = id === "ihtilaf" ? window.IHTILAF : MS()[id]; return m && { t: "Mesele", baslik: m.baslik, href: `#/mesele/${id}` }; }
    if (t === "alim") { const a = AL()[id]; return a && { t: "Âlim", baslik: a.ad, href: `#/alim/${id}` }; }
    if (t === "sure") { const s = SURE(id); return s && { t: "Sure", baslik: `${s.ad} Sûresi`, href: `#/sure/${s.no}` }; }
    if (t === "kavram") { const k = KV()[id]; return k && { t: "Kavram", baslik: k.ad, href: `#/kavram/${id}` }; }
    if (t === "konu") { const k = KN()[id]; return k && { t: "Konu", baslik: k.ad, href: `#/konu/${id}` }; }
    if (t === "rehber") { const r = RH()[id]; return r && { t: "Rehber", baslik: r.baslik, href: `#/rehber/${id}` }; }
    return null;
  }
  const refChips = (refs) => {
    const l = (refs || []).map(refBilgi).filter(Boolean);
    return l.length ? `<div class="chips">${l.map((r) => `<a class="achip" href="${r.href}"><small>${r.t}</small> <b>${esc(r.baslik)}</b></a>`).join("")}</div>` : "";
  };
  // Verilen ref'e atıf yapan kavram, konu, rehber ve sözler
  function atiflar(ref) {
    const out = [];
    (window.KAVRAMLAR || []).forEach((k) => (k.ilgili || []).includes(ref) && out.push("kavram:" + k.id));
    (window.KONULAR || []).forEach((k) => (k.ilgili || []).includes(ref) && out.push("konu:" + k.id));
    (window.REHBERLER || []).forEach((k) => (k.ilgili || []).includes(ref) && out.push("rehber:" + k.id));
    return out;
  }
  const arw = (t) => esc(t).replace(/([؀-ۿ][؀-ۿً-ْٰ ]*[؀-ۿً-ْٰ]|[؀-ۿ])/g, '<span lang="ar">$&</span>');

  // ───────── Yol takibi ─────────
  let aktifYol = null; // { id, i }
  const adimKey = (a) => a.t === "link" ? "link:" + a.href : a.t + ":" + a.id;
  const adimHref = (a) => ({ yazi: "#/mesele/ihtilaf", mesele: `#/mesele/${a.id}`, sure: `#/sure/${a.id}`, alim: `#/alim/${a.id}`, konu: `#/konu/${a.id}`, kavram: `#/kavram/${a.id}`, rehber: `#/rehber/${a.id}`, link: a.href })[a.t];
  const adimBaslik = (a) => {
    if (a.t === "yazi") return window.IHTILAF.baslik;
    if (["konu", "kavram", "rehber"].includes(a.t)) { const r = refBilgi(a.t + ":" + a.id); return r ? r.baslik : a.id; }
    if (a.t === "mesele") return (MS()[a.id] || {}).baslik || a.id;
    if (a.t === "sure") { const s = SURE(a.id); return s ? `${s.ad} Sûresi` : a.id; }
    if (a.t === "alim") return (AL()[a.id] || {}).ad || a.id;
    return a.baslik || a.href;
  };
  const adimTur = { yazi: "Yazı", mesele: "Mesele", sure: "Sure", alim: "Âlim", konu: "Konu", kavram: "Kavram", rehber: "Rehber", link: "Metin" };
  const yolIlerleme = (y) => y.adimlar.filter((a) => S.ziyaretEdildi(adimKey(a))).length;

  function yolBandi(key) {
    if (!aktifYol) return "";
    const y = window.YOLLAR.find((x) => x.id === aktifYol.id);
    if (!y || adimKey(y.adimlar[aktifYol.i]) !== key) return "";
    const next = y.adimlar[aktifYol.i + 1];
    return `<div class="yol-bant">
      <span><b>${esc(y.baslik)}</b> · ${aktifYol.i + 1}/${y.adimlar.length}</span>
      ${next ? `<a href="${adimHref(next)}" data-yol-ilerle="${aktifYol.i + 1}">Sonraki: ${esc(adimBaslik(next))} →</a>` : `<a href="#/yol/${y.id}">Yolu tamamla →</a>`}
    </div>`;
  }
  function bindYolBandi() {
    document.querySelectorAll("[data-yol-ilerle]").forEach((a) => a.addEventListener("click", () => { aktifYol.i = +a.dataset.yolIlerle; }));
  }

  // ───────── Ortak parçalar ─────────
  function defterKutusu(ref, tip, baslik, href) {
    const k = S.defterKaydi(ref);
    return `<section class="defter-kutu" data-ref="${esc(ref)}" data-tip="${tip}" data-baslik="${esc(baslik)}" data-href="${esc(href)}">
      <div class="dk-ust"><b>İlim defterim</b>${k ? `<small class="muted">${k.guncel || k.tarih}</small>` : ""}</div>
      <textarea rows="${k && k.not ? 4 : 2}" placeholder="Bu konuda aklında kalan, sorduğun veya üzerinde düşündüğün...">${esc(k ? k.not : "")}</textarea>
      <div class="dk-alt"><button class="sm" data-dk-kaydet>${k ? "Notu güncelle" : "Deftere kaydet"}</button><small class="dk-msg muted"></small></div>
    </section>`;
  }
  function bindDefterKutusu() {
    document.querySelectorAll(".defter-kutu").forEach((box) => {
      const b = box.querySelector("[data-dk-kaydet]");
      b.onclick = () => {
        S.defterKaydet({ ref: box.dataset.ref, tip: box.dataset.tip, baslik: box.dataset.baslik, href: box.dataset.href, not: box.querySelector("textarea").value.trim() });
        box.querySelector(".dk-msg").textContent = "Kaydedildi.";
        b.textContent = "Notu güncelle";
      };
    });
  }
  function onayKutusu(key) {
    const t = S.onayli(key);
    return `<label class="onay"><input type="checkbox" data-onay="${esc(key)}" ${t ? "checked" : ""}> Gözden geçirdim${t ? ` <small class="muted">(${t})</small>` : ""}</label>`;
  }
  function bindOnay() {
    document.querySelectorAll("[data-onay]").forEach((c) => c.onchange = () => { S.onayla(c.dataset.onay, c.checked); U().render(); });
  }
  const alimChip = (id) => {
    const a = AL()[id];
    return a ? `<a class="achip" href="#/alim/${a.id}"><b>${esc(a.ad)}</b> <small>ö. ${esc(a.olum)}</small></a>` : `<span class="achip"><b>${esc(id)}</b></span>`;
  };
  const kisiChip = (x) => (AL()[x] ? alimChip(x) : `<span class="achip plain">${esc(x)}</span>`);
  const meseleKart = (m) => `<a class="mkart" href="#/mesele/${m.id}">
      <small class="muted">${esc(m.alan)}${S.onayli("mesele:" + m.id) ? ' · <span class="ok">✓ gözden geçirildi</span>' : ""}</small>
      <b>${esc(m.baslik)}</b><p>${esc(m.soru)}</p></a>`;
  function ziyaret(key, baslik, href) { S.ziyaretEt(key, baslik, href); }
  const playAyet = (no, n, msgEl) => {
    if (!window.Ses) return;
    msgEl.textContent = "…";
    window.Ses.play(window.Ses.url(window.Ses.getKari(), no, n), () => (msgEl.textContent = ""))
      .then(() => (msgEl.textContent = "♪"))
      .catch(() => (msgEl.textContent = "ses yüklenemedi"));
  };

  // ───────── Ana sayfa ─────────
  function gununAyeti() {
    const havuz = [];
    window.SURE_ANLAM.forEach((s) => sureAyetleri(s).forEach((a) => { if (a.tr && a.ar.length > 12) havuz.push({ s, a }); }));
    const gun = Math.floor(Date.now() / 864e5);
    return havuz[gun % havuz.length];
  }
  function hicriTarih() {
    try { return new Intl.DateTimeFormat("tr-TR-u-ca-islamic", { day: "numeric", month: "long", year: "numeric" }).format(new Date()); } catch (e) { return ""; }
  }

  function anaSayfa() {
    const g = gununAyeti(), son = S.sonZiyaret();
    const gunAlim = window.ALIMLER[Math.floor(Date.now() / 864e5) % window.ALIMLER.length];
    const ms = window.MESELELER;
    const notlar = S.state.defter.filter((d) => d.not).slice(0, 3);
    const due = S.dueCards().length;
    const html = `
      <section class="giris-ust">
        <div class="besmele" lang="ar">بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ</div>
        <small class="muted">${new Date().toLocaleDateString("tr-TR", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}${hicriTarih() ? " · " + hicriTarih() : ""}</small>
      </section>

      ${g ? `<a class="gunun-ayeti" href="#/sure/${g.s.no}">
        <small>Günün âyeti</small>
        <div class="ga-ar" lang="ar">${g.a.ar}</div>
        <p>${esc(g.a.tr)}</p>
        <small class="muted">${esc(g.s.ad)} ${g.a.n}</small>
      </a>` : ""}

      ${son ? `<a class="kaldigin" href="${son.href}"><small class="muted">Kaldığın yer</small><b>${esc(son.baslik)}</b><span>Devam et →</span></a>` : ""}

      <section>
        <div class="row-head"><h2>Öğrenme yolları</h2><a href="#/yollar">Tümü →</a></div>
        <div class="yol-grid">${window.YOLLAR.map((y) => { const n = yolIlerleme(y); return `<a class="ykart" href="#/yol/${y.id}">
          <b>${esc(y.baslik)}</b><p>${esc(y.alt)}</p>${U().bar(n / y.adimlar.length)}<small class="muted">${n}/${y.adimlar.length} adım</small></a>`; }).join("")}</div>
      </section>

      <section>
        <div class="row-head"><h2>Meseleler</h2><a href="#/meseleler">Tümü →</a></div>
        <a class="ihtilaf-kart" href="#/mesele/ihtilaf"><b>${esc(window.IHTILAF.baslik)}</b><span>Bütün meseleleri okumanın anahtarı</span></a>
        <div class="mgrid">${ms.slice(0, 6).map(meseleKart).join("")}</div>
      </section>

      <section>
        <div class="row-head"><h2>Kur'an'ın konuları</h2><a href="#/konular">Tümü →</a></div>
        <div class="konu-serit">${(window.KONULAR || []).map((k) => `<a href="#/konu/${k.id}"><span lang="ar">${k.ar}</span><b>${esc(k.ad)}</b></a>`).join("")}</div>
      </section>

      <section>
        <div class="row-head"><h2>Hayatın içinden</h2><a href="#/rehberler">Tümü →</a></div>
        <div class="rgrid">${(window.REHBERLER || []).map((r) => `<a class="rkart" href="#/rehber/${r.id}"><b>${esc(r.baslik)}</b><small class="muted">${esc(r.alt)}</small></a>`).join("")}</div>
      </section>

      <section class="iki-sutun">
        <a class="card alim-gun" href="#/alim/${gunAlim.id}">
          <small class="muted">Âlimlerden</small>
          <b>${esc(gunAlim.ad)}</b> <span lang="ar" class="muted">${gunAlim.ar}</span>
          <small class="muted">ö. ${esc(gunAlim.olum)} · ${esc(gunAlim.ekol)}</small>
          <p>${esc(gunAlim.ozet.replace(/<[^>]+>/g, "").slice(0, 220))}…</p>
        </a>
        <div class="card">
          <div class="row-head"><b>İlim defterim</b><a href="#/defter">Defter →</a></div>
          ${notlar.length ? `<ul class="not-list">${notlar.map((d) => `<li><a href="${d.href || "#/defter"}">${esc(d.baslik || "Not")}</a><p>${esc(d.not.slice(0, 140))}${d.not.length > 140 ? "…" : ""}</p></li>`).join("")}</ul>` : `<p class="muted">Okuduğun sayfalarda aklında kalanları buraya kaydedebilirsin.</p>`}
        </div>
      </section>

      <section class="derin-serit">
        <a href="#/tekrar">Tekrar${due ? ` <b>${due}</b>` : ""}</a>
        <a href="#/hifz">Hıfz</a>
        <a href="#/metinler">Metinler</a>
        <a href="#/mufredat/birlesik">Müfredat</a>
        <a href="#/derinles">Derinleş →</a>
      </section>`;
    return { html };
  }

  // ───────── Kur'an ─────────
  function kuran() {
    const list = [...window.SURE_ANLAM].sort((a, b) => a.no - b.no);
    const html = `
      <h1>Kur'an'ı Anlamak</h1>
      <div class="tabs"><a class="on" href="#/kuran">Sureler</a><a href="#/konular">Konular</a></div>
      <div class="sgrid">${list.map((s) => `<a class="skart" href="#/sure/${s.no}">
        <div class="sk-ust"><span class="sno">${s.no}</span><span lang="ar">${s.ar}</span></div>
        <b>${esc(s.ad)}</b><small class="muted">${esc(s.inis.split(" ")[0])} · ${s.sayi} âyet${S.ziyaretEdildi("sure:" + s.no) ? " · okundu" : ""}</small>
        <p>${esc(s.mesaj.slice(0, 130))}…</p></a>`).join("")}</div>`;
    return { html };
  }

  const sureState = { gizliMeal: false };
  function sure(no) {
    const s = SURE(no);
    if (!s) return kuran();
    const ayetler = sureAyetleri(s), key = "sure:" + s.no, AL_ = AL(), M = MS();
    const tahlilVar = !!(window.TAHLIL || {})[s.no];
    const list = [...window.SURE_ANLAM].sort((a, b) => a.no - b.no), i = list.indexOf(s);
    const html = `
      <a class="back" href="#/kuran">← Kur'an</a>
      ${yolBandi(key)}
      <header class="sure-bas">
        <div><h1>${esc(s.ad)} Sûresi</h1><small class="muted">${s.no}. sure · ${esc(s.inis)} · ${s.sayi} âyet</small></div>
        <div class="sure-ar" lang="ar">${s.ar}</div>
      </header>
      ${s.isimler ? `<p class="muted"><b>İsimleri:</b> ${esc(s.isimler)}</p>` : ""}

      <section class="okuma">
        <h2>Ana mesaj</h2><p class="lead">${esc(s.mesaj)}</p>
        <h3>İniş ortamı</h3><p>${esc(s.ortam)}</p>
      </section>

      <section class="okuma">
        <div class="row-head"><h2>Âyetler</h2><label class="check"><input type="checkbox" id="gMeal" ${sureState.gizliMeal ? "checked" : ""}> Meali gizle</label></div>
        <ol class="ayet-liste">${ayetler.map((a) => `<li>
          <div class="al-ar" lang="ar">${a.ar} <span class="ayet-no">${a.n}</span></div>
          <div class="al-tr ${sureState.gizliMeal ? "hid" : ""}">${esc(a.tr)}</div>
          <div class="al-arac"><button class="ghost sm" data-ayet="${a.n}">▶</button><small data-amsg="${a.n}"></small></div>
        </li>`).join("")}</ol>
        ${tahlilVar ? `<p><a href="#/tahlil/${s.no}">Kelime kelime i'râb ve sarf tahlili →</a></p>` : ""}
      </section>

      <section class="okuma">
        <h2>Akış</h2>
        <ol class="akis">${s.akis.map((x) => `<li><span class="akis-ayet">${esc(x.ayet)}</span><div><b>${esc(x.baslik)}</b><p>${esc(x.aciklama)}</p></div></li>`).join("")}</ol>
      </section>

      <section class="okuma">
        <h2>Kavramlar</h2>
        <dl class="kavram">${s.kavramlar.map((k) => `<div><dt><span lang="ar">${k.ar}</span> ${esc(k.ad)}</dt><dd>${esc(k.aciklama)}</dd></div>`).join("")}</dl>
      </section>

      ${s.notlar && s.notlar.length ? `<section class="okuma"><h2>Âlimlerden notlar</h2>
        ${s.notlar.map((n) => `<blockquote class="alim-not">${arw(n.metin)}${n.alim && AL_[n.alim] ? `<footer>— <a href="#/alim/${n.alim}">${esc(AL_[n.alim].ad)}</a></footer>` : ""}</blockquote>`).join("")}</section>` : ""}

      <section class="okuma tefekkur"><h2>Tefekkür</h2><p>${esc(s.tefekkur)}</p></section>

      ${s.meseleler && s.meseleler.length ? `<section><h3>İlgili meseleler</h3><div class="mgrid">${s.meseleler.filter((id) => M[id]).map((id) => meseleKart(M[id])).join("")}</div></section>` : ""}

      ${defterKutusu(key, "sure", `${s.ad} Sûresi`, `#/sure/${s.no}`)}
      <div class="sayfa-alt">${onayKutusu(key)}</div>
      <nav class="pager">
        ${list[i - 1] ? `<a href="#/sure/${list[i - 1].no}">← ${esc(list[i - 1].ad)}</a>` : "<span></span>"}
        ${list[i + 1] ? `<a href="#/sure/${list[i + 1].no}">${esc(list[i + 1].ad)} →</a>` : "<span></span>"}
      </nav>`;
    const bind = () => {
      ziyaret(key, `${s.ad} Sûresi`, `#/sure/${s.no}`);
      bindYolBandi(); bindDefterKutusu(); bindOnay();
      document.getElementById("gMeal").onchange = (e) => { sureState.gizliMeal = e.target.checked; U().render(); };
      document.querySelectorAll(".al-tr.hid").forEach((el) => el.onclick = () => el.classList.remove("hid"));
      document.querySelectorAll("[data-ayet]").forEach((b) => b.onclick = () => playAyet(s.no, +b.dataset.ayet, document.querySelector(`[data-amsg="${b.dataset.ayet}"]`)));
    };
    return { html, bind };
  }

  // ───────── Meseleler ─────────
  const meseleArama = { q: "" };
  function meseleler() {
    const q = meseleArama.q.toLocaleLowerCase("tr");
    const ms = window.MESELELER.filter((m) => !q || [m.baslik, m.soru, m.ozet, m.alan].join(" ").toLocaleLowerCase("tr").includes(q));
    const alanlar = [...new Set(ms.map((m) => m.alan))];
    const html = `
      <h1>Meseleler</h1>
      <a class="ihtilaf-kart" href="#/mesele/ihtilaf"><b>${esc(window.IHTILAF.baslik)}</b><span>Âlimler aynı delillerden neden farklı sonuçlara varır?</span></a>
      <a class="ihtilaf-kart soz-giris" href="#/sozler"><b>Dilden Dile Dolaşan Sözler</b><span>Hz. Peygamber'e nispeti sabit olmayan yaygın sözler ve doğruları</span></a>
      <input id="mara" class="search" type="search" placeholder="Mesele ara…" value="${esc(meseleArama.q)}">
      ${alanlar.map((al) => `<section><h2 class="alan-bas">${esc(al)}</h2><div class="mgrid">${ms.filter((m) => m.alan === al).map(meseleKart).join("")}</div></section>`).join("") || `<p class="empty">Sonuç yok.</p>`}`;
    const bind = () => {
      const i = document.getElementById("mara");
      i.oninput = () => { meseleArama.q = i.value; const p = i.selectionStart; U().render(); const n = document.getElementById("mara"); n.focus(); n.setSelectionRange(p, p); };
    };
    return { html, bind };
  }

  function ihtilafSayfasi() {
    const key = "yazi:ihtilaf";
    const html = `
      <a class="back" href="#/meseleler">← Meseleler</a>
      ${yolBandi(key)}
      <article class="okuma makale"><h1>${esc(window.IHTILAF.baslik)}</h1>${window.IHTILAF.html}</article>
      ${defterKutusu(key, "yazi", window.IHTILAF.baslik, "#/mesele/ihtilaf")}`;
    return { html, bind: () => { ziyaret(key, window.IHTILAF.baslik, "#/mesele/ihtilaf"); bindYolBandi(); bindDefterKutusu(); } };
  }

  function mesele(id) {
    if (id === "ihtilaf") return ihtilafSayfasi();
    const m = MS()[id];
    if (!m) return meseleler();
    const key = "mesele:" + m.id, M = MS(), D = (window.DERINLIK || {})[m.id];
    const html = `
      <a class="back" href="#/meseleler">← Meseleler</a>
      ${yolBandi(key)}
      <article class="okuma mesele">
        <small class="tag klasik">${esc(m.alan)}</small>
        <h1>${esc(m.baslik)}</h1>
        <p class="soru">${esc(m.soru)}</p>
        <p class="lead">${esc(m.ozet)}</p>
        <nav class="bolum-nav"><a href="#nas">Naslar</a><a href="#gorus">Görüşler</a>${D ? `<a href="#munakasa">Tartışma</a>` : ""}<a href="#kok">İhtilafın kökü</a>${D ? `<a href="#seyir">Seyir</a><a href="#tercih">Tercihler</a>` : ""}<a href="#bugun">Bugün</a><a href="#durum">Özet tablo</a>${D ? `<a href="#sorular">Sorular</a>` : ""}<a href="#kaynak">Kaynaklar</a></nav>

        <h2 id="nas">Âyetler</h2>
        ${m.ayetler.map(([ref, ar, tr]) => `<div class="nas"><div class="nas-ar" lang="ar">${ar}</div><p>${esc(tr)}</p><small class="muted">${esc(ref)}</small></div>`).join("")}
        <h2>Hadisler ve rivayetler</h2>
        ${m.hadisler.map(([ar, tr, kaynak, derece]) => `<div class="nas hadis">${ar ? `<div class="nas-ar" lang="ar">${ar}</div>` : ""}<p>${esc(tr)}</p>
          <small class="muted">${esc(kaynak)}</small> <span class="derece">${esc(derece)}</span></div>`).join("")}

        <h2 id="gorus">Görüşler</h2>
        <div class="gorusler">${m.gorusler.map((g) => `<section class="gorus">
          <h3>${esc(g.ekol)}</h3>
          <p class="hukum">${g.hukum}</p>
          <p class="delil"><b>Delil ve gerekçe:</b> ${g.delil}</p>
          ${g.alimler && g.alimler.length ? `<div class="chips">${g.alimler.map(alimChip).join("")}</div>` : ""}
        </section>`).join("")}</div>

        ${D ? `<h2 id="munakasa">Delillerin tartışması</h2>
        <div class="munakasa">${D.munakasa.map((x) => `<section class="mnk">
          <h3>${esc(x.taraf)}</h3>
          <div class="mnk-adim delil"><small>Delil</small><p>${esc(x.delil)}</p></div>
          <div class="mnk-adim itiraz"><small>İtiraz</small><p>${esc(x.itiraz)}</p></div>
          <div class="mnk-adim cevap"><small>Cevap</small><p>${esc(x.cevap)}</p></div>
        </section>`).join("")}</div>` : ""}

        <h2 id="kok">İhtilafın kökü</h2>
        <div>${m.koken}</div>
        ${D && D.usul && D.usul.length ? `<div class="usul-dugum"><small class="muted">Usul düğümleri</small>${refChips(D.usul)}</div>` : ""}

        ${D ? `<h2 id="seyir">Tarihî seyir</h2>
        <ol class="seyir">${D.seyir.map(([d, t]) => `<li><b>${esc(d)}</b><p>${esc(t)}</p></li>`).join("")}</ol>

        <h2 id="tercih">Muhakkiklerin tercihleri</h2>
        <div class="tercihler">${D.tercih.map((x) => { const a = AL()[x.alim]; return `<blockquote class="alim-not"><p>${esc(x.metin)}</p>${a ? `<footer>— <a href="#/alim/${a.id}">${esc(a.ad)}</a></footer>` : ""}</blockquote>`; }).join("")}</div>` : ""}

        <h2 id="bugun">Bugün</h2>
        <div>${m.cagdas}</div>

        <h2 id="durum">Özet tablo</h2>
        <div class="durum">
          <div class="d-kesin"><h4>Kesin olan</h4><ul>${m.durum.kesin.map((x) => `<li>${esc(x)}</li>`).join("")}</ul></div>
          <div class="d-cogunluk"><h4>Çoğunluk görüşü</h4><ul>${m.durum.cogunluk.map((x) => `<li>${esc(x)}</li>`).join("")}</ul></div>
          <div class="d-tartismali"><h4>Tartışmalı</h4><ul>${m.durum.tartismali.map((x) => `<li>${esc(x)}</li>`).join("")}</ul></div>
        </div>

        ${D && D.sorular ? `<section class="okuma tefekkur" id="sorular"><h2>Kendini sına</h2><ol>${D.sorular.map((s) => `<li>${esc(s)}</li>`).join("")}</ol></section>` : ""}

        <h2>Âlimler</h2>
        <div class="chips">${m.alimler.map(alimChip).join("")}</div>

        <h2 id="kaynak">Kaynaklar</h2>
        <ul class="kaynak">${m.kaynaklar.map((k) => `<li>${esc(k)}</li>`).join("")}</ul>

        ${m.ilgili && m.ilgili.length ? `<h2>İlgili meseleler</h2><div class="mgrid">${m.ilgili.filter((x) => M[x]).map((x) => meseleKart(M[x])).join("")}</div>` : ""}
        ${(() => { const r = atiflar("mesele:" + m.id); return r.length ? `<h2>Kavramlar, konular ve rehberler</h2>${refChips(r)}` : ""; })()}
      </article>
      ${defterKutusu(key, "mesele", m.baslik, `#/mesele/${m.id}`)}
      <div class="sayfa-alt">${onayKutusu(key)}</div>`;
    const bind = () => {
      ziyaret(key, m.baslik, `#/mesele/${m.id}`);
      bindYolBandi(); bindDefterKutusu(); bindOnay();
      document.querySelectorAll(".bolum-nav a").forEach((a) => a.onclick = (e) => { e.preventDefault(); const t = document.getElementById(a.getAttribute("href").slice(1)); if (t) t.scrollIntoView({ behavior: "smooth", block: "start" }); });
    };
    return { html, bind };
  }

  // ───────── Âlimler ─────────
  const alimArama = { q: "", alan: "Tümü" };
  const AEK = (id) => (window.ALIM_EK || {})[id] || {};
  const ALAN_GRUP = { "Fıkıh": /Fıkıh|Kazâ|Menâsik|Fetva|Hukuk/, "Usul": /Usul|Makâsıd|Kavâid/, "Hadis": /Hadis/, "Tefsir": /Tefsir|Kıraat/, "Kelâm": /Kelâm|Akide/, "Tasavvuf": /Tasavvuf|Zühd|Ahlâk/, "Tarih ve düşünce": /Tarih|Siyer|Düşünce|Sosyoloji|Siyaset|Felsefe/ };
  const alanda = (a, g) => g === "Tümü" || (AEK(a.id).alan || []).some((x) => ALAN_GRUP[g].test(x));
  const alimSekme = (on) => `<div class="tabs"><a href="#/alimler" class="${on === "zaman" ? "on" : ""}">Zaman çizgisi</a><a href="#/ekoller" class="${on === "ekol" ? "on" : ""}">Ekoller ve gelenekler</a></div>`;
  function alimler() {
    const q = alimArama.q.toLocaleLowerCase("tr");
    const list = window.ALIMLER.filter((a) => alanda(a, alimArama.alan) && (!q || [a.ad, a.ekol, a.sehir, a.eserler.join(" ")].join(" ").toLocaleLowerCase("tr").includes(q)));
    const asirlar = [...new Set(list.map((a) => a.y))].sort((a, b) => a - b);
    const html = `
      <h1>Âlimler</h1>
      ${alimSekme("zaman")}
      <div class="chips alan-chips">${["Tümü", ...Object.keys(ALAN_GRUP)].map((g) => `<a href="javascript:void 0" class="achip ${alimArama.alan === g ? "on" : ""}" data-alan="${g}">${g}${g !== "Tümü" ? ` <small>${window.ALIMLER.filter((a) => alanda(a, g)).length}</small>` : ""}</a>`).join("")}</div>
      <input id="aara" class="search" type="search" placeholder="Âlim, ekol, şehir veya eser ara…" value="${esc(alimArama.q)}">
      <div class="zaman">${asirlar.map((y) => `<section class="asir">
        <h2><span>Hicrî ${y}. asır</span></h2>
        <div class="agrid">${list.filter((a) => a.y === y).map((a) => `<a class="akart" href="#/alim/${a.id}">
          <div><b>${esc(a.ad)}</b> ${a.ar ? `<span lang="ar" class="muted">${a.ar}</span>` : ""}</div>
          <small class="muted">ö. ${esc(a.olum)} · ${esc(a.sehir)}</small>
          <small>${esc(a.ekol)}</small></a>`).join("")}</div>
      </section>`).join("") || `<p class="empty">Sonuç yok.</p>`}</div>`;
    const bind = () => {
      const i = document.getElementById("aara");
      i.oninput = () => { alimArama.q = i.value; const p = i.selectionStart; U().render(); const n = document.getElementById("aara"); n.focus(); n.setSelectionRange(p, p); };
      document.querySelectorAll("[data-alan]").forEach((a) => a.onclick = (e) => { e.preventDefault(); alimArama.alan = a.dataset.alan; U().render(); });
    };
    return { html, bind };
  }

  function ekoller() {
    const A = AL();
    const html = `
      <h1>Âlimler</h1>
      ${alimSekme("ekol")}
      ${(window.EKOLLER || []).map((e) => `<section class="ekol">
        <h2>${esc(e.ad)}</h2><p class="muted">${esc(e.alt)}</p>
        <ol class="ekol-zincir">${e.ids.filter((id) => A[id]).map((id) => `<li><a href="#/alim/${id}"><b>${esc(A[id].ad)}</b><small>ö. ${esc(A[id].olum)}</small></a></li>`).join("")}</ol>
      </section>`).join("")}`;
    return { html };
  }

  function alim(id) {
    const A = AL(), a = A[id];
    if (!a) return alimler();
    const key = "alim:" + a.id, E = AEK(a.id);
    // Silsile: kendi kayıtları + diğer âlimlerin kayıtlarından ters ilişki
    const hocalar = [...a.hocalar], talebeler = [...a.talebeler];
    window.ALIMLER.forEach((b) => {
      if (b.talebeler.includes(a.id) && !hocalar.includes(b.id)) hocalar.push(b.id);
      if (b.hocalar.includes(a.id) && !talebeler.includes(b.id)) talebeler.push(b.id);
    });
    const goruslerde = [];
    window.MESELELER.forEach((m) => m.gorusler.forEach((g) => { if ((g.alimler || []).includes(a.id)) goruslerde.push({ m, g }); }));
    const surelerde = [];
    window.SURE_ANLAM.forEach((s) => (s.notlar || []).forEach((n) => { if (n.alim === a.id) surelerde.push({ s, n }); }));
    const html = `
      <a class="back" href="#/alimler">← Âlimler</a>
      ${yolBandi(key)}
      <article class="okuma alim">
        <header class="alim-bas">
          <div><h1>${esc(a.ad)}</h1><small class="muted">ö. ${esc(a.olum)} · ${esc(a.sehir)}</small><p class="tag klasik">${esc(a.ekol)}</p></div>
          ${a.ar ? `<div class="alim-ar" lang="ar">${a.ar}</div>` : ""}
        </header>
        ${E.alan ? `<div class="chips">${E.alan.map((x) => `<span class="achip plain">${esc(x)}</span>`).join("")}</div>` : ""}
        <p class="lead">${a.ozet}</p>
        ${E.hayat ? `<h2>Hayatı</h2><ol class="seyir">${E.hayat.map(([t, o]) => `<li><b>${esc(t)}</b><p>${esc(o)}</p></li>`).join("")}</ol>` : ""}
        <h2>İlmî yöntemi</h2><p>${a.metod}</p>
        ${E.etki ? `<h2>Etkisi ve hakkındaki tartışmalar</h2><p>${esc(E.etki)}</p>` : ""}
        ${E.okuma ? `<div class="ornek-kutu"><small>Okumaya nereden başlamalı?</small><p>${esc(E.okuma)}</p></div>` : ""}

        <h2>Silsile</h2>
        <div class="silsile">
          <div><h4>Hocaları</h4><div class="chips">${hocalar.map(kisiChip).join("") || "—"}</div></div>
          <div class="silsile-ok">↓</div>
          <div class="silsile-ben"><b>${esc(a.ad)}</b></div>
          <div class="silsile-ok">↓</div>
          <div><h4>Talebeleri</h4><div class="chips">${talebeler.map(kisiChip).join("") || "—"}</div></div>
        </div>

        <h2>Eserleri</h2><ul>${a.eserler.map((e) => `<li>${esc(e)}</li>`).join("")}</ul>
        ${(() => { const ek = (window.EKOLLER || []).filter((e) => e.ids.includes(a.id)); return ek.length ? `<h2>Yer aldığı gelenekler</h2><div class="chips">${ek.map((e) => `<a class="achip" href="#/ekoller"><b>${esc(e.ad)}</b></a>`).join("")}</div>` : ""; })()}
        ${(() => { const c = window.ALIMLER.filter((b) => b.y === a.y && b.id !== a.id); return c.length ? `<h2>Aynı asrın âlimleri</h2><div class="chips">${c.map((b) => alimChip(b.id)).join("")}</div>` : ""; })()}

        ${goruslerde.length ? `<h2>Meselelerdeki görüşleri</h2><ul class="gorus-list">${goruslerde.map(({ m, g }) => `<li><a href="#/mesele/${m.id}"><b>${esc(m.baslik)}</b></a> <small class="muted">${esc(g.ekol)}</small><p>${g.hukum}</p></li>`).join("")}</ul>` : ""}
        ${surelerde.length ? `<h2>Tefsir notları</h2><ul class="gorus-list">${surelerde.map(({ s, n }) => `<li><a href="#/sure/${s.no}"><b>${esc(s.ad)} Sûresi</b></a><p>${arw(n.metin)}</p></li>`).join("")}</ul>` : ""}
        ${(() => { const t = []; Object.entries(window.DERINLIK || {}).forEach(([mid, d]) => (d.tercih || []).forEach((x) => { if (x.alim === a.id && MS()[mid]) t.push({ m: MS()[mid], x }); }));
          return t.length ? `<h2>Meselelerdeki tercihleri</h2><ul class="gorus-list">${t.map(({ m, x }) => `<li><a href="#/mesele/${m.id}"><b>${esc(m.baslik)}</b></a><p>${esc(x.metin)}</p></li>`).join("")}</ul>` : ""; })()}
        ${(() => { const r = atiflar("alim:" + a.id); return r.length ? `<h2>Geçtiği kavram ve konular</h2>${refChips(r)}` : ""; })()}
      </article>
      ${defterKutusu(key, "alim", a.ad, `#/alim/${a.id}`)}
      <div class="sayfa-alt">${onayKutusu(key)}</div>`;
    return { html, bind: () => { ziyaret(key, a.ad, `#/alim/${a.id}`); bindYolBandi(); bindDefterKutusu(); bindOnay(); } };
  }

  // ───────── Öğrenme yolları ─────────
  function yollar() {
    const html = `
      <h1>Öğrenme Yolları</h1>
      <div class="yol-liste">${window.YOLLAR.map((y) => { const n = yolIlerleme(y); return `<a class="ykart buyuk" href="#/yol/${y.id}">
        <b>${esc(y.baslik)}</b><p>${esc(y.alt)}</p>${U().bar(n / y.adimlar.length)}<small class="muted">${n}/${y.adimlar.length} adım</small></a>`; }).join("")}</div>`;
    return { html };
  }

  function yol(id) {
    const y = window.YOLLAR.find((x) => x.id === id);
    if (!y) return yollar();
    const n = yolIlerleme(y);
    const ilkEksik = y.adimlar.findIndex((a) => !S.ziyaretEdildi(adimKey(a)));
    const html = `
      <a class="back" href="#/yollar">← Öğrenme yolları</a>
      <header class="yol-bas"><h1>${esc(y.baslik)}</h1><p class="muted">${esc(y.alt)}</p>${U().bar(n / y.adimlar.length)}<small class="muted">${n}/${y.adimlar.length} adım</small></header>
      <p class="lead">${esc(y.giris)}</p>
      <ol class="adimlar">${y.adimlar.map((a, i) => { const ok = S.ziyaretEdildi(adimKey(a)); return `<li class="${ok ? "ok" : ""} ${i === ilkEksik ? "sirada" : ""}">
        <span class="adim-no">${ok ? "✓" : i + 1}</span>
        <a href="${adimHref(a)}" data-adim="${i}"><small class="muted">${adimTur[a.t]}</small><b>${esc(adimBaslik(a))}</b><span>${arw(a.not)}</span></a>
      </li>`; }).join("")}</ol>
      ${ilkEksik >= 0 ? `<p><a class="btn" href="${adimHref(y.adimlar[ilkEksik])}" data-adim="${ilkEksik}">${n ? "Kaldığın yerden devam et" : "Başla"} →</a></p>` : ""}
      <section class="okuma tefekkur"><h2>Yolun sonunda</h2><p>${esc(y.soru)}</p></section>
      ${defterKutusu("yol:" + y.id, "yol", y.baslik, `#/yol/${y.id}`)}`;
    const bind = () => {
      document.querySelectorAll("[data-adim]").forEach((a) => a.addEventListener("click", () => { aktifYol = { id: y.id, i: +a.dataset.adim }; }));
      bindDefterKutusu();
    };
    return { html, bind };
  }

  // ───────── İlim defteri ─────────
  const defterState = { tip: "hepsi", q: "" };
  function defter() {
    const tipler = { hepsi: "Tümü", mesele: "Meseleler", sure: "Sureler", konu: "Konular", kavram: "Kavramlar", rehber: "Rehberler", alim: "Âlimler", yazi: "Yazılar", yol: "Yollar", serbest: "Serbest notlar" };
    const q = defterState.q.toLocaleLowerCase("tr");
    const list = S.state.defter.filter((d) => (defterState.tip === "hepsi" || d.tip === defterState.tip) && (!q || [d.baslik, d.not].join(" ").toLocaleLowerCase("tr").includes(q)));
    const html = `
      <h1>İlim Defterim</h1>
      <form id="yeniNot" class="card yeni-not">
        <input name="baslik" placeholder="Başlık (isteğe bağlı)">
        <textarea name="not" rows="3" placeholder="Bir tefekkür, bir soru, bir ders notu..." required></textarea>
        <button>Ekle</button>
      </form>
      <div class="tabs">${Object.entries(tipler).map(([k, t]) => `<a href="javascript:void 0" data-dtip="${k}" class="${defterState.tip === k ? "on" : ""}">${t}</a>`).join("")}</div>
      <input id="dara" class="search" type="search" placeholder="Defterde ara…" value="${esc(defterState.q)}">
      ${list.length ? `<div class="defter-liste">${list.map((d) => `<article class="card dnot" data-id="${d.id}">
        <div class="row-head">${d.href ? `<a href="${d.href}"><b>${esc(d.baslik || "Not")}</b></a>` : `<b>${esc(d.baslik || "Not")}</b>`}<small class="muted">${esc(tipler[d.tip] || "")} · ${d.guncel || d.tarih}</small></div>
        <textarea rows="${Math.min(10, Math.max(2, (d.not || "").split("\n").length + 1))}">${esc(d.not || "")}</textarea>
        <div class="btns"><button class="sm" data-dkaydet="${d.id}">Kaydet</button><button class="sm ghost" data-dsil="${d.id}">Sil</button></div>
      </article>`).join("")}</div>` : `<p class="empty">Henüz kayıt yok.</p>`}`;
    const bind = () => {
      document.getElementById("yeniNot").onsubmit = (e) => {
        e.preventDefault(); const f = e.target;
        S.defterKaydet({ tip: "serbest", baslik: f.baslik.value.trim(), not: f.not.value.trim(), ref: "" });
        U().render();
      };
      document.querySelectorAll("[data-dtip]").forEach((a) => a.onclick = (e) => { e.preventDefault(); defterState.tip = a.dataset.dtip; U().render(); });
      const i = document.getElementById("dara");
      i.oninput = () => { defterState.q = i.value; const p = i.selectionStart; U().render(); const n = document.getElementById("dara"); n.focus(); n.setSelectionRange(p, p); };
      document.querySelectorAll("[data-dkaydet]").forEach((b) => b.onclick = () => {
        const d = S.state.defter.find((x) => x.id === b.dataset.dkaydet);
        const ta = b.closest(".dnot").querySelector("textarea");
        d.not = ta.value; d.guncel = S.todayStr(); S.defterKaydet(d); b.textContent = "Kaydedildi";
      });
      document.querySelectorAll("[data-dsil]").forEach((b) => b.onclick = () => { if (confirm("Bu kayıt silinsin mi?")) { S.defterSil(b.dataset.dsil); U().render(); } });
    };
    return { html, bind };
  }

  // ───────── Derinleş ─────────
  function derinles() {
    const due = S.dueCards().length, h = S.state.hifz, mem = Object.keys(h.pages).length;
    const kartlar = [
      ["#/mufredat/birlesik", "Müfredat", "Klasik medrese ve çağdaş ilahiyat dersleri, konu anlatımları ve kitaplar"],
      ["#/metinler", "Metinler", "Kırk Hadis, el-Akāidü'n-Nesefiyye, Eyyühe'l-Veled, Emsile; Amme cüzü tahlili"],
      ["#/tekrar", `Tekrar${due ? ` · ${due} kart bekliyor` : ""}`, "Ezber kartları"],
      ["#/hifz", `Hıfz · ${mem}/604 sayfa`, "Mushaf haritası ve günlük ezber-tekrar planı"],
      ["#/cekim", "Sarf atölyesi", "Fiil çekimleri ve emsile"],
      ["#/hafta", "Haftalık hedefler", "Hedefler ve haftalık özet"],
      ["#/gunluk", "Çalışma günlüğü", "Günlük çalışma kayıtları"],
      ["#/ayarlar", "Ayarlar", "Yedekleme ve tercihler"]
    ];
    const html = `
      <h1>Derinleş</h1>
      <div class="derin-grid">${kartlar.map(([h, t, p]) => `<a class="card derin-kart" href="${h}"><b>${t}</b><p class="muted">${p}</p></a>`).join("")}</div>
      ${U().panelHtml()}`;
    return { html };
  }

  // ───────── Ortak: önceki / sonraki ─────────
  const pager = (list, i, href, ad) => `<nav class="pager">
      ${list[i - 1] ? `<a href="${href(list[i - 1])}">← ${esc(ad(list[i - 1]))}</a>` : "<span></span>"}
      ${list[i + 1] ? `<a href="${href(list[i + 1])}">${esc(ad(list[i + 1]))} →</a>` : "<span></span>"}
    </nav>`;
  const ilkCumle = (html) => { const t = html.replace(/<[^>]+>/g, ""); const n = t.indexOf(". "); return n > 0 && n < 240 ? t.slice(0, n + 1) : t.slice(0, 200) + "…"; };
  const sayfaBind = (key, baslik, href) => () => { ziyaret(key, baslik, href); bindYolBandi(); bindDefterKutusu(); bindOnay(); };
  function aramaBind(id, state) {
    const i = document.getElementById(id);
    i.oninput = () => { state.q = i.value; const p = i.selectionStart; U().render(); const n = document.getElementById(id); n.focus(); n.setSelectionRange(p, p); };
  }

  // ───────── Kavramlar ─────────
  const kavramArama = { q: "" };
  function kavramlar() {
    const q = kavramArama.q.toLocaleLowerCase("tr");
    const list = window.KAVRAMLAR.filter((k) => !q || [k.ad, k.tanim, k.nuans || "", k.grup].join(" ").toLocaleLowerCase("tr").includes(q));
    const gruplar = [...new Set(list.map((k) => k.grup))];
    const html = `
      <h1>Kavramlar</h1>
      <input id="kara" class="search" type="search" placeholder="Kavram ara…" value="${esc(kavramArama.q)}">
      ${gruplar.map((g) => `<section><h2 class="alan-bas">${esc(g)}</h2><div class="mgrid">${list.filter((k) => k.grup === g).map((k) => `<a class="mkart" href="#/kavram/${k.id}">
        <small class="muted"><span lang="ar">${k.ar}</span>${S.onayli("kavram:" + k.id) ? ' · <span class="ok">✓</span>' : ""}</small>
        <b>${esc(k.ad)}</b><p>${esc(ilkCumle(k.tanim))}</p></a>`).join("")}</div></section>`).join("") || `<p class="empty">Sonuç yok.</p>`}`;
    return { html, bind: () => aramaBind("kara", kavramArama) };
  }
  function kavram(id) {
    const list = window.KAVRAMLAR, i = list.findIndex((k) => k.id === id), k = list[i];
    if (!k) return kavramlar();
    const key = "kavram:" + k.id, geri = atiflar(key).filter((r) => r !== key), E = (window.KAVRAM_EK || {})[k.id] || {};
    const html = `
      <a class="back" href="#/kavramlar">← Kavramlar</a>
      ${yolBandi(key)}
      <article class="okuma kavram-sayfa">
        <small class="tag klasik">${esc(k.grup)}</small>
        <header class="alim-bas"><h1>${esc(k.ad)}</h1><div class="alim-ar" lang="ar">${k.ar}</div></header>
        <p class="lead">${k.tanim}</p>
        ${k.nuans ? `<h2>Ekoller ve incelikler</h2><p>${k.nuans}</p>` : ""}
        ${E.ornek ? `<h2>Uygulamada</h2><div class="ornek-kutu"><p>${E.ornek}</p></div>` : ""}
        ${E.kaynak ? `<h2>Klasik kaynaklar</h2><ul class="kaynak">${E.kaynak.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>` : ""}
        ${k.ilgili && k.ilgili.length ? `<h2>Bağlantılar</h2>${refChips(k.ilgili)}` : ""}
        ${geri.length ? `<h2>Bu kavrama başvuranlar</h2>${refChips(geri)}` : ""}
      </article>
      ${defterKutusu(key, "kavram", k.ad, `#/kavram/${k.id}`)}
      <div class="sayfa-alt">${onayKutusu(key)}</div>
      ${pager(list, i, (x) => `#/kavram/${x.id}`, (x) => x.ad)}`;
    return { html, bind: sayfaBind(key, k.ad, `#/kavram/${k.id}`) };
  }

  // ───────── Kur'an konuları ─────────
  function konular() {
    const html = `
      <h1>Kur'an'ı Anlamak</h1>
      <div class="tabs"><a href="#/kuran">Sureler</a><a class="on" href="#/konular">Konular</a></div>
      <div class="sgrid">${window.KONULAR.map((k) => `<a class="skart" href="#/konu/${k.id}">
        <div class="sk-ust"><b>${esc(k.ad)}</b><span lang="ar">${k.ar}</span></div>
        <small class="muted">${k.ayetler.length} âyet grubu${S.ziyaretEdildi("konu:" + k.id) ? " · okundu" : ""}</small>
        <p>${esc(k.ozet.slice(0, 150))}…</p></a>`).join("")}</div>`;
    return { html };
  }
  function konu(id) {
    const list = window.KONULAR, i = list.findIndex((k) => k.id === id), k = list[i];
    if (!k) return konular();
    const key = "konu:" + k.id, E = (window.KONU_EK || {})[k.id] || {};
    const html = `
      <a class="back" href="#/konular">← Konular</a>
      ${yolBandi(key)}
      <article class="okuma">
        <header class="sure-bas"><div><h1>${esc(k.ad)}</h1></div><div class="sure-ar" lang="ar">${k.ar}</div></header>
        <p class="lead">${esc(k.ozet)}</p>
        <h2>Âyetler</h2>
        ${k.ayetler.map(([ref, ar, tr]) => `<div class="nas"><div class="nas-ar" lang="ar">${ar}</div><p>${esc(tr)}</p><small class="muted">${esc(ref)}</small></div>`).join("")}
        ${k.boyutlar.map((b) => `<h2>${esc(b.baslik)}</h2><p>${b.metin}</p>`).join("")}
        ${E.kissa ? `<h2>Kıssa: ${esc(E.kissa.baslik)}</h2><p>${esc(E.kissa.metin)}</p>` : ""}
        ${E.hadisler ? `<h2>Hadislerden</h2>${E.hadisler.map(([t, kay]) => `<div class="nas hadis"><p>${esc(t)}</p><small class="muted">${esc(kay)}</small></div>`).join("")}` : ""}
        ${E.sozler ? `<h2>Âlimlerden</h2>${E.sozler.map((x) => { const a = AL()[x.alim]; return `<blockquote class="alim-not"><p>${esc(x.metin)}</p>${a ? `<footer>— <a href="#/alim/${a.id}">${esc(a.ad)}</a></footer>` : ""}</blockquote>`; }).join("")}` : ""}
        ${E.uygulama ? `<div class="ornek-kutu"><small>Bu hafta</small><p>${esc(E.uygulama)}</p></div>` : ""}
      </article>
      <section class="okuma tefekkur"><h2>Tefekkür</h2><p>${esc(k.tefekkur)}</p></section>
      ${k.ilgili && k.ilgili.length ? `<section><h3>Bağlantılar</h3>${refChips(k.ilgili)}</section>` : ""}
      ${defterKutusu(key, "konu", k.ad, `#/konu/${k.id}`)}
      <div class="sayfa-alt">${onayKutusu(key)}</div>
      ${pager(list, i, (x) => `#/konu/${x.id}`, (x) => x.ad)}`;
    return { html, bind: sayfaBind(key, k.ad, `#/konu/${k.id}`) };
  }

  // ───────── Yaygın sözler ─────────
  const sozArama = { q: "", tur: "Tümü" };
  const SOZ_TUR = { "Tümü": null, "Uydurma": /uydurma/i, "Aslı yok": /aslı yok|sabit değil|hadis değil|nispeti/i, "Zayıf": /zayıf/i, "Tartışmalı": /tartışmalı/i };
  const sozTuru = (s) => { if (/manası sahih/i.test(s.hukum)) return "Zayıf"; for (const [t, r] of Object.entries(SOZ_TUR)) if (r && r.test(s.hukum)) return t; return "Tümü"; };
  function sozler() {
    const q = sozArama.q.toLocaleLowerCase("tr");
    const list = window.SOZLER.filter((s) => (sozArama.tur === "Tümü" || sozTuru(s) === sozArama.tur) && (!q || [s.soz, s.aciklama, s.hukum].join(" ").toLocaleLowerCase("tr").includes(q)));
    const html = `
      <a class="back" href="#/meseleler">← Meseleler</a>
      <h1>Dilden Dile Dolaşan Sözler</h1>
      ${window.SOZ_YONTEM ? `<details class="yontem"><summary>Bir sözü nasıl tahkik etmeli?</summary>
        <ol>${window.SOZ_YONTEM.ilkeler.map((x) => `<li>${esc(x)}</li>`).join("")}</ol>
        <h4>Başvuru kaynakları</h4><ul class="kaynak">${window.SOZ_YONTEM.kaynaklar.map((x) => `<li>${esc(x)}</li>`).join("")}</ul></details>` : ""}
      <div class="tabs">${Object.keys(SOZ_TUR).map((t) => `<a href="javascript:void 0" data-stur="${t}" class="${sozArama.tur === t ? "on" : ""}">${t}${t !== "Tümü" ? ` (${window.SOZLER.filter((s) => sozTuru(s) === t).length})` : ""}</a>`).join("")}</div>
      <input id="sara" class="search" type="search" placeholder="Söz ara…" value="${esc(sozArama.q)}">
      <div class="soz-liste">${list.map((s) => `<article class="soz-kart" id="soz-${s.id}">
        <div class="soz-ust"><span class="hukum">${esc(s.hukum)}</span></div>
        <p class="soz">“${esc(s.soz)}”</p>
        ${s.ar ? `<div class="nas-ar" lang="ar">${s.ar}</div>` : ""}
        <p>${s.aciklama}</p>
        <div class="dogrusu"><small>Sahih olan</small>
          ${s.dogrusu[0] ? `<div class="nas-ar" lang="ar">${s.dogrusu[0]}</div>` : ""}
          <p>${esc(s.dogrusu[1])}</p><small class="muted">${esc(s.dogrusu[2])}</small></div>
        ${refChips(s.ilgili)}
        <div class="sayfa-alt">${onayKutusu("soz:" + s.id)}</div>
      </article>`).join("") || `<p class="empty">Sonuç yok.</p>`}</div>`;
    return { html, bind: () => { aramaBind("sara", sozArama); bindOnay();
      document.querySelectorAll("[data-stur]").forEach((a) => a.onclick = (e) => { e.preventDefault(); sozArama.tur = a.dataset.stur; U().render(); }); ziyaret("sozler", "Dilden Dile Dolaşan Sözler", "#/sozler"); } };
  }

  // ───────── Hayatın içinden rehberler ─────────
  function rehberler() {
    const html = `
      <h1>Hayatın İçinden</h1>
      <div class="rgrid buyuk">${window.REHBERLER.map((r) => `<a class="rkart" href="#/rehber/${r.id}">
        <b>${esc(r.baslik)}</b><small class="muted">${esc(r.alt)}</small><p>${esc(r.giris.slice(0, 160))}…</p></a>`).join("")}</div>`;
    return { html };
  }
  function rehber(id) {
    const list = window.REHBERLER, i = list.findIndex((r) => r.id === id), r = list[i];
    if (!r) return rehberler();
    const key = "rehber:" + r.id, SSS = (window.REHBER_SSS || {})[r.id] || [];
    const html = `
      <a class="back" href="#/rehberler">← Hayatın içinden</a>
      ${yolBandi(key)}
      <article class="okuma mesele">
        <h1>${esc(r.baslik)}</h1>
        <p class="soru">${esc(r.alt)}</p>
        <p class="lead">${esc(r.giris)}</p>
        <nav class="bolum-nav">${r.bolumler.map((b, j) => `<a href="#rb${j}">${esc(b.baslik)}</a>`).join("")}${SSS.length ? `<a href="#rsss">İnce sorular</a>` : ""}<a href="#rdua">Dualar</a></nav>
        ${r.bolumler.map((b, j) => `<h2 id="rb${j}">${esc(b.baslik)}</h2>${b.html}`).join("")}
        ${SSS.length ? `<h2 id="rsss">İnce sorular</h2><div class="sss">${SSS.map((x) => `<details><summary>${esc(x.s)}</summary><p>${esc(x.c)}</p></details>`).join("")}</div>` : ""}
        <h2 id="rdua">Dualar</h2>
        ${r.dualar.map(([ar, tr, kaynak]) => `<div class="nas"><div class="nas-ar" lang="ar">${ar}</div><p>${esc(tr)}</p><small class="muted">${esc(kaynak)}</small></div>`).join("")}
        ${r.ilgili && r.ilgili.length ? `<h2>Bağlantılar</h2>${refChips(r.ilgili)}` : ""}
      </article>
      ${defterKutusu(key, "rehber", r.baslik, `#/rehber/${r.id}`)}
      <div class="sayfa-alt">${onayKutusu(key)}</div>
      ${pager(list, i, (x) => `#/rehber/${x.id}`, (x) => x.baslik)}`;
    const bind = () => {
      sayfaBind(key, r.baslik, `#/rehber/${r.id}`)();
      document.querySelectorAll(".bolum-nav a").forEach((a) => a.onclick = (e) => { e.preventDefault(); const t = document.getElementById(a.getAttribute("href").slice(1)); if (t) t.scrollIntoView({ behavior: "smooth", block: "start" }); });
    };
    return { html, bind };
  }

  Object.assign(window.Views, { anaSayfa, kuran, sure, meseleler, mesele, alimler, alim, yollar, yol, defter, derinles, kavramlar, kavram, konular, konu, sozler, rehberler, rehber, ekoller });
})();
