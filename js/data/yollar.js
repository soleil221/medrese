// Öğrenme yolları: rehberli yolculuklar. Adım türleri: yazi, mesele, sure, alim, link.
window.YOLLAR = [
  {
    id: "ihtilaf", baslik: "Fıkıh Nasıl Düşünür?", alt: "İhtilafın mantığını meseleler üzerinden kavramak",
    giris: "Bu yolun amacı, mezheplerin neden farklı sonuçlara vardığını tek tek örnekler üzerinden görmektir. Her meselede önce görüşleri değil, “ihtilafın kökü” bölümünü dikkatle oku; sonunda aynı birkaç usul farkının farklı meselelerde tekrar tekrar karşına çıktığını fark edeceksin.",
    adimlar: [
      { t: "yazi", id: "ihtilaf", not: "Temel çerçeve: Âlimler neden ayrılır?" },
      { t: "alim", id: "ebuhanife", not: "Kûfe'nin re'y geleneği" },
      { t: "alim", id: "malik", not: "Medine'nin amel geleneği" },
      { t: "alim", id: "safii", not: "Usulün sistemleşmesi" },
      { t: "alim", id: "ahmed", not: "Nassa ve sahabe sözüne bağlılık" },
      { t: "mesele", id: "abdest", not: "Bir kelimenin iki manası: لَامَسْتُمُ" },
      { t: "mesele", id: "fatiha", not: "Âmmın delâleti: âyet ile hadis karşı karşıya" },
      { t: "mesele", id: "cem", not: "Kesin nas ile âhâd haber" },
      { t: "mesele", id: "fitre", not: "Lafız mı, amaç mı?" },
      { t: "mesele", id: "teravih", not: "Sahabe uygulamasının değeri" },
      { t: "alim", id: "ibnrusd", not: "Karşılaştırmalı fıkhın ustası" },
      { t: "alim", id: "dihlevi", not: "Mezheplere dengeli bakış" }
    ],
    soru: "Okuduğun meselelerde en sık hangi usul farkıyla karşılaştın? Kendi mezhebinin görüşünü delilleriyle birlikte açıklayabilir misin?"
  },
  {
    id: "son-sayfalar", baslik: "Kur'an'ın Son Sayfalarıyla Tefekkür", alt: "Namazda en çok okuduğumuz sureleri anlayarak okumak",
    giris: "Namazda her gün okuduğumuz kısa surelerin anlamını derinleştiren bir yolculuk. Her gün bir sure: önce meali sesli oku, sonra akışı ve kavramları incele, en sonda tefekkür sorusu üzerinde birkaç dakika dur. O günkü namazlarında bu sureyi oku.",
    adimlar: [
      { t: "sure", id: 1, not: "Her namazın kapısı" },
      { t: "sure", id: 93, not: "Terk edilmediğinin teselli dolu ilanı" },
      { t: "sure", id: 94, not: "Zorlukla beraber kolaylık" },
      { t: "sure", id: 103, not: "Zamanın değeri" },
      { t: "sure", id: 102, not: "Çokluk yarışı" },
      { t: "sure", id: 107, not: "İbadet ve ahlak" },
      { t: "sure", id: 108, not: "Bolluk ve şükür" },
      { t: "sure", id: 109, not: "İnançta pazarlık olmaz" },
      { t: "sure", id: 110, not: "Zaferin ahlakı" },
      { t: "sure", id: 112, not: "Tevhidin özü" },
      { t: "sure", id: 113, not: "Dış şerlere karşı sığınma" },
      { t: "sure", id: 114, not: "İç fısıltılara karşı sığınma" }
    ],
    soru: "Bu surelerden hangisi namazdaki huşunu en çok değiştirdi? Hangi tefekkür sorusuna henüz cevap veremedin?"
  },
  {
    id: "inanc", baslik: "İnancın Derin Soruları", alt: "Kader, ölüm ve sonrası: âyetler, âlimler ve ekoller",
    giris: "İnancın en çok soru doğuran konularını, Ehl-i sünnetin iki büyük kelam ekolünün ve onların eleştirmenlerinin gözünden okumak. Bu yol, ezber cevaplar yerine delilleri ve tartışmanın tarihini öğretmeyi hedefler.",
    adimlar: [
      { t: "alim", id: "esari", not: "Mu'tezile'den Ehl-i sünnete" },
      { t: "alim", id: "maturidi", not: "Semerkant'tan gelen ses" },
      { t: "mesele", id: "kader", not: "İrade ve yaratma" },
      { t: "kavram", id: "kesb", not: "Kesb ve cüz'î irade: iki ekolün anahtar kavramı" },
      { t: "sure", id: 112, not: "Tevhidin dört âyeti" },
      { t: "kavram", id: "tenzih", not: "İki aşırılık arasında" },
      { t: "mesele", id: "sifatlar", not: "Tefvîz, te'vîl ve isbât" },
      { t: "mesele", id: "kabir", not: "Berzah âlemi" },
      { t: "mesele", id: "sefaat", not: "Büyük günah ve ilâhî rahmet" },
      { t: "mesele", id: "mehdi", not: "Rivayet tenkidi ve tarih" },
      { t: "link", href: "#/metin/akaid-nesefi", baslik: "el-Akāidü'n-Nesefiyye", not: "Ehl-i sünnet akaidinin özlü metni: 10. ve 12. bölümler" },
      { t: "alim", id: "gazali", not: "Akıl, kalp ve iman" },
      { t: "alim", id: "ibnteymiyye", not: "Selefin anlayışına dönüş çağrısı" }
    ],
    soru: "Kader konusunda hangi ekolün açıklaması sana daha ikna edici geldi ve neden? Bu açıklama günlük tevekkülünü nasıl etkiliyor?"
  },
  {
    id: "cagdas", baslik: "Modern Hayat ve Fıkıh", alt: "Klasik ilkelerle çağdaş meselelere bakmak",
    giris: "Bugünün meselelerine klasik fıkıh birikimi nasıl cevap verir? Bu yol, makâsıd düşüncesini, örfün ve zaruretin rolünü ve çağdaş fıkıh kurullarının nasıl karar verdiğini meseleler üzerinden gösterir.",
    adimlar: [
      { t: "alim", id: "satibi", not: "Makâsıd: dinin gayeleri" },
      { t: "alim", id: "ibnulkayyim", not: "Fetva zamana ve şartlara göre değişir" },
      { t: "mesele", id: "faiz", not: "Kesin haram ve modern bankacılık" },
      { t: "mesele", id: "organ", not: "Nas olmayan yerde ictihad" },
      { t: "mesele", id: "sahitlik", not: "Hükmün gerekçesi değişirse" },
      { t: "mesele", id: "uctalak", not: "Azınlık görüşünün kanunlaşması" },
      { t: "mesele", id: "musiki", not: "Haramlığın illeti nedir?" },
      { t: "mesele", id: "corap", not: "Ruhsatların genişliği" },
      { t: "kavram", id: "makasid", not: "Şeriatın gayeleri" },
      { t: "mesele", id: "kripto", not: "Mal, para ve garar kavramları yeni bir varlık karşısında" },
      { t: "mesele", id: "sigorta", not: "Mübadele mi, dayanışma mı?" },
      { t: "mesele", id: "otanazi", not: "Öldürmek ile ölmeye bırakmak" },
      { t: "alim", id: "zerka", not: "Klasik fıkıhtan genel teoriler" },
      { t: "alim", id: "ibnabidin", not: "Örf ve fetva" },
      { t: "alim", id: "karadavi", not: "Çağdaş bir fakihin yöntemi ve eleştirileri" }
    ],
    soru: "Çağdaş bir meselede fetva verilirken hangi ilkeler belirleyici oldu? Kolaylaştırmak ile ruhsat avcılığı arasındaki sınırı nerede görüyorsun?"
  },
  {
    id: "kuran-konulari", baslik: "Kur'an'ın Ana Konuları", alt: "Kur'an'ı temalar üzerinden okumak",
    giris: "Sureleri tek tek okumanın yanında, Kur'an'ın aynı konuyu farklı surelerde nasıl işlediğini görmek, onun bütünlüğünü fark ettirir. Bu yol, kalpten başlayıp ahirete uzanan bir sırayla ana kavramları âyetleri ve âlimlerin yorumlarıyla birlikte ele alır.",
    adimlar: [
      { t: "konu", id: "kalp", not: "Anlamanın ve yönelmenin merkezi" },
      { t: "konu", id: "ilim", not: "Oku: akıl, ilim ve tefekkür" },
      { t: "konu", id: "hikmet", not: "Bilgiyi doğru yerde kullanmak" },
      { t: "konu", id: "takva", not: "Kendini korumak" },
      { t: "konu", id: "zikir", not: "Allah'ı anmak ve gafletten uyanmak" },
      { t: "konu", id: "rahmet", not: "Rahmet gazabı geçmiştir" },
      { t: "konu", id: "tevbe", not: "Dönüşün kapısı" },
      { t: "konu", id: "sukur", not: "Nimeti tanımak" },
      { t: "konu", id: "sabir", not: "Aktif direnç" },
      { t: "konu", id: "tevekkul", not: "Sebep ve sonuç" },
      { t: "konu", id: "rizik", not: "Rızık ve imtihan" },
      { t: "konu", id: "adalet", not: "Peygamberlerin gönderiliş amacı" },
      { t: "konu", id: "emanet", not: "İnsanın yüklendiği yük" },
      { t: "konu", id: "sidk", not: "Sözde, niyette ve amelde doğruluk" },
      { t: "konu", id: "uhuvvet", not: "Müminler kardeştir" },
      { t: "konu", id: "infak", not: "Sevdiğinden vermek" },
      { t: "konu", id: "imtihan", not: "İyilikle ve kötülükle" },
      { t: "konu", id: "dua", not: "Kulluğun özü" },
      { t: "konu", id: "anababa", not: "Allah'tan sonra en büyük hak" },
      { t: "konu", id: "ahiret", not: "Zerre kadar" }
    ],
    soru: "Bu konulardan hangisi senin hayatında en eksik kalan? O konunun âyetlerinden birini bu hafta her gün okuyup üzerinde düşünmeye ne dersin?"
  },
  {
    id: "aile", baslik: "Aile Hayatı ve Fıkıh", alt: "Nikâhtan nafakaya, mezheplerin aile hukuku",
    giris: "Aile hukuku, mezhepler arasındaki farkların hayatı en doğrudan etkilediği alandır. Bu yol, önce pratik rehberle başlar, sonra velî, denklik, nafaka ve boşanma meselelerinde ihtilafın köklerine iner. Osmanlı'nın 1917'de mezhepler arası tercihle hazırladığı aile kanunu, bu meselelerin bir arada okunmasının tarihî örneğidir.",
    adimlar: [
      { t: "rehber", id: "evlilik", not: "Pratik çerçeve" },
      { t: "mesele", id: "velayet", not: "Kadının iradesi ve velînin rolü" },
      { t: "mesele", id: "kefaet", not: "Örf hukuka ne zaman girer?" },
      { t: "mesele", id: "nafaka", not: "Bir nitelik farkının zincirleme sonuçları" },
      { t: "kavram", id: "orf", not: "Örf değişince hüküm değişir mi?" },
      { t: "mesele", id: "uctalak", not: "Azınlık görüşünün kanunlaşması" },
      { t: "mesele", id: "sahitlik", not: "Hükmün gerekçesi" },
      { t: "kavram", id: "telfik", not: "Mezhepler arası tercih" },
      { t: "rehber", id: "dogum", not: "Ailenin genişlemesi" }
    ],
    soru: "Kendi mezhebinin aile hukukundaki görüşleri ile diğer mezheplerin görüşleri arasında, bugünün şartlarında hangisinin daha adil sonuç verdiğini düşünüyorsun? Bunu delilleriyle savunabilir misin?"
  }
];
