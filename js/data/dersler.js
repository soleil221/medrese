// Ders içerikleri: konu anlatımı (body, HTML) + ezber kartları (cards: [ön yüz, arka yüz]).
// Kartlar hem aralıklı tekrarda (Leitner) hem de çoktan seçmeli sınavlarda kullanılır.
// Fıkhî hükümler Hanefî mezhebine göredir.

const AR = (s) => `<span lang="ar">${s}</span>`;

window.DERSLER = {
  // ═════════════════ TECVİD ═════════════════
  "k-tecvid": [
    {
      id: "mahrec", title: "Harflerin Mahreçleri",
      body: `
        <p><b>Mahreç</b>, harfin ağızdan çıktığı yerdir. Kur'an harfleri beş ana bölgeden çıkar:</p>
        <table>
          <tr><th>Bölge</th><th>Harfler</th></tr>
          <tr><td><b>Cevf</b> (ağız ve boğaz boşluğu)</td><td>Med harfleri: ${AR("ا و ي")} (sâkin ve öncesi uygun harekeli)</td></tr>
          <tr><td><b>Halk</b> (boğaz)</td><td>${AR("ء ه — ع ح — غ خ")} (boğazın altı, ortası, üstü)</td></tr>
          <tr><td><b>Lisân</b> (dil)</td><td>${AR("ق ك ج ش ي ض ل ن ر ط د ت ص ز س ظ ذ ث")}</td></tr>
          <tr><td><b>Şefeteyn</b> (dudaklar)</td><td>${AR("ف ب م و")}</td></tr>
          <tr><td><b>Hayşûm</b> (geniz)</td><td>Ğunne (genizden gelen ses)</td></tr>
        </table>
        <p><b>Halk harfleri</b> altı tanedir: ${AR("ء ه ع ح غ خ")}. Bu harfler “izhâr-ı halkî” kuralında karşımıza çıkacak.</p>
        <p class="tip">Mahreçler kitaptan değil kulaktan öğrenilir. Bu dersi mutlaka bir hocadan dinleyerek, harfleri tek tek telaffuz ederek çalış.</p>`,
      cards: [
        ["Mahreç nedir?", "Harfin ağızdan çıktığı yer"],
        ["Beş ana mahreç bölgesi", "Cevf, halk, lisân, şefeteyn, hayşûm"],
        ["Halk (boğaz) harfleri", AR("ء ه ع ح غ خ")],
        ["Dudak (şefeteyn) harfleri", AR("ف ب م و")],
        ["Ğunne hangi bölgeden çıkar?", "Hayşûm (geniz)"],
        ["Cevf'ten çıkan harfler", "Med harfleri (elif, vav, ye)"]
      ]
    },
    {
      id: "nun", title: "Nûn-ı Sâkin ve Tenvin",
      body: `
        <p>Nûn-ı sâkin (${AR("نْ")}) veya tenvinden (${AR("ـًـ ـٍـ ـٌـ")}) sonra gelen harfe göre dört hüküm vardır:</p>
        <table>
          <tr><th>Hüküm</th><th>Harfler</th><th>Örnek</th></tr>
          <tr><td><b>İzhâr</b> (açık okuma)</td><td>Halk harfleri: ${AR("ء ه ع ح غ خ")}</td><td>${AR("مَنْ اٰمَنَ")}</td></tr>
          <tr><td><b>İdğam</b> (katarak okuma)</td><td>${AR("ي ر م ل و ن")} — “${AR("يَرْمَلُونَ")}”</td><td>${AR("مَنْ يَقُولُ")}</td></tr>
          <tr><td><b>İklâb</b> (mime çevirme)</td><td>${AR("ب")}</td><td>${AR("مِنْ بَعْدِ")}</td></tr>
          <tr><td><b>İhfâ</b> (gizleme)</td><td>Kalan 15 harf</td><td>${AR("مِنْ قَبْلِ")}</td></tr>
        </table>
        <h4>İdğamın iki çeşidi</h4>
        <ul>
          <li><b>İdğam-ı maa'l-ğunne</b> (ğunneli): ${AR("ي ن م و")} — “${AR("يَنْمُو")}”</li>
          <li><b>İdğam-ı bilâ ğunne</b> (ğunnesiz): ${AR("ل ر")}</li>
        </ul>
        <p>İdğam iki ayrı kelime arasında olur. Tek kelime içinde nûn-ı sâkinden sonra ${AR("ي")} veya ${AR("و")} gelirse (${AR("دُنْيَا")}, ${AR("صِنْوَانٌ")}) idğam yapılmaz; buna <b>izhâr-ı mutlak</b> denir.</p>
        <p><b>İhfâ harfleri (15):</b> ${AR("ت ث ج د ذ ز س ش ص ض ط ظ ف ق ك")}</p>`,
      cards: [
        ["Nûn-ı sâkin ve tenvinin dört hükmü", "İzhâr, idğam, iklâb, ihfâ"],
        ["İzhâr harfleri", "Halk harfleri: " + AR("ء ه ع ح غ خ")],
        ["İdğam harfleri", AR("ي ر م ل و ن") + " (yermelûn)"],
        ["İdğam-ı maa'l-ğunne harfleri", AR("ي ن م و") + " (yenmû)"],
        ["İdğam-ı bilâ ğunne harfleri", AR("ل ر")],
        ["İklâb harfi", AR("ب") + " — nûn mime çevrilir"],
        ["İhfâ kaç harftir?", "15 harf"],
        ["Tek kelimede nûn-ı sâkinden sonra ye/vav gelirse", "İzhâr-ı mutlak (idğam yapılmaz)"],
        [AR("مِنْ بَعْدِ") + " hangi kural?", "İklâb"],
        [AR("مَنْ اٰمَنَ") + " hangi kural?", "İzhâr"]
      ]
    },
    {
      id: "mim-kalkale", title: "Mim-i Sâkin, Kalkale ve Ğunne",
      body: `
        <h4>Mim-i sâkin (${AR("مْ")})</h4>
        <table>
          <tr><th>Hüküm</th><th>Sonraki harf</th><th>Örnek</th></tr>
          <tr><td><b>İhfâ-i şefevî</b></td><td>${AR("ب")}</td><td>${AR("تَرْمِيهِمْ بِحِجَارَةٍ")}</td></tr>
          <tr><td><b>İdğam-ı misleyn</b> (ğunneli)</td><td>${AR("م")}</td><td>${AR("لَهُمْ مَا")}</td></tr>
          <tr><td><b>İzhâr-ı şefevî</b></td><td>Diğer harfler</td><td>${AR("لَهُمْ فِيهَا")}</td></tr>
        </table>
        <p>İzhâr-ı şefevîde özellikle ${AR("ف")} ve ${AR("و")} öncesinde mimin gizlenmemesine dikkat edilir.</p>
        <h4>Kalkale</h4>
        <p>Kalkale harfleri sâkin olduğunda kısa bir sarsıntı/yankı ile okunur. Harfler: ${AR("ق ط ب ج د")} — “${AR("قُطْبُ جَدٍّ")}”.</p>
        <ul>
          <li><b>Kalkale-i suğrâ:</b> kelime ortasında (${AR("يَقْطَعُونَ")})</li>
          <li><b>Kalkale-i kübrâ:</b> vakıfta, kelime sonunda (${AR("الْفَلَقْ")})</li>
        </ul>
        <h4>Ğunne-i müşeddede</h4>
        <p>Şeddeli nûn ve mim (${AR("نّ مّ")}) her zaman ğunneli okunur: ${AR("إِنَّ")}, ${AR("ثُمَّ")}.</p>`,
      cards: [
        ["Mim-i sâkinden sonra " + AR("ب") + " gelirse", "İhfâ-i şefevî"],
        ["Mim-i sâkinden sonra " + AR("م") + " gelirse", "İdğam-ı misleyn"],
        ["Mim-i sâkinden sonra diğer harfler gelirse", "İzhâr-ı şefevî"],
        ["Kalkale harfleri", AR("ق ط ب ج د") + " (kutbu ceddin)"],
        ["Kelime ortasındaki kalkale", "Kalkale-i suğrâ"],
        ["Vakıfta kelime sonundaki kalkale", "Kalkale-i kübrâ"],
        ["Şeddeli nûn ve mim nasıl okunur?", "Ğunneli (ğunne-i müşeddede)"]
      ]
    },
    {
      id: "med", title: "Med Çeşitleri",
      body: `
        <p><b>Med</b>, med harflerinin (${AR("ا و ي")}) sesini uzatmaktır. Uzatma miktarı <b>elif</b> (yaklaşık iki hareke) ile ölçülür.</p>
        <h4>Med-i aslî</h4>
        <p><b>Med-i tabiî:</b> Med harfinden sonra med sebebi (hemze veya sükûn) yoksa 1 elif uzatılır: ${AR("قَالَ")}, ${AR("قِيلَ")}, ${AR("يَقُولُ")}.</p>
        <h4>Med-i fer'î (sebebe bağlı)</h4>
        <table>
          <tr><th>Med</th><th>Sebep</th><th>Örnek</th></tr>
          <tr><td><b>Muttasıl</b></td><td>Med harfi ve hemze aynı kelimede</td><td>${AR("جَاءَ، سُوءَ")}</td></tr>
          <tr><td><b>Munfasıl</b></td><td>Med harfi bir kelimenin sonunda, hemze sonraki kelimenin başında</td><td>${AR("بِمَا أُنْزِلَ")}</td></tr>
          <tr><td><b>Lâzım</b></td><td>Med harfinden sonra aslî (kalıcı) sükûn veya şedde</td><td>${AR("الضَّالِّينَ، دَابَّةٌ")}</td></tr>
          <tr><td><b>Ârız</b></td><td>Med harfinden sonra vakıf nedeniyle geçici sükûn</td><td>${AR("الْعَالَمِينْ")} (vakıfta)</td></tr>
          <tr><td><b>Lîn</b></td><td>Fethadan sonra sâkin vav/ye ve ardından vakıf</td><td>${AR("خَوْفْ، بَيْتْ")}</td></tr>
          <tr><td><b>İvaz</b></td><td>Üstün tenvinli kelimede vakıf; tenvin elife döner</td><td>${AR("عَلِيمًا")} → ʿalîmâ</td></tr>
        </table>
        <p class="tip">Uzatma miktarları kıraat ve tarîke göre değişir. Hafs rivâyetinde (Türkiye'deki yaygın okuyuş) uygulama için hocanın okuyuşunu esas al.</p>`,
      cards: [
        ["Med harfleri", AR("ا و ي")],
        ["Med-i tabiî kaç elif uzatılır?", "1 elif"],
        ["Med harfi ile hemze aynı kelimede ise", "Med-i muttasıl"],
        ["Med harfi kelime sonunda, hemze sonraki kelimenin başında ise", "Med-i munfasıl"],
        ["Med harfinden sonra aslî sükûn veya şedde gelirse", "Med-i lâzım"],
        ["Vakıf sebebiyle oluşan geçici sükûndan önceki med", "Med-i ârız"],
        ["Üstün tenvinli kelimede vakıfta tenvinin elife dönmesi", "Med-i ivaz"],
        [AR("الضَّالِّينَ") + " kelimesindeki med", "Med-i lâzım"]
      ]
    }
  ],

  // ═════════════════ İLMİHAL ═════════════════
  "k-ilmihal": [
    {
      id: "esaslar", title: "İmanın ve İslam'ın Şartları",
      body: `
        <h4>İmanın şartları (Âmentü)</h4>
        <p class="ar-block" lang="ar">آمَنْتُ بِاللّٰهِ وَمَلٰئِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ وَالْيَوْمِ الْاٰخِرِ وَبِالْقَدَرِ خَيْرِهِ وَشَرِّهِ مِنَ اللّٰهِ تَعَالٰى وَالْبَعْثُ بَعْدَ الْمَوْتِ حَقٌّ</p>
        <ol><li>Allah'a</li><li>Meleklerine</li><li>Kitaplarına</li><li>Peygamberlerine</li><li>Âhiret gününe</li><li>Kadere; hayır ve şerrin Allah'tan olduğuna iman</li></ol>
        <h4>İslam'ın şartları</h4>
        <ol><li>Kelime-i şehâdet getirmek</li><li>Namaz kılmak</li><li>Ramazan orucunu tutmak</li><li>Zekât vermek</li><li>Gücü yetene hacca gitmek</li></ol>
        <p><b>Kelime-i şehâdet:</b> ${AR("أَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا اللّٰهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ")}</p>`,
      cards: [
        ["İmanın şartları kaç tanedir?", "Altı"],
        ["İslam'ın şartları kaç tanedir?", "Beş"],
        ["İmanın şartlarını sırala", "Allah, melekler, kitaplar, peygamberler, âhiret, kader"],
        ["İslam'ın şartlarını sırala", "Şehâdet, namaz, oruç, zekât, hac"],
        ["İmanın şartlarını bildiren metnin adı", "Âmentü"]
      ]
    },
    {
      id: "taharet", title: "Taharet: Abdest, Gusül, Teyemmüm",
      body: `
        <h4>Abdestin farzları (4)</h4>
        <ol><li>Yüzü yıkamak</li><li>Kolları dirseklerle beraber yıkamak</li><li>Başın dörtte birini meshetmek</li><li>Ayakları topuklarla beraber yıkamak</li></ol>
        <h4>Abdesti bozan başlıca durumlar</h4>
        <ul>
          <li>Ön veya arka yoldan bir şey çıkması</li>
          <li>Vücudun bir yerinden kan, irin vb. çıkıp yayılması</li>
          <li>Ağız dolusu kusmak</li>
          <li>Bayılmak, sarhoş olmak</li>
          <li>Bir yere dayanarak veya yaslanarak uyumak</li>
          <li>Rükû ve secdeli namazda, ergen birinin yanındakilerin duyacağı kadar gülmesi (kahkaha)</li>
        </ul>
        <h4>Guslün farzları (3)</h4>
        <ol><li>Ağza su vermek (mazmaza)</li><li>Burna su vermek (istinşak)</li><li>Bütün bedeni yıkamak</li></ol>
        <h4>Teyemmümün farzları (2)</h4>
        <ol><li>Niyet</li><li>Temiz toprağa iki kez vurup birinde yüzü, diğerinde kolları meshetmek</li></ol>`,
      cards: [
        ["Abdestin farzları kaç tanedir?", "Dört"],
        ["Abdestte başın ne kadarı meshedilir? (farz miktarı)", "Dörtte biri"],
        ["Guslün farzları", "Ağza su, burna su, bütün bedeni yıkamak"],
        ["Teyemmümün farzları", "Niyet ve iki darb (yüz ve kolların meshi)"],
        ["Namazda kahkaha ile gülmek abdesti bozar mı?", "Evet (rükû ve secdeli namazda, ergen için)"],
        ["Ağız dolusu kusmak abdesti bozar mı?", "Evet"]
      ]
    },
    {
      id: "namaz", title: "Namazın Farzları",
      body: `
        <p>Namazın on iki farzı vardır. Altısı namazdan önce yerine getirilir, altısı namazın içindedir.</p>
        <div class="two-col">
          <div><h4>Dışındakiler (şartlar)</h4>
            <ol><li>Hadesten taharet</li><li>Necasetten taharet</li><li>Setr-i avret</li><li>İstikbâl-i kıble</li><li>Vakit</li><li>Niyet</li></ol></div>
          <div><h4>İçindekiler (rükünler)</h4>
            <ol><li>İftitah tekbiri</li><li>Kıyâm</li><li>Kırâat</li><li>Rükû</li><li>Sücûd</li><li>Ka'de-i ahîre</li></ol></div>
        </div>
        <p><b>Hades</b> hükmî kirdir (abdestsizlik, cünüplük). <b>Necaset</b> ise beden, elbise ve namaz kılınan yerdeki maddi pisliktir.</p>`,
      cards: [
        ["Namazın farzları kaç tanedir?", "On iki (6 dışında, 6 içinde)"],
        ["Namazın dışındaki farzlar", "Hadesten taharet, necasetten taharet, setr-i avret, istikbâl-i kıble, vakit, niyet"],
        ["Namazın içindeki farzlar", "İftitah tekbiri, kıyâm, kırâat, rükû, sücûd, ka'de-i ahîre"],
        ["Setr-i avret", "Örtülmesi gereken yerleri örtmek"],
        ["İstikbâl-i kıble", "Kıbleye yönelmek"],
        ["Ka'de-i ahîre", "Son oturuş (teşehhüd miktarı)"],
        ["Hades ile necaset farkı", "Hades hükmî kir (abdestsizlik), necaset maddi pislik"]
      ]
    }
  ],

  // ═════════════════ AKAİD ═════════════════
  "k-akaid1": [
    {
      id: "sifatlar", title: "Allah'ın Sıfatları",
      body: `
        <h4>Zâtî sıfatlar (6)</h4>
        <p>Yalnız Allah'a ait olan, hiçbir yaratılmışta bulunmayan sıfatlardır.</p>
        <table>
          <tr><td><b>Vücûd</b></td><td>Var olmak</td></tr>
          <tr><td><b>Kıdem</b></td><td>Varlığının başlangıcı olmamak</td></tr>
          <tr><td><b>Bekâ</b></td><td>Varlığının sonu olmamak</td></tr>
          <tr><td><b>Vahdâniyyet</b></td><td>Bir olmak; zâtında, sıfatlarında ve fiillerinde ortağı olmamak</td></tr>
          <tr><td><b>Muhâlefetün li'l-havâdis</b></td><td>Yaratılmışlardan hiçbirine benzememek</td></tr>
          <tr><td><b>Kıyâm bi-nefsihî</b></td><td>Varlığı kendinden olmak, hiçbir şeye muhtaç olmamak</td></tr>
        </table>
        <h4>Sübûtî sıfatlar (8)</h4>
        <table>
          <tr><td><b>Hayat</b></td><td>Diri olmak</td></tr>
          <tr><td><b>İlim</b></td><td>Her şeyi bilmek</td></tr>
          <tr><td><b>Semi'</b></td><td>İşitmek</td></tr>
          <tr><td><b>Basar</b></td><td>Görmek</td></tr>
          <tr><td><b>İrâde</b></td><td>Dilemek</td></tr>
          <tr><td><b>Kudret</b></td><td>Her şeye gücü yetmek</td></tr>
          <tr><td><b>Kelâm</b></td><td>Söylemek</td></tr>
          <tr><td><b>Tekvîn</b></td><td>Yaratmak</td></tr>
        </table>
        <p class="tip"><b>Tekvîn</b> sıfatını ayrı bir ezelî sıfat olarak sayan Mâtürîdîlerdir. Eş'arîler bunu kudret sıfatının taalluku olarak görür ve sübûtî sıfatları yedi sayar.</p>`,
      cards: [
        ["Zâtî sıfatlar kaç tanedir?", "Altı"],
        ["Sübûtî sıfatlar kaç tanedir? (Mâtürîdî)", "Sekiz"],
        ["Kıdem", "Varlığının başlangıcı olmamak"],
        ["Bekâ", "Varlığının sonu olmamak"],
        ["Muhâlefetün li'l-havâdis", "Yaratılmışlara benzememek"],
        ["Kıyâm bi-nefsihî", "Varlığı kendinden olmak, muhtaç olmamak"],
        ["Tekvîn", "Yaratmak"],
        ["Tekvîn'i ayrı bir sıfat sayan ekol", "Mâtürîdiyye"],
        ["Vahdâniyyet", "Zâtında, sıfatlarında ve fiillerinde bir olmak"]
      ]
    },
    {
      id: "nubuvvet", title: "Peygamberlerin Sıfatları",
      body: `
        <p>Peygamberlerde bulunması zorunlu beş sıfat vardır:</p>
        <table>
          <tr><td><b>Sıdk</b></td><td>Doğru sözlü olmak</td></tr>
          <tr><td><b>Emânet</b></td><td>Güvenilir olmak</td></tr>
          <tr><td><b>Tebliğ</b></td><td>Allah'tan aldıklarını eksiksiz bildirmek</td></tr>
          <tr><td><b>Fetânet</b></td><td>Akıllı ve uyanık olmak</td></tr>
          <tr><td><b>İsmet</b></td><td>Günah işlemekten korunmuş olmak</td></tr>
        </table>
        <p><b>Mûcize:</b> Peygamberliğini ispat için Allah'ın, peygamberin elinde yarattığı olağanüstü olay. Hz. Peygamber'in en büyük mûcizesi <b>Kur'an-ı Kerîm</b>'dir.</p>`,
      cards: [
        ["Peygamberlerin sıfatları", "Sıdk, emânet, tebliğ, fetânet, ismet"],
        ["Sıdk", "Doğru sözlü olmak"],
        ["Fetânet", "Akıllı ve uyanık olmak"],
        ["İsmet", "Günahtan korunmuş olmak"],
        ["Tebliğ", "Vahyi eksiksiz bildirmek"],
        ["Mûcize", "Peygamberin elinde yaratılan, nübüvveti ispat eden olağanüstü olay"]
      ]
    }
  ],

  // ═════════════════ SARF ═════════════════
  "k-sarf": [
    {
      id: "temel", title: "Temel Kavramlar ve Mîzan",
      body: `
        <p><b>Sarf</b>, kelimelerin bir kalıptan başka kalıplara çevrilmesini ve kelimenin yapısını inceleyen ilimdir.</p>
        <h4>Mîzan (ölçü)</h4>
        <p>Arapça kelimeler çoğunlukla üç harfli bir kökten türer. Kökün harfleri ${AR("ف ع ل")} ile ölçülür:</p>
        <ul>
          <li>Birinci harf: <b>fâü'l-fiil</b> (${AR("ف")})</li>
          <li>İkinci harf: <b>aynü'l-fiil</b> (${AR("ع")})</li>
          <li>Üçüncü harf: <b>lâmü'l-fiil</b> (${AR("ل")})</li>
        </ul>
        <p>Örnek: ${AR("كَتَبَ")} kelimesi ${AR("فَعَلَ")} vezninde, ${AR("مَكْتُوبٌ")} kelimesi ${AR("مَفْعُولٌ")} veznindedir.</p>
        <h4>Fiillerin kısımları</h4>
        <ul>
          <li><b>Sülâsî:</b> üç harfli kök (${AR("نَصَرَ")}). <b>Rubâî:</b> dört harfli kök (${AR("دَحْرَجَ")}).</li>
          <li><b>Mücerred:</b> yalnız kök harflerden oluşur. <b>Mezîd:</b> köke harf eklenmiştir (${AR("أَكْرَمَ")}).</li>
        </ul>
        <h4>Sahîh ve mu'tel</h4>
        <table>
          <tr><th>Çeşit</th><th>Tarif</th><th>Örnek</th></tr>
          <tr><td>Sâlim</td><td>Kökünde hemze, illet harfi ve tekrar yok</td><td>${AR("نَصَرَ")}</td></tr>
          <tr><td>Mehmûz</td><td>Kökünde hemze var</td><td>${AR("أَمَرَ، سَأَلَ، قَرَأَ")}</td></tr>
          <tr><td>Muzâaf</td><td>Aynü'l-fiil ile lâmü'l-fiil aynı</td><td>${AR("مَدَّ")}</td></tr>
          <tr><td>Misâl</td><td>Fâü'l-fiil illet harfi</td><td>${AR("وَعَدَ")}</td></tr>
          <tr><td>Ecvef</td><td>Aynü'l-fiil illet harfi</td><td>${AR("قَالَ")}</td></tr>
          <tr><td>Nâkıs</td><td>Lâmü'l-fiil illet harfi</td><td>${AR("دَعَا")}</td></tr>
          <tr><td>Lefîf</td><td>İki illet harfi</td><td>${AR("وَقَى، طَوَى")}</td></tr>
        </table>
        <p>İllet harfleri: ${AR("و ي ا")}</p>`,
      cards: [
        ["Mîzan harfleri", AR("ف ع ل")],
        ["Kökün ikinci harfine ne denir?", "Aynü'l-fiil"],
        ["Kökün üçüncü harfine ne denir?", "Lâmü'l-fiil"],
        [AR("مَكْتُوبٌ") + " hangi vezinde?", AR("مَفْعُولٌ")],
        ["Mezîd fiil", "Kök harflerine harf eklenmiş fiil"],
        ["Muzâaf", "Aynü'l-fiil ile lâmü'l-fiili aynı olan fiil"],
        ["Misâl", "Fâü'l-fiili illet harfi olan fiil"],
        ["Ecvef", "Aynü'l-fiili illet harfi olan fiil"],
        ["Nâkıs", "Lâmü'l-fiili illet harfi olan fiil"],
        ["Lefîf", "İki harfi illet harfi olan fiil"],
        [AR("وَعَدَ") + " ne tür fiildir?", "Misâl"],
        [AR("قَالَ") + " ne tür fiildir?", "Ecvef"]
      ]
    },
    {
      id: "sigalar", title: "On Dört Sîga",
      body: `
        <p>Mâzî ve muzâri fiiller şahıs, sayı ve cinsiyete göre <b>14 sîgada</b> çekilir. Medrese geleneğinde sıra hep aynıdır:</p>
        <table class="siga">
          <tr><th>#</th><th>Sîga</th><th>Anlam</th><th>Mâzî</th><th>Muzâri</th></tr>
          <tr><td>1</td><td>Müfred müzekker gâib</td><td>o (er.)</td><td lang="ar">نَصَرَ</td><td lang="ar">يَنْصُرُ</td></tr>
          <tr><td>2</td><td>Tesniye müzekker gâib</td><td>o ikisi (er.)</td><td lang="ar">نَصَرَا</td><td lang="ar">يَنْصُرَانِ</td></tr>
          <tr><td>3</td><td>Cem-i müzekker gâib</td><td>onlar (er.)</td><td lang="ar">نَصَرُوا</td><td lang="ar">يَنْصُرُونَ</td></tr>
          <tr><td>4</td><td>Müfred müennes gâibe</td><td>o (kadın)</td><td lang="ar">نَصَرَتْ</td><td lang="ar">تَنْصُرُ</td></tr>
          <tr><td>5</td><td>Tesniye müennes gâibe</td><td>o ikisi (kadın)</td><td lang="ar">نَصَرَتَا</td><td lang="ar">تَنْصُرَانِ</td></tr>
          <tr><td>6</td><td>Cem-i müennes gâibe</td><td>onlar (kadın)</td><td lang="ar">نَصَرْنَ</td><td lang="ar">يَنْصُرْنَ</td></tr>
          <tr><td>7</td><td>Müfred müzekker muhâtab</td><td>sen (er.)</td><td lang="ar">نَصَرْتَ</td><td lang="ar">تَنْصُرُ</td></tr>
          <tr><td>8</td><td>Tesniye müzekker muhâtab</td><td>siz ikiniz (er.)</td><td lang="ar">نَصَرْتُمَا</td><td lang="ar">تَنْصُرَانِ</td></tr>
          <tr><td>9</td><td>Cem-i müzekker muhâtab</td><td>siz (er.)</td><td lang="ar">نَصَرْتُمْ</td><td lang="ar">تَنْصُرُونَ</td></tr>
          <tr><td>10</td><td>Müfred müennes muhâtaba</td><td>sen (kadın)</td><td lang="ar">نَصَرْتِ</td><td lang="ar">تَنْصُرِينَ</td></tr>
          <tr><td>11</td><td>Tesniye müennes muhâtaba</td><td>siz ikiniz (kadın)</td><td lang="ar">نَصَرْتُمَا</td><td lang="ar">تَنْصُرَانِ</td></tr>
          <tr><td>12</td><td>Cem-i müennes muhâtaba</td><td>siz (kadın)</td><td lang="ar">نَصَرْتُنَّ</td><td lang="ar">تَنْصُرْنَ</td></tr>
          <tr><td>13</td><td>Nefs-i mütekellim vahde</td><td>ben</td><td lang="ar">نَصَرْتُ</td><td lang="ar">أَنْصُرُ</td></tr>
          <tr><td>14</td><td>Nefs-i mütekellim maa'l-gayr</td><td>biz</td><td lang="ar">نَصَرْنَا</td><td lang="ar">نَنْصُرُ</td></tr>
        </table>
        <p>Muzâri harfleri: ${AR("أ ت ي ن")} — “<b>enîtü</b>” (${AR("أَنَيْتُ")}).</p>
        <p class="tip">Bu tabloyu her kökle çekmek için <a href="#/cekim">Çekim Aracı</a>'nı kullan.</p>`,
      cards: [
        ["Kaç sîga vardır?", "On dört"],
        [AR("نَصَرُوا") + " hangi sîga?", "Cem-i müzekker gâib"],
        [AR("نَصَرَتْ") + " hangi sîga?", "Müfred müennes gâibe"],
        [AR("نَصَرْنَ") + " hangi sîga?", "Cem-i müennes gâibe"],
        [AR("نَصَرْتُمْ") + " hangi sîga?", "Cem-i müzekker muhâtab"],
        [AR("نَصَرْتِ") + " hangi sîga?", "Müfred müennes muhâtaba"],
        [AR("نَصَرْتُنَّ") + " hangi sîga?", "Cem-i müennes muhâtaba"],
        [AR("نَصَرْتُ") + " hangi sîga?", "Nefs-i mütekellim vahde"],
        [AR("نَصَرْنَا") + " hangi sîga?", "Nefs-i mütekellim maa'l-gayr"],
        [AR("تَنْصُرِينَ") + " hangi sîga?", "Müfred müennes muhâtaba (muzâri)"],
        ["Muzâri harfleri", AR("أ ت ي ن") + " (enîtü)"],
        ["Mâzîde tesniye muhâtab sîgası (er. ve kadın)", AR("نَصَرْتُمَا") + " — ikisi aynı"]
      ]
    },
    {
      id: "bablar", title: "Sülâsî Mücerred Babları",
      body: `
        <p>Sülâsî mücerred fiiller, mâzî ve muzâride aynü'l-fiilin harekesine göre <b>altı bab</b>a ayrılır:</p>
        <table>
          <tr><th>Bab</th><th>Mâzî</th><th>Muzâri</th><th>Harekeler</th><th>Diğer örnekler</th></tr>
          <tr><td>1</td><td lang="ar">نَصَرَ</td><td lang="ar">يَنْصُرُ</td><td>fetha – damme</td><td lang="ar">كَتَبَ يَكْتُبُ</td></tr>
          <tr><td>2</td><td lang="ar">ضَرَبَ</td><td lang="ar">يَضْرِبُ</td><td>fetha – kesra</td><td lang="ar">جَلَسَ يَجْلِسُ</td></tr>
          <tr><td>3</td><td lang="ar">فَتَحَ</td><td lang="ar">يَفْتَحُ</td><td>fetha – fetha</td><td lang="ar">ذَهَبَ يَذْهَبُ</td></tr>
          <tr><td>4</td><td lang="ar">عَلِمَ</td><td lang="ar">يَعْلَمُ</td><td>kesra – fetha</td><td lang="ar">شَرِبَ يَشْرَبُ</td></tr>
          <tr><td>5</td><td lang="ar">حَسُنَ</td><td lang="ar">يَحْسُنُ</td><td>damme – damme</td><td lang="ar">كَرُمَ يَكْرُمُ</td></tr>
          <tr><td>6</td><td lang="ar">حَسِبَ</td><td lang="ar">يَحْسِبُ</td><td>kesra – kesra</td><td>Az kullanılır</td></tr>
        </table>
        <ul>
          <li><b>Fetha-fetha babı (3.)</b> genellikle aynü'l-fiili veya lâmü'l-fiili halk harfi olan fiillerde görülür (${AR("فَتَحَ، ذَهَبَ")}).</li>
          <li><b>Damme-damme babı (5.)</b> tabiat ve kalıcı vasıf bildirir, fiilleri <b>lâzım</b>dır (geçişsiz).</li>
        </ul>`,
      cards: [
        ["Sülâsî mücerred kaç babdır?", "Altı"],
        ["1. bab", AR("نَصَرَ يَنْصُرُ") + " (fetha–damme)"],
        ["2. bab", AR("ضَرَبَ يَضْرِبُ") + " (fetha–kesra)"],
        ["3. bab", AR("فَتَحَ يَفْتَحُ") + " (fetha–fetha)"],
        ["4. bab", AR("عَلِمَ يَعْلَمُ") + " (kesra–fetha)"],
        ["5. bab", AR("حَسُنَ يَحْسُنُ") + " (damme–damme)"],
        ["6. bab", AR("حَسِبَ يَحْسِبُ") + " (kesra–kesra)"],
        [AR("جَلَسَ يَجْلِسُ") + " hangi bab?", "2. bab (ضَرَبَ)"],
        [AR("كَتَبَ يَكْتُبُ") + " hangi bab?", "1. bab (نَصَرَ)"],
        ["Fiilleri hep lâzım olan bab", "5. bab (حَسُنَ)"]
      ]
    },
    {
      id: "mezid", title: "Mezîd Babları",
      body: `
        <p>Sülâsî köke harf eklenerek oluşan bablar. Her bab kendine has anlamlar katar (geçişlilik, karşılıklılık, istek vb.).</p>
        <table>
          <tr><th>Bab</th><th>Mâzî</th><th>Muzâri</th><th>Mastar</th><th>Örnek</th><th>Yaygın anlam</th></tr>
          <tr><td>İf'âl</td><td lang="ar">أَفْعَلَ</td><td lang="ar">يُفْعِلُ</td><td lang="ar">إِفْعَالٌ</td><td lang="ar">أَكْرَمَ</td><td>Ta'diye (geçişli yapma)</td></tr>
          <tr><td>Tef'îl</td><td lang="ar">فَعَّلَ</td><td lang="ar">يُفَعِّلُ</td><td lang="ar">تَفْعِيلٌ</td><td lang="ar">عَلَّمَ</td><td>Teksîr, ta'diye</td></tr>
          <tr><td>Mufâale</td><td lang="ar">فَاعَلَ</td><td lang="ar">يُفَاعِلُ</td><td lang="ar">مُفَاعَلَةٌ</td><td lang="ar">قَاتَلَ</td><td>Müşâreket (karşılıklılık)</td></tr>
          <tr><td>İfti'âl</td><td lang="ar">اِفْتَعَلَ</td><td lang="ar">يَفْتَعِلُ</td><td lang="ar">اِفْتِعَالٌ</td><td lang="ar">اِجْتَنَبَ</td><td>Mutâvaat, ittihâz</td></tr>
          <tr><td>İnfi'âl</td><td lang="ar">اِنْفَعَلَ</td><td lang="ar">يَنْفَعِلُ</td><td lang="ar">اِنْفِعَالٌ</td><td lang="ar">اِنْكَسَرَ</td><td>Mutâvaat (edilgen-dönüşlü)</td></tr>
          <tr><td>İf'ilâl</td><td lang="ar">اِفْعَلَّ</td><td lang="ar">يَفْعَلُّ</td><td lang="ar">اِفْعِلَالٌ</td><td lang="ar">اِحْمَرَّ</td><td>Renk ve kusur</td></tr>
          <tr><td>Tefa''ul</td><td lang="ar">تَفَعَّلَ</td><td lang="ar">يَتَفَعَّلُ</td><td lang="ar">تَفَعُّلٌ</td><td lang="ar">تَكَلَّمَ</td><td>Tef'îlin mutâvaatı, tekellüf</td></tr>
          <tr><td>Tefâul</td><td lang="ar">تَفَاعَلَ</td><td lang="ar">يَتَفَاعَلُ</td><td lang="ar">تَفَاعُلٌ</td><td lang="ar">تَبَاعَدَ</td><td>Karşılıklılık, yapar gibi görünme</td></tr>
          <tr><td>İstif'âl</td><td lang="ar">اِسْتَفْعَلَ</td><td lang="ar">يَسْتَفْعِلُ</td><td lang="ar">اِسْتِفْعَالٌ</td><td lang="ar">اِسْتَخْرَجَ</td><td>Taleb (isteme)</td></tr>
        </table>
        <p class="tip">Nadir bablar (${AR("اِفْعَالَّ، اِفْعَوْعَلَ، اِفْعَوَّلَ")}) İzzî ve Merâh'ta işlenir.</p>`,
      cards: [
        ["İf'âl babının mastarı", AR("إِفْعَالٌ")],
        ["Tef'îl babının mastarı", AR("تَفْعِيلٌ")],
        ["Mufâale babının mâzîsi", AR("فَاعَلَ")],
        ["Mufâale babının başlıca anlamı", "Müşâreket (karşılıklılık)"],
        ["İstif'âl babının başlıca anlamı", "Taleb (isteme)"],
        [AR("اِسْتَخْرَجَ") + " hangi bab?", "İstif'âl"],
        [AR("اِنْكَسَرَ") + " hangi bab?", "İnfi'âl"],
        [AR("اِجْتَنَبَ") + " hangi bab?", "İfti'âl"],
        [AR("تَكَلَّمَ") + " hangi bab?", "Tefa''ul"],
        [AR("اِحْمَرَّ") + " hangi bab?", "İf'ilâl"],
        ["Renk ve kusur bildiren bab", "İf'ilâl (" + AR("اِفْعَلَّ") + ")"],
        [AR("أَكْرَمَ") + " muzârisi", AR("يُكْرِمُ")]
      ]
    }
  ],

  // ═════════════════ NAHİV ═════════════════
  "k-nahiv": [
    {
      id: "kelime", title: "Kelime, Kelâm ve İ'râb",
      body: `
        <p><b>Nahiv</b>, kelimelerin cümle içindeki durumunu ve son harflerinin hâlini (i'râb ve binâ) inceleyen ilimdir.</p>
        <h4>Kelimenin kısımları</h4>
        <ul>
          <li><b>İsim:</b> Kendi başına bir mana ifade eder, zamana delâlet etmez (${AR("رَجُلٌ، كِتَابٌ")}).</li>
          <li><b>Fiil:</b> Kendi başına bir mana ve üç zamandan birine delâlet eder (${AR("كَتَبَ")}).</li>
          <li><b>Harf:</b> Ancak başka bir kelimeyle mana kazanır (${AR("فِي، مِنْ")}).</li>
        </ul>
        <p><b>Kelâm:</b> İsnad yoluyla tam bir mana ifade eden söz (${AR("زَيْدٌ قَائِمٌ")}).</p>
        <h4>Mu'rab ve mebnî</h4>
        <p><b>Mu'rab</b> kelimenin sonu âmile göre değişir. <b>Mebnî</b> kelimenin sonu değişmez (zamirler, ism-i işaretler, mâzî fiil, harfler...).</p>
        <h4>İ'râb hâlleri ve aslî alametleri</h4>
        <table>
          <tr><th>Hâl</th><th>Aslî alamet</th><th>Hangi kelimelerde</th></tr>
          <tr><td>Ref'</td><td>Damme</td><td>İsim ve muzâri</td></tr>
          <tr><td>Nasb</td><td>Fetha</td><td>İsim ve muzâri</td></tr>
          <tr><td>Cerr</td><td>Kesra</td><td>Yalnız isim</td></tr>
          <tr><td>Cezm</td><td>Sükûn</td><td>Yalnız muzâri</td></tr>
        </table>
        <h4>Fer'î alametler</h4>
        <ul>
          <li><b>Tesniye:</b> ref' elif ile (${AR("مُسْلِمَانِ")}), nasb ve cerr ye ile (${AR("مُسْلِمَيْنِ")})</li>
          <li><b>Cem-i müzekker sâlim:</b> ref' vav ile (${AR("مُسْلِمُونَ")}), nasb ve cerr ye ile (${AR("مُسْلِمِينَ")})</li>
          <li><b>Esmâ-i hamse</b> (${AR("أَبٌ، أَخٌ، حَمٌ، فُو، ذُو")}): ref' vav, nasb elif, cerr ye ile</li>
          <li><b>Cem-i müennes sâlim:</b> nasbı kesra ile (${AR("مُسْلِمَاتٍ")})</li>
          <li><b>Gayr-i munsarif:</b> cerri fetha ile, tenvin almaz (${AR("بِأَحْمَدَ")})</li>
          <li><b>Ef'âl-i hamse:</b> ref' nûnun sübûtu ile, nasb ve cezm nûnun hazfi ile</li>
        </ul>`,
      cards: [
        ["Kelimenin üç kısmı", "İsim, fiil, harf"],
        ["Kelâm", "İsnad ile tam mana ifade eden söz"],
        ["Mebnî", "Sonu âmile göre değişmeyen kelime"],
        ["Mu'rab", "Sonu âmile göre değişen kelime"],
        ["Ref'in aslî alameti", "Damme"],
        ["Nasbın aslî alameti", "Fetha"],
        ["Cerrin aslî alameti", "Kesra"],
        ["Cezmin aslî alameti", "Sükûn"],
        ["Yalnız isimlerde bulunan i'râb", "Cerr"],
        ["Yalnız muzâri fiilde bulunan i'râb", "Cezm"],
        ["Cem-i müzekker sâlimin nasb ve cerr alameti", "Ye"],
        ["Gayr-i munsarifin cerr alameti", "Fetha"],
        ["Cem-i müennes sâlimin nasb alameti", "Kesra"],
        ["Esmâ-i hamse", AR("أَبٌ، أَخٌ، حَمٌ، فُو، ذُو")]
      ]
    },
    {
      id: "mevkiler", title: "Merfûât, Mansûbât, Mecrûrât",
      body: `
        <p>İsimler cümledeki görevlerine göre merfû, mansûb veya mecrûr olur.</p>
        <div class="three-col">
          <div><h4>Merfûât</h4><ul>
            <li>Fâil</li><li>Nâib-i fâil</li><li>Mübtedâ</li><li>Haber</li><li>${AR("كَانَ")} ve kardeşlerinin ismi</li><li>${AR("إِنَّ")} ve kardeşlerinin haberi</li></ul></div>
          <div><h4>Mansûbât</h4><ul>
            <li>Mef'ûlün bih</li><li>Mef'ûl-i mutlak</li><li>Mef'ûlün fîh (zarf)</li><li>Mef'ûlün leh</li><li>Mef'ûlün maah</li><li>Hâl</li><li>Temyîz</li><li>Müstesnâ</li><li>${AR("كَانَ")}'nin haberi</li><li>${AR("إِنَّ")}'nin ismi</li></ul></div>
          <div><h4>Mecrûrât</h4><ul>
            <li>Harf-i cer ile mecrûr</li><li>İzâfet ile mecrûr (muzâfun ileyh)</li></ul></div>
        </div>
        <p><b>Tâbi'ler</b> (na't/sıfat, atf, te'kîd, bedel) i'râbda metbû'una uyar.</p>
        <h4>Örnek tahlil</h4>
        <p class="ar-block" lang="ar">كَتَبَ الطَّالِبُ الدَّرْسَ فِي الْمَدْرَسَةِ</p>
        <ul>
          <li>${AR("كَتَبَ")}: mâzî fiil, mebnî</li>
          <li>${AR("الطَّالِبُ")}: fâil, merfû (damme)</li>
          <li>${AR("الدَّرْسَ")}: mef'ûlün bih, mansûb (fetha)</li>
          <li>${AR("فِي الْمَدْرَسَةِ")}: harf-i cer ve mecrûru (kesra)</li>
        </ul>`,
      cards: [
        ["Fâil'in i'râbı", "Merfû"],
        ["Mef'ûlün bih'in i'râbı", "Mansûb"],
        ["Muzâfun ileyh'in i'râbı", "Mecrûr"],
        ["Mübtedâ ve haberin i'râbı", "Merfû"],
        [AR("كَانَ") + "'nin ismi ve haberi", "İsmi merfû, haberi mansûb"],
        [AR("إِنَّ") + "'nin ismi ve haberi", "İsmi mansûb, haberi merfû"],
        ["Hâl'in i'râbı", "Mansûb"],
        ["Temyîz'in i'râbı", "Mansûb"],
        ["Mecrûrât kaç türlüdür?", "İki: harf-i cer ile ve izâfet ile"],
        ["Tâbi'ler", "Na't, atf, te'kîd, bedel"]
      ]
    }
  ],

  // ═════════════════ MANTIK ═════════════════
  "k-mantik": [
    {
      id: "giris", title: "Mantığa Giriş ve Delâlet",
      body: `
        <p><b>Mantık</b>, riayet edildiğinde zihni düşünce hatasından koruyan kanunlar ilmidir.</p>
        <h4>İlim: tasavvur ve tasdik</h4>
        <ul>
          <li><b>Tasavvur:</b> Hüküm içermeyen idrak (“insan” kavramı). Bilinmeyen tasavvura <b>kavl-i şârih (tanım)</b> ile ulaşılır.</li>
          <li><b>Tasdik:</b> Hüküm içeren idrak (“insan canlıdır”). Bilinmeyen tasdike <b>hüccet (delil)</b> ile ulaşılır.</li>
        </ul>
        <h4>Lafzî-vaz'î delâletin çeşitleri</h4>
        <table>
          <tr><td><b>Mutâbakat</b></td><td>Lafzın manasının tamamına delâleti: “insan” → hayvân-ı nâtık</td></tr>
          <tr><td><b>Tazammun</b></td><td>Manasının bir parçasına delâleti: “insan” → hayvan</td></tr>
          <tr><td><b>İltizâm</b></td><td>Manasının lâzımına delâleti: “insan” → okuma-yazma kabiliyeti</td></tr>
        </table>`,
      cards: [
        ["Mantığın tanımı", "Riayet edildiğinde zihni hatadan koruyan kanunlar ilmi"],
        ["Tasavvur", "Hüküm içermeyen idrak"],
        ["Tasdik", "Hüküm içeren idrak"],
        ["Bilinmeyen tasavvura ne ile ulaşılır?", "Kavl-i şârih (tanım)"],
        ["Bilinmeyen tasdike ne ile ulaşılır?", "Hüccet (delil)"],
        ["Lafzın manasının tamamına delâleti", "Mutâbakat"],
        ["Lafzın manasının parçasına delâleti", "Tazammun"],
        ["Lafzın manasının lâzımına delâleti", "İltizâm"]
      ]
    },
    {
      id: "kulliyat", title: "Külliyyât-ı Hams ve Nisbetler",
      body: `
        <h4>Beş tümel (külliyyât-ı hams)</h4>
        <table>
          <tr><td><b>Cins</b></td><td>Hakikatleri farklı fertlere söylenen zâtî tümel</td><td>Hayvan</td></tr>
          <tr><td><b>Nev'</b></td><td>Hakikatleri aynı fertlere söylenen tümel</td><td>İnsan</td></tr>
          <tr><td><b>Fasl</b></td><td>Bir şeyi cinsindeki diğerlerinden zâtî olarak ayıran</td><td>Nâtık</td></tr>
          <tr><td><b>Hâssa</b></td><td>Yalnız bir hakikate ait arazî tümel</td><td>Gülen</td></tr>
          <tr><td><b>Araz-ı âmm</b></td><td>Birden fazla hakikate ait arazî tümel</td><td>Yürüyen</td></tr>
        </table>
        <p><b>Had-di tâm</b> = yakın cins + fasl: insan = <i>hayvân-ı nâtık</i>. <b>Resm</b> ise hâssa ile yapılan tanımdır.</p>
        <h4>Dört nisbet (nisab-ı erbaa)</h4>
        <table>
          <tr><td><b>Tesâvî</b></td><td>Her biri diğerinin bütün fertlerine doğru</td><td>İnsan – nâtık</td></tr>
          <tr><td><b>Tebâyün</b></td><td>Hiçbiri diğerinin hiçbir ferdine doğru değil</td><td>İnsan – taş</td></tr>
          <tr><td><b>Umûm-husûs mutlak</b></td><td>Biri diğerinin bütün fertlerine doğru, tersi değil</td><td>Hayvan – insan</td></tr>
          <tr><td><b>Umûm-husûs min vech</b></td><td>Her biri diğerinin bazı fertlerine doğru</td><td>Beyaz – hayvan</td></tr>
        </table>`,
      cards: [
        ["Külliyyât-ı hams", "Cins, nev', fasl, hâssa, araz-ı âmm"],
        ["“Hayvan” insan için hangi tümel?", "Cins"],
        ["“Nâtık” insan için hangi tümel?", "Fasl"],
        ["“Gülen” insan için hangi tümel?", "Hâssa"],
        ["“Yürüyen” insan için hangi tümel?", "Araz-ı âmm"],
        ["Had-di tâm", "Yakın cins + fasl ile tanım"],
        ["İnsan ile nâtık arasındaki nisbet", "Tesâvî"],
        ["Hayvan ile insan arasındaki nisbet", "Umûm-husûs mutlak"],
        ["Beyaz ile hayvan arasındaki nisbet", "Umûm-husûs min vech"],
        ["İnsan ile taş arasındaki nisbet", "Tebâyün"]
      ]
    }
  ],

  // ═════════════════ SİYER ═════════════════
  "k-siyer": [
    {
      id: "kronoloji", title: "Temel Kronoloji",
      body: `
        <table>
          <tr><th>Yıl (M.)</th><th>Olay</th></tr>
          <tr><td>571</td><td>Hz. Peygamber'in Mekke'de doğumu (Fil Yılı)</td></tr>
          <tr><td>610</td><td>Hira'da ilk vahiy (${AR("اِقْرَأْ")})</td></tr>
          <tr><td>613</td><td>Açık davetin başlaması</td></tr>
          <tr><td>615</td><td>Habeşistan'a ilk hicret</td></tr>
          <tr><td>619</td><td>Hüzün Yılı: Hz. Hatice ve Ebû Tâlib'in vefatı</td></tr>
          <tr><td>620–622</td><td>Akabe biatları</td></tr>
          <tr><td>622</td><td>Medine'ye hicret (hicrî takvimin başlangıcı)</td></tr>
          <tr><td>624</td><td>Bedir Savaşı</td></tr>
          <tr><td>625</td><td>Uhud Savaşı</td></tr>
          <tr><td>627</td><td>Hendek Savaşı</td></tr>
          <tr><td>628</td><td>Hudeybiye Antlaşması</td></tr>
          <tr><td>630</td><td>Mekke'nin fethi</td></tr>
          <tr><td>632</td><td>Vedâ Haccı ve Hz. Peygamber'in vefatı</td></tr>
        </table>`,
      cards: [
        ["Hz. Peygamber'in doğum yılı", "571"],
        ["İlk vahiy", "610, Hira mağarası"],
        ["Habeşistan'a ilk hicret", "615"],
        ["Hüzün Yılı", "619"],
        ["Medine'ye hicret", "622"],
        ["Bedir Savaşı", "624"],
        ["Uhud Savaşı", "625"],
        ["Hendek Savaşı", "627"],
        ["Hudeybiye Antlaşması", "628"],
        ["Mekke'nin fethi", "630"],
        ["Vedâ Haccı ve vefat", "632"]
      ]
    }
  ],

  // ═════════════════ USÛL-İ HADİS ═════════════════
  "k-hadisusul": [
    {
      id: "kisimlar", title: "Hadisin Kısımları",
      body: `
        <h4>Râvi sayısına göre</h4>
        <ul>
          <li><b>Mütevâtir:</b> Yalan üzerinde birleşmeleri aklen mümkün olmayan kalabalık bir topluluğun rivayeti.</li>
          <li><b>Âhâd:</b> Mütevâtir derecesine ulaşmayan rivayet: meşhûr, azîz, garîb.</li>
        </ul>
        <h4>Sahih hadisin şartları (5)</h4>
        <ol>
          <li><b>İttisâl-i sened:</b> Senedin baştan sona kesintisiz olması</li>
          <li><b>Adâlet:</b> Râvilerin dindar ve güvenilir olması</li>
          <li><b>Zabt:</b> Râvilerin rivayetlerini iyi koruması</li>
          <li><b>Şâz olmaması:</b> Daha güvenilir râvilere muhalif olmaması</li>
          <li><b>İlletli olmaması:</b> Gizli bir kusur bulunmaması</li>
        </ol>
        <p><b>Hasen:</b> Sahihin şartlarını taşıyan ama râvilerinin zabtı biraz daha zayıf olan hadis. <b>Zayıf:</b> Sahih veya hasenin şartlarından birini taşımayan hadis.</p>
        <h4>Kaynağına göre</h4>
        <ul><li><b>Merfû:</b> Hz. Peygamber'e ait</li><li><b>Mevkûf:</b> Sahâbîye ait</li><li><b>Maktû':</b> Tâbiîye ait</li></ul>`,
      cards: [
        ["Mütevâtir", "Yalan üzerinde birleşmesi imkânsız topluluğun rivayeti"],
        ["Âhâd hadisin kısımları", "Meşhûr, azîz, garîb"],
        ["Sahih hadisin şartları", "İttisâl, adâlet, zabt, şâz ve illetli olmamak"],
        ["İttisâl-i sened", "Senedin kesintisiz olması"],
        ["Zabt", "Râvinin rivayetini iyi koruması"],
        ["Hasen hadis", "Sahihin şartlarını taşıyan, zabtı biraz daha zayıf hadis"],
        ["Merfû hadis", "Hz. Peygamber'e ait söz/fiil/takrir"],
        ["Mevkûf hadis", "Sahâbîye ait"],
        ["Maktû' hadis", "Tâbiîye ait"]
      ]
    }
  ],

  // ═════════════════ BELÂGAT ═════════════════
  "k-belagat": [
    {
      id: "giris", title: "Belâgatin Üç İlmi ve Teşbih",
      body: `
        <table>
          <tr><td><b>Meânî</b></td><td>Sözün duruma uygunluğunu (mukteza-yı hâl) sağlayan kurallar</td></tr>
          <tr><td><b>Beyân</b></td><td>Bir manayı farklı açıklık derecelerinde ifade etme yolları</td></tr>
          <tr><td><b>Bedî'</b></td><td>Sözü lafız ve mana sanatlarıyla güzelleştirme</td></tr>
        </table>
        <h4>Teşbih ve rükünleri</h4>
        <ol><li><b>Müşebbeh:</b> Benzetilen</li><li><b>Müşebbehün bih:</b> Kendisine benzetilen</li><li><b>Vech-i şebeh:</b> Benzerlik yönü</li><li><b>Edât-ı teşbih:</b> Benzetme edatı (${AR("كَ، كَأَنَّ، مِثْل")})</li></ol>
        <p>Müşebbeh ve müşebbehün bih <b>tarafeyn</b>dir; teşbih bunlarsız olmaz.</p>
        <h4>Mecaz ve istiare</h4>
        <p><b>Hakikat</b> lafzın konulduğu manada, <b>mecaz</b> ise bir alâka ve karîne ile başka manada kullanılmasıdır. Alâkası benzerlik olan mecaza <b>istiare</b> denir: tarafeynden biri zikredilmeyen teşbihtir.</p>
        <p><b>Kinaye:</b> Asıl manayı kastetmek de caiz olacak şekilde, lâzım manayı kastederek söylenen söz.</p>`,
      cards: [
        ["Belâgatin üç ilmi", "Meânî, beyân, bedî'"],
        ["Sözün duruma uygunluğunu inceleyen ilim", "Meânî"],
        ["Sözü güzelleştiren sanatları inceleyen ilim", "Bedî'"],
        ["Teşbihin rükünleri", "Müşebbeh, müşebbehün bih, vech-i şebeh, edât"],
        ["Tarafeyn", "Müşebbeh ve müşebbehün bih"],
        ["İstiare", "Alâkası benzerlik olan mecaz"],
        ["Mecazın şartları", "Alâka ve karîne"]
      ]
    }
  ],

  // ═════════════════ FERÂİZ ═════════════════
  "k-feraiz": [
    {
      id: "farzlar", title: "Farz Hisseler",
      body: `
        <p>Kur'an'da belirlenen altı farz hisse vardır: <b>1/2, 1/4, 1/8, 2/3, 1/3, 1/6</b>.</p>
        <p>Hisseleri belirli olanlara <b>ashâbü'l-ferâiz</b>, kalanı alanlara <b>asabe</b> denir.</p>
        <table>
          <tr><th>Mirasçı</th><th>Hissesi (başlıca durumlar)</th></tr>
          <tr><td>Koca</td><td>1/2 (ölenin çocuğu yoksa) · 1/4 (varsa)</td></tr>
          <tr><td>Karı</td><td>1/4 (ölenin çocuğu yoksa) · 1/8 (varsa)</td></tr>
          <tr><td>Tek kız</td><td>1/2 (oğul yoksa)</td></tr>
          <tr><td>İki ve daha fazla kız</td><td>2/3 (oğul yoksa)</td></tr>
          <tr><td>Anne</td><td>1/6 (çocuk veya birden fazla kardeş varsa) · 1/3 (yoksa)</td></tr>
          <tr><td>Baba</td><td>1/6 (ölenin oğlu varsa); aksi hâlde asabe olarak da alır</td></tr>
        </table>
        <p><b>Hacb:</b> Bir mirasçının başka bir mirasçı sebebiyle mirastan tamamen (hacb-i hirmân) veya kısmen (hacb-i noksân) mahrum kalması.</p>
        <p class="tip">Ferâiz hesapları (avl, redd, tashih) mutlaka problem çözerek öğrenilir. Bu özet yalnızca başlangıç içindir.</p>`,
      cards: [
        ["Kur'an'daki farz hisseler", "1/2, 1/4, 1/8, 2/3, 1/3, 1/6"],
        ["Ashâbü'l-ferâiz", "Hisseleri belirlenmiş mirasçılar"],
        ["Asabe", "Farz hisselerden kalanı alan mirasçılar"],
        ["Kocanın hissesi (çocuk yoksa)", "1/2"],
        ["Kocanın hissesi (çocuk varsa)", "1/4"],
        ["Karının hissesi (çocuk varsa)", "1/8"],
        ["İki ve daha fazla kızın hissesi (oğul yoksa)", "2/3"],
        ["Hacb", "Mirasçının başka mirasçı sebebiyle mahrum kalması"]
      ]
    }
  ],

  // ═════════════════ USÛL-İ FIKIH ═════════════════
  "k-usulfikih": [
    {
      id: "edille", title: "Deliller ve Hüküm Çeşitleri",
      body: `
        <h4>Edille-i şer'iyye</h4>
        <p>Asıl deliller dörttür: <b>Kitap, Sünnet, İcmâ, Kıyas</b>. Bunlara ek olarak istihsân, istıslâh (mesâlih-i mürsele), örf, istishâb ve sedd-i zerâi' gibi deliller kullanılır.</p>
        <h4>Teklîfî hükümler (Hanefî)</h4>
        <table>
          <tr><td><b>Farz</b></td><td>Kesin delille sabit kesin emir</td></tr>
          <tr><td><b>Vâcib</b></td><td>Zannî delille sabit kesin emir</td></tr>
          <tr><td><b>Sünnet / Mendûb</b></td><td>Yapılması istenen ama kesin olmayan</td></tr>
          <tr><td><b>Mübâh</b></td><td>Yapıp yapmamakta serbest olunan</td></tr>
          <tr><td><b>Mekruh-ı tenzîhî</b></td><td>Terki daha iyi olan</td></tr>
          <tr><td><b>Mekruh-ı tahrîmî</b></td><td>Zannî delille sabit kesin yasak</td></tr>
          <tr><td><b>Haram</b></td><td>Kesin delille sabit kesin yasak</td></tr>
        </table>
        <h4>Kıyasın rükünleri</h4>
        <ol><li><b>Asıl:</b> Hükmü nasla belirlenmiş mesele</li><li><b>Fer':</b> Hükmü aranan yeni mesele</li><li><b>Hüküm:</b> Aslın hükmü</li><li><b>İllet:</b> Ortak sebep</li></ol>
        <p>Örnek: Şarap (asıl) haramdır; illet sarhoş ediciliktir; aynı illet bulunan başka içki (fer') de haramdır.</p>`,
      cards: [
        ["Dört asıl delil", "Kitap, Sünnet, İcmâ, Kıyas"],
        ["Farz ile vâcib farkı (Hanefî)", "Farz kesin, vâcib zannî delille sabittir"],
        ["Mekruh-ı tahrîmî", "Zannî delille sabit kesin yasak"],
        ["Haram", "Kesin delille sabit kesin yasak"],
        ["Kıyasın rükünleri", "Asıl, fer', hüküm, illet"],
        ["İllet", "Asıl ile fer' arasındaki ortak sebep"],
        ["Mübâh", "Yapıp yapmamakta serbest olunan"]
      ]
    }
  ],

  // ═════════════════ ÇAĞDAŞ: TEFSİR USULÜ ═════════════════
  "m-tefsirusul": [
    {
      id: "tarih", title: "Kur'an Tarihi",
      body: `
        <ul>
          <li><b>Nüzul:</b> Yaklaşık 23 yılda (610–632), olaylara ve ihtiyaçlara göre parça parça indi.</li>
          <li><b>Mekkî/Medenî:</b> Hicretten önce inenler Mekkî, sonra inenler Medenî kabul edilir (yaygın görüş).</li>
          <li><b>Hz. Peygamber dönemi:</b> Âyetler vahiy kâtiplerince yazıldı ve ezberlendi.</li>
          <li><b>Cem' (Hz. Ebû Bekir):</b> Yemâme Savaşı'nda çok sayıda hâfızın şehit olması üzerine, Hz. Ömer'in teklifiyle Zeyd b. Sâbit başkanlığında Kur'an tek mushafta toplandı.</li>
          <li><b>İstinsah (Hz. Osman):</b> Okuyuş farklılıkları üzerine resmî nüshalar çoğaltılıp merkezlere gönderildi.</li>
        </ul>
        <p>Kur'an <b>114 sure</b> ve <b>30 cüz</b>dür.</p>
        <h4>Tefsir çeşitleri</h4>
        <ul>
          <li><b>Rivâyet tefsiri:</b> Âyet, hadis, sahâbe ve tâbiûn sözleriyle tefsir (Taberî)</li>
          <li><b>Dirâyet tefsiri:</b> Dil, akıl ve ilimlerle tefsir (Beyzâvî, Râzî)</li>
          <li><b>Konulu tefsir:</b> Bir konuyla ilgili âyetleri bütüncül inceleme (çağdaş yöntem)</li>
        </ul>`,
      cards: [
        ["Kur'an'ın nüzul süresi", "Yaklaşık 23 yıl (610–632)"],
        ["Kur'an'ı tek mushafta toplayan halife", "Hz. Ebû Bekir"],
        ["Cem' heyetinin başkanı", "Zeyd b. Sâbit"],
        ["Cem'in sebebi", "Yemâme Savaşı'nda hâfızların şehit olması"],
        ["Mushafı çoğaltıp merkezlere gönderen halife", "Hz. Osman"],
        ["Mekkî âyetlerin yaygın tanımı", "Hicretten önce inenler"],
        ["Rivâyet tefsirinin örneği", "Taberî tefsiri"],
        ["Kur'an'daki sure sayısı", "114"]
      ]
    }
  ],

  // ═════════════════ ÇAĞDAŞ: KELAM VE MEZHEPLER ═════════════════
  "m-kelam": [
    {
      id: "ekoller", title: "Mâtürîdiyye ve Eş'ariyye",
      body: `
        <p>Ehl-i sünnetin iki büyük kelam ekolü:</p>
        <table>
          <tr><th></th><th>Mâtürîdiyye</th><th>Eş'ariyye</th></tr>
          <tr><td>Kurucu</td><td>Ebû Mansûr el-Mâtürîdî (ö. 333/944), Semerkant</td><td>Ebü'l-Hasen el-Eş'arî (ö. 324/935-36), Basra/Bağdat</td></tr>
          <tr><td>Fıkhî yakınlık</td><td>Ağırlıkla Hanefîler</td><td>Ağırlıkla Şâfiî ve Mâlikîler</td></tr>
          <tr><td>Tekvîn</td><td>Ayrı ezelî sıfat</td><td>Kudretin taalluku</td></tr>
          <tr><td>Hüsün-kubuh</td><td>Akıl bazı iyi ve kötüleri idrak edebilir</td><td>İyi ve kötü şer'î belirlenir</td></tr>
          <tr><td>İmanda istisna</td><td>“İnşallah mü'minim” denmez</td><td>Caiz görülür</td></tr>
          <tr><td>İman artar/eksilir mi?</td><td>Mahiyet itibarıyla artmaz, eksilmez</td><td>Artar ve eksilir</td></tr>
        </table>
        <p class="tip">Bu farklar ekolün geneline dair yaygın kabulleri yansıtır; ayrıntıda farklı görüşler bulunur.</p>`,
      cards: [
        ["Mâtürîdiyye'nin kurucusu", "Ebû Mansûr el-Mâtürîdî"],
        ["Eş'ariyye'nin kurucusu", "Ebü'l-Hasen el-Eş'arî"],
        ["Mâtürîdîliğin yakın olduğu fıkıh mezhebi", "Hanefîlik"],
        ["İmanın artıp eksilmediğini savunan ekol", "Mâtürîdiyye"],
        ["Aklın bazı iyi ve kötüleri idrak edebileceğini savunan ekol", "Mâtürîdiyye"],
        ["“İnşallah mü'minim” demeyi caiz gören ekol", "Eş'ariyye"]
      ]
    }
  ]
};
