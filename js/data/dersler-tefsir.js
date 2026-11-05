// Usûl-i Tefsir — Suyûtî'nin el-İtkān'ı ve Şah Veliyyullah'ın el-Fevzü'l-Kebîr'i çizgisinde.
(function () {
  const AR = (s) => `<span lang="ar">${s}</span>`;
  window.DERSLER["k-tefsir"] = [
    {
      id: "nuzul", title: "Nüzul, Mekkî-Medenî ve Kur'an'ın Beş İlmi",
      body: `
        <h4>Mekkî ve Medenî</h4>
        <p>Üç ölçüt kullanılmıştır; en yaygın olanı <b>zaman</b> ölçütüdür:</p>
        <ul>
          <li><b>Zaman:</b> Hicretten önce inen Mekkî, sonra inen (Mekke'de inse bile) Medenî.</li>
          <li><b>Mekân:</b> Mekke ve çevresinde inen Mekkî, Medine ve çevresinde inen Medenî.</li>
          <li><b>Muhatap:</b> Mekke halkına hitap eden Mekkî, Medine halkına hitap eden Medenî.</li>
        </ul>
        <table>
          <tr><th>Mekkî âyetlerin özellikleri</th><th>Medenî âyetlerin özellikleri</th></tr>
          <tr><td>Kısa âyet ve sureler; tevhid, nübüvvet, âhiret; kıssalar; ${AR("يَا أَيُّهَا النَّاسُ")} hitabı; secde âyetleri; hurûf-ı mukattaanın çoğu</td>
              <td>Uzun âyet ve sureler; ibadet, muâmelât, ceza ve cihad hükümleri; münafıklar ve Ehl-i kitapla tartışma; ${AR("يَا أَيُّهَا الَّذِينَ آمَنُوا")} hitabı</td></tr>
        </table>
        <h4>İlk ve son inen</h4>
        <ul>
          <li><b>İlk inen:</b> Alak suresinin ilk beş âyeti (en sahih görüş).</li>
          <li><b>Son inen:</b> Çeşitli görüşler vardır; meşhur olanı ${AR("وَاتَّقُوا يَوْمًا تُرْجَعُونَ فِيهِ إِلَى اللّٰهِ")} (Bakara 281). Hükümlerin tamamlandığını bildiren ${AR("اَلْيَوْمَ أَكْمَلْتُ لَكُمْ دِينَكُمْ")} (Mâide 3) Vedâ haccında inmiştir.</li>
          <li>Kur'an <b>yaklaşık 23 yılda</b>, olaylara ve ihtiyaçlara göre parça parça (müneccemen) inmiştir (Furkān 32).</li>
        </ul>
        <h4>el-Fevzü'l-Kebîr'e göre Kur'an'ın beş ilmi</h4>
        <ol>
          <li><b>İlmü'l-ahkâm:</b> Farz, vâcip, haram gibi hükümler.</li>
          <li><b>İlmü'l-cedel:</b> Müşrikler, Yahudiler, Hristiyanlar ve münafıklarla tartışma.</li>
          <li><b>Tezkîr bi-âlâillâh:</b> Allah'ın nimetlerini ve kudret delillerini hatırlatma.</li>
          <li><b>Tezkîr bi-eyyâmillâh:</b> Geçmiş ümmetlerin başına gelenleri hatırlatma.</li>
          <li><b>Tezkîr bi'l-mevt ve mâ ba'dehû:</b> Ölüm ve sonrasını hatırlatma.</li>
        </ol>`,
      cards: [
        ["Mekkî-Medenî ayrımında en yaygın ölçüt", "Zaman (hicretten önce/sonra)"],
        ["Mekkî âyetlerin tipik hitabı", "يَا أَيُّهَا النَّاسُ"],
        ["Medenî âyetlerin tipik hitabı", "يَا أَيُّهَا الَّذِينَ آمَنُوا"],
        ["Mekkî âyetlerin ana konuları", "Tevhid, nübüvvet, âhiret, kıssalar"],
        ["Medenî âyetlerin ana konuları", "İbadet ve muâmelât hükümleri, münafıklar, Ehl-i kitap"],
        ["İlk inen âyetler", "Alak 1–5"],
        ["Son inen âyet (meşhur görüş)", "Bakara 281"],
        ["Kur'an'ın parça parça inmesine ne denir?", "Müneccemen nüzul"],
        ["el-Fevzü'l-Kebîr'e göre Kur'an'ın beş ilmi", "Ahkâm, cedel, âlâullah, eyyâmullah, ölüm ve sonrası"],
        ["Tezkîr bi-eyyâmillâh", "Geçmiş ümmetlerin başına gelenleri hatırlatma"]
      ]
    },
    {
      id: "esbab", title: "Esbâbü'n-Nüzûl",
      body: `
        <p><b>Sebeb-i nüzûl</b>, bir veya birkaç âyetin inmesine vesile olan olay ya da sorudur. Âyetlerin tamamının bir sebebi yoktur; çoğu doğrudan hidayet için inmiştir.</p>
        <h4>Faydaları</h4>
        <ul>
          <li>Âyetin doğru anlaşılması ve yanlış yorumdan korunma</li>
          <li>Hükmün hikmetini kavrama</li>
          <li>Âyetin kimin hakkında indiğini bilme</li>
        </ul>
        <h4>Klasik örnek: Safâ ile Merve</h4>
        <p>${AR("إِنَّ الصَّفَا وَالْمَرْوَةَ مِنْ شَعَائِرِ اللّٰهِ فَمَنْ حَجَّ الْبَيْتَ أَوِ اعْتَمَرَ فَلَا جُنَاحَ عَلَيْهِ أَنْ يَطَّوَّفَ بِهِمَا")} (Bakara 158). Urve b. Zübeyr, “günah yoktur” ifadesinden sa'yin isteğe bağlı olduğunu anlamıştı. Teyzesi Hz. Âişe, âyetin, Câhiliye'de oradaki putlar yüzünden sa'yden çekinen Ensara cevap olarak indiğini açıkladı. Sebebi bilmek yanlış anlamayı önlemiştir.</p>
        <h4>Temel kaide</h4>
        <p class="ar-block" lang="ar">الْعِبْرَةُ بِعُمُومِ اللَّفْظِ لَا بِخُصُوصِ السَّبَبِ</p>
        <p>“İtibar, lafzın genelliğinedir; sebebin özelliğine değil.” Âyet belirli bir olay üzerine inse de lafzı genelse hükmü benzer bütün durumları kapsar. Örneğin li'ân âyetleri (Nûr 6–9) Hilâl b. Ümeyye hakkında inmiştir ama hükmü herkes içindir.</p>
        <h4>Sebebin bilinme yolu</h4>
        <p>Sebeb-i nüzûl ancak <b>sahih rivayetle</b> bilinir; içtihad ve tahmine yer yoktur. Sahâbînin “Bu âyet şu konuda indi” sözü bazen sebep, bazen de âyetin kapsamına giren bir örnek anlamındadır.</p>`,
      cards: [
        ["Sebeb-i nüzûl", "Âyetin inmesine vesile olan olay veya soru"],
        ["Sebeb-i nüzûl nasıl bilinir?", "Yalnız sahih rivayetle"],
        ["العبرة بعموم اللفظ لا بخصوص السبب", "İtibar lafzın genelliğinedir, sebebin özelliğine değil"],
        ["Bakara 158'i yanlış anlayan tâbiî", "Urve b. Zübeyr"],
        ["Bakara 158'in sebebini açıklayan sahâbî", "Hz. Âişe"],
        ["Li'ân âyetlerinin indiği sahâbî", "Hilâl b. Ümeyye"],
        ["Esbâbü'n-nüzûlün temel faydası", "Âyetin doğru anlaşılması"]
      ]
    },
    {
      id: "nesih", title: "Nâsih ve Mensûh",
      body: `
        <p><b>Nesih</b>, şer'î bir hükmün, sonradan gelen şer'î bir delille kaldırılmasıdır. Kaldıran <b>nâsih</b>, kaldırılan <b>mensûh</b>tur. Delil: ${AR("مَا نَنْسَخْ مِنْ آيَةٍ أَوْ نُنْسِهَا نَأْتِ بِخَيْرٍ مِنْهَا أَوْ مِثْلِهَا")} (Bakara 106).</p>
        <h4>Şartları</h4>
        <ul>
          <li>Mensûh şer'î bir hüküm, nâsih de şer'î bir delil olmalı.</li>
          <li>Nâsih, mensûhtan sonra gelmiş olmalı.</li>
          <li>İkisi arasında uzlaştırma (cem') imkânı bulunmamalı.</li>
          <li>Nesih yalnız Hz. Peygamber hayattayken olabilir; haberler (kıssalar, vaatler) ve inanç esasları neshedilmez.</li>
        </ul>
        <h4>Türleri</h4>
        <ul>
          <li><b>Hükmü kaldırılıp tilaveti kalan:</b> En çok örneği olan tür.</li>
          <li><b>Tilaveti kaldırılıp hükmü kalan</b> ve <b>her ikisi kaldırılan</b>: Rivayetlerle bildirilir; âlimler arasında tartışmalıdır.</li>
        </ul>
        <h4>Nesih âyetlerinin sayısı</h4>
        <p>Önceki âlimler, tahsis ve takyidi de nesih saydıkları için çok sayıda mensûh âyetten söz etmiştir. Suyûtî bu sayıyı 20 civarına indirmiş, <b>Şah Veliyyullah ed-Dihlevî</b> ise el-Fevzü'l-Kebîr'de uzlaştırma imkânı olanları ayıklayarak kesin nesih örneklerini <b>beşe</b> indirmiştir:</p>
        <table>
          <tr><th>Mensûh</th><th>Nâsih</th><th>Konu</th></tr>
          <tr><td>Bakara 180</td><td>Miras âyetleri (Nisâ 11–12)</td><td>Ana-babaya ve akrabaya vasiyet</td></tr>
          <tr><td>Bakara 240</td><td>Bakara 234</td><td>Kocası ölen kadının iddeti: bir yıl → dört ay on gün</td></tr>
          <tr><td>Enfâl 65</td><td>Enfâl 66</td><td>Bir müminin on kişiye karşı durması → iki kişiye karşı</td></tr>
          <tr><td>Ahzâb 52</td><td>Ahzâb 50</td><td>Hz. Peygamber'in evlenme yasağı</td></tr>
          <tr><td>Mücâdele 12</td><td>Mücâdele 13</td><td>Hz. Peygamber'le gizli görüşmeden önce sadaka verme</td></tr>
        </table>
        <p class="tip">Ahzâb 50'nin, mushaf sırasında önce gelmesine rağmen nâsih sayılması, nesihte <b>iniş sırasının</b> esas alındığını gösterir.</p>`,
      cards: [
        ["Nesih", "Şer'î hükmün sonradan gelen şer'î delille kaldırılması"],
        ["Neshin dayandığı âyet", "Bakara 106"],
        ["Neshe konu olmayanlar", "Haberler (kıssalar, vaatler) ve inanç esasları"],
        ["Nesih ne zamana kadar olabilir?", "Hz. Peygamber hayattayken"],
        ["Dihlevî'ye göre kesin nesih örneği sayısı", "Beş"],
        ["İddetin bir yıldan dört ay on güne inmesi", "Bakara 240 → Bakara 234"],
        ["Bire on → bire iki", "Enfâl 65 → Enfâl 66"],
        ["Gizli görüşmeden önce sadaka", "Mücâdele 12 → Mücâdele 13"],
        ["Nesihte hangi sıra esastır?", "İniş sırası (mushaf sırası değil)"],
        ["Neshin şartlarından biri (çelişki ile ilgili)", "Uzlaştırma imkânı olmamalı"]
      ]
    },
    {
      id: "muhkem", title: "Muhkem ve Müteşâbih",
      body: `
        <p class="ar-block" lang="ar">هُوَ الَّذِي أَنْزَلَ عَلَيْكَ الْكِتَابَ مِنْهُ آيَاتٌ مُحْكَمَاتٌ هُنَّ أُمُّ الْكِتَابِ وَأُخَرُ مُتَشَابِهَاتٌ</p>
        <p>Âl-i İmrân 7: Kitabın bir kısmı muhkem âyetlerdir, onlar Kitabın anasıdır; diğerleri müteşâbihtir.</p>
        <ul>
          <li><b>Muhkem:</b> Manası açık, tek anlama gelen, başka bir delile ihtiyaç duymayan âyet.</li>
          <li><b>Müteşâbih:</b> Birden çok anlama ihtimali olan veya manası insan bilgisinin sınırlarını aşan âyet.</li>
        </ul>
        <h4>Vakf tartışması</h4>
        <p>${AR("وَمَا يَعْلَمُ تَأْوِيلَهُ إِلَّا اللّٰهُ ۗ وَالرَّاسِخُونَ فِي الْعِلْمِ يَقُولُونَ آمَنَّا بِهِ")}</p>
        <ul>
          <li>${AR("إِلَّا اللّٰهُ")} üzerinde durulursa: Müteşâbihin hakiki manasını yalnız Allah bilir; ilimde derinleşmişler “ona iman ettik” der. (Çoğunluk)</li>
          <li>Durulmadan ${AR("وَالرَّاسِخُونَ")}'a bağlanırsa: İlimde derinleşmişler de onun tevilini bilir.</li>
        </ul>
        <h4>Müteşâbihlere yaklaşım</h4>
        <table>
          <tr><td><b>Tefvîz</b> (Selef)</td><td>Lafzı kabul edip, Allah'ı yaratılmışlara benzetmeden, manayı Allah'a havale etmek</td></tr>
          <tr><td><b>Te'vîl</b> (Halef)</td><td>Dilin imkânları içinde, Allah'a layık bir manaya yorumlamak (${AR("يَدُ اللّٰهِ")} → kudret, nimet)</td></tr>
        </table>
        <p>Her iki yaklaşım da <b>teşbih</b>ten (Allah'ı yaratılmışlara benzetmek) ve <b>ta'tîl</b>den (sıfatları nefyetmek) kaçınır.</p>
        <h4>Hurûf-ı mukattaa</h4>
        <p>29 surenin başında gelen ${AR("الٓمٓ، حمٓ، يسٓ، قٓ")} gibi harfler. Hakkında birçok görüş vardır: Allah'ın bildiği sırlar, sure isimleri, Kur'an'ın bu harflerden oluştuğuna ve benzerinin getirilemeyeceğine dikkat çekme (i'câz).</p>`,
      cards: [
        ["Muhkem ve müteşâbihin dayandığı âyet", "Âl-i İmrân 7"],
        ["Muhkem", "Manası açık, tek anlama gelen âyet"],
        ["Müteşâbih", "Birden çok anlama ihtimali olan veya manası insan bilgisini aşan âyet"],
        ["Muhkem âyetler için Kur'an'ın ifadesi", "Ümmü'l-kitâb (Kitabın anası)"],
        ["Tefvîz", "Manayı Allah'a havale etmek (Selef)"],
        ["Te'vîl", "Allah'a layık bir manaya yorumlamak (Halef)"],
        ["Kaçınılması gereken iki uç", "Teşbih ve ta'tîl"],
        ["Hurûf-ı mukattaa kaç surenin başında bulunur?", "29"]
      ]
    },
    {
      id: "kiraat", title: "Kıraatler",
      body: `
        <p>Hz. Peygamber “Kur'an yedi harf üzere indirildi” buyurmuştur (Buhârî, Müslim). “Yedi harf”in ne olduğu hakkında çok sayıda görüş vardır; bunlar <b>yedi kıraatle aynı şey değildir</b>.</p>
        <h4>Sahih kıraatin üç şartı</h4>
        <ol>
          <li>Senedinin sahih (mütevâtir) olması</li>
          <li>Mushaf-ı Osmânî'nin yazısına (resmine), en azından ihtimal olarak uyması</li>
          <li>Arapça dil kurallarına bir yönüyle uygun olması</li>
        </ol>
        <h4>Kırâat-ı seb'a imamları ve râvileri</h4>
        <table>
          <tr><th>İmam</th><th>Şehir</th><th>Râvileri</th></tr>
          <tr><td>Nâfi'</td><td>Medine</td><td>Kālûn, Verş</td></tr>
          <tr><td>İbn Kesîr</td><td>Mekke</td><td>Bezzî, Kunbül</td></tr>
          <tr><td>Ebû Amr</td><td>Basra</td><td>Dûrî, Sûsî</td></tr>
          <tr><td>İbn Âmir</td><td>Şam</td><td>Hişâm, İbn Zekvân</td></tr>
          <tr><td><b>Âsım</b></td><td>Kûfe</td><td>Şu'be, <b>Hafs</b></td></tr>
          <tr><td>Hamza</td><td>Kûfe</td><td>Halef, Hallâd</td></tr>
          <tr><td>Kisâî</td><td>Kûfe</td><td>Ebü'l-Hâris, Dûrî</td></tr>
        </table>
        <p><b>Kırâat-ı aşere</b> için bunlara Ebû Ca'fer, Ya'kūb ve Halef el-Âşir eklenir.</p>
        <h4>Örnek fark</h4>
        <p>Fâtiha 4: Âsım ve Kisâî ${AR("مَالِكِ يَوْمِ الدِّينِ")} (sahibi), diğerleri ${AR("مَلِكِ يَوْمِ الدِّينِ")} (hükümdarı) okur. Her iki kıraat da sahihtir ve manaya zenginlik katar.</p>
        <p class="tip">Türkiye ve İslam dünyasının büyük kısmında okunan, <b>Âsım kıraatinin Hafs rivâyeti</b>dir. Kuzey ve Batı Afrika'da Verş ve Kālûn rivâyetleri yaygındır.</p>`,
      cards: [
        ["Sahih kıraatin üç şartı", "Sahih (mütevâtir) sened, Mushaf resmine uygunluk, Arapçaya uygunluk"],
        ["Yedi harf ile yedi kıraat aynı mıdır?", "Hayır"],
        ["Türkiye'de okunan kıraat ve rivâyet", "Âsım kıraati, Hafs rivâyeti"],
        ["Âsım'ın iki râvisi", "Şu'be ve Hafs"],
        ["Nâfi'in iki râvisi", "Kālûn ve Verş"],
        ["Medine kıraat imamı", "Nâfi'"],
        ["Kırâat-ı aşereye eklenen üç imam", "Ebû Ca'fer, Ya'kūb, Halef el-Âşir"],
        ["Fâtiha 4'te مَالِكِ okuyanlar", "Âsım ve Kisâî"]
      ]
    },
    {
      id: "mufessir", title: "Tefsirin Kaynakları ve Müfessirin Şartları",
      body: `
        <h4>Tefsir ve te'vîl</h4>
        <p><b>Tefsir</b>, âyetin manasını rivayete ve dile dayanarak açıklamak; <b>te'vîl</b>, lafzı ihtimalli manalarından birine delille hamletmektir. Önceki âlimler ikisini çoğu zaman eş anlamlı kullanmıştır.</p>
        <h4>Tefsirin kaynakları (sırasıyla)</h4>
        <ol>
          <li><b>Kur'an'ın Kur'an'la tefsiri:</b> Bir âyetin başka bir âyetle açıklanması.</li>
          <li><b>Sünnet'le tefsir:</b> Hz. Peygamber'in açıklamaları.</li>
          <li><b>Sahâbe sözleri:</b> Özellikle nüzule şahit olmaları sebebiyle (İbn Abbâs, İbn Mes'ûd, Übey b. Kâ'b).</li>
          <li><b>Tâbiûn sözleri:</b> Mücâhid, İkrime, Katâde gibi.</li>
          <li><b>Dil ve içtihad:</b> Arap dili ve şer'î ilimlerin kurallarına uygun yorum.</li>
        </ol>
        <h4>Suyûtî'ye göre müfessirin bilmesi gereken ilimler</h4>
        <p>Lügat, nahiv, sarf, iştikak, meânî, beyân, bedî', kıraat, usûlü'd-dîn (kelam), usûl-i fıkıh, esbâbü'n-nüzûl ve kıssalar, nâsih-mensûh, fıkıh, mücmel ve mübhemleri açıklayan hadisler ve <b>ilm-i mevhibe</b> (Allah'ın ilmiyle amel edene verdiği ilim).</p>
        <p class="tip">Bu liste, medrese müfredatının neden alet ilimleriyle (sarf, nahiv, mantık, belâgat) başladığını açıklar: Tefsir bu ilimlerin hepsinin üzerine kurulur.</p>
        <h4>İsrâiliyyât</h4>
        <p>Ehl-i kitap kaynaklarından tefsire giren rivayetler. Üç kısımdır: Kur'an ve Sünnet'e uygun olanlar anlatılabilir; aykırı olanlar reddedilir; hakkında bilgi olmayanlar ne tasdik ne de tekzip edilir.</p>`,
      cards: [
        ["Tefsir ile te'vîlin farkı", "Tefsir rivayet ve dile dayalı açıklama; te'vîl ihtimalli manalardan birine delille hamletmek"],
        ["Tefsirin ilk kaynağı", "Kur'an'ın Kur'an'la tefsiri"],
        ["Tefsirde en meşhur sahâbî", "Abdullah b. Abbâs"],
        ["Tâbiûn müfessirlerine örnek", "Mücâhid, İkrime, Katâde"],
        ["İlm-i mevhibe", "Allah'ın ilmiyle amel edene verdiği ilim"],
        ["İsrâiliyyât", "Ehl-i kitap kaynaklarından tefsire giren rivayetler"],
        ["Hakkında bilgi olmayan İsrâiliyyât", "Ne tasdik ne tekzip edilir"],
        ["Müfessirin alet ilimlerine ihtiyacı", "Lügat, nahiv, sarf, belâgat olmadan tefsir yapılamaz"]
      ]
    }
  ];
  const k = window.KLASIK.find((c) => c.id === "k-tefsir");
  if (k) k.summary += " Usûl dersleri İtkān ve el-Fevzü'l-Kebîr çizgisindedir; uygulama için Amme cüzü tahliline bak.";
})();
