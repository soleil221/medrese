// Belâgat — Telhîsü'l-Miftâh / Muhtasaru'l-Meânî sırasıyla: mukaddime, meânî, beyân, bedî'.
(function () {
  const AR = (s) => `<span lang="ar">${s}</span>`;
  const D = window.DERSLER;

  D["k-belagat"].unshift({
    id: "fesahat", title: "Fesâhat ve Belâgat (Mukaddime)",
    body: `
      <p>Telhîs, belâgate geçmeden önce <b>fesâhat</b>ı tarif eder. Fesâhat kelimede, kelâmda ve mütekellimde; belâgat ise kelâmda ve mütekellimde bulunur.</p>
      <h4>Kelimede fesâhat</h4>
      <p>Kelimenin şu üç kusurdan uzak olmasıdır:</p>
      <ul>
        <li><b>Tenâfür-i hurûf:</b> Harflerin dile ağır gelmesi (${AR("مُسْتَشْزِرَاتٌ")}).</li>
        <li><b>Garâbet:</b> Manasının bilinmemesi, yabancı ve kullanılmayan kelime olması.</li>
        <li><b>Muhâlefet-i kıyâs:</b> Sarf kaidelerine aykırı olması (${AR("اَلْحَمْدُ لِلّٰهِ الْعَلِيِّ الْأَجْلَلِ")}; doğrusu ${AR("الْأَجَلِّ")}).</li>
      </ul>
      <h4>Kelâmda fesâhat</h4>
      <p>Kelimelerin fasih olmasıyla birlikte kelâmın şu kusurlardan uzak olmasıdır:</p>
      <ul>
        <li><b>Za'f-ı te'lîf:</b> Nahiv kaidelerine aykırılık.</li>
        <li><b>Tenâfür-i kelimât:</b> Kelimelerin bir arada dile ağır gelmesi.</li>
        <li><b>Ta'kîd:</b> Manaya delâletin açık olmaması; lafzî (dizilişten) veya ma'nevî (anlam geçişinden).</li>
      </ul>
      <h4>Belâgat</h4>
      <p>Kelâmın belâgati, fasih olmakla beraber <b>mukteza-yı hâle mutâbık</b> olmasıdır; yani sözün, söylendiği durumun ve muhatabın gerektirdiği şekilde olması.</p>
      <p>Belâgat üç ilimle öğrenilir: <b>Meânî</b> (mukteza-yı hâle uygunluk), <b>Beyân</b> (manayı farklı açıklık derecelerinde ifade), <b>Bedî'</b> (güzelleştirme).</p>`,
    cards: [
      ["Kelimede fesâhatı bozan üç kusur", "Tenâfür-i hurûf, garâbet, muhâlefet-i kıyâs"],
      ["Kelâmda fesâhatı bozan kusurlar", "Za'f-ı te'lîf, tenâfür-i kelimât, ta'kîd"],
      ["Belâgatin tarifi", "Fasih kelâmın mukteza-yı hâle mutâbık olması"],
      ["Garâbet", "Kelimenin manasının bilinmemesi, yabancı olması"],
      ["Ta'kîd", "Manaya delâletin açık olmaması (lafzî veya ma'nevî)"],
      ["Muhâlefet-i kıyâs", "Sarf kaidelerine aykırılık (ör. الْأَجْلَلِ)"],
      ["Fesâhat nerelerde bulunur?", "Kelime, kelâm ve mütekellimde"]
    ]
  });

  D["k-belagat"].push(
    {
      id: "haber-insa", title: "Meânî I: Haber ve İnşâ",
      body: `
        <p><b>Haber</b>, doğru veya yanlış olma ihtimali taşıyan sözdür. <b>İnşâ</b> ise bu ihtimali taşımayan sözdür (emir, soru vb.).</p>
        <h4>Muhataba göre haberin kısımları</h4>
        <table>
          <tr><th>Kısım</th><th>Muhatabın hâli</th><th>Te'kîd</th><th>Örnek</th></tr>
          <tr><td><b>İbtidâî</b></td><td>Hükümden habersiz</td><td>Te'kîdsiz</td><td lang="ar">زَيْدٌ قَائِمٌ</td></tr>
          <tr><td><b>Talebî</b></td><td>Tereddütte</td><td>Bir te'kîd</td><td lang="ar">إِنَّ زَيْدًا قَائِمٌ</td></tr>
          <tr><td><b>İnkârî</b></td><td>İnkâr ediyor</td><td>Birden fazla te'kîd</td><td lang="ar">وَاللّٰهِ إِنَّ زَيْدًا لَقَائِمٌ</td></tr>
        </table>
        <p>Kur'an'dan örnek (Yâsîn 14, 16): Elçiler önce ${AR("إِنَّا إِلَيْكُمْ مُرْسَلُونَ")} dediler (talebî). Halk inkâr edince ${AR("رَبُّنَا يَعْلَمُ إِنَّا إِلَيْكُمْ لَمُرْسَلُونَ")} dediler (inkârî: kasem manası, ${AR("إِنَّ")} ve lâm).</p>
        <p><b>Te'kîd araçları:</b> ${AR("إِنَّ، أَنَّ")}, lâm-ı ibtidâ, kasem, te'kîd nûnları, ${AR("قَدْ")}, zâid harfler, isim cümlesi.</p>
        <h4>İnşâ</h4>
        <ul>
          <li><b>Talebî inşâ:</b> Emir, nehiy, istifhâm (soru), temennî, nidâ.</li>
          <li><b>Gayr-i talebî inşâ:</b> Taaccüb, medih-zem (${AR("نِعْمَ، بِئْسَ")}), kasem, tereccî, akid sîgaları (${AR("بِعْتُ")}).</li>
        </ul>
        <h4>Emrin mecazi manaları</h4>
        <table>
          <tr><td><b>Duâ</b></td><td lang="ar">رَبِّ اغْفِرْ لِي</td></tr>
          <tr><td><b>Tehdîd</b></td><td lang="ar">اعْمَلُوا مَا شِئْتُمْ (Fussilet 40)</td></tr>
          <tr><td><b>Ta'cîz</b> (aciz bırakma)</td><td lang="ar">فَأْتُوا بِسُورَةٍ مِنْ مِثْلِهِ (Bakara 23)</td></tr>
          <tr><td><b>İbâha</b></td><td lang="ar">وَكُلُوا وَاشْرَبُوا (Bakara 187)</td></tr>
        </table>`,
      cards: [
        ["Haber", "Doğru veya yanlış ihtimali taşıyan söz"],
        ["İnşâ", "Doğru-yanlış ihtimali taşımayan söz"],
        ["İbtidâî haber", "Habersiz muhataba, te'kîdsiz"],
        ["Talebî haber", "Tereddütteki muhataba, bir te'kîdle"],
        ["İnkârî haber", "İnkâr eden muhataba, birden fazla te'kîdle"],
        [AR("رَبُّنَا يَعْلَمُ إِنَّا إِلَيْكُمْ لَمُرْسَلُونَ") + " haberin hangi kısmı?", "İnkârî"],
        ["Talebî inşâ çeşitleri", "Emir, nehiy, istifhâm, temennî, nidâ"],
        [AR("فَأْتُوا بِسُورَةٍ مِنْ مِثْلِهِ") + " — emrin manası", "Ta'cîz (aciz bırakma)"],
        [AR("اعْمَلُوا مَا شِئْتُمْ") + " — emrin manası", "Tehdîd"]
      ]
    },
    {
      id: "kasr", title: "Meânî II: Kasr, Takdîm, Îcâz ve Itnâb",
      body: `
        <h4>Kasr (hasr)</h4>
        <p>Bir şeyi bir şeye has kılmaktır. Has kılınana <b>maksûr</b>, kendisine has kılınana <b>maksûrun aleyh</b> denir.</p>
        <table>
          <tr><th>Yol</th><th>Örnek</th></tr>
          <tr><td><b>Nefy ve istisnâ</b></td><td lang="ar">وَمَا مُحَمَّدٌ إِلَّا رَسُولٌ (Âl-i İmrân 144)</td></tr>
          <tr><td><b>${AR("إِنَّمَا")}</b></td><td lang="ar">إِنَّمَا يَخْشَى اللّٰهَ مِنْ عِبَادِهِ الْعُلَمَاءُ (Fâtır 28)</td></tr>
          <tr><td><b>Takdîm</b> (sonra gelmesi gerekeni öne almak)</td><td lang="ar">إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ (Fâtiha 5)</td></tr>
          <tr><td><b>Atıf</b> (${AR("لَا، بَلْ، لٰكِنْ")})</td><td lang="ar">زَيْدٌ شَاعِرٌ لَا كَاتِبٌ</td></tr>
        </table>
        <p>${AR("إِيَّاكَ نَعْبُدُ")}: mef'ûlün öne alınmasıyla “<i>yalnız</i> sana kulluk ederiz” manası çıkar.</p>
        <h4>Îcâz, ıtnâb, müsâvât</h4>
        <ul>
          <li><b>Müsâvât:</b> Lafzın manaya eşit olması.</li>
          <li><b>Îcâz-ı kasr:</b> Az sözle çok mana: ${AR("وَلَكُمْ فِي الْقِصَاصِ حَيَاةٌ")} (Bakara 179).</li>
          <li><b>Îcâz-ı hazf:</b> Bir kısmın hazfiyle: ${AR("وَاسْأَلِ الْقَرْيَةَ")} (Yûsuf 82), yani köy halkına sor.</li>
          <li><b>Itnâb:</b> Bir fayda için mananın gerektirdiğinden fazla söz. Örneğin genelden sonra özeli zikretmek: ${AR("حَافِظُوا عَلَى الصَّلَوَاتِ وَالصَّلَاةِ الْوُسْطَى")} (Bakara 238).</li>
        </ul>
        <h4>Fasl ve vasl</h4>
        <p>İki cümleyi ${AR("وَ")} ile bağlamaya <b>vasl</b>, bağlamamaya <b>fasl</b> denir. Cümleler arasında tam bir birlik (ikinci birincinin te'kîdi veya açıklaması) ya da tam bir ayrılık varsa fasl, aralarında uygun bir münasebet varsa vasl yapılır.</p>`,
      cards: [
        ["Kasr", "Bir şeyi bir şeye has kılmak"],
        ["Kasrın dört temel yolu", "Nefy-istisnâ, إِنَّمَا, takdîm, atıf"],
        [AR("إِيَّاكَ نَعْبُدُ") + " — kasrın yolu", "Takdîm (mef'ûlün öne alınması)"],
        [AR("وَمَا مُحَمَّدٌ إِلَّا رَسُولٌ") + " — kasrın yolu", "Nefy ve istisnâ"],
        ["Îcâz-ı kasr", "Hazf olmadan az sözle çok mana"],
        [AR("وَلَكُمْ فِي الْقِصَاصِ حَيَاةٌ"), "Îcâz-ı kasr"],
        [AR("وَاسْأَلِ الْقَرْيَةَ"), "Îcâz-ı hazf (köy halkı)"],
        ["Itnâb", "Bir fayda için fazla söz"],
        ["Vasl", "İki cümleyi و ile bağlamak"],
        ["Fasl", "İki cümleyi bağlamamak"]
      ]
    },
    {
      id: "tesbih", title: "Beyân I: Teşbihin Çeşitleri",
      body: `
        <p>Teşbihin rükünlerini ilk derste gördük: müşebbeh, müşebbehün bih, vech-i şebeh, edât. Rükünlerin zikredilip edilmemesine göre teşbih çeşitlenir:</p>
        <table>
          <tr><th>Çeşit</th><th>Tarif</th><th>Örnek</th></tr>
          <tr><td><b>Mürsel</b></td><td>Edatı zikredilmiş</td><td lang="ar">زَيْدٌ كَالْأَسَدِ</td></tr>
          <tr><td><b>Müekked</b></td><td>Edatı hazfedilmiş</td><td lang="ar">زَيْدٌ أَسَدٌ فِي الشَّجَاعَةِ</td></tr>
          <tr><td><b>Mufassal</b></td><td>Vech-i şebeh zikredilmiş</td><td lang="ar">زَيْدٌ كَالْأَسَدِ فِي الشَّجَاعَةِ</td></tr>
          <tr><td><b>Mücmel</b></td><td>Vech-i şebeh hazfedilmiş</td><td lang="ar">زَيْدٌ كَالْأَسَدِ</td></tr>
          <tr><td><b>Beliğ</b></td><td>Hem edat hem vech hazfedilmiş</td><td lang="ar">زَيْدٌ أَسَدٌ</td></tr>
        </table>
        <ul>
          <li><b>Teşbîh-i beliğ</b> Kur'an'da: ${AR("هُنَّ لِبَاسٌ لَكُمْ وَأَنْتُمْ لِبَاسٌ لَهُنَّ")} (Bakara 187).</li>
          <li><b>Mürsel-mücmel:</b> ${AR("وَلَهُ الْجَوَارِ الْمُنْشَآتُ فِي الْبَحْرِ كَالْأَعْلَامِ")} (Rahmân 24): gemiler dağlar gibi.</li>
          <li><b>Teşbîh-i temsîlî:</b> Vech-i şebeh birçok unsurdan alınmış bir tablodur: ${AR("مَثَلُ الَّذِينَ يُنْفِقُونَ أَمْوَالَهُمْ فِي سَبِيلِ اللّٰهِ كَمَثَلِ حَبَّةٍ أَنْبَتَتْ سَبْعَ سَنَابِلَ")} (Bakara 261).</li>
          <li><b>Teşbîh-i maklûb:</b> Müşebbeh, vech-i şebehte daha güçlüymüş gibi müşebbehün bih yapılır.</li>
        </ul>`,
      cards: [
        ["Teşbîh-i mürsel", "Edatı zikredilen teşbih"],
        ["Teşbîh-i müekked", "Edatı hazfedilen teşbih"],
        ["Teşbîh-i mufassal", "Vech-i şebehi zikredilen teşbih"],
        ["Teşbîh-i mücmel", "Vech-i şebehi hazfedilen teşbih"],
        ["Teşbîh-i beliğ", "Edat ve vech-i şebehi hazfedilen teşbih"],
        [AR("هُنَّ لِبَاسٌ لَكُمْ"), "Teşbîh-i beliğ"],
        ["Teşbîh-i temsîlî", "Vech-i şebehi birçok unsurdan alınmış bir tablo olan teşbih"],
        [AR("كَمَثَلِ حَبَّةٍ أَنْبَتَتْ سَبْعَ سَنَابِلَ"), "Teşbîh-i temsîlî"]
      ]
    },
    {
      id: "mecaz", title: "Beyân II: Mecaz, İstiâre, Kinâye",
      body: `
        <p><b>Hakikat</b> lafzın konulduğu manada, <b>mecaz</b> ise bir <b>alâka</b> ve asıl manayı engelleyen bir <b>karîne</b> ile başka manada kullanılmasıdır.</p>
        <h4>Mecâz-ı mürsel (alâkası benzerlik dışında olan mecaz)</h4>
        <table>
          <tr><th>Alâka</th><th>Örnek</th><th>Açıklama</th></tr>
          <tr><td>Cüz'iyyet</td><td lang="ar">فَتَحْرِيرُ رَقَبَةٍ (Nisâ 92)</td><td>Boyun (parça) → köle (bütün)</td></tr>
          <tr><td>Külliyyet</td><td lang="ar">يَجْعَلُونَ أَصَابِعَهُمْ فِي آذَانِهِمْ (Bakara 19)</td><td>Parmak (bütün) → parmak ucu</td></tr>
          <tr><td>Müsebbebiyyet</td><td lang="ar">وَيُنَزِّلُ لَكُمْ مِنَ السَّمَاءِ رِزْقًا (Mü'min 13)</td><td>Rızık (sonuç) → yağmur (sebep)</td></tr>
          <tr><td>Mahalliyyet</td><td lang="ar">وَاسْأَلِ الْقَرْيَةَ (Yûsuf 82)</td><td>Köy (yer) → halkı</td></tr>
          <tr><td>Hâliyyet</td><td lang="ar">فَفِي رَحْمَةِ اللّٰهِ هُمْ فِيهَا خَالِدُونَ (Âl-i İmrân 107)</td><td>Rahmet (içindeki) → cennet</td></tr>
          <tr><td>Mâ kân (geçmiş)</td><td lang="ar">وَآتُوا الْيَتَامَى أَمْوَالَهُمْ (Nisâ 2)</td><td>Önceden yetim olanlar</td></tr>
          <tr><td>Mâ yekûn (gelecek)</td><td lang="ar">إِنِّي أَرَانِي أَعْصِرُ خَمْرًا (Yûsuf 36)</td><td>Şaraba dönüşecek üzüm</td></tr>
        </table>
        <p><b>Mecâz-ı aklî:</b> Fiilin asıl fâilinden başkasına isnadı: ${AR("أَنْبَتَ الرَّبِيعُ الْبَقْلَ")} (bitkiyi bahar bitirdi).</p>
        <h4>İstiâre (alâkası benzerlik olan mecaz)</h4>
        <ul>
          <li><b>İstiâre-i tasrîhiyye:</b> Müşebbehün bih açıkça zikredilir: ${AR("لِتُخْرِجَ النَّاسَ مِنَ الظُّلُمَاتِ إِلَى النُّورِ")} (İbrâhîm 1): karanlıklar = sapıklık, nur = hidayet.</li>
          <li><b>İstiâre-i mekniyye:</b> Müşebbehün bih hazfedilir, bir lâzımı zikredilir: ${AR("وَاخْفِضْ لَهُمَا جَنَاحَ الذُّلِّ")} (İsrâ 24): tevazu kanatlı bir kuşa benzetilmiş. ${AR("وَاشْتَعَلَ الرَّأْسُ شَيْبًا")} (Meryem 4): ağaran saç alev alan bir şeye benzetilmiş.</li>
        </ul>
        <h4>Kinâye</h4>
        <p>Asıl manayı kastetmek de caiz olmakla beraber, lâzım manayı kastederek söylenen sözdür.</p>
        <ul>
          <li>${AR("كَثِيرُ الرَّمَادِ")} (külü çok): cömert, misafiri çok.</li>
          <li>${AR("طَوِيلُ النِّجَادِ")} (kılıç kayışı uzun): uzun boylu.</li>
          <li>${AR("وَيَوْمَ يَعَضُّ الظَّالِمُ عَلَى يَدَيْهِ")} (Furkān 27): şiddetli pişmanlık.</li>
        </ul>
        <p class="tip">Mecazda asıl mana kastedilemez (karîne engeller); kinâyede asıl mana da kastedilebilir. İkisini ayıran budur.</p>`,
      cards: [
        ["Mecazın iki şartı", "Alâka ve karîne"],
        ["Mecâz-ı mürsel", "Alâkası benzerlik dışında olan mecaz"],
        [AR("فَتَحْرِيرُ رَقَبَةٍ") + " — alâka", "Cüz'iyyet"],
        [AR("يَجْعَلُونَ أَصَابِعَهُمْ فِي آذَانِهِمْ") + " — alâka", "Külliyyet"],
        [AR("وَاسْأَلِ الْقَرْيَةَ") + " — alâka", "Mahalliyyet"],
        [AR("أَعْصِرُ خَمْرًا") + " — alâka", "Gelecekte olacağı şey (mâ yekûn)"],
        ["Mecâz-ı aklî", "Fiili asıl fâilinden başkasına isnad"],
        ["İstiâre-i tasrîhiyye", "Müşebbehün bihin açıkça zikredildiği istiare"],
        ["İstiâre-i mekniyye", "Müşebbehün bihin hazfedilip lâzımının zikredildiği istiare"],
        [AR("وَاخْفِضْ لَهُمَا جَنَاحَ الذُّلِّ"), "İstiâre-i mekniyye"],
        ["Kinâye ile mecazın farkı", "Kinâyede asıl mana da kastedilebilir"],
        [AR("كَثِيرُ الرَّمَادِ"), "Kinâye: cömertlik"]
      ]
    },
    {
      id: "bedi", title: "Bedî': Söz Sanatları",
      body: `
        <p>Bedî', sözün belâgatinden sonra onu güzelleştiren sanatları inceler. İki kısımdır:</p>
        <h4>Muhassenât-ı ma'neviyye (manaya dair)</h4>
        <table>
          <tr><th>Sanat</th><th>Tarif</th><th>Örnek</th></tr>
          <tr><td><b>Tıbâk</b></td><td>Zıt iki manayı bir araya getirmek</td><td lang="ar">وَتَحْسَبُهُمْ أَيْقَاظًا وَهُمْ رُقُودٌ (Kehf 18)</td></tr>
          <tr><td><b>Mukâbele</b></td><td>Birden çok manayı karşıtlarıyla sırayla getirmek</td><td lang="ar">فَلْيَضْحَكُوا قَلِيلًا وَلْيَبْكُوا كَثِيرًا (Tevbe 82)</td></tr>
          <tr><td><b>Tevriye</b></td><td>Yakın ve uzak iki manası olan lafızla uzak manayı kastetmek</td><td>—</td></tr>
          <tr><td><b>Mürââtü'n-nazîr</b></td><td>Birbiriyle ilgili (zıt olmayan) şeyleri bir araya getirmek</td><td lang="ar">الشَّمْسُ وَالْقَمَرُ بِحُسْبَانٍ (Rahmân 5)</td></tr>
          <tr><td><b>Hüsn-i ta'lîl</b></td><td>Bir şeye gerçek olmayan güzel bir sebep göstermek</td><td>—</td></tr>
        </table>
        <h4>Muhassenât-ı lafziyye (lafza dair)</h4>
        <table>
          <tr><td><b>Cinâs-ı tâm</b></td><td>Lafızları aynı, manaları farklı iki kelime</td><td lang="ar">وَيَوْمَ تَقُومُ السَّاعَةُ يُقْسِمُ الْمُجْرِمُونَ مَا لَبِثُوا غَيْرَ سَاعَةٍ (Rûm 55)</td></tr>
          <tr><td><b>Cinâs-ı nâkıs</b></td><td>Harflerin türü, sayısı, sırası veya harekesinde fark olan cinas</td><td>—</td></tr>
          <tr><td><b>Seci'</b></td><td>Nesirde fasılaların son harfte uyuşması</td><td lang="ar">فَأَمَّا الْيَتِيمَ فَلَا تَقْهَرْ ۝ وَأَمَّا السَّائِلَ فَلَا تَنْهَرْ (Duhâ 9-10)</td></tr>
          <tr><td><b>İktibâs</b></td><td>Söze âyet veya hadisten bir parça katmak</td><td>—</td></tr>
          <tr><td><b>Redd-i acz ale's-sadr</b></td><td>Başta geçen lafzı sonda tekrar etmek</td><td>—</td></tr>
        </table>
        <p>Rûm 55'te ilk ${AR("السَّاعَةُ")} kıyamet, ikinci ${AR("سَاعَةٍ")} ise zaman dilimi demektir. Bu, cinâs-ı tâmmın en meşhur örneğidir.</p>`,
      cards: [
        ["Bedî'in iki kısmı", "Muhassenât-ı ma'neviyye ve lafziyye"],
        ["Tıbâk", "Zıt iki manayı bir araya getirmek"],
        ["Mukâbele", "Birden çok manayı karşıtlarıyla sırayla getirmek"],
        [AR("أَيْقَاظًا وَهُمْ رُقُودٌ"), "Tıbâk"],
        [AR("فَلْيَضْحَكُوا قَلِيلًا وَلْيَبْكُوا كَثِيرًا"), "Mukâbele"],
        ["Tevriye", "İki manalı lafızla uzak manayı kastetmek"],
        ["Cinâs-ı tâm", "Lafzı aynı, manası farklı iki kelime"],
        [AR("السَّاعَةُ ... سَاعَةٍ") + " (Rûm 55)", "Cinâs-ı tâm"],
        ["Seci'", "Nesirde fasılaların son harfte uyuşması"],
        ["Mürââtü'n-nazîr", "Birbiriyle ilgili şeyleri bir araya getirmek"]
      ]
    }
  );
})();
