// Mantık — Îsâgûcî sırasıyla: lafızlar, külliyât, kavl-i şârih, kazıyyeler, tenâkuz ve aks, kıyas, sınaât-ı hams.
(function () {
  const AR = (s) => `<span lang="ar">${s}</span>`;
  const D = window.DERSLER;
  const m = D["k-mantik"];

  const elfaz = {
    id: "elfaz", title: "Lafızların Kısımları",
    body: `
      <h4>Müfred ve mürekkeb</h4>
      <p>Lafzın bir parçası, manasının bir parçasına delâlet ediyorsa <b>mürekkeb</b> (“Zeyd ayaktadır”), etmiyorsa <b>müfred</b>dir (“Zeyd”).</p>
      <h4>Küllî ve cüz'î</h4>
      <ul>
        <li><b>Cüz'î:</b> Tasavvuru, birden çok şeye ortak olmaya engel olan (Zeyd, bu kitap).</li>
        <li><b>Küllî:</b> Tasavvuru, birden çok şeye ortak olmaya engel olmayan (insan, kitap).</li>
      </ul>
      <h4>Küllînin fertlerine dağılışı</h4>
      <ul>
        <li><b>Mütevâtı:</b> Fertlerinde eşit bulunan (insanlık: her insanda eşit).</li>
        <li><b>Müşekkik:</b> Fertlerinde farklı derecede bulunan (beyazlık: karda ve fildişinde farklı).</li>
      </ul>
      <h4>Lafız ile mana ilişkisi</h4>
      <table>
        <tr><td><b>Müterâdif</b></td><td>Lafızlar farklı, mana bir</td><td>${AR("أَسَدٌ، لَيْثٌ")} (aslan)</td></tr>
        <tr><td><b>Mütebâyin</b></td><td>Lafızlar ve manalar farklı</td><td>İnsan, at</td></tr>
        <tr><td><b>Müşterek</b></td><td>Lafız bir, birden fazla manaya ayrı ayrı konulmuş</td><td>${AR("عَيْنٌ")} (göz, pınar, casus...)</td></tr>
        <tr><td><b>Menkūl</b></td><td>Bir manadan başka manaya nakledilmiş, ilki terk edilmiş</td><td>${AR("صَلَاةٌ")} (duâ → namaz)</td></tr>
      </table>`,
    cards: [
      ["Müfred lafız", "Parçası manasının parçasına delâlet etmeyen lafız"],
      ["Mürekkeb lafız", "Parçası manasının parçasına delâlet eden lafız"],
      ["Cüz'î", "Birden çok şeye ortak olmaya engel olan kavram"],
      ["Küllî", "Birden çok şeye ortak olmaya engel olmayan kavram"],
      ["Mütevâtı", "Fertlerinde eşit bulunan küllî"],
      ["Müşekkik", "Fertlerinde farklı derecede bulunan küllî"],
      ["Müterâdif", "Lafızları farklı, manası bir"],
      ["Müşterek", "Bir lafız, birden çok manaya konulmuş"],
      [AR("عَيْنٌ") + " lafzı", "Müşterek"],
      ["Menkūl", "Bir manadan diğerine nakledilmiş lafız"]
    ]
  };

  const tarif = {
    id: "tarif", title: "Kavl-i Şârih (Tarif)",
    body: `
      <p>Bilinmeyen bir tasavvura ulaştıran söze <b>kavl-i şârih</b> (tarif) denir. Dört çeşittir:</p>
      <table>
        <tr><th>Çeşit</th><th>Unsurları</th><th>İnsan için örnek</th></tr>
        <tr><td><b>Had-di tâm</b></td><td>Yakın cins + yakın fasl</td><td>Nâtık hayvan</td></tr>
        <tr><td><b>Had-di nâkıs</b></td><td>Uzak cins + yakın fasl, veya yalnız fasl</td><td>Nâtık cisim · Nâtık</td></tr>
        <tr><td><b>Resm-i tâm</b></td><td>Yakın cins + hâssa</td><td>Gülen hayvan</td></tr>
        <tr><td><b>Resm-i nâkıs</b></td><td>Uzak cins + hâssa, veya yalnız hâssa</td><td>Gülen cisim · Gülen</td></tr>
      </table>
      <p><b>Had</b> zâtîlerle (cins, fasl), <b>resm</b> arazîlerle (hâssa) yapılan tariftir. En mükemmeli had-di tâmdır.</p>
      <h4>Tarifin şartları</h4>
      <ul>
        <li><b>Câmi' ve mâni':</b> Tarif edilenin bütün fertlerini içine almalı, başkasını dışarıda bırakmalı (efrâdını câmi', ağyârını mâni').</li>
        <li>Tarif edilenden <b>daha açık</b> olmalı.</li>
        <li><b>Devir</b> olmamalı: tarif edilen, kendisiyle tarif edilmemeli.</li>
        <li>Mecaz ve müşterek lafızlar karînesiz kullanılmamalı.</li>
      </ul>`,
    cards: [
      ["Kavl-i şârih", "Bilinmeyen tasavvura ulaştıran söz (tarif)"],
      ["Had-di tâm", "Yakın cins + yakın fasl"],
      ["Had-di nâkıs", "Uzak cins + fasl veya yalnız fasl"],
      ["Resm-i tâm", "Yakın cins + hâssa"],
      ["Resm-i nâkıs", "Uzak cins + hâssa veya yalnız hâssa"],
      ["“Nâtık hayvan” hangi tarif?", "Had-di tâm"],
      ["“Gülen hayvan” hangi tarif?", "Resm-i tâm"],
      ["Had ile resmin farkı", "Had zâtîlerle, resm arazîlerle (hâssa) yapılır"],
      ["Efrâdını câmi', ağyârını mâni'", "Tarif edilenin bütün fertlerini içine alıp başkasını dışarıda bırakmak"]
    ]
  };

  const kaziyye = {
    id: "kaziyye", title: "Kazıyyeler (Önermeler)",
    body: `
      <p><b>Kazıyye</b>, söyleyeni için doğru veya yanlış denilebilen sözdür. Tasdîkâtın konusudur.</p>
      <h4>Hamliyye ve şartiyye</h4>
      <ul>
        <li><b>Hamliyye:</b> Bir şeyi bir şeye isnad eder. Unsurları: <b>mevzû</b> (konu), <b>mahmûl</b> (yüklem), <b>nisbet</b>. “İnsan canlıdır.”</li>
        <li><b>Şartiyye-i muttasıla:</b> Bir hükmün başka bir hükme bağlı olduğunu bildirir: ${AR("إِنْ كَانَتِ الشَّمْسُ طَالِعَةً فَالنَّهَارُ مَوْجُودٌ")}. İlk kısmına <b>mukaddem</b>, ikincisine <b>tâlî</b> denir.</li>
        <li><b>Şartiyye-i munfasıla:</b> İki hükmün birbirine aykırı olduğunu bildirir: ${AR("الْعَدَدُ إِمَّا زَوْجٌ أَوْ فَرْدٌ")}.</li>
      </ul>
      <h4>Hamliyyenin kemmiyet ve keyfiyeti</h4>
      <p>Mevzûu küllî olup fertlerin miktarı (<b>sûr</b>) belirtilen kazıyyeye <b>mahsûre</b> denir. Dört mahsûre vardır:</p>
      <table>
        <tr><th>Kazıyye</th><th>Sûr</th><th>Örnek</th></tr>
        <tr><td><b>Mûcibe külliye</b></td><td lang="ar">كُلُّ</td><td lang="ar">كُلُّ إِنْسَانٍ حَيَوَانٌ</td></tr>
        <tr><td><b>Sâlibe külliye</b></td><td lang="ar">لَا شَيْءَ</td><td lang="ar">لَا شَيْءَ مِنَ الْإِنْسَانِ بِحَجَرٍ</td></tr>
        <tr><td><b>Mûcibe cüz'iyye</b></td><td lang="ar">بَعْضُ</td><td lang="ar">بَعْضُ الْحَيَوَانِ إِنْسَانٌ</td></tr>
        <tr><td><b>Sâlibe cüz'iyye</b></td><td lang="ar">بَعْضُ ... لَيْسَ</td><td lang="ar">بَعْضُ الْحَيَوَانِ لَيْسَ بِإِنْسَانٍ</td></tr>
      </table>
      <p>Mevzûu cüz'î olana <b>şahsiyye</b> (“Zeyd yazardır”), mevzûu küllî olup sûru belirtilmeyene <b>mühmele</b> denir (“İnsan zarardadır”); mühmele cüz'iyye hükmündedir.</p>`,
    cards: [
      ["Kazıyye", "Doğru veya yanlış denilebilen söz"],
      ["Hamliyyenin unsurları", "Mevzû, mahmûl, nisbet"],
      ["Şartiyyenin iki kısmı", "Mukaddem ve tâlî"],
      ["Şartiyye-i muttasıla", "Bir hükmün diğerine bağlılığını bildirir"],
      ["Şartiyye-i munfasıla", "İki hükmün birbirine aykırılığını bildirir"],
      ["Sûr", "Mevzûun fertlerinin miktarını bildiren lafız"],
      ["Dört mahsûre", "Mûcibe külliye, sâlibe külliye, mûcibe cüz'iyye, sâlibe cüz'iyye"],
      [AR("كُلُّ إِنْسَانٍ حَيَوَانٌ"), "Mûcibe külliye"],
      [AR("لَا شَيْءَ مِنَ الْإِنْسَانِ بِحَجَرٍ"), "Sâlibe külliye"],
      ["Mühmele", "Sûru belirtilmemiş kazıyye; cüz'iyye hükmündedir"],
      ["Şahsiyye", "Mevzûu cüz'î olan kazıyye"]
    ]
  };

  const tenakuz = {
    id: "tenakuz", title: "Tenâkuz ve Aks",
    body: `
      <h4>Tenâkuz (çelişki)</h4>
      <p>İki kazıyyenin, biri doğru olunca öbürü mutlaka yanlış olacak şekilde <b>keyfiyette</b> (olumlu-olumsuz) farklı olmasıdır.</p>
      <p>Tenâkuz için iki kazıyye arasında <b>sekiz birlik</b> (vahdet-i semâniye) gerekir: mevzû, mahmûl, zaman, mekân, izâfet, kuvve-fiil, cüz-küll ve şart birliği.</p>
      <p>Mahsûrelerde ayrıca <b>kemmiyette</b> de farklılık gerekir:</p>
      <table>
        <tr><td><b>Mûcibe külliye</b> “Her insan canlıdır”</td><td>↔</td><td><b>Sâlibe cüz'iyye</b> “Bazı insanlar canlı değildir”</td></tr>
        <tr><td><b>Sâlibe külliye</b> “Hiçbir insan taş değildir”</td><td>↔</td><td><b>Mûcibe cüz'iyye</b> “Bazı insanlar taştır”</td></tr>
      </table>
      <h4>Aks-i müstevî (döndürme)</h4>
      <p>Kazıyyenin doğruluğu ve keyfiyeti korunarak mevzûu mahmûl, mahmûlü mevzû yapmaktır.</p>
      <table>
        <tr><th>Asıl</th><th>Aksi</th><th>Örnek</th></tr>
        <tr><td>Mûcibe külliye</td><td>Mûcibe cüz'iyye</td><td>Her insan canlıdır → Bazı canlılar insandır</td></tr>
        <tr><td>Sâlibe külliye</td><td>Sâlibe külliye</td><td>Hiçbir insan taş değildir → Hiçbir taş insan değildir</td></tr>
        <tr><td>Mûcibe cüz'iyye</td><td>Mûcibe cüz'iyye</td><td>Bazı canlılar insandır → Bazı insanlar canlıdır</td></tr>
        <tr><td>Sâlibe cüz'iyye</td><td>Aksi lâzım gelmez</td><td>Bazı canlılar insan değildir ↛ Bazı insanlar canlı değildir</td></tr>
      </table>
      <p class="tip">Mûcibe külliyenin aksi külliye olamaz: “Her insan canlıdır” doğrudur ama “Her canlı insandır” yanlıştır.</p>`,
    cards: [
      ["Tenâkuz", "İki kazıyyenin keyfiyette, biri doğruyken diğeri yanlış olacak şekilde farklı olması"],
      ["Tenâkuz için kaç birlik şarttır?", "Sekiz (vahdet-i semâniye)"],
      ["Mûcibe külliyenin nakîzi", "Sâlibe cüz'iyye"],
      ["Sâlibe külliyenin nakîzi", "Mûcibe cüz'iyye"],
      ["Aks-i müstevî", "Doğruluk ve keyfiyet korunarak mevzû ile mahmûlün yer değiştirmesi"],
      ["Mûcibe külliyenin aksi", "Mûcibe cüz'iyye"],
      ["Sâlibe külliyenin aksi", "Sâlibe külliye"],
      ["Sâlibe cüz'iyyenin aksi", "Lâzım gelmez"],
      ["Mûcibe cüz'iyyenin aksi", "Mûcibe cüz'iyye"]
    ]
  };

  const kiyas = {
    id: "kiyas", title: "Kıyas",
    body: `
      <p><b>Kıyas</b>, kabul edildiğinde kendisinden başka bir sözün zorunlu olarak çıktığı, kazıyyelerden oluşan sözdür.</p>
      <h4>Kıyas-ı iktirânî</h4>
      <p class="ar-block">Her insan canlıdır · Her canlı cisimdir · <b>O hâlde her insan cisimdir</b></p>
      <ul>
        <li>Neticenin mevzûu (insan): <b>hadd-i asgar</b>; içinde bulunduğu öncül <b>suğrâ</b>.</li>
        <li>Neticenin mahmûlü (cisim): <b>hadd-i ekber</b>; içinde bulunduğu öncül <b>kübrâ</b>.</li>
        <li>İki öncülde tekrarlanan (canlı): <b>hadd-i evsat</b>; netice de yer almaz.</li>
      </ul>
      <h4>Dört şekil (hadd-i evsatın yerine göre)</h4>
      <table>
        <tr><th>Şekil</th><th>Suğrâda evsat</th><th>Kübrâda evsat</th><th>Not</th></tr>
        <tr><td>1.</td><td>Mahmûl</td><td>Mevzû</td><td>En açık ve tabiî şekil; şartı: suğrâ mûcibe, kübrâ külliye</td></tr>
        <tr><td>2.</td><td>Mahmûl</td><td>Mahmûl</td><td>Neticesi daima sâlibe</td></tr>
        <tr><td>3.</td><td>Mevzû</td><td>Mevzû</td><td>Neticesi daima cüz'iyye</td></tr>
        <tr><td>4.</td><td>Mevzû</td><td>Mahmûl</td><td>Tabiattan en uzak şekil</td></tr>
      </table>
      <h4>Kıyas-ı istisnâî</h4>
      <p>Neticenin veya nakîzinin öncüllerde aynen bulunduğu kıyastır. Şartiyye-i muttasıla ile:</p>
      <ul>
        <li><b>Mukaddemin isbâtı → tâlînin isbâtı:</b> Güneş doğmuşsa gündüz vardır; güneş doğmuştur; o hâlde gündüz vardır.</li>
        <li><b>Tâlînin ref'i → mukaddemin ref'i:</b> Gündüz yoktur; o hâlde güneş doğmamıştır.</li>
        <li>Tâlînin isbâtı ve mukaddemin ref'i netice vermez.</li>
      </ul>
      <p><b>İstikrâ</b> (cüz'îlerden küllîye) ve <b>temsîl</b> (bir cüz'îden diğerine; fıkıhtaki kıyas) da delil türleridir, ancak kesinlik ifade etmezler.</p>`,
    cards: [
      ["Hadd-i asgar", "Neticenin mevzûu"],
      ["Hadd-i ekber", "Neticenin mahmûlü"],
      ["Hadd-i evsat", "İki öncülde tekrarlanan, neticede bulunmayan terim"],
      ["Suğrâ", "Hadd-i asgarı içeren öncül"],
      ["Kübrâ", "Hadd-i ekberi içeren öncül"],
      ["1. şekilde hadd-i evsat", "Suğrâda mahmûl, kübrâda mevzû"],
      ["1. şeklin şartları", "Suğrânın mûcibe, kübrânın külliye olması"],
      ["2. şeklin neticesi", "Daima sâlibe"],
      ["3. şeklin neticesi", "Daima cüz'iyye"],
      ["Muttasılada netice veren iki yol", "Mukaddemin isbâtı, tâlînin ref'i"],
      ["Temsîl", "Bir cüz'îden diğer cüz'îye hüküm (fıkıhtaki kıyas)"],
      ["İstikrâ", "Cüz'îlerden küllî hükme ulaşmak"]
    ]
  };

  const sinaat = {
    id: "sinaat", title: "Sınaât-ı Hams (Beş Sanat)",
    body: `
      <p>Kıyaslar, öncüllerinin (mukaddimelerinin) türüne göre beş sanata ayrılır:</p>
      <table>
        <tr><th>Sanat</th><th>Öncüller</th><th>Amaç</th></tr>
        <tr><td><b>Burhân</b></td><td>Yakîniyyât (kesin bilgiler)</td><td>Kesin bilgi</td></tr>
        <tr><td><b>Cedel</b></td><td>Meşhûrât ve müsellemât</td><td>Hasmı susturmak</td></tr>
        <tr><td><b>Hitâbe</b></td><td>Makbûlât ve maznûnât</td><td>İkna ve teşvik</td></tr>
        <tr><td><b>Şiir</b></td><td>Muhayyelât</td><td>Duyguları harekete geçirmek</td></tr>
        <tr><td><b>Safsata (muğâlata)</b></td><td>Vehmiyyât ve müşebbehât</td><td>Yanıltmak</td></tr>
      </table>
      <h4>Yakîniyyât (burhânın öncülleri)</h4>
      <ol>
        <li><b>Evveliyyât:</b> Aklın ilk bakışta kabul ettiği (bütün parçasından büyüktür).</li>
        <li><b>Müşâhedât:</b> Duyularla bilinenler (güneş aydınlatıcıdır).</li>
        <li><b>Tecrübiyyât:</b> Tekrarlanan deneyimle bilinenler.</li>
        <li><b>Mütevâtirât:</b> Yalan üzerinde birleşmesi imkânsız topluluğun haberi.</li>
        <li><b>Hadsiyyât:</b> Zihnin sezgiyle ulaştıkları (ayın ışığı güneştendir).</li>
        <li><b>Fıtriyyât:</b> Delili kendisiyle birlikte olan önermeler (dört çifttir).</li>
      </ol>
      <p class="tip">Burhân ikiye ayrılır: <b>Burhân-ı limmî</b> sebepten sonuca, <b>burhân-ı innî</b> sonuçtan sebebe gider. Kelamdaki âlemin hudûsundan Allah'ın varlığına istidlal innî burhandır.</p>`,
    cards: [
      ["Beş sanat", "Burhân, cedel, hitâbe, şiir, safsata"],
      ["Burhânın öncülleri", "Yakîniyyât"],
      ["Cedelin öncülleri", "Meşhûrât ve müsellemât"],
      ["Hitâbenin öncülleri", "Makbûlât ve maznûnât"],
      ["Şiirin öncülleri", "Muhayyelât"],
      ["Safsatanın öncülleri", "Vehmiyyât ve müşebbehât"],
      ["Altı yakîniyyât", "Evveliyyât, müşâhedât, tecrübiyyât, mütevâtirât, hadsiyyât, fıtriyyât"],
      ["Evveliyyât", "Aklın ilk bakışta kabul ettiği önermeler"],
      ["Burhân-ı limmî", "Sebepten sonuca istidlal"],
      ["Burhân-ı innî", "Sonuçtan sebebe istidlal"]
    ]
  };

  // Îsâgûcî sırası: giriş (delâlet) → lafızlar → külliyât → tarif → kazıyye → tenâkuz/aks → kıyas → sınaât
  const giris = m.find((l) => l.id === "giris"), kulliyat = m.find((l) => l.id === "kulliyat");
  D["k-mantik"] = [giris, elfaz, kulliyat, tarif, kaziyye, tenakuz, kiyas, sinaat];
})();
