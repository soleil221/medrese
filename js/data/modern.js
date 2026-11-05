// Son dönem (modern) din eğitimi müfredatı.
// Türkiye'deki ilahiyat fakülteleri ve İHL programlarının ders yapısından esinlenilmiştir.
// Kaynak listeleri öneri niteliğindedir; baskı/basım bilgileri kullanıcı tarafından doğrulanmalıdır.

window.MODERN = [
  // ───────────── 1. AŞAMA: TEMEL ─────────────
  {
    id: "m-arapca", track: "modern", stage: 1, area: "Dil",
    title: "Modern Yöntemle Arapça", arabic: "اللغة العربية",
    summary: "İletişimsel yöntemle okuma, dinleme, konuşma ve yazma becerileri. Klasik sarf-nahiv eğitimini kelime hazinesi ve akıcılıkla destekler.",
    goals: ["Temel kelime hazinesi (2000+ kelime)", "Basit metinleri sözlüksüz okuma", "Modern Arapça gazete/makale anlama", "Klasik metinlere geçiş için okuma hızı"],
    texts: [
      { id: "t1", title: "el-Arabiyye beyne Yedeyk", author: "Abdurrahman el-Fevzân vd.", level: 1 },
      { id: "t2", title: "Durûsü'l-Lugati'l-Arabiyye (Medine Arapçası)", author: "V. Abdurrahim", level: 1, alt: true },
      { id: "t3", title: "Arapça sözlük kullanımı (el-Mu'cemü'l-Vasît vb.)", author: "Muhtelif", level: 2 }
    ],
    prereq: []
  },
  {
    id: "m-siyer", track: "modern", stage: 1, area: "İslam Tarihi",
    title: "Siyer ve İslam Tarihi", arabic: "السيرة والتاريخ الإسلامي",
    summary: "Hz. Peygamber'in hayatı ve İslam tarihinin ana dönemleri (Hulefâ-i Râşidîn, Emevî, Abbâsî, Osmanlı) tarihsel yöntemle.",
    goals: ["Siyerin kaynaklarını tanıma", "İslam tarihinin dönemlendirilmesi", "Tarihsel bağlamın dini anlayışa etkisi"],
    texts: [
      { id: "t1", title: "Siyer / İslam Tarihi ders kitapları", author: "İlahiyat fakültesi ders kitapları", level: 1 },
      { id: "t2", title: "Hz. Muhammed ve İslâm Dâveti", author: "Mustafa Fayda", level: 2, alt: true },
      { id: "t3", title: "TDV İslâm Ansiklopedisi ilgili maddeleri", author: "Türkiye Diyanet Vakfı", level: 2 }
    ],
    prereq: []
  },
  {
    id: "m-ilmihal", track: "modern", stage: 1, area: "Fıkıh",
    title: "İlmihal (Çağdaş)", arabic: "علم الحال",
    summary: "İnanç, ibadet ve günlük hayat hükümlerinin çağdaş dil ve yeni meselelerle birlikte öğrenimi.",
    goals: ["İbadetlerin güncel uygulamaları", "Gündelik hayatta helal-haram", "Mezhepler arası farklara genel bakış"],
    texts: [
      { id: "t1", title: "İlmihal I-II", author: "TDV İSAM heyeti", level: 1 },
      { id: "t2", title: "İlmihal (DİB)", author: "Diyanet İşleri Başkanlığı", level: 1, alt: true }
    ],
    prereq: []
  },

  // ───────────── 2. AŞAMA: TEMEL İSLAM BİLİMLERİ ─────────────
  {
    id: "m-tefsirusul", track: "modern", stage: 2, area: "Temel İslam Bilimleri",
    title: "Tefsir Usulü ve Tefsir Tarihi", arabic: "أصول التفسير وتاريخه",
    summary: "Kur'an'ın tarihi, vahiy, cem' ve istinsah; tefsir ekolleri ve modern tefsir hareketleri.",
    goals: ["Kur'an tarihi", "Klasik ve modern tefsir ekolleri", "Tematik (konulu) tefsir yöntemi", "Meal ve tercüme problemleri"],
    texts: [
      { id: "t1", title: "Tefsir Usûlü", author: "İsmail Cerrahoğlu", level: 2 },
      { id: "t2", title: "Tefsir Tarihi", author: "İsmail Cerrahoğlu", level: 2 },
      { id: "t3", title: "Kur'an Yolu Türkçe Meal ve Tefsir", author: "H. Karaman, M. Çağrıcı, İ. K. Dönmez, S. Gümüş", level: 2 }
    ],
    prereq: ["m-arapca"]
  },
  {
    id: "m-hadisusul", track: "modern", stage: 2, area: "Temel İslam Bilimleri",
    title: "Hadis Usulü ve Hadis Tarihi", arabic: "علوم الحديث",
    summary: "Hadislerin tedvini, ricâl ilmi, sened-metin tenkidi ve oryantalist hadis tartışmaları.",
    goals: ["Hadis tarihi ve tedvin süreci", "Metin tenkidi kriterleri", "Hadis kaynaklarını kullanma ve tahric", "Modern hadis tartışmalarını tanıma"],
    texts: [
      { id: "t1", title: "Hadis Usûlü", author: "Talat Koçyiğit", level: 2 },
      { id: "t2", title: "Hadis Tarihi", author: "Talat Koçyiğit", level: 2, alt: true },
      { id: "t3", title: "Hadislerle İslâm", author: "Diyanet İşleri Başkanlığı heyeti", level: 2 }
    ],
    prereq: ["m-arapca"]
  },
  {
    id: "m-fikihusul", track: "modern", stage: 2, area: "Temel İslam Bilimleri",
    title: "İslam Hukuku: Usul ve Tarih", arabic: "الفقه وأصوله",
    summary: "Fıkıh usulünün modern sistematikle öğrenimi, İslam hukuk tarihi ve mezheplerin oluşumu.",
    goals: ["İslam hukukunun kaynakları", "Hukuk tarihi ve mezheplerin teşekkülü", "Maslahat, örf, makâsıd kavramları"],
    texts: [
      { id: "t1", title: "Fıkıh Usûlü", author: "Fahrettin Atar", level: 2 },
      { id: "t2", title: "İslâm Hukuk Tarihi", author: "Hayreddin Karaman", level: 2 },
      { id: "t3", title: "Mukayeseli İslâm Hukuku", author: "Hayreddin Karaman", level: 3, alt: true }
    ],
    prereq: ["m-ilmihal"]
  },
  {
    id: "m-kelam", track: "modern", stage: 2, area: "Temel İslam Bilimleri",
    title: "Kelam ve İslam Mezhepleri Tarihi", arabic: "الكلام والفرق",
    summary: "Kelam ilminin doğuşu, ekolleri ve meseleleri; itikadi ve siyasi mezheplerin tarihî gelişimi.",
    goals: ["Kelamın konusu ve metodu", "Mu'tezile, Mâtürîdiyye, Eş'ariyye karşılaştırması", "Şîa, Hâricîlik ve diğer fırkalar", "Yeni ilm-i kelam tartışmaları"],
    texts: [
      { id: "t1", title: "Kelâm İlmi: Giriş", author: "Bekir Topaloğlu", level: 2 },
      { id: "t2", title: "Çağımızda İtikâdî İslâm Mezhepleri", author: "Ethem Ruhi Fığlalı", level: 2 },
      { id: "t3", title: "İslâm Mezhepleri Tarihi", author: "Neşet Çağatay, İ. Agâh Çubukçu", level: 2, alt: true }
    ],
    prereq: []
  },
  {
    id: "m-tasavvuf", track: "modern", stage: 2, area: "Temel İslam Bilimleri",
    title: "Tasavvuf Tarihi ve Düşüncesi", arabic: "التصوف",
    summary: "Tasavvufun doğuşu, temel kavramları, tarikatlar ve Anadolu tasavvuf geleneği.",
    goals: ["Zühd döneminden tarikatlara gelişim", "Temel ıstılahlar", "Anadolu'da tasavvuf ve Türk tasavvuf edebiyatı"],
    texts: [
      { id: "t1", title: "Tasavvuf ve Tarikatlar", author: "Selçuk Eraydın", level: 1 },
      { id: "t2", title: "Tasavvuf Terimleri Sözlüğü", author: "Süleyman Uludağ", level: 2 }
    ],
    prereq: []
  },

  // ───────────── 3. AŞAMA: FELSEFE VE DİN BİLİMLERİ ─────────────
  {
    id: "m-islamfelsefe", track: "modern", stage: 3, area: "Felsefe ve Din Bilimleri",
    title: "İslam Felsefesi", arabic: "الفلسفة الإسلامية",
    summary: "Kindî, Fârâbî, İbn Sînâ, Gazâlî ve İbn Rüşd çizgisinde felsefe-din ilişkisi.",
    goals: ["Meşşâî felsefenin temel tezleri", "Gazâlî'nin felsefe eleştirisi", "Ahlak ve siyaset felsefesi"],
    texts: [
      { id: "t1", title: "İslâm Felsefesi: Tarih ve Problemler", author: "M. Cüneyt Kaya (ed.)", level: 2 },
      { id: "t2", title: "İslâm Filozoflarından Felsefe Metinleri", author: "Mahmut Kaya", level: 3 }
    ],
    prereq: []
  },
  {
    id: "m-dinfelsefe", track: "modern", stage: 3, area: "Felsefe ve Din Bilimleri",
    title: "Din Felsefesi", arabic: "فلسفة الدين",
    summary: "Tanrı'nın varlığı delilleri, kötülük problemi, din dili, inanç ve akıl ilişkisi; çağdaş ateizm tartışmaları.",
    goals: ["Kozmolojik, teleolojik ve ontolojik deliller", "Kötülük problemi ve teodise", "Din-bilim ilişkisi"],
    texts: [
      { id: "t1", title: "Din Felsefesi", author: "Mehmet S. Aydın", level: 2 }
    ],
    prereq: []
  },
  {
    id: "m-dinbilim", track: "modern", stage: 3, area: "Felsefe ve Din Bilimleri",
    title: "Din Sosyolojisi ve Din Psikolojisi", arabic: "علم اجتماع وعلم نفس الدين",
    summary: "Dinin toplumsal ve bireysel boyutlarının bilimsel yöntemlerle incelenmesi: sekülerleşme, dindarlık, inanç gelişimi.",
    goals: ["Sekülerleşme teorileri", "Dindarlık ölçümleri", "Dinî gelişim evreleri ve inanç psikolojisi"],
    texts: [
      { id: "t1", title: "Din Sosyolojisi", author: "Ünver Günay", level: 2 },
      { id: "t2", title: "Din Psikolojisi", author: "Hüseyin Peker", level: 2 }
    ],
    prereq: []
  },
  {
    id: "m-dinlertarihi", track: "modern", stage: 3, area: "Felsefe ve Din Bilimleri",
    title: "Dinler Tarihi", arabic: "تاريخ الأديان",
    summary: "Yahudilik, Hristiyanlık, Hint ve Uzakdoğu dinleri; karşılaştırmalı din çalışmaları ve dinlerarası ilişkiler.",
    goals: ["Büyük dinlerin inanç ve ibadet yapıları", "Karşılaştırmalı yöntem", "İslam'ın diğer dinlere bakışı"],
    texts: [
      { id: "t1", title: "Dinler Tarihi", author: "Günay Tümer, Abdurrahman Küçük", level: 2 },
      { id: "t2", title: "el-Milel ve'n-Nihal", author: "eş-Şehristânî", level: 3, alt: true, note: "Klasik dönemden köprü kaynak." }
    ],
    prereq: []
  },
  {
    id: "m-dinegitimi", track: "modern", stage: 3, area: "Felsefe ve Din Bilimleri",
    title: "Din Eğitimi ve Rehberlik", arabic: "التربية الدينية",
    summary: "Din öğretiminin yöntemleri, yaş gruplarına göre din eğitimi ve manevi danışmanlık.",
    goals: ["Öğretim yöntemleri ve materyal tasarımı", "Çocuk ve gençlerde din eğitimi", "Manevi danışmanlık ve rehberlik temelleri"],
    texts: [
      { id: "t1", title: "Din eğitimi ders kitapları", author: "İlahiyat fakültesi ders kitapları", level: 2 }
    ],
    prereq: []
  },

  // ───────────── 4. AŞAMA: ÇAĞDAŞ MESELELER VE İHTİSAS ─────────────
  {
    id: "m-cagdasdusunce", track: "modern", stage: 4, area: "Çağdaş Meseleler",
    title: "Çağdaş İslam Düşüncesi", arabic: "الفكر الإسلامي المعاصر",
    summary: "19. yüzyıldan günümüze ihya, ıslah ve yenilenme hareketleri; gelenek-modernite tartışması.",
    goals: ["Islahat hareketleri (Afgânî, Abduh vb.)", "Osmanlı son dönem düşünürleri", "Gelenek, modernite ve hermenötik tartışmaları"],
    texts: [
      { id: "t1", title: "Çağdaş İslam düşüncesi ders kitapları ve derlemeleri", author: "Muhtelif", level: 3 },
      { id: "t2", title: "TDV İslâm Ansiklopedisi ilgili maddeleri", author: "Türkiye Diyanet Vakfı", level: 2 }
    ],
    prereq: ["m-kelam", "m-islamfelsefe"]
  },
  {
    id: "m-cagdasfikih", track: "modern", stage: 4, area: "Çağdaş Meseleler",
    title: "Çağdaş Fıkhî Meseleler ve Makâsıd", arabic: "النوازل المعاصرة",
    summary: "Biyoetik, İslam ekonomisi ve finans, dijital dünya, göç ve azınlık fıkhı gibi yeni meseleler; makâsıdü'ş-şerîa yaklaşımı.",
    goals: ["Makâsıd teorisi (Şâtıbî'den günümüze)", "Faiz, katılım bankacılığı, sigorta", "Organ nakli, tüp bebek vb. tıbbi meseleler", "Fetva kurullarının işleyişi"],
    texts: [
      { id: "t1", title: "el-Muvâfakāt", author: "Ebû İshâk eş-Şâtıbî", level: 3, note: "Makâsıd için klasik köprü kaynak." },
      { id: "t2", title: "Günümüz Meselelerine Fetvalar (DİB Din İşleri Yüksek Kurulu)", author: "Diyanet İşleri Başkanlığı", level: 2 },
      { id: "t3", title: "İslam iktisadı ve finans giriş kitapları", author: "Muhtelif", level: 2, alt: true }
    ],
    prereq: ["m-fikihusul"]
  },
  {
    id: "m-sanat", track: "modern", stage: 4, area: "İslam Tarihi ve Sanatları",
    title: "İslam Sanatları ve Türk Din Musikisi", arabic: "الفنون الإسلامية",
    summary: "Hat, tezhip, mimari ve dinî musiki geleneği; estetik ve medeniyet perspektifi.",
    goals: ["İslam sanatlarının temel formları", "Osmanlı dini mimarisi", "Türk din musikisinin formları (ezan, mevlid, ilahi)"],
    texts: [
      { id: "t1", title: "İslam sanatları tarihi ders kitapları", author: "Muhtelif", level: 2 }
    ],
    prereq: []
  },
  {
    id: "m-arastirma", track: "modern", stage: 4, area: "Metodoloji",
    title: "Araştırma Yöntemleri ve Akademik Yazım", arabic: "مناهج البحث",
    summary: "Klasik kaynaklara ulaşma, dijital kütüphaneler (Şamile vb.), atıf usulleri ve bilimsel makale yazımı.",
    goals: ["Yazma eser ve matbu kaynakları kullanma", "Dijital kütüphaneler ve veri tabanları", "İSNAD atıf sistemi", "Makale ve tez yazımı"],
    texts: [
      { id: "t1", title: "İSNAD Atıf Sistemi kılavuzu", author: "İSNAD", level: 1 },
      { id: "t2", title: "el-Mektebetü'ş-Şâmile kullanımı", author: "—", level: 1 }
    ],
    prereq: []
  }
];

// Klasik ↔ modern dersler arası köprüler (birleşik yol görünümünde gösterilir)
window.BRIDGES = [
  ["k-sarf", "m-arapca"], ["k-nahiv", "m-arapca"],
  ["k-ilmihal", "m-ilmihal"],
  ["k-siyer", "m-siyer"],
  ["k-tefsir", "m-tefsirusul"],
  ["k-hadisusul", "m-hadisusul"], ["k-hadis", "m-hadisusul"],
  ["k-usulfikih", "m-fikihusul"], ["k-fikih2", "m-cagdasfikih"],
  ["k-kelam", "m-kelam"], ["k-akaid1", "m-kelam"],
  ["k-mantik", "m-islamfelsefe"], ["k-kelam", "m-dinfelsefe"],
  ["k-tasavvuf", "m-tasavvuf"]
];

window.STAGES = {
  klasik: { 1: "Mukaddimât", 2: "Alet İlimleri I", 3: "Alet İlimleri II", 4: "Âlî İlimler" },
  modern: { 1: "Temel", 2: "Temel İslam Bilimleri", 3: "Felsefe ve Din Bilimleri", 4: "Çağdaş Meseleler ve İhtisas" },
  birlesik: { 1: "Temel Hazırlık", 2: "Dil ve Usûl", 3: "Derinleşme", 4: "İhtisas ve Sentez" }
};
