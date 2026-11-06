// Yeni âlimleri ALIMLER, ALIM_EK, ALIM_DERIN ve EKOLLER yapılarına yerleştirir;
// mevcut âlimlerde düz isim olarak geçen hoca ve talebeleri yeni sayfalara bağlar.
(function () {
  const Y = window.YENI_ALIMLER || [];
  const mevcut = new Set(window.ALIMLER.map((a) => a.id));
  window.ALIM_EK = window.ALIM_EK || {};
  window.ALIM_DERIN = window.ALIM_DERIN || {};
  Y.forEach((x) => {
    if (mevcut.has(x.id)) return;
    const eserAd = (x.eser || []).map(([ad]) => ad);
    window.ALIMLER.push({
      id: x.id, ad: x.ad, ar: x.ar, olum: x.olum, y: x.y, sehir: x.sehir, ekol: x.ekol,
      hocalar: x.hocalar || [], talebeler: x.talebeler || [],
      eserler: eserAd.length ? eserAd : ["Müstakil bir eseri günümüze ulaşmamıştır; görüşleri talebelerinin ve sonraki âlimlerin eserlerinde nakledilir."],
      ozet: x.ozet, metod: x.metod
    });
    window.ALIM_EK[x.id] = { alan: x.alan, etki: x.etki, okuma: x.okuma, hayat: x.hayat };
    window.ALIM_DERIN[x.id] = { gorus: x.gorus, eser: x.eser || [], soz: x.soz || [], hakkinda: x.hakkinda || [] };
  });

  // Düz isimleri yeni âlimlerin sayfalarına bağla
  const ESLE = {
    "Alkame b. Kays": "alkame", "Hammâd b. Ebî Süleymân": "hammad", "Urve b. Zübeyr": "urve", "Urve b. Zübeyr (yeğeni)": "urve",
    "Ubeyy b. Ka'b": "ubeyy", "Zeyd b. Sâbit": "zeyd", "Ebû Hüreyre": "ebuhureyre", "Ebû Hüreyre (kayınpederi)": "ebuhureyre",
    "İshak b. Râhûye": "ishak", "Ali b. el-Medînî": "alibinmedini", "Yahyâ b. Maîn": "yahyabinmain", "Müzenî": "muzeni", "Müzenî (dayısı)": "muzeni",
    "Hâkim en-Nîsâbûrî": "hakim", "Ebü'l-Hasan el-Kerhî": "kerhi", "Cemâleddin el-Mizzî": "mizzi", "Cemâleddin el-Mizzî (kayınpederi)": "mizzi",
    "Zeynüddin el-Irâkī": "iraki", "Ekmeleddin el-Bâbertî": "baberti", "İbn Hacer el-Heytemî": "heytemi", "Cemâleddin Efgânî": "efgani",
    "Sadreddin Konevî": "konevi", "Seyfeddin el-Âmidî": "amidi", "Hatîb el-Bağdâdî": "hatib", "Abdülfettâh Ebû Gudde": "ebugudde",
    "Sehâvî": "sehavi", "İbn Receb": "ibnrecep", "Katâde b. Diâme": "katade", "Katâde": "katade", "İbn Sîrîn": "ibnsirin"
  };
  const ids = new Set(window.ALIMLER.map((a) => a.id));
  const bagla = (liste) => {
    const out = [];
    liste.forEach((x) => { const y = ESLE[x] && ids.has(ESLE[x]) ? ESLE[x] : x; if (!out.includes(y)) out.push(y); });
    return out;
  };
  window.ALIMLER.forEach((a) => { a.hocalar = bagla(a.hocalar); a.talebeler = bagla(a.talebeler); });

  // Ekol zincirleri
  const E = window.EKOLLER || (window.EKOLLER = []);
  const ekle = (ad, yeni) => { const e = E.find((x) => x.ad === ad); if (e) yeni.forEach((id) => { if (!e.ids.includes(id)) e.ids.push(id); }); };
  ekle("Hanefî fıkıh geleneği", ["alkame", "hammad", "kerhi", "debusi", "kadihan", "baberti", "ibnnuceym", "taskoprizade", "surunbulali", "cevdetpasa", "leknevi", "ebugudde"]);
  ekle("Mâlikî fıkıh geleneği", ["urve", "ebubekiribnularabi"]);
  ekle("Şâfiî fıkıh geleneği", ["muzeni", "ibnulmunzir", "sirazi", "begavi", "amidi", "ibnussalah", "mizzi", "zerkesi", "iraki", "bikai", "sehavi", "zekeriyyaensari", "heytemi"]);
  ekle("Hanbelî gelenek", ["ibnrecep"]);
  ekle("Kelâm: Mu'tezile ve Eş'ariyye", ["sehristani", "amidi", "ici"]);
  ekle("Kelâm: Mâtürîdiyye", ["baberti"]);
  ekle("Hadis geleneği", ["ebuhureyre", "ibnsirin", "ishak", "yahyabinmain", "alibinmedini", "ibnmace", "ibnhibban", "darekutni", "hakim", "hatib", "ebunuaym", "ibnasakir", "ibnussalah", "mizzi", "iraki", "sehavi", "zebidi", "ebugudde", "elbani"]);
  ekle("Tefsir geleneği", ["ubeyy", "katade", "ragib", "begavi", "zerkesi", "bikai", "sarravi"]);
  ekle("Tasavvuf geleneği", ["rabia", "fudayl", "zunnun", "kelabazi", "ebutalibmekki", "suhreverdi", "konevi", "yunusemre", "hacibayram", "aksemseddin", "sarani", "hudayi", "nablusi", "ibrahimhakki", "gumushanevi"]);
  ekle("Islah ve çağdaş düşünce", ["efgani", "izmirli", "seltut", "muhammedgazzali"]);
  if (!E.find((x) => x.ad === "Sahabe ve tâbiûn fakihleri")) E.unshift({ ad: "Sahabe ve tâbiûn fakihleri", alt: "Fıkhın ilk kuşakları: Medine, Mekke, Kûfe ve Basra", ids: ["omer", "muaz", "ali", "ubeyy", "ibnmesud", "zeyd", "aise", "ebuhureyre", "ibnabbas", "ibnomer", "alkame", "saidbinmuseyyeb", "urve", "nehai", "hasanbasri", "ibnsirin", "ata", "hammad", "zuhri"] });
  if (!E.find((x) => x.ad === "Dil ve belâgat")) E.push({ ad: "Dil ve belâgat", alt: "Kur'an'ı anlamanın aletleri", ids: ["sibeveyhi", "ebuubeyd", "abdulkahir", "zemahseri", "ragib", "ici", "teftazani", "curcani", "birgivi", "zebidi"] });
  if (!E.find((x) => x.ad === "Tarih, siyer ve ilimler tarihi")) E.push({ ad: "Tarih, siyer ve ilimler tarihi", alt: "Hafızanın taşıyıcıları", ids: ["urve", "zuhri", "ibnishak", "taberi", "hatib", "ibnasakir", "zehebi", "ibnhaldun", "sehavi", "taskoprizade", "katipcelebi", "cevdetpasa", "hamidullah"] });
  if (!E.find((x) => x.ad === "Fıkıh usulü ve kaideler")) E.push({ ad: "Fıkıh usulü ve kaideler", alt: "Hükmün nasıl çıkarıldığı", ids: ["safii", "kerhi", "cessas", "debusi", "bakillani", "cuveyni", "pezdevi", "serahsi", "gazali", "razi", "amidi", "izzbinabdisselam", "karafi", "satibi", "ibnnuceym", "ibnasur", "zerka"] });

  // Her zinciri vefat asrına göre sırala (aynı asır içinde mevcut sıra korunur)
  const yil = Object.fromEntries(window.ALIMLER.map((a) => [a.id, a.y]));
  E.forEach((e) => { e.ids = e.ids.filter((id) => yil[id] !== undefined).map((id, i) => [id, i]).sort((a, b) => yil[a[0]] - yil[b[0]] || a[1] - b[1]).map(([id]) => id); });
})();
