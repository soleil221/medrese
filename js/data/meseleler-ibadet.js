// Meseleler — giriş yazısı ve ibadet meseleleri.
window.MESELELER = window.MESELELER || [];

window.IHTILAF = {
  baslik: "İhtilaf Neden Var?",
  html: `
    <p class="lead">Aynı Kur'an'a ve aynı Peygamber'e bağlı, takvası ve ilmi tartışılmaz âlimler nasıl olur da aynı meselede farklı sonuçlara varır? Bu soruya verilen cevap, bütün meseleleri okumanın anahtarıdır.</p>
    <p>Klasik dönemde bu soruyu en sistematik biçimde soranlar <a href="#/alim/ibnrusd">İbn Rüşd</a> (Bidâyetü'l-müctehid'in girişi), <a href="#/alim/ibnteymiyye">İbn Teymiyye</a> (Ref'ü'l-melâm ani'l-eimmeti'l-a'lâm) ve <a href="#/alim/dihlevi">Şah Veliyyullah ed-Dihlevî</a> (el-İnsâf fî beyâni sebebi'l-ihtilâf) olmuştur. Onların tespitleri birkaç ana başlıkta toplanabilir.</p>

    <h3>1. Lafzın birden fazla manaya ihtimali</h3>
    <p>Arapça bir kelime birden çok anlama gelebilir. Kur'an'daki <span lang=ar>قُرُوءٌ</span> (Bakara 228) hem “hayız” hem “temizlik dönemi” demektir: Hanefî ve Hanbelîler hayız, Mâlikî ve Şâfiîler temizlik anlamını tercih etmiş; boşanmış kadının iddeti buna göre değişmiştir. <span lang=ar>أَوْ لَامَسْتُمُ النِّسَاءَ</span> ifadesindeki “dokunma” da cinsel ilişki ve el ile temas arasında tartışılmış; abdesti bozan şeylerin listesi buna göre farklılaşmıştır.</p>

    <h3>2. Hadisin ulaşması veya ulaşmaması</h3>
    <p>İlk asırlarda hadisler henüz kitaplarda toplanmamıştı. Bir âlim kendisine ulaşmayan bir hadise göre değil, bildiği delillere göre hüküm verdi. İbn Teymiyye'nin ifadesiyle, imamlardan hiçbiri sahih bir sünnete <i>bile bile</i> muhalefet etmemiştir; muhalefet görünen yerde ya hadis ona ulaşmamış ya sahih bulunmamış ya da farklı anlaşılmıştır.</p>

    <h3>3. Hadisin sıhhatinin farklı değerlendirilmesi</h3>
    <p>Bir âlimin sahih saydığı rivayeti öbürü zayıf bulabilir: Râvi hakkındaki bilgi, senedin muttasıl olup olmadığı, mürsel haberin delil olup olmadığı gibi kriterler âlimden âlime değişir. Hanefîler ve Mâlikîler güvenilir râvinin mürselini kabul eder, Şâfiî ise ancak şartlarla kabul eder.</p>

    <h3>4. Usul farkları</h3>
    <ul>
      <li><b>Âmmın delâleti:</b> Hanefîlere göre Kur'an'ın âm lafzı kesindir, âhâd haberle tahsis edilemez; Şâfiîlere göre zannîdir ve tahsis edilebilir.</li>
      <li><b>Âhâd haber ile kesin nas:</b> Hanefîler âhâd haberi, Kur'an'ın açık bir hükmüne veya yerleşik bir ilkeye aykırı görünüyorsa tevil eder; diğerleri haberle amel etmeyi öne alır.</li>
      <li><b>Medine ameli:</b> Mâlik'e göre Medine'deki kesintisiz uygulama, tek tek rivayetlerden güçlüdür.</li>
      <li><b>Mefhûm-ı muhâlif:</b> Bir kaydın tersinden hüküm çıkarmayı Şâfiîler kabul eder, Hanefîler şer'î nasslarda kabul etmez.</li>
      <li><b>İstihsân, maslahat, örf:</b> Kıyasın ötesine geçen bu deliller mezheplerde farklı ağırlık taşır.</li>
    </ul>

    <h3>5. Çelişen delillerin uzlaştırılması</h3>
    <p>İki delil çeliştiğinde biri uzlaştırmayı (cem'), öbürü neshi, bir diğeri tercihi seçer. Aynı iki hadisten farklı sonuçların çıkması çoğu zaman bundandır.</p>

    <h3>6. Örf, zaman ve şartlar</h3>
    <p><a href="#/alim/ibnulkayyim">İbnü'l-Kayyim</a> “Fetva zamana, mekâna, hâle ve niyete göre değişir” der; <a href="#/alim/ibnabidin">İbn Âbidîn</a> örfe dayalı hükümlerin örf değişince değişeceğini söyler. Bu, nassların değil, onların uygulandığı şartların değişmesidir.</p>

    <h3>İhtilafa bakışın ölçüleri</h3>
    <ul>
      <li><b>Kesin olanla ictihadî olanı ayırmak:</b> Namazın farz oluşu tartışılmaz; namazların cem edilip edilemeyeceği ictihadîdir.</li>
      <li><b>Delille birlikte öğrenmek:</b> Bir görüşün kimin görüşü olduğu kadar, hangi delile dayandığı da önemlidir.</li>
      <li><b>Edep:</b> İmam Şâfiî'ye nispet edilen söz, bu edebi özetler: “Görüşüm doğrudur, yanlış olma ihtimali vardır; muhalifimin görüşü yanlıştır, doğru olma ihtimali vardır.”</li>
      <li><b>Taklit ve tercih:</b> Delilleri değerlendirme ehliyeti olmayanın bir mezhebe veya güvendiği bir âlime uyması meşrudur. Ruhsatları keyfî olarak toplamak (tetebbu'u'r-ruhas) ise âlimlerce kınanmıştır.</li>
    </ul>`
};

window.MESELELER.push(
  {
    id: "cem", baslik: "Namazların Cem Edilmesi", alan: "Fıkıh · İbadet",
    soru: "Yolculuk, hastalık, yağmur veya yoğun iş gibi sebeplerle iki namaz aynı vakitte (öğle ile ikindi, akşam ile yatsı) kılınabilir mi?",
    ozet: "Hanefîler cem'i yalnız hacda Arafat ve Müzdelife'de caiz görür; diğer üç mezhep yolculukta caiz görür ve özürleri farklı genişlikte sayar. İhtilafın kökü, Kur'an'daki vakit hükmünün kesinliği ile cem hadislerinin nasıl anlaşılacağıdır.",
    ayetler: [
      ["Nisâ 103", "إِنَّ الصَّلَاةَ كَانَتْ عَلَى الْمُؤْمِنِينَ كِتَابًا مَوْقُوتًا", "Şüphesiz namaz, müminlere vakitleri belirlenmiş bir farzdır."],
      ["Mâûn 4-5", "فَوَيْلٌ لِلْمُصَلِّينَ ۝ الَّذِينَ هُمْ عَنْ صَلَاتِهِمْ سَاهُونَ", "Yazıklar olsun o namaz kılanlara ki, namazlarından gafildirler."]
    ],
    hadisler: [
      ["جَمَعَ رَسُولُ اللهِ ﷺ بَيْنَ الظُّهْرِ وَالْعَصْرِ وَالْمَغْرِبِ وَالْعِشَاءِ بِالْمَدِينَةِ فِي غَيْرِ خَوْفٍ وَلَا مَطَرٍ", "Resûlullah Medine'de, korku ve yağmur olmaksızın öğle ile ikindiyi, akşam ile yatsıyı cem etti. (İbn Abbâs'a niçin diye sorulunca: “Ümmetini zora sokmamak istedi” dedi.)", "Müslim", "Sahih"],
      ["", "Muâz b. Cebel: Tebük seferinde Hz. Peygamber öğle ile ikindiyi, akşam ile yatsıyı cem ederdi.", "Müslim", "Sahih"],
      ["", "Abdullah b. Mes'ûd: Resûlullah'ın bir namazı vaktinin dışında kıldığını görmedim; ancak Müzdelife'de akşam ile yatsıyı cem etti ve o günün sabahını (alışılandan) erken kıldı.", "Buhârî, Müslim", "Sahih"]
    ],
    gorusler: [
      { ekol: "Hanefî", hukum: "Gerçek cem yalnız hacda caizdir: Arafat'ta öğle ile ikindi (takdim), Müzdelife'de akşam ile yatsı (te'hîr). Bunun dışında her namaz kendi vaktinde kılınır.",
        delil: "Nisâ 103'teki vakit hükmü kesindir ve âhâd haberle değiştirilemez. İbn Mes'ûd'un haberi de cem'in hac dışında olmadığını gösterir. Yolculuktaki cem hadisleri <b>cem-i sûrî</b> (görünüşte cem: öğleyi vaktinin sonunda, ikindiyi vaktinin başında kılmak) olarak anlaşılır.", alimler: ["ebuhanife", "serahsi", "kasani"] },
      { ekol: "Mâlikî", hukum: "Yolculukta, yağmur ve çamurda (akşam-yatsı için), hastalıkta ve Arafat ile Müzdelife'de caizdir.",
        delil: "Muâz hadisi ve Medine'de yağmurlu gecelerde akşam ile yatsının cem edildiği uygulama (Medine ameli).", alimler: ["malik", "ibnrusd"] },
      { ekol: "Şâfiî", hukum: "Uzun yolculukta takdim veya te'hîr ile cem caizdir; mescitte cemaatle kılınan namazlarda yağmur sebebiyle takdim caizdir. Hastalık için cem mezhepte zayıf görüştür; Nevevî bazı Şâfiîlerin hastalığı da özür saydığını aktarır.",
        delil: "Muâz ve İbn Abbâs hadisleri; hadisler yolculuk ve yağmur özrüne hamledilir.", alimler: ["safii", "nevevi"] },
      { ekol: "Hanbelî", hukum: "En geniş görüş: Yolculuk, hastalık, emzikli kadın, istihâzalı kadın, yağmur ve soğuk, can veya malını kaybetme korkusu gibi hâllerde caizdir.",
        delil: "İbn Abbâs hadisindeki “ümmetini zora sokmamak” gerekçesi: Meşakkat bulunan her hâl cem'e ruhsattır.", alimler: ["ahmed", "ibnkudame", "ibnteymiyye"] }
    ],
    koken: `<p>İhtilaf iki noktada düğümlenir:</p>
      <ol>
        <li><b>Kesin nas ile âhâd haber:</b> Hanefîler vakitlerin Kur'an'la ve mütevâtir uygulamayla kesin olarak belirlendiğini, cem hadislerinin ise âhâd olduğunu söyler; âhâd haber kesin bir hükmü değiştiremez. Cumhur ise sahih haberin Kur'an'ı açıkladığını, “vakitli farz” ifadesinin cem hâlindeki vakitleri de kapsadığını söyler.</li>
        <li><b>“Cem”in manası:</b> Hadislerdeki cem, gerçek cem (iki namazı birinin vaktinde kılmak) mi, yoksa görünüşte cem mi? Hanefîler ikincisini, cumhur birincisini anlar. Cumhur, Müslim'deki Muâz rivayetinde ikindinin öğle vaktinde kılındığının açıkça geçtiğini delil gösterir.</li>
      </ol>
      <p>İbn Abbâs hadisinin özrü belirtmemesi de tartışılmıştır: Kimi bunu meşakkat ilkesiyle genişletmiş (Hanbelîler), kimi hastalık veya bulut gibi bir özre hamletmiştir (Nevevî bu yorumları aktarır).</p>`,
    cagdas: `<p>Şehir hayatının çalışma düzeni, uzun vardiyalar, kuzey enlemlerinde çok kısa veya çok uzun gündüzler, uzun yolculuklar ve hastane görevleri bu meseleyi güncel kılmıştır.</p>
      <p><b>Diyanet İşleri Başkanlığı</b>, Hanefî mezhebini esas almakla birlikte, zaruret ve ciddi meşakkat durumlarında diğer mezheplerin görüşüyle amel edilerek namazların cem edilebileceğini kabul eder. <b>TDV İslâm Ansiklopedisi</b>'nin “Cem'” maddesi mezheplerin görüşlerini ayrıntılı olarak aktarır.</p>
      <p>Çağdaş âlimlerin çoğu, cem'in alışkanlık hâline getirilmemesi, ruhsatın gerçek bir ihtiyaç için kullanılması şartını vurgular.</p>`,
    durum: {
      kesin: ["Beş vakit namazın farz olduğu ve vakitlerinin bulunduğu", "Hacda Arafat ve Müzdelife'de cem'in meşruiyeti (icmâ)"],
      cogunluk: ["Yolculukta cem'in caiz olduğu (Mâlikî, Şâfiî, Hanbelî)"],
      tartismali: ["Hastalık ve iş meşakkati gibi özürlerle cem", "İbn Abbâs hadisindeki özürsüz cem'in yorumu", "Hanefî birinin zaruret anında başka mezhebe göre cem etmesi"]
    },
    alimler: ["ebuhanife", "malik", "safii", "ahmed", "ibnkudame", "nevevi", "ibnrusd"],
    kaynaklar: ["Kâsânî, Bedâiu's-sanâi', Kitâbü's-salât", "İbn Rüşd, Bidâyetü'l-müctehid, “el-Cem' beyne's-salâteyn”", "İbn Kudâme, el-Muğnî, “Fasl fi'l-cem'”", "Nevevî, el-Mecmû', Bâbü's-salâti'l-müsâfir", "TDV İslâm Ansiklopedisi, “Cem'” maddesi"],
    ilgili: ["abdest", "fatiha"]
  },
  {
    id: "abdest", baslik: "Abdesti Bozan Hâller: Dokunma, Kan ve Deve Eti", alan: "Fıkıh · İbadet",
    soru: "Kadın ile erkeğin birbirine dokunması, vücuttan kan akması ve deve eti yemek abdesti bozar mı?",
    ozet: "Abdesti bozanların çoğunda ittifak vardır; ancak bu üç meselede mezhepler belirgin biçimde ayrılır. Ayrılığın kaynağı bir kelimenin manası (لَامَسْتُمُ), hadislerin sıhhati ve bir hadisin neshedilip edilmediğidir.",
    ayetler: [
      ["Mâide 6 (benzeri Nisâ 43)", "أَوْ جَاءَ أَحَدٌ مِنْكُمْ مِنَ الْغَائِطِ أَوْ لَامَسْتُمُ النِّسَاءَ فَلَمْ تَجِدُوا مَاءً فَتَيَمَّمُوا صَعِيدًا طَيِّبًا", "...yahut biriniz ayak yolundan gelirse veya kadınlara dokunursanız ve su bulamazsanız temiz bir toprakla teyemmüm edin."]
    ],
    hadisler: [
      ["", "Hz. Âişe: Geceleyin Resûlullah'ı yatakta bulamadım, elimle aradım; elim, secdede dikili olan ayaklarının altına değdi.", "Müslim", "Sahih"],
      ["", "Hz. Âişe: Hz. Peygamber hanımlarından birini öptü, sonra abdest almadan namaza çıktı.", "Ebû Dâvûd, Tirmizî", "Sıhhati tartışmalı; Hanefîler delil kabul eder, Şâfiîler zayıf bulur"],
      ["", "Câbir b. Semüre: Bir adam “Deve etinden dolayı abdest alalım mı?” diye sordu. “Evet, deve etinden dolayı abdest al” buyurdu. “Koyun etinden dolayı?” dedi. “İstersen al, istersen alma” buyurdu.", "Müslim", "Sahih"],
      ["", "İstihâzalı kadına: “O bir damar kanıdır; her namaz için abdest al.”", "Buhârî", "Sahih"],
      ["", "Zâtürrikā' gazvesinde nöbet tutarken ok isabet eden sahâbînin, kanı akarken namazına devam ettiği rivayeti.", "Ebû Dâvûd; Buhârî ta'lîkan", "Hasen"]
    ],
    gorusler: [
      { ekol: "Hanefî", hukum: "<b>Dokunma:</b> Bozmaz. <b>Akan kan veya irin:</b> Bozar. <b>Deve eti:</b> Bozmaz.",
        delil: "Âyetteki <span lang=ar>لَامَسْتُمُ</span> kinâyedir, cinsel ilişki demektir; İbn Abbâs böyle tefsir etmiştir. Âişe hadisleri dokunmanın bozmadığını gösterir. Kan için istihâza hadisindeki “damar kanı” gerekçesi: Bedenden çıkıp akan necaset abdesti bozar.", alimler: ["ebuhanife", "kasani", "serahsi"] },
      { ekol: "Mâlikî", hukum: "<b>Dokunma:</b> Lezzet kastedilir veya duyulursa bozar. <b>Kan:</b> Bozmaz. <b>Deve eti:</b> Bozmaz.",
        delil: "Dokunmayı mutlak bırakmayıp şehvet şartına bağlamak, âyet ile Âişe hadislerini uzlaştırır. Kan konusunda sahabenin yaralıyken namaz kılması.", alimler: ["malik", "ibnrusd"] },
      { ekol: "Şâfiî", hukum: "<b>Dokunma:</b> Nikâh düşen (mahrem olmayan) bir kadının tenine perdesiz dokunmak, şehvet olmasa da bozar. <b>Kan:</b> Bozmaz. <b>Deve eti:</b> Mezhebin meşhur görüşüne göre bozmaz.",
        delil: "<span lang=ar>لَامَسْتُمُ</span> hakiki manasıyla el ile dokunmadır; İbn Mes'ûd ve İbn Ömer böyle anlamıştır. Hakikat varken mecaza gidilmez. Âişe'nin öpme hadisi zayıftır; ayağa dokunma ise perde üzerinden olmuş olabilir. Nevevî, deve eti hadisinin delil bakımından güçlü olduğunu kabul eder.", alimler: ["safii", "nevevi"] },
      { ekol: "Hanbelî", hukum: "<b>Dokunma:</b> Meşhur rivayette şehvetle olursa bozar. <b>Kan:</b> Çok miktarda akan kan bozar. <b>Deve eti:</b> Bozar.",
        delil: "Câbir b. Semüre hadisi sahih ve açıktır; koyun ile deve arasındaki ayrım, sözün lügavî abdest (el yıkamak) değil şer'î abdest olduğunu gösterir.", alimler: ["ahmed", "ibnkudame", "ibnteymiyye"] }
    ],
    koken: `<ul>
        <li><b>Dokunma:</b> Tartışma bir kelimenin hakikat-mecaz ihtimalinden doğar: <span lang=ar>لَمْس</span> el ile dokunma mı, cinsel ilişkinin kinâyesi mi? Kur'an'da aynı fiil başka yerlerde (Bakara 237: <span lang=ar>مِنْ قَبْلِ أَنْ تَمَسُّوهُنَّ</span>) ilişkiyi ifade eder. Sahabe de iki gruba ayrılmıştır. Âişe hadislerinin sıhhatini değerlendirme farkı ihtilafı derinleştirir.</li>
        <li><b>Kan:</b> Hanefîler bozucu sebebi “bedenden çıkan necaset” olarak geniş tutar ve bunu kıyasla destekler; diğerleri yalnızca iki yoldan çıkanla sınırlar ve sahabenin uygulamasını delil getirir.</li>
        <li><b>Deve eti:</b> Hadis sahihtir. Cumhur onu ya ilk dönemde verilip sonra terk edilen bir hükme (Câbir b. Abdullah'tan gelen “ateşte pişenden abdest almamak son uygulamaydı” rivayeti) ya da lügavî abdeste (el ve ağzı yıkamaya) yorumlar. Hanbelîler neshi kabul etmez; çünkü hadis deve ile koyunu ayırmıştır.</li>
      </ul>`,
    cagdas: `<p>Hac ve umre sırasında kalabalıkta kaçınılmaz temaslar, hastane ve sağlık çalışanlarının durumu, ameliyat ve tahlil sonrasında kan alınması bu meseleyi günlük hayatta sıkça gündeme getirir.</p>
      <p><b>Diyanet</b>, Hanefî görüşünü esas alır: Dokunma abdesti bozmaz, akan kan bozar. Tavafta Şâfiî bir kişinin kalabalıkta temasla karşılaşması gibi durumlar için, ihtiyaç hâlinde diğer mezhebin görüşüyle amel etme imkânına âlimler işaret etmiştir.</p>`,
    durum: {
      kesin: ["İki yoldan bir şey çıkmasının abdesti bozduğu (icmâ)", "Cünüplüğün gusül gerektirdiği"],
      cogunluk: ["Deve etinin abdesti bozmadığı (Hanefî, Mâlikî, Şâfiî)", "Kan akmasının abdesti bozmadığı (Mâlikî, Şâfiî)"],
      tartismali: ["Kadın-erkek dokunmasının hükmü", "Âişe'nin öpme hadisinin sıhhati", "Deve eti hadisinin mensuh olup olmadığı"]
    },
    alimler: ["ebuhanife", "safii", "malik", "ahmed", "nevevi", "ibnkudame"],
    kaynaklar: ["İbn Rüşd, Bidâyetü'l-müctehid, “Nevâkızu'l-vudû'”", "Nevevî, el-Mecmû', “Bâbü mâ yenkuzu'l-vudû'”", "İbn Kudâme, el-Muğnî, Kitâbü't-tahâre", "Cessâs, Ahkâmü'l-Kur'ân, Nisâ 43 tefsiri", "TDV İslâm Ansiklopedisi, “Abdest” maddesi"],
    ilgili: ["cem", "fatiha"]
  },
  {
    id: "fatiha", baslik: "İmamın Arkasında Fâtiha Okumak", alan: "Fıkıh · İbadet",
    soru: "Cemaatle kılınan namazda imama uyan kişi Fâtiha okur mu? Okuması farz mı, sünnet mi, mekruh mu?",
    ozet: "Namaz kılanların her gün karşılaştığı bir mesele. Şâfiîlere göre her namazda farzdır; Hanefîlere göre imamın kıraati cemaatin kıraatidir ve okunmaz; Mâlikî ve Hanbelîler sesli ve gizli namazı ayırır. Bir âyet ile bir hadisin genelliği karşı karşıya gelir.",
    ayetler: [
      ["A'râf 204", "وَإِذَا قُرِئَ الْقُرْآنُ فَاسْتَمِعُوا لَهُ وَأَنْصِتُوا لَعَلَّكُمْ تُرْحَمُونَ", "Kur'an okunduğu zaman onu dinleyin ve susun ki rahmete eresiniz."],
      ["Müzzemmil 20", "فَاقْرَءُوا مَا تَيَسَّرَ مِنَ الْقُرْآنِ", "Kur'an'dan kolayınıza geleni okuyun."]
    ],
    hadisler: [
      ["لَا صَلَاةَ لِمَنْ لَمْ يَقْرَأْ بِفَاتِحَةِ الْكِتَابِ", "Fâtiha'yı okumayanın namazı yoktur.", "Buhârî, Müslim", "Sahih"],
      ["مَنْ كَانَ لَهُ إِمَامٌ فَقِرَاءَةُ الْإِمَامِ لَهُ قِرَاءَةٌ", "Kimin bir imamı varsa, imamın kıraati onun kıraatidir.", "İbn Mâce, Ahmed", "Hadis âlimlerinin çoğu senedini zayıf bulur; Hanefîler farklı yollarıyla destekler"],
      ["", "“Bana Kur'an'da neden çekişiliyor?” (Sesli bir namazdan sonra, arkasından okuyanlar için) Bunun üzerine insanlar sesli namazlarda okumayı bıraktı.", "Ebû Dâvûd, Tirmizî", "Hasen; son cümlenin hadise mi râviye mi ait olduğu tartışılmıştır"],
      ["", "“Sanırım imamınızın arkasında okuyorsunuz.” “Evet.” “Fâtiha dışında okumayın; çünkü onu okumayanın namazı yoktur.”", "Ebû Dâvûd, Tirmizî", "Sıhhati tartışmalı"]
    ],
    gorusler: [
      { ekol: "Hanefî", hukum: "Cemaat, ne sesli ne gizli namazda Fâtiha okur; okuması mekruh-ı tahrîmîdir. (İmam Muhammed'den gizli namazda okumanın güzel olduğuna dair bir rivayet de vardır.)",
        delil: "A'râf 204 dinlemeyi ve susmayı emreder. “İmamın kıraati onun kıraatidir” hadisi ve birçok sahâbînin imam arkasında okumadığına dair rivayetler. Fâtiha hadisi münferit kılana veya imama yöneliktir; cemaat imamın kıraatiyle okumuş sayılır.", alimler: ["ebuhanife", "imammuhammed", "kasani"] },
      { ekol: "Mâlikî", hukum: "Sesli namazda okumaz (dinler); gizli namazda okuması müstehaptır.",
        delil: "Sesli namazda A'râf 204'ün dinleme emri, gizli namazda ise “Fâtiha'yı okumayanın namazı yoktur” hadisinin genelliği uygulanır. Böylece iki delil uzlaştırılır.", alimler: ["malik", "ibnrusd"] },
      { ekol: "Şâfiî", hukum: "Yeni (cedîd) görüşe göre her rekâtta, sesli ve gizli bütün namazlarda Fâtiha okumak farzdır; cemaat imamın Fâtiha'sından sonraki susma anında okur.",
        delil: "“Fâtiha'yı okumayanın namazı yoktur” hadisi geneldir ve imamın arkasındakini de kapsar; Ubâde hadisi bunu açıkça bildirir. Âyetteki dinleme emri, Fâtiha dışındaki kıraat içindir.", alimler: ["safii", "nevevi"] },
      { ekol: "Hanbelî", hukum: "İmamın kıraatini duyan, sesli namazda okumaz; gizli namazda ve imamın susma anlarında okuması müstehaptır. Okumak vacip değildir.",
        delil: "Mâlikîlere yakın bir uzlaştırma; ayrıca “İmamın kıraati onun kıraatidir” manasındaki rivayetler.", alimler: ["ahmed", "ibnkudame", "ibnteymiyye"] }
    ],
    koken: `<p>Mesele, <b>iki genel delilin çatışması</b>dır: A'râf 204 “Kur'an okunduğunda susun” der, hadis “Fâtiha'yı okumayanın namazı yoktur” der.</p>
      <ul>
        <li>Hanefîler âyeti esas alır: Kur'an'ın âm lafzı kesindir, âhâd haberle tahsis edilemez. Hadisi münferide hamleder.</li>
        <li>Şâfiîler hadisi esas alır: Sahih hadis âyeti tahsis eder; âyetteki susma, Fâtiha dışında olandır.</li>
        <li>Mâlikî ve Hanbelîler ikisini, sesli-gizli ayrımıyla uzlaştırır. İbn Rüşd bunu “delilleri cem etmenin en güzel yolu” olarak niteler.</li>
      </ul>
      <p>Bu mesele, <a href="#/mesele/ihtilaf">ihtilaf sebepleri</a> yazısında anlatılan “âmmın delâleti” usul farkının en tipik örneğidir.</p>`,
    cagdas: `<p>Türkiye'de cami cemaati genellikle Hanefî görüşe göre imamın arkasında okumaz. Şâfiî bölgelerde ve hac-umre gibi farklı mezheplerin bir arada namaz kıldığı ortamlarda cemaatin bir kısmının okuyup bir kısmının okumaması doğaldır; her iki tutum da güçlü delillere dayanır.</p>
      <p>Âlimler, imam arkasında kılanın kendi mezhebine göre davranmasının, diğerinin namazının sıhhatini etkilemediğini kabul eder.</p>`,
    durum: {
      kesin: ["Münferit kılanın ve imamın Fâtiha okumasının meşruiyeti", "Fâtiha'nın namazın en önemli kıraati olduğu"],
      cogunluk: ["Sesli namazda cemaatin imamı dinlemesi (Hanefî, Mâlikî, Hanbelî)"],
      tartismali: ["Cemaatin Fâtiha okumasının farz, müstehap veya mekruh oluşu", "“İmamın kıraati onun kıraatidir” hadisinin sıhhati"]
    },
    alimler: ["ebuhanife", "safii", "malik", "ahmed", "ibnrusd", "buhari"],
    kaynaklar: ["Buhârî, Cüz'ü'l-Kırâe halfe'l-imâm", "Kâsânî, Bedâiu's-sanâi'", "İbn Rüşd, Bidâyetü'l-müctehid", "Nevevî, el-Mecmû'", "İbn Kudâme, el-Muğnî", "TDV İslâm Ansiklopedisi, “Kıraat” (namazda) maddesi"],
    ilgili: ["cem", "teravih"]
  },
  {
    id: "teravih", baslik: "Teravih Namazının Rekât Sayısı", alan: "Fıkıh · İbadet",
    soru: "Teravih namazı kaç rekâttır: yirmi mi, sekiz mi, otuz altı mı? Rekât sayısı belirli midir?",
    ozet: "Dört mezhep 20 rekât üzerinde büyük ölçüde birleşir; Mâlik'ten Medine uygulaması olarak 36 rekât rivayet edilir; son dönemde bazı âlimler Hz. Âişe hadisine dayanarak 8 rekâtı savunmuştur. İbn Teymiyye ise sayının belirlenmediğini, kıyamın uzunluğuna göre değişebileceğini söyler.",
    ayetler: [
      ["Müzzemmil 2-4", "قُمِ اللَّيْلَ إِلَّا قَلِيلًا ۝ نِصْفَهُ أَوِ انْقُصْ مِنْهُ قَلِيلًا ۝ أَوْ زِدْ عَلَيْهِ وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا", "Gecenin azı hariç kalk; yarısında, ya da ondan biraz eksilt veya artır ve Kur'an'ı tane tane oku."]
    ],
    hadisler: [
      ["مَنْ قَامَ رَمَضَانَ إِيمَانًا وَاحْتِسَابًا غُفِرَ لَهُ مَا تَقَدَّمَ مِنْ ذَنْبِهِ", "Kim Ramazan gecelerini inanarak ve sevabını Allah'tan bekleyerek ihya ederse, geçmiş günahları bağışlanır.", "Buhârî, Müslim", "Sahih"],
      ["مَا كَانَ يَزِيدُ فِي رَمَضَانَ وَلَا فِي غَيْرِهِ عَلَى إِحْدَى عَشْرَةَ رَكْعَةً", "Hz. Âişe: Resûlullah Ramazan'da da başka zamanda da on bir rekâttan fazla kılmazdı.", "Buhârî, Müslim", "Sahih"],
      ["", "Hz. Ömer insanları Übey b. Kâ'b'ın imamlığında bir araya topladı ve “Bu ne güzel bid'at (yenilik)!” dedi.", "Buhârî", "Sahih"],
      ["", "Sâib b. Yezîd: Hz. Ömer döneminde Ramazan'da yirmi rekât kılarlardı.", "Beyhakî", "Sahih kabul edilmiştir"],
      ["", "Hz. Peygamber birkaç gece cemaatle kıldı, sonra farz kılınır endişesiyle cemaate çıkmadı.", "Buhârî, Müslim", "Sahih"]
    ],
    gorusler: [
      { ekol: "Hanefî", hukum: "Vitir hariç 20 rekâttır; her dört rekâtta bir dinlenilir (terviha). Cemaatle kılınması sünnet-i kifâyedir.",
        delil: "Hz. Ömer döneminde sahabenin 20 rekât üzerinde birleşmesi ve buna kimsenin itiraz etmemesi (sükûtî icmâ).", alimler: ["ebuhanife", "kasani"] },
      { ekol: "Mâlikî", hukum: "Mâlik'ten 36 rekât rivayet edilir (Medine ehlinin uygulaması); mezhepte 20 rekât da kabul edilir.",
        delil: "Medine ehli, Mekke'dekilerin her terviha arasında yaptığı tavafın sevabına ulaşmak için rekât sayısını artırmıştır; bu Medine amelidir.", alimler: ["malik"] },
      { ekol: "Şâfiî", hukum: "20 rekâttır; Medine ehlinin 36 rekâtı onlara özgü sayılır.",
        delil: "Hz. Ömer dönemindeki uygulama.", alimler: ["safii", "nevevi"] },
      { ekol: "Hanbelî", hukum: "20 rekâttır; artırmakta sakınca yoktur.",
        delil: "Sahabe uygulaması; Ahmed b. Hanbel'den sayının sınırlanmadığına dair ifadeler de nakledilir.", alimler: ["ahmed", "ibnkudame"] },
      { ekol: "İbn Teymiyye", hukum: "Sayı belirlenmemiştir: 11, 13, 20 veya 36 rekât kılınabilir. Kıyam uzunsa rekât azaltılır, kısaysa artırılır.",
        delil: "Hz. Peygamber'den belirli bir sayının emri gelmemiştir; gece namazı mutlak bir ibadettir.", alimler: ["ibnteymiyye"] },
      { ekol: "Son dönem bazı âlimler (ör. Elbânî)", hukum: "8 rekât (vitirle 11) sünnete en uygun olanıdır; fazlası terk edilmelidir.",
        delil: "Hz. Âişe hadisi; 20 rekât rivayetlerinin bir kısmının zayıf olduğu iddiası.", alimler: [] }
    ],
    koken: `<p>Temel soru, <b>Hz. Âişe hadisi</b> ile <b>sahabe uygulamasının</b> nasıl birlikte okunacağıdır:</p>
      <ul>
        <li>Âişe hadisi, Hz. Peygamber'in kendi gece namazını anlatır ve bütün yıl için geçerlidir; teravihin bir sınırını koymaz. Cumhur bunu böyle anlar.</li>
        <li>Hz. Peygamber cemaatle teravihi birkaç gece kılmış, sonra bırakmış; sayısı açıkça nakledilmemiştir. Bu yüzden Hz. Ömer döneminde sahabenin oluşturduğu uygulama belirleyici olmuştur.</li>
        <li>8 rekâtı savunanlar Âişe hadisini teravihin sınırı olarak anlar ve 20 rekât rivayetlerini tenkit eder; cumhur, sahabenin bilerek ve ittifakla yaptığı uygulamanın kendi başına delil olduğunu söyler.</li>
      </ul>`,
    cagdas: `<p><b>Diyanet</b>, Hanefî mezhebine ve sahabe uygulamasına dayanarak teravihi 20 rekât olarak kıldırır; daha az kılanın da teravih kılmış sayılacağını ve sevaba ereceğini belirtir. Mekke ve Medine'de de uzun yıllar 20 rekât kılınmıştır.</p>
      <p>Günümüzde asıl tartışmanın sayıdan çok, <b>tadil-i erkâna ve kıraatin düzgünlüğüne riayet</b> olduğunu vurgulayan âlimler çoktur: Aceleyle kılınan 20 rekât ile huşu içinde kılınan 8 rekât karşılaştırması bu bağlamda yapılır.</p>`,
    durum: {
      kesin: ["Ramazan gecelerini namazla ihya etmenin sünnet ve faziletli olduğu", "Teravihin cemaatle kılınmasının meşru olduğu"],
      cogunluk: ["Teravihin 20 rekât olduğu (dört mezhep)"],
      tartismali: ["8 rekâtla sınırlamanın gerekliliği", "Rekât sayısının belirli olup olmadığı"]
    },
    alimler: ["ebuhanife", "malik", "safii", "ahmed", "ibnteymiyye", "nevevi"],
    kaynaklar: ["Mâlik, el-Muvatta', “Kıyâmü Ramazân”", "Nevevî, el-Mecmû'", "İbn Kudâme, el-Muğnî", "İbn Teymiyye, Mecmûu'l-fetâvâ, c. 23", "TDV İslâm Ansiklopedisi, “Teravih” maddesi"],
    ilgili: ["fatiha"]
  },
  {
    id: "kurban", baslik: "Kurbanın Hükmü", alan: "Fıkıh · İbadet",
    soru: "Kurban kesmek, gücü yetene vacip midir, yoksa sünnet midir?",
    ozet: "Ebû Hanîfe'ye göre zengin olan mukîm Müslümana vaciptir; diğer üç mezhebe göre sünnet-i müekkededir. Bu, Hanefîlerin farz ile sünnet arasında ayrı bir “vacip” kategorisi tanımasının en bilinen örneklerindendir.",
    ayetler: [
      ["Kevser 2", "فَصَلِّ لِرَبِّكَ وَانْحَرْ", "Rabbin için namaz kıl ve kurban kes."],
      ["Hac 36", "وَالْبُدْنَ جَعَلْنَاهَا لَكُمْ مِنْ شَعَائِرِ اللّٰهِ", "Kurbanlık develeri size Allah'ın şiarlarından kıldık."],
      ["Hac 37", "لَنْ يَنَالَ اللّٰهَ لُحُومُهَا وَلَا دِمَاؤُهَا وَلٰكِنْ يَنَالُهُ التَّقْوَى مِنْكُمْ", "Onların ne etleri ne de kanları Allah'a ulaşır; fakat O'na sizin takvanız ulaşır."]
    ],
    hadisler: [
      ["مَنْ كَانَ لَهُ سَعَةٌ وَلَمْ يُضَحِّ فَلَا يَقْرَبَنَّ مُصَلَّانَا", "Kimin imkânı olur da kurban kesmezse, namazgâhımıza yaklaşmasın.", "İbn Mâce, Ahmed", "Merfû mu mevkûf mu olduğu tartışılmıştır"],
      ["إِذَا دَخَلَتِ الْعَشْرُ وَأَرَادَ أَحَدُكُمْ أَنْ يُضَحِّيَ فَلَا يَمَسَّ مِنْ شَعَرِهِ وَبَشَرِهِ شَيْئًا", "Zilhicce'nin ilk on günü girdiğinde, sizden biri kurban kesmek isterse saçından ve teninden bir şey almasın.", "Müslim", "Sahih"],
      ["", "Hz. Ebû Bekir ve Hz. Ömer'in, insanlar vacip zannetmesin diye bazı yıllar kurban kesmedikleri rivayeti.", "Beyhakî", "Mevkûf rivayet"]
    ],
    gorusler: [
      { ekol: "Hanefî", hukum: "Ebû Hanîfe'ye göre nisap miktarı mala sahip, mukîm Müslümana vaciptir. İmameyn'den (Ebû Yûsuf ve İmam Muhammed) bir rivayete göre sünnet-i müekkededir; mezhepte fetva vaciplik üzerinedir.",
        delil: "Kevser 2'deki emir; “Kimin imkânı olur da kurban kesmezse...” hadisindeki tehdit, terk edilmesi ciddi bir kusur olan bir yükümlülüğü gösterir. Hadis âhâd olduğundan farz değil vacip ifade eder.", alimler: ["ebuhanife", "kasani", "serahsi"] },
      { ekol: "Mâlikî", hukum: "Sünnet-i müekkededir; gücü yetenin terk etmesi mekruhtur.",
        delil: "Ümmü Seleme hadisindeki “kesmek isterse” ifadesi işi kişinin isteğine bırakır.", alimler: ["malik"] },
      { ekol: "Şâfiî", hukum: "Sünnet-i müekkededir.",
        delil: "Ümmü Seleme hadisi; Ebû Bekir ve Ömer'in bazı yıllar kesmemesi. Kevser 2'deki “nahr” emri, bayram namazından sonra kesmeyi veya namazda elleri göğüse bağlamayı ifade eder diye de yorumlanmıştır.", alimler: ["safii", "nevevi"] },
      { ekol: "Hanbelî", hukum: "Sünnet-i müekkededir. (İbn Teymiyye, gücü yetene vacip olduğu görüşünü güçlü bulmuştur.)",
        delil: "Cumhurun delilleri.", alimler: ["ahmed", "ibnkudame", "ibnteymiyye"] }
    ],
    koken: `<ul>
        <li><b>Kevser 2'deki emrin manası:</b> “وَانْحَرْ” kurban kesmeyi mi emreder, yoksa farklı bir mana mı taşır? Emir vücûb mu, nedb mi ifade eder?</li>
        <li><b>“İmkânı olan” hadisinin değeri:</b> Merfû (Hz. Peygamber'in sözü) mi yoksa Ebû Hüreyre'ye ait bir söz mü? Hanefîler merfû kabul edip ondaki tehdide dayanır.</li>
        <li><b>“İsterse” ifadesi:</b> Cumhur Ümmü Seleme hadisindeki isteğe bağlamayı sünnetliğin delili sayar; Hanefîler bunun vakti girmeden önceki niyeti anlattığını söyler.</li>
        <li><b>Vacip kategorisi:</b> Hanefîler zannî delille sabit kesin emirleri “vacip” sayar; diğer mezhepler farz ile vacibi eş anlamlı kullanır. Bu yüzden ihtilaf kısmen terminolojiktir.</li>
      </ul>`,
    cagdas: `<p><b>Diyanet</b>, Hanefî mezhebine göre kurbanın, dinen zengin sayılan Müslümana vacip olduğunu esas alır. Yurt dışında vekâletle kurban kesilmesi, kurban bedelinin sadaka olarak verilip verilemeyeceği gibi meseleler de gündemdedir: Âlimlerin büyük çoğunluğu, kurbanın bir “kan akıtma” ibadeti olduğunu ve bedelinin sadaka olarak verilmesiyle yerine gelmeyeceğini söyler.</p>`,
    durum: {
      kesin: ["Kurbanın meşru ve İslam'ın şiarlarından olduğu", "Kurban bayramı günlerinde kesileceği"],
      cogunluk: ["Kurbanın sünnet-i müekkede olduğu (Mâlikî, Şâfiî, Hanbelî)"],
      tartismali: ["Vacip mi sünnet mi olduğu", "Kurban yerine bedelinin sadaka olarak verilmesi"]
    },
    alimler: ["ebuhanife", "malik", "safii", "ahmed", "ibnteymiyye", "kasani"],
    kaynaklar: ["Kâsânî, Bedâiu's-sanâi', Kitâbü't-tadhiye", "İbn Rüşd, Bidâyetü'l-müctehid, Kitâbü'd-dahâyâ", "İbn Kudâme, el-Muğnî", "Nevevî, el-Mecmû'", "TDV İslâm Ansiklopedisi, “Kurban” maddesi"],
    ilgili: ["fitre"]
  },
  {
    id: "corap", baslik: "Çorap Üzerine Mesh", alan: "Fıkıh · İbadet",
    soru: "Deri mest yerine kumaş çorap giyilmişse abdestte ayağı yıkamak yerine çorap üzerine mesh edilebilir mi? Günümüzün ince çorapları bu hükme dahil midir?",
    ozet: "Mestler üzerine meshin meşruiyeti mütevâtirdir. Kumaş çoraplar (cevrebeyn) için mezhepler, çorabın mestin işlevini görüp görmediğine bakar. Ebû Hanîfe'nin vefatından önce görüşünü değiştirdiği bu mesele, ruhsatların genişliği konusunda bir örnek olay gibidir.",
    ayetler: [
      ["Mâide 6", "وَامْسَحُوا بِرُءُوسِكُمْ وَأَرْجُلَكُمْ إِلَى الْكَعْبَيْنِ", "Başlarınızı meshedin, ayaklarınızı da topuklara kadar (yıkayın)."]
    ],
    hadisler: [
      ["", "Muğîre b. Şu'be: Hz. Peygamber abdest aldı ve iki çorabı ile nalınları üzerine mesh etti.", "Ebû Dâvûd, Tirmizî", "Tirmizî “hasen sahih” demiş; birçok hadis âlimi zayıf bulmuştur"],
      ["", "Mestler üzerine mesh hadisleri yetmişten fazla sahâbîden rivayet edilmiştir.", "Buhârî, Müslim ve diğerleri", "Mütevâtir"]
    ],
    gorusler: [
      { ekol: "Hanefî", hukum: "İmameyn'e göre (fetva bu görüştedir) <b>kalın (sahîn)</b> çoraplar üzerine mesh caizdir: bağlanmadan ayakta durabilen, su geçirmeyen ve onunla bir fersah kadar yürünebilen çorap. Ebû Hanîfe önce yalnız altı veya her yanı deri kaplı çorabı kabul etmiş, vefatından önceki hastalığında bu görüşe döndüğü rivayet edilmiştir.",
        delil: "Mesh ruhsatı mestin işlevine bağlıdır: Mestin işini gören çorap mest hükmündedir.", alimler: ["ebuhanife", "ebuyusuf", "imammuhammed", "ibnabidin"] },
      { ekol: "Mâlikî", hukum: "Üzeri ve altı deri ile kaplı olmayan çorap üzerine mesh caiz değildir.",
        delil: "Mesh, mestle ilgili gelen nasla sınırlıdır; Muğîre hadisi sabit değildir.", alimler: ["malik"] },
      { ekol: "Şâfiî", hukum: "Çorap, mestin şartlarını taşıyorsa (sağlam, su geçirmeyen ve onunla yürünebilen) üzerine mesh caizdir.",
        delil: "Mestin işlevini gören her şey mest hükmündedir.", alimler: ["safii", "nevevi"] },
      { ekol: "Hanbelî", hukum: "Ayağı örten ve onunla yürünebilen kalın çorap üzerine mesh caizdir.",
        delil: "Muğîre hadisi ve dokuz sahâbînin çorap üzerine mesh ettiğine dair rivayetler.", alimler: ["ahmed", "ibnkudame"] },
      { ekol: "İbn Teymiyye", hukum: "Ruhsat geniştir: Yırtık mestler ve çoraplar üzerine, adı mest/çorap olduğu sürece mesh edilebilir.",
        delil: "Şâri' meshi şartlarla sınırlamamıştır; sahabenin mestleri çoğu zaman yırtık ve eskiydi.", alimler: ["ibnteymiyye"] }
    ],
    koken: `<ul>
        <li><b>Muğîre hadisinin sıhhati:</b> Bu rivayeti sahih bulanlar çoraba meshi doğrudan sünnete dayandırır; zayıf bulanlar ancak mest hükmünde olan çorabı kabul eder.</li>
        <li><b>Ruhsatın kıyasla genişletilmesi:</b> Mesh bir ruhsattır. Ruhsatlar dar mı yorumlanır, yoksa illeti (zorluğu kaldırma) bulunan benzer durumlara genişletilir mi?</li>
        <li><b>Mestin tarifi:</b> Mezheplerin koyduğu “su geçirmeme” ve “yürünebilme” şartları, delilden çok o dönemin mest tarifinden çıkarılmış ölçülerdir; bu, günümüz çorapları için tartışmayı açık tutar.</li>
      </ul>`,
    cagdas: `<p>Bugünkü ince pamuklu ve naylon çoraplar, klasik Hanefî ve Şâfiî şartlarını taşımaz. Bu yüzden bu mezheplere göre üzerlerine mesh edilmez. <b>Diyanet</b> de mestin şartlarını taşımayan ince çoraplar üzerine meshin caiz olmadığı görüşündedir.</p>
      <p>Buna karşılık <a href="#/alim/karadavi">Karadâvî</a> gibi bazı çağdaş âlimler, İbn Teymiyye'nin geniş yorumuna ve Muğîre hadisine dayanarak normal çoraplar üzerine meshi caiz görür. Bugün piyasada mest işlevi gören, su geçirmez kalın çoraplar (mest-çorap) da bulunmaktadır.</p>`,
    durum: {
      kesin: ["Mestler üzerine meshin meşru olduğu (mütevâtir)"],
      cogunluk: ["Mest şartlarını taşıyan kalın çorap üzerine meshin caiz olduğu"],
      tartismali: ["İnce, su geçiren çoraplar üzerine mesh", "Muğîre hadisinin sıhhati"]
    },
    alimler: ["ebuhanife", "malik", "safii", "ahmed", "ibnteymiyye", "karadavi"],
    kaynaklar: ["Kâsânî, Bedâiu's-sanâi'", "İbn Âbidîn, Reddü'l-muhtâr, “Bâbü'l-mesh ale'l-huffeyn”", "İbn Kudâme, el-Muğnî", "Nevevî, el-Mecmû'", "TDV İslâm Ansiklopedisi, “Mest” maddesi"],
    ilgili: ["abdest"]
  },
  {
    id: "fitre", baslik: "Fitre ve Zekâtın Para (Kıymet) Olarak Verilmesi", alan: "Fıkıh · İbadet",
    soru: "Sadaka-i fıtır hadiste sayılan gıda maddeleri (hurma, arpa, buğday, kuru üzüm) yerine onların bedeli olan para ile ödenebilir mi?",
    ozet: "Hanefîler kıymetle ödemeyi caiz, hatta çoğu zaman daha faziletli görür; cumhur hadiste sayılan gıda maddesiyle ödemeyi esas alır. İhtilaf, ibadette şekil ile amacın dengesine dair temel bir sorudur.",
    ayetler: [
      ["Tevbe 103", "خُذْ مِنْ أَمْوَالِهِمْ صَدَقَةً تُطَهِّرُهُمْ وَتُزَكِّيهِمْ بِهَا", "Onların mallarından, kendilerini temizleyeceğin ve arındıracağın bir sadaka al."]
    ],
    hadisler: [
      ["", "İbn Ömer: Resûlullah sadaka-i fıtrı, köleye ve hüre, erkeğe ve kadına, küçüğe ve büyüğe bir sâ' hurma veya bir sâ' arpa olarak farz kıldı ve insanlar bayram namazına çıkmadan önce verilmesini emretti.", "Buhârî, Müslim", "Sahih"],
      ["", "İbn Abbâs: Resûlullah fitreyi, oruçluyu boş ve kötü sözden arındırmak ve yoksullara bir yiyecek olsun diye farz kıldı.", "Ebû Dâvûd, İbn Mâce", "Hasen"],
      ["أَغْنُوهُمْ عَنِ الطَّوَافِ فِي هَذَا الْيَوْمِ", "Bu günde onları (yoksulları) dolaşıp dilenmekten müstağni kılın.", "Dârekutnî, Beyhakî", "Senedi zayıf bulunmuştur"],
      ["", "Muâz b. Cebel'in Yemen'de zekâtı arpa ve mısır yerine giyecek olarak alması (“Bu sizin için daha kolay, Medine'deki sahabe için daha hayırlı”).", "Buhârî (ta'lîkan)", "Mu'allak rivayet"]
    ],
    gorusler: [
      { ekol: "Hanefî", hukum: "Fitre ve zekât, belirlenen maddelerin kıymeti (parası) olarak verilebilir; fakirin ihtiyacına daha uygunsa para vermek daha faziletlidir.",
        delil: "Fitrenin amacı fakiri o gün ihtiyaçtan kurtarmaktır (“onları müstağni kılın”); bu amaç parayla daha iyi gerçekleşir. Muâz'ın uygulaması ve Ömer b. Abdülazîz'in fitreyi para olarak toplatması.", alimler: ["ebuhanife", "serahsi", "kasani"] },
      { ekol: "Mâlikî", hukum: "Beldenin yaygın gıda maddesinden verilmesi gerekir; kıymetle ödeme meşhur görüşe göre caiz değildir.",
        delil: "Hadis gıda maddesini açıkça belirlemiştir; ibadetlerde belirlenen şekle uyulur.", alimler: ["malik"] },
      { ekol: "Şâfiî", hukum: "Kıymet caiz değildir; hadiste sayılan veya beldenin temel gıdası olan maddeden verilir.",
        delil: "Zekât ve fitre ibadettir; miktar ve cinsi şâri' belirlemiştir, kıyasla değiştirilemez.", alimler: ["safii", "nevevi"] },
      { ekol: "Hanbelî", hukum: "Mezhebin meşhur görüşü kıymeti caiz görmez. İbn Teymiyye ihtiyaç veya açık maslahat bulunduğunda kıymetle ödemeyi caiz görür.",
        delil: "Asıl olan nassa uymaktır; maslahat ve ihtiyaç bunu esnetebilir.", alimler: ["ahmed", "ibnkudame", "ibnteymiyye"] }
    ],
    koken: `<p>Bu mesele, <b>hükmün lafzına mı yoksa amacına (illetine) mı bakılacağı</b> sorusunun tipik örneğidir:</p>
      <ul>
        <li>Cumhur, ibadetlerde şâriin belirlediği şekli (gıda) ve miktarı (sâ') ta'abbüdî, yani akılla değiştirilemez sayar.</li>
        <li>Hanefîler, zekât ve fitrenin bir mali ibadet olduğunu, amacının fakirin ihtiyacını karşılamak olduğunu söyler; hadisteki maddeleri, o dönemin en yaygın değer ölçüsü olarak görür.</li>
        <li>Muâz rivayetinin sıhhati ve anlamı da tartışılmıştır: Cumhur bunun cizye ile ilgili olduğunu veya zaruret hâli olduğunu söyler.</li>
      </ul>`,
    cagdas: `<p>Şehir hayatında fakirin ihtiyacı çoğu zaman sadece gıda değildir. <b>Diyanet İşleri Başkanlığı</b> her yıl fitreyi Hanefî görüşe göre para olarak (asgari bir buğday karşılığı, ayrıca arpa, hurma ve üzüm karşılıkları) ilan eder.</p>
      <p>Şâfiî çoğunluklu bölgelerde ve bazı Arap ülkelerinde fitrenin gıda olarak toplanıp dağıtılması yaygındır. Çağdaş âlimlerin önemli bir kısmı, ihtiyaca daha uygun olduğu gerekçesiyle kıymetle ödemenin caiz olduğu görüşünü tercih eder.</p>`,
    durum: {
      kesin: ["Sadaka-i fıtrın meşru olduğu ve bayram namazından önce verilmesinin sünnet olduğu"],
      cogunluk: ["Fitrenin aslen gıda maddesi olarak verilmesi (Mâlikî, Şâfiî, Hanbelî)"],
      tartismali: ["Kıymet (para) ile ödemenin caiz olup olmadığı"]
    },
    alimler: ["ebuhanife", "safii", "malik", "ahmed", "ibnteymiyye", "serahsi"],
    kaynaklar: ["Serahsî, el-Mebsût, Kitâbü'z-zekât", "İbn Rüşd, Bidâyetü'l-müctehid, “Zekâtü'l-fıtr”", "Nevevî, el-Mecmû'", "İbn Teymiyye, Mecmûu'l-fetâvâ, c. 25", "Karadâvî, Fıkhu'z-zekât", "TDV İslâm Ansiklopedisi, “Sadaka-i Fıtır” maddesi"],
    ilgili: ["kurban", "faiz"]
  }
);
