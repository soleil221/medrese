// Kur'an'ın ana konuları (tematik okuma).
window.KONULAR = [
  { id: "sabir", ad: "Sabır", ar: "الصبر",
    ozet: "Kur'an'da sabır, doksandan fazla yerde geçen ve pasif bir katlanmadan çok, iradeyi Allah'ın rızası doğrultusunda tutan aktif bir direnç olarak anlatılan bir erdemdir. Namazla birlikte anılır, iman ve amelin tamamlayıcısı olarak sunulur.",
    ayetler: [
      ["Bakara 153", "يَا أَيُّهَا الَّذِينَ آمَنُوا اسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ ۚ إِنَّ اللّٰهَ مَعَ الصَّابِرِينَ", "Ey iman edenler! Sabır ve namazla (Allah'tan) yardım isteyin. Şüphesiz Allah sabredenlerle beraberdir."],
      ["Bakara 155-156", "وَبَشِّرِ الصَّابِرِينَ ۝ الَّذِينَ إِذَا أَصَابَتْهُمْ مُصِيبَةٌ قَالُوا إِنَّا لِلّٰهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ", "Sabredenleri müjdele. Onlar, başlarına bir musibet geldiğinde “Biz Allah'a aitiz ve şüphesiz O'na döneceğiz” derler."],
      ["Zümer 10", "إِنَّمَا يُوَفَّى الصَّابِرُونَ أَجْرَهُمْ بِغَيْرِ حِسَابٍ", "Sabredenlere mükâfatları hesapsız olarak tam verilir."],
      ["Yûsuf 18", "فَصَبْرٌ جَمِيلٌ ۖ وَاللّٰهُ الْمُسْتَعَانُ عَلَى مَا تَصِفُونَ", "Artık (bana düşen) güzel bir sabırdır. Anlattıklarınıza karşı yardımına sığınılacak olan Allah'tır."],
      ["Âl-i İmrân 200", "يَا أَيُّهَا الَّذِينَ آمَنُوا اصْبِرُوا وَصَابِرُوا وَرَابِطُوا وَاتَّقُوا اللّٰهَ لَعَلَّكُمْ تُفْلِحُونَ", "Ey iman edenler! Sabredin, sabırda (düşmanlarınızla) yarışın, nöbette kalın ve Allah'tan sakının ki kurtuluşa eresiniz."]
    ],
    boyutlar: [
      { baslik: "Sabrın üç alanı", metin: "Âlimler sabrı üç alanda inceler: ibadet ve itaatte sebat (taat üzerine sabır), haramlardan uzak durmada direnç (masiyetten sabır) ve musibetler karşısında metanet (belâya sabır). Gazâlî ve İbnü'l-Kayyim, en zor olanın ikincisi olduğunu söyler; çünkü orada nefsin arzusuyla doğrudan mücadele vardır." },
      { baslik: "Sabr-ı cemîl: şikâyet ve sabır", metin: "Hz. Yakub “güzel sabır” derken, kısa bir süre sonra “Ben derdimi ve hüznümü yalnız Allah'a arz ediyorum” (Yûsuf 86) der. Buradan âlimler şu sonuca varmıştır: İnsanlara şikâyet etmek sabrı zedeler; Allah'a şikâyet ise sabrın zirvesidir. Hz. Eyyûb'un “Bana dert dokundu” (Enbiyâ 83) duası da bu yüzden övülmüştür." },
      { baslik: "İlk sarsıntı anı", metin: "Hz. Peygamber, kabrin başında ağlayan bir kadına “Sabır, musibetin ilk anındadır” buyurmuştur (Buhârî, Müslim). Sabır, zamanın acıyı hafifletmesiyle değil, ilk tepkide ortaya çıkar." },
      { baslik: "Sabır ve şükür", metin: "Hangisinin daha faziletli olduğu tartışılmıştır. Gazâlî İhyâ'da meseleyi uzunca ele alır ve ikisinin aynı imanın iki yüzü olduğu sonucuna varır: “İman yarısı sabır, yarısı şükürdür.” Müminin işi her hâlükârda hayırdır: Nimete şükreder, musibete sabreder (Müslim)." }
    ],
    tefekkur: "Son karşılaştığın sıkıntıda ilk tepkin ne oldu? Sabrının hangi alanında, yani taat, haram veya belâ karşısında, en çok zorlanıyorsun?",
    ilgili: ["sure:103", "konu:sukur", "konu:tevekkul", "kavram:halmakam", "rehber:hastalik", "rehber:vefat"] },

  { id: "sukur", ad: "Şükür", ar: "الشكر",
    ozet: "Kur'an, insanın temel tavrını şükür ile küfür (nankörlük) arasında bir seçim olarak sunar. Küfür kelimesinin kökü “örtmek”tir; nimeti örten, onu sahibine nispet etmeyen nankördür. Şükür ise nimeti tanımak ve onu veriliş amacında kullanmaktır.",
    ayetler: [
      ["İbrâhîm 7", "لَئِنْ شَكَرْتُمْ لَأَزِيدَنَّكُمْ ۖ وَلَئِنْ كَفَرْتُمْ إِنَّ عَذَابِي لَشَدِيدٌ", "Eğer şükrederseniz elbette size (nimetimi) artırırım; eğer nankörlük ederseniz azabım çok şiddetlidir."],
      ["Sebe' 13", "اعْمَلُوا آلَ دَاوُودَ شُكْرًا ۚ وَقَلِيلٌ مِنْ عِبَادِيَ الشَّكُورُ", "Ey Dâvûd ailesi! Şükür olarak çalışın. Kullarımdan pek azı çok şükredendir."],
      ["Bakara 152", "فَاذْكُرُونِي أَذْكُرْكُمْ وَاشْكُرُوا لِي وَلَا تَكْفُرُونِ", "Beni anın ki ben de sizi anayım. Bana şükredin, nankörlük etmeyin."],
      ["Nahl 18", "وَإِنْ تَعُدُّوا نِعْمَةَ اللّٰهِ لَا تُحْصُوهَا", "Allah'ın nimetini saymaya kalksanız sayamazsınız."],
      ["Duhâ 11", "وَأَمَّا بِنِعْمَةِ رَبِّكَ فَحَدِّثْ", "Rabbinin nimetini anlat."]
    ],
    boyutlar: [
      { baslik: "Şükrün üç rüknü", metin: "Gazâlî şükrü üç unsurla tanımlar: Kalple nimeti Allah'tan bilmek (ilim), bundan dolayı sevinç duymak (hâl) ve nimeti Allah'ın sevdiği yerde kullanmak (amel). Dil ile hamd, bu üçlünün ifadesidir. Sebe' 13'teki “Şükür olarak çalışın” emri, şükrün bir amel olduğunu açıkça gösterir." },
      { baslik: "Peygamber'in şükrü", metin: "Hz. Peygamber, ayakları şişinceye kadar gece namazı kılıyordu. “Geçmiş ve gelecek günahların bağışlanmışken neden?” diye sorulunca “Çok şükreden bir kul olmayayım mı?” buyurdu (Buhârî, Müslim). Şükür, bir borcun ödenmesi değil, sevginin karşılığıdır." },
      { baslik: "Nimetin artması", metin: "İbrâhîm 7'deki “artırırım” vaadi hem dünyevî hem manevî olarak yorumlanmıştır: Nimetin bereketlenmesi, kalbin kanaati ve şükür fırsatının çoğalması. Duhâ 11 ise nimeti anlatmanın, gösteriş olmadıkça, bir şükür biçimi olduğunu gösterir." }
    ],
    tefekkur: "Bugün nimet olduğunu fark etmeden kullandığın üç şeyi say. Bunlardan birini, veriliş amacına daha uygun nasıl kullanabilirsin?",
    ilgili: ["sure:93", "sure:1", "konu:sabir", "konu:rizik"] },

  { id: "tevekkul", ad: "Tevekkül", ar: "التوكل",
    ozet: "Tevekkül, sebeplere sarıldıktan sonra sonucu Allah'a bırakmak ve kalbi O'na dayandırmaktır. Kur'an'da tevekkül, azim ve istişareden sonra gelir; bu, tevekkülün tembellik değil, eylemin manevî tamamlayıcısı olduğunu gösterir.",
    ayetler: [
      ["Âl-i İmrân 159", "وَشَاوِرْهُمْ فِي الْأَمْرِ ۖ فَإِذَا عَزَمْتَ فَتَوَكَّلْ عَلَى اللّٰهِ ۚ إِنَّ اللّٰهَ يُحِبُّ الْمُتَوَكِّلِينَ", "İş hakkında onlarla istişare et. Karar verdiğinde de Allah'a tevekkül et. Şüphesiz Allah tevekkül edenleri sever."],
      ["Talâk 3", "وَمَنْ يَتَوَكَّلْ عَلَى اللّٰهِ فَهُوَ حَسْبُهُ", "Kim Allah'a tevekkül ederse O ona yeter."],
      ["Âl-i İmrân 173", "حَسْبُنَا اللّٰهُ وَنِعْمَ الْوَكِيلُ", "Allah bize yeter; O ne güzel vekildir."],
      ["Hûd 88", "وَمَا تَوْفِيقِي إِلَّا بِاللّٰهِ ۚ عَلَيْهِ تَوَكَّلْتُ وَإِلَيْهِ أُنِيبُ", "Başarım ancak Allah'ın yardımıyladır. Yalnız O'na tevekkül ettim ve yalnız O'na yöneliyorum."],
      ["Furkān 58", "وَتَوَكَّلْ عَلَى الْحَيِّ الَّذِي لَا يَمُوتُ", "Ölmeyen, daima diri olan Allah'a tevekkül et."]
    ],
    boyutlar: [
      { baslik: "İstişare, azim, tevekkül", metin: "Âl-i İmrân 159'daki sıralama bir eylem modelidir: Önce danış, sonra karar ver, sonra Allah'a dayan. Âyet Uhud yenilgisinden sonra inmiştir. Hz. Peygamber'in istişareye uyup aldığı kararın acı sonuçlarına rağmen, istişareye devam etmesi emredilmektedir." },
      { baslik: "Deveyi bağla", metin: "Devesini bağlamadan tevekkül ettiğini söyleyen bedeviye Hz. Peygamber “Onu bağla, sonra tevekkül et” buyurmuştur (Tirmizî). Kuşların rızkı hadisinde de kuşlar sabah aç çıkar, akşam tok döner (Tirmizî); yani onlar da yuvada beklemez. Tevekkül ile tevâkül (tembellik) arasındaki fark budur." },
      { baslik: "Kaderden kadere", metin: "Hz. Ömer'in veba bölgesine girmekten vazgeçerken söylediği “Allah'ın kaderinden yine Allah'ın kaderine kaçıyoruz” sözü, sebeplere başvurmanın kadere aykırı olmadığını, aksine kaderin bir parçası olduğunu gösterir." },
      { baslik: "Tevekkül ve tedavi", metin: "Hesapsız cennete girecek yetmiş bin kişinin “dağlatmayan, rukye istemeyen ve tevekkül eden” kimseler olarak anlatılması (Buhârî, Müslim), tedaviyi terk etmenin daha faziletli olup olmadığı tartışmasını doğurmuştur. Cumhur ise “Tedavi olun” emri karşısında tedavinin tevekküle aykırı olmadığını kabul eder." }
    ],
    tefekkur: "Şu an seni kaygılandıran bir işte, senin elindeki sebepler neler ve hangisini henüz yerine getirmedin? Elinde olmayan kısmı gerçekten bırakabiliyor musun?",
    ilgili: ["mesele:kader", "mesele:otanazi", "konu:rizik", "konu:sabir", "kavram:halmakam"] },

  { id: "adalet", ad: "Adalet", ar: "العدل والقسط",
    ozet: "Adalet, Kur'an'da peygamberlerin gönderiliş amacı olarak sunulur: İnsanların adaleti ayakta tutması. Kur'an adaleti, kişinin kendisi, ailesi ve hatta düşmanı söz konusu olduğunda bile vazgeçilmez bir ilke olarak koyar.",
    ayetler: [
      ["Nahl 90", "إِنَّ اللّٰهَ يَأْمُرُ بِالْعَدْلِ وَالْإِحْسَانِ وَإِيتَاءِ ذِي الْقُرْبَى وَيَنْهَى عَنِ الْفَحْشَاءِ وَالْمُنْكَرِ وَالْبَغْيِ", "Allah adaleti, iyilik yapmayı ve akrabaya yardım etmeyi emreder; hayâsızlığı, kötülüğü ve zulmü yasaklar."],
      ["Nisâ 135", "يَا أَيُّهَا الَّذِينَ آمَنُوا كُونُوا قَوَّامِينَ بِالْقِسْطِ شُهَدَاءَ لِلّٰهِ وَلَوْ عَلَى أَنْفُسِكُمْ أَوِ الْوَالِدَيْنِ وَالْأَقْرَبِينَ", "Ey iman edenler! Kendiniz, anne babanız ve yakınlarınız aleyhine de olsa Allah için şahitlik eden kimseler olarak adaleti titizlikle ayakta tutun."],
      ["Mâide 8", "وَلَا يَجْرِمَنَّكُمْ شَنَآنُ قَوْمٍ عَلَى أَلَّا تَعْدِلُوا ۚ اعْدِلُوا هُوَ أَقْرَبُ لِلتَّقْوَى", "Bir topluluğa olan öfkeniz sizi adaletsizliğe sürüklemesin. Adaletli olun; bu takvaya daha yakındır."],
      ["Nisâ 58", "إِنَّ اللّٰهَ يَأْمُرُكُمْ أَنْ تُؤَدُّوا الْأَمَانَاتِ إِلَى أَهْلِهَا وَإِذَا حَكَمْتُمْ بَيْنَ النَّاسِ أَنْ تَحْكُمُوا بِالْعَدْلِ", "Allah size emanetleri ehline vermenizi ve insanlar arasında hükmettiğinizde adaletle hükmetmenizi emreder."],
      ["Hadîd 25", "لَقَدْ أَرْسَلْنَا رُسُلَنَا بِالْبَيِّنَاتِ وَأَنْزَلْنَا مَعَهُمُ الْكِتَابَ وَالْمِيزَانَ لِيَقُومَ النَّاسُ بِالْقِسْطِ", "Andolsun ki peygamberlerimizi açık delillerle gönderdik; insanlar adaleti ayakta tutsun diye onlarla birlikte kitabı ve ölçüyü indirdik."]
    ],
    boyutlar: [
      { baslik: "Adl, kıst ve ihsan", metin: "Adl, her şeyi yerli yerine koymak ve eşit ölçü kullanmaktır. Kıst ise daha çok paylaşım ve hakların teslimindeki adaleti ifade eder. Nahl 90'da adaletin hemen ardından ihsanın gelmesi anlamlıdır: Adalet hakkı vermektir, ihsan ise haktan fazlasını vermek ve kendi hakkından vazgeçmektir. İbn Mes'ûd bu âyeti Kur'an'daki en kapsamlı âyet olarak niteler." },
      { baslik: "Düşmana karşı adalet", metin: "Mâide 8, adaletin dostlukla değil, takva ile ilgili olduğunu gösterir. Öfke insanın adaletini en çok saptıran duygudur. Âyetin Müslümanlara, kendilerine düşmanlık edenlere karşı bile adaletli olmalarını emretmesi, Kur'an ahlâkının evrensel karakterini ortaya koyar." },
      { baslik: "Şeriat ve adalet", metin: "İbnü'l-Kayyim et-Turuku'l-hükmiyye'de şöyle der: “Allah peygamberlerini insanlar adaleti ayakta tutsun diye göndermiştir. Adaletin işaretleri hangi yolla ortaya çıkarsa, Allah'ın şeriatı ve dini oradadır.” Bu söz, şer'î siyasetin ve kamu hukukunun adalet merkezli okunmasının temel referanslarından biridir." }
    ],
    tefekkur: "Sevmediğin birine karşı en son ne zaman adil davranmak zorunda kaldın? Nisâ 135'in “kendi aleyhinize de olsa” kaydı, bugün hayatında hangi kararı etkiliyor?",
    ilgili: ["alim:ibnulkayyim", "konu:emanet", "kavram:ihsan", "mesele:sahitlik", "rehber:is"] },

  { id: "rizik", ad: "Rızık", ar: "الرزق",
    ozet: "Rızık, Allah'ın canlılara bahşettiği ve onların faydalandığı her şeydir. Kur'an rızkın Allah'ın elinde olduğunu, genişlik ve darlığın bir imtihan olduğunu bildirir. Bununla birlikte insanı yeryüzünde rızık aramaya ve çalışmaya çağırır.",
    ayetler: [
      ["Hûd 6", "وَمَا مِنْ دَابَّةٍ فِي الْأَرْضِ إِلَّا عَلَى اللّٰهِ رِزْقُهَا", "Yeryüzünde rızkı Allah'a ait olmayan hiçbir canlı yoktur."],
      ["Zâriyât 58", "إِنَّ اللّٰهَ هُوَ الرَّزَّاقُ ذُو الْقُوَّةِ الْمَتِينُ", "Şüphesiz rızık veren, güç sahibi ve sarsılmaz kuvvetli olan yalnızca Allah'tır."],
      ["Mülk 15", "فَامْشُوا فِي مَنَاكِبِهَا وَكُلُوا مِنْ رِزْقِهِ ۖ وَإِلَيْهِ النُّشُورُ", "(Yeryüzünün) omuzlarında yürüyün ve O'nun rızkından yiyin. Dönüş yalnız O'nadır."],
      ["Cuma 10", "فَإِذَا قُضِيَتِ الصَّلَاةُ فَانْتَشِرُوا فِي الْأَرْضِ وَابْتَغُوا مِنْ فَضْلِ اللّٰهِ", "Namaz kılınınca yeryüzüne dağılın ve Allah'ın lütfundan (rızık) arayın."],
      ["Talâk 2-3", "وَمَنْ يَتَّقِ اللّٰهَ يَجْعَلْ لَهُ مَخْرَجًا ۝ وَيَرْزُقْهُ مِنْ حَيْثُ لَا يَحْتَسِبُ", "Kim Allah'tan sakınırsa Allah ona bir çıkış yolu açar ve onu hiç ummadığı yerden rızıklandırır."],
      ["Ra'd 26", "اللّٰهُ يَبْسُطُ الرِّزْقَ لِمَنْ يَشَاءُ وَيَقْدِرُ", "Allah rızkı dilediğine bol verir, dilediğine daraltır."]
    ],
    boyutlar: [
      { baslik: "Haram rızık mıdır?", metin: "Bu, kelâmın inceliklerinden biridir. Ehl-i sünnete göre rızık, canlının faydalandığı her şeydir; haram da rızıktır. Nesefî Akāid'inde “Haram da rızıktır” denir. Ancak haram yoldan elde etmenin sorumluluğu kişiye aittir. Mu'tezile'ye göre ise rızık, kişinin mülkü olan ve faydalanmasına izin verilen şeydir; dolayısıyla haram rızık değildir. Ehl-i sünnetin görüşü, Allah'ın rızkı yaratmasını kulun kesbinden ayırır." },
      { baslik: "Genişlik ve darlık imtihanı", metin: "Fecr 15-16'da insan, rızkı genişletilince “Rabbim bana ikram etti”, daraltılınca “Rabbim beni aşağıladı” der; Kur'an bu iki yargıyı da reddeder (“Kellâ!”). Rızkın bolluğu sevginin, darlığı da gazabın işareti değildir; ikisi de imtihandır." },
      { baslik: "Çalışma ve bereket", metin: "Cuma 10'da namazdan hemen sonra rızık arama emrinin gelmesi, ibadet ile çalışmanın aynı hayatın iki parçası olduğunu gösterir. Hz. Peygamber, “Hiç kimse elinin emeğinden daha hayırlı bir yemek yememiştir” buyurmuştur (Buhârî). Takva ise Talâk 2-3'te, beklenmedik kapıların açılmasının sebebi olarak anlatılır." }
    ],
    tefekkur: "Rızkının genişlediği veya daraldığı bir dönemde Rabbin hakkında ne düşündün? Kazancının helal olması konusunda en çok hangi noktada dikkat etmen gerekiyor?",
    ilgili: ["konu:tevekkul", "konu:sukur", "kavram:zuhd", "rehber:is", "rehber:borc", "mesele:faiz"] },

  { id: "takva", ad: "Takva", ar: "التقوى",
    ozet: "Takva, “korumak, sakınmak” anlamındaki vikâye kökünden gelir. Allah'ın azabından ve rızasına aykırı olandan sakınarak kendini korumaktır. Kur'an'ın hidayet ettiği kişiler “müttakîler”dir. Allah katında insanlar arasındaki tek üstünlük ölçüsü de takvadır.",
    ayetler: [
      ["Bakara 2", "ذٰلِكَ الْكِتَابُ لَا رَيْبَ ۛ فِيهِ ۛ هُدًى لِلْمُتَّقِينَ", "Bu, kendisinde şüphe olmayan kitaptır; takva sahipleri için bir hidayet rehberidir."],
      ["Hucurât 13", "إِنَّ أَكْرَمَكُمْ عِنْدَ اللّٰهِ أَتْقَاكُمْ", "Allah katında en değerliniz, takvada en ileri olanınızdır."],
      ["Âl-i İmrân 102", "يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللّٰهَ حَقَّ تُقَاتِهِ وَلَا تَمُوتُنَّ إِلَّا وَأَنْتُمْ مُسْلِمُونَ", "Ey iman edenler! Allah'tan, O'ndan nasıl sakınmak gerekiyorsa öyle sakının ve ancak Müslüman olarak can verin."],
      ["Teğâbün 16", "فَاتَّقُوا اللّٰهَ مَا اسْتَطَعْتُمْ", "Gücünüz yettiği kadar Allah'tan sakının."],
      ["Enfâl 29", "يَا أَيُّهَا الَّذِينَ آمَنُوا إِنْ تَتَّقُوا اللّٰهَ يَجْعَلْ لَكُمْ فُرْقَانًا", "Ey iman edenler! Allah'tan sakınırsanız O size (hak ile bâtılı) ayırt etme gücü verir."],
      ["Bakara 197", "وَتَزَوَّدُوا فَإِنَّ خَيْرَ الزَّادِ التَّقْوَى", "Azık edinin; azığın en hayırlısı takvadır."]
    ],
    boyutlar: [
      { baslik: "“Hakkıyla” ve “gücünüz yettiğince”", metin: "Âl-i İmrân 102 “hakkıyla takva” isterken Teğâbün 16 “gücünüz yettiğince” der. Katâde gibi bazı selef âlimleri ikincisinin birincisini neshettiğini söyler. Cumhur ise ikinci âyetin birinciyi açıkladığını kabul eder: Hakkıyla takva, gücün yettiği kadar takvadır. Bu ihtilaf, “nesih” kelimesinin selefteki geniş kullanımının da güzel bir örneğidir." },
      { baslik: "Takvanın dereceleri", metin: "Âlimler takvayı derecelendirir: şirkten sakınmak, büyük günahlardan sakınmak, küçük günahlardan ve şüphelilerden sakınmak ve kalbi Allah'tan başkasına bağlamaktan sakınmak. Hz. Ömer'in Ubeyy b. Ka'b'a takvayı sorduğu ve onun “Dikenli bir yoldan geçerken eteğini toplayıp dikkatle yürümek gibidir” diye cevap verdiği nakledilir." },
      { baslik: "Takva kalptedir", metin: "Hz. Peygamber göğsünü işaret ederek “Takva buradadır” buyurmuştur (Müslim). Takva dış görünüşle ölçülemez. Enfâl 29'daki “furkan” vaadi ise takvanın bir bilgi ve basiret kaynağı olduğunu gösterir." }
    ],
    tefekkur: "Hayatında “gücünün yettiği” ile “yapmadığın” arasındaki farkı dürüstçe nerede görüyorsun? Hangi küçük alışkanlık takvanı zedeliyor?",
    ilgili: ["konu:kalp", "kavram:nesh", "kavram:velayet", "mesele:kefaet"] },

  { id: "tevbe", ad: "Tevbe", ar: "التوبة",
    ozet: "Tevbe, “dönmek” demektir: Kulun günahtan Allah'a dönmesi ve Allah'ın da kuluna rahmetiyle dönmesi. Kur'an, hiçbir günahın tevbe kapısını kapatmadığını, ümitsizliğin ise imana yakışmadığını vurgular.",
    ayetler: [
      ["Zümer 53", "قُلْ يَا عِبَادِيَ الَّذِينَ أَسْرَفُوا عَلَى أَنْفُسِهِمْ لَا تَقْنَطُوا مِنْ رَحْمَةِ اللّٰهِ ۚ إِنَّ اللّٰهَ يَغْفِرُ الذُّنُوبَ جَمِيعًا", "De ki: Ey kendilerine karşı haddi aşan kullarım! Allah'ın rahmetinden ümit kesmeyin. Şüphesiz Allah bütün günahları bağışlar."],
      ["Tahrîm 8", "يَا أَيُّهَا الَّذِينَ آمَنُوا تُوبُوا إِلَى اللّٰهِ تَوْبَةً نَصُوحًا", "Ey iman edenler! Allah'a içtenlikle (nasûh) tevbe edin."],
      ["Nûr 31", "وَتُوبُوا إِلَى اللّٰهِ جَمِيعًا أَيُّهَ الْمُؤْمِنُونَ لَعَلَّكُمْ تُفْلِحُونَ", "Ey müminler! Hepiniz Allah'a tevbe edin ki kurtuluşa eresiniz."],
      ["Furkān 70", "إِلَّا مَنْ تَابَ وَآمَنَ وَعَمِلَ عَمَلًا صَالِحًا فَأُولٰئِكَ يُبَدِّلُ اللّٰهُ سَيِّئَاتِهِمْ حَسَنَاتٍ", "Ancak tevbe edip iman eden ve salih amel işleyenler başkadır. Allah onların kötülüklerini iyiliklere çevirir."],
      ["Bakara 222", "إِنَّ اللّٰهَ يُحِبُّ التَّوَّابِينَ وَيُحِبُّ الْمُتَطَهِّرِينَ", "Şüphesiz Allah çokça tevbe edenleri ve temizlenenleri sever."]
    ],
    boyutlar: [
      { baslik: "Tevbenin şartları", metin: "Nevevî Riyâzü's-sâlihîn'de üç şart sayar: günahı hemen bırakmak, pişmanlık duymak ve bir daha yapmamaya kesin karar vermek. Günah bir kul hakkıyla ilgiliyse dördüncü şart olarak hakkın sahibine iade edilmesi veya helallik alınması gerekir. Hz. Peygamber “Pişmanlık tevbedir” buyurmuştur (İbn Mâce, Ahmed)." },
      { baslik: "Tevbenin vakti", metin: "Nisâ 17-18'e göre tevbe, ölüm gelip çatmadan ve son nefes (gargara) hâli başlamadan önce kabul edilir. Firavun'un boğulurken iman etmesi (Yûnus 90-91) bu yüzden kabul görmemiştir. İbnü'l-Arabî'nin aksi yöndeki yorumu tartışma konusu olmuş ve cumhurca reddedilmiştir." },
      { baslik: "Allah'ın sevinci", metin: "Hz. Peygamber, çölde devesini ve azığını kaybedip ümidini kestikten sonra onu yanı başında bulan adamın sevincinden daha çok Allah'ın kulunun tevbesine sevindiğini bildirmiştir (Buhârî, Müslim). Furkān 70'teki “kötülüklerin iyiliğe çevrilmesi” ise tevbenin geçmişi yalnızca silmekle kalmadığını, onu dönüştürdüğünü gösterir." }
    ],
    tefekkur: "Ertelediğin bir tevben var mı? Bir kul hakkı söz konusuysa, helallik almanın veya hakkı iade etmenin en kolay yolu ne olabilir?",
    ilgili: ["konu:rahmet", "mesele:sefaat", "kavram:kebire", "rehber:vefat"] },

  { id: "rahmet", ad: "Rahmet", ar: "الرحمة",
    ozet: "Kur'an'ın her suresi (biri hariç) Allah'ın iki rahmet ismiyle başlar. Rahmet, Allah'ın kendi üzerine yazdığı bir ilkedir ve Hz. Peygamber'in gönderilişinin ta kendisidir. İnsanlar arasındaki merhamet de bu ilâhî rahmetin bir yansımasıdır.",
    ayetler: [
      ["A'râf 156", "وَرَحْمَتِي وَسِعَتْ كُلَّ شَيْءٍ", "Rahmetim her şeyi kuşatmıştır."],
      ["En'âm 12", "كَتَبَ عَلَى نَفْسِهِ الرَّحْمَةَ", "(Allah) rahmeti kendi üzerine yazmıştır."],
      ["Enbiyâ 107", "وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِلْعَالَمِينَ", "Seni ancak âlemlere rahmet olarak gönderdik."],
      ["Âl-i İmrân 159", "فَبِمَا رَحْمَةٍ مِنَ اللّٰهِ لِنْتَ لَهُمْ ۖ وَلَوْ كُنْتَ فَظًّا غَلِيظَ الْقَلْبِ لَانْفَضُّوا مِنْ حَوْلِكَ", "Allah'ın rahmeti sayesinde onlara yumuşak davrandın. Eğer kaba ve katı kalpli olsaydın, etrafından dağılıp giderlerdi."]
    ],
    boyutlar: [
      { baslik: "Rahmân ve Rahîm", metin: "İki isim aynı kökten gelir. Tefsirlerde yaygın olan görüşe göre Rahmân, dünyada mümin-kâfir ayırmadan herkese ulaşan rahmeti; Rahîm ise âhirette müminlere özel rahmeti ifade eder. Bazı âlimler ise Rahmân'ın Allah'a özel bir isim olduğunu (başkasına verilemeyeceğini), Rahîm'in ise bir sıfat olarak kullanılabileceğini vurgular." },
      { baslik: "Rahmet gazabı geçmiştir", metin: "Allah yaratmayı tamamladığında arşının üzerinde yanında olan bir kitaba “Rahmetim gazabımı geçmiştir” diye yazmıştır (Buhârî, Müslim). Başka bir hadise göre Allah rahmeti yüz parçaya ayırmış, birini yeryüzüne indirmiş, doksan dokuzunu kıyamet günü için saklamıştır (Buhârî, Müslim). Annenin yavrusuna şefkati, bu tek parçanın bir yansımasıdır." },
      { baslik: "Merhamet edin", metin: "“Merhamet edenlere Rahmân da merhamet eder. Yeryüzündekilere merhamet edin ki gökte olanlar da size merhamet etsin” (Ebû Dâvûd, Tirmizî). Âl-i İmrân 159, tebliğin ve liderliğin ruhunun rahmet ve yumuşaklık olduğunu gösterir." }
    ],
    tefekkur: "Rahmetin en çok neye ihtiyaç duyduğun anda geldiğini hatırladığın bir an var mı? Etrafında merhametine en çok muhtaç olan kim?",
    ilgili: ["sure:1", "konu:tevbe", "mesele:sefaat"] },

  { id: "ilim", ad: "İlim, Akıl ve Tefekkür", ar: "العلم والعقل والتفكر",
    ozet: "İlk inen âyet “Oku!” emridir. Kur'an bilenle bilmeyeni bir tutmaz, Allah'tan en çok korkanların âlimler olduğunu söyler, kâinatı okunacak âyetlerle dolu bir kitap olarak sunar. Bilgiyi de bir ahlâkî sorumluluk olarak tanımlar.",
    ayetler: [
      ["Alak 1", "اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ", "Yaratan Rabbinin adıyla oku!"],
      ["Zümer 9", "قُلْ هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لَا يَعْلَمُونَ", "De ki: Hiç bilenlerle bilmeyenler bir olur mu?"],
      ["Fâtır 28", "إِنَّمَا يَخْشَى اللّٰهَ مِنْ عِبَادِهِ الْعُلَمَاءُ", "Kulları içinde Allah'tan ancak âlimler (hakkıyla) korkar."],
      ["Tâhâ 114", "وَقُلْ رَبِّ زِدْنِي عِلْمًا", "De ki: Rabbim, ilmimi artır."],
      ["Âl-i İmrân 190", "إِنَّ فِي خَلْقِ السَّمَاوَاتِ وَالْأَرْضِ وَاخْتِلَافِ اللَّيْلِ وَالنَّهَارِ لَآيَاتٍ لِأُولِي الْأَلْبَابِ", "Göklerin ve yerin yaratılışında, gece ile gündüzün birbiri ardınca gelişinde akıl sahipleri için elbette âyetler vardır."],
      ["İsrâ 36", "وَلَا تَقْفُ مَا لَيْسَ لَكَ بِهِ عِلْمٌ", "Hakkında bilgin olmayan şeyin ardına düşme."]
    ],
    boyutlar: [
      { baslik: "Akıl bir fiildir", metin: "Kur'an'da “akıl” kelimesi isim olarak hiç geçmez; hep fiil olarak geçer: “ya'kılûn”, yani akleden, akıl yürüten. Kur'an aklı bir organ veya cevherden çok, sürekli işletilmesi gereken bir faaliyet olarak sunar. Hac 46'da bu akletme faaliyeti kalbe nispet edilir: “Akledecekleri kalpleri...”" },
      { baslik: "İlim ve haşyet", metin: "Fâtır 28 ilmi bir bilgi birikiminden çok, Allah'a karşı derin bir saygı ve korku (haşyet) doğuran bir bilinç olarak tanımlar. Hz. Peygamber “Faydasız ilimden sana sığınırım” diye dua ederdi (Müslim). İbn Mes'ûd'a nispet edilen söz de bunu anlatır: “İlim çok rivayet etmek değil, haşyettir.”" },
      { baslik: "Tefekkür, tezekkür, tedebbür", metin: "Kur'an üç farklı düşünme fiili kullanır: tefekkür (kâinat ve olaylar üzerinde düşünmek), tezekkür (bilineni hatırlayıp öğüt almak) ve tedebbür (âyetlerin sonuçları ve derinlikleri üzerinde düşünmek, Muhammed 24). İsrâ 36 ise bilginin ahlâkını koyar: Bilmeden konuşmamak, duyduğunu araştırmadan yaymamak." }
    ],
    tefekkur: "Son öğrendiğin bilgi senin Allah'la ilişkini nasıl etkiledi? Bilmeden hakkında konuştuğun bir konu var mı?",
    ilgili: ["kavram:tevil", "konu:kalp", "alim:gazali"] },

  { id: "ahiret", ad: "Âhiret ve Hesap", ar: "الآخرة والحساب",
    ozet: "Kur'an'ın en çok üzerinde durduğu konulardan biri âhirettir. Âhiret inancı, Allah'ın adaletinin ve dünya hayatının anlamlı olmasının zorunlu sonucu olarak sunulur. Kur'an bunu aklî delillerle de destekler.",
    ayetler: [
      ["Zilzâl 7-8", "فَمَنْ يَعْمَلْ مِثْقَالَ ذَرَّةٍ خَيْرًا يَرَهُ ۝ وَمَنْ يَعْمَلْ مِثْقَالَ ذَرَّةٍ شَرًّا يَرَهُ", "Kim zerre ağırlığınca bir iyilik yaparsa onu görür. Kim de zerre ağırlığınca bir kötülük yaparsa onu görür."],
      ["Enbiyâ 47", "وَنَضَعُ الْمَوَازِينَ الْقِسْطَ لِيَوْمِ الْقِيَامَةِ فَلَا تُظْلَمُ نَفْسٌ شَيْئًا", "Kıyamet günü için adalet terazileri kurarız; artık hiç kimseye hiçbir şekilde haksızlık edilmez."],
      ["Mü'minûn 115", "أَفَحَسِبْتُمْ أَنَّمَا خَلَقْنَاكُمْ عَبَثًا وَأَنَّكُمْ إِلَيْنَا لَا تُرْجَعُونَ", "Sizi boşuna yarattığımızı ve bize döndürülmeyeceğinizi mi sandınız?"],
      ["Yâsîn 78-79", "قَالَ مَنْ يُحْيِي الْعِظَامَ وَهِيَ رَمِيمٌ ۝ قُلْ يُحْيِيهَا الَّذِي أَنْشَأَهَا أَوَّلَ مَرَّةٍ", "“Çürümüş kemikleri kim diriltecek?” dedi. De ki: Onları ilk defa yaratan diriltecek."],
      ["Ankebût 64", "وَإِنَّ الدَّارَ الْآخِرَةَ لَهِيَ الْحَيَوَانُ ۚ لَوْ كَانُوا يَعْلَمُونَ", "Asıl hayat âhiret yurdudur; keşke bilselerdi."]
    ],
    boyutlar: [
      { baslik: "Kur'an'ın aklî delilleri", metin: "Kur'an âhireti üç tür delille temellendirir: ilk yaratılış (yoktan var edenin yeniden diriltmesi daha kolaydır, Yâsîn 79), tabiattaki ölüm-diriliş döngüsü (ölü toprağın yağmurla dirilmesi, Fussılet 39) ve ilâhî adalet ve hikmet (yaratılışın boşuna olmaması, Mü'minûn 115). Said Nursi'nin Haşir Risalesi (Onuncu Söz) bu delilleri sistemli şekilde işler." },
      { baslik: "Cismânî haşir", metin: "Ehl-i sünnet, dirilişin hem ruh hem beden ile olacağını kabul eder. Gazâlî Tehâfüt'te, İbn Sînâ gibi filozofların haşri yalnızca ruhanî kabul etmesini tekfir gerektiren üç görüşten biri olarak sayar." },
      { baslik: "Mizan ve amel", metin: "Zilzâl 7-8, hiçbir amelin kaybolmayacağını en çarpıcı şekilde ifade eder. Hz. Peygamber bu âyetleri “eşsiz ve kapsamlı âyet” (el-fâzzetü'l-câmia) olarak nitelemiştir (Buhârî). Mizanın keyfiyeti tartışılmıştır: Mu'tezile'nin bir kısmı onu adaletin mecazı olarak görür, Ehl-i sünnet ise hakiki bir mizan olduğunu kabul eder." }
    ],
    tefekkur: "Bugün yaptıklarının “zerre” kadarının bile kaybolmayacağını gerçekten hissetseydin, hangi küçük iyiliği yapar, hangi küçük kötülüğü bırakırdın?",
    ilgili: ["mesele:kabir", "mesele:sefaat", "sure:102", "alim:saidnursi", "rehber:vefat"] },

  { id: "emanet", ad: "Emanet ve Halifelik", ar: "الأمانة والخلافة",
    ozet: "Kur'an insanı, göklerin, yerin ve dağların taşımaktan çekindiği emaneti yüklenen varlık olarak tanımlar. Emanet, sorumluluk ve iradeyle birlikte verilmiş bir görevdir. Bu görev, insanın yeryüzündeki halifeliğinin özüdür.",
    ayetler: [
      ["Ahzâb 72", "إِنَّا عَرَضْنَا الْأَمَانَةَ عَلَى السَّمَاوَاتِ وَالْأَرْضِ وَالْجِبَالِ فَأَبَيْنَ أَنْ يَحْمِلْنَهَا وَأَشْفَقْنَ مِنْهَا وَحَمَلَهَا الْإِنْسَانُ ۖ إِنَّهُ كَانَ ظَلُومًا جَهُولًا", "Biz emaneti göklere, yere ve dağlara teklif ettik; onlar onu yüklenmekten kaçındılar ve ondan korktular. Onu insan yüklendi. Şüphesiz o çok zalim, çok cahildir."],
      ["Bakara 30", "إِنِّي جَاعِلٌ فِي الْأَرْضِ خَلِيفَةً", "Ben yeryüzünde bir halife yaratacağım."],
      ["Mü'minûn 8", "وَالَّذِينَ هُمْ لِأَمَانَاتِهِمْ وَعَهْدِهِمْ رَاعُونَ", "Onlar emanetlerine ve ahitlerine riayet ederler."],
      ["Enfâl 27", "يَا أَيُّهَا الَّذِينَ آمَنُوا لَا تَخُونُوا اللّٰهَ وَالرَّسُولَ وَتَخُونُوا أَمَانَاتِكُمْ وَأَنْتُمْ تَعْلَمُونَ", "Ey iman edenler! Allah'a ve Resûl'e ihanet etmeyin; bile bile emanetlerinize de ihanet etmeyin."]
    ],
    boyutlar: [
      { baslik: "Emanet nedir?", metin: "Tefsirlerde emanetin manası hakkında farklı görüşler vardır: dinî yükümlülükler (teklif), akıl, irade ve seçme özgürlüğü veya bunların hepsi. Ortak nokta şudur: Emanet, sorumlu olmayı mümkün kılan bir kapasitedir. “Zalûm ve cehûl” nitelemesi ise insanın bu kapasiteyi kötüye kullanma eğilimine işaret eder; bazı müfessirler bunu yüklenen emanetin büyüklüğüne karşı bir hayranlık ifadesi olarak da okur." },
      { baslik: "Görevin ehline verilmesi", metin: "Hz. Peygamber, kıyametin ne zaman kopacağını sorana “Emanet zayi edildiğinde kıyameti bekle” buyurdu. “Nasıl zayi edilir?” diye sorulunca “İş ehli olmayana verildiğinde” cevabını verdi (Buhârî). Nisâ 58'deki emanetleri ehline verme emri, kamu görevlerinin liyakatle dağıtılmasının temel dayanağıdır." },
      { baslik: "Münafığın alameti", metin: "“Münafığın alameti üçtür: Konuşunca yalan söyler, söz verince sözünden döner, kendisine bir şey emanet edilince hıyanet eder” (Buhârî, Müslim). Emanete riayet, imanın sosyal hayattaki en somut göstergelerinden biridir." }
    ],
    tefekkur: "Sana emanet edilenler neler: bir görev, bir sır, bir aile, bir beden? Hangisinde “ehil” olmak için kendini geliştirmen gerekiyor?",
    ilgili: ["konu:adalet", "kavram:kesb", "rehber:is"] },

  { id: "kalp", ad: "Kalp", ar: "القلب",
    ozet: "Kur'an'da kalp, yalnızca duyguların değil, anlamanın, inanmanın ve yönelmenin de merkezidir. Kalp sağlıklı da olur hasta da; yumuşak da olur katı da. Âhirette insanı kurtaracak olan şey de “selim bir kalp”tir.",
    ayetler: [
      ["Şuarâ 88-89", "يَوْمَ لَا يَنْفَعُ مَالٌ وَلَا بَنُونَ ۝ إِلَّا مَنْ أَتَى اللّٰهَ بِقَلْبٍ سَلِيمٍ", "O gün ne mal fayda verir ne de evlat. Ancak Allah'a selim bir kalple gelen kurtulur."],
      ["Ra'd 28", "أَلَا بِذِكْرِ اللّٰهِ تَطْمَئِنُّ الْقُلُوبُ", "Bilin ki kalpler ancak Allah'ı anmakla huzur bulur."],
      ["Hac 46", "فَإِنَّهَا لَا تَعْمَى الْأَبْصَارُ وَلٰكِنْ تَعْمَى الْقُلُوبُ الَّتِي فِي الصُّدُورِ", "Gerçek şu ki gözler kör olmaz; asıl göğüslerdeki kalpler kör olur."],
      ["Mutaffifîn 14", "كَلَّا ۖ بَلْ ۜ رَانَ عَلَى قُلُوبِهِمْ مَا كَانُوا يَكْسِبُونَ", "Hayır! Bilakis kazandıkları (günahlar) kalplerini paslandırmıştır."],
      ["Âl-i İmrân 8", "رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا", "Rabbimiz! Bizi doğru yola ilettikten sonra kalplerimizi kaydırma."]
    ],
    boyutlar: [
      { baslik: "Kalbin hâlleri", metin: "Kur'an kalbi birçok sıfatla anar: selîm (sağlam), münîb (Allah'a yönelen), mutmain (huzurlu), vecil (ürperen) gibi övülen hâller; marîz (hasta), kāsî (katı), mühürlenmiş (hatm, tab') ve paslanmış (rân) gibi yerilen hâller. Bu çeşitlilik, kalbin değişken bir merkez olduğunu ve sürekli bakım istediğini gösterir. Kalp kelimesinin kökü de “dönmek, değişmek” anlamındadır." },
      { baslik: "Paslanma", metin: "Hz. Peygamber, kul bir günah işlediğinde kalbine siyah bir nokta konduğunu, tevbe ederse silindiğini, devam ederse noktanın artıp kalbi kapladığını ve Mutaffifîn 14'te geçen “rân”ın bu olduğunu bildirmiştir (Tirmizî)." },
      { baslik: "Bedenin merkezi", metin: "“Bedende bir et parçası vardır; o düzelirse bütün beden düzelir, o bozulursa bütün beden bozulur. Dikkat edin, o kalptir” (Buhârî, Müslim). Bu hadis, helal-haram ve şüpheliler konusundaki bir hadisin sonunda gelir. Yani kalbin sağlığı, gündelik tercihlerle doğrudan bağlantılıdır." }
    ],
    tefekkur: "Kalbinin en çok katılaştığı ve en çok yumuşadığı anları düşün. Ra'd 28'deki zikrin, senin günlük hayatındaki karşılığı ne?",
    ilgili: ["kavram:nefs", "kavram:ihlas", "konu:takva", "konu:ilim"] }
];
