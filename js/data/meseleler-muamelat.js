// Meseleler — muâmelât, aile ve çağdaş meseleler.
window.MESELELER.push(
  {
    id: "faiz", baslik: "Ribâ ve Banka Faizi", alan: "Fıkıh · Muâmelât",
    soru: "Kur'an'ın haram kıldığı ribâ nedir? Hangi mallarda ve hangi işlemlerde gerçekleşir? Bugünkü banka faizi ve kredi bu kapsama girer mi?",
    ozet: "Ribânın haramlığı kesindir. Mezhepler, ribânın hangi mallarda cereyan ettiğini belirleyen illette ayrılır. Banka faizini çağdaş fıkıh akademilerinin büyük çoğunluğu ribâ sayar; buna karşı çıkan azınlık görüşler de vardır.",
    ayetler: [
      ["Bakara 275", "وَأَحَلَّ اللّٰهُ الْبَيْعَ وَحَرَّمَ الرِّبَا", "Allah alışverişi helal, ribâyı haram kılmıştır."],
      ["Bakara 278-279", "يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللّٰهَ وَذَرُوا مَا بَقِيَ مِنَ الرِّبَا إِنْ كُنْتُمْ مُؤْمِنِينَ ۝ فَإِنْ لَمْ تَفْعَلُوا فَأْذَنُوا بِحَرْبٍ مِنَ اللّٰهِ وَرَسُولِهِ ۖ وَإِنْ تُبْتُمْ فَلَكُمْ رُءُوسُ أَمْوَالِكُمْ لَا تَظْلِمُونَ وَلَا تُظْلَمُونَ", "Ey iman edenler! Allah'tan korkun ve gerçekten müminseniz ribâdan geri kalanı bırakın. Bunu yapmazsanız Allah'a ve Resûlü'ne karşı savaşa girdiğinizi bilin. Tövbe ederseniz anaparanız sizindir; ne zulmetmiş ne de zulme uğramış olursunuz."],
      ["Âl-i İmrân 130", "يَا أَيُّهَا الَّذِينَ آمَنُوا لَا تَأْكُلُوا الرِّبَا أَضْعَافًا مُضَاعَفَةً", "Ey iman edenler! Ribâyı kat kat artırılmış olarak yemeyin."]
    ],
    hadisler: [
      ["الذَّهَبُ بِالذَّهَبِ وَالْفِضَّةُ بِالْفِضَّةِ وَالْبُرُّ بِالْبُرِّ وَالشَّعِيرُ بِالشَّعِيرِ وَالتَّمْرُ بِالتَّمْرِ وَالْمِلْحُ بِالْمِلْحِ مِثْلًا بِمِثْلٍ سَوَاءً بِسَوَاءٍ يَدًا بِيَدٍ", "Altın altınla, gümüş gümüşle, buğday buğdayla, arpa arpayla, hurma hurmayla, tuz tuzla misli misline, eşit olarak ve peşin olarak (değiştirilir). Cinsler farklı olursa peşin olmak şartıyla dilediğiniz gibi satın.", "Müslim (Ubâde b. Sâmit)", "Sahih"],
      ["", "Vedâ hutbesi: Câhiliye ribâsı kaldırılmıştır; kaldırdığım ilk ribâ amcam Abbâs b. Abdülmuttalib'in ribâsıdır.", "Müslim", "Sahih"],
      ["", "Resûlullah ribâ yiyene, yedirene, onu yazana ve şahitlik edene lanet etti ve “Onlar (günahta) eşittir” buyurdu.", "Müslim", "Sahih"]
    ],
    gorusler: [
      { ekol: "Hanefî", hukum: "Ribânın illeti <b>kadr (ölçek veya tartı ile satılma) ve cins birliği</b>dir. Ölçülen veya tartılan her mal, kendi cinsiyle değiştirilince eşitlik ve peşinlik şarttır.",
        delil: "Hadisteki altı madde, ölçek ve tartıyla alınıp satılan malların örnekleridir; hüküm bu ortak vasfa bağlanır.", alimler: ["ebuhanife", "kasani", "serahsi"] },
      { ekol: "Mâlikî", hukum: "Altın ve gümüşte illet <b>semeniyyet</b> (para olma); gıda maddelerinde <b>temel gıda olup saklanabilme</b> (iktiyât ve iddihâr).",
        delil: "Hadisteki maddeler para ve temel gıda gruplarını temsil eder; ribâ, hayatın temel ihtiyaçlarında istismarı önlemek içindir.", alimler: ["malik", "ibnrusd"] },
      { ekol: "Şâfiî", hukum: "Altın ve gümüşte illet <b>semeniyyet</b>, diğer dört maddede <b>yiyecek olma</b> (ta'm).",
        delil: "Hadisin maddeleri iki gruba ayrılır: değer ölçüsü olanlar ve yiyecekler.", alimler: ["safii", "nevevi"] },
      { ekol: "Hanbelî", hukum: "Meşhur rivayette Hanefîler gibi <b>ölçek ve tartı</b>; diğer rivayetlerde Şâfiî görüşüne yakın. İbn Teymiyye altın ve gümüşte semeniyyeti tercih eder.",
        delil: "Hadisin maddelerinin ortak vasfı.", alimler: ["ahmed", "ibnkudame", "ibnteymiyye"] }
    ],
    koken: `<p>Ribâ iki türlüdür: <b>ribe'n-nesîe</b> (vade karşılığı fazlalık: “borcu ödemezsen artırırım” şeklindeki Câhiliye ribâsı) ve <b>ribe'l-fadl</b> (aynı cinsten malların peşin değişiminde fazlalık). Kur'an'ın açıkça yasakladığı birincisidir; ikincisi hadisle sabittir.</p>
      <ul>
        <li><b>İllet farkı:</b> Hadiste sayılan altı maddeye hangi malların kıyas edileceği, illetin ne olduğuna bağlıdır. Bu da bugün kâğıt paranın ribevî bir mal olup olmadığı sorusunu belirler. Semeniyyeti illet sayanlara göre kâğıt para da ribevîdir; günümüz âlimlerinin büyük çoğunluğu bu görüştedir.</li>
        <li><b>İbn Abbâs'ın görüşü:</b> İbn Abbâs başta “Ribâ ancak vadede olur” (lâ ribâ illâ fi'n-nesîe) diyerek ribe'l-fadl'ı kabul etmemiş, sonra bu görüşünden döndüğü rivayet edilmiştir.</li>
        <li><b>“Kat kat” kaydı:</b> Âl-i İmrân 130'daki “kat kat” ifadesinin bir kayıt mı yoksa o dönemdeki uygulamanın tasviri mi olduğu tartışılmıştır. Cumhur ve çağdaş akademiler, Bakara 278'deki “anaparanız sizindir” ifadesine dayanarak az veya çok her fazlalığın yasak olduğunu söyler.</li>
      </ul>`,
    cagdas: `<ul>
        <li><b>İslam İşbirliği Teşkilatı'na bağlı Uluslararası İslam Fıkıh Akademisi</b> (Cidde, 1985) ve <b>Ezher İslami Araştırmalar Akademisi</b> (1965), bankaların verdiği ve aldığı faizin haram ribâ olduğuna karar vermiştir.</li>
        <li>Mısır Müftüsü ve sonra Ezher Şeyhi olan <b>Muhammed Seyyid Tantâvî</b>, belirli bankacılık işlemlerinin bir yatırım ortaklığı sayılabileceğine dair farklı bir görüş ortaya koymuş ve bu görüş geniş bir tartışma doğurmuştur.</li>
        <li><b>Diyanet İşleri Başkanlığı</b>, banka faizinin haram ribâ olduğu görüşündedir; konut gibi temel ihtiyaçlarda faizli krediye başvurmanın ancak gerçek bir zaruret hâlinde söz konusu olabileceğini ve zaruretin dar yorumlanması gerektiğini belirtir. <b>TDV İslâm Ansiklopedisi</b>'nin “Ribâ” ve “Faiz” maddeleri tarihî ve fıkhî tartışmayı ayrıntılı olarak verir.</li>
        <li>Bu tartışmanın sonucunda <b>katılım bankacılığı</b> doğmuştur. Onun murâbaha gibi ürünlerinin ribâdan gerçekten farklı olup olmadığı da ayrı bir çağdaş tartışma konusudur.</li>
      </ul>`,
    durum: {
      kesin: ["Ribânın haram olduğu (Kur'an, Sünnet, icmâ)", "Borca vade karşılığı fazlalık eklemenin (Câhiliye ribâsı) haram olduğu"],
      cogunluk: ["Kâğıt paranın ribevî mal sayıldığı", "Banka faizinin ribâ olduğu (fıkıh akademileri)"],
      tartismali: ["Ribânın illeti", "Zaruret sınırının (konut, eğitim) belirlenmesi", "Bazı katılım bankacılığı ürünlerinin meşruiyeti"]
    },
    alimler: ["ebuhanife", "malik", "safii", "ahmed", "ibnrusd", "ibnteymiyye", "kasani"],
    kaynaklar: ["Cessâs, Ahkâmü'l-Kur'ân, Bakara 275-279", "Kâsânî, Bedâiu's-sanâi', Kitâbü'l-büyû'", "İbn Rüşd, Bidâyetü'l-müctehid, “Bâbü'r-ribâ”", "İbn Kudâme, el-Muğnî, “Bâbü'r-ribâ ve's-sarf”", "Uluslararası İslam Fıkıh Akademisi, 2. Dönem Kararları (1985)", "TDV İslâm Ansiklopedisi, “Ribâ” ve “Faiz” maddeleri"],
    ilgili: ["fitre"]
  },
  {
    id: "uctalak", baslik: "Tek Mecliste Üç Talak", alan: "Fıkıh · Aile",
    soru: "Bir koca, eşine bir defada (“Seni üç talakla boşadım” veya üç kez arka arkaya) üç talak verirse kaç talak vâki olur?",
    ozet: "Dört mezhep, bu şekilde boşamanın sünnete aykırı (bid'î) olduğunu ama üç talak olarak geçerli olduğunu kabul eder. İbn Teymiyye ve İbnü'l-Kayyim ise bunun tek talak sayılacağını savunmuş; bu görüş çağdaş aile hukuku düzenlemelerinin büyük kısmına esas olmuştur.",
    ayetler: [
      ["Bakara 229", "الطَّلَاقُ مَرَّتَانِ ۖ فَإِمْسَاكٌ بِمَعْرُوفٍ أَوْ تَسْرِيحٌ بِإِحْسَانٍ", "Boşama iki defadır. Ondan sonra ya iyilikle tutmak ya da güzellikle bırakmak gerekir."],
      ["Bakara 230", "فَإِنْ طَلَّقَهَا فَلَا تَحِلُّ لَهُ مِنْ بَعْدُ حَتَّى تَنْكِحَ زَوْجًا غَيْرَهُ", "Eğer onu (üçüncü kez) boşarsa, kadın başka bir kocayla evlenmedikçe ona helal olmaz."],
      ["Talâk 1", "يَا أَيُّهَا النَّبِيُّ إِذَا طَلَّقْتُمُ النِّسَاءَ فَطَلِّقُوهُنَّ لِعِدَّتِهِنَّ", "Ey Peygamber! Kadınları boşayacağınız zaman, iddetlerini gözeterek boşayın."]
    ],
    hadisler: [
      ["كَانَ الطَّلَاقُ عَلَى عَهْدِ رَسُولِ اللهِ ﷺ وَأَبِي بَكْرٍ وَسَنَتَيْنِ مِنْ خِلَافَةِ عُمَرَ طَلَاقُ الثَّلَاثِ وَاحِدَةً، فَقَالَ عُمَرُ: إِنَّ النَّاسَ قَدِ اسْتَعْجَلُوا فِي أَمْرٍ قَدْ كَانَتْ لَهُمْ فِيهِ أَنَاةٌ، فَلَوْ أَمْضَيْنَاهُ عَلَيْهِمْ، فَأَمْضَاهُ عَلَيْهِمْ", "İbn Abbâs: Resûlullah, Ebû Bekir ve Ömer'in hilâfetinin ilk iki yılı döneminde üç talak bir sayılırdı. Ömer dedi ki: “İnsanlar, kendilerine mühlet tanınmış bir işte acele etmeye başladılar; bunu aleyhlerine yürürlüğe koysak.” Ve yürürlüğe koydu.", "Müslim", "Sahih"],
      ["", "Bir adamın karısını üç talakla bir defada boşadığı haber verilince Hz. Peygamber kızarak “Ben aranızdayken Allah'ın Kitabı ile oynanıyor mu?” buyurdu.", "Nesâî", "Sıhhati tartışılmıştır"],
      ["", "Rükâne'nin karısını bir mecliste üç talakla boşadığı ve Hz. Peygamber'in bunu bir saydığı rivayeti; başka bir rivayette ise Rükâne'nin “elbette” (bette) lafzıyla boşadığı ve Hz. Peygamber'in niyetini sorduğu.", "Ahmed; Ebû Dâvûd", "Rivayetler arasında farklılık ve sıhhat tartışması vardır"]
    ],
    gorusler: [
      { ekol: "Hanefî", hukum: "Üç talak vâki olur; bu şekilde boşamak bid'attır ve günahtır.",
        delil: "Hz. Ömer'in uygulaması ve sahabenin ona muvafakati (sükûtî icmâ); boşama söz verenin sözüyle bağlanır.", alimler: ["ebuhanife", "serahsi", "kasani"] },
      { ekol: "Mâlikî", hukum: "Üç talak vâki olur; bid'î talaktır.",
        delil: "Sahabe uygulaması ve Medine ameli.", alimler: ["malik"] },
      { ekol: "Şâfiî", hukum: "Üç talak vâki olur. Şâfiî'ye göre bir defada üç talak vermek bid'at da değildir, mubahtır.",
        delil: "Talak kocanın hakkıdır, istediği sayıyı kullanabilir; Uveymir el-Aclânî'nin li'ândan sonra karısını üç talakla boşaması ve Hz. Peygamber'in buna itiraz etmemesi.", alimler: ["safii", "nevevi"] },
      { ekol: "Hanbelî", hukum: "Mezhebin meşhur görüşü üç talak vâki olduğudur.", delil: "Cumhurun delilleri.", alimler: ["ahmed", "ibnkudame"] },
      { ekol: "İbn Teymiyye ve İbnü'l-Kayyim", hukum: "Tek mecliste verilen üç talak <b>bir talak</b> sayılır.",
        delil: "Bakara 229'daki “iki defa” (merratân) ifadesi, talakın ayrı ayrı zamanlarda verilmesini gerektirir. İbn Abbâs'ın Müslim'deki haberi, Hz. Peygamber döneminde uygulamanın bu olduğunu gösterir. Hz. Ömer'in uygulaması, insanları caydırmak için konmuş bir siyasî-tâzîrî tedbirdir; değişmez bir hüküm değildir.", alimler: ["ibnteymiyye", "ibnulkayyim"] }
    ],
    koken: `<ul>
        <li><b>İbn Abbâs haberinin yorumu:</b> Cumhur bu haberi ya “Elbette boşadım” gibi tekrarlı ama tek talak kastedilen sözlere, ya da başka tevillere hamleder. İbn Teymiyye onu zahirine göre alır.</li>
        <li><b>Hz. Ömer'in uygulamasının niteliği:</b> Bir icmâ mı, yoksa duruma bağlı bir yönetim tedbiri mi? Birincisini kabul eden onu bağlayıcı sayar; ikincisini kabul eden, şartlar değişince asla dönülebileceğini söyler.</li>
        <li><b>Sözün etkisi:</b> Cumhur, kocanın “üç” demesini kendi hakkını kullanması olarak geçerli sayar; diğer görüş, Kur'an'ın talak için öngördüğü aşamalı düzenin bir sözle atlanamayacağını söyler.</li>
      </ul>`,
    cagdas: `<p>Bu meselede çağdaş uygulama büyük ölçüde azınlık görüşüne yönelmiştir. <b>Mısır</b>, 1929 tarihli 25 sayılı kanunla, sayı içeren boşama sözünün tek talak sayılacağını kabul etmiş; birçok Arap ülkesinin aile kanunları da benzer düzenlemeler yapmıştır.</p>
      <p>Türkiye'de boşanma medeni hukukla mahkeme kararıyla gerçekleştiğinden, mesele fetva bağlamında ve dinî vicdan açısından gündeme gelir. Âlimler, bu konuda fetva vermeden önce kişinin niyetinin, söylediği sözün ve hâlinin (öfke, sarhoşluk, zorlama) ayrıca incelenmesi gerektiğini vurgular. Hanefî mezhebinde de şiddetli öfke anında verilen talakın geçerliliği tartışılmıştır; <a href="#/alim/ibnabidin">İbn Âbidîn</a> bu konuda ayrıntılı açıklamalar yapar.</p>`,
    durum: {
      kesin: ["Talak hakkının üç ile sınırlı olduğu", "Üçüncü talaktan sonra başka bir evlilik olmadan yeniden nikâhın helal olmadığı", "Talakın Kur'an'ın öngördüğü aşamalı düzene göre verilmesinin sünnet olduğu"],
      cogunluk: ["Tek mecliste üç talakın üç sayıldığı (dört mezhep)"],
      tartismali: ["Tek talak sayılması görüşü (İbn Teymiyye, İbnü'l-Kayyim)", "Hz. Ömer uygulamasının niteliği", "Öfke hâlinde verilen talakın geçerliliği"]
    },
    alimler: ["ebuhanife", "malik", "safii", "ahmed", "ibnteymiyye", "ibnulkayyim", "ibnabidin"],
    kaynaklar: ["Nevevî, Şerhu Müslim, Kitâbü't-talâk", "İbn Kudâme, el-Muğnî, Kitâbü't-talâk", "İbn Teymiyye, Mecmûu'l-fetâvâ, c. 33", "İbnü'l-Kayyim, İ'lâmü'l-muvakkıîn, c. 3", "İbn Âbidîn, Reddü'l-muhtâr, Kitâbü't-talâk", "TDV İslâm Ansiklopedisi, “Talâk” maddesi"],
    ilgili: ["sahitlik"]
  },
  {
    id: "sahitlik", baslik: "Kadının Şahitliği", alan: "Fıkıh · Aile ve Yargı",
    soru: "Bakara 282'deki “bir erkek ve iki kadın” hükmü kadının şahitliğinin genel olarak erkeğinkinin yarısı olduğunu mu gösterir? Kadının şahitliği hangi konularda ve nasıl kabul edilir?",
    ozet: "Klasik mezhepler, borç gibi mali konularda iki kadının bir erkeğe denk sayıldığını, had ve kısas cezalarında kadın şahitliğinin kabul edilmediğini söyler; ama kadınlara özgü konularda tek başına kadın şahitliğini kabul eder. İbn Teymiyye ve İbnü'l-Kayyim âyetin belgelendirmeyle ilgili olduğunu, yargılamada hâkimin her güvenilir delille hüküm verebileceğini söyler.",
    ayetler: [
      ["Bakara 282", "وَاسْتَشْهِدُوا شَهِيدَيْنِ مِنْ رِجَالِكُمْ ۖ فَإِنْ لَمْ يَكُونَا رَجُلَيْنِ فَرَجُلٌ وَامْرَأَتَانِ مِمَّنْ تَرْضَوْنَ مِنَ الشُّهَدَاءِ أَنْ تَضِلَّ إِحْدَاهُمَا فَتُذَكِّرَ إِحْدَاهُمَا الْأُخْرَى", "Erkeklerinizden iki şahit tutun. Eğer iki erkek yoksa, rıza gösterdiğiniz şahitlerden bir erkek ve iki kadın (yeterlidir); biri unutursa diğeri ona hatırlatsın diye."],
      ["Nûr 6-9", "وَالَّذِينَ يَرْمُونَ أَزْوَاجَهُمْ ... وَيَدْرَأُ عَنْهَا الْعَذَابَ أَنْ تَشْهَدَ أَرْبَعَ شَهَادَاتٍ بِاللّٰهِ", "(Li'ân âyetleri) ...Kadının da Allah adına dört kez şahitlik etmesi ondan cezayı kaldırır. (Li'ânda kadının şahitliği erkeğinkine eşittir.)"]
    ],
    hadisler: [
      ["", "Ukbe b. Hâris'in evlendiği kadına, bir kadının ikisini de emzirdiğini söylemesi üzerine Hz. Peygamber “Nasıl (birlikte kalırsın), böyle söylendiği hâlde?” buyurdu ve Ukbe ondan ayrıldı.", "Buhârî", "Sahih (tek kadının şahitliği)"],
      ["", "Zührî'den: Hudud (had cezaları) konusunda kadınların şahitliğinin kabul edilmemesi sünnet olarak süregelmiştir.", "İbn Ebî Şeybe", "Tâbiî sözü"]
    ],
    gorusler: [
      { ekol: "Hanefî", hukum: "Mali konularda ve nikâh, talak, vekâlet, vasiyet gibi bedenî ceza dışındaki hususlarda iki erkek veya bir erkek ve iki kadın şahitliği kabul edilir. Had ve kısasta kabul edilmez. Doğum, kızlık, kadınların ayıpları gibi erkeklerin bilemeyeceği konularda tek güvenilir kadının şahitliği yeterlidir.",
        delil: "Bakara 282'nin genelliği, mali olmayan hakları da kapsar. Ukbe hadisi ve doğum konusundaki rivayetler.", alimler: ["ebuhanife", "kasani"] },
      { ekol: "Mâlikî", hukum: "Bir erkek ve iki kadın şahitliği yalnız mali konularda kabul edilir; nikâh ve talak gibi konularda iki erkek gerekir. Kadınlara özgü konularda iki kadının şahitliği yeterlidir.",
        delil: "Âyet borç bağlamında gelmiştir; hüküm mal hakları ile sınırlıdır.", alimler: ["malik"] },
      { ekol: "Şâfiî", hukum: "Mali konularda bir erkek ve iki kadın; nikâh, talak ve bedenî cezalarda yalnız erkek şahit; kadınlara özgü konularda dört kadın.",
        delil: "İki kadın bir erkeğe denk olduğundan, normalde iki erkek gereken yerde dört kadın gerekir.", alimler: ["safii", "nevevi"] },
      { ekol: "Hanbelî", hukum: "Mali konularda bir erkek ve iki kadın; kadınlara özgü konularda bir güvenilir kadının şahitliği yeterlidir.",
        delil: "Ukbe hadisi.", alimler: ["ahmed", "ibnkudame"] },
      { ekol: "İbn Teymiyye ve İbnü'l-Kayyim", hukum: "Âyet, hakkı korumak için senet ve şahit tutmayı (işhâd) düzenler; bu, yargıda ispatın (beyyine) sınırını çizmez. Hâkim, hakkı ortaya koyan her delile göre hüküm verir; güvenilir bir kadının şahitliği, şartlar uygunsa tek başına da kabul edilebilir.",
        delil: "Âyetteki “biri unutursa diğeri hatırlatsın” gerekçesi, o dönemde kadınların ticari işlemlere daha az katılmasıyla ilgilidir; hüküm bu gerekçeye bağlıdır. “Beyyine” kelimesi Kur'an ve Sünnet'te belirli bir sayı değil, hakkı açığa çıkaran şey demektir.", alimler: ["ibnteymiyye", "ibnulkayyim"] }
    ],
    koken: `<ul>
        <li><b>Âyetin konusu:</b> Bakara 282, borç akdinin yazılması ve belgelendirilmesi bağlamındadır. Bu hüküm mahkemede ispatın genel kuralı mıdır, yoksa hak sahibine verilmiş bir ihtiyat tavsiyesi midir?</li>
        <li><b>Gerekçenin (illet) belirlenmesi:</b> “Biri unutursa” ifadesi kadının doğasıyla mı, yoksa o dönemdeki sosyal tecrübe eksikliğiyle mi ilgilidir? İkinci yorum, hükmün şartlara bağlı olabileceği sonucuna götürür.</li>
        <li><b>Hudud ve kısasta ihtiyat:</b> Şüpheyle cezanın düşmesi (dera'ü'l-hudûd bi'ş-şübühât) ilkesi gereği, bu alanlarda şahitlik şartları bütün şahitler için ağırlaştırılmıştır.</li>
        <li><b>Konuya göre farklılık:</b> Bütün mezheplerin, kadınlara özgü konularda erkek şahidi hiç aramaması, meselenin “kadın erkeğin yarısıdır” şeklinde genel bir ilke olmadığını gösterir. Li'ânda kadının şahitliği erkeğinkine eşittir.</li>
      </ul>`,
    cagdas: `<p><a href="#/alim/karadavi">Karadâvî</a> başta olmak üzere birçok çağdaş âlim ve <b>Mahmûd Şeltût</b> gibi Ezher şeyhleri, âyetin belgelendirme ile ilgili olduğunu, şahitlikte asıl ölçünün güvenilirlik ve konuya vâkıf olma olduğunu vurgulamıştır.</p>
      <p>Modern yargı sistemlerinde şahitlik, hâkimin takdirine bırakılmış bir delil türü olarak düzenlenmiştir. <b>TDV İslâm Ansiklopedisi</b>'nin “Şahitlik” maddesi klasik ve çağdaş görüşleri ayrıntılı olarak verir.</p>`,
    durum: {
      kesin: ["Kadının şahitliğinin kabul edildiği", "Li'ânda kadının şahitliğinin erkeğinkine eşit olduğu", "Şahitte adalet ve güvenilirliğin şart olduğu"],
      cogunluk: ["Mali konularda bir erkek ve iki kadın şahitliği", "Had ve kısasta kadın şahitliğinin kabul edilmemesi"],
      tartismali: ["Âyetin yargıda ispatın genel kuralı olup olmadığı", "Gerekçenin değişmesiyle hükmün değişip değişmeyeceği", "Nikâh ve talakta kadın şahitliği"]
    },
    alimler: ["ebuhanife", "malik", "safii", "ahmed", "ibnteymiyye", "ibnulkayyim", "karadavi"],
    kaynaklar: ["Cessâs, Ahkâmü'l-Kur'ân, Bakara 282", "Kurtubî, el-Câmi' li-ahkâmi'l-Kur'ân, Bakara 282", "İbn Kudâme, el-Muğnî, Kitâbü'ş-şehâdât", "İbnü'l-Kayyim, et-Turuku'l-hukmiyye", "TDV İslâm Ansiklopedisi, “Şahit” / “Şehâdet” maddeleri"],
    ilgili: ["uctalak"]
  },
  {
    id: "musiki", baslik: "Musiki ve Çalgı Aletleri", alan: "Fıkıh · Gündelik Hayat",
    soru: "Şarkı söylemek ve dinlemek, çalgı aletleri çalmak ve dinlemek dinen ne hükümdedir?",
    ozet: "Dört mezhebin çoğunluk görüşü, düğün ve bayram gibi durumlarda def dışında çalgıların haram olduğudur. Buna karşı İbn Hazm ve Gazâlî gibi âlimler, musikiyi içeriğine ve etkisine göre değerlendirmiştir. Tartışmanın merkezinde Buhârî'deki bir rivayetin senedi ve âyetteki “lehve'l-hadîs” ifadesinin manası vardır.",
    ayetler: [
      ["Lokmân 6", "وَمِنَ النَّاسِ مَنْ يَشْتَرِي لَهْوَ الْحَدِيثِ لِيُضِلَّ عَنْ سَبِيلِ اللّٰهِ بِغَيْرِ عِلْمٍ", "İnsanlardan öylesi var ki, bilgisizce Allah yolundan saptırmak için boş sözü satın alır."],
      ["Necm 59-61", "أَفَمِنْ هَذَا الْحَدِيثِ تَعْجَبُونَ ۝ وَتَضْحَكُونَ وَلَا تَبْكُونَ ۝ وَأَنْتُمْ سَامِدُونَ", "Şimdi siz bu söze mi şaşıyorsunuz? Gülüyor ve ağlamıyorsunuz; siz gaflet içinde eğleniyorsunuz."]
    ],
    hadisler: [
      ["لَيَكُونَنَّ مِنْ أُمَّتِي أَقْوَامٌ يَسْتَحِلُّونَ الْحِرَ وَالْحَرِيرَ وَالْخَمْرَ وَالْمَعَازِفَ", "Ümmetimden öyle topluluklar olacak ki zinayı, ipeği, içkiyi ve çalgıları (meâzif) helal sayacaklar.", "Buhârî (mu'allak olarak)", "İbn Hazm munkatı' saymış; İbn Hacer ve başkaları muttasıl yollarını göstermiştir"],
      ["", "Hz. Âişe: Bayram günü yanımda iki cariye şarkı söylüyordu; Ebû Bekir girip “Resûlullah'ın evinde şeytan çalgısı mı?” dedi. Hz. Peygamber “Bırak onları ey Ebû Bekir; her kavmin bir bayramı vardır, bu da bizim bayramımızdır” buyurdu.", "Buhârî, Müslim", "Sahih"],
      ["فَصْلُ مَا بَيْنَ الْحَلَالِ وَالْحَرَامِ الدُّفُّ وَالصَّوْتُ فِي النِّكَاحِ", "Helal (nikâh) ile haramı ayıran şey, nikâhta def çalmak ve sestir (ilan etmektir).", "Tirmizî, Nesâî, İbn Mâce", "Hasen"]
    ],
    gorusler: [
      { ekol: "Hanefî", hukum: "Çalgı çalmak ve dinlemek haramdır; düğünde def caizdir. Şarkı söylemek de, özellikle kazanç vasıtası yapılması ve fıska götürmesi durumunda mekruh veya haram sayılmıştır.",
        delil: "Lokmân 6'nın İbn Mes'ûd tarafından “şarkı” ile tefsir edilmesi; meâzif hadisi.", alimler: ["ebuhanife", "ibnabidin"] },
      { ekol: "Mâlikî", hukum: "Çalgılar genel olarak haramdır; düğünde def ve bazı âlimlere göre benzeri basit aletler caizdir.",
        delil: "Medine ehlinin uygulaması ve meâzif hadisi.", alimler: ["malik", "kurtubi"] },
      { ekol: "Şâfiî", hukum: "Telli ve üflemeli çalgılar haramdır; def düğün ve sevinç günlerinde caizdir. Çalgısız şarkı mekruhtur.",
        delil: "Meâzif hadisi.", alimler: ["safii", "nevevi"] },
      { ekol: "Hanbelî", hukum: "Çalgılar haramdır; düğünde def caizdir.", delil: "Meâzif hadisi.", alimler: ["ahmed", "ibnkudame", "ibnteymiyye"] },
      { ekol: "Gazâlî", hukum: "Semâ (müzik dinlemek) aslen mubahtır; hükmü içeriğe, zamana, dinleyenin hâline ve sonucuna göre değişir. Kalpte güzel duyguları uyandıran ve haramla karışmayan semâ caizdir, bazen müstehap olabilir; şehvet ve fıskı kışkırtan ise haramdır.",
        delil: "Bayram günü şarkı hadisi; seslerin güzelliğinin kendi başına haram olmaması. Haram kılınan, içki meclisleriyle özdeşleşmiş belirli aletlerdir; illet bu özdeşliktir.", alimler: ["gazali"] },
      { ekol: "İbn Hazm (Zâhirî)", hukum: "Musiki ve çalgı caizdir.",
        delil: "Meâzif hadisi munkatı'dır, haramlığa dair başka sahih nas yoktur; nas olmadan haram hükmü verilmez.", alimler: ["ibnhazm"] }
    ],
    koken: `<ul>
        <li><b>Meâzif hadisinin senedi:</b> Buhârî bu rivayeti şeyhi Hişâm b. Ammâr'dan “dedi ki” (kāle) lafzıyla, ta'lîkan nakleder. İbn Hazm bunu senedde kopukluk sayar; İbn Hacer, Tağlîku't-ta'lîk'te muttasıl yollarını göstererek sahih olduğunu savunur.</li>
        <li><b>Hadisin delâleti:</b> Hadis çalgıları içki ve zina ile birlikte sayar. Haram olan çalgının kendisi mi, yoksa bu günahlarla birlikte bulunduğu ortam mı?</li>
        <li><b>Lokmân 6'nın tefsiri:</b> İbn Mes'ûd ve İbn Abbâs “lehve'l-hadîs”i şarkı ile tefsir etmiştir. Bazı müfessirler ise âyetin bağlamının, insanları Kur'an'dan alıkoymak için kullanılan her türlü boş sözü kastettiğini söyler.</li>
        <li><b>İllet:</b> Haramlık sesin kendisinde mi, yoksa fısk, gaflet ve haramla bağlantıda mı? Gazâlî ikincisini savunur ve hükmü buna göre ayrıntılandırır.</li>
      </ul>`,
    cagdas: `<p><a href="#/alim/karadavi">Karadâvî</a>, Fıkhu'l-ğınâ ve'l-mûsîkā adlı eserinde Gazâlî'nin yaklaşımını geliştirerek, içeriği İslam ahlâkına aykırı olmayan ve haramla karışmayan musikiyi caiz görmüştür.</p>
      <p><b>Diyanet</b>, musikinin hükmünü içeriğine ve kişi üzerindeki etkisine göre değerlendirir: Söz, ezgi ve icra ortamı dinin ve ahlâkın ilkelerine aykırı değilse caiz görür. Türk-İslam geleneğinde ilahi, mevlid, tasavvuf musikisi ve mehter gibi köklü bir musiki birikiminin bulunduğunu da hatırlatmak gerekir.</p>
      <p>Bugün daha selefî çizgideki birçok âlim ise çoğunluk görüşünü, yani çalgıların haramlığını savunmaya devam etmektedir.</p>`,
    durum: {
      kesin: ["Haram içerikli (şirk, fısk, müstehcenlik) söz ve icranın haram olduğu", "Düğünde def çalmanın meşru olduğu"],
      cogunluk: ["Def dışındaki çalgıların haram olduğu (dört mezhep)"],
      tartismali: ["Meâzif hadisinin senedi ve delâleti", "İçeriği uygun musikinin hükmü", "Haramlığın illeti"]
    },
    alimler: ["ebuhanife", "malik", "safii", "ahmed", "gazali", "ibnhazm", "ibnhacer", "karadavi"],
    kaynaklar: ["Gazâlî, İhyâu ulûmi'd-dîn, “Kitâbü âdâbi's-semâ' ve'l-vecd”", "İbn Hazm, el-Muhallâ, c. 9", "İbn Hacer, Fethu'l-bârî, “Kitâbü'l-eşribe”", "Kurtubî, el-Câmi', Lokmân 6", "Karadâvî, Fıkhu'l-ğınâ ve'l-mûsîkā", "TDV İslâm Ansiklopedisi, “Mûsiki” maddesi"],
    ilgili: []
  },
  {
    id: "organ", baslik: "Organ Nakli ve Bağışı", alan: "Fıkıh · Çağdaş Meseleler",
    soru: "Bir insanın hayatı veya sağlığı için, yaşayan veya ölmüş bir kişiden organ alınması ve nakli caiz midir? Kişi ölümünden sonra organlarını bağışlayabilir mi?",
    ozet: "Klasik dönemde bu teknik yoktu; bu yüzden mesele, klasik ilkelerden yola çıkan çağdaş bir ictihaddır. Fıkıh akademilerinin ve Diyanet'in kararı caiz olduğu yönündedir; insan bedeninin dokunulmazlığını öne çıkaran muhalif görüşler de vardır.",
    ayetler: [
      ["Mâide 32", "وَمَنْ أَحْيَاهَا فَكَأَنَّمَا أَحْيَا النَّاسَ جَمِيعًا", "Kim bir canı kurtarırsa, bütün insanları kurtarmış gibi olur."],
      ["İsrâ 70", "وَلَقَدْ كَرَّمْنَا بَنِي آدَمَ", "Andolsun ki biz Âdemoğullarını şerefli kıldık."],
      ["Bakara 173", "فَمَنِ اضْطُرَّ غَيْرَ بَاغٍ وَلَا عَادٍ فَلَا إِثْمَ عَلَيْهِ", "Kim, başkasının hakkına saldırmamak ve zaruret sınırını aşmamak üzere (yemeye) mecbur kalırsa, ona günah yoktur."],
      ["Bakara 195", "وَلَا تُلْقُوا بِأَيْدِيكُمْ إِلَى التَّهْلُكَةِ", "Kendi ellerinizle kendinizi tehlikeye atmayın."]
    ],
    hadisler: [
      ["كَسْرُ عَظْمِ الْمَيِّتِ كَكَسْرِهِ حَيًّا", "Ölünün kemiğini kırmak, onu diriyken kırmak gibidir.", "Ebû Dâvûd, İbn Mâce", "Sahih (muhalif görüşün delili)"],
      ["", "Ey Allah'ın kulları, tedavi olun; çünkü Allah, ihtiyarlık dışında, şifasını yaratmadığı hiçbir hastalık yaratmamıştır.", "Ebû Dâvûd, Tirmizî", "Sahih"],
      ["", "Burnu kesilen Arfece b. Es'ad'ın Hz. Peygamber'in izniyle altından bir burun edinmesi.", "Ebû Dâvûd, Tirmizî", "Hasen (tedavide normalde yasak olanın kullanılmasına delil)"]
    ],
    gorusler: [
      { ekol: "Klasik ilkeler (dört mezhep)", hukum: "Klasik fıkıhta organ nakli yoktur; ancak meseleye kaynaklık eden ilkeler vardır: İnsan ölü de olsa saygındır; insanın bir parçasından yararlanmak kural olarak caiz değildir. Öte yandan zaruret hâlinde haramlar mubah olur.",
        delil: "Hanefî kaynaklarda “insan, ölüsü de olsa mükerremdir, parçasından yararlanılmaz” ilkesi yer alır. Şâfiî ve bazı Hanbelîler, ölmek üzere olan birinin hayatını kurtarmak için ölü insan etinden yemesini caiz görmüştür; bu, çağdaş tartışmada kıyas zemini olarak kullanılır.", alimler: ["kasani", "nevevi", "ibnkudame"] },
      { ekol: "Çağdaş çoğunluk görüşü", hukum: "Belirli şartlarla caizdir: tıbben zorunlu olması, başarı ihtimalinin yüksek olması, vericinin hayatını tehlikeye atmaması (yaşayan vericide), alım-satım konusu yapılmaması ve rızanın bulunması.",
        delil: "Can kurtarmanın üstün değeri (Mâide 32); zaruret ilkesi; “İki zarardan büyüğü küçüğüyle def edilir” ve “Özel zarar, genel zararı önlemek için katlanılır” kaideleri. Organın toprağa karışması yerine bir hayatı kurtarması, ölünün saygınlığına aykırı değildir.", alimler: ["karadavi"] },
      { ekol: "Muhalif çağdaş görüş", hukum: "Caiz değildir veya çok dar istisnalarla caizdir.",
        delil: "İnsan bedeninin sahibi Allah'tır, insan ondan dilediği gibi tasarruf edemez; “Ölünün kemiğini kırmak” hadisi; beyin ölümünün kesin ölüm sayılıp sayılmayacağına dair şüpheler. Mısır'da Muhammed Mütevellî eş-Şa'râvî bu görüşü savunanların başında gelir.", alimler: [] }
    ],
    koken: `<p>Bu bir <b>nevâzil</b> (yeni ortaya çıkan) meselesidir. Doğrudan nas bulunmadığından ictihad, genel ilkeler ve kıyaslarla yapılır. Tartışma şu soruların cevabına bağlıdır:</p>
      <ul>
        <li><b>Kerâmet ile hayat:</b> İnsan bedeninin saygınlığı (kerâmet) ile başka bir insanın hayatını kurtarmak çatıştığında hangisi öncelikli? Makâsıd düşüncesinde canın korunması (hıfzu'n-nefs) zarûriyyâtın en başında gelir.</li>
        <li><b>Mülkiyet ve emanet:</b> İnsan bedeni bir emanet ise kişi onun bir parçasını bağışlayabilir mi?</li>
        <li><b>Ölümün tespiti:</b> Organların büyük kısmı beyin ölümü gerçekleşmiş ama kalbi makineyle çalışan kişilerden alınır. Beyin ölümü şer'an ölüm müdür? Uluslararası İslam Fıkıh Akademisi bu konuda 1986'da bir karar almıştır (aşağıya bak).</li>
      </ul>`,
    cagdas: `<ul>
        <li><b>Diyanet İşleri Başkanlığı Din İşleri Yüksek Kurulu</b>, 6 Mart 1980 tarihli kararıyla organ ve doku naklini belirli şartlarla caiz görmüştür: zaruret bulunması, tedavinin başka yolla mümkün olmaması, başarı ihtimalinin yüksek olması, vericinin veya ölü ise yakınlarının izni ve ücret alınmaması.</li>
        <li><b>Uluslararası İslam Fıkıh Akademisi</b> 1988 yılındaki Cidde toplantısında organ naklini şartlarla caiz görmüştür; 1986 Amman toplantısında ise beyin ölümünü belirli şartlarla ölüm saymıştır.</li>
        <li>Bugün tartışma, caiz olup olmamaktan çok <b>şartlar</b> üzerinde yoğunlaşır: organ ticaretinin yasaklığı, rızanın nasıl alınacağı (açık rıza veya varsayılan rıza), ölümün tespiti ve adil dağıtım.</li>
      </ul>`,
    durum: {
      kesin: ["Can kurtarmanın İslam'da en yüksek değerlerden olduğu", "Organ alım-satımının haram olduğu", "İnsan bedeninin ölü de olsa saygın olduğu"],
      cogunluk: ["Şartlarla organ nakli ve bağışının caiz olduğu (fıkıh akademileri, Diyanet)"],
      tartismali: ["Beyin ölümünün şer'î ölüm sayılması", "Varsayılan rıza sistemi", "Muhalif görüşün delilleri"]
    },
    alimler: ["karadavi", "satibi", "kasani", "nevevi"],
    kaynaklar: ["Diyanet İşleri Başkanlığı Din İşleri Yüksek Kurulu, 6 Mart 1980 tarihli karar", "Uluslararası İslam Fıkıh Akademisi, 4. Dönem Kararları (1988) ve 3. Dönem (1986) beyin ölümü kararı", "Şâtıbî, el-Muvâfakāt (makâsıd)", "TDV İslâm Ansiklopedisi, “Organ Nakli” maddesi"],
    ilgili: ["faiz"]
  }
);
