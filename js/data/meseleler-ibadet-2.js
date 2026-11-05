// Meseleler — oruç, zekât, hac.
window.MESELELER.push(
  {
    id: "hilal", baslik: "Ramazan'ın Başlangıcı: Rü'yet, Hesap ve Matla Farkı", alan: "Fıkıh · İbadet",
    soru: "Ramazan ve bayram, hilalin gözle görülmesiyle mi yoksa astronomik hesapla mı belirlenir? Bir ülkede görülen hilal bütün dünyayı bağlar mı?",
    ozet: "Mesele iki ayrı soruyu birlikte barındırır. Birincisi ispat vasıtasıdır: “rü'yet” ibadet midir yoksa ayın girişini bilmenin bir aracı mı? İkincisi bağlayıcılığın coğrafyasıdır: ihtilâf-ı metâli' muteber midir? Klasik cumhur rü'yeti esas alır. Matla farkında ise Şâfiîler diğer üç mezhebe muhaliftir. Hesap meselesi azınlık görüşünden çağdaş dönemde kurumsal tercihe dönüşmüştür.",
    ayetler: [
      ["Bakara 185", "فَمَنْ شَهِدَ مِنْكُمُ الشَّهْرَ فَلْيَصُمْهُ", "Sizden kim o aya erişirse (şehide) onda oruç tutsun."],
      ["Bakara 189", "يَسْأَلُونَكَ عَنِ الْأَهِلَّةِ ۖ قُلْ هِيَ مَوَاقِيتُ لِلنَّاسِ وَالْحَجِّ", "Sana hilalleri soruyorlar. De ki: Onlar insanlar ve hac için vakit ölçüleridir."],
      ["Yûnus 5", "وَقَدَّرَهُ مَنَازِلَ لِتَعْلَمُوا عَدَدَ السِّنِينَ وَالْحِسَابَ", "Ona (aya) menziller takdir etti ki yılların sayısını ve hesabı bilesiniz."],
      ["Rahmân 5", "الشَّمْسُ وَالْقَمَرُ بِحُسْبَانٍ", "Güneş ve ay bir hesaba göre (hareket eder)."]
    ],
    hadisler: [
      ["صُومُوا لِرُؤْيَتِهِ وَأَفْطِرُوا لِرُؤْيَتِهِ فَإِنْ غُبِّيَ عَلَيْكُمْ فَأَكْمِلُوا عِدَّةَ شَعْبَانَ ثَلَاثِينَ", "Onu görünce oruca başlayın, onu görünce bayram edin. Eğer (hava) kapalı olursa Şâban'ı otuza tamamlayın.", "Buhârî (Ebû Hüreyre); Müslim'de benzer lafızlarla", "Sahih"],
      ["فَإِنْ غُمَّ عَلَيْكُمْ فَاقْدُرُوا لَهُ", "Hava kapalı olursa onun için takdirde bulunun (hesaplayın).", "Buhârî, Müslim (İbn Ömer)", "Sahih"],
      ["إِنَّا أُمَّةٌ أُمِّيَّةٌ لَا نَكْتُبُ وَلَا نَحْسُبُ، الشَّهْرُ هٰكَذَا وَهٰكَذَا", "Biz ümmî bir ümmetiz; yazmayız, hesap yapmayız. Ay şöyle ve şöyledir (bazen yirmi dokuz, bazen otuz).", "Buhârî, Müslim (İbn Ömer)", "Sahih"],
      ["", "Küreyb, Şam'da hilali cuma gecesi gördüklerini, Muâviye'nin de oruca başladığını anlatınca İbn Abbâs: “Biz onu cumartesi gecesi gördük; otuza tamamlayana veya görene kadar tutmaya devam ederiz” dedi. “Muâviye'nin görmesi ve orucu sana yetmez mi?” sorusuna da “Hayır, Resûlullah bize böyle emretti” cevabını verdi.", "Müslim", "Sahih"]
    ],
    gorusler: [
      { ekol: "Hanefî", hukum: "Zâhirü'r-rivâyeye göre <b>matla farkı muteber değildir</b>: Hilal bir beldede usulüne uygun şahitlikle sabit olursa, haberin ulaştığı bütün beldeleri bağlar. Hava açıkken tek kişinin şahitliği kabul edilmez, kalabalık bir topluluğun (cem'-i gafîr) görmesi aranır; havada bir engel varsa âdil bir kişinin haberi yeterlidir. Hesap tek başına ispat vasıtası değildir.",
        delil: "“Onu görünce oruç tutun” hitabı bütün ümmete yöneliktir; bir yerde görülmesi “görme” şartını gerçekleştirir. Küreyb hadisini, İbn Abbâs'ın şahitlik usulüyle sabit olmamış bir haberi kabul etmemesi olarak yorumlarlar. Zeylaî gibi bazı müteahhir Hanefîler ise birbirinden çok uzak beldelerde matla farkının dikkate alınması gerektiğini söylemiştir.", alimler: ["ebuhanife", "kasani", "ibnabidin"] },
      { ekol: "Şâfiî", hukum: "<b>Matla farkı muteberdir</b>: Her belde kendi rü'yetiyle bağlıdır; matlaı aynı olan yakın beldeler birbirine tâbidir. Bazı Şâfiîler ölçüyü kasr mesafesi olarak koymuştur. Hava açık olsa bile âdil tek kişinin Ramazan hilalini görmesi yeterlidir. Hesapçının bilgisi kendisi ve ona güvenenler için amel sebebi olabilir (İbn Süreyc).",
        delil: "Küreyb hadisi ve İbn Abbâs'ın “Resûlullah bize böyle emretti” sözü merfû hükmündedir. Namaz vakitlerinin güneşin konumuna göre beldeden beldeye değişmesine kıyas edilir.", alimler: ["safii", "nevevi"] },
      { ekol: "Mâlikî ve Hanbelî", hukum: "Cumhur gibi <b>matla farkı muteber değildir</b>; bir yerde sabit olan rü'yet herkesi bağlar. Hanbelîlerin meşhur görüşünde, Şâban'ın 29. akşamı bulut veya toz hilali örterse ertesi gün Ramazan niyetiyle ihtiyaten oruç tutulur. Bu, İbn Ömer'in uygulamasına ve “fakdurû lehû” lafzının “ayı daraltın” diye yorumlanmasına dayanır.",
        delil: "Hitabın umumiliği. Hanbelîlerin şek günü görüşü İbn Ömer'in fiiline dayanır; cumhur ise bunu “şek günü orucu” yasağına aykırı bulur.", alimler: ["malik", "ahmed", "ibnkudame"] },
      { ekol: "Hesabı kabul edenler", hukum: "Tâbiînden Mutarrif b. Abdillâh, Şâfiî fakihi İbn Süreyc ve İbn Kuteybe, hava kapalı olduğunda “fakdurû lehû” emrinin astronomik takdir (hesap) demek olduğunu söylemiştir. Takıyyüddin es-Sübkî ise hesabın olumsuz yönde kullanılmasını savunmuştur: Hesap hilalin görülmesinin imkânsız olduğunu kesin olarak gösteriyorsa, aksine şahitlik reddedilir.",
        delil: "“Biz hesap yapmayız” hadisi bir illetle bağlıdır: Hüküm ümmetin o günkü hesap bilmezliğine bağlanmıştır. İllet kalkınca hükmün değişmesi mümkündür. Bu akıl yürütmeyi 20. yüzyılda Ahmed Şâkir ve Mustafa Zerkā sistemli olarak savunmuştur.", alimler: ["zerka"] }
    ],
    koken: `<p>İhtilaf üç düğümde toplanır:</p>
      <ul>
        <li><b>Rü'yet ta'abbüdî mi, vesîle mi?</b> Rü'yeti bir ibadet şartı gibi görenler için hesap rü'yetin yerine geçemez. Onu ayın girişini bilmenin o günkü en güvenilir aracı sayanlar için ise daha kesin bir araç onun yerini alabilir. “Ümmî ümmet” hadisi iki tarafça da delil gösterilir: Biri onu hesabın reddi, öbürü hükmün illeti olarak okur.</li>
        <li><b>Hitabın muhatabı:</b> “Görünce oruç tutun” emri ümmete bir bütün olarak mı yönelir, yoksa her topluluğa kendi görmesiyle mi? Hanefî-Mâlikî-Hanbelî cumhur birinci, Şâfiîler İbn Abbâs'ın uygulamasıyla ikinci yolu izler.</li>
        <li><b>“Fakdurû lehû” lafzının manası:</b> Cumhura göre manası “Şâban'ı otuza tamamlayın”dır ve diğer rivayet bunu açıklar. Ahmed'e göre “daraltın”, yani ayı yirmi dokuz sayın. İbn Süreyc'e göre ise “menzillerle hesaplayın”dır.</li>
      </ul>
      <p class="tip">Dikkat: Klasik âlimlerin “hesap” derken kastettiği şey çoğunlukla müneccimlik ile karışık, güvenilirliği tartışmalı bir bilgiydi. Çağdaş hesap savunucuları, bugünkü astronominin kavuşum ve görünürlük hesabında kesine yakın sonuç verdiğini, dolayısıyla klasik itirazların konusunun değiştiğini söyler.</p>`,
    cagdas: `<p><b>1978 İstanbul Hilal Konferansı</b>, hilalin görülebilmesi için güneş battıktan sonra ayın ufuktan en az 5°, güneşle arasındaki açının da en az 8° olması ölçütünü kabul etti. Bu ölçüte göre hilal dünyanın herhangi bir yerinde görülebilir hâldeyse yeni ay başlamış sayılır. Türkiye'de <b>Diyanet</b> takvimi bu kararla hesaba dayalı olarak hazırlanır; matla farkı da dikkate alınmaz. 2016'da yine İstanbul'da toplanan Uluslararası Hicrî Takvim Birliği Kongresi, tek bir küresel takvim önerisini kabul etti.</p>
      <p>Uluslararası İslam Fıkıh Akademisi ise matla farkına itibar edilmemesini, rü'yetin esas alınmasını ve hesabın yardımcı olarak kullanılmasını benimsemiştir. Suudi Arabistan ve bazı ülkeler fiilî rü'yet şahitliğini esas alır; bu yüzden aynı yılda bayramların bir gün farkla kutlanması sürmektedir.</p>
      <p>Meselenin bugünkü asıl sorusu fıkhî olmaktan çok içtimaîdir: Ümmetin birliği mi, yerel rü'yet geleneğinin korunması mı öncelikli? Karadâvî, hesabın en azından olumsuz yönde (hilalin görülemeyeceği kesin olan durumda şahitliğin reddi) kullanılmasının zorunlu olduğunu savunur.</p>`,
    durum: {
      kesin: ["Ramazan orucunun kamerî ayın girmesiyle farz olduğu", "Ayın ya rü'yetle ya da otuza tamamlamakla sabit olduğu (klasik dönem)"],
      cogunluk: ["Matla farkının muteber olmadığı (Hanefî, Mâlikî, Hanbelî)", "Hesabın tek başına ispat vasıtası olmadığı (klasik cumhur)"],
      tartismali: ["Matla farkının muteberliği (Şâfiîler)", "Hesabın rü'yetin yerine geçmesi", "Hesabın şahitliği reddetmede kullanılması (Sübkî)", "Küresel tek takvimin bağlayıcılığı"]
    },
    alimler: ["ebuhanife", "safii", "ahmed", "nevevi", "ibnkudame", "ibnabidin", "zerka", "karadavi"],
    kaynaklar: ["Kâsânî, Bedâiu's-sanâyi', “Kitâbü's-savm”", "Nevevî, el-Mecmû', c. 6", "İbn Kudâme, el-Muğnî, “Kitâbü's-sıyâm”", "İbn Âbidîn, Reddü'l-muhtâr, “Kitâbü's-savm”", "İbn Rüşd, Bidâyetü'l-müctehid, “Kitâbü's-sıyâm”", "Ahmed Şâkir, Evâilü'ş-şuhûri'l-Arabiyye", "TDV İslâm Ansiklopedisi, “Hilal” ve “İhtilâf-ı Metâli'” maddeleri"],
    ilgili: ["teravih", "fitre"]
  },
  {
    id: "ziynet", baslik: "Ziynet Eşyasının ve Kazancın Zekâtı", alan: "Fıkıh · İbadet",
    soru: "Kadının kullandığı altın takılar zekâta tâbi midir? Maaş ve serbest meslek kazancının zekâtı ne zaman ve nasıl verilir?",
    ozet: "Ziynet zekâtı, Hanefîlerin cumhurdan ayrıldığı meşhur meselelerdendir. Hanefîler altın ve gümüşün kendisini zekât malı sayar. Cumhur ise mübah kullanımdaki ziyneti elbise gibi “kınye” malı kabul eder. Kazanç zekâtı ise “mal-ı müstefâd” meselesinin modern uzantısıdır.",
    ayetler: [
      ["Tevbe 34", "وَالَّذِينَ يَكْنِزُونَ الذَّهَبَ وَالْفِضَّةَ وَلَا يُنْفِقُونَهَا فِي سَبِيلِ اللّٰهِ فَبَشِّرْهُمْ بِعَذَابٍ أَلِيمٍ", "Altın ve gümüşü biriktirip Allah yolunda harcamayanlara elem verici bir azabı müjdele."],
      ["Tevbe 103", "خُذْ مِنْ أَمْوَالِهِمْ صَدَقَةً تُطَهِّرُهُمْ وَتُزَكِّيهِمْ بِهَا", "Onların mallarından, kendilerini arındıracağın ve temizleyeceğin bir sadaka al."],
      ["Zâriyât 19", "وَفِي أَمْوَالِهِمْ حَقٌّ لِلسَّائِلِ وَالْمَحْرُومِ", "Onların mallarında isteyen ve (isteyemeyen) yoksun için bir hak vardı."],
      ["Bakara 267", "يَا أَيُّهَا الَّذِينَ آمَنُوا أَنْفِقُوا مِنْ طَيِّبَاتِ مَا كَسَبْتُمْ", "Ey iman edenler! Kazandıklarınızın temiz olanlarından infak edin."]
    ],
    hadisler: [
      ["", "Bir kadın, kızının kolunda kalın iki altın bilezikle Hz. Peygamber'e geldi. “Bunların zekâtını veriyor musun?” diye sordu; kadın “Hayır” deyince: “Allah'ın kıyamet günü sana bunların yerine ateşten iki bilezik takmasından hoşlanır mısın?” buyurdu. Kadın bilezikleri çıkarıp bıraktı.", "Ebû Dâvûd, Nesâî, Tirmizî (Amr b. Şuayb)", "Senedi tartışmalı: Tirmizî bu konuda sahih bir şey bulunmadığını söyler; Nesâî ve sonraki bazı muhaddisler senedini hasen veya sahih bulmuştur"],
      ["", "Hz. Âişe, himayesindeki yetim kızların altın takılarının zekâtını vermiyordu. İbn Ömer de kızlarına ve cariyelerine taktığı altınların zekâtını vermezdi.", "Mâlik, el-Muvatta'", "Sahih (mevkûf)"],
      ["", "Câbir, Enes ve Esmâ bint Ebî Bekr'den de kullanılan ziynette zekât olmadığı nakledilmiştir. Ahmed b. Hanbel bu görüşü beş sahabeye nispet eder.", "Beyhakî, es-Sünenü'l-kübrâ; İbn Kudâme, el-Muğnî", "Mevkûf rivayetler"],
      ["لَيْسَ فِي الْحُلِيِّ زَكَاةٌ", "Ziynet eşyasında zekât yoktur.", "Beyhakî (Câbir'den merfû)", "Merfû olarak sabit değil; Beyhakî asılsız sayar, Câbir'in kendi sözü olarak nakledilir"]
    ],
    gorusler: [
      { ekol: "Hanefî", hukum: "Altın ve gümüş ziynet eşyası, kullanılsın veya kullanılmasın, nisaba (20 miskal altın / 200 dirhem gümüş) ulaşmışsa ve üzerinden bir kamerî yıl geçmişse <b>zekâta tâbidir</b>. Oranı kırkta birdir.",
        delil: "Tevbe 34 ve zekât nasları mutlaktır. Amr b. Şuayb hadisi ile Âişe ve Ümmü Seleme'den gelen benzer rivayetler de delildir. İlletleri şudur: Altın ve gümüşte nemâ (artma) kabiliyeti <b>hilkîdir</b>, yani bu madenler para (semen) olarak yaratılmıştır. Takı hâline getirilmeleri bu vasfı ortadan kaldırmaz.", alimler: ["ebuhanife", "serahsi", "kasani"] },
      { ekol: "Mâlikî, Şâfiî, Hanbelî", hukum: "Kadının mübah ölçüde kullandığı ziynette <b>zekât yoktur</b>. Ancak ziynet biriktirme (kenz), ticaret veya kiraya verme amacıyla tutuluyorsa ya da örfü aşan israf boyutundaysa zekât gerekir. Erkeğin kullanması haram olan altında da zekât vardır.",
        delil: "Sahabeden Âişe, İbn Ömer, Câbir, Enes ve Esmâ'nın uygulaması. Zekâtın konusu nâmî (artan) maldır. Kullanılan ziynet ise binek, ev eşyası ve elbise gibi temel ihtiyaçtır (kınye). Amr b. Şuayb hadisini ya zayıf sayarlar ya da ziynetin henüz mübah kılınmadığı döneme veya israfa yorumlarlar.", alimler: ["malik", "safii", "ahmed", "ibnkudame", "nevevi"] },
      { ekol: "Ara görüşler", hukum: "Enes'ten: zekâtı ömürde bir kez verilir. Esmâ ve Câbir'den: “Ziynetin zekâtı onu (ihtiyaç sahibine) ödünç vermektir” (âriyet). İbn Hazm ise Hanefîler gibi zekât gerektiğini savunur.",
        delil: "İki delil grubunu uzlaştırma ve sahabe sözleri.", alimler: ["ibnhazm"] }
    ],
    koken: `<ul>
        <li><b>Zekâtın illeti:</b> Zekât, malın nemâ kabiliyetine bağlıdır. Hanefîler altın-gümüşte bu kabiliyetin yaratılıştan geldiğini (semeniyyet-i hilkıyye) ve şekil değişikliğiyle kaybolmayacağını söyler. Cumhur ise kullanım için ayrılan malın nemâ amacından çıktığını, tıpkı ticaret niyeti olmayan ev eşyası gibi olduğunu söyler.</li>
        <li><b>Âhâd haber ve sahabe uygulaması:</b> Bu konudaki merfû hadislerin senetleri tartışmalıdır. Kullanılan ziynette zekât olmadığını söyleyen sahabe sözleri ise sahihtir. Hanefîler âyetin umumunu ve merfû rivayetleri esas alır. Diğer mezhepler, Hz. Peygamber'in evinde yetişmiş Âişe'nin uygulamasının bir sünnet bilgisine dayandığını düşünür.</li>
        <li><b>İhtiyat ve kolaylık:</b> Hanefî görüş, zekâttan sorumluluğu kesin olarak düşürmede ihtiyatlı olanıdır. Cumhurun görüşü ise zekâtın nemâ felsefesiyle daha tutarlıdır.</li>
      </ul>
      <h4>Kazanç zekâtı (mal-ı müstefâd)</h4>
      <p>Yıl içinde elde edilen yeni malın zekâtı nasıl hesaplanır? <b>Hanefîlere göre</b> kişi yıl başında nisaba sahipse, yıl içinde elde ettiği aynı cinsten mal mevcut nisaba eklenir ve hepsinin zekâtı yıl sonunda verilir; yeni mal için ayrıca yıl beklenmez. <b>Cumhura göre</b> ise yeni mal için ayrı bir yıl başlar. İbn Abbâs, İbn Mes'ûd ve Muâviye'den, kazancın elde edilince zekâtının verileceği nakledilir; Ömer b. Abdülazîz de maaşlardan (atâ) zekâtı kaynağında kesmiştir.</p>`,
    cagdas: `<p><b>Diyanet</b>, Hanefî görüşe göre ziynet eşyasının nisaba ulaşması hâlinde zekâtının verilmesi gerektiğini bildirir; diğer mezheplerin görüşünü de not eder. Kadının ziynetinin büyük ölçüde birikim aracı olarak tutulduğu Türkiye gibi toplumlarda bu tercih, cumhurun “kenz” istisnasıyla da örtüşür.</p>
      <p><b>Karadâvî</b>, Fıkhu'z-zekât'ta ziynet konusunda cumhuru tercih eder; ancak örfü aşan miktarın zekâta tâbi olduğunu vurgular. Kazanç konusunda ise maaş ve meslek gelirinin, elde edildiği anda net tutar üzerinden (borç ve temel ihtiyaçlar düşüldükten sonra) kırkta bir oranında zekâta tâbi olduğunu savunur. Bu görüş, maaşların aylık ödendiği ve yıl boyunca harcandığı bir ekonomide zekâtın fiilen ortadan kalkmasını önlemeyi amaçlar.</p>
      <p>Uygulamada en yaygın yol, Hanefî “nisabın eklenmesi” kuralıyla yıllık bir zekât tarihi belirleyip o gün eldeki bütün nakit, altın, döviz, hisse ve ticaret malını toplamaktır.</p>`,
    durum: {
      kesin: ["Altın ve gümüşte nisab ve yıl şartıyla kırkta bir zekâtın farz olduğu", "Ticaret amacıyla tutulan altında zekât olduğu"],
      cogunluk: ["Mübah kullanımdaki kadın ziynetinde zekât olmadığı (Mâlikî, Şâfiî, Hanbelî)"],
      tartismali: ["Kullanılan ziynetin zekâtı (Hanefîler vâcib görür)", "Maaş ve kazancın elde edildiği anda zekâta tâbi olması", "Örfü aşan ziynetin sınırı"]
    },
    alimler: ["ebuhanife", "malik", "safii", "ahmed", "serahsi", "ibnkudame", "ibnhazm", "karadavi"],
    kaynaklar: ["Serahsî, el-Mebsût, “Kitâbü'z-zekât”", "Kâsânî, Bedâiu's-sanâyi'", "İbn Kudâme, el-Muğnî, “Zekâtü'l-hulî”", "Nevevî, el-Mecmû', c. 6", "İbn Rüşd, Bidâyetü'l-müctehid", "Karadâvî, Fıkhu'z-zekât", "TDV İslâm Ansiklopedisi, “Zekât” ve “Hulî” maddeleri"],
    ilgili: ["fitre", "faiz", "kripto"]
  },
  {
    id: "hacruhsat", baslik: "Hacda Kalabalık ve Ruhsatlar: Taşlama Vakti, Müzdelife ve Tertip", alan: "Fıkıh · İbadet",
    soru: "Milyonların aynı anda yaptığı bir ibadette şeytan taşlamanın zevalden önce yapılması, Müzdelife'den erken ayrılmak ve bayram günü menâsikinin sırasını değiştirmek caiz midir?",
    ozet: "Hac, Hz. Peygamber'in “Menâsikinizi benden alın” buyurduğu, tek bir haccın fiilleriyle şekillenmiş bir ibadettir. Âlimler, bu fiillerden hangilerinin bağlayıcı vakit ve sıra, hangilerinin uygulama tarzı olduğu konusunda ayrılmıştır. Bugünün yoğunluğu, klasik azınlık görüşlerini yeniden gündeme taşımıştır.",
    ayetler: [
      ["Bakara 198", "فَإِذَا أَفَضْتُمْ مِنْ عَرَفَاتٍ فَاذْكُرُوا اللّٰهَ عِنْدَ الْمَشْعَرِ الْحَرَامِ", "Arafat'tan akın edip ayrıldığınızda Meş'ar-i Harâm'ın yanında Allah'ı anın."],
      ["Bakara 203", "وَاذْكُرُوا اللّٰهَ فِي أَيَّامٍ مَعْدُودَاتٍ ۚ فَمَنْ تَعَجَّلَ فِي يَوْمَيْنِ فَلَا إِثْمَ عَلَيْهِ وَمَنْ تَأَخَّرَ فَلَا إِثْمَ عَلَيْهِ لِمَنِ اتَّقَى", "Sayılı günlerde Allah'ı anın. Kim iki günde acele ederse ona günah yoktur, kim geri kalırsa ona da günah yoktur; bu, takva sahibi içindir."],
      ["Bakara 185", "يُرِيدُ اللّٰهُ بِكُمُ الْيُسْرَ وَلَا يُرِيدُ بِكُمُ الْعُسْرَ", "Allah sizin için kolaylık ister, zorluk istemez."],
      ["Hac 78", "وَمَا جَعَلَ عَلَيْكُمْ فِي الدِّينِ مِنْ حَرَجٍ", "Dinde size bir zorluk yüklemedi."]
    ],
    hadisler: [
      ["لِتَأْخُذُوا مَنَاسِكَكُمْ فَإِنِّي لَا أَدْرِي لَعَلِّي لَا أَحُجُّ بَعْدَ حَجَّتِي هٰذِهِ", "Menâsikinizi (benden) alın; bilmiyorum, belki bu haccımdan sonra bir daha hac yapamam.", "Müslim (Câbir)", "Sahih"],
      ["افْعَلْ وَلَا حَرَجَ", "Kurban günü kendisine “Kurbanı kesmeden tıraş oldum”, “Taşlamadan önce kestim” gibi sorular soruldu. O gün öne alınan veya geri bırakılan hiçbir şey için “Yap, bir sakıncası yok” demekten başka bir şey söylemedi.", "Buhârî, Müslim (Abdullah b. Amr)", "Sahih"],
      ["", "Hz. Peygamber kurban günü cemreyi kuşluk vaktinde attı; sonraki günlerde ise güneş zevale erdikten sonra attı.", "Müslim (Câbir)", "Sahih"],
      ["", "Ağır ve yavaş hareket eden Sevde, kalabalıktan önce Müzdelife'den ayrılmak için izin istedi; Hz. Peygamber izin verdi. İbn Abbâs da ailenin zayıflarıyla geceleyin erkenden gönderildiğini anlatır.", "Buhârî, Müslim", "Sahih"],
      ["", "Hz. Peygamber develeri otlatan çobanlara Mina'da geceleme konusunda ruhsat verdi; Abbâs'a da hacılara su dağıtmak için Mina gecelerini Mekke'de geçirme izni verdi.", "Ebû Dâvûd, Tirmizî; Buhârî, Müslim (Abbâs)", "Sahih"]
    ],
    gorusler: [
      { ekol: "Hanefî", hukum: "Teşrik günlerinde taşlamanın vakti zevalden sonradır. Ebû Hanîfe'ye göre dördüncü gün (13 Zilhicce) zevalden önce atmak istihsânen caizdir. Müzdelife vakfesi <b>vâcibtir</b>; vakti fecirden güneş doğana kadardır. Kadın, yaşlı ve hasta gibi özür sahipleri terk ederse ceza gerekmez. Ebû Hanîfe'ye göre kurban günü taşlama, kesim ve tıraş arasındaki <b>sıra vâcibtir</b>; temettu ve kıran haccında sırayı bozan dem (kurban) öder.",
        delil: "Tertip konusunda İbn Abbâs'tan gelen “Haccında bir şeyi öne alan veya geri bırakan kurban kessin” rivayeti delil gösterilir. “Lâ harac” ifadesini “günah yoktur” diye anlar; bunun fidyeyi düşürmediğini söylerler, zira sahabe meseleyi bilmeden yapmıştı. İmâmeyn (Ebû Yûsuf ve Muhammed) bu konuda cumhurla birliktedir.", alimler: ["ebuhanife", "kasani", "serahsi"] },
      { ekol: "Şâfiî ve Hanbelî", hukum: "Teşrik günlerinde zevalden önce taşlama caiz değildir. Müzdelife'de <b>gece yarısından sonraya kadar</b> kalmak (mebît) vâcibtir; gece yarısından sonra ayrılmak herkes için caizdir. Kurban günü fiillerinin tertibi <b>sünnettir</b>; değiştirene bir şey gerekmez. Başkasına vekâleten taşlama, kendisi atamayacak kadar âciz olan için caizdir.",
        delil: "“İf'al ve lâ harac” hadisi mutlaktır ve hiçbir fidyeden söz etmez; beyanın ihtiyaç anından geciktirilmesi caiz değildir. Sevde'ye ve zayıflara verilen izin, Müzdelife'de kalışın gece yarısından sonrasıyla sınırlı olduğunu gösterir.", alimler: ["safii", "nevevi", "ahmed", "ibnkudame"] },
      { ekol: "Mâlikî", hukum: "Müzdelife'de konaklayıp namazı kılacak ve bir şeyler yiyecek kadar bir süre durmak yeterlidir. Tertip konusunda bazı ayrıntılar vardır: Taşlamadan önce tavaf veya tıraş fidye gerektirebilir.",
        delil: "Medine amelinin ve Müzdelife'deki “nüzûl” (konaklama) kavramının yorumu.", alimler: ["malik"] },
      { ekol: "Ruhsatı genişletenler", hukum: "Tâbiînden Atâ ve Tâvûs'un, teşrik günlerinde zevalden önce taşlamayı caiz gördüğü nakledilir. Çağdaş dönemde birçok fakih, izdiham ve can güvenliğini gerekçe göstererek gün boyu ve geceleyin atmayı caiz görmüş ve uygulamayı bu yönde düzenlemiştir.",
        delil: "Hz. Peygamber'in atış vaktini sözlü bir emirle değil fiille belirlediği; fiilin vücubu değil efdaliyeti gösterebileceği; dinde haracın (zorluğun) kaldırılması; can güvenliği zarûriyyâttandır.", alimler: ["karadavi"] }
    ],
    koken: `<ul>
        <li><b>Fiilin delâleti:</b> “Menâsikinizi benden alın” emri, Hz. Peygamber'in haccındaki her fiili vâcib mi kılar? Yoksa fiillerin bir kısmı rükün ve vâcib, bir kısmı sünnet ve âdet midir? Bu, usuldeki “Peygamber fiilinin hükmü” tartışmasının hacca yansımasıdır.</li>
        <li><b>“Lâ harac”ın kapsamı:</b> Günahın mı, fidyenin mi, yoksa ikisinin birden mi kaldırıldığını ifade ediyor? Hanefîler ilkini, cumhur sonuncusunu anlar.</li>
        <li><b>Vakit tayini:</b> Zevalden önce atmamak, bir “vakit şartı” mı yoksa bir “efdaliyet” mi? Sahabenin zevali bekleyip “güneş kayınca atardık” demesi ilkini destekler. Bu bekleyişin ruhsatlarla birlikte bilinmesi ise ikincisini.</li>
        <li><b>Zarûret ve meşakkat:</b> Bütün mezhepler meşakkatin ruhsat getireceğini kabul eder. Tartışma, kalabalığın klasik kitaplarda düşünülen bireysel özürlerle aynı kategoride olup olmadığıdır.</li>
      </ul>`,
    cagdas: `<p>1990'daki tünel faciası, 2006'da Cemerât köprüsünde ve 2015'te Mina'da yaşanan izdiham felaketleri, meseleyi bir ilmî ihtilaf olmaktan çıkarıp can güvenliği meselesine dönüştürdü. Suudi yetkilileri cemerât bölgesini çok katlı hâle getirdi ve hacıları gruplara ayırıp her gruba ayrı atış saatleri verdi. Bu takvim zevalden önceki saatleri de kapsar.</p>
      <p><b>Diyanet</b>'in hac rehberleri esas olarak Hanefî görüşü verir. Bununla birlikte zorunluluk hâlinde diğer mezheplerin ruhsatlarına da (özellikle Müzdelife'de gece yarısından sonra ayrılmak ve vekâletle taşlama) yer verir.</p>
      <p>Bu mesele, “telfîk” ve “ruhsatları takip” tartışmasının canlı bir örneğidir: Kalabalık şartlarında farklı mezheplerin ruhsatlarını birleştirmek, ibadetin bütünlüğünü bozar mı? Âlimlerin çoğu, ihtiyaç hâlinde ve ilmî bir dayanakla yapıldığında bunu meşru görür.</p>`,
    durum: {
      kesin: ["Arafat vakfesinin haccın en önemli rüknü olduğu", "Cemrelerin taşlanmasının haccın vâciblerinden olduğu", "Âcizin taşlamada vekil tayin edebileceği"],
      cogunluk: ["Teşrik günlerinde zevalden önce atmanın klasik görüşte caiz olmadığı", "Kurban günü fiillerinin tertibini bozmanın fidye gerektirmediği (Ebû Hanîfe dışında)"],
      tartismali: ["İzdiham sebebiyle zevalden önce atmak", "Müzdelife'de kalınacak asgarî süre", "Tertibi bozanın dem ödemesi (Ebû Hanîfe)"]
    },
    alimler: ["ebuhanife", "malik", "safii", "ahmed", "kasani", "nevevi", "ibnkudame", "karadavi"],
    kaynaklar: ["Kâsânî, Bedâiu's-sanâyi', “Kitâbü'l-hac”", "Nevevî, el-Îzâh fî menâsiki'l-hac", "İbn Kudâme, el-Muğnî, “Kitâbü'l-hac”", "İbn Rüşd, Bidâyetü'l-müctehid", "İbn Teymiyye, Mecmûu'l-fetâvâ, c. 26 (Menâsik)", "TDV İslâm Ansiklopedisi, “Remy-i Cimâr”, “Müzdelife” maddeleri"],
    ilgili: ["cem", "kurban"]
  }
);
