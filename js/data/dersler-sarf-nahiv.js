// Sarf ve Nahiv için derinleştirilmiş dersler.
// Ders gövdesindeki {{tablo:KÖK:BAB}} ve {{emsile:KÖK:BAB}} işaretleri çekim motoruyla tabloya dönüştürülür.
// exercises: i'râb alıştırmaları — her kelime için doğru görev (role) ve açıklama (irab).

(function () {
  const AR = (s) => `<span lang="ar">${s}</span>`;
  const D = window.DERSLER;

  // ═════════════ SARF ═════════════
  const emsileDers = {
    id: "emsile", title: "Emsile-i Muhtelife",
    body: `
      <p>Medrese talebesinin ilk ezberlerinden olan <b>Emsile</b>, bir fiil kökünden türeyen kalıpları sırasıyla gösterir. Bunlar <b>emsile-i muttarida</b> ve <b>emsile-i muhtelife</b> olarak ikiye ayrılır:</p>
      <ul>
        <li><b>Emsile-i muttarida:</b> Mâzî, muzâri, emir gibi kalıpların 14 (emirde 6) sîgalık düzenli çekimleri. Önceki derste gördük.</li>
        <li><b>Emsile-i muhtelife:</b> Aynı kökten türeyen <i>farklı</i> kalıplar: masdar, ism-i fâil, ism-i mef'ûl, cahd, nefy, emir, nehiy, ism-i zaman-mekân, ism-i âlet, ism-i tafdîl, fiil-i taaccüb.</li>
      </ul>
      <p>Aşağıdaki tablo ${AR("نَصَرَ")} kökü için motor tarafından üretilmiştir:</p>
      {{emsile:نصر:1}}
      <h4>Kalıpların kısa açıklaması</h4>
      <ul>
        <li><b>Masdar-ı mîmî:</b> Başında ${AR("مَ")} bulunan masdar. Sülâsîde ${AR("مَفْعَل")} veznindedir.</li>
        <li><b>Cahd:</b> ${AR("لَمْ")} ile muzâriyi cezm eder ve geçmiş zamanı olumsuz yapar.</li>
        <li><b>Nefy:</b> ${AR("لَا")} ile şimdiki/gelecek zamanın olumsuzu.</li>
        <li><b>Te'kîd nûnları:</b> Şeddeli olana <i>sakîle</i>, sâkin olana <i>hafîfe</i> denir.</li>
        <li><b>İsm-i zaman ve mekân:</b> Muzârisi esreli olanlarda ${AR("مَفْعِل")} (${AR("مَجْلِسٌ")}), diğerlerinde ${AR("مَفْعَل")} (${AR("مَنْصَرٌ")}).</li>
        <li><b>İsm-i âlet:</b> ${AR("مِفْعَل، مِفْعَلَة، مِفْعَال")} vezinleri.</li>
      </ul>
      <p class="tip">Kendi kökünle denemek için <a href="#/cekim">Çekim Aracı</a>'nda “Emsile-i muhtelife” sekmesini aç. Ezber için hocanın okuttuğu nüshayı esas al; nüshalar arasında sıra farkları olabilir.</p>`,
    cards: [
      [AR("نَصْرًا وَمَنْصَرًا") + " ne kalıbı?", "Masdar ve masdar-ı mîmî"],
      [AR("لَمْ يَنْصُرْ"), "Cahd-i mutlak (ma'lûm): yardım etmedi"],
      [AR("لَا يُنْصَرُ"), "Nefy (meçhul): yardım edilmiyor"],
      [AR("لَيَنْصُرَنَّ"), "Te'kîdli muzâri, nûn-ı sakîle"],
      [AR("لَيَنْصُرَنْ"), "Te'kîdli muzâri, nûn-ı hafîfe"],
      [AR("لِيُنْصَرْ"), "Emr-i gâib meçhul: yardım edilsin"],
      [AR("مَنْصَرٌ"), "İsm-i zaman ve mekân"],
      [AR("مِنْصَارٌ"), "İsm-i âlet"],
      [AR("أَنْصَرُ"), "İsm-i tafdîl (müzekker)"],
      [AR("مَا أَنْصَرَهُ"), "Fiil-i taaccüb"],
      ["Muzârisi esreli fiilde ism-i zaman/mekân vezni", AR("مَفْعِل") + " (مَجْلِسٌ)"],
      ["Sülâsîde masdar-ı mîmî vezni", AR("مَفْعَل")]
    ]
  };

  const mehmuzMuzaaf = {
    id: "mehmuz-muzaaf", title: "Mehmûz ve Muzâaf Fiiller",
    body: `
      <h4>Mehmûz</h4>
      <p>Kökünde hemze bulunan fiildir. Hemzenin yerine göre <b>mehmûzü'l-fâ</b> (${AR("أَكَلَ")}), <b>mehmûzü'l-ayn</b> (${AR("سَأَلَ")}) ve <b>mehmûzü'l-lâm</b> (${AR("قَرَأَ")}) olur.</p>
      <p>Çekimi sâlim gibidir. Ancak hemzenin <b>yazıldığı kürsü</b> harekesine ve önceki harfin harekesine göre değişir: esre → ${AR("ئ")}, ötre → ${AR("ؤ")}, üstün → ${AR("أ")}. Kuvvetli olan esre, sonra ötre, sonra üstündür.</p>
      <ul>
        <li>İki hemze yan yana gelip ikincisi sâkin olursa birincinin harekesine uygun med harfine döner: ${AR("أَأْكُلُ → آكُلُ")}, ${AR("أُؤْكَلُ → أُوكَلُ")}.</li>
        <li>${AR("أَخَذَ، أَكَلَ، أَمَرَ")} fiillerinin emri kural dışıdır: ${AR("خُذْ، كُلْ، مُرْ")}.</li>
      </ul>
      {{tablo:قرأ:3}}
      <h4>Muzâaf</h4>
      <p>Aynü'l-fiili ile lâmü'l-fiili aynı harf olan fiildir: ${AR("مَدَّ")} (aslı ${AR("مَدَدَ")}).</p>
      <ul>
        <li>Lâm harekeli ise iki harf <b>idğam</b> edilir: ${AR("مَدَّ، يَمُدُّ")}.</li>
        <li>Lâm sâkin ise (${AR("ـتُ، ـنَ")} ekleri) idğam çözülür: ${AR("مَدَدْتُ، يَمْدُدْنَ")}.</li>
        <li>Emrin müfred müzekker sîgasında iki okuyuş vardır: ${AR("مُدَّ")} ve ${AR("اُمْدُدْ")}.</li>
      </ul>
      {{tablo:مدد:1}}`,
    cards: [
      ["Mehmûz fiil", "Kökünde hemze bulunan fiil"],
      [AR("سَأَلَ") + " ne tür fiil?", "Mehmûzü'l-ayn"],
      [AR("قَرَأَ") + " ne tür fiil?", "Mehmûzü'l-lâm"],
      ["Hemze kürsüsünde kuvvet sırası", "Esre (ئ) > ötre (ؤ) > üstün (أ)"],
      [AR("أَكَلَ") + " fiilinin emri", AR("كُلْ")],
      [AR("أَخَذَ") + " fiilinin emri", AR("خُذْ")],
      [AR("أَكَلَ") + " muzâri, nefs-i mütekellim", AR("آكُلُ")],
      ["Muzâaf fiil", "Aynü'l-fiili ile lâmü'l-fiili aynı olan fiil"],
      [AR("مَدَدْتُ") + " neden idğamsız?", "Lâm sâkin olduğu için idğam çözülür"],
      [AR("مَدَّ") + " fiilinin muzârisi", AR("يَمُدُّ")],
      [AR("مَدَّ") + " fiilinin ism-i fâili", AR("مَادٌّ")]
    ]
  };

  const misalEcvef = {
    id: "misal-ecvef", title: "Misâl ve Ecvef Fiiller",
    body: `
      <h4>Misâl</h4>
      <p>Fâü'l-fiili illet harfi olan fiildir: <b>vâvî</b> (${AR("وَعَدَ")}) veya <b>yâî</b> (${AR("يَسَرَ")}).</p>
      <ul>
        <li>Misâl-i vâvîde muzâri ma'lûm esreli (veya aslı esreli) ise <b>vav düşer</b>: ${AR("وَعَدَ يَعِدُ")}, ${AR("وَضَعَ يَضَعُ")}. Emri de hemzesiz olur: ${AR("عِدْ")}.</li>
        <li>Meçhulde vav düşmez: ${AR("يُوعَدُ")}.</li>
        <li>Sâkin vav, kendinden önceki esre sebebiyle ye'ye döner: ${AR("اِوْجَلْ → اِيجَلْ")}.</li>
      </ul>
      {{tablo:وعد:2}}
      <h4>Ecvef</h4>
      <p>Aynü'l-fiili illet harfi olan fiildir: <b>vâvî</b> (${AR("قَالَ")}, aslı ${AR("قَوَلَ")}) veya <b>yâî</b> (${AR("بَاعَ")}, aslı ${AR("بَيَعَ")}).</p>
      <ul>
        <li>Harekeli illet harfi, öncesi üstün olunca elife döner: ${AR("قَوَلَ → قَالَ")}.</li>
        <li>Lâm sâkin olunca iki sâkin buluşur ve illet harfi düşer: ${AR("قُلْتُ، بِعْتُ، قُلْ")}.</li>
        <li>Sâkin ekli mâzîde fâ harfi vâvî ve ötreli muzârili fiillerde ötre (${AR("قُلْتُ")}), diğerlerinde esre alır (${AR("بِعْتُ، خِفْتُ")}).</li>
        <li>İsm-i fâilde illet harfi hemzeye döner: ${AR("قَائِلٌ، بَائِعٌ")}.</li>
      </ul>
      {{tablo:قول:1}}
      {{tablo:بيع:2}}`,
    cards: [
      ["Misâl fiil", "Fâü'l-fiili illet harfi olan fiil"],
      [AR("وَعَدَ") + " fiilinin muzârisi", AR("يَعِدُ")],
      [AR("وَعَدَ") + " fiilinin emri", AR("عِدْ")],
      [AR("وَعَدَ") + " fiilinin muzâri meçhulü", AR("يُوعَدُ")],
      ["Ecvef fiil", "Aynü'l-fiili illet harfi olan fiil"],
      [AR("قَالَ") + " fiilinin aslı", AR("قَوَلَ")],
      [AR("قَالَ") + " fiilinin nefs-i mütekellimi", AR("قُلْتُ")],
      [AR("بَاعَ") + " fiilinin nefs-i mütekellimi", AR("بِعْتُ")],
      [AR("قَالَ") + " fiilinin emri", AR("قُلْ")],
      [AR("قَالَ") + " fiilinin ism-i fâili", AR("قَائِلٌ")],
      [AR("قَالَ") + " fiilinin ism-i mef'ûlü", AR("مَقُولٌ")],
      [AR("خَافَ") + " fiilinin muzârisi", AR("يَخَافُ")]
    ]
  };

  const nakisDers = {
    id: "nakis", title: "Nâkıs Fiiller",
    body: `
      <p>Lâmü'l-fiili illet harfi olan fiildir: <b>vâvî</b> (${AR("دَعَا")}, aslı ${AR("دَعَوَ")}) veya <b>yâî</b> (${AR("رَمَى")}, aslı ${AR("رَمَيَ")}).</p>
      <h4>Üç temel çekim tipi</h4>
      <table>
        <tr><th>Tip</th><th>Mâzî</th><th>Muzâri</th><th>Emir</th></tr>
        <tr><td>Ötreli muzâri (vâvî)</td><td lang="ar">دَعَا</td><td lang="ar">يَدْعُو</td><td lang="ar">اُدْعُ</td></tr>
        <tr><td>Esreli muzâri (yâî)</td><td lang="ar">رَمَى</td><td lang="ar">يَرْمِي</td><td lang="ar">اِرْمِ</td></tr>
        <tr><td>Üstünlü muzâri</td><td lang="ar">رَضِيَ / سَعَى</td><td lang="ar">يَرْضَى / يَسْعَى</td><td lang="ar">اِرْضَ / اِسْعَ</td></tr>
      </table>
      <ul>
        <li>Mâzîde lâm harfi üstünden sonra elife döner. Vâvîde ${AR("ا")} (${AR("دَعَا")}), yâîde ${AR("ى")} (${AR("رَمَى")}) yazılır.</li>
        <li>Cem-i müzekker gâibde illet harfi düşer: ${AR("دَعَوْا، رَمَوْا، رَضُوا")}.</li>
        <li>Muzâri cezm edilince (cahd, emir, nehiy) illet harfi <b>hazfedilir</b>: ${AR("لَمْ يَدْعُ، اُدْعُ، لَا تَرْمِ")}.</li>
        <li>İsm-i fâil tenvinle ${AR("دَاعٍ، رَامٍ")} olur; ism-i mef'ûlde idğam vardır: ${AR("مَدْعُوٌّ، مَرْمِيٌّ")}.</li>
      </ul>
      {{tablo:دعو:1}}
      {{tablo:رمي:2}}
      {{tablo:رضي:4}}`,
    cards: [
      ["Nâkıs fiil", "Lâmü'l-fiili illet harfi olan fiil"],
      [AR("دَعَا") + " fiilinin aslı", AR("دَعَوَ")],
      [AR("رَمَى") + " fiilinin muzârisi", AR("يَرْمِي")],
      [AR("دَعَا") + " fiilinin muzârisi", AR("يَدْعُو")],
      [AR("رَضِيَ") + " fiilinin muzârisi", AR("يَرْضَى")],
      [AR("دَعَا") + " fiilinin emri", AR("اُدْعُ")],
      [AR("رَمَى") + " fiilinin emri", AR("اِرْمِ")],
      [AR("لَمْ يَدْعُ") + " — vav neden yok?", "Cezm sebebiyle illet harfi hazfedildi"],
      [AR("دَعَا") + " fiilinin ism-i fâili", AR("دَاعٍ")],
      [AR("رَمَى") + " fiilinin ism-i mef'ûlü", AR("مَرْمِيٌّ")],
      [AR("رَمَى") + " cem-i müzekker gâib", AR("رَمَوْا")]
    ]
  };

  // Sarf: emsile, bablardan sonra; illetli fiiller mezîdden sonra
  const sarf = D["k-sarf"];
  sarf.splice(sarf.findIndex((l) => l.id === "bablar") + 1, 0, emsileDers);
  sarf.push(mehmuzMuzaaf, misalEcvef, nakisDers);

  // ═════════════ NAHİV ═════════════
  D["k-nahiv"].push(
    {
      id: "cumle", title: "İsim Cümlesi ve Fiil Cümlesi",
      body: `
        <h4>İsim cümlesi (cümle-i ismiyye)</h4>
        <p>İsimle başlar; <b>mübtedâ</b> ve <b>haber</b>den oluşur. İkisi de merfûdur.</p>
        <p class="ar-block" lang="ar">اَلْعِلْمُ نُورٌ</p>
        <p>${AR("اَلْعِلْمُ")} mübtedâ (marifedir), ${AR("نُورٌ")} haber (çoğunlukla nekredir). Haber; müfred, cümle veya şibh-i cümle (câr-mecrûr, zarf) olabilir: ${AR("زَيْدٌ فِي الْبَيْتِ")}.</p>
        <h4>Fiil cümlesi (cümle-i fiiliyye)</h4>
        <p>Fiille başlar: <b>fiil + fâil (+ mef'ûl)</b>.</p>
        <p class="ar-block" lang="ar">كَتَبَ الطَّالِبُ الدَّرْسَ</p>
        <ul>
          <li>Fiil başta gelince fâil çoğul da olsa fiil <b>müfred</b> kalır: ${AR("جَاءَ الطُّلَّابُ")}.</li>
          <li>Fâil müennes ise fiil de müennes olur: ${AR("جَاءَتْ فَاطِمَةُ")}.</li>
          <li>Meçhul fiilde fâilin yerini <b>nâib-i fâil</b> alır ve merfû olur: ${AR("كُتِبَ الدَّرْسُ")}.</li>
        </ul>`,
      cards: [
        ["İsim cümlesinin iki unsuru", "Mübtedâ ve haber"],
        ["Mübtedâ ve haberin i'râbı", "Merfû"],
        ["Fiil cümlesinin unsurları", "Fiil, fâil (ve mef'ûl)"],
        ["Fâil çoğul olunca öndeki fiil", "Müfred kalır"],
        ["Meçhul fiilin fâili yerine geçen", "Nâib-i fâil (merfû)"],
        ["Şibh-i cümle", "Câr-mecrûr veya zarf"],
        [AR("كُتِبَ الدَّرْسُ") + " — " + AR("الدَّرْسُ"), "Nâib-i fâil"]
      ],
      exercises: [
        { ar: "اَلْعِلْمُ نُورٌ", words: [["اَلْعِلْمُ", "Mübtedâ", "Merfû, alameti damme"], ["نُورٌ", "Haber", "Merfû, alameti damme"]] },
        { ar: "ذَهَبَ الطَّالِبُ إِلَى الْمَسْجِدِ", words: [["ذَهَبَ", "Fiil-i mâzî", "Fetha üzere mebnî"], ["الطَّالِبُ", "Fâil", "Merfû, alameti damme"], ["إِلَى", "Harf-i cer", "Mebnî"], ["الْمَسْجِدِ", "Mecrûr (harf-i cer ile)", "Mecrûr, alameti kesra"]] },
        { ar: "قَرَأَ مُحَمَّدٌ كِتَابَ اللهِ", words: [["قَرَأَ", "Fiil-i mâzî", "Fetha üzere mebnî"], ["مُحَمَّدٌ", "Fâil", "Merfû, alameti damme"], ["كِتَابَ", "Mef'ûlün bih", "Mansûb, alameti fetha; aynı zamanda muzâf"], ["اللهِ", "Muzâfun ileyh", "Mecrûr, alameti kesra"]] }
      ]
    },
    {
      id: "harfi-cer", title: "Harf-i Cerler",
      body: `
        <p>Harf-i cerler isimlerin başına gelir ve onları <b>mecrûr</b> yapar. En yaygın olanları:</p>
        <table>
          <tr><th>Harf</th><th>Başlıca anlamı</th><th>Örnek</th></tr>
          <tr><td lang="ar">بِ</td><td>ile (ilsâk, istiâne)</td><td lang="ar">كَتَبْتُ بِالْقَلَمِ</td></tr>
          <tr><td lang="ar">مِنْ</td><td>-den (başlangıç, ba'zıyyet)</td><td lang="ar">مِنَ الْمَسْجِدِ</td></tr>
          <tr><td lang="ar">إِلَى</td><td>-e (intihâ)</td><td lang="ar">إِلَى الْبَيْتِ</td></tr>
          <tr><td lang="ar">عَنْ</td><td>-den (uzaklaşma, mücâveze)</td><td lang="ar">رَضِيَ اللهُ عَنْهُ</td></tr>
          <tr><td lang="ar">عَلَى</td><td>üzerine (isti'lâ)</td><td lang="ar">عَلَى الْأَرْضِ</td></tr>
          <tr><td lang="ar">فِي</td><td>-de, içinde (zarfiyyet)</td><td lang="ar">فِي الْبَيْتِ</td></tr>
          <tr><td lang="ar">لِ</td><td>için, -e ait (ihtisas, mülk)</td><td lang="ar">اَلْحَمْدُ لِلّٰهِ</td></tr>
          <tr><td lang="ar">كَ</td><td>gibi (teşbih)</td><td lang="ar">كَالْبَدْرِ</td></tr>
          <tr><td lang="ar">حَتَّى</td><td>-e kadar</td><td lang="ar">حَتَّى مَطْلَعِ الْفَجْرِ</td></tr>
          <tr><td lang="ar">رُبَّ</td><td>nice, bazen (teksîr/taklîl)</td><td lang="ar">رُبَّ رَجُلٍ</td></tr>
          <tr><td lang="ar">وَ / تَ</td><td>yemin (kasem)</td><td lang="ar">وَاللهِ، تَاللهِ</td></tr>
          <tr><td lang="ar">مُذْ / مُنْذُ</td><td>-den beri</td><td lang="ar">مُنْذُ يَوْمَيْنِ</td></tr>
        </table>
        <p>Harf-i cer ile mecrûrun toplamına <b>câr-mecrûr</b> denir; bir fiile veya fiil manasındaki kelimeye <b>müteallık</b> olur.</p>
        <p class="tip">Medreselerde harf-i cerlerin hepsi manzum bir şekilde ezberlenir. Liste nüshadan nüshaya biraz farklı olabilir (${AR("خَلَا، عَدَا، حَاشَا، كَيْ، لَعَلَّ")} gibi).</p>`,
      cards: [
        ["Harf-i cerin isme etkisi", "Mecrûr yapar"],
        [AR("بِ") + " başlıca anlamı", "İle (ilsâk, istiâne)"],
        [AR("مِنْ") + " başlıca anlamı", "-den (başlangıç)"],
        [AR("إِلَى") + " başlıca anlamı", "-e (intihâ)"],
        [AR("عَنْ") + " başlıca anlamı", "-den (uzaklaşma)"],
        [AR("عَلَى") + " başlıca anlamı", "Üzerine (isti'lâ)"],
        [AR("لِ") + " başlıca anlamı", "İçin, -e ait"],
        [AR("كَ") + " başlıca anlamı", "Gibi (teşbih)"],
        [AR("مُنْذُ") + " anlamı", "-den beri"],
        ["Câr-mecrûrun bağlandığı kelimeye ne denir?", "Müteallak (câr-mecrûr ona müteallıktır)"]
      ],
      exercises: [
        { ar: "اَلْحَمْدُ لِلّٰهِ", words: [["اَلْحَمْدُ", "Mübtedâ", "Merfû, alameti damme"], ["لِ", "Harf-i cer", "Mebnî"], ["اللّٰهِ", "Mecrûr (harf-i cer ile)", "Mecrûr, alameti kesra; câr-mecrûr mahzûf habere müteallık"]] },
        { ar: "كَتَبْتُ بِالْقَلَمِ", words: [["كَتَبْتُ", "Fiil-i mâzî", "Sükûn üzere mebnî; تُ zamiri fâil"], ["بِ", "Harf-i cer", "Mebnî"], ["الْقَلَمِ", "Mecrûr (harf-i cer ile)", "Mecrûr, alameti kesra"]] }
      ]
    },
    {
      id: "nevasih", title: "Kâne ve İnne Grupları",
      body: `
        <p>İsim cümlesinin başına gelip mübtedâ ve haberin i'râbını değiştiren kelimelere <b>nevâsıh</b> denir.</p>
        <h4>Kâne ve kardeşleri (ef'âl-i nâkısa)</h4>
        <p>İsimlerini <b>merfû</b>, haberlerini <b>mansûb</b> yaparlar: ${AR("كَانَ الْجَوُّ بَارِدًا")}.</p>
        <table>
          <tr><td lang="ar">كَانَ</td><td>idi, oldu</td><td lang="ar">ظَلَّ</td><td>gün boyu ... oldu</td></tr>
          <tr><td lang="ar">صَارَ</td><td>oldu (dönüştü)</td><td lang="ar">بَاتَ</td><td>geceyi ... geçirdi</td></tr>
          <tr><td lang="ar">أَصْبَحَ</td><td>sabahladı, oldu</td><td lang="ar">لَيْسَ</td><td>değildir</td></tr>
          <tr><td lang="ar">أَضْحَى</td><td>kuşluk vakti ... oldu</td><td lang="ar">مَا زَالَ، مَا بَرِحَ، مَا فَتِئَ، مَا انْفَكَّ</td><td>hâlâ ... (devam)</td></tr>
          <tr><td lang="ar">أَمْسَى</td><td>akşamladı, oldu</td><td lang="ar">مَا دَامَ</td><td>... olduğu sürece</td></tr>
        </table>
        <h4>İnne ve kardeşleri (hurûf-ı müşebbehe bi'l-fiil)</h4>
        <p>İsimlerini <b>mansûb</b>, haberlerini <b>merfû</b> yaparlar: ${AR("إِنَّ اللهَ غَفُورٌ رَحِيمٌ")}.</p>
        <table>
          <tr><td lang="ar">إِنَّ</td><td>Te'kîd (muhakkak ki)</td></tr>
          <tr><td lang="ar">أَنَّ</td><td>Te'kîd; cümleyi masdar yapar (-diği)</td></tr>
          <tr><td lang="ar">كَأَنَّ</td><td>Teşbih (sanki)</td></tr>
          <tr><td lang="ar">لٰكِنَّ</td><td>İstidrâk (fakat)</td></tr>
          <tr><td lang="ar">لَيْتَ</td><td>Temennî (keşke)</td></tr>
          <tr><td lang="ar">لَعَلَّ</td><td>Tereccî (umulur ki)</td></tr>
        </table>
        <p class="tip">Kolay hatırlama: <b>Kâne</b> → isim merfû, haber mansûb. <b>İnne</b> → tam tersi.</p>`,
      cards: [
        ["Kâne ve kardeşlerinin etkisi", "İsmi merfû, haberi mansûb"],
        ["İnne ve kardeşlerinin etkisi", "İsmi mansûb, haberi merfû"],
        [AR("صَارَ") + " anlamı", "Oldu (dönüştü)"],
        [AR("لَيْسَ") + " anlamı", "Değildir"],
        [AR("مَا زَالَ") + " anlamı", "Hâlâ ... (devam)"],
        [AR("كَأَنَّ") + " anlamı", "Teşbih (sanki)"],
        [AR("لٰكِنَّ") + " anlamı", "İstidrâk (fakat)"],
        [AR("لَيْتَ") + " anlamı", "Temennî (keşke)"],
        [AR("لَعَلَّ") + " anlamı", "Tereccî (umulur ki)"],
        ["Nevâsıh", "İsim cümlesinin i'râbını değiştiren kelimeler"]
      ],
      exercises: [
        { ar: "إِنَّ اللهَ غَفُورٌ رَحِيمٌ", words: [["إِنَّ", "Harf (inne grubu)", "Fetha üzere mebnî"], ["اللهَ", "İnne'nin ismi", "Mansûb, alameti fetha"], ["غَفُورٌ", "İnne'nin haberi", "Merfû, alameti damme"], ["رَحِيمٌ", "İnne'nin haberi", "İkinci haber, merfû"]] },
        { ar: "كَانَ الْجَوُّ بَارِدًا", words: [["كَانَ", "Nâkıs fiil (kâne grubu)", "Fetha üzere mebnî mâzî"], ["الْجَوُّ", "Kâne'nin ismi", "Merfû, alameti damme"], ["بَارِدًا", "Kâne'nin haberi", "Mansûb, alameti fetha"]] }
      ]
    },
    {
      id: "muzari-irab", title: "Muzâriyi Nasb ve Cezm Edenler",
      body: `
        <h4>Nasb edatları</h4>
        <table>
          <tr><td lang="ar">أَنْ</td><td>-mek, -mesi (masdariyye)</td><td lang="ar">أُرِيدُ أَنْ أَقْرَأَ</td></tr>
          <tr><td lang="ar">لَنْ</td><td>asla ... -meyecek</td><td lang="ar">لَنْ يَنْجَحَ الْكَسُولُ</td></tr>
          <tr><td lang="ar">كَيْ</td><td>-sin diye</td><td lang="ar">لِكَيْ تَتَعَلَّمَ</td></tr>
          <tr><td lang="ar">إِذَنْ</td><td>o hâlde</td><td lang="ar">إِذَنْ تَنْجَحَ</td></tr>
        </table>
        <h4>Tek fiili cezm edenler</h4>
        <table>
          <tr><td lang="ar">لَمْ</td><td>Geçmişi olumsuz yapar (cahd)</td><td lang="ar">لَمْ يَذْهَبْ</td></tr>
          <tr><td lang="ar">لَمَّا</td><td>Henüz ... -medi</td><td lang="ar">لَمَّا يَذْهَبْ</td></tr>
          <tr><td>Lâm-ı emr (${AR("لِ")})</td><td>Gâib emri</td><td lang="ar">لِيَذْهَبْ</td></tr>
          <tr><td>Lâ-yı nehy (${AR("لَا")})</td><td>Yasaklama</td><td lang="ar">لَا تَذْهَبْ</td></tr>
        </table>
        <h4>İki fiili cezm edenler (şart edatları)</h4>
        <p>${AR("إِنْ، مَنْ، مَا، مَهْمَا، مَتَى، أَيْنَ، أَيْنَمَا، حَيْثُمَا، أَنَّى، أَيٌّ")} — hem şart fiilini hem cevabını cezm eder: ${AR("إِنْ تَدْرُسْ تَنْجَحْ")}.</p>
        <h4>Cezm ve nasbın alametleri</h4>
        <ul>
          <li>Sahih muzâride nasb fetha, cezm sükûn ile olur.</li>
          <li>Ef'âl-i hamsede (${AR("يَفْعَلَانِ، يَفْعَلُونَ، تَفْعَلِينَ")}) nasb ve cezm nûnun hazfi ile olur: ${AR("لَمْ يَذْهَبُوا")}.</li>
          <li>Nâkıs muzâride cezm illet harfinin hazfi ile olur: ${AR("لَمْ يَدْعُ")}.</li>
          <li>Sâkin harften sonra sâkin gelince araya esre girer: ${AR("لَمْ يَكْتُبِ الطَّالِبُ")}.</li>
        </ul>`,
      cards: [
        ["Muzâriyi nasb eden edatlar", AR("أَنْ، لَنْ، كَيْ، إِذَنْ")],
        ["Tek fiili cezm edenler", AR("لَمْ، لَمَّا") + ", lâm-ı emr, lâ-yı nehy"],
        [AR("لَمْ") + " fiile ne katar?", "Geçmiş zaman olumsuzluğu (cahd)"],
        [AR("لَنْ") + " fiile ne katar?", "Gelecekte kesin olumsuzluk"],
        ["İki fiili cezm eden harf", AR("إِنْ") + " (şartiyye)"],
        ["Ef'âl-i hamsenin cezm alameti", "Nûnun hazfi"],
        ["Nâkıs muzârinin cezm alameti", "İllet harfinin hazfi"],
        [AR("لَمْ يَكْتُبِ الطَّالِبُ") + " — neden esre?", "İki sâkin buluşmasını önlemek için"]
      ],
      exercises: [
        { ar: "لَنْ يَنْجَحَ الْكَسُولُ", words: [["لَنْ", "Harf (nasb/cezm edatı)", "Sükûn üzere mebnî nasb harfi"], ["يَنْجَحَ", "Fiil-i muzâri", "Mansûb, alameti fetha"], ["الْكَسُولُ", "Fâil", "Merfû, alameti damme"]] },
        { ar: "لَمْ يَكْتُبِ الطَّالِبُ الدَّرْسَ", words: [["لَمْ", "Harf (nasb/cezm edatı)", "Cezm harfi"], ["يَكْتُبِ", "Fiil-i muzâri", "Meczûm; iki sâkin buluştuğu için kesra aldı"], ["الطَّالِبُ", "Fâil", "Merfû, alameti damme"], ["الدَّرْسَ", "Mef'ûlün bih", "Mansûb, alameti fetha"]] }
      ]
    }
  );

  // Alıştırmalarda seçilebilecek görevler
  window.IRAB_ROLLER = [
    "Fiil-i mâzî", "Fiil-i muzâri", "Nâkıs fiil (kâne grubu)", "Fâil", "Mef'ûlün bih", "Mübtedâ", "Haber",
    "Harf-i cer", "Mecrûr (harf-i cer ile)", "Muzâfun ileyh", "Harf (inne grubu)", "İnne'nin ismi", "İnne'nin haberi",
    "Kâne'nin ismi", "Kâne'nin haberi", "Harf (nasb/cezm edatı)"
  ];
})();
