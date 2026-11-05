// Nahiv — Kâfiye seviyesi konular: mef'ûller, hâl, temyîz, istisnâ, tâbi'ler, münâdâ.
(function () {
  const AR = (s) => `<span lang="ar">${s}</span>`;
  const D = window.DERSLER;

  D["k-nahiv"].push(
    {
      id: "mefuller", title: "Mef'ûller (Mansûbât I)",
      body: `
        <p>İbnü'l-Hâcib Kâfiye'de mansûbâtı <b>mef'ûller</b> ile başlatır. Beş mef'ûl vardır ve hepsi <b>mansûb</b>dur:</p>
        <table>
          <tr><th>Mef'ûl</th><th>Tarifi</th><th>Örnek</th></tr>
          <tr><td><b>Mef'ûl-i mutlak</b></td><td>Fiilinin masdarı; fiili te'kîd eder, çeşidini veya sayısını bildirir</td><td lang="ar">ضَرَبْتُ ضَرْبًا · جَلَسْتُ جِلْسَةَ الْقَارِئِ · ضَرَبْتُ ضَرْبَتَيْنِ</td></tr>
          <tr><td><b>Mef'ûlün bih</b></td><td>Fâilin fiilinin üzerine vâki olduğu isim</td><td lang="ar">ضَرَبَ زَيْدٌ عَمْرًا</td></tr>
          <tr><td><b>Mef'ûlün fîh</b> (zarf)</td><td>Fiilin vâki olduğu zaman veya mekân; ${AR("فِي")} manasını taşır</td><td lang="ar">صُمْتُ يَوْمَ الْخَمِيسِ · جَلَسْتُ أَمَامَ الْبَيْتِ</td></tr>
          <tr><td><b>Mef'ûlün leh</b></td><td>Fiilin sebebini bildiren masdar</td><td lang="ar">قُمْتُ إِجْلَالًا لِلْأُسْتَاذِ</td></tr>
          <tr><td><b>Mef'ûlün maah</b></td><td>Beraberlik bildiren vav'dan (vâv-ı maiyyet) sonra gelen isim</td><td lang="ar">سِرْتُ وَالنِّيلَ</td></tr>
        </table>
        <h4>Kur'an'dan örnekler</h4>
        <ul>
          <li>${AR("وَكَلَّمَ اللّٰهُ مُوسٰى تَكْلِيمًا")}: ${AR("تَكْلِيمًا")} mef'ûl-i mutlak (te'kîd).</li>
          <li>${AR("يَجْعَلُونَ أَصَابِعَهُمْ فِي آذَانِهِمْ مِنَ الصَّوَاعِقِ حَذَرَ الْمَوْتِ")}: ${AR("حَذَرَ")} mef'ûlün leh.</li>
        </ul>
        <p class="tip">Mef'ûl-i mutlakın fiili bazen hazfedilir: ${AR("سُبْحَانَ اللّٰهِ")} (takdiri: ${AR("أُسَبِّحُ سُبْحَانَ اللّٰهِ")}), ${AR("شُكْرًا")}.</p>`,
      cards: [
        ["Beş mef'ûl", "Mutlak, bih, fîh, leh, maah"],
        ["Mef'ûl-i mutlak", "Fiilinin masdarı (te'kîd, nev', aded)"],
        ["Mef'ûlün fîh", "Zaman veya mekân zarfı (فِي manasında)"],
        ["Mef'ûlün leh", "Fiilin sebebini bildiren masdar"],
        ["Mef'ûlün maah", "Vâv-ı maiyyetten sonra gelen isim"],
        [AR("ضَرَبْتُ ضَرْبَتَيْنِ") + " — " + AR("ضَرْبَتَيْنِ"), "Mef'ûl-i mutlak (aded/sayı)"],
        [AR("قُمْتُ إِجْلَالًا") + " — " + AR("إِجْلَالًا"), "Mef'ûlün leh"],
        [AR("سِرْتُ وَالنِّيلَ") + " — " + AR("النِّيلَ"), "Mef'ûlün maah"],
        [AR("سُبْحَانَ اللّٰهِ") + " — " + AR("سُبْحَانَ"), "Fiili hazfedilmiş mef'ûl-i mutlak"]
      ],
      exercises: [
        { ar: "ضَرَبْتُ اللِّصَّ ضَرْبًا", words: [["ضَرَبْتُ", "Fiil-i mâzî", "Sükûn üzere mebnî; تُ zamiri fâil"], ["اللِّصَّ", "Mef'ûlün bih", "Mansûb, alameti fetha"], ["ضَرْبًا", "Mef'ûl-i mutlak", "Mansûb; fiili te'kîd eder"]] },
        { ar: "جَلَسْتُ أَمَامَ الْبَيْتِ", words: [["جَلَسْتُ", "Fiil-i mâzî", "Sükûn üzere mebnî; تُ fâil"], ["أَمَامَ", "Mef'ûlün fîh", "Mekân zarfı, mansûb; aynı zamanda muzâf"], ["الْبَيْتِ", "Muzâfun ileyh", "Mecrûr, alameti kesra"]] },
        { ar: "قُمْتُ إِجْلَالًا لِلْأُسْتَاذِ", words: [["قُمْتُ", "Fiil-i mâzî", "Sükûn üzere mebnî; تُ fâil"], ["إِجْلَالًا", "Mef'ûlün leh", "Mansûb; kalkmanın sebebi"], ["لِلْأُسْتَاذِ", "Câr-mecrûr", "إِجْلَالًا'ya müteallık"]] }
      ]
    },
    {
      id: "hal-temyiz", title: "Hâl ve Temyîz",
      body: `
        <h4>Hâl</h4>
        <p>Fâilin veya mef'ûlün, fiil vâki olduğu andaki <b>durumunu</b> bildiren mansûb isimdir. Durumu bildirilen kelimeye <b>sâhibü'l-hâl</b> denir.</p>
        <p class="ar-block" lang="ar">جَاءَ زَيْدٌ رَاكِبًا</p>
        <ul>
          <li>Hâl kural olarak <b>nekre</b>, sâhibü'l-hâl kural olarak <b>marife</b>dir.</li>
          <li>Hâl çoğunlukla ism-i fâil veya ism-i mef'ûldür. Cümle de olabilir (vav ile veya vavsız): ${AR("جَاءَ زَيْدٌ وَهُوَ يَضْحَكُ")}.</li>
          <li>“Nasıl?” sorusunun cevabıdır: Zeyd nasıl geldi? — Binmiş olarak.</li>
        </ul>
        <p>Kur'an'dan: ${AR("فَخَرَجَ مِنْهَا خَائِفًا يَتَرَقَّبُ")}: ${AR("خَائِفًا")} hâl.</p>
        <h4>Temyîz</h4>
        <p>Bir kelimenin veya nispetin <b>kapalılığını gideren</b> nekre ve mansûb isimdir. Kapalı olan kelimeye <b>mümeyyez</b> denir.</p>
        <ul>
          <li><b>Zâtın temyîzi:</b> Sayı, ölçü, tartı ve miktardan sonra: ${AR("اِشْتَرَيْتُ عِشْرِينَ كِتَابًا")}, ${AR("رِطْلٌ زَيْتًا")}.</li>
          <li><b>Nispetin temyîzi:</b> Cümledeki isnadın hangi yönden olduğunu açıklar: ${AR("طَابَ زَيْدٌ نَفْسًا")}, ${AR("وَاشْتَعَلَ الرَّأْسُ شَيْبًا")}.</li>
        </ul>
        <p class="tip">Ayırt etmek için: <b>Hâl</b> “nasıl?” sorusuna, <b>temyîz</b> “ne bakımından / neden?” sorusuna cevap verir.</p>`,
      cards: [
        ["Hâl", "Fiil anında fâil/mef'ûlün durumunu bildiren mansûb isim"],
        ["Sâhibü'l-hâl", "Durumu bildirilen kelime (genellikle marife)"],
        ["Hâl nekre mi marife mi?", "Nekre"],
        ["Hâl hangi soruya cevap verir?", "Nasıl?"],
        ["Temyîz", "Kapalılığı gideren nekre ve mansûb isim"],
        ["Mümeyyez", "Kapalılığı giderilen kelime"],
        [AR("جَاءَ زَيْدٌ رَاكِبًا") + " — " + AR("رَاكِبًا"), "Hâl"],
        [AR("وَاشْتَعَلَ الرَّأْسُ شَيْبًا") + " — " + AR("شَيْبًا"), "Temyîz (nispetin temyîzi)"],
        [AR("عِشْرِينَ كِتَابًا") + " — " + AR("كِتَابًا"), "Temyîz (sayının temyîzi)"]
      ],
      exercises: [
        { ar: "جَاءَ زَيْدٌ رَاكِبًا", words: [["جَاءَ", "Fiil-i mâzî", "Fetha üzere mebnî"], ["زَيْدٌ", "Fâil", "Merfû; sâhibü'l-hâl"], ["رَاكِبًا", "Hâl", "Mansûb, alameti fetha"]] },
        { ar: "اِشْتَعَلَ الرَّأْسُ شَيْبًا", words: [["اِشْتَعَلَ", "Fiil-i mâzî", "Fetha üzere mebnî"], ["الرَّأْسُ", "Fâil", "Merfû, alameti damme"], ["شَيْبًا", "Temyîz", "Mansûb; nispetin temyîzi"]] }
      ]
    },
    {
      id: "istisna", title: "İstisnâ",
      body: `
        <p><b>İstisnâ</b>, bir ismi önceki hükmün dışında tutmaktır. Dışarıda tutulan isme <b>müstesnâ</b>, içinden çıkarıldığı isme <b>müstesnâ minh</b> denir.</p>
        <p>İstisnâ edatları: ${AR("إِلَّا، غَيْرُ، سِوَى، خَلَا، عَدَا، حَاشَا")}.</p>
        <h4>${AR("إِلَّا")} ile müstesnânın i'râbı</h4>
        <table>
          <tr><th>Durum</th><th>Hüküm</th><th>Örnek</th></tr>
          <tr><td><b>Tâm ve mûceb</b> (müstesnâ minh var, cümle olumlu)</td><td>Müstesnâ <b>mansûb</b></td><td lang="ar">جَاءَ الْقَوْمُ إِلَّا زَيْدًا</td></tr>
          <tr><td><b>Tâm ve menfî</b> (müstesnâ minh var, cümle olumsuz)</td><td>Mansûb veya müstesnâ minhe <b>bedel</b> (tercih edilen)</td><td lang="ar">مَا جَاءَ أَحَدٌ إِلَّا زَيْدٌ / زَيْدًا</td></tr>
          <tr><td><b>Müferreğ</b> (müstesnâ minh yok, cümle olumsuz)</td><td>${AR("إِلَّا")} yokmuş gibi, <b>âmile göre</b> i'râb</td><td lang="ar">مَا جَاءَ إِلَّا زَيْدٌ · مَا رَأَيْتُ إِلَّا زَيْدًا</td></tr>
        </table>
        <h4>Diğer edatlar</h4>
        <ul>
          <li>${AR("غَيْرُ")} ve ${AR("سِوَى")}: Müstesnâ bunlardan sonra <b>muzâfun ileyh</b> olarak mecrûr olur. ${AR("غَيْرُ")} kelimesinin kendisi, ${AR("إِلَّا")}'dan sonraki ismin alacağı i'râbı alır: ${AR("جَاءَ الْقَوْمُ غَيْرَ زَيْدٍ")}.</li>
          <li>${AR("خَلَا، عَدَا، حَاشَا")}: Harf-i cer sayılırsa müstesnâ mecrûr, fiil sayılırsa mansûb olur.</li>
        </ul>
        <p><b>Muttasıl istisnâ</b>: müstesnâ, müstesnâ minhin cinsindendir. <b>Munkatı'</b>: cinsinden değildir (${AR("جَاءَ الْقَوْمُ إِلَّا حِمَارًا")}).</p>`,
      cards: [
        ["Müstesnâ", "Hükmün dışında tutulan isim"],
        ["Müstesnâ minh", "Müstesnânın içinden çıkarıldığı isim"],
        ["Tâm ve mûceb istisnâda müstesnâ", "Mansûb"],
        ["Müferreğ istisnâ", "Müstesnâ minh yok; isim âmile göre i'râb alır"],
        ["Tâm ve menfî istisnâda müstesnâ", "Mansûb veya bedel (bedel tercih edilir)"],
        [AR("غَيْرُ") + "'dan sonraki müstesnâ", "Muzâfun ileyh olarak mecrûr"],
        [AR("جَاءَ الْقَوْمُ إِلَّا زَيْدًا") + " — " + AR("زَيْدًا"), "Müstesnâ, mansûb"],
        [AR("مَا جَاءَ إِلَّا زَيْدٌ") + " — " + AR("زَيْدٌ"), "Fâil (müferreğ istisnâ)"],
        ["Munkatı' istisnâ", "Müstesnâ, müstesnâ minhin cinsinden değil"]
      ],
      exercises: [
        { ar: "جَاءَ الْقَوْمُ إِلَّا زَيْدًا", words: [["جَاءَ", "Fiil-i mâzî", "Fetha üzere mebnî"], ["الْقَوْمُ", "Fâil", "Merfû; müstesnâ minh"], ["إِلَّا", "İstisnâ edatı", "Sükûn üzere mebnî harf"], ["زَيْدًا", "Müstesnâ", "Mansûb (tâm ve mûceb)"]] },
        { ar: "مَا جَاءَ إِلَّا زَيْدٌ", words: [["مَا", "Harf (nefy)", "Nefy harfi, mebnî"], ["جَاءَ", "Fiil-i mâzî", "Fetha üzere mebnî"], ["إِلَّا", "İstisnâ edatı", "İstisnâ manası var, amel yok (müferreğ)"], ["زَيْدٌ", "Fâil", "Merfû; müferreğ istisnâda âmile göre i'râb"]] }
      ]
    },
    {
      id: "tabiler", title: "Tâbi'ler: Na't, Te'kîd, Atf, Bedel",
      body: `
        <p><b>Tâbi'</b>, kendinden önceki kelimenin (metbû') i'râbına uyan kelimedir. Dört tâbi' vardır:</p>
        <h4>1. Na't (sıfat)</h4>
        <p>Metbû'unu niteler. <b>Hakîkî na't</b> metbû'una dört yönden uyar: i'râb, marifelik/nekrelik, cinsiyet, sayı.</p>
        <p>${AR("جَاءَ رَجُلٌ كَرِيمٌ")} · ${AR("رَأَيْتُ الْمَرْأَةَ الصَّالِحَةَ")}</p>
        <h4>2. Te'kîd</h4>
        <ul>
          <li><b>Lafzî:</b> Kelimenin aynen tekrarı: ${AR("جَاءَ زَيْدٌ زَيْدٌ")}.</li>
          <li><b>Ma'nevî:</b> ${AR("نَفْسٌ، عَيْنٌ، كُلٌّ، جَمِيعٌ، كِلَا، كِلْتَا")} ile, metbû'a dönen zamirle birlikte: ${AR("جَاءَ الْأَمِيرُ نَفْسُهُ")}, ${AR("جَاءَ الْقَوْمُ كُلُّهُمْ")}.</li>
        </ul>
        <h4>3. Atf</h4>
        <ul>
          <li><b>Atf-ı nesak:</b> Atıf harfiyle: ${AR("وَ، فَ، ثُمَّ، أَوْ، أَمْ، بَلْ، لٰكِنْ، لَا، حَتَّى")}. ${AR("جَاءَ زَيْدٌ وَعَمْرٌو")}.</li>
          <li><b>Atf-ı beyân:</b> Harfsiz; metbû'u açıklar, genellikle daha meşhur isimdir: ${AR("أَقْسَمَ بِاللّٰهِ أَبُو حَفْصٍ عُمَرُ")}.</li>
        </ul>
        <p>Anlam farkı: ${AR("وَ")} sırasız birliktelik, ${AR("فَ")} sıra ve ardışıklık, ${AR("ثُمَّ")} sıra ve aralık bildirir.</p>
        <h4>4. Bedel</h4>
        <table>
          <tr><td><b>Bedel-i küll</b></td><td>Metbû'un tamamı</td><td lang="ar">جَاءَ أَخُوكَ زَيْدٌ</td></tr>
          <tr><td><b>Bedel-i ba'z</b></td><td>Metbû'un bir parçası</td><td lang="ar">أَكَلْتُ الرَّغِيفَ ثُلُثَهُ</td></tr>
          <tr><td><b>Bedel-i iştimâl</b></td><td>Metbû'la ilgili bir şey</td><td lang="ar">أَعْجَبَنِي زَيْدٌ عِلْمُهُ</td></tr>
          <tr><td><b>Bedel-i galat</b></td><td>Dil sürçmesinin düzeltilmesi</td><td lang="ar">رَأَيْتُ زَيْدًا الْفَرَسَ</td></tr>
        </table>`,
      cards: [
        ["Dört tâbi'", "Na't, te'kîd, atf, bedel"],
        ["Hakîkî na't metbû'una kaç yönden uyar?", "Dört: i'râb, marifelik, cinsiyet, sayı"],
        ["Ma'nevî te'kîd lafızları", AR("نَفْسٌ، عَيْنٌ، كُلٌّ، جَمِيعٌ، كِلَا، كِلْتَا")],
        ["Atf-ı nesak", "Atıf harfiyle yapılan atf"],
        ["Atf-ı beyân", "Harfsiz, metbû'u açıklayan atf"],
        [AR("فَ") + " ile " + AR("ثُمَّ") + " farkı", AR("فَ") + " ardışıklık, " + AR("ثُمَّ") + " aralıklı sıra"],
        [AR("أَكَلْتُ الرَّغِيفَ ثُلُثَهُ") + " — " + AR("ثُلُثَهُ"), "Bedel-i ba'z"],
        [AR("أَعْجَبَنِي زَيْدٌ عِلْمُهُ") + " — " + AR("عِلْمُهُ"), "Bedel-i iştimâl"],
        [AR("جَاءَ الْأَمِيرُ نَفْسُهُ") + " — " + AR("نَفْسُهُ"), "Ma'nevî te'kîd"]
      ],
      exercises: [
        { ar: "جَاءَ رَجُلٌ كَرِيمٌ", words: [["جَاءَ", "Fiil-i mâzî", "Fetha üzere mebnî"], ["رَجُلٌ", "Fâil", "Merfû, alameti damme"], ["كَرِيمٌ", "Na't (sıfat)", "Metbû'una uyarak merfû"]] },
        { ar: "جَاءَ زَيْدٌ وَعَمْرٌو", words: [["جَاءَ", "Fiil-i mâzî", "Fetha üzere mebnî"], ["زَيْدٌ", "Fâil", "Merfû; ma'tûfun aleyh"], ["وَ", "Atıf harfi", "Fetha üzere mebnî"], ["عَمْرٌو", "Ma'tûf", "Fâile atfedilmiş, merfû"]] },
        { ar: "أَكَلْتُ الرَّغِيفَ ثُلُثَهُ", words: [["أَكَلْتُ", "Fiil-i mâzî", "Sükûn üzere mebnî; تُ fâil"], ["الرَّغِيفَ", "Mef'ûlün bih", "Mansûb, alameti fetha"], ["ثُلُثَهُ", "Bedel", "Bedel-i ba'z; mansûb"]] },
        { ar: "جَاءَ الْأَمِيرُ نَفْسُهُ", words: [["جَاءَ", "Fiil-i mâzî", "Fetha üzere mebnî"], ["الْأَمِيرُ", "Fâil", "Merfû, alameti damme"], ["نَفْسُهُ", "Te'kîd", "Ma'nevî te'kîd, merfû"]] }
      ]
    },
    {
      id: "munada", title: "Münâdâ (Nidâ)",
      body: `
        <p><b>Münâdâ</b>, nidâ harfiyle çağrılan isimdir. Nidâ harfleri: ${AR("يَا، أَيَا، هَيَا، أَيْ، أَ")}. En yaygını ${AR("يَا")}'dır. Münâdâ aslında mansûbdur (takdiri: ${AR("أَدْعُو")}).</p>
        <table>
          <tr><th>Münâdâ çeşidi</th><th>Hüküm</th><th>Örnek</th></tr>
          <tr><td><b>Müfred alem</b></td><td>Damme üzere mebnî (mahallen mansûb)</td><td lang="ar">يَا زَيْدُ</td></tr>
          <tr><td><b>Nekre-i maksûde</b> (belirli kişi)</td><td>Damme üzere mebnî</td><td lang="ar">يَا رَجُلُ</td></tr>
          <tr><td><b>Muzâf</b></td><td>Mansûb</td><td lang="ar">يَا عَبْدَ اللّٰهِ · يَا رَسُولَ اللّٰهِ</td></tr>
          <tr><td><b>Şibh-i muzâf</b></td><td>Mansûb</td><td lang="ar">يَا طَالِعًا جَبَلًا</td></tr>
          <tr><td><b>Nekre-i gayr-i maksûde</b></td><td>Mansûb</td><td lang="ar">يَا غَافِلًا تَنَبَّهْ</td></tr>
        </table>
        <ul>
          <li>Elif-lâmlı isme doğrudan ${AR("يَا")} gelmez; araya ${AR("أَيُّهَا")} / ${AR("أَيَّتُهَا")} girer: ${AR("يَا أَيُّهَا النَّاسُ")}, ${AR("يَا أَيُّهَا الَّذِينَ آمَنُوا")}.</li>
          <li>${AR("اللّٰهُمَّ")}: ${AR("يَا اللّٰهُ")} manasındadır; nidâ harfi hazfedilmiş, yerine sondaki şeddeli mim gelmiştir.</li>
          <li>Nidâ harfi hazfedilebilir: ${AR("رَبَّنَا آتِنَا")} (${AR("يَا رَبَّنَا")}).</li>
        </ul>`,
      cards: [
        ["Münâdâ", "Nidâ harfiyle çağrılan isim"],
        ["Müfred alem münâdâ", "Damme üzere mebnî (" + AR("يَا زَيْدُ") + ")"],
        ["Muzâf münâdâ", "Mansûb (" + AR("يَا عَبْدَ اللّٰهِ") + ")"],
        ["Nekre-i maksûde", "Belirli kişiye seslenilen nekre; damme üzere mebnî"],
        ["Elif-lâmlı isme nasıl nidâ edilir?", AR("يَا أَيُّهَا") + " ile"],
        [AR("اللّٰهُمَّ") + " sonundaki mim", "Hazfedilen nidâ harfinin yerine gelir"],
        [AR("رَبَّنَا آتِنَا") + " — " + AR("رَبَّنَا"), "Nidâ harfi hazfedilmiş muzâf münâdâ, mansûb"]
      ],
      exercises: [
        { ar: "يَا عَبْدَ اللّٰهِ", words: [["يَا", "Nidâ harfi", "Sükûn üzere mebnî"], ["عَبْدَ", "Münâdâ", "Muzâf olduğu için mansûb"], ["اللّٰهِ", "Muzâfun ileyh", "Mecrûr, alameti kesra"]] },
        { ar: "يَا أَيُّهَا النَّاسُ", words: [["يَا", "Nidâ harfi", "Sükûn üzere mebnî"], ["أَيُّهَا", "Münâdâ", "Nekre-i maksûde; damme üzere mebnî (هَا tenbih)"], ["النَّاسُ", "Na't (sıfat)", "أَيُّ'nın sıfatı (veya atf-ı beyânı), merfû"]] }
      ]
    }
  );

  // İ'râb alıştırmalarında seçilecek görevler (gruplu)
  window.IRAB_ROLLER = [
    ["Fiiller", ["Fiil-i mâzî", "Fiil-i muzâri", "Nâkıs fiil (kâne grubu)"]],
    ["Merfûât", ["Fâil", "Nâib-i fâil", "Mübtedâ", "Haber", "Kâne'nin ismi", "İnne'nin haberi"]],
    ["Mansûbât", ["Mef'ûlün bih", "Mef'ûl-i mutlak", "Mef'ûlün fîh", "Mef'ûlün leh", "Mef'ûlün maah", "Hâl", "Temyîz", "Müstesnâ", "Münâdâ", "Kâne'nin haberi", "İnne'nin ismi"]],
    ["Mecrûrât", ["Mecrûr (harf-i cer ile)", "Muzâfun ileyh", "Câr-mecrûr"]],
    ["Tâbi'ler", ["Na't (sıfat)", "Te'kîd", "Ma'tûf", "Bedel"]],
    ["Harfler", ["Harf-i cer", "Harf (inne grubu)", "Harf (nasb/cezm edatı)", "Harf (nefy)", "İstisnâ edatı", "Atıf harfi", "Nidâ harfi"]]
  ];
})();
