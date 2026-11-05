// Amme cüzü tahlili: âyet, meal, kelime kelime i'râb ve sarf, belâgat notları.
// kelime: [kelime, i'râb, sarf, kök, bab]  — kök+bab varsa çekim aracına bağlanır.
window.AMME = [
  { no: 78, ad: "Nebe'" }, { no: 79, ad: "Nâziât" }, { no: 80, ad: "Abese" }, { no: 81, ad: "Tekvîr" }, { no: 82, ad: "İnfitâr" },
  { no: 83, ad: "Mutaffifîn" }, { no: 84, ad: "İnşikāk" }, { no: 85, ad: "Bürûc" }, { no: 86, ad: "Târık" }, { no: 87, ad: "A'lâ" },
  { no: 88, ad: "Ğâşiye" }, { no: 89, ad: "Fecr" }, { no: 90, ad: "Beled" }, { no: 91, ad: "Şems" }, { no: 92, ad: "Leyl" },
  { no: 93, ad: "Duhâ" }, { no: 94, ad: "İnşirâh" }, { no: 95, ad: "Tîn" }, { no: 96, ad: "Alak" }, { no: 97, ad: "Kadir" },
  { no: 98, ad: "Beyyine" }, { no: 99, ad: "Zilzâl" }, { no: 100, ad: "Âdiyât" }, { no: 101, ad: "Kāria" }, { no: 102, ad: "Tekâsür" },
  { no: 103, ad: "Asr" }, { no: 104, ad: "Hümeze" }, { no: 105, ad: "Fîl" }, { no: 106, ad: "Kureyş" }, { no: 107, ad: "Mâûn" },
  { no: 108, ad: "Kevser" }, { no: 109, ad: "Kâfirûn" }, { no: 110, ad: "Nasr" }, { no: 111, ad: "Tebbet" }, { no: 112, ad: "İhlâs" },
  { no: 113, ad: "Felak" }, { no: 114, ad: "Nâs" }
];

window.TAHLIL = {
  103: {
    giris: "Mekkî, 3 âyet. Kurtuluşun dört şartını özetler; İmam Şâfiî'nin “İnsanlar yalnız bu sure üzerinde düşünselerdi onlara yeterdi” dediği nakledilir.",
    ayetler: [
      { n: 1, ar: "وَالْعَصْرِ", tr: "Asra (zamana) andolsun ki,",
        k: [["وَ", "Kasem harfi (harf-i cer)", "Vâv-ı kasem"], ["الْعَصْرِ", "Muksemün bih; mecrûr. Câr-mecrûr mahzûf أُقْسِمُ fiiline müteallık", "Masdar/isim: asır, ikindi vakti", "عصر", 2]],
        b: ["Kasemle başlamak, gelecek hükmün önemine dikkat çeker."] },
      { n: 2, ar: "إِنَّ الْإِنْسَانَ لَفِي خُسْرٍ", tr: "İnsan gerçekten ziyandadır.",
        k: [["إِنَّ", "Te'kîd harfi (inne grubu)", "Harf"], ["الْإِنْسَانَ", "İnne'nin ismi; mansûb", "Cins ismi; elif-lâm istiğrak için"], ["لَ", "Lâm-ı müzahlaka (te'kîd)", "Harf"], ["فِي", "Harf-i cer", "Harf"], ["خُسْرٍ", "Mecrûr; câr-mecrûr inne'nin mahzûf haberine müteallık", "Masdar: ziyan", "خسر", 4]],
        b: ["Kasem + إِنَّ + lâm: üç te'kîd → haberin inkârî kısmı.", "خُسْرٍ'daki tenvin ta'zîm ve tehvîl içindir: büyük, korkunç bir ziyan.", "الْإِنْسَانَ'daki elif-lâm cins/istiğrak içindir; bu yüzden sonraki istisnâ muttasıldır."] },
      { n: 3, ar: "إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ", tr: "Ancak iman edip salih ameller işleyenler, birbirlerine hakkı tavsiye edenler ve birbirlerine sabrı tavsiye edenler müstesnâ.",
        k: [["إِلَّا", "İstisnâ edatı", "Harf"], ["الَّذِينَ", "Müstesnâ; mebnî, mahallen mansûb (tâm ve mûceb istisnâ)", "İsm-i mevsûl"], ["آمَنُوا", "Fiil-i mâzî; vav fâil. Cümle sıla", "İf'âl (mehmûz)", "أمن", "ifal"], ["وَ", "Atıf harfi", "Harf"], ["عَمِلُوا", "Fiil-i mâzî; vav fâil. Sılaya ma'tûf", "Sülâsî 4. bab", "عمل", 4], ["الصَّالِحَاتِ", "Mef'ûlün bih; kesra ile mansûb (cem-i müennes sâlim)", "İsm-i fâil cemi, isim yerine geçmiş", "صلح", 1], ["تَوَاصَوْا", "Fiil-i mâzî; vav fâil", "Tefâul (lefîf): birbirine tavsiye etti", "وصي", "tefaul"], ["بِالْحَقِّ", "Câr-mecrûr; تَوَاصَوْا'ya müteallık", "İsim"], ["بِالصَّبْرِ", "Câr-mecrûr; ikinci تَوَاصَوْا'ya müteallık", "Masdar", "صبر", 2]],
        b: ["Hak ve sabrın tavsiyesi, salih amellerin içinde olduğu hâlde ayrıca zikredilmiştir: genelden sonra özelin zikri (ıtnâb).", "تَوَاصَوْا fiilinin tekrarı, her iki tavsiyenin ayrı ayrı önemini vurgular.", "Tefâul babı karşılıklılık bildirir: herkes hem tavsiye eden hem tavsiye edilendir."] }
    ]
  },
  108: {
    giris: "Mekkî, 3 âyet; Kur'an'ın en kısa suresi. Hz. Peygamber'e “soyu kesik” (ebter) diyenlere cevap olarak indiği rivayet edilir.",
    ayetler: [
      { n: 1, ar: "إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ", tr: "Şüphesiz biz sana Kevser'i verdik.",
        k: [["إِنَّ", "Te'kîd harfi", "Harf"], ["نَا", "İnne'nin ismi; mebnî, mahallen mansûb", "Zamir (mütekellim maa'l-gayr)"], ["أَعْطَيْنَا", "Fiil-i mâzî; نَا fâil. Cümle inne'nin haberi, mahallen merfû", "İf'âl (nâkıs)", "عطو", "ifal"], ["كَ", "Birinci mef'ûlün bih; mahallen mansûb", "Zamir"], ["الْكَوْثَرَ", "İkinci mef'ûlün bih; mansûb", "فَوْعَل vezninde mübalağa: pek çok hayır", "كثر", 5]],
        b: ["إِنَّا: ta'zîm için çoğul zamir.", "Mâzî sîgası (أَعْطَيْنَا): verilmesi kesin olanın gerçekleşmiş gibi ifadesi.", "الْكَوْثَر kelimesi, çokluk anlamındaki kökten mübalağa vezniyle gelmiştir."] },
      { n: 2, ar: "فَصَلِّ لِرَبِّكَ وَانْحَرْ", tr: "O hâlde Rabbin için namaz kıl ve kurban kes.",
        k: [["فَ", "Sebebiyye / ta'kîb harfi", "Harf"], ["صَلِّ", "Fiil-i emir; illet harfinin hazfiyle mebnî. Fâil müstetir أَنْتَ", "Tef'îl (nâkıs)", "صلو", "tefil"], ["لِرَبِّ", "Câr-mecrûr; صَلِّ'ye müteallık", "İsim"], ["كَ", "Muzâfun ileyh; mahallen mecrûr", "Zamir"], ["وَ", "Atıf harfi", "Harf"], ["انْحَرْ", "Fiil-i emir; sükûn üzere mebnî. Fâil müstetir", "Sülâsî 3. bab: kurban kes", "نحر", 3]],
        b: ["فَ: Nimetin şükrünün hemen ardından gelmesi gerektiğini bildirir.", "رَبِّكَ: Rubûbiyyet sıfatı, nimet verene ibadet etme bağlantısını kurar."] },
      { n: 3, ar: "إِنَّ شَانِئَكَ هُوَ الْأَبْتَرُ", tr: "Asıl soyu kesik olan, sana buğzedenin ta kendisidir.",
        k: [["إِنَّ", "Te'kîd harfi", "Harf"], ["شَانِئَ", "İnne'nin ismi; mansûb, muzâf", "İsm-i fâil (mehmûzü'l-lâm): buğzeden", "شنأ", 3], ["كَ", "Muzâfun ileyh", "Zamir"], ["هُوَ", "Zamîr-i fasl (veya mübtedâ)", "Zamir"], ["الْأَبْتَرُ", "İnne'nin haberi; merfû (veya هُوَ'nun haberi)", "أَفْعَل vezninde sıfat: kesik", "بتر", 1]],
        b: ["Zamîr-i fasl (هُوَ) ve haberin marife oluşu kasr ifade eder: ebter olan yalnız odur.", "Sure, “kevser” (bolluk) ile başlayıp “ebter” (kesiklik) ile biter: mukâbele."] }
    ]
  },
  110: {
    giris: "Medenî, 3 âyet. Nüzûl bakımından son tam surelerdendir; Hz. Peygamber'in vefatının yaklaştığına işaret olarak anlaşılmıştır.",
    ayetler: [
      { n: 1, ar: "إِذَا جَاءَ نَصْرُ اللهِ وَالْفَتْحُ", tr: "Allah'ın yardımı ve fetih geldiğinde,",
        k: [["إِذَا", "Şart manası taşıyan zaman zarfı; mahallen mansûb", "İsim"], ["جَاءَ", "Fiil-i mâzî; şart fiili", "Ecvef + mehmûzü'l-lâm", "جيء", 2], ["نَصْرُ", "Fâil; merfû, muzâf", "Masdar", "نصر", 1], ["اللهِ", "Muzâfun ileyh; mecrûr", "Lafzatullah"], ["وَ", "Atıf harfi", "Harf"], ["الْفَتْحُ", "Ma'tûf; merfû", "Masdar", "فتح", 3]],
        b: ["Yardımın Allah'a izâfesi (نَصْرُ اللهِ) ta'zîm içindir.", "الْفَتْحُ'daki elif-lâm ahd içindir: bilinen fetih, yani Mekke'nin fethi."] },
      { n: 2, ar: "وَرَأَيْتَ النَّاسَ يَدْخُلُونَ فِي دِينِ اللهِ أَفْوَاجًا", tr: "Ve insanların bölük bölük Allah'ın dinine girdiğini gördüğünde,",
        k: [["رَأَيْتَ", "Fiil-i mâzî; تَ fâil. Şart fiiline ma'tûf", "Mehmûzü'l-ayn + nâkıs (kural dışı)"], ["النَّاسَ", "Mef'ûlün bih; mansûb", "Cem ismi"], ["يَدْخُلُونَ", "Fiil-i muzâri; vav fâil. Cümle hâl (basarî rü'yet), mahallen mansûb", "Sülâsî 1. bab", "دخل", 1], ["فِي دِينِ", "Câr-mecrûr; يَدْخُلُونَ'e müteallık", "İsim"], ["اللهِ", "Muzâfun ileyh", "Lafzatullah"], ["أَفْوَاجًا", "Hâl; mansûb", "فَوْجٌ'un cemi: bölük bölük"]],
        b: ["Muzâri (يَدْخُلُونَ), girişin süreklilik ve tekrar hâlinde olduğunu canlı bir tablo olarak gösterir."] },
      { n: 3, ar: "فَسَبِّحْ بِحَمْدِ رَبِّكَ وَاسْتَغْفِرْهُ إِنَّهُ كَانَ تَوَّابًا", tr: "Rabbini hamd ile tesbih et ve O'ndan bağışlanma dile. Şüphesiz O, tövbeleri çok kabul edendir.",
        k: [["فَ", "Cevâb-ı şart harfi", "Harf"], ["سَبِّحْ", "Fiil-i emir; fâil müstetir. Cümle cevâb-ı şart", "Tef'îl", "سبح", "tefil"], ["بِحَمْدِ", "Câr-mecrûr; hâl mahallinde (hamd ederek)", "Masdar", "حمد", 4], ["رَبِّ", "Muzâfun ileyh", "İsim"], ["كَ", "Muzâfun ileyh", "Zamir"], ["اسْتَغْفِرْ", "Fiil-i emir; fâil müstetir", "İstif'âl", "غفر", "istifal"], ["هُ", "Mef'ûlün bih; mahallen mansûb", "Zamir"], ["إِنَّ", "Te'kîd harfi", "Harf"], ["هُ", "İnne'nin ismi", "Zamir"], ["كَانَ", "Nâkıs fiil; ismi müstetir هُوَ. Cümle inne'nin haberi", "Ecvef", "كون", 1], ["تَوَّابًا", "Kâne'nin haberi; mansûb", "فَعَّال vezninde mübalağa sîgası", "توب", 1]],
        b: ["Zafer anında emredilen şey kibir değil, tesbih ve istiğfardır.", "تَوَّابًا: mübalağa sîgası, tövbeyi çok ve tekrar tekrar kabul ettiğini bildirir.", "كَانَ burada geçmişi değil, sürekliliği ifade eder."] }
    ]
  },
  112: {
    giris: "Mekkî, 4 âyet. Tevhidin özüdür; hadiste Kur'an'ın üçte birine denk olduğu bildirilmiştir.",
    ayetler: [
      { n: 1, ar: "قُلْ هُوَ اللهُ أَحَدٌ", tr: "De ki: O Allah birdir.",
        k: [["قُلْ", "Fiil-i emir; fâil müstetir أَنْتَ", "Ecvef emri", "قول", 1], ["هُوَ", "Zamîr-i şe'n; mübtedâ. Sonraki cümle haberi", "Zamir"], ["اللهُ", "İkinci mübtedâ; merfû", "Lafzatullah"], ["أَحَدٌ", "İkinci mübtedânın haberi; merfû. (اللهُ أَحَدٌ cümlesi هُوَ'nun haberi)", "İsim"]],
        b: ["Zamîr-i şe'n ile başlamak, gelecek habere zihni hazırlar ve onu yüceltir.", "Başka bir i'râb: هُوَ mübtedâ, اللهُ haber, أَحَدٌ ikinci haber veya bedel.", "قُلْ: Mekûlü'l-kavl (sonraki cümle) mahallen mansûbdur."] },
      { n: 2, ar: "اللهُ الصَّمَدُ", tr: "Allah Samed'dir (her şey O'na muhtaç, O hiçbir şeye muhtaç değildir).",
        k: [["اللهُ", "Mübtedâ; merfû", "Lafzatullah"], ["الصَّمَدُ", "Haber; merfû", "Sıfat", "صمد", 1]],
        b: ["Mübtedâ ve haberin ikisinin de marife olması kasr ifade eder: Samed yalnız O'dur.", "Lafzatullah'ın tekrar zikri (zamir yerine), her cümlenin bağımsız bir tevhid hükmü olmasını sağlar."] },
      { n: 3, ar: "لَمْ يَلِدْ وَلَمْ يُولَدْ", tr: "O doğurmamış ve doğurulmamıştır.",
        k: [["لَمْ", "Cezm, nefy ve kalb harfi", "Harf"], ["يَلِدْ", "Fiil-i muzâri; meczûm, alameti sükûn. Fâil müstetir", "Misâl-i vâvî: vav düşmüş (وَلَدَ يَلِدُ)", "ولد", 2], ["وَ", "Atıf harfi", "Harf"], ["لَمْ", "Cezm harfi", "Harf"], ["يُولَدْ", "Fiil-i muzâri meçhul; meczûm. Nâib-i fâil müstetir", "Misâl: meçhulde vav kalır", "ولد", 2]],
        b: ["Nefyde mâzî manası (لَمْ) ile hem geçmişte hem ezelde doğum nefyedilir.", "İkisi arasında tıbâk vardır: doğurmak – doğurulmak."] },
      { n: 4, ar: "وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ", tr: "Hiçbir şey O'na denk değildir.",
        k: [["وَ", "Atıf harfi", "Harf"], ["لَمْ", "Cezm harfi", "Harf"], ["يَكُنْ", "Nâkıs fiil; meczûm. İllet harfi iki sâkin buluşmasından düşmüş", "Ecvef", "كون", 1], ["لَهُ", "Câr-mecrûr; كُفُوًا'ya müteallık", "Harf + zamir"], ["كُفُوًا", "Kâne'nin haberi (mukaddem); mansûb", "İsim: denk"], ["أَحَدٌ", "Kâne'nin ismi (muahhar); merfû", "İsim"]],
        b: ["Haberin (كُفُوًا) ve lehü'nün öne alınması (takdîm), nefyin özellikle Allah'a denk olma konusunda olduğunu vurgular.", "أَحَدٌ nefy bağlamında nekre olarak umûm ifade eder: hiç kimse."] }
    ]
  },
  113: {
    giris: "Mekkî (bir görüşe göre Medenî), 5 âyet. Nâs suresiyle birlikte “Muavvizeteyn” (iki sığınma suresi) diye anılır.",
    ayetler: [
      { n: 1, ar: "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ", tr: "De ki: Sabahın Rabbine sığınırım,",
        k: [["قُلْ", "Fiil-i emir; fâil müstetir", "Ecvef emri", "قول", 1], ["أَعُوذُ", "Fiil-i muzâri; fâil müstetir أَنَا. Cümle mekûlü'l-kavl", "Ecvef-i vâvî", "عوذ", 1], ["بِرَبِّ", "Câr-mecrûr; أَعُوذُ'ya müteallık", "İsim"], ["الْفَلَقِ", "Muzâfun ileyh; mecrûr", "Masdar/isim: sabah, yarılma", "فلق", 2]],
        b: ["Sığınılanın “sabahın Rabbi” olarak anılması, karanlığı yaran Allah'ın şerleri de giderebileceğine işarettir."] },
      { n: 2, ar: "مِنْ شَرِّ مَا خَلَقَ", tr: "Yarattığı şeylerin şerrinden,",
        k: [["مِنْ", "Harf-i cer", "Harf"], ["شَرِّ", "Mecrûr; muzâf. Câr-mecrûr أَعُوذُ'ya müteallık", "Masdar/isim"], ["مَا", "İsm-i mevsûl; muzâfun ileyh, mahallen mecrûr", "İsim"], ["خَلَقَ", "Fiil-i mâzî; fâil müstetir. Cümle sıla", "Sülâsî 1. bab", "خلق", 1]],
        b: ["Önce genel olarak bütün yaratılmışların şerrinden sığınılır, sonra üç özel şer sayılır: genelden sonra özelin zikri (ıtnâb)."] },
      { n: 3, ar: "وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ", tr: "Karanlığı çöktüğü zaman gecenin şerrinden,",
        k: [["وَ", "Atıf harfi", "Harf"], ["مِنْ شَرِّ", "Câr-mecrûr; öncekine ma'tûf", "Harf + isim"], ["غَاسِقٍ", "Muzâfun ileyh; mecrûr", "İsm-i fâil: kararan (gece)", "غسق", 2], ["إِذَا", "Zaman zarfı; mahallen mansûb", "İsim"], ["وَقَبَ", "Fiil-i mâzî; fâil müstetir", "Misâl-i vâvî: girdi, çöktü", "وقب", 2]],
        b: ["غَاسِقٍ'deki tenkîr (nekre oluş) tehvîl içindir: korkunç bir karanlık."] },
      { n: 4, ar: "وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ", tr: "Düğümlere üfleyenlerin şerrinden,",
        k: [["وَمِنْ شَرِّ", "Câr-mecrûr; ma'tûf", "Harf + isim"], ["النَّفَّاثَاتِ", "Muzâfun ileyh; mecrûr", "فَعَّال mübalağa sîgasının müennes cemi: çokça üfleyenler", "نفث", 2], ["فِي الْعُقَدِ", "Câr-mecrûr; النَّفَّاثَاتِ'e müteallık", "عُقْدَةٌ'nin cemi"]],
        b: ["Mübalağa sîgası, bu işi âdet edinmiş olanları ifade eder."] },
      { n: 5, ar: "وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ", tr: "Ve hasetçinin, haset ettiği zaman şerrinden.",
        k: [["وَمِنْ شَرِّ", "Câr-mecrûr; ma'tûf", "Harf + isim"], ["حَاسِدٍ", "Muzâfun ileyh; mecrûr", "İsm-i fâil", "حسد", 1], ["إِذَا", "Zaman zarfı", "İsim"], ["حَسَدَ", "Fiil-i mâzî; fâil müstetir", "Sülâsî 1. bab", "حسد", 1]],
        b: ["“Haset ettiği zaman” kaydı: hasedin zararı, içteki duygu eyleme dönüştüğünde ortaya çıkar.", "حَاسِد ve حَسَدَ arasında iştikak cinası vardır."] }
    ]
  },
  114: {
    giris: "Mekkî (bir görüşe göre Medenî), 6 âyet. Mushafın son suresi; insanın içinden gelen vesveseye karşı sığınmadır.",
    ayetler: [
      { n: 1, ar: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ", tr: "De ki: İnsanların Rabbine sığınırım,",
        k: [["قُلْ", "Fiil-i emir", "Ecvef emri", "قول", 1], ["أَعُوذُ", "Fiil-i muzâri; fâil müstetir أَنَا", "Ecvef", "عوذ", 1], ["بِرَبِّ", "Câr-mecrûr; أَعُوذُ'ya müteallık", "İsim"], ["النَّاسِ", "Muzâfun ileyh; mecrûr", "Cem ismi"]],
        b: [] },
      { n: 2, ar: "مَلِكِ النَّاسِ", tr: "İnsanların Melik'ine (hükümdarına),",
        k: [["مَلِكِ", "رَبِّ'nin sıfatı (na't) veya bedeli; mecrûr", "Sıfat", "ملك", 2], ["النَّاسِ", "Muzâfun ileyh", "Cem ismi"]],
        b: [] },
      { n: 3, ar: "إِلٰهِ النَّاسِ", tr: "İnsanların İlâh'ına,",
        k: [["إِلٰهِ", "رَبِّ'nin ikinci sıfatı veya bedeli; mecrûr", "İsim"], ["النَّاسِ", "Muzâfun ileyh", "Cem ismi"]],
        b: ["Rabb → Melik → İlâh sıralaması terakkî (aşağıdan yukarı yükselme) üzerinedir: terbiye eden, hükmeden, ibadet edilen.", "النَّاسِ kelimesinin zamir yerine tekrarı (ıtnâb), her sıfatın insanlarla ilişkisini ayrı ayrı vurgular."] },
      { n: 4, ar: "مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ", tr: "O sinsi vesvesecinin şerrinden,",
        k: [["مِنْ شَرِّ", "Câr-mecrûr; أَعُوذُ'ya müteallık", "Harf + isim"], ["الْوَسْوَاسِ", "Muzâfun ileyh; mecrûr", "Rubâî masdar, ism-i fâil manasında: vesvese veren", "وسوس", "rubai"], ["الْخَنَّاسِ", "Na't; mecrûr", "فَعَّال mübalağa: (Allah anılınca) çokça geri çekilen", "خنس", 1]],
        b: ["Masdarın (وَسْوَاس) fâil yerine kullanılması mübalağa içindir: sanki vesvesenin kendisidir."] },
      { n: 5, ar: "الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ", tr: "Ki o, insanların göğüslerine vesvese verir,",
        k: [["الَّذِي", "İsm-i mevsûl; الْوَسْوَاسِ'in sıfatı, mahallen mecrûr", "İsim"], ["يُوَسْوِسُ", "Fiil-i muzâri; fâil müstetir. Cümle sıla", "Rubâî mücerred muzâri", "وسوس", "rubai"], ["فِي صُدُورِ", "Câr-mecrûr; يُوَسْوِسُ'e müteallık", "صَدْرٌ'ın cemi"], ["النَّاسِ", "Muzâfun ileyh", "Cem ismi"]],
        b: ["Muzâri sîgası, vesvesenin sürekli ve tekrar eden bir eylem olduğunu gösterir."] },
      { n: 6, ar: "مِنَ الْجِنَّةِ وَالنَّاسِ", tr: "Gerek cinlerden gerek insanlardan (olsun).",
        k: [["مِنَ", "Harf-i cer (beyân)", "Harf"], ["الْجِنَّةِ", "Mecrûr; câr-mecrûr vesvesecinin kimlerden olduğunu açıklar (hâl veya beyân)", "Cem ismi: cinler"], ["وَ", "Atıf harfi", "Harf"], ["النَّاسِ", "Ma'tûf; mecrûr", "Cem ismi"]],
        b: ["Vesvesenin hem görünmeyen hem görünen düşmandan gelebileceğini bildirir."] }
    ]
  },
  106: {
    giris: "Mekkî, 4 âyet. Fîl suresiyle mana bakımından bağlantılıdır: Allah'ın Kâbe'yi korumasıyla Kureyş'e verdiği güven ve rızık.",
    ayetler: [
      { n: 1, ar: "لِإِيلَافِ قُرَيْشٍ", tr: "Kureyş'i alıştırdığı için,",
        k: [["لِ", "Harf-i cer (ta'lîl)", "Harf"], ["إِيلَافِ", "Mecrûr; muzâf. Câr-mecrûr 3. âyetteki فَلْيَعْبُدُوا'ya (veya önceki surenin manasına) müteallık", "İf'âl masdarı (mehmûz): alıştırma, ünsiyet", "ألف", "ifal"], ["قُرَيْشٍ", "Muzâfun ileyh; mecrûr", "Tasğîr vezninde özel isim"]],
        b: ["Câr-mecrûrun (لِإِيلَافِ) fiilinden önce gelmesi, nimetin önce hatırlatılıp sonra kulluğun istenmesini sağlar."] },
      { n: 2, ar: "إِيلَافِهِمْ رِحْلَةَ الشِّتَاءِ وَالصَّيْفِ", tr: "Onları kış ve yaz yolculuğuna alıştırdığı için,",
        k: [["إِيلَافِ", "Birinci إِيلَاف'tan bedel; mecrûr", "İf'âl masdarı", "ألف", "ifal"], ["هِمْ", "Muzâfun ileyh", "Zamir"], ["رِحْلَةَ", "Masdarın (إِيلَاف) mef'ûlü; mansûb, muzâf", "İsim: yolculuk", "رحل", 3], ["الشِّتَاءِ", "Muzâfun ileyh; mecrûr", "İsim: kış"], ["وَ", "Atıf harfi", "Harf"], ["الصَّيْفِ", "Ma'tûf; mecrûr", "İsim: yaz"]],
        b: ["Bedel ile tekrar (إِيلَافِ ... إِيلَافِهِمْ), nimetin önemini pekiştirir.", "Kış ile yaz arasında tıbâk vardır."] },
      { n: 3, ar: "فَلْيَعْبُدُوا رَبَّ هٰذَا الْبَيْتِ", tr: "Bu evin (Kâbe'nin) Rabbine kulluk etsinler,",
        k: [["فَ", "Rabt harfi (takdirî şart cevabı)", "Harf"], ["لْ", "Lâm-ı emr", "Harf"], ["يَعْبُدُوا", "Fiil-i muzâri; nûnun hazfiyle meczûm. Vav fâil", "Sülâsî 1. bab", "عبد", 1], ["رَبَّ", "Mef'ûlün bih; mansûb, muzâf", "İsim"], ["هٰذَا", "Muzâfun ileyh; mahallen mecrûr", "İsm-i işaret"], ["الْبَيْتِ", "هٰذَا'dan bedel veya sıfat; mecrûr", "İsim"]],
        b: ["Kâbe'nin (الْبَيْتِ) Rabbe izâfesi, şeref verme içindir."] },
      { n: 4, ar: "الَّذِي أَطْعَمَهُمْ مِنْ جُوعٍ وَآمَنَهُمْ مِنْ خَوْفٍ", tr: "Ki O, onları açlıktan doyurdu ve korkudan emin kıldı.",
        k: [["الَّذِي", "رَبَّ'nin sıfatı; mahallen mansûb", "İsm-i mevsûl"], ["أَطْعَمَ", "Fiil-i mâzî; fâil müstetir. Cümle sıla", "İf'âl", "طعم", "ifal"], ["هُمْ", "Mef'ûlün bih", "Zamir"], ["مِنْ جُوعٍ", "Câr-mecrûr; أَطْعَمَ'ye müteallık", "İsim: açlık"], ["وَ", "Atıf harfi", "Harf"], ["آمَنَ", "Fiil-i mâzî; sılaya ma'tûf", "İf'âl (mehmûz)", "أمن", "ifal"], ["هُمْ", "Mef'ûlün bih", "Zamir"], ["مِنْ خَوْفٍ", "Câr-mecrûr; آمَنَ'ye müteallık", "İsim: korku"]],
        b: ["جُوعٍ ve خَوْفٍ'teki tenkîr tehvîl içindir: büyük açlık, büyük korku.", "İki cümle arasında mukâbele vardır: açlığa karşı doyurma, korkuya karşı güven."] }
    ]
  },
  105: {
    giris: "Mekkî, 5 âyet. Hz. Peygamber'in doğduğu yıl (Fil Yılı) Ebrehe'nin Kâbe'yi yıkmak için gelen ordusunun helâkini anlatır.",
    ayetler: [
      { n: 1, ar: "أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِأَصْحَابِ الْفِيلِ", tr: "Rabbinin fil sahiplerine ne yaptığını görmedin mi?",
        k: [["أَ", "İstifhâm harfi (takrîr)", "Harf"], ["لَمْ", "Cezm harfi", "Harf"], ["تَرَ", "Fiil-i muzâri; illet harfinin hazfiyle meczûm. Fâil müstetir", "رَأَى fiili (kural dışı muzâri يَرَى)"], ["كَيْفَ", "İsm-i istifhâm; فَعَلَ'nin hâli, mahallen mansûb", "İsim"], ["فَعَلَ", "Fiil-i mâzî", "Sülâsî 3. bab", "فعل", 3], ["رَبُّ", "Fâil; merfû", "İsim"], ["كَ", "Muzâfun ileyh", "Zamir"], ["بِأَصْحَابِ", "Câr-mecrûr; فَعَلَ'ye müteallık", "صَاحِبٌ'in cemi"], ["الْفِيلِ", "Muzâfun ileyh", "İsim: fil"]],
        b: ["İstifhâm-ı takrîrî: Cevabı bilinen soruyla muhataba ikrar ettirmek.", "Olay doğumundan önce olduğu hâlde “görmedin mi?” denmesi, bilginin kesinliğinin görmeye denk olmasındandır (mecaz)."] },
      { n: 2, ar: "أَلَمْ يَجْعَلْ كَيْدَهُمْ فِي تَضْلِيلٍ", tr: "Onların tuzağını boşa çıkarmadı mı?",
        k: [["أَلَمْ", "İstifhâm + cezm harfi", "Harf"], ["يَجْعَلْ", "Fiil-i muzâri; meczûm. Fâil müstetir", "Sülâsî 3. bab", "جعل", 3], ["كَيْدَ", "Mef'ûlün bih; mansûb", "Masdar: tuzak", "كيد", 2], ["هُمْ", "Muzâfun ileyh", "Zamir"], ["فِي تَضْلِيلٍ", "Câr-mecrûr; ikinci mef'ûl mahallinde", "Tef'îl masdarı: boşa çıkarma", "ضلل", "tefil"]],
        b: ["فِي (içinde) harf-i ceri, tuzağın boşa çıkmanın içine gömüldüğünü canlandırır: istiare."] },
      { n: 3, ar: "وَأَرْسَلَ عَلَيْهِمْ طَيْرًا أَبَابِيلَ", tr: "Üzerlerine sürü sürü kuşlar gönderdi.",
        k: [["وَ", "Atıf harfi", "Harf"], ["أَرْسَلَ", "Fiil-i mâzî; fâil müstetir", "İf'âl", "رسل", "ifal"], ["عَلَيْهِمْ", "Câr-mecrûr; أَرْسَلَ'ye müteallık", "Harf + zamir"], ["طَيْرًا", "Mef'ûlün bih; mansûb", "Cem ismi: kuşlar"], ["أَبَابِيلَ", "Na't; fetha ile mansûb, tenvinsiz (gayr-i munsarif: müntehe'l-cumû')", "Cem: bölük bölük"]],
        b: ["عَلَيْهِمْ: isti'lâ manası, kuşların onları yukarıdan kuşattığını gösterir."] },
      { n: 4, ar: "تَرْمِيهِمْ بِحِجَارَةٍ مِنْ سِجِّيلٍ", tr: "Onlara pişmiş çamurdan taşlar atıyorlardı.",
        k: [["تَرْمِي", "Fiil-i muzâri; damme takdirî. Cümle طَيْرًا'nın sıfatı, mahallen mansûb", "Nâkıs-ı yâî 2. bab", "رمي", 2], ["هِمْ", "Mef'ûlün bih", "Zamir"], ["بِحِجَارَةٍ", "Câr-mecrûr; تَرْمِي'ye müteallık", "حَجَرٌ'in cemi"], ["مِنْ سِجِّيلٍ", "Câr-mecrûr; حِجَارَةٍ'nin sıfatı", "İsim: pişmiş çamur"]],
        b: ["Muzâri (تَرْمِي), geçmiş olayı göz önünde canlandırır (hikâye-i hâl-i mâziye)."] },
      { n: 5, ar: "فَجَعَلَهُمْ كَعَصْفٍ مَأْكُولٍ", tr: "Sonunda onları yenmiş ekin yaprağı gibi yaptı.",
        k: [["فَ", "Ta'kîb harfi", "Harf"], ["جَعَلَ", "Fiil-i mâzî; fâil müstetir", "Sülâsî 3. bab", "جعل", 3], ["هُمْ", "Birinci mef'ûl", "Zamir"], ["كَعَصْفٍ", "Câr-mecrûr; ikinci mef'ûl mahallinde", "Harf + isim: ekin yaprağı"], ["مَأْكُولٍ", "Na't; mecrûr", "İsm-i mef'ûl (mehmûzü'l-fâ)", "أكل", 1]],
        b: ["Teşbîh-i mürsel ve mücmel: Ordu, hayvanların yiyip çiğnediği ekin yaprağına benzetilmiştir.", "فَ: helâkin taş atılmasının hemen ardından geldiğini bildirir."] }
    ]
  }
};
