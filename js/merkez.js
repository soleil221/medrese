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
  const yolEk = (id) => (window.YOL_EK || {})[id] || {};
  const adimEk = (id, i) => (yolEk(id).adim || {})[i] || {};
  const etapBul = (id, i) => (yolEk(id).etaplar || []).find((e) => i >= e[1] && i <= e[2]);

  // Sayfa şablonlarındaki eski çağrılar: yol katmanı artık render sonrasında tek yerden eklenir.
  const yolBandi = () => "";
  const bindYolBandi = () => {};

  // Aktif yolun adımındaki sayfaya üstte okuma odağını, altta tedebbür panelini ekler.
  function yolKatmani() {
    const ay = S.aktifYol();
    if (!ay) return;
    const y = window.YOLLAR.find((x) => x.id === ay.id);
    const a = y && y.adimlar[ay.i];
    if (!a || adimHref(a) !== location.hash) return;
    const app = document.getElementById("app");
    if (!app || app.querySelector(".yol-bant")) return;
    if (a.t === "link") S.ziyaretEt(adimKey(a), adimBaslik(a), a.href);
    const d = adimEk(y.id, ay.i), et = etapBul(y.id, ay.i), N = y.adimlar.length;
    const bant = `<div class="yol-bant">
      <div class="yb-ust"><a href="#/yol/${y.id}"><b>${esc(y.baslik)}</b></a><small class="muted">${et ? esc(et[0]) + " · " : ""}${ay.i + 1}/${N}</small></div>
      ${d.odak ? `<p class="yb-odak"><small>Okurken</small>${esc(d.odak)}</p>` : ""}
    </div>`;
    const back = app.querySelector(":scope > .back");
    if (back) back.insertAdjacentHTML("afterend", bant); else app.insertAdjacentHTML("afterbegin", bant);

    const prev = y.adimlar[ay.i - 1], next = y.adimlar[ay.i + 1];
    const etapSonu = et && et[2] === ay.i && et[3];
    const panel = `<section class="yol-panel">
      <div class="yp-bas"><small class="muted">${esc(y.baslik)} · ${ay.i + 1}. adım</small><h2>Tedebbür</h2>${d.amac ? `<p class="muted">${esc(d.amac)}</p>` : ""}</div>
      ${d.not ? `<div class="yp-not"><h3>Derinleşme</h3><p>${arw(d.not)}</p></div>` : ""}
      ${(d.tedebbur || []).map(([q, yon]) => `<div class="yp-soru"><p>${arw(q)}</p><details><summary>Düşünme yönü</summary><p>${arw(yon)}</p></details></div>`).join("")}
      ${etapSonu ? `<div class="yp-etap"><small>“${esc(et[0])}” bölümünün sonunda</small><p>${arw(et[3])}</p></div>` : ""}
      ${defterKutusu(`yol:${y.id}:${ay.i}`, "yol", `${y.baslik} · ${adimBaslik(a)}`, adimHref(a), { etiket: "Kendi düşüncem", ipucu: "Sorulardan biri üzerine kendi cümlelerinle düşün..." })}
      <div class="yp-nav">
        ${prev ? `<a href="${adimHref(prev)}" data-yol-git="${ay.i - 1}">← ${esc(adimBaslik(prev))}</a>` : "<span></span>"}
        ${next ? `<a class="btn" href="${adimHref(next)}" data-yol-git="${ay.i + 1}">Sonraki: ${esc(adimBaslik(next))} →</a>` : `<a class="btn" href="#/yol/${y.id}">Yolu tamamla →</a>`}
      </div>
    </section>`;
    const kutular = app.querySelectorAll(".defter-kutu");
    const son = kutular[kutular.length - 1];
    if (son) son.insertAdjacentHTML("beforebegin", panel); else app.insertAdjacentHTML("beforeend", panel);
    app.querySelectorAll("[data-yol-git]").forEach((l) => l.addEventListener("click", () => S.aktifYolYap({ id: y.id, i: +l.dataset.yolGit })));
    bindDefterKutusu();
  }

  // ───────── Ortak parçalar ─────────
  function defterKutusu(ref, tip, baslik, href, o = {}) {
    const k = S.defterKaydi(ref);
    return `<section class="defter-kutu" data-ref="${esc(ref)}" data-tip="${tip}" data-baslik="${esc(baslik)}" data-href="${esc(href)}">
      <div class="dk-ust"><b>${esc(o.etiket || "İlim defterim")}</b>${k ? `<small class="muted">${k.guncel || k.tarih}</small>` : ""}</div>
      <textarea rows="${k && k.not ? 4 : 2}" placeholder="${esc(o.ipucu || "Bu konuda aklında kalan, sorduğun veya üzerinde düşündüğün...")}">${esc(k ? k.not : "")}</textarea>
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

  // Ana sayfada en fazla altı yol: önce devam edilenler, sonra başlanmamışlar, en son bitenler.
  function anaYollar() {
    const durum = (y) => { const n = yolIlerleme(y); return n && n < y.adimlar.length ? 0 : n ? 2 : 1; };
    return window.YOLLAR.map((y, i) => [y, durum(y), i]).sort((a, b) => a[1] - b[1] || a[2] - b[2]).slice(0, 6).map((x) => x[0]);
  }

  // Yürünmüş adımlardan, günden güne değişen bir tedebbür sorusu: ezber değil, yeniden düşünme.
  function tefekkurKarti() {
    const havuz = [];
    window.YOLLAR.forEach((y) => y.adimlar.forEach((a, i) => {
      if (!S.ziyaretEdildi(adimKey(a))) return;
      (adimEk(y.id, i).tedebbur || []).forEach(([q]) => havuz.push({ y, a, i, q }));
    }));
    if (!havuz.length) return "";
    const gun = Math.floor(Date.now() / 864e5);
    const t = havuz[(gun * 7919) % havuz.length];
    return `<a class="tefekkur-kart" href="${adimHref(t.a)}" data-tk-yol="${t.y.id}" data-tk-i="${t.i}">
      <small>Yeniden düşün · ${esc(t.y.baslik)} · ${esc(adimBaslik(t.a))}</small><p>${arw(t.q)}</p></a>`;
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

      ${tefekkurKarti()}

      <section>
        <div class="row-head"><h2>Öğrenme yolları</h2><a href="#/yollar">Tümü →</a></div>
        <div class="yol-grid">${anaYollar().map((y) => { const n = yolIlerleme(y); return `<a class="ykart" href="#/yol/${y.id}">
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
    return { html, bind: () => document.querySelectorAll("[data-tk-yol]").forEach((l) => l.addEventListener("click", () => S.aktifYolYap({ id: l.dataset.tkYol, i: +l.dataset.tkI }))) };
  }

  // ───────── Kur'an ─────────
  const LST = () => window.SURE_LISTE || [];
  const kuranState = { f: "Tümü", q: "" };
  const KURAN_SUZ = { "Tümü": () => true, "Anlam rehberi": (l) => !!SURE(l[0]), "Mekkî": (l) => l[3] === "Mekkî", "Medenî": (l) => l[3] === "Medenî" };
  function kuran() {
    const q = kuranState.q.toLocaleLowerCase("tr").trim();
    const list = LST().filter((l) => KURAN_SUZ[kuranState.f](l) && (!q || String(l[0]) === q || l[1].toLocaleLowerCase("tr").includes(q)));
    const html = `
      <h1>Kur'an'ı Anlamak</h1>
      <div class="tabs"><a class="on" href="#/kuran">Sureler</a><a href="#/konular">Konular</a></div>
      <div class="chips alan-chips">${Object.keys(KURAN_SUZ).map((f) => `<a href="javascript:void 0" class="achip ${kuranState.f === f ? "on" : ""}" data-ksuz="${f}">${f} <small>${LST().filter(KURAN_SUZ[f]).length}</small></a>`).join("")}</div>
      <input id="kara" class="search" type="search" placeholder="Sure adı veya numarası…" value="${esc(kuranState.q)}">
      <div class="sgrid">${list.map((l) => { const s = SURE(l[0]); return `<a class="skart ${s ? "rehberli" : ""}" href="#/sure/${l[0]}">
        <div class="sk-ust"><span class="sno">${l[0]}</span><span lang="ar">${esc(l[2])}</span></div>
        <b>${esc(l[1])}</b><small class="muted">${l[3]} · ${l[4]} âyet${S.ziyaretEdildi("sure:" + l[0]) ? " · okundu" : ""}</small>
        ${s ? `<p>${esc(s.mesaj.slice(0, 120))}…</p>` : `<p class="muted">Mushafta ${l[5]}. sayfa</p>`}</a>`; }).join("") || `<p class="empty">Sonuç yok.</p>`}</div>`;
    const bind = () => {
      document.querySelectorAll("[data-ksuz]").forEach((a) => a.onclick = (e) => { e.preventDefault(); kuranState.f = a.dataset.ksuz; U().render(); });
      const i = document.getElementById("kara");
      i.oninput = () => { kuranState.q = i.value; const p = i.selectionStart; U().render(); const n = document.getElementById("kara"); n.focus(); n.setSelectionRange(p, p); };
    };
    return { html, bind };
  }

  const sureState = { gizliMeal: false };
  const metinCache = {};
  function metinYukle(no) {
    if (metinCache[no] !== undefined) return;
    metinCache[no] = "yukleniyor";
    fetch(`data/kuran/${String(no).padStart(3, "0")}.json`).then((r) => { if (!r.ok) throw 0; return r.json(); })
      .then((d) => { metinCache[no] = d.ayetler; })
      .catch(() => { metinCache[no] = null; })
      .then(() => { if (location.hash === "#/sure/" + no) U().render(); });
  }
  function sure(no) {
    const L = LST().find((l) => l[0] === +no);
    if (!L) return kuran();
    const s = SURE(no), n = L[0], key = "sure:" + n, AL_ = AL(), M = MS(), list = LST(), i = n - 1;
    const yerel = s ? sureAyetleri(s) : [];
    let ayetler = yerel, durum = "";
    if (!yerel.length) {
      const c = metinCache[n];
      if (Array.isArray(c)) ayetler = c;
      else durum = c === null ? "hata" : "yukleniyor";
    }
    const tahlilVar = !!(window.TAHLIL || {})[n];
    const ayetHtml = durum === "yukleniyor" ? `<p class="muted yukleniyor">Âyetler yükleniyor…</p>`
      : durum === "hata" ? `<p class="notice">Âyetler şu anda yüklenemedi. İnternet bağlantını kontrol edip sayfayı yenile.</p>`
      : `<ol class="ayet-liste">${ayetler.map((a) => `<li>
          <div class="al-ar" lang="ar">${a.ar} <span class="ayet-no">${a.n}</span></div>
          <div class="al-tr ${sureState.gizliMeal ? "hid" : ""}">${esc(a.tr)}</div>
          <div class="al-arac"><button class="ghost sm" data-ayet="${a.n}" aria-label="${a.n}. âyeti dinle">▶</button><small data-amsg="${a.n}"></small></div>
        </li>`).join("")}</ol>
        ${!yerel.length ? `<p class="kaynak-not muted">Meal: Diyanet İşleri Başkanlığı. Metin ve meal kaynağı: Tanzil ve Kur'an Ansiklopedisi (quranenc.com).</p>` : ""}`;
    const html = `
      <a class="back" href="#/kuran">← Kur'an</a>
      ${yolBandi(key)}
      <header class="sure-bas">
        <div><h1>${esc(L[1])} Sûresi</h1><small class="muted">${n}. sure · ${esc(s ? s.inis : L[3])} · ${L[4]} âyet · Mushafta ${L[5]}. sayfa</small></div>
        <div class="sure-ar" lang="ar">${esc(L[2])}</div>
      </header>
      ${s && s.isimler ? `<p class="muted"><b>İsimleri:</b> ${esc(s.isimler)}</p>` : ""}

      ${s ? `<section class="okuma">
        <h2>Ana mesaj</h2><p class="lead">${esc(s.mesaj)}</p>
        <h3>İniş ortamı</h3><p>${esc(s.ortam)}</p>
      </section>` : ""}

      <section class="okuma">
        <div class="row-head"><h2>Âyetler</h2><label class="check"><input type="checkbox" id="gMeal" ${sureState.gizliMeal ? "checked" : ""}> Meali gizle</label></div>
        ${ayetHtml}
        ${tahlilVar ? `<p><a href="#/tahlil/${n}">Kelime kelime i'râb ve sarf tahlili →</a></p>` : ""}
      </section>

      ${s ? `<section class="okuma">
        <h2>Akış</h2>
        <ol class="akis">${s.akis.map((x) => `<li><span class="akis-ayet">${esc(x.ayet)}</span><div><b>${esc(x.baslik)}</b><p>${esc(x.aciklama)}</p></div></li>`).join("")}</ol>
      </section>

      <section class="okuma">
        <h2>Kavramlar</h2>
        <dl class="kavram">${s.kavramlar.map((k) => `<div><dt><span lang="ar">${k.ar}</span> ${esc(k.ad)}</dt><dd>${esc(k.aciklama)}</dd></div>`).join("")}</dl>
      </section>

      ${s.notlar && s.notlar.length ? `<section class="okuma"><h2>Âlimlerden notlar</h2>
        ${s.notlar.map((x) => `<blockquote class="alim-not">${arw(x.metin)}${x.alim && AL_[x.alim] ? `<footer>— <a href="#/alim/${x.alim}">${esc(AL_[x.alim].ad)}</a></footer>` : ""}</blockquote>`).join("")}</section>` : ""}

      <section class="okuma tefekkur"><h2>Tefekkür</h2><p>${esc(s.tefekkur)}</p></section>

      ${s.meseleler && s.meseleler.length ? `<section><h3>İlgili meseleler</h3><div class="mgrid">${s.meseleler.filter((id) => M[id]).map((id) => meseleKart(M[id])).join("")}</div></section>` : ""}` : ""}

      ${defterKutusu(key, "sure", `${L[1]} Sûresi`, `#/sure/${n}`)}
      ${s ? `<div class="sayfa-alt">${onayKutusu(key)}</div>` : ""}
      <nav class="pager">
        ${list[i - 1] ? `<a href="#/sure/${list[i - 1][0]}">← ${esc(list[i - 1][1])}</a>` : "<span></span>"}
        ${list[i + 1] ? `<a href="#/sure/${list[i + 1][0]}">${esc(list[i + 1][1])} →</a>` : "<span></span>"}
      </nav>`;
    const bind = () => {
      if (durum === "yukleniyor") metinYukle(n);
      ziyaret(key, `${L[1]} Sûresi`, `#/sure/${n}`);
      bindYolBandi(); bindDefterKutusu(); bindOnay();
      document.getElementById("gMeal").onchange = (e) => { sureState.gizliMeal = e.target.checked; U().render(); };
      document.querySelectorAll(".al-tr.hid").forEach((el) => el.onclick = () => el.classList.remove("hid"));
      document.querySelectorAll("[data-ayet]").forEach((b) => b.onclick = () => playAyet(n, +b.dataset.ayet, document.querySelector(`[data-amsg="${b.dataset.ayet}"]`)));
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
  const ALAN_GRUP = { "Fıkıh": /Fıkıh|Kazâ|Menâsik|Fetva|Hukuk|Ferâiz|maliye/, "Usul": /Usul|Makâsıd|Kavâid/, "Hadis": /Hadis/, "Tefsir": /Tefsir|Kıraat|Kur'an/, "Kelâm": /Kelâm|Akide/, "Tasavvuf": /Tasavvuf|Zühd|Ahlâk/, "Dil ve edebiyat": /Dil|Belâgat|Edebiyat/, "Tarih ve düşünce": /Tarih|Siyer|Düşünce|Sosyoloji|Siyaset|Felsefe|Dâvet|İlimler|Coğrafya|Bilim|Tıp|Mezhepler/ };
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
        <div class="agrid">${list.filter((a) => a.y === y).sort((p, q) => (parseInt(p.olum) || 0) - (parseInt(q.olum) || 0)).map((a) => `<a class="akart" href="#/alim/${a.id}">
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
    const key = "alim:" + a.id, E = AEK(a.id), D = (window.ALIM_DERIN || {})[a.id] || {};
    const hayat = E.hayat || D.hayat;
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
    const tercihler = [];
    Object.entries(window.DERINLIK || {}).forEach(([mid, d]) => (d.tercih || []).forEach((x) => { if (x.alim === a.id && MS()[mid]) tercihler.push({ m: MS()[mid], x }); }));
    const atif = atiflar("alim:" + a.id);
    const ekoller = (window.EKOLLER || []).filter((e) => e.ids.includes(a.id));
    const cagdas = window.ALIMLER.filter((b) => b.y === a.y && b.id !== a.id);
    const kimAd = (k) => A[k] ? `<a href="#/alim/${k}">${esc(A[k].ad)}</a>` : esc(k);
    // Eserler: açıklamalı olanlar önce, kalanlar sade liste
    const eserAc = D.eser || [];
    const kalanEser = a.eserler.filter((e) => !eserAc.some(([ad]) => e.toLocaleLowerCase("tr").includes(ad.toLocaleLowerCase("tr").split(" ")[0])));
    const bol = [["ozet", "Özet"], hayat && ["hayat", "Hayatı"], D.gorus && D.gorus.length && ["gorus", "Görüşleri"], ["yontem", "Yöntemi"], ["eser", "Eserleri"],
      ((D.soz && D.soz.length) || (D.hakkinda && D.hakkinda.length)) && ["soz", "Sözler"], ["silsile", "Silsile"], E.etki && ["etki", "Etkisi"],
      (goruslerde.length || tercihler.length || surelerde.length) && ["meseleler", "Meselelerde"]].filter(Boolean);
    const sayac = [[goruslerde.length, "meselede görüşü"], [tercihler.length, "tercihi"], [surelerde.length, "tefsir notu"], [talebeler.length, "talebe"]].filter(([n]) => n);
    const html = `
      <a class="back" href="#/alimler">← Âlimler</a>
      ${yolBandi(key)}
      <article class="okuma alim">
        <header class="alim-hero">
          <div class="ah-ust">
            <div><small class="muted">Hicrî ${a.y}. asır</small><h1>${esc(a.ad)}</h1></div>
            ${a.ar ? `<div class="alim-ar" lang="ar">${a.ar}</div>` : ""}
          </div>
          <dl class="ah-bilgi">
            <div><dt>Vefatı</dt><dd>${esc(a.olum)}</dd></div>
            <div><dt>Şehirleri</dt><dd>${esc(a.sehir)}</dd></div>
            <div><dt>Ekolü</dt><dd>${esc(a.ekol)}</dd></div>
          </dl>
          ${E.alan ? `<div class="chips">${E.alan.map((x) => `<span class="achip plain">${esc(x)}</span>`).join("")}</div>` : ""}
          ${sayac.length ? `<div class="ah-sayac">${sayac.map(([n, t]) => `<span><b>${n}</b> ${t}</span>`).join("")}</div>` : ""}
        </header>
        <nav class="bolum-nav">${bol.map(([k, t]) => `<a href="#a-${k}">${t}</a>`).join("")}</nav>

        <section id="a-ozet"><p class="lead">${a.ozet}</p></section>

        ${hayat ? `<section id="a-hayat"><h2>Hayatı</h2><ol class="seyir">${hayat.map(([t, o]) => `<li><b>${esc(t)}</b><p>${esc(o)}</p></li>`).join("")}</ol></section>` : ""}

        ${D.gorus && D.gorus.length ? `<section id="a-gorus"><h2>Öne çıkan görüşleri ve katkıları</h2>
          <ol class="gorus-kart">${D.gorus.map((g) => `<li>${esc(g)}</li>`).join("")}</ol></section>` : ""}

        <section id="a-yontem"><h2>İlmî yöntemi</h2><p>${a.metod}</p></section>

        <section id="a-eser"><h2>Eserleri</h2>
          ${eserAc.length ? `<div class="eser-grid">${eserAc.map(([ad, ac]) => `<div class="eser-kart"><b>${esc(ad)}</b><p>${esc(ac)}</p></div>`).join("")}</div>` : ""}
          ${kalanEser.length ? `<ul class="eser-diger">${kalanEser.map((e) => `<li>${esc(e)}</li>`).join("")}</ul>` : ""}
          ${E.okuma ? `<div class="ornek-kutu"><small>Okumaya nereden başlamalı?</small><p>${esc(E.okuma)}</p></div>` : ""}
        </section>

        ${(D.soz && D.soz.length) || (D.hakkinda && D.hakkinda.length) ? `<section id="a-soz">
          ${D.soz && D.soz.length ? `<h2>Sözlerinden</h2>${D.soz.map(([t, k]) => `<blockquote class="alim-not soz-alinti"><p>“${esc(t)}”</p><footer>${esc(k)}</footer></blockquote>`).join("")}` : ""}
          ${D.hakkinda && D.hakkinda.length ? `<h2>Hakkında söylenenler</h2>${D.hakkinda.map(([kim, t, k]) => `<blockquote class="alim-not hakkinda"><p>“${esc(t)}”</p><footer>— ${kimAd(kim)}${k ? ` <small class="muted">· ${esc(k)}</small>` : ""}</footer></blockquote>`).join("")}` : ""}
        </section>` : ""}

        <section id="a-silsile"><h2>Silsile</h2>
          <div class="silsile">
            <div><h4>Hocaları</h4><div class="chips">${hocalar.map(kisiChip).join("") || "—"}</div></div>
            <div class="silsile-ok">↓</div>
            <div class="silsile-ben"><b>${esc(a.ad)}</b></div>
            <div class="silsile-ok">↓</div>
            <div><h4>Talebeleri</h4><div class="chips">${talebeler.map(kisiChip).join("") || "—"}</div></div>
          </div>
          ${ekoller.length ? `<h3>Yer aldığı gelenekler</h3><div class="chips">${ekoller.map((e) => `<a class="achip" href="#/ekoller"><b>${esc(e.ad)}</b></a>`).join("")}</div>` : ""}
        </section>

        ${E.etki ? `<section id="a-etki"><h2>Etkisi ve hakkındaki tartışmalar</h2><p>${esc(E.etki)}</p></section>` : ""}

        ${goruslerde.length || tercihler.length || surelerde.length ? `<section id="a-meseleler">
          ${goruslerde.length ? `<h2>Meselelerdeki görüşleri</h2><ul class="gorus-list">${goruslerde.map(({ m, g }) => `<li><a href="#/mesele/${m.id}"><b>${esc(m.baslik)}</b></a> <small class="muted">${esc(g.ekol)}</small><p>${g.hukum}</p></li>`).join("")}</ul>` : ""}
          ${tercihler.length ? `<h2>Muhakkik olarak tercihleri</h2><ul class="gorus-list">${tercihler.map(({ m, x }) => `<li><a href="#/mesele/${m.id}"><b>${esc(m.baslik)}</b></a><p>${esc(x.metin)}</p></li>`).join("")}</ul>` : ""}
          ${surelerde.length ? `<h2>Tefsir notları</h2><ul class="gorus-list">${surelerde.map(({ s, n }) => `<li><a href="#/sure/${s.no}"><b>${esc(s.ad)} Sûresi</b></a><p>${arw(n.metin)}</p></li>`).join("")}</ul>` : ""}
        </section>` : ""}

        ${atif.length ? `<h2>Geçtiği kavram ve konular</h2>${refChips(atif)}` : ""}
        ${cagdas.length ? `<h2>Aynı asrın âlimleri</h2><div class="chips">${cagdas.map((b) => alimChip(b.id)).join("")}</div>` : ""}
      </article>
      ${defterKutusu(key, "alim", a.ad, `#/alim/${a.id}`)}
      <div class="sayfa-alt">${onayKutusu(key)}</div>
      ${(() => { const vy = (x) => parseInt(String(x.olum).replace(/[^0-9].*$/, "").replace(/^$/, "0"), 10) || x.y * 100, L = [...window.ALIMLER].sort((x, y) => x.y - y.y || vy(x) - vy(y)), i = L.indexOf(a); return pager(L, i, (x) => `#/alim/${x.id}`, (x) => x.ad); })()}`;
    const bind = () => {
      ziyaret(key, a.ad, `#/alim/${a.id}`); bindYolBandi(); bindDefterKutusu(); bindOnay();
      document.querySelectorAll(".bolum-nav a").forEach((x) => x.onclick = (e) => { e.preventDefault(); const t = document.getElementById(x.getAttribute("href").slice(1)); if (t) t.scrollIntoView({ behavior: "smooth", block: "start" }); });
    };
    return { html, bind };
  }

  // ───────── Öğrenme yolları ─────────
  const YOL_GRUP = [
    ["Kur'an ile tefekkür", ["son-sayfalar", "kuran-konulari", "siyer"]],
    ["İnanç", ["inanc", "iman", "yaratilis"]],
    ["Fıkıh ve hayat", ["ihtilaf", "cagdas", "aile", "tesettur", "faiz"]],
    ["İlimlerin temelleri", ["kuran-ilimleri", "hadis-okumak", "usul-kavramlari", "tasavvuf", "dusunce-tarihi"]]
  ];
  function yollar() {
    const kart = (y) => { const n = yolIlerleme(y), et = yolEk(y.id).etaplar || []; return `<a class="ykart buyuk" href="#/yol/${y.id}">
        <b>${esc(y.baslik)}</b><p>${esc(y.alt)}</p>${et.length ? `<small class="ykart-etap">${et.map((e) => esc(e[0])).join(" · ")}</small>` : ""}${U().bar(n / y.adimlar.length)}<small class="muted">${n}/${y.adimlar.length} adım</small></a>`; };
    const grupta = new Set(YOL_GRUP.flatMap((g) => g[1]));
    const gruplar = YOL_GRUP.map(([ad, ids]) => [ad, ids.map((id) => window.YOLLAR.find((y) => y.id === id)).filter(Boolean)]);
    const diger = window.YOLLAR.filter((y) => !grupta.has(y.id));
    if (diger.length) gruplar.push(["Diğer", diger]);
    const html = `
      <h1>Öğrenme Yolları</h1>
      ${gruplar.filter((g) => g[1].length).map(([ad, ys]) => `<section><h2 class="alan-bas">${esc(ad)}</h2><div class="yol-grid">${ys.map(kart).join("")}</div></section>`).join("")}`;
    return { html };
  }

  function yol(id) {
    const y = window.YOLLAR.find((x) => x.id === id);
    if (!y) return yollar();
    const ek = yolEk(y.id), N = y.adimlar.length;
    const n = yolIlerleme(y);
    const ilkEksik = y.adimlar.findIndex((a) => !S.ziyaretEdildi(adimKey(a)));
    const adimLi = (a, i) => {
      const ok = S.ziyaretEdildi(adimKey(a)), d = adimEk(y.id, i), notlu = S.defterKaydi(`yol:${y.id}:${i}`);
      return `<li class="${ok ? "ok" : ""} ${i === ilkEksik ? "sirada" : ""}">
        <span class="adim-no">${ok ? "✓" : i + 1}</span>
        <a href="${adimHref(a)}" data-adim="${i}"><small class="muted">${adimTur[a.t]}${notlu ? " · düşünce notun var" : ""}</small><b>${esc(adimBaslik(a))}</b><span>${arw(a.not)}</span>
        ${d.odak ? `<em class="adim-odak">${esc(d.odak)}</em>` : ""}</a>
      </li>`;
    };
    const etaplar = ek.etaplar && ek.etaplar.length ? ek.etaplar : [["", 0, N - 1, ""]];
    const html = `
      <a class="back" href="#/yollar">← Öğrenme yolları</a>
      <header class="yol-bas"><h1>${esc(y.baslik)}</h1><p class="muted">${esc(y.alt)}</p>${U().bar(n / N)}<small class="muted">${n}/${N} adım${ek.sure ? " · " + esc(ek.sure) : ""}</small></header>
      <p class="lead">${esc(y.giris)}</p>
      ${ek.buyukResim ? `<section class="okuma yol-resim"><h2>Yolun büyük resmi</h2><p>${arw(ek.buyukResim)}</p></section>` : ""}
      ${ek.hedefler ? `<section class="yol-hedef"><h2>Bu yolun sonunda</h2><ul>${ek.hedefler.map((h) => `<li>${esc(h)}</li>`).join("")}</ul>${ek.onbilgi ? `<small class="muted">Ön bilgi: ${esc(ek.onbilgi)}</small>` : ""}</section>` : ""}
      ${ilkEksik >= 0 ? `<p><a class="btn" href="${adimHref(y.adimlar[ilkEksik])}" data-adim="${ilkEksik}">${n ? "Kaldığın yerden devam et" : "Başla"} →</a></p>` : ""}
      ${etaplar.map(([ad, ilk, son, bag], k) => `<section class="etap">
        ${ad ? `<h2 class="etap-bas"><small>${k + 1}. bölüm</small>${esc(ad)}</h2>` : ""}
        <ol class="adimlar" start="${ilk + 1}">${y.adimlar.slice(ilk, son + 1).map((a, j) => adimLi(a, ilk + j)).join("")}</ol>
        ${bag ? `<div class="yp-etap"><small>Bölümün sonunda düşün</small><p>${arw(bag)}</p></div>` : ""}
      </section>`).join("")}
      <section class="okuma tefekkur"><h2>Yolun sonunda</h2><p>${esc(y.soru)}</p></section>
      ${ek.sentez ? `<section class="yol-sentez"><h2>Sentez</h2><p>${arw(ek.sentez)}</p></section>` : ""}
      ${defterKutusu("yol:" + y.id, "yol", y.baslik, `#/yol/${y.id}`, ek.sentez ? { etiket: "Sentez yazım", ipucu: "Yolun sonunda kendi cümlelerinle..." } : {})}`;
    const bind = () => {
      document.querySelectorAll("[data-adim]").forEach((a) => a.addEventListener("click", () => S.aktifYolYap({ id: y.id, i: +a.dataset.adim })));
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
    const K = KN(), kart = (k) => `<a class="skart" href="#/konu/${k.id}">
        <div class="sk-ust"><b>${esc(k.ad)}</b><span lang="ar">${k.ar}</span></div>
        <small class="muted">${k.ayetler.length} âyet grubu${S.ziyaretEdildi("konu:" + k.id) ? " · okundu" : ""}</small>
        <p>${esc(k.ozet.slice(0, 150))}…</p></a>`;
    const G = window.KONU_GRUP || [["", "", window.KONULAR.map((k) => k.id)]];
    const grupta = new Set(G.flatMap((g) => g[2]));
    const diger = window.KONULAR.filter((k) => !grupta.has(k.id));
    const html = `
      <h1>Kur'an'ı Anlamak</h1>
      <div class="tabs"><a href="#/kuran">Sureler</a><a class="on" href="#/konular">Konular</a></div>
      ${G.map(([ad, alt, ids]) => `<section>${ad ? `<h2 class="alan-bas">${esc(ad)} <small class="muted">${esc(alt)}</small></h2>` : ""}<div class="sgrid">${ids.filter((id) => K[id]).map((id) => kart(K[id])).join("")}</div></section>`).join("")}
      ${diger.length ? `<section><h2 class="alan-bas">Diğer</h2><div class="sgrid">${diger.map(kart).join("")}</div></section>` : ""}`;
    return { html };
  }
  // Konu sayfasının tedebbür ve derinlik bölümleri (KONU_DERIN).
  function konuDerinHtml(D, yer) {
    if (!D) return "";
    if (yer === "kok" && D.kok) return `<section class="kd-kok" id="kd-kok"><h2>Kelimenin dünyası</h2>
      <div class="kd-harf" lang="ar">${esc(D.kok.harf)}</div><p>${arw(D.kok.anlam)}</p>
      ${D.kok.komsu ? `<h3>Yakın kavramlar</h3><dl class="kd-komsu">${D.kok.komsu.map(([k, f]) => `<dt>${esc(k)}</dt><dd>${arw(f)}</dd>`).join("")}</dl>` : ""}</section>`;
    if (yer === "seyir" && D.seyir) return `<section id="kd-seyir"><h2>Kur'an'daki seyri</h2><ol class="kd-seyir">${D.seyir.map(([d, m]) => `<li><b>${esc(d)}</b><p>${arw(m)}</p></li>`).join("")}</ol></section>`;
    if (yer === "yakin" && D.yakin) return `<section class="kd-yakin" id="kd-yakin"><h2>Bir âyeti yakından okumak</h2>
      <div class="nas"><div class="nas-ar" lang="ar">${D.yakin.ar}</div><p>${esc(D.yakin.tr)}</p><small class="muted">${esc(D.yakin.ref)}</small></div>
      <ol class="kd-incelik">${D.yakin.incelikler.map(([b, m]) => `<li><b>${esc(b)}</b><p>${arw(m)}</p></li>`).join("")}</ol></section>`;
    if (yer === "mun" && D.munakasa) return `<section class="kd-mun" id="kd-mun"><h2>Âlimlerin tartışması</h2><h3>${esc(D.munakasa.baslik)}</h3>
      ${D.munakasa.taraflar.map(([t, m]) => `<div class="kd-taraf"><b>${esc(t)}</b><p>${arw(m)}</p></div>`).join("")}
      <p class="kd-sonuc"><small>Sonuç</small>${arw(D.munakasa.sonuc)}</p></section>`;
    if (yer === "metin" && D.metin) { const a = D.metin.alim && AL()[D.metin.alim]; return `<section class="kd-metin" id="kd-metin"><h2>Klasik bir sayfadan</h2>
      <blockquote class="alim-not"><p>${arw(D.metin.metin)}</p><footer>— ${a ? `<a href="#/alim/${a.id}">${esc(a.ad)}</a>` : esc(D.metin.ad || "")}, <i>${esc(D.metin.eser)}</i></footer></blockquote></section>`; }
    if (yer === "bugun" && D.bugun) return `<section class="kd-bugun" id="kd-bugun"><h2>Bugün</h2><p>${arw(D.bugun)}</p></section>`;
    if (yer === "bag" && D.baglar) { const K = KN(); return `<section class="kd-bag" id="kd-bag"><h2>Diğer konularla bağı</h2><ul>${D.baglar.filter(([id]) => K[id]).map(([id, m]) => `<li><a href="#/konu/${id}"><b>${esc(K[id].ad)}</b></a><span>${arw(m)}</span></li>`).join("")}</ul></section>`; }
    if (yer === "tedebbur" && D.tedebbur) return `<section class="kd-tedebbur" id="kd-tedebbur"><h2>Tedebbür</h2>
      ${D.tedebbur.map(([q, yon]) => `<div class="yp-soru"><p>${arw(q)}</p><details><summary>Düşünme yönü</summary><p>${arw(yon)}</p></details></div>`).join("")}</section>`;
    return "";
  }

  function konu(id) {
    const list = window.KONULAR, i = list.findIndex((k) => k.id === id), k = list[i];
    if (!k) return konular();
    const key = "konu:" + k.id, E = (window.KONU_EK || {})[k.id] || {}, D = (window.KONU_DERIN || {})[k.id];
    const ic = [["kd-ayet", "Âyetler"], D && D.kok && ["kd-kok", "Kelime"], ["kd-boyut", "Boyutlar"], D && D.seyir && ["kd-seyir", "Seyir"], D && D.yakin && ["kd-yakin", "Yakın okuma"], D && D.munakasa && ["kd-mun", "Tartışma"], D && D.metin && ["kd-metin", "Klasik sayfa"], D && D.bugun && ["kd-bugun", "Bugün"], D && D.tedebbur && ["kd-tedebbur", "Tedebbür"], D && D.baglar && ["kd-bag", "Bağlar"]].filter(Boolean);
    const html = `
      <a class="back" href="#/konular">← Konular</a>
      ${yolBandi(key)}
      <article class="okuma">
        <header class="sure-bas"><div><h1>${esc(k.ad)}</h1></div><div class="sure-ar" lang="ar">${k.ar}</div></header>
        <p class="lead">${esc(k.ozet)}</p>
        ${D ? `<nav class="kd-ic">${ic.map(([h, t]) => `<a href="javascript:void 0" data-kd="${h}">${t}</a>`).join("")}</nav>` : ""}
        <h2 id="kd-ayet">Âyetler</h2>
        ${k.ayetler.map(([ref, ar, tr]) => `<div class="nas"><div class="nas-ar" lang="ar">${ar}</div><p>${esc(tr)}</p><small class="muted">${esc(ref)}</small></div>`).join("")}
        ${konuDerinHtml(D, "kok")}
        <div id="kd-boyut"></div>
        ${k.boyutlar.map((b) => `<h2>${esc(b.baslik)}</h2><p>${b.metin}</p>`).join("")}
        ${E.kissa ? `<h2>Kıssa: ${esc(E.kissa.baslik)}</h2><p>${esc(E.kissa.metin)}</p>` : ""}
        ${E.hadisler ? `<h2>Hadislerden</h2>${E.hadisler.map(([t, kay]) => `<div class="nas hadis"><p>${esc(t)}</p><small class="muted">${esc(kay)}</small></div>`).join("")}` : ""}
        ${E.sozler ? `<h2>Âlimlerden</h2>${E.sozler.map((x) => { const a = AL()[x.alim]; return `<blockquote class="alim-not"><p>${esc(x.metin)}</p>${a ? `<footer>— <a href="#/alim/${a.id}">${esc(a.ad)}</a></footer>` : ""}</blockquote>`; }).join("")}` : ""}
        ${konuDerinHtml(D, "seyir")}
        ${konuDerinHtml(D, "yakin")}
        ${konuDerinHtml(D, "mun")}
        ${konuDerinHtml(D, "metin")}
        ${konuDerinHtml(D, "bugun")}
        ${E.uygulama ? `<div class="ornek-kutu"><small>Bu hafta</small><p>${esc(E.uygulama)}</p></div>` : ""}
      </article>
      <section class="okuma tefekkur"><h2>Tefekkür</h2><p>${esc(k.tefekkur)}</p></section>
      ${konuDerinHtml(D, "tedebbur")}
      ${konuDerinHtml(D, "bag")}
      ${k.ilgili && k.ilgili.length ? `<section><h3>Bağlantılar</h3>${refChips(k.ilgili)}</section>` : ""}
      ${defterKutusu(key, "konu", k.ad, `#/konu/${k.id}`)}
      <div class="sayfa-alt">${onayKutusu(key)}</div>
      ${pager(list, i, (x) => `#/konu/${x.id}`, (x) => x.ad)}`;
    const temel = sayfaBind(key, k.ad, `#/konu/${k.id}`);
    return { html, bind: () => { temel(); document.querySelectorAll("[data-kd]").forEach((a) => a.onclick = () => { const h = document.getElementById(a.dataset.kd); if (h) h.scrollIntoView({ behavior: "smooth", block: "start" }); }); } };
  }

  // ───────── Yaygın sözler ─────────
  const sozArama = { q: "", tur: "Tümü" };
  const SOZ_TUR = { "Tümü": null, "Uydurma": /uydurma/i, "Aslı yok": /aslı yok|sabit değil|hadis değil|nispeti/i, "Zayıf": /zayıf/i, "Tartışmalı": /tartışmalı/i };
  const sozTuru = (s) => { if (/manası sahih/i.test(s.hukum)) return "Zayıf"; for (const [t, r] of Object.entries(SOZ_TUR)) if (r && r.test(s.hukum)) return t; return "Tümü"; };
  // Sözün ayrıntılı incelemesi (SOZ_DERIN)
  function sozDerin(id) {
    const D = (window.SOZ_DERIN || {})[id];
    if (!D) return "";
    const b = [["Neden yaygınlaştı?", D.yayilis], ["Mananın değerlendirmesi", D.mana], ["Usul dersi", D.ders], ["Nasıl söylenmeli?", D.dil]].filter((x) => x[1]);
    return `<details class="soz-derin"><summary>Ayrıntılı inceleme</summary>${b.map(([t, m]) => `<div class="sd-bolum"><b>${t}</b><p>${arw(m)}</p></div>`).join("")}</details>`;
  }
  function sozler() {
    const q = sozArama.q.toLocaleLowerCase("tr");
    const list = window.SOZLER.filter((s) => (sozArama.tur === "Tümü" || sozTuru(s) === sozArama.tur) && (!q || [s.soz, s.aciklama, s.hukum, ...Object.values((window.SOZ_DERIN || {})[s.id] || {})].join(" ").toLocaleLowerCase("tr").includes(q)));
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
        ${sozDerin(s.id)}
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

  Object.assign(window.Views, { yolKatmani, anaSayfa, kuran, sure, meseleler, mesele, alimler, alim, yollar, yol, defter, derinles, kavramlar, kavram, konular, konu, sozler, rehberler, rehber, ekoller });
})();
