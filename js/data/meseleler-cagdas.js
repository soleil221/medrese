// Meseleler — çağdaş.
window.MESELELER.push(
  {
    id: "kripto", baslik: "Kripto Paralar: Mal mı, Para mı, Kumar mı?", alan: "Fıkıh · Çağdaş Meseleler",
    soru: "Bitcoin ve benzeri kripto varlıklar fıkhen “mal” sayılır mı? Para (semen) işlevi görebilir mi? Alım satımları, madenciliği ve zekâtları nasıl değerlendirilir?",
    ozet: "Nassların doğrudan bahsetmediği bu yeni meselede fakihler klasik kavramlara başvurur: mal, semeniyye (para olma), garar ve meysir (kumar). İlk kurumsal fetvaların çoğu yasaklayıcı olmuştur; gerekçe olarak aşırı belirsizlik, denetimsizlik ve suç ekonomisine elverişlilik gösterilmiştir. Zamanla, kripto varlıkları türlerine göre ayrı değerlendiren yaklaşımlar güç kazanmıştır.",
    ayetler: [
      ["Nisâ 29", "يَا أَيُّهَا الَّذِينَ آمَنُوا لَا تَأْكُلُوا أَمْوَالَكُمْ بَيْنَكُمْ بِالْبَاطِلِ إِلَّا أَنْ تَكُونَ تِجَارَةً عَنْ تَرَاضٍ مِنْكُمْ", "Ey iman edenler! Mallarınızı aranızda haksız yollarla yemeyin; ancak karşılıklı rızaya dayanan bir ticaret olursa başka."],
      ["Mâide 90", "إِنَّمَا الْخَمْرُ وَالْمَيْسِرُ وَالْأَنْصَابُ وَالْأَزْلَامُ رِجْسٌ مِنْ عَمَلِ الشَّيْطَانِ فَاجْتَنِبُوهُ", "Şarap, kumar, dikili taşlar ve fal okları şeytan işi pisliklerdir; onlardan uzak durun."],
      ["Nisâ 5", "وَلَا تُؤْتُوا السُّفَهَاءَ أَمْوَالَكُمُ الَّتِي جَعَلَ اللّٰهُ لَكُمْ قِيَامًا", "Allah'ın sizin için geçim ve ayakta durma vasıtası kıldığı mallarınızı aklı ermezlere vermeyin."],
      ["Bakara 275", "وَأَحَلَّ اللّٰهُ الْبَيْعَ وَحَرَّمَ الرِّبَا", "Allah alışverişi helal, faizi haram kılmıştır."]
    ],
    hadisler: [
      ["نَهَى رَسُولُ اللّٰهِ ﷺ عَنْ بَيْعِ الْحَصَاةِ وَعَنْ بَيْعِ الْغَرَرِ", "Resûlullah çakıl taşı atarak yapılan satışı ve garar (aşırı belirsizlik) içeren satışı yasakladı.", "Müslim (Ebû Hüreyre)", "Sahih"],
      ["الذَّهَبُ بِالذَّهَبِ وَالْفِضَّةُ بِالْفِضَّةِ ... مِثْلًا بِمِثْلٍ سَوَاءً بِسَوَاءٍ يَدًا بِيَدٍ", "Altın altınla, gümüş gümüşle... misli misline, eşit olarak ve peşin değiştirilir.", "Müslim (Ubâde b. Sâmit)", "Sahih"],
      ["", "İmam Mâlik: “İnsanlar aralarında deriyi para olarak kabul etseler ve ona sikke basılsa, onun altın ve gümüşle vadeli değiştirilmesini mekruh görürdüm.”", "Mâlik, el-Müdevvene", "İmam sözü"],
      ["", "İbn Teymiyye: “Dirhem ve dinarın tabiî veya şer'î bir tanımı bilinmez; onun dayanağı âdet ve ıstılahtır (insanların uzlaşmasıdır).”", "İbn Teymiyye, Mecmûu'l-fetâvâ, c. 19", "Âlim sözü"]
    ],
    gorusler: [
      { ekol: "Yasaklayanlar", hukum: "Kripto paraların alım satımı ve bunlarla işlem yapmak, en azından mevcut şartlarda <b>caiz değildir</b>. Gerekçeleri şunlardır: değerin hiçbir varlığa dayanmaması ve aşırı oynaklık (garar-ı fâhiş), işlemlerin büyük ölçüde kumar benzeri spekülasyona dönüşmesi, devlet denetiminin olmaması, kara para ve suç ekonomisine elverişlilik ve para basma yetkisinin devlete ait olması.",
        delil: "Garar yasağı, meysir âyeti ve malın korunması maksadı. İmam Ahmed'in, sikke basmanın ancak devletin izniyle darphanede yapılabileceğine dair sözü. <b>Diyanet</b> Din İşleri Yüksek Kurulu (2017), Mısır Dârü'l-iftâsı (2018) ve bazı ülkelerin fetva kurulları bu yönde görüş bildirmiştir.", alimler: [] },
      { ekol: "Mal sayıp şartlı caiz görenler", hukum: "Kripto varlıklar, insanların değer biçtiği, korunabilen ve devredilebilen dijital varlıklar olarak <b>mal</b> sayılır. Alım satımları, kumar amacı taşımadığı, kaldıraç ve vadeli faizli türevler içermediği ve hile barındırmadığı sürece caizdir. Bazıları, toplumda yaygın kabul görürse para (semen-i ıstılâhî) olabileceğini de söyler.",
        delil: "Eşyada aslolan ibâhadır. Hanefîlerde İmam Muhammed'in benimsediği görüşe göre bakır paralar (fulûs) ıstılahla semen olabilir. Mâlik ve İbn Teymiyye de paranın örf ve uzlaşmaya dayandığını söyler. Cumhur menfaat ve hakları da mal sayar. Ayrıca bir şeyin kötüye kullanılabilmesi, onun kendisinin haram olması için yeterli değildir.", alimler: ["imammuhammed", "malik", "ibnteymiyye"] },
      { ekol: "Türe göre ayıranlar", hukum: "Tek bir hüküm yerine varlığın niteliğine bakılır. Değeri bir varlığa veya meşru bir projeye bağlı olan token'lar, ödeme ağları ve stabil koinler bir hükme tâbidir. Değeri tamamen spekülasyona dayanan, arkasında hiçbir fayda bulunmayan “meme” koinler ise başka bir hükme. Kaldıraçlı işlemler ve vadeli türevler ise ayrıca değerlendirilir ve çoğunlukla caiz görülmez.",
        delil: "Hükümler isimlere değil, hakikatlere ve illetlere bağlıdır. Endonezya Ulema Meclisi (2021), kriptonun para olarak kullanımını caiz görmemiş; ticari emtia olarak alım satımını ise belirli şartlara bağlamıştır.", alimler: ["karadavi"] }
    ],
    koken: `<ul>
        <li><b>Mal kavramı:</b> Hanefîlere göre mal, “insan tabiatının meylettiği ve ihtiyaç için saklanabilen” şeydir; menfaatler mal değildir. Cumhur ise menfaati ve hakları da mal sayar. Somut bir karşılığı olmayan dijital bir kaydın mal sayılması, cumhurun tanımına daha kolay uyar. Ancak çağdaş Hanefî fakihlerin çoğu da örfün “mal” kabul ettiği dijital varlıkları mal sayar.</li>
        <li><b>Semeniyye (para olma):</b> Altın ve gümüşün para olması yaratılıştandır (hilkî); fulûs ise ıstılahla semen olur. Kriptonun para sayılması için toplumda genel kabul görmesi ve değer ölçüsü işlevi görmesi gerekir. Bu sorunun cevabı, ribâ kurallarının kriptoya uygulanıp uygulanmayacağını da belirler: Para ise peşin ve eşit değişim kuralları geçerli olur.</li>
        <li><b>Garar ve meysir:</b> Oynaklık kendi başına garar değildir; hisse senetleri ve döviz de oynaktır. Garar, akdin konusunun veya bedelin belirsizliğindedir. Meysir ise bir tarafın kazancının diğerinin kaybına dayandığı sıfır toplamlı bir oyundur. Asıl tartışma, kripto piyasasının fiilen bu nitelikte olup olmadığıdır.</li>
        <li><b>Devletin rolü:</b> Klasik fıkıhta para basmak (darb-ı sikke) bir devlet yetkisidir. Bunun bir şer'î şart mı yoksa kamu düzenine yönelik bir siyaset tedbiri mi olduğu tartışılır.</li>
      </ul>`,
    cagdas: `<p><b>Zekât:</b> Kripto varlığı mal sayan fakihler, yatırım veya ticaret amacıyla tutulan kriptonun ticaret malı gibi zekâta tâbi olduğunu söyler. Buna göre zekât tarihindeki piyasa değeri üzerinden kırkta bir oranında zekât verilir. Haram görenler de elde tutulan varlığın zekâtının verilmesini ihtiyat olarak tavsiye eder.</p>
      <p><b>Madencilik:</b> İşlemleri doğrulama karşılığında yeni koin elde etmek, sistemi meşru gören fakihlere göre bir ücret (ücret-i misil) veya keşif ödülü olarak değerlendirilir.</p>
      <p>Meselenin mevcut durumu şöyledir: Ülkelerin kriptoyu düzenlemeye ve kendi dijital paralarını (merkez bankası dijital paraları) çıkarmaya başlaması, “devlet denetimi yok” gerekçesini kısmen değiştirmektedir. Bu da fıkhî değerlendirmenin, hükmün illeti değiştikçe yeniden yapılması gerektiğini göstermektedir.</p>`,
    durum: {
      kesin: ["Kumar ve aşırı garar içeren akitlerin haram olduğu", "Hile ve aldatmanın haram olduğu", "Malın korunmasının dinin temel amaçlarından olduğu"],
      cogunluk: ["Kaldıraçlı ve faizli kripto türevlerinin caiz olmadığı", "Kurumsal fetvaların ilk dönemde yasaklayıcı olduğu"],
      tartismali: ["Kripto varlıkların mal olup olmadığı", "Para (semen) işlevi görüp göremeyeceği", "Spot alım satımın hükmü", "Zekât ve madencilik"]
    },
    alimler: ["imammuhammed", "malik", "ibnteymiyye", "karadavi"],
    kaynaklar: ["Serahsî, el-Mebsût, “Fulûs” ile ilgili bahisler", "İbn Teymiyye, Mecmûu'l-fetâvâ, c. 19 ve 29", "Diyanet İşleri Başkanlığı, Din İşleri Yüksek Kurulu açıklaması (2017)", "Uluslararası İslam Fıkıh Akademisi'nin para ve kâğıt para kararları", "TDV İslâm Ansiklopedisi, “Para” ve “Garar” maddeleri"],
    ilgili: ["faiz", "sigorta", "ziynet"]
  },
  {
    id: "sigorta", baslik: "Sigorta: Ticari, Tekâfülî ve Zorunlu", alan: "Fıkıh · Çağdaş Meseleler",
    soru: "Prim karşılığında olası bir zararın tazminini üstlenen sigorta akdi, garar, ribâ ve kumar yasaklarıyla nasıl bağdaşır? Yardımlaşma esasına dayanan sigorta ile ticari sigorta arasında fıkhî bir fark var mıdır?",
    ozet: "Sigortayı ilk tartışan fakih, deniz ticaretindeki “sevkere”yi değerlendiren İbn Âbidîn'dir. 20. yüzyılda mesele iki büyük isim etrafında kutuplaştı: Ticari sigortayı caiz gören Mustafa Zerkā ve karşı çıkan Ebû Zehra. Fıkıh akademileri, ticari sigortayı caiz görmeyip yardımlaşma esaslı tekâfülü onaylayan bir çizgi benimsemiştir. Ancak bu çizginin pratikteki farkı hâlâ tartışılmaktadır.",
    ayetler: [
      ["Mâide 2", "وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَى ۖ وَلَا تَعَاوَنُوا عَلَى الْإِثْمِ وَالْعُدْوَانِ", "İyilik ve takva üzerinde yardımlaşın; günah ve düşmanlık üzerinde yardımlaşmayın."],
      ["Mâide 1", "يَا أَيُّهَا الَّذِينَ آمَنُوا أَوْفُوا بِالْعُقُودِ", "Ey iman edenler! Akitlerinizi yerine getirin."],
      ["Nisâ 29", "لَا تَأْكُلُوا أَمْوَالَكُمْ بَيْنَكُمْ بِالْبَاطِلِ إِلَّا أَنْ تَكُونَ تِجَارَةً عَنْ تَرَاضٍ مِنْكُمْ", "Mallarınızı aranızda haksız yollarla yemeyin; ancak karşılıklı rızaya dayanan bir ticaret olursa başka."]
    ],
    hadisler: [
      ["", "Eş'arîler, savaşta azıkları azaldığında veya Medine'de ailelerinin yiyeceği kıt olduğunda ellerinde olanı bir örtüde toplar, sonra bir kapla aralarında eşit olarak paylaşırlardı. Hz. Peygamber: “Onlar bendendir, ben de onlardanım” buyurdu.", "Buhârî, Müslim (Ebû Mûsâ)", "Sahih"],
      ["", "Hüzeyl kabilesinden iki kadının kavgasında birinin ölmesi üzerine Hz. Peygamber diyetin, öldüren kadının âkılesi (baba tarafından erkek akrabaları) tarafından ödenmesine hükmetti.", "Buhârî, Müslim (Ebû Hüreyre)", "Sahih"],
      ["نَهَى رَسُولُ اللّٰهِ ﷺ عَنْ بَيْعِ الْغَرَرِ", "Resûlullah garar (aşırı belirsizlik) içeren satışı yasakladı.", "Müslim", "Sahih"],
      ["اعْقِلْهَا وَتَوَكَّلْ", "Deveni bağla, sonra tevekkül et.", "Tirmizî (Enes)", "Hasen"]
    ],
    gorusler: [
      { ekol: "İbn Âbidîn (ilk değerlendirme)", hukum: "Müslüman bir tüccarın İslâm topraklarında, gemideki malı batarsa ödeme alacağı “sevkere” akdiyle bedel alması <b>caiz değildir</b>. Çünkü kişi, şer'an üzerine düşmeyen bir şeyi üstlenmiş olur (iltizâmu mâ lem yelzem). Bu bir kefalet de değildir, emanet de değildir.",
        delil: "Tazmin ancak bir haksız fiil (teaddî), bir kefalet veya bir emanet ilişkisinden doğar. Sevkerede bunların hiçbiri yoktur.", alimler: ["ibnabidin"] },
      { ekol: "Ticari sigortayı caiz görmeyenler", hukum: "Ticari sigorta, <b>garar</b> (ödenip ödenmeyeceği ve miktarı belirsiz bir edim), <b>ribâ</b> (para karşılığında farklı miktarda ve vadeli para) ve <b>meysir</b> (bir tarafın kazancının diğerinin kaybına dayanması) içerdiği için caiz değildir. Yardımlaşma (teberru) esasına dayanan <b>tekâfül</b> ise caizdir.",
        delil: "Garar yasağı ve ribâ hadisleri. Râbıta'ya bağlı Mekke Fıkıh Meclisi (1978) ve Uluslararası İslam Fıkıh Akademisi (Cidde, 1985) bu yönde karar almıştır. Ebû Zehra ve Karadâvî de bu görüştedir.", alimler: ["ebuzehra", "karadavi"] },
      { ekol: "Caiz görenler", hukum: "Ticari sigorta, nasta yasaklanmış hiçbir akde birebir benzemeyen yeni bir akittir ve <b>caizdir</b>. Asıl amacı riskleri paylaştırmak ve güvence sağlamaktır. Garar, sigortacının büyük sayılar kanununa göre hesap yapması sayesinde fâhiş değildir.",
        delil: "Akitlerde aslolan ibâhadır (Mâide 1). Âkıle kurumu, Hanefîlerin “Bu yoldan git, malın alınırsa ben öderim” şeklindeki yol güvencesi kefaleti (damân-ı hatari't-tarîk), muvâlât akdi ve Mâlikîlerin bağlayıcı vaad (va'd-i mülzim) görüşü kıyas olarak gösterilir. Mustafa Zerkā bu görüşü Nizâmü't-te'mîn'de sistemli olarak savunmuştur.", alimler: ["zerka"] }
    ],
    koken: `<ul>
        <li><b>Akdin niteliği:</b> Sigorta bir ivaz (karşılıklı mübadele) akdi mi, yoksa bir dayanışma ilişkisi mi? Mübadele akdi sayılırsa garar ve ribâ kuralları sıkı uygulanır. Teberru sayılırsa garar sorun olmaz. Karâfî'nin tespitiyle Mâlikîler, gararın teberru akitlerinde zarar vermediğini kabul eder. Tekâfül modeli bu ayrım üzerine kurulmuştur.</li>
        <li><b>Gararın ölçüsü:</b> Az garar (yesîr) bütün akitlerde affedilir. Sigortadaki belirsizliğin bireysel düzeyde fâhiş, ama portföy düzeyinde hesaplanabilir olması, iki tarafın farklı sonuçlara varmasına yol açar.</li>
        <li><b>Ribâ:</b> Prim ve tazminat aynı cinsten (para) olduğu ve miktarları farklı olduğu için ribâ-i nesîe benzerliği vardır. Caiz görenler ise sigortanın bir para mübadelesi değil, bir “güvence hizmeti” satışı olduğunu söyler.</li>
        <li><b>Kumar mı, kumarın tersi mi?</b> Kumar yeni bir risk yaratır; sigorta ise var olan bir riski paylaştırır. Bu ayrım, Zerkā'nın en güçlü argümanıdır.</li>
      </ul>`,
    cagdas: `<p>Bugün birçok Müslüman ülkede tekâfül şirketleri faaliyet göstermektedir; Türkiye'de de katılım sigortacılığı yasal bir çerçeveye kavuşmuştur. Tekâfülde katılımcıların ödediği katkılar bir yardımlaşma fonunda toplanır. Şirket bu fonu ücret (vekâlet) veya kâr payı (mudârebe) karşılığında yönetir, fon fazlası da katılımcılara döner. Eleştirmenler, birçok tekâfül ürününün ekonomik sonuç olarak ticari sigortadan pek farklı olmadığını ileri sürer.</p>
      <p><b>Zorunlu sigortalar</b> (trafik sigortası, sosyal güvenlik gibi) konusunda çağdaş fakihlerin büyük çoğunluğu, kanunî zorunluluk ve kamu yararı gerekçesiyle bir sakınca görmez. Sosyal güvenlik sistemleri ise devletin dayanışma görevi olarak değerlendirilir. <b>Diyanet</b>, yardımlaşma esaslı (katılım) sigortaların tercih edilmesini tavsiye eder; kanunen zorunlu sigortaların yaptırılmasında ise sakınca görmez.</p>`,
    durum: {
      kesin: ["İyilik üzerinde yardımlaşmanın emredildiği", "Kumar ve fâhiş gararın haram olduğu"],
      cogunluk: ["Yardımlaşma esaslı (tekâfül) sigortanın caiz olduğu", "Zorunlu sigortaların sakıncalı olmadığı", "Fıkıh akademilerinin ticari sigortayı caiz görmediği"],
      tartismali: ["Ticari sigortanın hükmü", "Tekâfül ile ticari sigorta arasındaki farkın gerçekliği", "Hayat sigortası"]
    },
    alimler: ["ibnabidin", "zerka", "ebuzehra", "karadavi", "karafi"],
    kaynaklar: ["İbn Âbidîn, Reddü'l-muhtâr, “Bâbü'l-müste'min”", "Mustafa Ahmed ez-Zerkā, Nizâmü't-te'mîn", "Muhammed Ebû Zehra, Akdü't-te'mîn (1961 Dımaşk İslam Fıkhı Haftası tebliği)", "Karâfî, el-Furûk (garar ve teberru ayrımı)", "Uluslararası İslam Fıkıh Akademisi, Sigorta kararı (1985)", "TDV İslâm Ansiklopedisi, “Sigorta” ve “Tekâfül” maddeleri"],
    ilgili: ["faiz", "kripto"]
  },
  {
    id: "otanazi", baslik: "Ötanazi ve Hayatın Sonunda Tedavi", alan: "Fıkıh · Çağdaş Meseleler",
    soru: "Dayanılmaz acı çeken ve iyileşme ümidi olmayan bir hastanın hayatına, kendi isteğiyle son verilebilir mi? Faydasız tedavinin kesilmesi, cihazların kapatılması ve ölümü hızlandırabilecek ağrı kesicilerin kullanılması aynı hükümde midir?",
    ozet: "Aktif ötanazinin haram olduğunda çağdaş fakihler arasında ittifaka yakın bir görüş birliği vardır: Hayat, kişinin üzerinde tasarruf edebileceği bir mülk değil, bir emanettir. Ancak “tedaviyi bırakmak” ile “öldürmek” aynı şey değildir. Klasik fıkıhta tedavinin hükmü zaten ihtilaflıdır: Mübah, müstehab, terki daha faziletli veya bazı durumlarda vâcib görülmüştür. Pasif ötanazi tartışmasının anahtarı bu klasik ihtilaftır.",
    ayetler: [
      ["Nisâ 29", "وَلَا تَقْتُلُوا أَنْفُسَكُمْ ۚ إِنَّ اللّٰهَ كَانَ بِكُمْ رَحِيمًا", "Kendinizi öldürmeyin. Şüphesiz Allah size karşı çok merhametlidir."],
      ["En'âm 151", "وَلَا تَقْتُلُوا النَّفْسَ الَّتِي حَرَّمَ اللّٰهُ إِلَّا بِالْحَقِّ", "Allah'ın haram kıldığı cana haksız yere kıymayın."],
      ["Mâide 32", "مَنْ قَتَلَ نَفْسًا بِغَيْرِ نَفْسٍ أَوْ فَسَادٍ فِي الْأَرْضِ فَكَأَنَّمَا قَتَلَ النَّاسَ جَمِيعًا ۖ وَمَنْ أَحْيَاهَا فَكَأَنَّمَا أَحْيَا النَّاسَ جَمِيعًا", "Kim bir cana kıymamış veya yeryüzünde bozgunculuk çıkarmamış birini öldürürse bütün insanları öldürmüş gibidir. Kim de birinin hayatını kurtarırsa bütün insanların hayatını kurtarmış gibidir."],
      ["Mülk 2", "الَّذِي خَلَقَ الْمَوْتَ وَالْحَيَاةَ لِيَبْلُوَكُمْ أَيُّكُمْ أَحْسَنُ عَمَلًا", "O, hanginizin daha güzel amel yapacağını sınamak için ölümü ve hayatı yaratandır."]
    ],
    hadisler: [
      ["لَا يَتَمَنَّيَنَّ أَحَدُكُمُ الْمَوْتَ مِنْ ضُرٍّ أَصَابَهُ، فَإِنْ كَانَ لَا بُدَّ فَاعِلًا فَلْيَقُلْ: اللّٰهُمَّ أَحْيِنِي مَا كَانَتِ الْحَيَاةُ خَيْرًا لِي وَتَوَفَّنِي إِذَا كَانَتِ الْوَفَاةُ خَيْرًا لِي", "Hiçbiriniz başına gelen bir sıkıntıdan dolayı ölümü temenni etmesin. Mutlaka bir şey diyecekse şöyle desin: “Allah'ım! Yaşamak benim için hayırlı olduğu sürece beni yaşat, ölmek benim için hayırlı olduğunda da canımı al.”", "Buhârî, Müslim (Enes)", "Sahih"],
      ["", "Önceki ümmetlerden yaralı bir adam acıya dayanamayıp bir bıçakla elini kesti, kanı durmadı ve öldü. Allah: “Kulum canını almakta benden önce davrandı; ona cenneti haram kıldım” buyurdu.", "Buhârî (Cündeb b. Abdillâh)", "Sahih"],
      ["تَدَاوَوْا فَإِنَّ اللّٰهَ لَمْ يَضَعْ دَاءً إِلَّا وَضَعَ لَهُ دَوَاءً غَيْرَ دَاءٍ وَاحِدٍ: الْهَرَمُ", "Tedavi olun; çünkü Allah ihtiyarlık dışında, şifasını yaratmadığı bir hastalık yaratmamıştır.", "Ebû Dâvûd, Tirmizî (Üsâme b. Şerîk)", "Sahih"],
      ["", "Sara nöbetleri geçiren bir kadın dua istemeye gelince Hz. Peygamber: “Dilersen sabret, sana cennet var; dilersen Allah'a dua edeyim, sana afiyet versin” buyurdu. Kadın sabretmeyi seçti.", "Buhârî, Müslim (İbn Abbâs)", "Sahih"]
    ],
    gorusler: [
      { ekol: "Aktif ötanazi: ittifaka yakın görüş", hukum: "Hekimin bir ilaç veya müdahaleyle hastanın hayatına kasten son vermesi, hastanın isteğiyle olsa bile <b>haramdır</b>. Hekim açısından adam öldürme, hasta açısından intihar ve intihara yardım hükmündedir. Hastanın izni, fiili mubah kılmaz.",
        delil: "Nisâ 29, En'âm 151 ve intihar hadisleri. Hayat Allah'ın hakkıdır (hakkullah) ve kişiye emanettir. Klasik fıkıhta “Beni öldür” diyen birini öldürmenin haram olduğunda ittifak vardır; iznin yalnızca kısası düşüren bir şüphe olup olmadığı tartışılmıştır.", alimler: ["karadavi"] },
      { ekol: "Hanefî ve Mâlikî: tedavi mubahtır", hukum: "Tedavi mubahtır; kişi tedaviyi terk ederek ölürse günahkâr olmaz. Bu, açlıktan ölecek durumdayken yemeği terk etmekten farklıdır; çünkü yemenin hayatı koruduğu kesindir, ilacın şifa vermesi ise zannîdir.",
        delil: "Sara hastası kadına sabır seçeneğinin sunulması. Ayrıca tedavinin faydası kesin değildir. Fetâvâ-yı Hindiyye'de bu ayrım açıkça yer alır.", alimler: ["ebuhanife", "malik", "ibnabidin"] },
      { ekol: "Şâfiî ve Hanbelî", hukum: "Şâfiîlere göre tedavi müstehabdır. Hanbelîlerde İmam Ahmed'in meşhur görüşü, tevekkülü gözetenler için tedaviyi terk etmenin daha faziletli olduğudur. İbn Teymiyye ise tedavinin bazen vâcib, bazen müstehab, bazen mübah olduğunu söyler: Faydası kesin ve hayati olan tedavi vâcibtir.",
        delil: "“Tedavi olun” emri ile tevekkül hadislerinin birlikte okunması. Hesapsız cennete girecek yetmiş bin kişinin “dağlatmayan, rukye istemeyen” kimseler olarak anlatılması (Buhârî, Müslim).", alimler: ["safii", "nevevi", "ahmed", "ibnteymiyye"] },
      { ekol: "Çağdaş fakihler: pasif ötanazi ve palyatif bakım", hukum: "Faydasız ve sadece ölüm sürecini uzatan tedavinin, hekimlerin ortak kararı ve ailenin onayıyla <b>başlanmaması veya kesilmesi caizdir</b>. Bu öldürme değil, hastalığın tabii seyrine bırakmadır. Beslenme, sıvı ve temel bakım ise kesilemez. Ağrıyı dindirmek amacıyla verilen ve ölümü hızlandırma ihtimali bulunan ilaçlar, amaç ağrıyı dindirmek olduğu sürece caizdir.",
        delil: "Tedavinin klasik hükmü (vâcib değil). “İşler amaçlarına göredir” kaidesi; amaç öldürmek değil, ağrıyı dindirmektir. Uluslararası İslam Fıkıh Akademisi'nin beyin ölümü kararı (Amman, 1986), beyin ölümü gerçekleşen hastadaki yaşam destek cihazlarının kapatılabileceğini kabul eder.", alimler: ["karadavi"] }
    ],
    koken: `<ul>
        <li><b>Hayat kimin hakkıdır?</b> Batı biyoetiğinde ötanazi tartışması büyük ölçüde “özerklik” ilkesine dayanır. İslâm hukukunda ise hayat, kişinin kendi üzerinde mutlak tasarruf yetkisi bulunan bir hak değil, Allah'ın hakkıyla iç içe bir emanettir. Bu yüzden rıza, haramı helal kılmaz.</li>
        <li><b>Öldürmek ile ölmeye bırakmak:</b> Fıkıh, fiil ile terk arasında ayrım yapar. Tedavinin vâcib olmadığı durumlarda onu terk etmek, öldürme fiili sayılmaz. Bu ayrımın ahlâken yeterli olup olmadığı ise çağdaş tartışmanın merkezindedir.</li>
        <li><b>Niyet ve çifte etki:</b> Aynı ilaç, ağrıyı dindirme niyetiyle verildiğinde caiz, öldürme niyetiyle verildiğinde haramdır. “El-umûru bi-makāsıdihâ” kaidesi burada belirleyicidir.</li>
        <li><b>Ölümün tanımı:</b> Klasik fıkıh ölümü dış belirtilerle tanımlar. Beyin ölümünün kabulü, “cihazı kapatmanın” öldürme olup olmadığı sorusunu da cevaplar: Beyin ölümü gerçekleşmişse ortada öldürülecek bir hayat yoktur.</li>
      </ul>
      <p class="tip">Acı çeken hastaya düşen tavır, ölümü temenni etmek değil, hadisteki duayı yapmaktır: Allah'tan hayır olan neyse onu istemek. Hasta yakınlarının görevi de bakımı ve teselliyi sürdürmektir.</p>`,
    cagdas: `<p>Türkiye'de ötanazi hukuken yasaktır; 1998 tarihli Hasta Hakları Yönetmeliği bunu açıkça düzenler. Bazı Batı ülkelerinde ise aktif ötanazi veya hekim yardımlı intihar yasallaşmıştır. Bu durum, oralarda yaşayan Müslüman hekimler ve hastalar için yeni sorular doğurmaktadır.</p>
      <p><b>Diyanet</b>, aktif ötanazinin intihar ve adam öldürme hükmünde olduğunu, faydasız tedavinin ise tıbbî gereklilik çerçevesinde kesilebileceğini belirtir. İslam tıp etiği metinleri de hekimin hayata son vermeye yönelik olumlu bir adım atamayacağını, ancak bitkisel hayatı mekanik araçlarla uzatmaya zorunlu olmadığını vurgular.</p>`,
    durum: {
      kesin: ["Masum bir cana kıymanın ve intiharın haram olduğu", "Hastanın rızasının öldürmeyi mubah kılmadığı"],
      cogunluk: ["Aktif ötanazinin haram olduğu (çağdaş fakihlerin ittifakına yakın)", "Faydasız tedavinin kesilebileceği", "Ağrı dindirme amacıyla verilen ilaçların, ölümü hızlandırma ihtimali olsa da caiz olduğu"],
      tartismali: ["Tedavinin hükmü (mübah, müstehab veya vâcib)", "Beslenme ve sıvının hangi durumlarda kesilebileceği", "Faydasızlığın kim tarafından ve hangi ölçütle belirleneceği"]
    },
    alimler: ["ebuhanife", "malik", "safii", "ahmed", "nevevi", "ibnteymiyye", "ibnabidin", "karadavi"],
    kaynaklar: ["Fetâvâ-yı Hindiyye, “Kitâbü'l-kerâhiye”, tedavi bahsi", "Nevevî, el-Mecmû', “Kitâbü'l-cenâiz”", "İbn Teymiyye, Mecmûu'l-fetâvâ, c. 21 ve 24", "Uluslararası İslam Fıkıh Akademisi, beyin ölümü kararı (1986)", "Hasta Hakları Yönetmeliği (1998)", "TDV İslâm Ansiklopedisi, “Ötanazi” ve “Tedavi” maddeleri"],
    ilgili: ["organ", "kader"]
  }
);
