// Klasik medrese müfredatı (ağırlıklı olarak Osmanlı/Anadolu medrese geleneği, Hanefî-Mâtürîdî eksen).
// Her ders: id, track, stage (merhale), area (ilim grubu), title, arabic, summary, goals, texts, prereq
// texts[].level: 1=giriş, 2=orta, 3=ileri. texts[].alt=true ise alternatif/ek metin.

window.KLASIK = [
  // ───────────── 1. MERHALE: MUKADDİMÂT ─────────────
  {
    id: "k-tecvid", track: "klasik", stage: 1, area: "Kur'an İlimleri",
    title: "Kur'an Okuma ve Tecvid", arabic: "التجويد",
    summary: "Kur'an-ı Kerîm'in harflerini mahreç ve sıfatlarına uygun, tecvid kaidelerine riayetle okumak. Medrese eğitiminin ilk basamağı ve sonraki tüm derslerin zemini.",
    goals: ["Elif-bâ ve harflerin mahreçleri", "Med, idğam, ihfâ, iklâb, vakf kaideleri", "Yüzünden akıcı ve hatasız okuma", "Hıfz için sağlam bir okuma altyapısı"],
    texts: [
      { id: "t1", title: "Elif-Bâ / Kur'an Elifbası", author: "Muhtelif", level: 1 },
      { id: "t2", title: "Tuhfetü'l-Etfâl", author: "Süleyman el-Cemzûrî", level: 1, note: "Manzum tecvid metni; ezberlenmesi tavsiye edilir." },
      { id: "t3", title: "el-Mukaddimetü'l-Cezeriyye", author: "İbnü'l-Cezerî", level: 2, note: "Tecvidin klasik manzum temel metni." },
      { id: "t4", title: "Hırzü'l-Emânî (Şâtıbiyye)", author: "İmam eş-Şâtıbî", level: 3, alt: true, note: "Kıraat-i seb'a ihtisası için." }
    ],
    prereq: []
  },
  {
    id: "k-ilmihal", track: "klasik", stage: 1, area: "Fıkıh",
    title: "Temel İlmihal", arabic: "علم الحال",
    summary: "Farz-ı ayn olan bilgiler: iman esasları, taharet, namaz, oruç, zekât ve hac hükümlerinin özet ve pratik öğrenimi.",
    goals: ["İman ve İslam'ın şartları", "Abdest, gusül, teyemmüm", "Namazın farz, vacip, sünnetleri", "Oruç ve zekâtın temel hükümleri"],
    texts: [
      { id: "t1", title: "Mızraklı İlmihal", author: "Muhtelif (Osmanlı dönemi)", level: 1 },
      { id: "t2", title: "Mukaddimetü's-Salât", author: "Molla Fenârî'ye nispet edilir", level: 1, alt: true },
      { id: "t3", title: "Büyük İslam İlmihali", author: "Ömer Nasûhi Bilmen", level: 2, note: "Klasik çizgide yazılmış son dönem ilmihal; köprü kaynak." }
    ],
    prereq: []
  },
  {
    id: "k-akaid1", track: "klasik", stage: 1, area: "Akaid / Kelam",
    title: "Akaid'e Giriş", arabic: "العقائد",
    summary: "Ehl-i sünnet akaidinin temel meseleleri: ulûhiyyet, nübüvvet, sem'iyyât. Ezber metinleri üzerinden temel kavramlar.",
    goals: ["Allah'ın zâtî ve sübûtî sıfatları", "Peygamberlik ve sıfatları", "Âhiret, kader ve kazâ", "Mâtürîdî-Eş'arî ayrımına ilk bakış"],
    texts: [
      { id: "t1", title: "Emâlî (Kasîde-i Lâmiyye / Bed'ü'l-Emâlî)", author: "Sirâceddin el-Ûşî", level: 1 },
      { id: "t2", title: "el-Fıkhu'l-Ekber", author: "İmam-ı Âzam Ebû Hanîfe'ye nispet edilir", level: 1 },
      { id: "t3", title: "Cevheretü't-Tevhîd", author: "İbrâhim el-Lekânî", level: 2, alt: true, note: "Eş'arî gelenekte yaygın manzum metin." }
    ],
    prereq: []
  },
  {
    id: "k-sarf", track: "klasik", stage: 1, area: "Alet İlimleri — Arapça",
    title: "Sarf (Morfoloji)", arabic: "الصرف",
    summary: "Arapça kelimelerin yapısı, fiil çekimleri ve kalıplar. Klasik sıralama: Emsile → Binâ → Maksûd → İzzî → Merâh.",
    goals: ["Fiil ve isim kalıplarını (emsile) ezberleme", "Sülâsî ve mezîd bablar", "Mu'tel fiiller ve i'lâl kaideleri", "Bir kelimenin kökünü ve babını bulabilme"],
    texts: [
      { id: "t1", title: "Emsile", author: "Müellifi kesin bilinmiyor", level: 1, note: "Ezber esaslı; çekim tabloları." },
      { id: "t2", title: "Binâü'l-Ef'âl", author: "Müellifi kesin bilinmiyor", level: 1 },
      { id: "t3", title: "el-Maksûd", author: "İmam-ı Âzam'a nispet edilir (tartışmalı)", level: 1 },
      { id: "t4", title: "İzzî (et-Tasrîfü'l-İzzî)", author: "İzzeddin ez-Zencânî", level: 2 },
      { id: "t5", title: "Merâhu'l-Ervâh", author: "Ahmed b. Ali b. Mes'ûd", level: 2 }
    ],
    prereq: []
  },

  // ───────────── 2. MERHALE: ALET İLİMLERİ I ─────────────
  {
    id: "k-nahiv", track: "klasik", stage: 2, area: "Alet İlimleri — Arapça",
    title: "Nahiv (Sentaks)", arabic: "النحو",
    summary: "Cümle yapısı ve i'râb. Avâmil'den başlayıp Kâfiye ve Molla Câmî ile tamamlanan klasik silsile.",
    goals: ["Âmil-ma'mûl ilişkisi", "İ'râb ve binâ", "Cümle tahlili (terkib)", "Klasik bir metni harekesiz okuyabilme"],
    texts: [
      { id: "t1", title: "Avâmil (el-Avâmilü'l-Cedîd)", author: "İmam Birgivî", level: 1 },
      { id: "t2", title: "Ecrûmiyye", author: "İbn Âcurrûm", level: 1, alt: true, note: "Arap dünyasında yaygın başlangıç metni." },
      { id: "t3", title: "İzhâru'l-Esrâr", author: "İmam Birgivî", level: 2 },
      { id: "t4", title: "el-Kâfiye", author: "İbnü'l-Hâcib", level: 2 },
      { id: "t5", title: "Molla Câmî (el-Fevâidü'd-Diyâiyye)", author: "Abdurrahman Câmî", level: 3, note: "Kâfiye şerhi." },
      { id: "t6", title: "Elfiyye", author: "İbn Mâlik", level: 3, alt: true },
      { id: "t7", title: "Muğni'l-Lebîb", author: "İbn Hişâm", level: 3, alt: true }
    ],
    prereq: ["k-sarf"]
  },
  {
    id: "k-mantik", track: "klasik", stage: 2, area: "Alet İlimleri — Akli",
    title: "Mantık", arabic: "المنطق",
    summary: "Doğru düşünmenin kuralları: tasavvurât (tanım) ve tasdîkât (önerme ve kıyas). Kelam ve usûl derslerinin anahtarı.",
    goals: ["Külliyyât-ı hams (beş tümel)", "Had ve resm (tanım)", "Önermeler ve nispetler", "Kıyas çeşitleri ve safsata"],
    texts: [
      { id: "t1", title: "Îsâgûcî", author: "Esîrüddin el-Ebherî", level: 1 },
      { id: "t2", title: "Fenârî (Şerhu Îsâgûcî)", author: "Molla Fenârî", level: 2 },
      { id: "t3", title: "Kul Ahmed (Hâşiye)", author: "Kul Ahmed", level: 2, alt: true },
      { id: "t4", title: "eş-Şemsiyye", author: "Necmeddin el-Kâtibî", level: 2 },
      { id: "t5", title: "Tahrîru'l-Kavâidi'l-Mantıkıyye (Şerhu'ş-Şemsiyye)", author: "Kutbüddin er-Râzî", level: 3 },
      { id: "t6", title: "Burhân", author: "Gelenbevî İsmâil Efendi", level: 3, alt: true }
    ],
    prereq: []
  },
  {
    id: "k-fikih1", track: "klasik", stage: 2, area: "Fıkıh",
    title: "Fıkıh — Mütûn", arabic: "الفقه",
    summary: "Hanefî mezhebinin temel metinleri üzerinden ibâdât ve muâmelât. İlmihalden sistematik fıkha geçiş.",
    goals: ["İbadet bablarını delilleriyle bilme", "Fıkhî terminoloji (farz, vâcip, mekruh-ı tahrîmî...)", "Muâmelâta giriş: alım-satım, nikâh, talâk", "Mezhep içi görüş farklarını takip"],
    texts: [
      { id: "t1", title: "Nûru'l-Îzâh", author: "Hasan eş-Şürünbülâlî", level: 1 },
      { id: "t2", title: "Muhtasaru'l-Kudûrî", author: "Ebü'l-Hüseyn el-Kudûrî", level: 2 },
      { id: "t3", title: "Mülteka'l-Ebhur", author: "İbrâhim el-Halebî", level: 2 },
      { id: "t4", title: "Metnü Ebî Şücâ' (Şâfiî)", author: "Ebû Şücâ' el-İsfahânî", level: 1, alt: true, note: "Şâfiî mezhebini takip edenler için başlangıç metni." }
    ],
    prereq: ["k-ilmihal"]
  },
  {
    id: "k-siyer", track: "klasik", stage: 2, area: "Siyer / Tarih",
    title: "Siyer ve Şemâil", arabic: "السيرة والشمائل",
    summary: "Hz. Peygamber'in hayatı, ahlakı ve şemâili. Hadis ve fıkıh derslerine tarihî bağlam sağlar.",
    goals: ["Mekke ve Medine dönemlerinin ana olayları", "Gazveler ve antlaşmalar", "Şemâil ve ahlâk-ı nebevî"],
    texts: [
      { id: "t1", title: "eş-Şemâilü'l-Muhammediyye", author: "İmam et-Tirmizî", level: 1 },
      { id: "t2", title: "Nûru'l-Yakîn fî Sîreti Seyyidi'l-Mürselîn", author: "Muhammed el-Hudarî", level: 1 },
      { id: "t3", title: "es-Sîretü'n-Nebeviyye", author: "İbn Hişâm", level: 3, alt: true },
      { id: "t4", title: "eş-Şifâ bi-Ta'rîfi Hukûki'l-Mustafâ", author: "Kādî İyâz", level: 3 }
    ],
    prereq: []
  },

  // ───────────── 3. MERHALE: ALET İLİMLERİ II ─────────────
  {
    id: "k-adab", track: "klasik", stage: 3, area: "Alet İlimleri — Akli",
    title: "Âdâb-ı Bahs ve Vaz'", arabic: "آداب البحث والوضع",
    summary: "Münâzara usulü (iddia, delil, itiraz) ile lafız-mana ilişkisini inceleyen vaz' ilmi.",
    goals: ["Münâzarada sâil ve muallil rolleri", "Men', nakz, muâraza", "Lafzın manaya delâlet çeşitleri"],
    texts: [
      { id: "t1", title: "Risâle fî Âdâbi'l-Bahs", author: "Taşköprizâde", level: 1 },
      { id: "t2", title: "Velediyye (Takrîru'l-Kavânîn)", author: "Saçaklızâde Mehmed Efendi", level: 2 },
      { id: "t3", title: "er-Risâletü'l-Vaz'iyye", author: "Adudüddin el-Îcî", level: 2 }
    ],
    prereq: ["k-mantik"]
  },
  {
    id: "k-belagat", track: "klasik", stage: 3, area: "Alet İlimleri — Arapça",
    title: "Belâgat", arabic: "البلاغة",
    summary: "Meânî, beyân ve bedî' ilimleri. Kur'an'ın i'câzını anlamanın ve tefsir okumanın vazgeçilmez aracı.",
    goals: ["Meânî: haber-inşâ, takdim-tehir, hasr", "Beyân: teşbih, mecaz, istiare, kinaye", "Bedî': lafzî ve manevî sanatlar", "Âyetlerde belâgat tahlili"],
    texts: [
      { id: "t1", title: "Telhîsü'l-Miftâh", author: "Hatîb el-Kazvînî", level: 2 },
      { id: "t2", title: "Muhtasaru'l-Meânî", author: "Sa'deddin et-Teftâzânî", level: 2 },
      { id: "t3", title: "el-Mutavvel", author: "Sa'deddin et-Teftâzânî", level: 3, alt: true },
      { id: "t4", title: "Delâilü'l-İ'câz", author: "Abdülkāhir el-Cürcânî", level: 3, alt: true }
    ],
    prereq: ["k-nahiv"]
  },
  {
    id: "k-hadisusul", track: "klasik", stage: 3, area: "Hadis",
    title: "Usûl-i Hadis", arabic: "مصطلح الحديث",
    summary: "Hadislerin sened ve metin açısından değerlendirilmesi; hadis ıstılahları ve sıhhat dereceleri.",
    goals: ["Sahih, hasen, zayıf ve alt türleri", "Cerh ve ta'dîl temel kavramları", "Tahammül ve edâ yolları"],
    texts: [
      { id: "t1", title: "el-Manzûmetü'l-Beykûniyye", author: "Ömer el-Beykûnî", level: 1 },
      { id: "t2", title: "Nuhbetü'l-Fiker ve şerhi Nüzhetü'n-Nazar", author: "İbn Hacer el-Askalânî", level: 2 },
      { id: "t3", title: "Mukaddime (Ulûmü'l-Hadîs)", author: "İbnü's-Salâh", level: 3, alt: true }
    ],
    prereq: ["k-nahiv"]
  },
  {
    id: "k-feraiz", track: "klasik", stage: 3, area: "Fıkıh",
    title: "Ferâiz (Miras Hukuku)", arabic: "الفرائض",
    summary: "İslam miras hukuku: ashâbu'l-ferâiz, asabe, hacb, avl ve redd hesapları.",
    goals: ["Mirasçı grupları ve payları", "Hacb (mahrumiyet) kuralları", "Avl, redd ve tashih hesapları"],
    texts: [
      { id: "t1", title: "es-Sirâciyye (el-Ferâizü's-Sirâciyye)", author: "Sirâceddin es-Secâvendî", level: 2 },
      { id: "t2", title: "Şerhu's-Sirâciyye", author: "Seyyid Şerîf el-Cürcânî", level: 3, alt: true }
    ],
    prereq: ["k-fikih1"]
  },

  // ───────────── 4. MERHALE: ÂLÎ İLİMLER ─────────────
  {
    id: "k-usulfikih", track: "klasik", stage: 4, area: "Fıkıh",
    title: "Usûl-i Fıkıh", arabic: "أصول الفقه",
    summary: "Fıkhî hükümlerin delillerden çıkarılma yöntemi: Kitap, Sünnet, icmâ, kıyas ve lafız delâletleri.",
    goals: ["Edille-i şer'iyye ve hiyerarşisi", "Âm-hâs, mutlak-mukayyed, emir-nehiy", "Kıyas ve illet", "Hanefî (fukahâ) ve mütekellimîn metotlarının farkı"],
    texts: [
      { id: "t1", title: "Menâru'l-Envâr", author: "Ebü'l-Berekât en-Nesefî", level: 2 },
      { id: "t2", title: "Mir'âtü'l-Usûl şerhu Mirkāti'l-Vusûl", author: "Molla Hüsrev", level: 3 },
      { id: "t3", title: "et-Tavzîh ve et-Telvîh", author: "Sadrüşşerîa / Teftâzânî", level: 3 },
      { id: "t4", title: "Cem'u'l-Cevâmi'", author: "Tâceddin es-Sübkî", level: 3, alt: true, note: "Mütekellimîn (Şâfiî) usulü." }
    ],
    prereq: ["k-fikih1", "k-mantik", "k-nahiv"]
  },
  {
    id: "k-kelam", track: "klasik", stage: 4, area: "Akaid / Kelam",
    title: "Kelam", arabic: "علم الكلام",
    summary: "İman esaslarının aklî ve naklî delillerle ispatı; fırkalar arası tartışmalar ve felsefe ile ilişki.",
    goals: ["Hudûs delili ve Allah'ın varlığı", "Sıfatlar meselesi", "Nübüvvetin ispatı", "Kader, insan fiilleri, imamet"],
    texts: [
      { id: "t1", title: "el-Akāidü'n-Nesefiyye", author: "Ebû Hafs Ömer en-Nesefî", level: 1 },
      { id: "t2", title: "Şerhu'l-Akāid", author: "Sa'deddin et-Teftâzânî", level: 2 },
      { id: "t3", title: "Hayâlî Hâşiyesi", author: "Hayâlî Ahmed Efendi", level: 3, alt: true },
      { id: "t4", title: "Şerhu'l-Mevâkıf", author: "Seyyid Şerîf el-Cürcânî", level: 3 }
    ],
    prereq: ["k-akaid1", "k-mantik"]
  },
  {
    id: "k-tefsir", track: "klasik", stage: 4, area: "Kur'an İlimleri",
    title: "Tefsir ve Usûl-i Tefsir", arabic: "التفسير وأصوله",
    summary: "Kur'an'ın dil, belâgat, nüzul sebepleri ve önceki âlimlerin yorumları ışığında anlaşılması.",
    goals: ["Nüzul, nesih, muhkem-müteşâbih", "Rivâyet ve dirâyet tefsiri", "Beyzâvî üzerinden tefsir dili", "Tefsir okuma becerisi"],
    texts: [
      { id: "t1", title: "el-Fevzü'l-Kebîr fî Usûli't-Tefsîr", author: "Şah Veliyyullah ed-Dihlevî", level: 2 },
      { id: "t2", title: "Tefsîru'l-Celâleyn", author: "Celâleddin el-Mahallî / Celâleddin es-Suyûtî", level: 2 },
      { id: "t3", title: "Envâru't-Tenzîl (Beyzâvî Tefsiri)", author: "Kādî el-Beyzâvî", level: 3 },
      { id: "t4", title: "İrşâdü'l-Akli's-Selîm", author: "Ebüssuûd Efendi", level: 3, alt: true },
      { id: "t5", title: "el-İtkān fî Ulûmi'l-Kur'ân", author: "Celâleddin es-Suyûtî", level: 3, alt: true }
    ],
    prereq: ["k-belagat", "k-nahiv"]
  },
  {
    id: "k-hadis", track: "klasik", stage: 4, area: "Hadis",
    title: "Hadis Metinleri", arabic: "متون الحديث",
    summary: "Temel hadis külliyatının okunması ve şerhlerle anlaşılması.",
    goals: ["Kırk hadis ezberi", "Konulara göre hadis okuma", "Şerh literatürünü kullanma", "Kütüb-i sitteyi tanıma"],
    texts: [
      { id: "t1", title: "el-Erbaûn en-Neveviyye", author: "İmam en-Nevevî", level: 1 },
      { id: "t2", title: "Riyâzü's-Sâlihîn", author: "İmam en-Nevevî", level: 1 },
      { id: "t3", title: "Mişkâtü'l-Mesâbîh", author: "Hatîb et-Tebrîzî", level: 2 },
      { id: "t4", title: "el-Câmiu's-Sahîh (Buhârî)", author: "İmam el-Buhârî", level: 3 }
    ],
    prereq: ["k-hadisusul"]
  },
  {
    id: "k-fikih2", track: "klasik", stage: 4, area: "Fıkıh",
    title: "Fıkıh — Şürûh ve Fetva", arabic: "الفقه — الشروح",
    summary: "Delilleriyle ileri fıkıh ve müftâ bih görüşlerin tespiti.",
    goals: ["Hidâye üzerinden istidlal", "Mezhepte tercih ve fetva usulü", "Reddü'l-Muhtâr'ı kaynak olarak kullanma"],
    texts: [
      { id: "t1", title: "el-Hidâye", author: "Burhâneddin el-Merğînânî", level: 3 },
      { id: "t2", title: "ed-Dürrü'l-Muhtâr", author: "Alâeddin el-Haskefî", level: 3 },
      { id: "t3", title: "Reddü'l-Muhtâr (İbn Âbidîn Hâşiyesi)", author: "İbn Âbidîn", level: 3 },
      { id: "t4", title: "Mecelle-i Ahkâm-ı Adliyye", author: "Ahmed Cevdet Paşa başkanlığında heyet", level: 2, alt: true }
    ],
    prereq: ["k-fikih1", "k-usulfikih"]
  },
  {
    id: "k-tasavvuf", track: "klasik", stage: 4, area: "Tasavvuf / Ahlâk",
    title: "Tasavvuf ve Ahlâk", arabic: "التصوف والأخلاق",
    summary: "Nefis terbiyesi, kalp hâlleri ve ahlâk. İlim ile amel arasındaki köprü.",
    goals: ["Âfât-ı lisan ve kalp hastalıkları", "Tevbe, sabır, şükür, tevekkül makamları", "Tasavvuf ıstılahları"],
    texts: [
      { id: "t1", title: "Eyyühe'l-Veled", author: "İmam Gazâlî", level: 1 },
      { id: "t2", title: "et-Tarîkatü'l-Muhammediyye", author: "İmam Birgivî", level: 2 },
      { id: "t3", title: "er-Risâletü'l-Kuşeyriyye", author: "Abdülkerîm el-Kuşeyrî", level: 2 },
      { id: "t4", title: "İhyâu Ulûmi'd-Dîn", author: "İmam Gazâlî", level: 3 }
    ],
    prereq: ["k-akaid1"]
  }
];
