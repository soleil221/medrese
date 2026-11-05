// Çekim (tasrîf) motoru.
// Sülâsî mücerred: sâlim, mehmûz, muzâaf, misâl, ecvef, nâkıs (lefîf ve birleşik illetler hariç).
// Sülâsî mezîd: 8 bab (yalnız sâlim kökler).
(function () {
  const FA = "َ", DA = "ُ", KA = "ِ", SU = "ْ", SH = "ّ";
  const FT = "ً", TD = "ٌ", KT = "ٍ";
  const V = { a: FA, u: DA, i: KA };
  const LONG = { a: "ا", u: "و", i: "ي" };

  const BABS = [
    { n: 1, ad: "نَصَرَ يَنْصُرُ", m: "a", u: "u" },
    { n: 2, ad: "ضَرَبَ يَضْرِبُ", m: "a", u: "i" },
    { n: 3, ad: "فَتَحَ يَفْتَحُ", m: "a", u: "a" },
    { n: 4, ad: "عَلِمَ يَعْلَمُ", m: "i", u: "a" },
    { n: 5, ad: "حَسُنَ يَحْسُنُ", m: "u", u: "u" },
    { n: 6, ad: "حَسِبَ يَحْسِبُ", m: "i", u: "i" }
  ];

  const SIGA = [
    ["Müfred müzekker gâib", "o (er.)"], ["Tesniye müzekker gâib", "o ikisi (er.)"], ["Cem-i müzekker gâib", "onlar (er.)"],
    ["Müfred müennes gâibe", "o (kadın)"], ["Tesniye müennes gâibe", "o ikisi (kadın)"], ["Cem-i müennes gâibe", "onlar (kadın)"],
    ["Müfred müzekker muhâtab", "sen (er.)"], ["Tesniye müzekker muhâtab", "siz ikiniz (er.)"], ["Cem-i müzekker muhâtab", "siz (er.)"],
    ["Müfred müennes muhâtaba", "sen (kadın)"], ["Tesniye müennes muhâtaba", "siz ikiniz (kadın)"], ["Cem-i müennes muhâtaba", "siz (kadın)"],
    ["Nefs-i mütekellim vahde", "ben"], ["Nefs-i mütekellim maa'l-gayr", "biz"]
  ];

  // Lâmü'l-fiilden sonraki ekler (lâmın harekesiyle birlikte)
  const MAZI_EK = [FA, FA + "ا", DA + "وا", FA + "تْ", FA + "تَا", SU + "نَ", SU + "تَ", SU + "تُمَا", SU + "تُمْ", SU + "تِ", SU + "تُمَا", SU + "تُنَّ", SU + "تُ", SU + "نَا"];
  const MUZ_ON = ["ي", "ي", "ي", "ت", "ت", "ي", "ت", "ت", "ت", "ت", "ت", "ت", "أ", "ن"];
  const MUZ_EK = [DA, FA + "انِ", DA + "ونَ", DA, FA + "انِ", SU + "نَ", DA, FA + "انِ", DA + "ونَ", KA + "ينَ", FA + "انِ", SU + "نَ", DA, DA];
  const CEZM_EK = [SU, FA + "ا", DA + "وا", KA + "ي", FA + "ا", SU + "نَ"]; // muhâtab sîgaları (7–12)
  const NUN = new Set([5, 11]); // cem-i müennes (نَ) sîgaları: lâm daima sâkin

  // ───────── Hemze imlâsı (kürsü) ─────────
  const MARKS = /[ً-ْ]/;
  const RANK = { s: 0, a: 1, u: 2, i: 3 };
  const SEAT = { a: "أ", u: "ؤ", i: "ئ" };
  function tokens(w) {
    const t = [];
    for (const ch of w) { if (MARKS.test(ch) && t.length) t[t.length - 1].m += ch; else t.push({ c: ch, m: "" }); }
    return t;
  }
  function vow(tok) {
    const m = tok.m;
    if (m.includes(KA) || m.includes(KT)) return "i";
    if (m.includes(DA) || m.includes(TD)) return "u";
    if (m.includes(FA) || m.includes(FT)) return "a";
    return "s";
  }
  function seatWord(w) {
    const t = tokens(w);
    t.forEach((tok, i) => {
      if (tok.c !== "ء") return;
      if (i === 0) { tok.c = vow(tok) === "i" ? "إ" : "أ"; return; }
      const prev = t[i - 1], own = vow(tok), pv = vow(prev);
      const prevMed = !prev.m && "اوي".includes(prev.c);
      if (i === t.length - 1) { tok.c = prevMed || pv === "s" ? "ء" : SEAT[pv]; return; }
      if (own === "s") { tok.c = SEAT[pv] || "ء"; return; }
      if (prevMed && own === "a") { tok.c = "ء"; return; }
      tok.c = SEAT[RANK[own] >= RANK[pv] ? own : pv];
    });
    return t.map((x) => x.c + x.m).join("")
      .replace(/أَأْ/g, "آ").replace(/أَا/g, "آ").replace(/أُؤْ/g, "أُو").replace(/إِئْ/g, "إِي")
      .replace(/اُؤْ/g, "اُو").replace(/اِئْ/g, "اِي");
  }
  const seat = (s) => s.split(" ").map(seatWord).join(" ");

  // ───────── Kök çözümleme ─────────
  const STRIP = /[ً-ٰٟـ\s]/g;
  function analyze(input) {
    let letters = [...String(input).replace(STRIP, "")].map((c) => ("أإؤئآ".includes(c) ? "ء" : c === "ى" ? "ي" : c));
    if (letters.length !== 3) return { error: "Kök tam olarak üç harf olmalı (ör. ك ت ب)." };
    if (!letters.every((c) => /[ء-ي]/.test(c))) return { error: "Lütfen Arapça harfler gir." };
    if (letters.includes("ا")) return { error: "Kökte elif bulunmaz; kökün aslını yaz (قال → قول، باع → بيع، دعا → دعو)." };
    if (letters.includes("ة")) return { error: "Tâ-i merbûta kökte bulunmaz." };
    const [f, a, l] = letters;
    const ill = (c) => c === "و" || c === "ي";
    const flags = [];
    if (letters.includes("ء")) flags.push("mehmuz");
    if (ill(f)) flags.push("misal");
    if (ill(a)) flags.push("ecvef");
    if (ill(l)) flags.push("nakis");
    if (a === l && !ill(a)) flags.push("muzaaf");
    if (flags.length > 1) return { error: "Bu kökte birden fazla illet/hemze var (lefîf veya mehmûz-mu'tel, ör. وقي، رأي). Bu tür fiiller henüz desteklenmiyor." };
    const type = flags[0] || "salim";
    const pos = letters.indexOf("ء");
    const label = {
      salim: "Sâlim",
      mehmuz: ["Mehmûzü'l-fâ", "Mehmûzü'l-ayn", "Mehmûzü'l-lâm"][pos],
      muzaaf: "Muzâaf",
      misal: f === "و" ? "Misâl-i vâvî" : "Misâl-i yâî",
      ecvef: a === "و" ? "Ecvef-i vâvî" : "Ecvef-i yâî",
      nakis: l === "و" ? "Nâkıs-ı vâvî" : "Nâkıs-ı yâî"
    }[type];
    return { root: letters, type, label };
  }

  // ───────── Sülâsî mücerred ─────────
  function salim([f, a, l], bab) {
    const vm = V[bab.m], vu = V[bab.u], hemze = bab.u === "u" ? "اُ" : "اِ";
    const muz = (p, pv, av) => p + pv + f + SU + a + av + l;
    return {
      maziMalum: MAZI_EK.map((e) => f + FA + a + vm + l + e),
      maziMechul: MAZI_EK.map((e) => f + DA + a + KA + l + e),
      muzariMalum: MUZ_ON.map((p, i) => muz(p, FA, vu) + MUZ_EK[i]),
      muzariMechul: MUZ_ON.map((p, i) => muz(p, DA, FA) + MUZ_EK[i]),
      emir: CEZM_EK.map((e) => hemze + f + SU + a + vu + l + e),
      nehy: CEZM_EK.map((e) => "لَا " + muz("ت", FA, vu) + e),
      ismiFail: f + FA + "ا" + a + KA + l + TD,
      ismiMeful: "مَ" + f + SU + a + DA + "و" + l + TD
    };
  }

  const mapAll = (r, fn) => {
    for (const k of Object.keys(r)) r[k] = Array.isArray(r[k]) ? r[k].map(fn) : fn(r[k]);
    return r;
  };

  function mehmuz(root, bab) {
    const r = mapAll(salim(root, bab), seat);
    const notes = [];
    const k = root.join("");
    const ozel = { "ءخذ": "خُذ", "ءكل": "كُل", "ءمر": "مُر" }[k];
    if (ozel) {
      r.emir = CEZM_EK.map((e) => ozel + e);
      notes.push("Bu fiilin emri kural dışıdır: hemze düşer (" + ozel + "ْ).");
    }
    return { r, notes };
  }

  function muzaaf([f, a, l], bab) {
    const vm = V[bab.m], vu = V[bab.u], hemze = bab.u === "u" ? "اُ" : "اِ";
    const r = {
      maziMalum: MAZI_EK.map((e, i) => (i < 5 ? f + FA + a + SH + e : f + FA + a + vm + l + e)),
      maziMechul: MAZI_EK.map((e, i) => (i < 5 ? f + DA + a + SH + e : f + DA + a + KA + l + e)),
      muzariMalum: MUZ_ON.map((p, i) => (NUN.has(i) ? p + FA + f + SU + a + vu + l : p + FA + f + vu + a + SH) + MUZ_EK[i]),
      muzariMechul: MUZ_ON.map((p, i) => (NUN.has(i) ? p + DA + f + SU + a + FA + l : p + DA + f + FA + a + SH) + MUZ_EK[i]),
      emir: CEZM_EK.map((e, j) =>
        j === 0 ? `${f + vu + a + SH + FA} / ${hemze + f + SU + a + vu + l + SU}` :
        j === 5 ? hemze + f + SU + a + vu + l + e : f + vu + a + SH + e),
      nehy: CEZM_EK.map((e, j) =>
        j === 0 ? `لَا تَ${f + vu + a + SH + FA} / لَا تَ${f + SU + a + vu + l + SU}` :
        j === 5 ? "لَا تَ" + f + SU + a + vu + l + e : "لَا تَ" + f + vu + a + SH + e),
      ismiFail: f + FA + "ا" + a + SH + TD,
      ismiMeful: "مَ" + f + SU + a + DA + "و" + l + TD
    };
    return { r, notes: ["Harekeli ekler gelince iki aynı harf idğam edilir (مَدَّ); sâkin ekte idğam çözülür (مَدَدْتُ). Emrin müfred müzekker sîgasında iki okuyuş vardır."] };
  }

  function misal(root, bab) {
    const [f, a, l] = root;
    const r = salim(root, bab);
    const notes = [];
    const vu = V[bab.u];
    if (f === "و" && [2, 3, 6].includes(bab.n)) {
      r.muzariMalum = MUZ_ON.map((p, i) => p + FA + a + vu + l + MUZ_EK[i]);
      r.emir = CEZM_EK.map((e) => a + vu + l + e);
      r.nehy = CEZM_EK.map((e) => "لَا تَ" + a + vu + l + e);
      notes.push("Misâl-i vâvîde muzâri ma'lûmda vav düşer (وَعَدَ → يَعِدُ); emir hemzesiz olur (عِدْ). Meçhulde vav kalır (يُوعَدُ).");
    } else if (f === "و") {
      notes.push("Bu babda vav genellikle düşmez (وَجِلَ → يَوْجَلُ). Ancak bazı fiillerde düşer (وَسِعَ → يَسَعُ); sözlükten kontrol et.");
    } else {
      notes.push("Misâl-i yâîde ye düşmez (يَسَرَ → يَيْسِرُ).");
    }
    const fix = (w) => w
      .split(DA + "و" + SU).join(DA + "و").split(KA + "و" + SU).join(KA + "ي")
      .split(DA + "ي" + SU).join(DA + "و").split(KA + "ي" + SU).join(KA + "ي");
    return { r: mapAll(r, fix), notes };
  }

  function ecvef([f, a, l], bab) {
    const vu = V[bab.u], uz = LONG[bab.u];
    const kisa = bab.u === "u" ? DA : KA; // sâkin ekli mâzîde fâ'nın harekesi
    const notes = [];
    if ((a === "و" && bab.u === "i") || (a === "ي" && bab.u === "u")) notes.push("Dikkat: Ecvef-i vâvî genelde 1. (قَالَ يَقُولُ) veya 4. babdan (خَافَ يَخَافُ), yâî ise 2. (بَاعَ يَبِيعُ) veya 4. babdan gelir.");
    const r = {
      maziMalum: MAZI_EK.map((e, i) => (i < 5 ? f + FA + "ا" + l + e : f + kisa + l + e)),
      maziMechul: MAZI_EK.map((e, i) => (i < 5 ? f + KA + "ي" + l + e : f + KA + l + e)),
      muzariMalum: MUZ_ON.map((p, i) => p + FA + f + vu + (NUN.has(i) ? "" : uz) + l + MUZ_EK[i]),
      muzariMechul: MUZ_ON.map((p, i) => p + DA + f + FA + (NUN.has(i) ? "" : "ا") + l + MUZ_EK[i]),
      emir: CEZM_EK.map((e, j) => f + vu + (j === 0 || j === 5 ? "" : uz) + l + e),
      nehy: CEZM_EK.map((e, j) => "لَا تَ" + f + vu + (j === 0 || j === 5 ? "" : uz) + l + e),
      ismiFail: f + FA + "ا" + "ئِ" + l + TD,
      ismiMeful: a === "و" ? "مَ" + f + DA + "و" + l + TD : "مَ" + f + KA + "ي" + l + TD
    };
    notes.push("İllet harfi harekeli eklerde uzun ünlüye döner (قَالَ، يَقُولُ); lâm sâkin olunca iki sâkin buluşmasından dolayı düşer (قُلْتُ، قُلْ).");
    return { r, notes };
  }

  function nakis([f, a, l], bab) {
    if (bab.m === "u") return { error: "Nâkıs fiillerin 5. babı (سَرُوَ) çok nadirdir ve şimdilik desteklenmiyor." };
    const notes = [];
    if ((l === "و" && bab.u === "i") || (l === "ي" && bab.u === "u")) notes.push("Dikkat: Nâkıs-ı vâvî genelde 1. babdan (دَعَا يَدْعُو), yâî ise 2. (رَمَى يَرْمِي), 3. (سَعَى يَسْعَى) veya 4. babdan (رَضِيَ يَرْضَى) gelir.");
    const cons = MAZI_EK.map((e) => e.slice(1)); // sâkin lâmdan sonraki ek
    const aType = MAZI_EK.map((_, i) => {
      const s = f + FA + a + FA;
      return [s + (l === "و" ? "ا" : "ى"), s + l + FA + "ا", s + "وْا", s + "تْ", s + "تَا"][i] || s + l + SU + cons[i];
    });
    const iType = (fv) => MAZI_EK.map((_, i) => {
      const s = f + fv + a;
      return [s + KA + "يَ", s + KA + "يَا", s + DA + "وا", s + KA + "يَتْ", s + KA + "يَتَا"][i] || s + KA + "ي" + cons[i];
    });
    const MZ = {
      u: [DA + "و", DA + "وَانِ", DA + "ونَ", DA + "و", DA + "وَانِ", DA + "ونَ", DA + "و", DA + "وَانِ", DA + "ونَ", KA + "ينَ", DA + "وَانِ", DA + "ونَ", DA + "و", DA + "و"],
      i: [KA + "ي", KA + "يَانِ", DA + "ونَ", KA + "ي", KA + "يَانِ", KA + "ينَ", KA + "ي", KA + "يَانِ", DA + "ونَ", KA + "ينَ", KA + "يَانِ", KA + "ينَ", KA + "ي", KA + "ي"],
      a: [FA + "ى", FA + "يَانِ", FA + "وْنَ", FA + "ى", FA + "يَانِ", FA + "يْنَ", FA + "ى", FA + "يَانِ", FA + "وْنَ", FA + "يْنَ", FA + "يَانِ", FA + "يْنَ", FA + "ى", FA + "ى"]
    };
    const CZ = {
      u: [DA, DA + "وَا", DA + "وا", KA + "ي", DA + "وَا", DA + "ونَ"],
      i: [KA, KA + "يَا", DA + "وا", KA + "ي", KA + "يَا", KA + "ينَ"],
      a: [FA, FA + "يَا", FA + "وْا", FA + "يْ", FA + "يَا", FA + "يْنَ"]
    };
    const hemze = bab.u === "u" ? "اُ" : "اِ";
    const r = {
      maziMalum: bab.m === "a" ? aType : iType(FA),
      maziMechul: iType(DA),
      muzariMalum: MUZ_ON.map((p, i) => p + FA + f + SU + a + MZ[bab.u][i]),
      muzariMechul: MUZ_ON.map((p, i) => p + DA + f + SU + a + MZ.a[i]),
      emir: CZ[bab.u].map((e) => hemze + f + SU + a + e),
      nehy: CZ[bab.u].map((e) => "لَا تَ" + f + SU + a + e),
      ismiFail: f + FA + "ا" + a + KT,
      ismiMeful: l === "و" && bab.m === "a" ? "مَ" + f + SU + a + DA + "و" + SH + TD : "مَ" + f + SU + a + KA + "ي" + SH + TD
    };
    notes.push("Lâmü'l-fiildeki illet harfi; ötreli ve esreli ortamda sükûnla, cezmde hazfle değişir (يَدْعُو → لَمْ يَدْعُ، اُدْعُ). İsm-i fâil tenvinle دَاعٍ olur.");
    return { r, notes };
  }

  const norm = (out) => { if (out && out.r) mapAll(out.r, (w) => (w == null ? w : w.normalize("NFC"))); return out; };

  function conjugate(an, bab) { return norm(conjugateRaw(an, bab)); }
  function conjugateRaw(an, bab) {
    const root = an.root;
    switch (an.type) {
      case "mehmuz": return mehmuz(root, bab);
      case "muzaaf": return muzaaf(root, bab);
      case "misal": return misal(root, bab);
      case "ecvef": return ecvef(root, bab);
      case "nakis": return nakis(root, bab);
      default: return { r: salim(root, bab), notes: bab.n === 5 ? ["5. bab fiilleri lâzımdır; meçhul ve ism-i mef'ûl teorik olarak gösterilmiştir. Bu babda ism-i fâil yerine çoğunlukla sıfat-ı müşebbehe kullanılır (حَسَنٌ، كَرِيمٌ)."] : [] };
    }
  }

  // ───────── Sülâsî mezîd (sâlim) ─────────
  // Şablonlarda F, A, L kök harfleri; T ifti'âl tâsı. Muzâri gövdesi ön ekin (ي/ت/أ/ن + hareke) arkasına gelir.
  const MEZID = [
    { k: "ifal", ad: "İf'âl", mazi: "أَFْAَL", mech: "أُFْAِL", pv: DA, body: "FْAِL", mbody: "FْAَL", emir: "أَFْAِL", fail: "مُFْAِLٌ", meful: "مُFْAَLٌ", masdar: "إِFْAَاLٌ", ornek: "كرم", anlam: "Ta'diye (geçişli yapma), girme" },
    { k: "tefil", ad: "Tef'îl", mazi: "FَAَّL", mech: "FُAِّL", pv: DA, body: "FَAِّL", mbody: "FَAَّL", emir: "FَAِّL", fail: "مُFَAِّLٌ", meful: "مُFَAَّLٌ", masdar: "تَFْAِيLٌ", ornek: "علم", anlam: "Teksîr (çokluk), ta'diye" },
    { k: "mufaale", ad: "Mufâale", mazi: "FَاAَL", mech: "FُوAِL", pv: DA, body: "FَاAِL", mbody: "FَاAَL", emir: "FَاAِL", fail: "مُFَاAِLٌ", meful: "مُFَاAَLٌ", masdar: "مُFَاAَLَةٌ", ornek: "قتل", anlam: "Müşâreket (karşılıklılık)" },
    { k: "iftial", ad: "İfti'âl", mazi: "اِFْTَAَL", mech: "اُFْTُAِL", pv: FA, body: "FْTَAِL", mbody: "FْTَAَL", emir: "اِFْTَAِL", fail: "مُFْTَAِLٌ", meful: "مُFْTَAَLٌ", masdar: "اِFْTِAَاLٌ", ornek: "جنب", anlam: "Mutâvaat, ittihâz, gayret" },
    { k: "infial", ad: "İnfi'âl", mazi: "اِنْFَAَL", mech: null, pv: FA, body: "نْFَAِL", mbody: null, emir: "اِنْFَAِL", fail: "مُنْFَAِLٌ", meful: null, masdar: "اِنْFِAَاLٌ", ornek: "كسر", anlam: "Mutâvaat (edilgen-dönüşlü); lâzımdır" },
    { k: "tefaul_", ad: "Tefa''ul", mazi: "تَFَAَّL", mech: "تُFُAِّL", pv: FA, body: "تَFَAَّL", mbody: "تَFَAَّL", emir: "تَFَAَّL", fail: "مُتَFَAِّLٌ", meful: "مُتَFَAَّLٌ", masdar: "تَFَAُّLٌ", ornek: "كلم", anlam: "Tef'îlin mutâvaatı, tekellüf" },
    { k: "tefaul", ad: "Tefâul", mazi: "تَFَاAَL", mech: "تُFُوAِL", pv: FA, body: "تَFَاAَL", mbody: "تَFَاAَL", emir: "تَFَاAَL", fail: "مُتَFَاAِLٌ", meful: "مُتَFَاAَLٌ", masdar: "تَFَاAُLٌ", ornek: "بعد", anlam: "Karşılıklılık, yapar gibi görünme" },
    { k: "istifal", ad: "İstif'âl", mazi: "اِسْتَFْAَL", mech: "اُسْتُFْAِL", pv: FA, body: "سْتَFْAِL", mbody: "سْتَFْAَL", emir: "اِسْتَFْAِL", fail: "مُسْتَFْAِLٌ", meful: "مُسْتَFْAَLٌ", masdar: "اِسْتِFْAَاLٌ", ornek: "خرج", anlam: "Taleb (isteme), bulma" }
  ];

  function mezid(an, key) { return norm(mezidRaw(an, key)); }
  function mezidRaw(an, key) {
    const b = MEZID.find((x) => x.k === key);
    if (an.type !== "salim") return { error: "Mezîd babları şimdilik yalnız sâlim köklerle çekilir. Bu kök: " + an.label + "." };
    const [f, a, l] = an.root;
    const notes = [];
    let T = "ت", merge = false;
    if (b.k === "iftial") {
      if ("ذثظ".includes(f)) return { error: "Fâü'l-fiili ذ، ث veya ظ olan kelimelerde ifti'âlin birden fazla okunuşu var (اِدَّكَرَ / اِذَّكَرَ); şimdilik desteklenmiyor." };
      if ("صض".includes(f)) { T = "ط"; notes.push("Fâü'l-fiil ص/ض olduğu için ifti'âl tâsı ط'ya döner (اِصْطَبَرَ)."); }
      if (f === "ز") { T = "د"; notes.push("Fâü'l-fiil ز olduğu için ifti'âl tâsı د'ya döner (اِزْدَجَرَ)."); }
      if ("طدت".includes(f)) { T = f; merge = true; notes.push("Fâü'l-fiil ile ifti'âl tâsı aynı/yakın olduğu için idğam olur (اِتَّبَعَ، اِطَّلَعَ)."); }
    }
    const fill = (tpl) => {
      if (!tpl) return null;
      let s = tpl.split("F").join(f).split("A").join(a).split("L").join(l).split("T").join(T);
      if (merge) s = s.split(f + SU + f).join(f + SH);
      return s;
    };
    const stem = (tpl) => fill(tpl);
    const r = {
      maziMalum: MAZI_EK.map((e) => stem(b.mazi) + e),
      maziMechul: b.mech ? MAZI_EK.map((e) => stem(b.mech) + e) : null,
      muzariMalum: MUZ_ON.map((p, i) => p + b.pv + stem(b.body) + MUZ_EK[i]),
      muzariMechul: b.mbody ? MUZ_ON.map((p, i) => p + DA + stem(b.mbody) + MUZ_EK[i]) : null,
      emir: CEZM_EK.map((e) => stem(b.emir) + e),
      nehy: CEZM_EK.map((e) => "لَا تَ".slice(0, -1) + b.pv + stem(b.body) + e),
      ismiFail: fill(b.fail),
      ismiMeful: fill(b.meful),
      masdar: fill(b.masdar)
    };
    if (!b.mech) notes.push("İnfi'âl babı lâzım olduğu için meçhul ve ism-i mef'ûl kullanılmaz.");
    return { r, notes, bab: b };
  }

  // ───────── Emsile-i muhtelife (sülâsî sâlim) ─────────
  const MASDAR = { "نصر": "نَصْرًا", "ضرب": "ضَرْبًا", "فتح": "فَتْحًا", "علم": "عِلْمًا", "حسن": "حُسْنًا", "كتب": "كِتَابَةً", "دخل": "دُخُولًا", "جلس": "جُلُوسًا", "ذهب": "ذَهَابًا", "شرب": "شُرْبًا", "كرم": "كَرَمًا" };
  const NASR_TR = {
    mazi: "yardım etti", muzari: "yardım ediyor / edecek", masdar: "yardım etmek", mimi: "yardım etmek",
    fail: "yardım eden", meful: "yardım edilen", cahd: "yardım etmedi / edilmedi", nefy: "yardım etmiyor / edilmiyor",
    len: "asla yardım etmeyecek", tekid: "elbette yardım edecek", emir: "yardım et! / yardım edilsin!",
    nehy: "yardım etme! / yardım edilme!", zarf: "yardım zamanı / yeri", alet: "yardım aleti",
    tafdil: "daha çok yardım eden (er. / kadın)", taaccub: "ne de çok yardım eder!"
  };

  function emsile(an, bab) {
    if (an.type !== "salim") return null;
    const [f, a, l] = an.root, vu = V[bab.u], hemze = bab.u === "u" ? "اُ" : "اِ";
    const body = (pv, av) => f + SU + a + av + l;
    const m = (s) => s;
    const tr = an.root.join("") === "نصر" ? NASR_TR : {};
    return [
      ["mazi", "Mâzî", m(f + FA + a + V[bab.m] + l + FA)],
      ["muzari", "Muzâri", "يَ" + body(FA, vu) + DA],
      ["masdar", "Masdar (semâî)", MASDAR[an.root.join("")] || "— (sözlükten)"],
      ["mimi", "Masdar-ı mîmî", "مَ" + f + SU + a + FA + l + FT + "ا"],
      ["fail", "İsm-i fâil", f + FA + "ا" + a + KA + l + TD],
      ["meful", "İsm-i mef'ûl", "مَ" + f + SU + a + DA + "و" + l + TD],
      ["cahd", "Cahd-i mutlak (ma'lûm / meçhul)", `لَمْ يَ${body(FA, vu)}${SU} — لَمْ يُ${body(DA, FA)}${SU}`],
      ["nefy", "Nefy (ma'lûm / meçhul)", `لَا يَ${body(FA, vu)}${DA} — لَا يُ${body(DA, FA)}${DA}`],
      ["len", "Nefy-i te'kîd-i istikbâl", `لَنْ يَ${body(FA, vu)}${FA}`],
      ["tekid", "Te'kîdli muzâri (sakîle / hafîfe)", `لَيَ${body(FA, vu)}${FA}نَّ — لَيَ${body(FA, vu)}${FA}نْ`],
      ["emir", "Emr-i hâzır / emr-i gâib meçhul", `${hemze}${body(FA, vu)}${SU} — لِيُ${body(DA, FA)}${SU}`],
      ["nehy", "Nehy-i hâzır (ma'lûm / meçhul)", `لَا تَ${body(FA, vu)}${SU} — لَا تُ${body(DA, FA)}${SU}`],
      ["zarf", "İsm-i zaman ve mekân", "مَ" + f + SU + a + (bab.u === "i" ? KA : FA) + l + TD],
      ["alet", "İsm-i âlet", `مِ${f + SU + a + FA + l + TD} — مِ${f + SU + a + FA + l + FA}ةٌ — مِ${f + SU + a + FA}ا${l + TD}`],
      ["tafdil", "İsm-i tafdîl (müzekker / müennes)", `أَ${f + SU + a + FA + l + DA} — ${f + DA + a + SU + l + FA}ى`],
      ["taaccub", "Fiil-i taaccüb", `مَا أَ${f + SU + a + FA + l + FA}هُ — أَ${f + SU + a + KA + l + SU} بِهِ`]
    ].map(([k, ad, ar]) => ({ k, ad, ar: ar.normalize("NFC"), tr: tr[k] || "" }));
  }

  // Geriye dönük uyumluluk: eski API
  function parseRoot(input) { const a = analyze(input); return a.error ? a : { root: a.root, analysis: a }; }

  window.Sarf = { BABS, SIGA, MEZID, analyze, parseRoot, conjugate, mezid, emsile, seat };
})();
