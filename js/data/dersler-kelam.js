// Kelam — el-Akāidü'n-Nesefiyye sırasıyla (Teftâzânî'nin Şerhu'l-Akāid'i çizgisinde, Mâtürîdî görüşler esas).
// {{metin:akaid-nesefi:ANAHTAR}} işareti metnin ilgili bölümlerini ders içinde gösterir.
(function () {
  const AR = (s) => `<span lang="ar">${s}</span>`;
  window.DERSLER["k-kelam"] = [
    {
      id: "bilgi", title: "Bilginin İmkânı ve Kaynakları",
      body: `
        {{metin:akaid-nesefi:bilgi}}
        <h4>Şerh</h4>
        <p>Nesefî metne <b>bilgi teorisi</b> ile başlar; çünkü akaid delille ispat edilecekse önce bilginin mümkün olduğu ve hangi yollarla elde edildiği belirlenmelidir.</p>
        <ul>
          <li><b>Sofistler (Sûfestâiyye)</b> üç gruptur: <i>inâdiyye</i> (hakikatleri inkâr eder), <i>indiyye</i> (hakikati kişinin kanaatine bağlar), <i>lâedriyye</i> (bilinemeyeceğini söyler). Ehl-i hak hepsini reddeder.</li>
          <li><b>Duyular:</b> Her duyu yalnız kendi alanına dair bilgi verir; göz işitmez, kulak görmez.</li>
          <li><b>Haber-i sâdık:</b> Mütevâtir haber <i>zarûrî</i> bilgi verir. Peygamberin haberi ise mûcizeyle doğruluğu ispat edildiği için <i>istidlâlî</i> bilgi verir; kesinlikte zarûrî bilgiye denktir.</li>
          <li><b>Akıl:</b> Bedîhî (ilk bakışta) bilgi zarûrî, istidlalle elde edilen kesbîdir.</li>
          <li><b>İlham</b> sahibini bağlayabilir ama başkası için bilgi kaynağı değildir; çünkü doğruluğunu denetleyecek bir ölçü yoktur.</li>
        </ul>`,
      cards: [
        ["Bilginin üç sebebi (Nesefî)", "Sağlam duyular, doğru haber, akıl"],
        ["Mütevâtir haber nasıl bilgi verir?", "Zarûrî bilgi"],
        ["Peygamberin haberi nasıl bilgi verir?", "İstidlâlî bilgi (kesinlikte zarûrîye denk)"],
        ["İlham bilgi kaynağı mıdır?", "Ehl-i hakka göre başkası için değildir"],
        ["Sofistlerin üç grubu", "İnâdiyye, indiyye, lâedriyye"],
        ["Bedîhî bilgi", "Aklın ilk bakışta kabul ettiği zarûrî bilgi"],
        ["Kesbî bilgi", "İstidlalle elde edilen bilgi"]
      ]
    },
    {
      id: "hudus", title: "Âlemin Hudûsu",
      body: `
        {{metin:akaid-nesefi:hudus}}
        <h4>Hudûs delili</h4>
        <p>Kelamcıların Allah'ın varlığına en meşhur delilidir:</p>
        <ol>
          <li>Âlem a'yân (cisim ve cevher) ile a'râzdan ibarettir.</li>
          <li>A'râz sonradan olur: hareket sükûna, sükûn harekete döner; bir şeyin yok olması onun ezelî olmadığını gösterir.</li>
          <li>A'yân a'râzdan ayrı olamaz; sonradan olandan ayrı olmayan da sonradan olur.</li>
          <li>O hâlde âlem bütünüyle <b>muhdes</b>tir; her muhdesin de bir <b>muhdis</b>i (var edicisi) olmalıdır.</li>
        </ol>
        <p><b>Cevher-i ferd</b> (atom): Bölünemeyen en küçük parça. Kelamcılar âlemin sınırlı, parçalı ve sonradan olduğunu göstermek için bu kavramı kullanmışlardır.</p>
        <p class="tip">Bu delil mantıktaki <b>burhân-ı innî</b>ye örnektir: sonuçtan (âlem) sebebe (yaratıcı) gider.</p>`,
      cards: [
        ["Âlem neden ibarettir? (Nesefî)", "A'yân ve a'râz"],
        ["Ayn", "Kendi başına var olabilen (cisim ve cevher)"],
        ["Araz", "Kendi başına var olamayan, cisimde bulunan (renk, tat, hareket)"],
        ["Cevher-i ferd", "Bölünemeyen en küçük parça"],
        ["Hudûs delilinin sonucu", "Âlem muhdestir, o hâlde bir muhdisi vardır"],
        ["Kevnler (ekvân)", "Hareket, sükûn, birleşme, ayrılma"],
        ["Hudûs delili hangi burhân türüdür?", "Burhân-ı innî (sonuçtan sebebe)"]
      ]
    },
    {
      id: "zat", title: "Allah'ın Zâtı ve Tenzîh",
      body: `
        {{metin:akaid-nesefi:zat}}
        <h4>Şerh</h4>
        <p>Nesefî önce Allah'ın <b>sübûtî</b> isimlerini (kadîm, hay, kādir, alîm...) sayar, sonra <b>selbî</b> (tenzîhî) nitelikleri sıralar: O cisim, cevher, araz değildir; şekil, sınır, sayı, parça, mekân ve zamandan münezzehtir.</p>
        <ul>
          <li><b>Kadîm:</b> Varlığının başlangıcı yoktur. Âlem muhdes olduğuna göre onu var edenin kadîm olması gerekir; yoksa sonsuz bir zincir (teselsül) doğar.</li>
          <li><b>Vâhid:</b> Birlik delili Kur'an'da <i>temânü' burhânı</i> olarak geçer: ${AR("لَوْ كَانَ فِيهِمَا آلِهَةٌ إِلَّا اللّٰهُ لَفَسَدَتَا")} (Enbiyâ 22).</li>
          <li><b>Mahiyet ve keyfiyetle nitelenmez:</b> “Nedir?” ve “nasıldır?” soruları yaratılmışlar için sorulur.</li>
          <li><b>Mekân ve zamandan münezzeh:</b> Mekân ve zaman yaratılmıştır; yaratan, yarattığına muhtaç olmaz.</li>
        </ul>`,
      cards: [
        ["Selbî sıfatlar", "Allah'tan noksanlıkları nefyeden nitelikler (cisim değil, mekânda değil...)"],
        ["Temânü' burhânı", "İki ilah olsaydı yer ve gök bozulurdu (Enbiyâ 22)"],
        ["Allah mahiyet ve keyfiyetle nitelenir mi?", "Hayır"],
        ["Allah'ın kadîm olmasının delili", "Aksi hâlde teselsül lâzım gelir"],
        ["Allah mekâna yerleşir mi?", "Hayır; mekân yaratılmıştır"]
      ]
    },
    {
      id: "sifat", title: "Ezelî Sıfatlar",
      body: `
        {{metin:akaid-nesefi:sifat}}
        <h4>“Ne odur, ne ondan başkasıdır”</h4>
        <p>Ehl-i sünnete göre sıfatlar zâtın <b>aynı değildir</b> (Mu'tezile'nin “Allah zâtıyla âlimdir, ayrı bir ilim sıfatı yoktur” görüşüne karşı), ama zâttan <b>ayrı ve ondan kopabilen başka şeyler de değildir</b> (sıfatların birden çok kadîm varlık sayılmasına karşı).</p>
        <h4>Ekoller</h4>
        <table>
          <tr><th></th><th>Ehl-i sünnet</th><th>Mu'tezile</th></tr>
          <tr><td>Sıfatlar</td><td>Zâtla kâim, ezelî ve gerçek sıfatlar</td><td>Ayrı sıfat yok; zât bizzat âlim, kādir</td></tr>
          <tr><td>Gerekçe</td><td>Nasslar sıfatları ispat eder</td><td>Birden çok kadîm (taaddüd-i kudemâ) korkusu</td></tr>
        </table>
        <p>Nesefî'nin listesinde <b>tahlîk</b> ve <b>terzîk</b> gibi fiilî sıfatların da ezelî sayılması Mâtürîdî çizgidir: bunlar hepsi <b>tekvîn</b> sıfatına döner.</p>`,
      cards: [
        ["Sıfatlar için “lâ hüve ve lâ gayruh”", "Sıfatlar ne zâtın aynıdır ne de ondan ayrı başka şeydir"],
        ["Mu'tezile'nin sıfat görüşü", "Ayrı sıfat yoktur; zât bizzat âlim ve kādirdir"],
        ["Mu'tezile'nin gerekçesi", "Taaddüd-i kudemâ (birden çok kadîm) endişesi"],
        ["Tahlîk ve terzîk hangi sıfata döner?", "Tekvîn"],
        ["Sıfatlar ezelî midir?", "Evet, zâtla kâim ve ezelîdir"]
      ]
    },
    {
      id: "kelam", title: "Kelâm Sıfatı ve Kur'an",
      body: `
        {{metin:akaid-nesefi:kelam}}
        <h4>Kelâm-ı nefsî ve kelâm-ı lafzî</h4>
        <ul>
          <li><b>Kelâm-ı nefsî:</b> Allah'ın zâtıyla kâim, harf ve ses cinsinden olmayan ezelî sıfatı.</li>
          <li><b>Kelâm-ı lafzî:</b> Bu sıfata delâlet eden, okunan, yazılan, işitilen lafızlar.</li>
        </ul>
        <p>Nesefî'nin ifadesi dikkatlidir: Kur'an mushaflarda <i>yazılı</i>, kalplerde <i>korunmuş</i>, dillerle <i>okunur</i>, kulaklarla <i>işitilir</i>; ama bunlara <b>hulûl etmez</b>. Yani yazı, ses ve ezber yaratılmıştır; onların delâlet ettiği kelâm ise yaratılmış değildir.</p>
        <p class="tip"><b>Halku'l-Kur'an mihnesi:</b> Abbâsîler döneminde (218–234/833–848) Mu'tezilî “Kur'an mahlûktur” görüşü resmî baskıyla dayatıldı; Ahmed b. Hanbel bu baskıya direnmesiyle tanınır.</p>`,
      cards: [
        ["Kelâm-ı nefsî", "Allah'ın zâtıyla kâim, harf ve sesten olmayan ezelî sıfat"],
        ["Kelâm-ı lafzî", "Okunan, yazılan, işitilen lafızlar"],
        ["Kur'an mahlûk mudur? (Ehl-i sünnet)", "Hayır; Allah'ın kelâmıdır"],
        ["Mushaftaki yazı ve okunan ses", "Yaratılmıştır; delâlet ettikleri kelâm yaratılmamıştır"],
        ["Halku'l-Kur'an mihnesinde direnişiyle tanınan imam", "Ahmed b. Hanbel"],
        ["Kelâm sıfatı neye aykırıdır?", "Sükût ve âfete"]
      ]
    },
    {
      id: "tekvin", title: "Tekvîn, İrade ve Rü'yet",
      body: `
        {{metin:akaid-nesefi:tekvin}}
        <h4>Tekvîn tartışması</h4>
        <p>Mâtürîdîler tekvîni ayrı ve ezelî bir sıfat sayar; Eş'arîler onu kudretin taalluku kabul eder. Nesefî'nin “tekvîn mükevvenden başkadır” sözü, “yaratma ile yaratılan aynı şeydir” diyenlere cevaptır: Yaratma ezelî bir sıfattır, yaratılan ise vakti gelince var olur.</p>
        <h4>Rü'yet</h4>
        <ul>
          <li><b>Akla göre caiz:</b> Var olan her şeyin görülmesi mümkündür.</li>
          <li><b>Nakle göre vâcip:</b> ${AR("وُجُوهٌ يَوْمَئِذٍ نَاضِرَةٌ ۝ إِلٰى رَبِّهَا نَاظِرَةٌ")} (Kıyâme 22-23) ve sahih hadisler.</li>
          <li><b>Keyfiyetsiz:</b> Mekân, yön, karşılıklılık ve mesafe olmaksızın.</li>
          <li><b>Mu'tezile</b> rü'yeti, cisimlik gerektireceği gerekçesiyle reddeder; ${AR("لَا تُدْرِكُهُ الْأَبْصَارُ")} (En'âm 103) âyetini delil getirir. Ehl-i sünnet bu âyeti “ihata (kuşatma) ile idrak edemez” şeklinde anlar.</li>
        </ul>`,
      cards: [
        ["Tekvîn hakkında Mâtürîdî görüşü", "Ayrı ve ezelî bir sıfattır"],
        ["Tekvîn hakkında Eş'arî görüşü", "Kudretin taallukudur"],
        ["Tekvîn ile mükevven aynı mıdır?", "Hayır; tekvîn ezelî sıfat, mükevven sonradan var olandır"],
        ["Rü'yetullah aklen ve naklen hükmü", "Aklen caiz, naklen vâcip"],
        ["Rü'yetin Kur'an'daki delili", "Kıyâme 22-23"],
        ["Mu'tezile'nin rü'yeti reddetmekte delili", "En'âm 103: Gözler onu idrak edemez"],
        ["Ehl-i sünnetin En'âm 103 yorumu", "Gözler onu kuşatarak (ihata ile) idrak edemez"]
      ]
    },
    {
      id: "fiil", title: "Kulların Fiilleri: Halk ve Kesb",
      body: `
        {{metin:akaid-nesefi:fiil}}
        <h4>Üç görüş</h4>
        <table>
          <tr><th>Ekol</th><th>Görüş</th></tr>
          <tr><td><b>Cebriyye</b></td><td>Kulun iradesi yoktur; rüzgârdaki yaprak gibidir.</td></tr>
          <tr><td><b>Mu'tezile</b> (Kaderiyye)</td><td>Kul kendi fiilini yaratır.</td></tr>
          <tr><td><b>Ehl-i sünnet</b></td><td>Fiili Allah <b>yaratır</b> (halk), kul onu iradesiyle <b>kazanır</b> (kesb); sorumluluk kesb sebebiyledir.</td></tr>
        </table>
        <h4>İstitâat</h4>
        <p>Nesefî iki manayı ayırır:</p>
        <ul>
          <li><b>Fiille beraber olan kudret:</b> Fiilin kendisiyle meydana geldiği hakiki kudret; fiilden önce değil, onunla birlikte yaratılır.</li>
          <li><b>Sebep ve organların sağlamlığı:</b> Fiilden önce bulunur; <b>teklif</b> buna dayanır.</li>
        </ul>
        <p><b>Teklîf-i mâ lâ yutâk:</b> ${AR("لَا يُكَلِّفُ اللّٰهُ نَفْسًا إِلَّا وُسْعَهَا")} (Bakara 286): Kul gücünün yetmediği şeyle mükellef tutulmaz.</p>
        <h4>Ecel, rızık, hidayet, aslah</h4>
        <ul>
          <li><b>Ecel birdir:</b> Öldürülen de kendi eceliyle ölür (Mu'tezile'nin bir kısmına göre katil eceli kesmiştir).</li>
          <li><b>Haram da rızıktır:</b> Rızık, yararlanılan şeydir; helal olması şart değildir (Mu'tezile'ye göre rızık yalnız mülk olan helaldir).</li>
          <li><b>Aslah vâcip değildir:</b> Allah'a hiçbir şey vâcip değildir (Mu'tezile kul için en iyiyi yaratmayı Allah'a vâcip görür).</li>
        </ul>`,
      cards: [
        ["Halk", "Fiili yaratmak; yalnız Allah'a aittir"],
        ["Kesb", "Kulun fiili iradesiyle kazanması; sorumluluk bundandır"],
        ["Cebriyye'nin görüşü", "Kulun iradesi yoktur"],
        ["Mu'tezile'nin kul fiilleri görüşü", "Kul kendi fiilini yaratır"],
        ["İstitâat fiilden önce mi beraber mi?", "Hakiki kudret fiille beraberdir"],
        ["Teklif hangi istitâata dayanır?", "Sebep ve organların sağlamlığına"],
        ["Öldürülen kimin eceliyle ölür?", "Kendi eceliyle; ecel birdir"],
        ["Haram rızık mıdır? (Ehl-i sünnet)", "Evet"],
        ["Aslah Allah'a vâcip midir?", "Hayır (Mu'tezile'ye göre vâcip)"]
      ]
    },
    {
      id: "semiyyat", title: "Sem'iyyât: Kabir ve Âhiret",
      body: `
        {{metin:akaid-nesefi:semiyyat}}
        <p><b>Sem'iyyât</b>, yalnız nakille (vahiyle) bilinebilen konulardır. Akıl bunları imkânsız görmez; varlıkları ise haberle sabittir.</p>
        <table>
          <tr><td><b>Ba's</b></td><td>Ölülerin bedenleriyle diriltilmesi</td></tr>
          <tr><td><b>Mîzan</b></td><td>Amellerin tartılması</td></tr>
          <tr><td><b>Kitap</b></td><td>Amel defterlerinin verilmesi (sağdan veya soldan)</td></tr>
          <tr><td><b>Havz</b></td><td>Hz. Peygamber'in havzı (Kevser)</td></tr>
          <tr><td><b>Sırat</b></td><td>Cehennem üzerine kurulan köprü</td></tr>
        </table>
        <p>Nesefî cennet ve cehennemin <b>şu an yaratılmış</b> olduğunu vurgular; bazı Mu'tezilîler bunların kıyamet günü yaratılacağını söylemiştir. Delil: ${AR("أُعِدَّتْ لِلْمُتَّقِينَ")} (Âl-i İmrân 133), ${AR("أُعِدَّتْ لِلْكَافِرِينَ")} (Bakara 24): mâzî sîgasıyla “hazırlandı”.</p>`,
      cards: [
        ["Sem'iyyât", "Yalnız nakille bilinebilen konular"],
        ["Kabir azabı kimler içindir?", "Kâfirler ve âsî müminlerin bir kısmı"],
        ["Kabirde sorgu yapan melekler", "Münker ve Nekîr"],
        ["Cennet ve cehennem şu an var mıdır?", "Evet, yaratılmış ve mevcuttur"],
        ["Cennet ve cehennemin varlığına delil", "“Hazırlandı” (أُعِدَّتْ) âyetleri"],
        ["Sırat", "Cehennem üzerine kurulan köprü"]
      ]
    },
    {
      id: "iman", title: "İman, Büyük Günah ve Şefaat",
      body: `
        {{metin:akaid-nesefi:iman}}
        <h4>Büyük günah sahibi (mürtekib-i kebîre)</h4>
        <table>
          <tr><th>Ekol</th><th>Hüküm</th></tr>
          <tr><td><b>Hâricîler</b></td><td>Kâfir olur</td></tr>
          <tr><td><b>Mu'tezile</b></td><td>Ne mümin ne kâfir: <i>el-menzile beyne'l-menzileteyn</i>; tövbesiz ölürse ebedî cehennemde</td></tr>
          <tr><td><b>Mürcie</b></td><td>İmanla birlikte günah zarar vermez</td></tr>
          <tr><td><b>Ehl-i sünnet</b></td><td>Mümindir, fâsıktır; Allah dilerse affeder, dilerse cezalandırır; ebedî cehennemde kalmaz</td></tr>
        </table>
        <h4>İmanın tarifi</h4>
        <ul>
          <li>Nesefî: <b>Tasdik ve ikrar</b>. İkrar dünyevî hükümlerin uygulanması için şarttır (bazı Mâtürîdîler) veya imanın rüknüdür (Ebû Hanîfe).</li>
          <li><b>Ameller imandan bir cüz değildir</b>; bu yüzden iman artmaz ve eksilmez. Artan, amellerdir veya imanın kuvveti ve nuru.</li>
          <li><b>İstisna:</b> “İnşallah müminim” denmez; çünkü şüphe izlenimi verir. (Eş'arîler bunu hâtimeye/sonuca bakarak caiz görür.)</li>
        </ul>`,
      cards: [
        ["Nesefî'ye göre imanın tarifi", "Tasdik ve ikrar"],
        ["Ameller imandan bir cüz müdür? (Mâtürîdî)", "Hayır"],
        ["Büyük günah sahibi hakkında Hâricîler", "Kâfir olur"],
        ["Büyük günah sahibi hakkında Mu'tezile", "El-menzile beyne'l-menzileteyn"],
        ["Büyük günah sahibi hakkında Ehl-i sünnet", "Mümin ama fâsıktır; ebedî cehennemde kalmaz"],
        ["Helal saymak (istihlâl) hükmü", "Küfürdür"],
        ["Şefaat kimler için sabittir?", "Büyük günah sahipleri için (peygamberler ve iyi kullar eliyle)"],
        ["“İnşallah müminim” demek (Nesefî)", "Uygun değildir"]
      ]
    },
    {
      id: "nubuvvet", title: "Nübüvvet, Melekler, Kitaplar ve Hilâfet",
      body: `
        {{metin:akaid-nesefi:nubuvvet}}
        <h4>Şerh</h4>
        <ul>
          <li><b>Saadet-şekâvet:</b> Değişen kulun hâlidir; Allah'ın ezelî ilmi ve sıfatları değişmez.</li>
          <li><b>Peygamber göndermek hikmettir:</b> Mu'tezile'nin dediği gibi Allah'a vâcip değil, Berâhime'nin dediği gibi gereksiz de değildir.</li>
          <li><b>Mûcize:</b> Âdeti bozan, peygamberlik iddiasıyla birlikte ortaya çıkan ve karşı konulamayan olay.</li>
          <li><b>Peygamberlerin sayısı:</b> Nesefî, belirli bir sayıyla sınırlamamayı daha uygun görür; çünkü sayı haber-i vâhidle gelmiştir ve ${AR("مِنْهُمْ مَنْ قَصَصْنَا عَلَيْكَ وَمِنْهُمْ مَنْ لَمْ نَقْصُصْ عَلَيْكَ")} (Mü'min 78).</li>
          <li><b>Mi'rac</b> uyanıkken ve bedenle olmuştur. Mescid-i Harâm'dan Mescid-i Aksâ'ya olan kısmı (isrâ) Kur'an'la, göğe yükseliş meşhur hadislerle sabittir.</li>
          <li><b>Hilâfet sırası</b> faziletteki sıraya göredir. “Hilâfet otuz yıldır” sözü bir hadise dayanır; Hz. Hasan'ın altı aylık hilâfetiyle tamamlanır.</li>
        </ul>`,
      cards: [
        ["Peygamber göndermek Allah'a vâcip midir?", "Hayır; hikmettir (Mu'tezile vâcip der)"],
        ["Mûcize", "Peygamberlik iddiasıyla birlikte, âdeti bozan ve karşı konulamayan olay"],
        ["Peygamberlerin sayısını sınırlamak (Nesefî)", "Sınırlamamak daha uygundur"],
        ["Mi'rac nasıl olmuştur?", "Uyanıkken ve bedenle"],
        ["Peygamberden sonra en faziletli insan", "Hz. Ebû Bekir"],
        ["Hilâfet kaç yıldır?", "Otuz yıl"],
        ["Melekler erkek veya dişi midir?", "Erkeklik ve dişilikle nitelenmezler"]
      ]
    }
  ];
})();
