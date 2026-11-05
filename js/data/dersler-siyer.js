// Siyer — Hudarî'nin Nûru'l-Yakîn fî Sîreti Seyyidi'l-Mürselîn'i sırasıyla, dönem dönem.
// Tarihler yaygın kabule göredir; kaynaklar arasında bir-iki yıllık farklar bulunabilir.
(function () {
  const AR = (s) => `<span lang="ar">${s}</span>`;
  const D = window.DERSLER;

  D["k-siyer"].push(
    {
      id: "nesep", title: "Nesep, Doğum ve Çocukluk",
      body: `
        <p><b>Nesebi:</b> Muhammed b. Abdillâh b. Abdilmuttalib b. Hâşim b. Abdimenâf. Kureyş kabilesinin Hâşimoğulları kolundandır. Nesebi Adnân vasıtasıyla Hz. İsmâil'e ulaşır.</p>
        <ul>
          <li><b>Doğum:</b> Fil Yılı, Rebîülevvel ayı, Pazartesi; miladi 571 (yaygın kabul 20 Nisan). Babası Abdullah, doğumundan önce Medine'de vefat etmişti.</li>
          <li><b>Süt annesi:</b> Benî Sa'd kabilesinden Halîme es-Sa'diyye. Çölde temiz havada ve fasih Arapça ortamında büyüdü. <b>Şakk-ı sadr</b> (göğsün yarılması) olayı bu dönemde rivayet edilir.</li>
          <li><b>Annesinin vefatı:</b> 6 yaşında, Medine dönüşü Ebvâ'da annesi Âmine'yi kaybetti; dadısı Ümmü Eymen onu Mekke'ye getirdi.</li>
          <li><b>Dedesi Abdülmuttalib:</b> 8 yaşına kadar onun himayesinde kaldı.</li>
          <li><b>Amcası Ebû Tâlib:</b> Dedesinin vefatından sonra himayesini üstlendi. 12 yaşlarında onunla Şam'a ticaret yolculuğuna çıktı; Busrâ'da rahip <b>Bahîrâ</b>'nın onda peygamberlik alametleri gördüğü rivayet edilir.</li>
        </ul>`,
      cards: [
        ["Hz. Peygamber'in dedesi", "Abdülmuttalib"],
        ["Hz. Peygamber'in süt annesi", "Halîme es-Sa'diyye"],
        ["Annesinin vefat ettiği yer", "Ebvâ"],
        ["Annesini kaybettiğinde yaşı", "6"],
        ["Dedesinin vefatından sonra himaye eden", "Amcası Ebû Tâlib"],
        ["Şam yolculuğunda karşılaşılan rahip", "Bahîrâ"],
        ["Hz. Peygamber'in mensup olduğu kol", "Hâşimoğulları (Kureyş)"]
      ]
    },
    {
      id: "genclik", title: "Gençlik: Hilfü'l-Fudûl, Evlilik ve Kâbe Hakemliği",
      body: `
        <ul>
          <li><b>Ficâr savaşları:</b> Haram aylarda yapılan savaşlar; gençliğinde amcalarına ok toplayarak katıldığı rivayet edilir.</li>
          <li><b>Hilfü'l-fudûl:</b> Mekke'de haksızlığa uğrayanları korumak için yapılan andlaşma; 20 yaşlarında katıldı. Peygamberliğinden sonra “Böyle bir andlaşmaya şimdi çağrılsam yine icabet ederim” buyurduğu rivayet edilir.</li>
          <li><b>el-Emîn:</b> Doğruluğu ve güvenilirliği sebebiyle Mekkeliler ona bu lakabı verdi.</li>
          <li><b>Hz. Hatice ile evlilik:</b> Hatice'nin ticaret kervanını Şam'a götürdü; dürüstlüğünü gören Hatice evlenme teklif etti. Hz. Peygamber 25, Hz. Hatice 40 yaşındaydı (yaygın rivayet).</li>
          <li><b>Kâbe'nin tamiri:</b> 35 yaşındayken Kâbe yeniden inşa edildi. Hacerülesved'i yerine koyma konusunda kabileler çatışmanın eşiğine geldi; harem kapısından ilk giren olarak hakem seçildi. Taşı bir örtünün üzerine koydu, her kabileden birine bir ucundan tutturdu ve taşı kendi eliyle yerine yerleştirdi.</li>
        </ul>`,
      cards: [
        ["Hilfü'l-fudûl", "Haksızlığa uğrayanları korumak için yapılan andlaşma"],
        ["Hz. Peygamber'in peygamberlikten önceki lakabı", "el-Emîn"],
        ["Hz. Hatice ile evlendiğinde yaşı", "25"],
        ["Kâbe'nin tamiri sırasında yaşı", "35"],
        ["Hacerülesved anlaşmazlığını nasıl çözdü?", "Taşı örtüye koyup kabilelere taşıttı, kendi eliyle yerleştirdi"]
      ]
    },
    {
      id: "biset", title: "Bi'set ve Gizli Davet",
      body: `
        <ul>
          <li>Peygamberlikten önce <b>sâdık rüyalar</b> görmeye ve <b>Hira</b> mağarasında inzivaya çekilmeye başladı (tehannüs).</li>
          <li><b>İlk vahiy:</b> 40 yaşında, Ramazan ayında, Kadir gecesinde (610): ${AR("اِقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ")} (Alak 1–5). Korku içinde eve dönünce Hz. Hatice onu “Allah seni asla mahcup etmez” diyerek teselli etti ve amcasının oğlu Varaka b. Nevfel'e götürdü.</li>
          <li><b>Fetret-i vahiy:</b> İlk vahiyden sonra bir süre vahiy kesildi; ardından Müddessir suresinin ilk âyetleri indi: ${AR("يَا أَيُّهَا الْمُدَّثِّرُ ۝ قُمْ فَأَنْذِرْ")}.</li>
          <li><b>İlk inananlar:</b> Kadınlardan Hz. Hatice, çocuklardan Hz. Ali, azatlılardan Zeyd b. Hârise, hür erkeklerden Hz. Ebû Bekir.</li>
          <li><b>Gizli davet:</b> Yaklaşık üç yıl sürdü. Hz. Ebû Bekir'in davetiyle Osman, Zübeyr, Abdurrahman b. Avf, Sa'd b. Ebî Vakkās ve Talha Müslüman oldu. Müslümanlar <b>Dâru'l-Erkam</b>'da toplandı.</li>
        </ul>`,
      cards: [
        ["İlk vahiy nerede geldi?", "Hira mağarası"],
        ["İlk vahiy hangi âyetler?", "Alak 1–5"],
        ["İlk vahiyde Hz. Peygamber'in yaşı", "40"],
        ["Hz. Hatice'nin danıştığı amcasının oğlu", "Varaka b. Nevfel"],
        ["Fetretten sonra inen âyetler", "Müddessir'in ilk âyetleri"],
        ["İlk Müslüman olan hür erkek", "Hz. Ebû Bekir"],
        ["İlk Müslüman olan çocuk", "Hz. Ali"],
        ["Gizli davet döneminde toplanılan ev", "Dâru'l-Erkam"],
        ["Gizli davet süresi", "Yaklaşık üç yıl"]
      ]
    },
    {
      id: "aciktavet", title: "Açık Davet, Eziyetler ve Habeşistan",
      body: `
        <ul>
          <li><b>Açık davet:</b> ${AR("وَأَنْذِرْ عَشِيرَتَكَ الْأَقْرَبِينَ")} (Şuarâ 214) âyetiyle önce yakın akrabaya, sonra ${AR("فَاصْدَعْ بِمَا تُؤْمَرُ")} (Hicr 94) âyetiyle herkese. Safâ tepesinde Kureyş'i toplayıp onları uyardı; Ebû Leheb'in itirazı üzerine Tebbet suresi indi.</li>
          <li><b>Eziyetler:</b> Bilâl-i Habeşî, Ammâr b. Yâsir ve ailesi işkence gördü. <b>Sümeyye</b>, İslam'ın ilk şehididir.</li>
          <li><b>Habeşistan hicretleri:</b> Nübüvvetin 5. yılında (615) ilk kafile (11 erkek, 4 kadın), ardından daha büyük ikinci kafile. Ca'fer b. Ebî Tâlib, Necâşî'nin huzurunda Meryem suresini okudu; Necâşî Müslümanları korudu.</li>
          <li><b>Hz. Hamza ve Hz. Ömer'in İslam'ı:</b> Nübüvvetin 6. yılı (616). Müslümanlar Kâbe'de açıkça namaz kılmaya başladı.</li>
          <li><b>Boykot:</b> Kureyş, Hâşimoğulları ve Muttaliboğulları'yla alışverişi ve evliliği yasaklayan bir ahidname yazıp Kâbe'ye astı. Müslümanlar yaklaşık üç yıl <b>Şi'b-i Ebî Tâlib</b>'de büyük sıkıntı çekti.</li>
        </ul>`,
      cards: [
        ["Açık davete başlatan âyet (herkese)", "Hicr 94: فَاصْدَعْ بِمَا تُؤْمَرُ"],
        ["Yakın akrabayı uyarma âyeti", "Şuarâ 214"],
        ["İslam'ın ilk şehidi", "Sümeyye"],
        ["Habeşistan'a ilk hicret", "Nübüvvetin 5. yılı (615)"],
        ["Necâşî'nin huzurunda konuşan sahâbî", "Ca'fer b. Ebî Tâlib"],
        ["Ca'fer'in Necâşî'ye okuduğu sure", "Meryem"],
        ["Hz. Hamza ve Ömer'in Müslüman oluşu", "Nübüvvetin 6. yılı (616)"],
        ["Boykot yılları geçirilen yer", "Şi'b-i Ebî Tâlib"]
      ]
    },
    {
      id: "huzun", title: "Hüzün Yılı, Tâif, İsrâ-Mi'rac ve Akabe",
      body: `
        <ul>
          <li><b>Hüzün yılı (619):</b> Boykotun bitişinden kısa süre sonra Ebû Tâlib ve Hz. Hatice vefat etti.</li>
          <li><b>Tâif:</b> Zeyd b. Hârise ile Tâif'e gitti; Sakîf kabilesi onu taşlayarak şehirden çıkardı. Dönüşte meşhur Tâif duâsını yaptı ve Tâif'liler hakkında beddua etmedi.</li>
          <li><b>İsrâ ve Mi'rac:</b> Hicretten yaklaşık bir-bir buçuk yıl önce. Mescid-i Harâm'dan Mescid-i Aksâ'ya (İsrâ 1), oradan göklere yükseliş. <b>Beş vakit namaz</b> bu gece farz kılındı. Hz. Ebû Bekir olayı hemen tasdik ettiği için “<b>Sıddîk</b>” lakabını aldı.</li>
          <li><b>Akabe biatları:</b>
            <ul>
              <li><b>Birinci Akabe (621):</b> Medineli 12 kişi biat etti. Mus'ab b. Umeyr, İslam'ı öğretmek için Medine'ye gönderildi.</li>
              <li><b>İkinci Akabe (622):</b> 73 erkek ve 2 kadın, Hz. Peygamber'i Medine'ye davet edip onu koruyacaklarına söz verdi.</li>
            </ul>
          </li>
        </ul>`,
      cards: [
        ["Hüzün yılında vefat edenler", "Ebû Tâlib ve Hz. Hatice"],
        ["Tâif yolculuğunda Hz. Peygamber'e eşlik eden", "Zeyd b. Hârise"],
        ["Beş vakit namazın farz kılındığı gece", "Mi'rac gecesi"],
        ["“Sıddîk” lakabının sebebi", "Hz. Ebû Bekir'in isrâyı hemen tasdik etmesi"],
        ["Birinci Akabe biatı", "621, Medineli 12 kişi"],
        ["Medine'ye öğretmen olarak gönderilen sahâbî", "Mus'ab b. Umeyr"],
        ["İkinci Akabe biatı", "622, 73 erkek ve 2 kadın"]
      ]
    },
    {
      id: "hicret", title: "Hicret ve Medine'de İlk Adımlar",
      body: `
        <ul>
          <li><b>Dârü'n-Nedve kararı:</b> Kureyş, her kabileden bir genç seçip Hz. Peygamber'i birlikte öldürmeyi kararlaştırdı. Hz. Ali onun yatağında yattı ve emanetleri sahiplerine iade etmek için Mekke'de kaldı.</li>
          <li><b>Sevr mağarası:</b> Hz. Ebû Bekir ile üç gün burada saklandılar: ${AR("إِذْ يَقُولُ لِصَاحِبِهِ لَا تَحْزَنْ إِنَّ اللّٰهَ مَعَنَا")} (Tevbe 40).</li>
          <li><b>Kubâ:</b> Medine'ye varmadan önce kaldığı yerde İslam'ın ilk mescidi olan <b>Kubâ Mescidi</b> inşa edildi.</li>
          <li><b>İlk cuma:</b> Kubâ'dan Medine'ye giderken Benî Sâlim yurdunda kılındı.</li>
          <li><b>Mescid-i Nebevî:</b> Devesinin çöktüğü arsa satın alındı; yanında Ehl-i Suffe'nin kaldığı <b>Suffe</b> yapıldı.</li>
          <li><b>Muâhât (kardeşlik):</b> Muhacirler ile Ensar kardeş ilan edildi.</li>
          <li><b>Medine vesikası:</b> Müslümanlar, Yahudiler ve Medine'nin diğer unsurları arasındaki hak ve görevleri düzenleyen yazılı belge.</li>
          <li><b>Hicrî takvim:</b> Hz. Ömer döneminde hicret yılı (622) başlangıç kabul edildi.</li>
        </ul>`,
      cards: [
        ["Hicret gecesi Hz. Peygamber'in yatağında yatan", "Hz. Ali"],
        ["Hicrette saklanılan mağara", "Sevr"],
        ["İslam'ın ilk mescidi", "Kubâ Mescidi"],
        ["İlk cumanın kılındığı yer", "Benî Sâlim yurdu"],
        ["Muâhât", "Muhacirlerle Ensarın kardeş ilan edilmesi"],
        ["Medine vesikası", "Medine halkının hak ve görevlerini düzenleyen yazılı belge"],
        ["Hicrî takvimi başlatan halife", "Hz. Ömer"]
      ]
    },
    {
      id: "bedir-uhud", title: "Bedir ve Uhud",
      body: `
        <h4>Bedir (17 Ramazan 2 / Mart 624)</h4>
        <ul>
          <li>Ebû Süfyân'ın kervanını takip için çıkıldı; kervan kurtulunca Kureyş ordusuyla karşılaşıldı.</li>
          <li>Yaklaşık 313 Müslüman, yaklaşık 1000 kişilik Mekke ordusuna karşı zafer kazandı. Ebû Cehil öldürüldü.</li>
          <li>Esirlerden okuma-yazma bilenlerin, Medineli çocuklara öğretmeleri karşılığında serbest bırakıldığı rivayet edilir.</li>
          <li>Bu yıl Ramazan orucu ve kıblenin Kâbe'ye çevrilmesi gibi önemli hükümler de geldi.</li>
        </ul>
        <h4>Uhud (Şevval 3 / Mart 625)</h4>
        <ul>
          <li>Yaklaşık 700 Müslümana karşı 3000 kişilik Mekke ordusu.</li>
          <li><b>Ayneyn tepesine</b> Abdullah b. Cübeyr komutasında 50 okçu yerleştirildi ve ne olursa olsun yerlerini terk etmemeleri emredildi.</li>
          <li>İlk safhada kazanılan üstünlükten sonra okçuların çoğu ganimet için yerini terk etti; Hâlid b. Velîd'in arkadan saldırısıyla Müslümanlar ağır kayıp verdi.</li>
          <li><b>Hz. Hamza</b> şehit oldu; Hz. Peygamber yaralandı.</li>
          <li>Ders: Emre itaatsizliğin sonucu (Âl-i İmrân 152).</li>
        </ul>`,
      cards: [
        ["Bedir savaşının tarihi", "17 Ramazan 2 (624)"],
        ["Bedir'de Müslümanların sayısı", "Yaklaşık 313"],
        ["Bedir'de öldürülen Kureyş lideri", "Ebû Cehil"],
        ["Uhud'da okçuların komutanı", "Abdullah b. Cübeyr"],
        ["Uhud'da okçuların yerleştirildiği tepe", "Ayneyn tepesi"],
        ["Uhud'da arkadan saldıran Mekke süvari komutanı", "Hâlid b. Velîd"],
        ["Uhud'da şehit olan Hz. Peygamber'in amcası", "Hz. Hamza"],
        ["Uhud'un ana dersi", "Emre itaatsizliğin sonucu"]
      ]
    },
    {
      id: "hendek-hudeybiye", title: "Hendek, Hudeybiye ve Hayber",
      body: `
        <h4>Hendek (Ahzâb) (5 / 627)</h4>
        <ul>
          <li>Kureyş ve müttefikleri yaklaşık 10.000 kişiyle Medine'ye yürüdü.</li>
          <li><b>Selmân-ı Fârisî</b>'nin önerisiyle şehrin açık tarafına hendek kazıldı.</li>
          <li>Kuşatma yaklaşık bir ay sürdü; şiddetli bir rüzgârla müttefikler dağıldı (Ahzâb 9).</li>
          <li>Andlaşmayı bozan <b>Benî Kurayza</b> ardından kuşatıldı.</li>
        </ul>
        <h4>Hudeybiye (Zilkade 6 / 628)</h4>
        <ul>
          <li>Umre için yaklaşık 1400 sahâbîyle çıkıldı. Hz. Osman'ın öldürüldüğü haberi üzerine <b>Rıdvân biatı</b> yapıldı (Fetih 18).</li>
          <li><b>Andlaşma maddeleri:</b> On yıl savaş yapılmayacak; Müslümanlar bu yıl umre yapmadan dönüp ertesi yıl gelecek; Mekke'den Medine'ye kaçan iade edilecek, tersi iade edilmeyecek; kabileler istedikleri tarafla ittifak yapabilecek.</li>
          <li>Ağır görünen şartlara rağmen Kur'an bu andlaşmayı “<b>apaçık bir fetih</b>” olarak nitelendirdi (Fetih 1).</li>
          <li>Ardından komşu hükümdarlara (Bizans, İran, Habeşistan, Mısır) <b>davet mektupları</b> gönderildi.</li>
        </ul>
        <h4>Hayber (7 / 628)</h4>
        <p>Medine'ye karşı faaliyet merkezi olan Hayber kaleleri fethedildi. Kamus kalesinin fethinde sancağı Hz. Ali taşıdı.</p>`,
      cards: [
        ["Hendek kazmayı öneren sahâbî", "Selmân-ı Fârisî"],
        ["Hendek savaşının tarihi", "5 / 627"],
        ["Hendek'te müttefik ordunun dağılma sebebi", "Şiddetli rüzgâr (Ahzâb 9)"],
        ["Rıdvân biatının sebebi", "Hz. Osman'ın öldürüldüğü haberi"],
        ["Hudeybiye'de savaşmama süresi", "On yıl"],
        ["Kur'an'ın Hudeybiye için kullandığı ifade", "Apaçık bir fetih (Fetih 1)"],
        ["Hudeybiye'den sonra gönderilenler", "Hükümdarlara davet mektupları"],
        ["Hayber'in fethi", "7 / 628"]
      ]
    },
    {
      id: "fetih", title: "Mûte, Mekke'nin Fethi, Huneyn ve Tâif",
      body: `
        <h4>Mûte (8 / 629)</h4>
        <p>Bizans'a bağlı Arap kabilelerine karşı 3000 kişilik ordu gönderildi. Sırasıyla komutanlar <b>Zeyd b. Hârise</b>, <b>Ca'fer b. Ebî Tâlib</b> ve <b>Abdullah b. Revâha</b> şehit oldu; Hâlid b. Velîd orduyu geri çekerek kurtardı ve “<b>Seyfullah</b>” lakabını aldı.</p>
        <h4>Mekke'nin fethi (20 Ramazan 8 / Ocak 630)</h4>
        <ul>
          <li>Sebep: Kureyş müttefiki Benî Bekir'in, Müslümanların müttefiki Huzâa'ya saldırarak Hudeybiye andlaşmasını bozması.</li>
          <li>10.000 kişilik ordu, neredeyse kan dökülmeden Mekke'ye girdi.</li>
          <li>Kâbe putlardan temizlendi: ${AR("جَاءَ الْحَقُّ وَزَهَقَ الْبَاطِلُ")} (İsrâ 81).</li>
          <li>Genel af ilan edildi: “Bugün size kınama yok; gidin, hepiniz serbestsiniz.”</li>
        </ul>
        <h4>Huneyn ve Tâif (Şevval 8 / 630)</h4>
        <p>Hevâzin ve Sakîf'e karşı Huneyn'de, sayı çokluğuna güvenilmesi yüzünden ilk anda bozgun yaşandı, sonra zafer kazanıldı (Tevbe 25). Ardından Tâif kuşatıldı; Sakîf daha sonra kendiliğinden Müslüman oldu.</p>`,
      cards: [
        ["Mûte'nin üç şehit komutanı", "Zeyd b. Hârise, Ca'fer b. Ebî Tâlib, Abdullah b. Revâha"],
        ["Mûte'de “Seyfullah” lakabını alan", "Hâlid b. Velîd"],
        ["Mekke'nin fethinin tarihi", "20 Ramazan 8 (630)"],
        ["Mekke'nin fethinin sebebi", "Hudeybiye andlaşmasının bozulması"],
        ["Fetihte ordunun sayısı", "Yaklaşık 10.000"],
        ["Kâbe'deki putlar kırılırken okunan âyet", "İsrâ 81: جَاءَ الْحَقُّ وَزَهَقَ الْبَاطِلُ"],
        ["Huneyn'de ilk bozgunun sebebi", "Sayı çokluğuna güvenilmesi (Tevbe 25)"]
      ]
    },
    {
      id: "veda", title: "Tebük, Heyetler, Vedâ Haccı ve Vefat",
      body: `
        <ul>
          <li><b>Tebük (Receb 9 / 630):</b> Bizans'a karşı, kıtlık ve sıcakta yaklaşık 30.000 kişilik ordu (Ceyşü'l-usre). Savaş olmadı; bölge kabileleri andlaşma yaptı. Hz. Osman orduyu donatmada büyük pay sahibi oldu. Mazeretsiz geri kalan üç sahâbînin tövbesi Tevbe 118'de anlatılır.</li>
          <li><b>Senetü'l-vüfûd (9. yıl):</b> Arap kabileleri heyetler göndererek Müslüman oldu. Aynı yıl Hz. Ebû Bekir hac emiri olarak gönderildi.</li>
          <li><b>Vedâ haccı (10 / 632):</b> Hz. Peygamber'in yaptığı tek hac. Arafat'taki <b>Vedâ hutbesi</b>nde can, mal ve namus dokunulmazlığı, faizin ve kan davalarının kaldırılması, kadın haklarına riayet ve Kur'an ile Sünnet'e sarılma vurgulandı. ${AR("اَلْيَوْمَ أَكْمَلْتُ لَكُمْ دِينَكُمْ")} (Mâide 3) bu hacda indi.</li>
          <li><b>Vefat:</b> 12 Rebîülevvel 11 (Haziran 632), Pazartesi, 63 yaşında, Hz. Âişe'nin odasında. Hastalığında Hz. Ebû Bekir'e namaz kıldırmasını emretti. Son sözlerinin ${AR("اَللّٰهُمَّ الرَّفِيقَ الْأَعْلَى")} olduğu rivayet edilir.</li>
          <li>Hz. Ebû Bekir'in “Kim Muhammed'e tapıyorduysa bilsin ki Muhammed ölmüştür; kim Allah'a ibadet ediyorduysa bilsin ki Allah diridir, ölmez” sözü ve ardından Âl-i İmrân 144'ü okuması, ümmeti sükûnete kavuşturdu.</li>
        </ul>`,
      cards: [
        ["Tebük seferinin diğer adı", "Ceyşü'l-usre (zorluk ordusu)"],
        ["Tebük seferinin tarihi", "9 / 630"],
        ["Senetü'l-vüfûd", "Heyetler yılı (9. yıl)"],
        ["9. yılın hac emiri", "Hz. Ebû Bekir"],
        ["Vedâ haccında inen âyet", "Mâide 3: اَلْيَوْمَ أَكْمَلْتُ لَكُمْ دِينَكُمْ"],
        ["Hz. Peygamber'in vefat tarihi", "12 Rebîülevvel 11 (632)"],
        ["Vefat ettiğinde yaşı", "63"],
        ["Vefattan sonra Hz. Ebû Bekir'in okuduğu âyet", "Âl-i İmrân 144"]
      ]
    }
  );

  const k = window.KLASIK.find((c) => c.id === "k-siyer");
  if (k) k.summary += " Dersler Nûru'l-Yakîn'in sırasını takip eder.";
})();
