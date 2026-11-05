// Yaygın sözler (2) ve bir sözü tahkik etme yöntemi.
window.SOZLER.push(
  { id: "ashab", soz: "Ashabım gökteki yıldızlar gibidir; hangisine uyarsanız hidayete erersiniz.", ar: "أَصْحَابِي كَالنُّجُومِ بِأَيِّهِمُ اقْتَدَيْتُمُ اهْتَدَيْتُمْ", hukum: "Uydurma veya çok zayıf",
    aciklama: "Ahmed b. Hanbel “sahih değildir” der. İbn Hazm bunu “mevzû ve bâtıl” sayar. İbn Abdilber de senedinin delil olamayacağını söyler. Bu söz, özellikle usulde sahabe görüşlerinin bağlayıcılığını savunmak için sıkça kullanılmıştır; ancak bu konudaki tartışma sahih delillere dayanmalıdır.",
    dogrusu: ["", "Size benim sünnetime ve benden sonra doğru yolda olan, hidayete erdirilmiş halifelerin sünnetine uymanızı tavsiye ederim. Ona azı dişlerinizle sarılın.", "Ebû Dâvûd, Tirmizî (hasen sahih)"],
    ilgili: ["kavram:kavlisahabi", "kavram:sahabe", "alim:ibnhazm", "alim:ibnabdilber"] },
  { id: "fakrfahri", soz: "Fakirlik benim övüncümdür.", ar: "الْفَقْرُ فَخْرِي", hukum: "Uydurma",
    aciklama: "İbn Teymiyye bunun yalan olduğunu ve hiçbir hadis kitabında bulunmadığını söyler. Sehâvî ve Aliyyü'l-Kārî de bâtıl kabul eder. Hz. Peygamber ise fakirlikten Allah'a sığınırdı (Ebû Dâvûd, Nesâî).",
    dogrusu: ["اللّٰهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْكُفْرِ وَالْفَقْرِ", "Allah'ım! Küfürden ve fakirlikten sana sığınırım.", "Ebû Dâvûd, Nesâî"],
    ilgili: ["kavram:zuhd", "alim:ibnteymiyye"] },
  { id: "mezraa", soz: "Dünya âhiretin tarlasıdır.", ar: "الدُّنْيَا مَزْرَعَةُ الْآخِرَةِ", hukum: "Hadis olarak aslı yok",
    aciklama: "Sehâvî, bunun merfû olarak bir aslına rastlamadığını söyler. Söz, tasavvuf ve ahlâk kitaplarında, özellikle Gazâlî'nin İhyâ'sında yaygın olarak kullanılır. Manası doğrudur ve Kur'an'ın âhiret anlayışıyla uyumludur.",
    dogrusu: ["مَنْ كَانَ يُرِيدُ حَرْثَ الْآخِرَةِ نَزِدْ لَهُ فِي حَرْثِهِ", "Kim âhiret ekinini isterse, onun ekinini artırırız.", "Şûrâ 20"],
    ilgili: ["konu:ahiret", "alim:gazali"] },
  { id: "mide", soz: "Mide hastalıkların evidir, perhiz her ilacın başıdır.", ar: "الْمَعِدَةُ بَيْتُ الدَّاءِ وَالْحِمْيَةُ رَأْسُ كُلِّ دَوَاءٍ", hukum: "Hadis değil; hekim sözü",
    aciklama: "Sehâvî ve diğer muhaddisler, bunun Hz. Peygamber'e nispetinin sabit olmadığını, Arap hekim Hâris b. Kelede'nin sözü olarak nakledildiğini belirtir. Sağlıklı beslenme ve ölçülülük ise sahih bir hadisle teşvik edilmiştir.",
    dogrusu: ["مَا مَلَأَ آدَمِيٌّ وِعَاءً شَرًّا مِنْ بَطْنٍ", "İnsanoğlu midesinden daha kötü bir kap doldurmamıştır. Âdemoğluna belini doğrultacak birkaç lokma yeter. Mutlaka yiyecekse, midesinin üçte birini yemeğe, üçte birini içeceğe, üçte birini de nefese ayırsın.", "Tirmizî (hasen sahih)"],
    ilgili: ["rehber:hastalik"] },
  { id: "kolesi", soz: "Bana bir harf öğretenin kölesi olurum.", ar: "مَنْ عَلَّمَنِي حَرْفًا صِرْتُ لَهُ عَبْدًا", hukum: "Hz. Ali'ye nispeti sabit değil",
    aciklama: "Bu söz Hz. Ali'ye nispet edilir, ancak güvenilir bir senedi yoktur. Hadis olarak ise hiç aslı yoktur. Hocaya saygıyı anlatan manası ise ilim geleneğinde yerleşmiştir ve âlimlerin sözlerinde benzerleri bulunur.",
    dogrusu: ["", "Büyüğümüze saygı göstermeyen, küçüğümüze merhamet etmeyen ve âlimimizin hakkını bilmeyen bizden değildir.", "Ahmed (hasen)"],
    ilgili: ["konu:ilim", "alim:ali"] },
  { id: "ezankonusma", soz: "Ezan okunurken konuşanın ölürken dili tutulur.", ar: "", hukum: "Aslı yok",
    aciklama: "Bu söz hiçbir hadis kaynağında bulunmaz; halk arasında yayılmış bir inanıştır. Ezanı dinlemek ve müezzinin söylediklerini tekrar etmek ise sahih bir sünnettir.",
    dogrusu: ["إِذَا سَمِعْتُمُ النِّدَاءَ فَقُولُوا مِثْلَ مَا يَقُولُ الْمُؤَذِّنُ", "Ezanı işittiğinizde müezzinin söylediğinin aynısını söyleyin.", "Buhârî, Müslim"],
    ilgili: [] },
  { id: "cennetanahtari", soz: "Cennetin anahtarı namazdır.", ar: "مِفْتَاحُ الْجَنَّةِ الصَّلَاةُ", hukum: "Zayıf",
    aciklama: "Ahmed ve Tirmizî benzer bir lafızla nakletmiştir, ancak senedinde zayıf raviler bulunur. Namazın önemi ise birçok sahih hadisle sabittir.",
    dogrusu: ["", "Kıyamet günü kulun ilk hesaba çekileceği ameli namazdır. Namazı düzgün olursa kurtulur ve kazanır; bozuk olursa kaybeder ve zarar eder.", "Tirmizî (hasen), Nesâî"],
    ilgili: ["kavram:derece"] },
  { id: "oruclununuykusu", soz: "Oruçlunun uykusu ibadettir.", ar: "نَوْمُ الصَّائِمِ عِبَادَةٌ", hukum: "Çok zayıf",
    aciklama: "Beyhakī Şuabü'l-îmân'da nakletmiştir; ancak senedinde yalancılıkla itham edilen bir ravi bulunur. Bu söz, Ramazan'da gündüzü uykuyla geçirmeye gerekçe yapılmamalıdır.",
    dogrusu: ["", "Kim yalan sözü ve yalanla amel etmeyi bırakmazsa, Allah'ın onun yemesini ve içmesini bırakmasına ihtiyacı yoktur.", "Buhârî"],
    ilgili: ["rehber:ramazan", "mesele:hilal"] },
  { id: "ikigun", soz: "İki günü birbirine eşit olan ziyandadır.", ar: "مَنِ اسْتَوَى يَوْمَاهُ فَهُوَ مَغْبُونٌ", hukum: "Hadis olarak sabit değil",
    aciklama: "Bu söz bazı kaynaklarda bir rüyada duyulan söz olarak veya selefe nispetle geçer. Muhaddisler bunun Hz. Peygamber'e nispetinin sabit olmadığını belirtir. Zamanın değerini anlatan sahih hadisler ise mevcuttur.",
    dogrusu: ["نِعْمَتَانِ مَغْبُونٌ فِيهِمَا كَثِيرٌ مِنَ النَّاسِ: الصِّحَّةُ وَالْفَرَاغُ", "İki nimet vardır ki insanların çoğu bunlarda aldanmıştır: sağlık ve boş vakit.", "Buhârî"],
    ilgili: ["sure:103"] },
  { id: "araplar", soz: "Arapları üç şey için sevin: Ben Arabım, Kur'an Arapçadır ve cennet ehlinin dili Arapçadır.", ar: "أَحِبُّوا الْعَرَبَ لِثَلَاثٍ ...", hukum: "Uydurma veya çok zayıf",
    aciklama: "Hâkim ve Taberânî nakletmiştir. Ukaylî “münker” der, İbnü'l-Cevzî ise mevzû sayar. Zehebî de Hâkim'in sahih değerlendirmesine itiraz etmiştir. Kur'an'ın ve sünnetin ölçüsü ise takvadır.",
    dogrusu: ["", "Ey insanlar! Rabbiniz birdir, babanız birdir. Arabın Arap olmayana, Arap olmayanın Araba, kırmızının siyaha, siyahın kırmızıya takva dışında bir üstünlüğü yoktur.", "Ahmed (sahih)"],
    ilgili: ["mesele:kefaet", "alim:zehebi", "alim:ibnulcevzi"] }
);

// Bir sözün hadis olup olmadığını tahkik etmenin yolu (sayfa başında gösterilir).
window.SOZ_YONTEM = {
  ilkeler: [
    "Bir sözü “Hz. Peygamber buyurdu ki” diyerek aktarmadan önce, onu nakleden bir hadis kaynağını ve muhaddislerin onun hakkındaki hükmünü bilmek gerekir. Hz. Peygamber'e kasten yalan isnat etmenin uyarısı mütevâtirdir.",
    "Kaynağından emin olunmayan sözler için âlimler “rivayet edilir” gibi kesinlik bildirmeyen ifadeler (temrîz sîgası) kullanmıştır. Zayıf olduğu bilinen bir sözü “buyurdu” diye aktarmak usule aykırıdır.",
    "Bir sözün hadis olarak sabit olmaması, manasının yanlış olduğunu göstermez. Manası doğruysa, onu destekleyen sahih bir âyet veya hadisle ifade etmek daha doğrudur.",
    "Bir hadisin meşhur olması, sahih olduğu anlamına gelmez. Dillerde dolaşan sözleri toplayan eserler (“meşhur hadisler” literatürü), tam olarak bu ayrımı yapmak için yazılmıştır."
  ],
  kaynaklar: [
    "Sehâvî, el-Makāsıdü'l-hasene fî beyâni kesîrin mine'l-ehâdîsi'l-müştehire ale'l-elsine",
    "Aclûnî, Keşfü'l-hafâ ve müzîlü'l-ilbâs",
    "Aliyyü'l-Kārî, el-Esrârü'l-merfûa fi'l-ahbâri'l-mevzûa",
    "Şevkânî, el-Fevâidü'l-mecmûa fi'l-ehâdîsi'l-mevzûa",
    "İbnü'l-Cevzî, el-Mevzûât; Süyûtî, el-Leâli'l-masnûa",
    "TDV İslâm Ansiklopedisi, “Mevzû” ve “Meşhur” maddeleri"
  ]
};
