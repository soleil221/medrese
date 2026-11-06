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
      id: x.id, ad: x.ad, ar: x.ar, olum: x.olum, dogum: x.dogum, y: x.y, sehir: x.sehir, ekol: x.ekol,
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
    "Sehâvî": "sehavi", "İbn Receb": "ibnrecep", "Katâde b. Diâme": "katade", "Katâde": "katade", "İbn Sîrîn": "ibnsirin",
    "Süfyân b. Uyeyne": "ibnuyeyne", "Abdurrahmân b. Mehdî": "ibnmehdi", "İbn Huzeyme": "ibnhuzeyme", "İbn Fûrek": "ibnfurek",
    "Züfer b. Hüzeyl": "zufer", "Nâfi' (İbn Ömer'in mevlâsı)": "nafi", "Nâfi' (mevlâsı)": "nafi", "Nâfi'": "nafi", "Rabîatü'r-re'y": "rabiaturrey",
    "Annesi tarafından dedesi Kāsım b. Muhammed": "kasimbinmuhammed", "Kāsım b. Muhammed (yeğeni)": "kasimbinmuhammed",
    "Babası Muhammed el-Bâkır": "bakir", "Kardeşi Muhammed el-Bâkır": "bakir", "İkrime": "ikrime", "Saîd b. Cübeyr": "saidbincubeyr",
    "Vâsıl b. Atâ": "vasil", "Dârimî": "darimi", "Taberânî (rivayet)": "taberani",
    "Ebû Abdirrahmân es-Sülemî": "sulemi", "Ebü'l-Vefâ İbn Akīl": "ibnakil", "İbn Dakîkul'îd": "ibndakik", "İbn Dakîkul'îd'den icazet": "ibndakik",
    "Kāsım b. Kutluboğa": "ibnkutluboga", "Celâleddin el-Mahallî": "mahalli", "Ali el-Müttakī el-Hindî": "aliyyulmuttaki",
    "Şu'be b. el-Haccâc": "sube", "Bişr el-Hâfî": "bisrhafi", "Halîl b. Ahmed": "halil", "Yahyâ b. Saîd el-Kattân": "yahyakattan",
    "İbn Ebî Şeybe": "ibnebiseybe", "Kisâî": "kisai", "Ebû Nuaym el-İsfahânî": "ebunuaym", "Kadızâde Mehmed Efendi": "kadizade",
    "Ebû Bekir İbnü'l-Arabî": "ebubekiribnularabi", "Oğlu Şah Abdülaziz": "sahabdulaziz", 
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

  // Beşinci tur: boşlukları dolduran âlimler ve hayatta olanlar
  ekle("Sahabe ve tâbiûn fakihleri", ["ebudderda", "ebumusa", "saidbincubeyr", "sabi", "ikrime", "kasimbinmuhammed", "bakir", "nafi"]);
  ekle("Hanefî fıkıh geleneği", ["zufer", "sadrusseria", "zeylai", "ayni", "ibnkutluboga", "mollagurani", "halebi", "haskefi", "hadimi", "abdulhakdihlevi", "tanevi", "takiosmani", "avvame", "karaman"]);
  ekle("Mâlikî fıkıh geleneği", ["rabiaturrey", "ibnatiyye", "ibndakik", "derdir", "zurkani", "sinkiti", "ibnbeyyah"]);
  ekle("Şâfiî fıkıh geleneği", ["ibnhuzeyme", "hattabi", "munziri", "ibndakik", "mahalli", "kastallani", "sirbini", "remli", "bacuri", "alicuma"]);
  ekle("Hanbelî gelenek", ["ebuyala", "herevi", "ibnakil"]);
  ekle("Kelâm: Mu'tezile ve Eş'ariyye", ["vasil", "ibnfurek", "bacuri", "ahmedettayyib"]);
  ekle("Kelâm: Mâtürîdiyye", ["usi", "nureddinsabuni", "sadrusseria", "alikuscu", "hocazade", "topaloglu", "hakimmurad"]);
  ekle("Hadis geleneği", ["nafi", "sube", "ibnuyeyne", "ibnmehdi", "yahyakattan", "abdurrezzak", "ibnebiseybe", "darimi", "ibnhuzeyme", "ibnebihatim", "taberani", "hattabi", "mecdudinibnulesir", "munziri", "ibndakik", "zeylai", "ayni", "kastallani", "aliyyulmuttaki", "abdulhakdihlevi", "ahmedsakir", "sibai", "azami", "itr", "avvame", "gormez"]);
  ekle("Tefsir geleneği", ["saidbincubeyr", "ikrime", "mukatil", "sehltusteri", "ibnebihatim", "vahidi", "sulemi", "ibnatiyye", "ebuhayyan", "mahalli", "mollagurani", "diraz", "seyyidkutub", "sinkiti", "esed", "alisabuni"]);
  ekle("Tasavvuf geleneği", ["ibrahimedhem", "marufkerhi", "bisrhafi", "bayezid", "sehltusteri", "serrac", "sulemi", "hucviri", "herevi", "rifai", "kubra", "sazili", "hacibektas", "ibnataullah", "nakisbend", "mollacami", "merkezefendi", "niyazimisri", "emirabdulkadir"]);
  ekle("Islah ve çağdaş düşünce", ["musacarullah", "babanzade", "ikbal", "malikbinnebi", "seyyidkutub", "faruki", "esed", "nedvi", "attas", "tahaabdurrahman", "hakimmurad", "hamzayusuf"]);
  ekle("Dil ve belâgat", ["halil", "kisai", "ibnkuteybe", "hattabi", "mecdudinibnulesir", "ibnmalik", "ebuhayyan", "mollacami"]);
  ekle("Tarih, siyer ve ilimler tarihi", ["ibnhisam", "ayni", "kastallani", "zurkani", "gelenbevi"]);
  ekle("Fıkıh usulü ve kaideler", ["ebuyala", "ibnakil", "sadrusseria", "ibndakik", "mahalli", "ibnkutluboga", "hadimi", "hallaf", "karaman", "kemali", "ibnbeyyah", "reysuni", "alicuma"]);
  if (!E.find((x) => x.ad === "Kıraat ve Kur'an metni")) E.push({ ad: "Kıraat ve Kur'an metni", alt: "Kur'an'ın nasıl okunduğu ve nasıl yazıldığı", ids: ["ubeyy", "zeyd", "ebudderda", "ebumusa", "ibnmesud", "asim", "kisai", "ebuubeyd", "ibnmucahid", "satibikari", "ibnulcezeri", "azami", "altikulac"] });

  // Altıncı tur: zincirleri günümüze bağlama (yalnızca mensubiyeti açık olanlar)
  ekle("Hanefî fıkıh geleneği", ["mustafasabri", "zerka"]);
  ekle("Mâlikî fıkıh geleneği", ["halilishak", "senusi", "lekani", "reysuni", "hamzayusuf"]);
  ekle("Hanbelî gelenek", ["sadi", "elbani", "ibnbaz", "ibnuseymin"]);
  ekle("Kelâm: Mu'tezile ve Eş'ariyye", ["senusi", "lekani", "ibnasur", "buti", "alicuma", "hamzayusuf"]);
  ekle("Kelâm: Mâtürîdiyye", ["beyazizade", "hadimi", "kevseri", "bilmen", "takiosmani"]);
  ekle("Tefsir geleneği", ["sadi", "samerrai"]);
  ekle("Tasavvuf geleneği", ["kotku", "ahmedettayyib", "alicuma"]);
  ekle("Dil ve belâgat", ["ibnasur", "samerrai"]);
  ekle("Tarih, siyer ve ilimler tarihi", ["nedvi"]);
  ekle("Kıraat ve Kur'an metni", ["huseyni"]);
  const altYeni = { "Mâlikî fıkıh geleneği": "Medine amelinden Mağrib, Endülüs ve günümüze", "Kelâm: Mâtürîdiyye": "Semerkant'tan Osmanlı medresesine ve günümüze", "Tasavvuf geleneği": "Zühdden tarikatlara ve günümüze", "Kelâm: Mu'tezile ve Eş'ariyye": "Akıl ve nakil arasında; Eş'arî kolu günümüze kadar", "Dil ve belâgat": "Kur'an'ı anlamanın aletleri; Halîl'den çağdaş Kur'an belâgatına" };
  E.forEach((e) => { if (altYeni[e.ad]) e.alt = altYeni[e.ad]; });
  const yeniZincir = (ad, alt, ids) => { if (!E.find((x) => x.ad === ad)) E.push({ ad, alt, ids }); };
  yeniZincir("Osmanlı'dan Türkiye'ye", "Bursa ve İstanbul medreselerinden Cumhuriyet dönemine", ["fenari", "hacibayram", "aksemseddin", "mollagurani", "hocazade", "alikuscu", "mollahusrev", "kemalpasazade", "ebussuud", "birgivi", "taskoprizade", "halebi", "merkezefendi", "hudayi", "kadizade", "katipcelebi", "beyazizade", "niyazimisri", "bursevi", "hadimi", "ibrahimhakki", "gelenbevi", "cevdetpasa", "gumushanevi", "izmirli", "babanzade", "elmalili", "kevseri", "mustafasabri", "saidnursi", "bilmen", "kotku", "topaloglu", "karaman", "altikulac", "gormez"]);
  yeniZincir("Hint alt kıtası", "Lahor ve Delhi'den Deoband, Leknev ve Karaçi'ye", ["hucviri", "aliyyulmuttaki", "abdulhakdihlevi", "rabbani", "dihlevi", "sahabdulaziz", "leknevi", "tanevi", "ikbal", "mevdudi", "hamidullah", "fazlurrahman", "nedvi", "azami", "takiosmani"]);
  yeniZincir("Ezher geleneği", "Kahire'nin bin yıllık medresesi", ["zekeriyyaensari", "lekani", "derdir", "bacuri", "abduh", "huseyni", "hallaf", "diraz", "seltut", "muhammedgazzali", "sarravi", "seyyidsabik", "karadavi", "ahmedettayyib", "alicuma"]);
  yeniZincir("Nakşibendiyye ve Hâlidî kolu", "Buhara'dan Serhend'e, Bağdat'tan İstanbul'a", ["nakisbend", "mollacami", "rabbani", "mevlanahalid", "gumushanevi", "kotku"]);

  // Her zinciri vefat asrına, asır içinde vefat yılına göre sırala (hayatta olanlar en sonda)
  const yil = Object.fromEntries(window.ALIMLER.map((a) => [a.id, a.y]));
  const vs = Object.fromEntries(window.ALIMLER.map((a) => [a.id, a.olum === "Hayatta" ? 9000 + (parseInt(a.dogum) || 0) : parseInt(String(a.olum).replace(/^[^0-9]*/, "")) || 0]));
  E.forEach((e) => { e.ids = e.ids.filter((id) => yil[id] !== undefined).map((id, i) => [id, i]).sort((a, b) => yil[a[0]] - yil[b[0]] || vs[a[0]] - vs[b[0]] || a[1] - b[1]).map(([id]) => id); });
})();
