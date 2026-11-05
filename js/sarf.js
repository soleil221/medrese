// Sülâsî mücerred sâlim fiiller için çekim (tasrîf) motoru.
// Yalnızca sâlim kökler desteklenir: hemze, illet harfi (و ي ا) ve muzâaf kökler i'lâl/idğam
// kuralları gerektirdiği için reddedilir.
(function () {
  const FA = "َ", DA = "ُ", KA = "ِ", SU = "ْ", SH = "ّ", TD = "ٌ";
  const V = { a: FA, u: DA, i: KA };

  // [ad, mâzî aynü'l-fiil harekesi, muzâri aynü'l-fiil harekesi, örnek kök]
  const BABS = [
    { n: 1, ad: "نَصَرَ يَنْصُرُ", m: "a", u: "u", ornek: "نصر" },
    { n: 2, ad: "ضَرَبَ يَضْرِبُ", m: "a", u: "i", ornek: "ضرب" },
    { n: 3, ad: "فَتَحَ يَفْتَحُ", m: "a", u: "a", ornek: "فتح" },
    { n: 4, ad: "عَلِمَ يَعْلَمُ", m: "i", u: "a", ornek: "علم" },
    { n: 5, ad: "حَسُنَ يَحْسُنُ", m: "u", u: "u", ornek: "حسن" },
    { n: 6, ad: "حَسِبَ يَحْسِبُ", m: "i", u: "i", ornek: "حسب" }
  ];

  const SIGA = [
    ["Müfred müzekker gâib", "o (er.)"],
    ["Tesniye müzekker gâib", "o ikisi (er.)"],
    ["Cem-i müzekker gâib", "onlar (er.)"],
    ["Müfred müennes gâibe", "o (kadın)"],
    ["Tesniye müennes gâibe", "o ikisi (kadın)"],
    ["Cem-i müennes gâibe", "onlar (kadın)"],
    ["Müfred müzekker muhâtab", "sen (er.)"],
    ["Tesniye müzekker muhâtab", "siz ikiniz (er.)"],
    ["Cem-i müzekker muhâtab", "siz (er.)"],
    ["Müfred müennes muhâtaba", "sen (kadın)"],
    ["Tesniye müennes muhâtaba", "siz ikiniz (kadın)"],
    ["Cem-i müennes muhâtaba", "siz (kadın)"],
    ["Nefs-i mütekellim vahde", "ben"],
    ["Nefs-i mütekellim maa'l-gayr", "biz"]
  ];

  // Lâmü'l-fiilden sonra gelen ekler (lâmın harekesi dahil)
  const MAZI_EK = [FA, FA + "ا", DA + "وا", FA + "تْ", FA + "تَا", SU + "نَ", SU + "تَ", SU + "تُمَا", SU + "تُمْ", SU + "تِ", SU + "تُمَا", SU + "تُنَّ", SU + "تُ", SU + "نَا"];
  const MUZ_ON = ["ي", "ي", "ي", "ت", "ت", "ي", "ت", "ت", "ت", "ت", "ت", "ت", "أ", "ن"];
  const MUZ_EK = [DA, FA + "انِ", DA + "ونَ", DA, FA + "انِ", SU + "نَ", DA, FA + "انِ", DA + "ونَ", KA + "ينَ", FA + "انِ", SU + "نَ", DA, DA];
  // Cezm (emir/nehiy) için muhâtab sîgalarının ekleri (7–12)
  const CEZM_EK = [SU, FA + "ا", DA + "وا", KA + "ي", FA + "ا", SU + "نَ"];

  const STRIP = /[ً-ٰٟـ\s]/g;
  const ILLET = /[اويىءأإؤئآ]/;

  function parseRoot(input) {
    const letters = [...String(input).replace(STRIP, "")];
    if (letters.length !== 3) return { error: "Kök tam olarak üç harf olmalı (ör. ك ت ب)." };
    if (!letters.every((c) => /[ء-ي]/.test(c))) return { error: "Lütfen Arapça harfler gir." };
    if (letters.some((c) => ILLET.test(c))) return { error: "Kökte hemze veya illet harfi var (mehmûz/mu'tel). Bu fiiller i'lâl kurallarıyla çekilir; araç şimdilik yalnız sâlim kökleri destekler." };
    if (letters[1] === letters[2]) return { error: "Muzâaf kök (2. ve 3. harf aynı). İdğam kuralları gerektirdiği için şimdilik desteklenmiyor." };
    if (letters.includes("ة")) return { error: "Tâ-i merbûta kökte bulunmaz." };
    return { root: letters };
  }

  function conjugate(root, bab) {
    const [f, a, l] = root;
    const vm = V[bab.m], vu = V[bab.u];
    const madiStem = f + FA + a + vm + l;
    const madiMechulStem = f + DA + a + KA + l;
    const muzStem = (pre, pv, av) => pre + pv + f + SU + a + av + l;
    const hemze = bab.u === "u" ? "اُ" : "اِ";

    const out = {
      maziMalum: MAZI_EK.map((e) => madiStem + e),
      maziMechul: MAZI_EK.map((e) => madiMechulStem + e),
      muzariMalum: MUZ_ON.map((p, i) => muzStem(p, FA, vu) + MUZ_EK[i]),
      muzariMechul: MUZ_ON.map((p, i) => muzStem(p, DA, FA) + MUZ_EK[i]),
      emir: CEZM_EK.map((e) => hemze + f + SU + a + vu + l + e),
      nehy: CEZM_EK.map((e) => "لَا " + muzStem("ت", FA, vu) + e),
      ismiFail: f + FA + "ا" + a + KA + l + TD,
      ismiMeful: "مَ" + f + SU + a + DA + "و" + l + TD
    };
    return out;
  }

  window.Sarf = { BABS, SIGA, parseRoot, conjugate };
})();
