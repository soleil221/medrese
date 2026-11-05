// Hayatın içinden rehberler.
window.REHBERLER = [
  { id: "evlilik", baslik: "Evlilik", alt: "Eş seçiminden nikâha, nikâhtan aile hayatına",
    giris: "Evlilik, Kur'an'ın “sükûnet, sevgi ve rahmet” (Rûm 21) kavramlarıyla tanımladığı bir birlikteliktir. Fıkıh, bu birlikteliği hem bir akit hem de bir ibadet olarak ele alır. Mezhepler arasındaki farklar, özellikle nikâhın şartlarında belirgindir.",
    bolumler: [
      { baslik: "Eş seçimi ve görme", html: `<p>Hz. Peygamber, eş seçiminde dini ve ahlâkı esas almayı tavsiye etmiştir (Buhârî, Müslim). Kefâet, yani denklik konusundaki tartışma için <a href="#/mesele/kefaet">Nikâhta Denklik</a> meselesine bakabilirsin.</p>
        <p>Evlenmek istediği kadını görmesi tavsiye edilen Muğîre b. Şu'be'ye Hz. Peygamber “Ona bak; bu, aranızda sevgi ve uyumun devamına daha elverişlidir” buyurmuştur (Tirmizî, hasen). Fakihler bakılabilecek yerler konusunda farklı görüşler belirtmiştir: Cumhur yüz ve ellerle sınırlar, Hanbelîlerde daha geniş bir görüş de vardır.</p>` },
      { baslik: "Nikâhın şartları: mezhep farkları", html: `<ul>
          <li><b>İcap ve kabul:</b> Tarafların aynı mecliste karşılıklı rızalarını ifade etmeleri.</li>
          <li><b>Şahitler:</b> Hanefîlere göre iki erkek veya bir erkek ve iki kadın şahit yeterlidir. Şâfiî ve Hanbelîlere göre iki erkek şahit şarttır. Mâlikîlerde ise esas olan nikâhın ilan edilmesidir; şahitler akit sırasında bulunmasa da zifaftan önce bulunmalıdır.</li>
          <li><b>Velî:</b> Hanefîlere göre ergin kadının velîsiz nikâhı geçerlidir; cumhura göre velî şarttır. Ayrıntılar için <a href="#/mesele/velayet">Velî Şartı</a> meselesine bakabilirsin.</li>
          <li><b>Mehir:</b> Akdin sonucu olarak kadına ait bir haktır. Hanefîlerde en az 10 dirhem gümüş, Mâlikîlerde çeyrek dinar veya 3 dirhem gümüştür. Şâfiî ve Hanbelîlerde ise alt sınır yoktur, değeri olan her şey mehir olabilir.</li>
        </ul>` },
      { baslik: "Resmî nikâh ve dinî nikâh", html: `<p>Türkiye'de nikâhın hukukî sonuçları resmî nikâha bağlıdır. 2017'den bu yana il ve ilçe müftülükleri de resmî nikâh kıyabilmektedir. <b>Diyanet</b>, kadının ve çocukların haklarının korunması için resmî nikâh yapılmadan dinî nikâh kıyılmamasını tavsiye eder. Fıkhî açıdan, şartları taşıyan resmî nikâh aynı zamanda dinen de geçerli bir nikâhtır; ayrıca dinî nikâh kıyılması ise sünnete uygun bir güzelliktir.</p>` },
      { baslik: "Düğün ve velîme", html: `<p>Hz. Peygamber, Abdurrahman b. Avf'a “Bir koyunla da olsa düğün yemeği ver” buyurmuştur (Buhârî, Müslim). Velîme davetine icabet cumhura göre vâcib veya sünnet-i müekkededir. Hz. Peygamber, yalnızca zenginlerin çağrılıp fakirlerin dışarıda bırakıldığı düğün yemeğini “yemeklerin en kötüsü” olarak nitelemiştir (Buhârî, Müslim). İsraf ve gösteriş, düğünün sünnet olan ruhuyla bağdaşmaz.</p>` },
      { baslik: "Aile hayatında haklar", html: `<p>“Onlarla iyi geçinin” (Nisâ 19). “Sizin en hayırlınız ailesine en hayırlı olanınızdır; ben de aileme en hayırlı olanınızım” (Tirmizî, hasen sahih). Nafakanın ölçüsü ve sınırları için <a href="#/mesele/nafaka">Eşin Nafakası</a> meselesine bakabilirsin. Boşanma ise “helallerin Allah'a en sevimsiz olanı” olarak bilinse de bu söz zayıftır. Kur'an, boşanmayı son çare olarak görür ve öncesinde hakem yolunu gösterir (Nisâ 35).</p>` }
    ],
    dualar: [
      ["بَارَكَ اللّٰهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ", "Allah sana bereket versin, üzerine bereket indirsin ve sizi hayırda bir araya getirsin. (Evlenene tebrik)", "Ebû Dâvûd, Tirmizî (hasen sahih)"],
      ["رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا", "Rabbimiz! Bize eşlerimizden ve nesillerimizden göz aydınlığı olacak (kimseler) bağışla ve bizi takva sahiplerine önder kıl.", "Furkān 74"]
    ],
    ilgili: ["mesele:velayet", "mesele:kefaet", "mesele:nafaka", "mesele:uctalak", "konu:rahmet"] },

  { id: "dogum", baslik: "Doğum ve Çocuk", alt: "Hamilelikten akîkaya, isimden sünnete",
    giris: "Çocuk, Kur'an'da hem bir nimet hem de bir imtihan (fitne) olarak anılır. Doğumla ilgili sünnetlerin bir kısmı sahih hadislerle sabittir. Bazılarının dayanağı ise zayıftır, ancak âlimler bunlarla amel etmeyi uygun görmüştür. Bu ayrımı bilmek, uygulamaları doğru yerine koymaya yardım eder.",
    bolumler: [
      { baslik: "Hamilelik ve oruç", html: `<p>Hamile veya emziren kadın, kendisine veya çocuğuna zarar gelmesinden korkarsa oruç tutmayabilir. Sonradan kaza etmesi gerekir. <b>Hanefîlere göre</b> yalnızca kaza gerekir. <b>Şâfiî ve Hanbelîlere göre</b> ise yalnızca çocuğa zarar gelmesinden korkarak tutmamışsa, kazanın yanında her gün için fidye de gerekir. İbn Abbâs ve İbn Ömer'den, yalnızca fidye verileceği görüşü de nakledilmiştir.</p>` },
      { baslik: "Doğumda yapılanlar", html: `<ul>
          <li><b>Ezan ve kamet:</b> Hz. Peygamber'in, torunu Hasan doğduğunda kulağına ezan okuduğu rivayet edilir (Ebû Dâvûd, Tirmizî). Tirmizî bu rivayeti “hasen sahih” saymıştır, ancak senedindeki Âsım b. Ubeydullah zayıftır. Âlimlerin çoğu bu uygulamayı müstehab kabul eder. Sağ kulağa ezan, sol kulağa kamet okunması ise daha zayıf bir rivayete dayanır.</li>
          <li><b>Tahnîk:</b> Hz. Peygamber, yeni doğan çocukların damağına çiğnediği bir hurmayı sürer ve onlara dua ederdi (Buhârî, Müslim).</li>
          <li><b>İsim:</b> “Allah katında en sevimli isimleriniz Abdullah ve Abdurrahman'dır” (Müslim). Hz. Peygamber, anlamı kötü olan isimleri değiştirirdi. İsim, çocuğun ilk hakkıdır.</li>
        </ul>` },
      { baslik: "Akîka", html: `<p>Doğumun yedinci günü, çocuk için kesilen kurbandır: erkek çocuk için iki, kız çocuk için bir koyun (Ebû Dâvûd, Tirmizî, sahih). Hükmü konusunda farklı görüşler vardır: <b>Cumhura göre</b> sünnet-i müekkededir. <b>Hanefîlerde</b> ise mubah veya müstehab (tatavvu) kabul edilir; çünkü kurban ibadetiyle neshedildiği görüşü vardır. Hasan-ı Basrî ve Zâhirîler ise vâcib saymıştır. Çocuğun saçının tıraş edilip ağırlığınca gümüş sadaka verilmesi de nakledilmiştir (Tirmizî).</p>` },
      { baslik: "Sünnet (hitan)", html: `<p>Hanefî ve Mâlikîlere göre erkek çocuklar için sünnettir. Şâfiî ve Hanbelîlere göre ise vâcibtir. Hz. İbrâhim'in sünnetidir (Buhârî, Müslim). Belirli bir yaş sınırı yoktur; âlimler, çocuğun sağlığına uygun ve erginlikten önce yapılmasını tavsiye etmiştir.</p>` },
      { baslik: "Lohusalık", html: `<p>Lohusalığın (nifas) en uzun süresi Hanefî ve Hanbelîlere göre 40 gün, Şâfiî ve Mâlikîlere göre 60 gündür. En kısa süresinin bir sınırı yoktur; kan kesildiği anda gusledip namaza başlanır.</p>` }
    ],
    dualar: [
      ["رَبِّ اجْعَلْنِي مُقِيمَ الصَّلَاةِ وَمِنْ ذُرِّيَّتِي ۚ رَبَّنَا وَتَقَبَّلْ دُعَاءِ", "Rabbim! Beni ve neslimden gelecekleri namazı devamlı kılanlardan eyle. Rabbimiz! Duamı kabul et.", "İbrâhîm 40"],
      ["أُعِيذُكُمَا بِكَلِمَاتِ اللّٰهِ التَّامَّةِ مِنْ كُلِّ شَيْطَانٍ وَهَامَّةٍ وَمِنْ كُلِّ عَيْنٍ لَامَّةٍ", "Sizi her türlü şeytandan, zararlı hayvandan ve kem gözden Allah'ın eksiksiz kelimelerine sığındırırım. (Hz. Peygamber'in Hasan ve Hüseyin için okuduğu dua)", "Buhârî"]
    ],
    ilgili: ["mesele:kurban", "rehber:evlilik", "konu:emanet"] },

  { id: "hastalik", baslik: "Hastalık", alt: "Sabır, tedavi, ibadette ruhsatlar ve ziyaret",
    giris: "Hastalık, müminin hayatında hem bir imtihan hem de bir arınma vesilesidir. Fıkıh, hastanın ibadetlerini gücüne göre kolaylaştırır. Ahlâk ise hem hastaya sabrı ve ümidi, hem de çevresine ziyaret ve teselliyi öğretir.",
    bolumler: [
      { baslik: "Hastalığın anlamı", html: `<p>“Müslümana isabet eden hiçbir yorgunluk, hastalık, keder, hüzün, eziyet ve gam yoktur ki, hatta ayağına batan bir diken bile, Allah onu günahlarına kefaret kılmasın” (Buhârî, Müslim). Hastalık, ceza değil arınmadır. Ancak bu, tedaviyi ihmal etmek anlamına gelmez: “Tedavi olun” (Ebû Dâvûd, Tirmizî). Tedavinin hükmü ve hayatın sonundaki kararlar için <a href="#/mesele/otanazi">Ötanazi ve Hayatın Sonunda Tedavi</a> meselesine bakabilirsin.</p>` },
      { baslik: "Namazda ruhsatlar", html: `<p>“Ayakta kıl; gücün yetmezse oturarak, onu da yapamazsan yanın üzere kıl” (Buhârî). Hasta, rükû ve secdeyi başıyla işaret ederek (îmâ) yapabilir.</p>
        <p>Başıyla da işaret edemeyecek durumdaki hastanın namazı konusunda mezhepler ayrılır. <b>Hanefîlere göre</b> namaz ertelenir. Bu durum beş vakitten fazla sürerse o namazlar düşer, daha azsa kaza edilir. <b>Şâfiî ve Hanbelîlere göre</b> ise göz ve kalple namaz kılmaya devam edilir; akıl yerinde olduğu sürece namaz düşmez.</p>` },
      { baslik: "Temizlik ve oruç", html: `<p>Su kullanmanın hastalığı artıracağından veya iyileşmeyi geciktireceğinden korkan kişi teyemmüm eder. Yara veya alçı üzerindeki sargıya mesh edilir (cebîre).</p>
        <p>Hasta, orucu daha sonra kaza eder (Bakara 184). İyileşme ümidi olmayan kronik hasta ve ileri yaştaki kişi ise her gün için bir fidye verir. Fidye, Hanefîlerde fitre miktarı kadardır.</p>` },
      { baslik: "Hasta ziyareti", html: `<p>“Hasta ziyaret eden, dönünceye kadar cennet bahçesindedir” (Müslim). Ziyaretin âdabı: kısa tutmak, hastayı yormamak, ona ümit vermek ve dua etmek. Hz. Peygamber, ziyaret ettiği hastaya “Geçmiş olsun; inşallah bu bir arınmadır” derdi (Buhârî). Hizmetini gören Yahudi bir genci de hastalığında ziyaret etmiştir (Buhârî).</p>` },
      { baslik: "Hazırlık", html: `<p>Ağır bir hastalıkta kişinin, borçlarını ve emanetlerini yazması, vasiyetini düzenlemesi ve kul haklarından helallik istemesi tavsiye edilir. “Vasiyet edecek bir şeyi olan Müslümanın, vasiyeti yanında yazılı olmadan iki gece geçirmesi doğru değildir” (Buhârî, Müslim). Malın üçte birinden fazlası vasiyet edilemez; mirasçılara da vasiyet edilemez.</p>` }
    ],
    dualar: [
      ["لَا بَأْسَ طَهُورٌ إِنْ شَاءَ اللّٰهُ", "Geçmiş olsun; inşallah bu bir arınmadır.", "Buhârî"],
      ["أَسْأَلُ اللّٰهَ الْعَظِيمَ رَبَّ الْعَرْشِ الْعَظِيمِ أَنْ يَشْفِيَكَ", "Büyük arşın Rabbi olan yüce Allah'tan sana şifa vermesini dilerim. (Yedi kez)", "Ebû Dâvûd, Tirmizî (hasen)"],
      ["أَذْهِبِ الْبَأْسَ رَبَّ النَّاسِ، اشْفِ وَأَنْتَ الشَّافِي، لَا شِفَاءَ إِلَّا شِفَاؤُكَ، شِفَاءً لَا يُغَادِرُ سَقَمًا", "Ey insanların Rabbi! Sıkıntıyı gider. Şifa ver, şifa veren sensin. Senin şifandan başka şifa yoktur. Hiçbir hastalık bırakmayan bir şifa ver.", "Buhârî, Müslim"],
      ["أَعُوذُ بِاللّٰهِ وَقُدْرَتِهِ مِنْ شَرِّ مَا أَجِدُ وَأُحَاذِرُ", "Hissettiğim ve endişe ettiğim şeyin şerrinden Allah'a ve O'nun kudretine sığınırım. (Ağrıyan yere el konarak, önce üç kez besmele, sonra yedi kez)", "Müslim"],
      ["أَنِّي مَسَّنِيَ الضُّرُّ وَأَنْتَ أَرْحَمُ الرَّاحِمِينَ", "Bana dert dokundu. Sen ise merhametlilerin en merhametlisisin. (Hz. Eyyûb'un duası)", "Enbiyâ 83"]
    ],
    ilgili: ["mesele:otanazi", "mesele:organ", "konu:sabir", "konu:tevekkul"] },

  { id: "yolculuk", baslik: "Yolculuk", alt: "Seferîlik, kısaltma, birleştirme ve yol adabı",
    giris: "Kur'an ve sünnet, yolculuğu meşakkat sebebiyle ruhsatların uygulandığı bir hâl olarak tanımlar. Mezhepler, yolculuğun mesafesi, süresi ve ruhsatların niteliği konusunda farklı ölçüler koymuştur. Bu farklar, aynı yolculukta bir mezhebe göre seferî, diğerine göre mukim olunabileceği anlamına gelir.",
    bolumler: [
      { baslik: "Seferîlik mesafesi", html: `<ul>
          <li><b>Hanefî:</b> Orta hızla üç günlük yol. Diyanet bunu günümüz ölçüsüyle yaklaşık 90 km olarak kabul eder.</li>
          <li><b>Mâlikî, Şâfiî, Hanbelî:</b> Dört berîd (on altı fersah), yaklaşık 80-90 km.</li>
          <li><b>İbn Teymiyye ve bazı âlimler:</b> Belirli bir mesafe yoktur; örfte yolculuk sayılan her şey yolculuktur.</li>
        </ul>` },
      { baslik: "Namazı kısaltmak", html: `<p><b>Hanefîlere göre</b> kısaltma (kasr) bir azîmettir: Yolcu dört rekâtlı farzları iki kılmakla yükümlüdür. Bilerek dört kılan kişi, ilk oturuşta oturmuşsa farzı yerine getirmiş, ancak sünneti terk ettiği için kerahet işlemiş olur. <b>Cumhura göre</b> ise kısaltma bir ruhsattır. Tam kılmak caizdir, ancak Şâfiî ve Hanbelîlere göre kısaltmak daha faziletlidir. Hz. Âişe'nin yolculukta tam kıldığı da nakledilir.</p>` },
      { baslik: "İkamet süresi", html: `<p>Bir yerde kalmaya niyet eden yolcunun ne zaman mukim sayılacağı da farklıdır: Hanefîlerde 15 gün, Mâlikî ve Şâfiîlerde 4 gün (giriş ve çıkış günleri hariç), Hanbelîlerde ise 4 günden fazla, yani 21 vakitten fazla namaz. Ne zaman döneceğini bilmeden bekleyen yolcu, süre uzasa da seferîdir.</p>` },
      { baslik: "Birleştirme, oruç ve mesh", html: `<p>Namazların cem edilmesi (birleştirilmesi) Hanefîlerde yalnızca Arafat ve Müzdelife'de caizdir. Diğer mezheplerde ise yolculukta da caizdir. Ayrıntılar için <a href="#/mesele/cem">Namazların Cem Edilmesi</a> meselesine bakabilirsin.</p>
        <p>Yolcu oruç tutmayabilir (Bakara 184). Hanefî ve Şâfiîlere göre zarar görmeyecekse tutmak daha faziletlidir; Hanbelîlere göre ise tutmamak efdaldir. Mestler üzerine mesh süresi yolcu için üç gün üç gecedir. Cuma namazı yolcuya farz değildir.</p>` },
      { baslik: "Yol âdabı", html: `<p>Yola çıkmadan istihâre yapmak, aileyle vedalaşıp helalleşmek, yolda bir kişiyi emir seçmek (“Üç kişi yolculuğa çıkarsa birini emir yapsın”, Ebû Dâvûd) ve yolculuğu bitirince ailenin yanına hemen dönmek sünnettir (Buhârî, Müslim). Kadının mahremsiz yolculuğu konusunda, güvenli ortamda ve güvenilir bir toplulukla yapılan yolculuğu caiz gören klasik görüşler (Şâfiîlerde bir görüş) ve bunları esas alan çağdaş değerlendirmeler bulunmaktadır.</p>` }
    ],
    dualar: [
      ["سُبْحَانَ الَّذِي سَخَّرَ لَنَا هٰذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ ۝ وَإِنَّا إِلَى رَبِّنَا لَمُنْقَلِبُونَ", "Bunu bizim hizmetimize veren Allah'ı tesbih ederiz. Yoksa biz buna güç yetiremezdik. Şüphesiz biz Rabbimize döneceğiz. (Binince)", "Zuhruf 13-14; Müslim"],
      ["اللّٰهُمَّ إِنَّا نَسْأَلُكَ فِي سَفَرِنَا هٰذَا الْبِرَّ وَالتَّقْوَى، وَمِنَ الْعَمَلِ مَا تَرْضَى", "Allah'ım! Bu yolculuğumuzda senden iyilik ve takva, razı olacağın ameller dileriz.", "Müslim"],
      ["أَعُوذُ بِكَلِمَاتِ اللّٰهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ", "Allah'ın yarattıklarının şerrinden, O'nun eksiksiz kelimelerine sığınırım. (Bir yerde konaklarken)", "Müslim"],
      ["آيِبُونَ تَائِبُونَ عَابِدُونَ لِرَبِّنَا حَامِدُونَ", "Dönüyoruz, tevbe ediyoruz, ibadet ediyoruz, Rabbimize hamd ediyoruz. (Dönüşte)", "Buhârî, Müslim"]
    ],
    ilgili: ["mesele:cem", "kavram:ruhsat", "mesele:corap"] },

  { id: "is", baslik: "İş ve Ticaret Hayatı", alt: "Helal kazanç, alışveriş ahlâkı ve kul hakkı",
    giris: "İslâm, kazanmayı ibadetin bir parçası, haksız kazancı ise kul hakkının en ağırlarından biri olarak görür. Fıkhın muâmelât bölümü bu alanı düzenler: Rıza, şeffaflık, belirsizliğin (garar) ve faizin (ribâ) yasaklığı bu düzenlemenin temel ilkeleridir.",
    bolumler: [
      { baslik: "Alışverişte doğruluk", html: `<p>“Alıcı ile satıcı ayrılmadıkça muhayyerdir. Doğru söyler ve (kusurları) açıklarlarsa alışverişleri bereketli olur; gizler ve yalan söylerlerse bereketi kaybolur” (Buhârî, Müslim). Hz. Peygamber, ıslak buğdayı alttan gizleyen satıcıya “Bizi aldatan bizden değildir” buyurmuştur (Müslim). Ayıbı gizlemek, ölçü ve tartıda hile yapmak (Mutaffifîn 1-3) ve yalan yeminle mal satmak (Müslim) haramdır.</p>` },
      { baslik: "Yasaklanan işlemler", html: `<ul>
          <li><b>Ribâ:</b> Ayrıntılar için <a href="#/mesele/faiz">Ribâ ve Banka Faizi</a> meselesine bakabilirsin.</li>
          <li><b>Garar:</b> Konusu veya bedeli belirsiz olan satış. Bu yasağın çağdaş uygulamaları için <a href="#/mesele/sigorta">Sigorta</a> ve <a href="#/mesele/kripto">Kripto Paralar</a> meselelerine bakabilirsin.</li>
          <li><b>İhtikâr (karaborsacılık):</b> “İhtikâr ancak günahkârın işidir” (Müslim). Zaruri ihtiyaç maddelerini fiyatı yükselsin diye stoklamak haramdır.</li>
          <li><b>Rüşvet:</b> “Rüşvet verene de alana da Allah lanet etsin” (Ebû Dâvûd, Tirmizî, hasen sahih).</li>
        </ul>` },
      { baslik: "İşçi ve işveren", html: `<p>“İşçiye ücretini, teri kurumadan verin” (İbn Mâce). Bu hadisin senedi zayıftır, ancak başka yollarla desteklendiği için hasen kabul edilmiştir. Kudsî hadiste Allah, “bir işçi tutup ondan işini tam alan, fakat ücretini vermeyen” kimseye kıyamet günü hasım olacağını bildirir (Buhârî). Hz. Peygamber, hizmetçilere ve çalışanlara “Onları güçlerinin yetmeyeceği işlerle yükümlü tutmayın” buyurmuştur (Buhârî, Müslim).</p>` },
      { baslik: "Ortaklık ve faizsiz finans", html: `<p>Klasik fıkıhta sermaye-emek ortaklığı (mudârebe) ve sermaye ortaklığı (şirket, müşâreke), faiz yerine kâr ve zararın paylaşıldığı modellerdir. Çağdaş katılım bankacılığı bu modellere ve vadeli satışa (murâbaha) dayanır. Bazı ürünlerin, faize ulaşmak için şekilce meşru yollar kullanması ise <a href="#/kavram/hile">hiyel</a> tartışmasının bir parçası olarak eleştirilmektedir.</p>` },
      { baslik: "İşin hakkını vermek", html: `<p>“Allah, sizden biri bir iş yaptığında onu sağlam ve güzel yapmasını sever” (Beyhakī, Taberânî; hasen kabul edilmiştir). İş ahlâkı, yalnızca haramdan kaçınmak değil, ihsan seviyesinde çalışmaktır. Kamu görevlerinde liyakat ise bir emanet meselesidir: <a href="#/konu/emanet">Emanet ve Halifelik</a>.</p>` }
    ],
    dualar: [
      ["اللّٰهُمَّ اكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ", "Allah'ım! Helalinle beni haramından koru, lütfunla da beni senden başkasına muhtaç etme.", "Tirmizî (hasen)"],
      ["اللّٰهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا وَرِزْقًا طَيِّبًا وَعَمَلًا مُتَقَبَّلًا", "Allah'ım! Senden faydalı ilim, temiz rızık ve kabul edilmiş amel isterim. (Sabah namazından sonra)", "İbn Mâce, Ahmed"]
    ],
    ilgili: ["mesele:faiz", "mesele:sigorta", "mesele:kripto", "konu:rizik", "konu:emanet", "konu:adalet"] },

  { id: "borc", baslik: "Borç", alt: "Borç vermek, almak, yazmak ve ödemek",
    giris: "Kur'an'ın en uzun âyeti (Bakara 282) borcun yazılmasıyla ilgilidir. Borç, bir yandan bir yardımlaşma ve sevap kapısı, öte yandan ödenmezse ölümden sonra bile peşi bırakılmayan bir yüktür.",
    bolumler: [
      { baslik: "Yazmak ve şahit tutmak", html: `<p>“Ey iman edenler! Belirli bir süre için borçlandığınızda onu yazın” (Bakara 282). Bu emrin hükmü tartışmalıdır: <b>Cumhura göre</b> mendubtur; çünkü bir sonraki âyet “Birbirinize güvenirseniz…” diyerek güveni yeterli sayar. <b>Taberî ve İbn Hazm</b> gibi âlimlere göre ise vâcibtir. Her iki görüşte de yazmanın, ileride çıkabilecek anlaşmazlıkları önlediği ve tarafları koruduğu kabul edilir.</p>` },
      { baslik: "Borç vermenin fazileti", html: `<p>Faizsiz borç vermek (karz-ı hasen) Kur'an'da Allah'a güzel bir borç vermek olarak anılır (Hadîd 11). “Darda olana, durumu düzelinceye kadar süre verin. Bağışlamanız ise sizin için daha hayırlıdır” (Bakara 280).</p>
        <p>Borca bir fazlalık şart koşmak ribâdır. “Menfaat getiren her borç ribâdır” sözü hadis olarak zayıftır, ancak âlimler bunun manası üzerinde ittifak etmiştir. Öte yandan, şart koşulmadan borcu fazlasıyla ödemek sünnettir: “Sizin en hayırlınız, borcunu en güzel şekilde ödeyeninizdir” (Buhârî, Müslim).</p>` },
      { baslik: "Borcun ağırlığı", html: `<p>“Şehidin borç dışındaki bütün günahları bağışlanır” (Müslim). Hz. Peygamber, başlangıçta borçlu ölenlerin cenaze namazını kıldırmaz, “Arkadaşınızın namazını kılın” derdi. Fetihlerle devletin imkânları genişleyince “Kim bir borç bırakırsa onu ödemek bana düşer” buyurdu (Buhârî, Müslim). Bu uygulama, âlimlerce devletin, ödeme gücü olmayan borçluların borçlarını üstlenme görevine delil gösterilmiştir.</p>
        <p>“Zenginin borcunu geciktirmesi zulümdür” (Buhârî, Müslim).</p>` },
      { baslik: "Paranın değer kaybı", html: `<p>Paranın değeri borç süresince ciddi şekilde düşerse alacaklı ne alır? Hanefîlerde bu, bakır paralar (fulûs) için tartışılmıştır: <b>Ebû Hanîfe'ye göre</b> borçlu aynı sayıyı öder. <b>Ebû Yûsuf'a göre</b> ise borçlanma günündeki kıymeti öder ve fetva bu görüştedir. <a href="#/alim/ibnabidin">İbn Âbidîn</a> bu konuda ayrı bir risale yazmıştır. Yüksek enflasyon dönemlerinde günümüz fakihlerinin çoğu, borcun altın veya istikrarlı bir döviz cinsinden yapılmasını tavsiye eder.</p>` }
    ],
    dualar: [
      ["اللّٰهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَالْعَجْزِ وَالْكَسَلِ، وَالْبُخْلِ وَالْجُبْنِ، وَضَلَعِ الدَّيْنِ وَغَلَبَةِ الرِّجَالِ", "Allah'ım! Kaygıdan ve hüzünden, acizlikten ve tembellikten, cimrilikten ve korkaklıktan, borcun ağırlığından ve insanların baskısından sana sığınırım.", "Buhârî"],
      ["اللّٰهُمَّ اكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ", "Allah'ım! Helalinle beni haramından koru, lütfunla da beni senden başkasına muhtaç etme. (Hz. Ali, borcunu ödeyemeyen birine bu duayı öğretmiştir.)", "Tirmizî (hasen)"]
    ],
    ilgili: ["mesele:faiz", "konu:rizik", "rehber:vefat", "alim:ebuyusuf"] },

  { id: "vefat", baslik: "Vefat ve Yas", alt: "Son anlardan defne, tâziyeden mirasa",
    giris: "Ölüm, Kur'an'da bir son değil, bir dönüş olarak anılır: “Biz Allah'a aitiz ve O'na döneceğiz.” Fıkıh ölüye karşı görevleri farz-ı kifâye olarak düzenler. Sünnet ise yasın ölçüsünü öğretir: Gözyaşı ve hüzün meşrudur, isyan ve feryat ise değildir.",
    bolumler: [
      { baslik: "Son anlar", html: `<p>“Ölmek üzere olanlarınıza ‘lâ ilâhe illallâh’ı telkin edin” (Müslim). Telkin, hastaya söyletmek için ısrar etmeden, yanında kelime-i tevhidi söyleyerek yapılır. “Hiçbiriniz Allah hakkında güzel zan beslemedikçe ölmesin” (Müslim). Bu yüzden ölüm döşeğindeki kişiye ümit telkin edilir. Yâsîn okunmasına dair rivayet (Ebû Dâvûd) zayıftır, ancak âlimlerin çoğu bunu uygun görmüştür.</p>` },
      { baslik: "Cenaze işlemleri", html: `<p>Cenazenin yıkanması, kefenlenmesi, namazının kılınması ve defnedilmesi farz-ı kifâyedir. Defin konusunda acele etmek sünnettir (Buhârî, Müslim).</p>
        <p><b>Gıyabî cenaze namazı:</b> Hanefî ve Mâlikîlere göre caiz değildir. Şâfiî ve Hanbelîlere göre ise caizdir. Delil olarak Hz. Peygamber'in Necâşî için kıldığı gıyabî namaz gösterilir (Buhârî, Müslim). Hanefîler bunu Necâşî'ye özel bir durum olarak yorumlar.</p>
        <p><b>Defin sonrası telkin:</b> Şâfiîler ve bazı Hanbelîler müstehab görür. Hanefîlerde ise farklı görüşler vardır. Dayanağı zayıf bir rivayettir (Taberânî). Hz. Peygamber'in defin sonrasında söylediği ise sabittir: “Kardeşiniz için istiğfar edin ve sebat dileyin; çünkü o şu an sorgulanıyor” (Ebû Dâvûd).</p>` },
      { baslik: "Yas ve tâziye", html: `<p>Oğlu İbrâhim vefat ettiğinde Hz. Peygamber ağladı ve şöyle dedi: “Göz yaşarır, kalp hüzünlenir; ama Rabbimizin razı olmayacağı bir şey söylemeyiz” (Buhârî). Yüksek sesle ağıt yakmak (nevha), üstü başı yırtmak ve yüze vurmak ise yasaklanmıştır (Buhârî, Müslim).</p>
        <p>Yas (ihdâd) süresi yakınlar için üç gündür. Kocası vefat eden kadın ise dört ay on gün iddet bekler (Bakara 234). Tâziye ziyareti de üç gün içinde yapılır. Cenaze evine yemek götürmek sünnettir: “Ca'fer'in ailesine yemek yapın; çünkü onları meşgul eden bir şey başlarına geldi” (Ebû Dâvûd, Tirmizî, hasen).</p>` },
      { baslik: "Ölüye fayda veren ameller", html: `<p>“İnsan ölünce ameli kesilir; ancak üç şey müstesna: sadaka-i câriye, faydalanılan ilim ve kendisine dua eden salih evlat” (Müslim). Ölü adına sadaka vermek, borcunu ödemek ve hac yapmak sahih hadislerle sabittir.</p>
        <p>Kur'an okuyup sevabını bağışlamanın ölüye ulaşıp ulaşmadığı tartışmalıdır. <b>Hanefî ve Hanbelîlere göre</b> ulaşır. <b>Şâfiîlerin meşhur görüşüne göre</b> ise ulaşmaz; çünkü “İnsan için ancak çalıştığının karşılığı vardır” (Necm 39). Müteahhir Şâfiîler, okuduktan sonra sevabın ulaşması için dua edilmesi durumunda bunun faydalı olacağını kabul eder.</p>` },
      { baslik: "Miras ve vasiyet", html: `<p>Terekeden önce cenaze masrafları, sonra borçlar ödenir, ardından malın üçte birini geçmeyen vasiyet yerine getirilir, kalan da mirasçılara paylaştırılır (Nisâ 11-12). “Mirasçıya vasiyet olmaz” (Ebû Dâvûd, Tirmizî, hasen sahih). Türkiye'de miras hukuku Medenî Kanun'a göre işler; Medenî Kanun'un payları farklıdır. Bu yüzden İslâm miras hukukuna göre paylaşım yapmak isteyen aileler, mirasçıların rızasıyla bunu yapabilir.</p>` }
    ],
    dualar: [
      ["إِنَّا لِلّٰهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ، اللّٰهُمَّ أْجُرْنِي فِي مُصِيبَتِي وَأَخْلِفْ لِي خَيْرًا مِنْهَا", "Biz Allah'a aitiz ve O'na döneceğiz. Allah'ım! Musibetimde bana ecir ver ve bana ondan daha hayırlısını nasip et.", "Müslim"],
      ["إِنَّ لِلّٰهِ مَا أَخَذَ وَلَهُ مَا أَعْطَى، وَكُلُّ شَيْءٍ عِنْدَهُ بِأَجَلٍ مُسَمًّى، فَلْتَصْبِرْ وَلْتَحْتَسِبْ", "Alan da Allah'tır, veren de. O'nun katında her şeyin belli bir süresi vardır. Sabret ve ecrini Allah'tan bekle. (Tâziye)", "Buhârî, Müslim"],
      ["اللّٰهُمَّ اغْفِرْ لَهُ وَارْحَمْهُ وَعَافِهِ وَاعْفُ عَنْهُ", "Allah'ım! Onu bağışla, ona merhamet et, ona afiyet ver ve onu affet. (Cenaze duası)", "Müslim"]
    ],
    ilgili: ["mesele:kabir", "konu:ahiret", "konu:sabir", "konu:tevbe", "rehber:hastalik", "rehber:borc"] }
];
