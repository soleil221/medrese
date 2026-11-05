// Usûl-i Fıkıh — Menâru'l-Envâr (Nesefî) sırasıyla, Hanefî (fukahâ) metodu.
(function () {
  const AR = (s) => `<span lang="ar">${s}</span>`;
  const D = window.DERSLER;

  D["k-usulfikih"].push(
    {
      id: "vaz", title: "Kitap: Lafzın Vaz' Bakımından Kısımları",
      body: `
        <p>Menâr, şer'î delillerin ilki olan <b>Kitab</b>ı “nazım ve mana”dan oluşan Kur'an olarak tanımlar ve lafzı dört açıdan taksim eder: <b>vaz'</b>, <b>beyan (zuhur)</b>, <b>kullanım</b> ve <b>delâlet</b>. İlki vaz'dır:</p>
        <table>
          <tr><th>Kısım</th><th>Tarif</th><th>Örnek</th></tr>
          <tr><td><b>Hâs</b></td><td>Tek bir manaya, tek başına konulmuş lafız</td><td>${AR("ثَلَاثَةَ قُرُوءٍ")} (Bakara 228): “üç” sayısı</td></tr>
          <tr><td><b>Âm</b></td><td>Bir defada, sınırsız fertleri kapsayan lafız</td><td>${AR("الْمُشْرِكِينَ")}, ${AR("مَنْ، مَا")}, ${AR("كُلّ")}</td></tr>
          <tr><td><b>Müşterek</b></td><td>Birden çok manaya ayrı ayrı konulmuş lafız</td><td>${AR("قُرْءٌ")}: hayız ve temizlik</td></tr>
          <tr><td><b>Müevvel</b></td><td>Müşterek manalardan biri re'y ile tercih edilmiş lafız</td><td>Hanefîlerin ${AR("قُرْءٌ")}'u hayız olarak tercihi</td></tr>
        </table>
        <h4>Hâs ve âmmın hükmü (Hanefî)</h4>
        <ul>
          <li><b>Hâs</b> delâletinde <b>kat'î</b>dir; beyana ihtiyaç duymaz. Örneğin ${AR("ثَلَاثَةَ")} hâs olduğundan iddet tam üç olmalıdır; Hanefîler bu sebeple ${AR("قُرْءٌ")}'u hayız saymıştır (temizlik sayılırsa iki buçuk olur).</li>
          <li><b>Âm</b> da Hanefîlere göre delâletinde <b>kat'î</b>dir (Şâfiîlere göre zannî). Bu yüzden âm, haber-i vâhid veya kıyasla ilk defa tahsis edilemez.</li>
          <li><b>Tahsis:</b> Âmmın bazı fertlerini hüküm dışında bırakmak. Hanefîlere göre tahsis eden delil âmla aynı anda ve bağımsız olmalıdır; sonra gelirse <b>nesih</b> olur.</li>
        </ul>`,
      cards: [
        ["Lafzın dört taksimi (Menâr)", "Vaz', beyan (zuhur), kullanım, delâlet"],
        ["Vaz' bakımından kısımlar", "Hâs, âm, müşterek, müevvel"],
        ["Hâs", "Tek manaya tek başına konulmuş lafız"],
        ["Âm", "Bir defada sınırsız fertleri kapsayan lafız"],
        ["Müşterek", "Birden çok manaya ayrı ayrı konulmuş lafız"],
        ["Müevvel", "Müşterek manalardan biri re'yle tercih edilmiş lafız"],
        ["Hanefîlere göre âmmın delâleti", "Kat'î"],
        ["Hanefîler “kur'”u neden hayız saydı?", "“Üç” hâs ve kat'î olduğundan tam üç olsun diye"],
        ["Tahsis", "Âmmın bazı fertlerini hüküm dışında bırakmak"]
      ]
    },
    {
      id: "emir", title: "Emir, Nehiy, Mutlak ve Mukayyed",
      body: `
        <p>Menâr hâs lafzın en önemli türleri olarak <b>emir</b> ve <b>nehyi</b> inceler.</p>
        <h4>Emir</h4>
        <ul>
          <li>Aslında <b>vücûb</b> ifade eder; nedb, ibâha gibi manalara ancak karîneyle geçer.</li>
          <li><b>Tekrar</b> gerektirmez; bir kez yapmakla yerine gelir. Ancak bir sebebe veya şarta bağlanmışsa sebep tekrarlandıkça tekrarlanır (${AR("أَقِمِ الصَّلَاةَ لِدُلُوكِ الشَّمْسِ")}, İsrâ 78).</li>
          <li><b>Mutlak emir</b> Hanefîlerin çoğunluğuna göre hemen yapmayı (fevr) değil, geniş zamanı (terâhî) gerektirir.</li>
          <li>Vaktine göre emir: <b>Muvassa'</b> (vakit ibadetten geniş: namaz), <b>mudayyak / mi'yâr</b> (vakit ibadete eşit: Ramazan orucu), <b>zû şebeheyn</b> (iki yönlü: hac).</li>
        </ul>
        <h4>Nehiy</h4>
        <ul>
          <li>Aslında <b>tahrîm</b> ifade eder.</li>
          <li>Hanefîlere göre şer'î fiillerden nehiy, fiilin <b>meşruiyetini kaldırmaz</b>, onu <b>fâsid</b> kılar (ör. bayram günü oruç nehyi). Hissî fiillerden nehiy (zina gibi) ise fiili bütünüyle meşru olmaktan çıkarır.</li>
        </ul>
        <h4>Mutlak ve mukayyed</h4>
        <p>Hanefîlere göre <b>hüküm ve sebep aynıysa</b> mutlak mukayyede hamledilir. <b>Sebep farklıysa</b> hamledilmez. Bu yüzden zıhâr keffâretindeki ${AR("رَقَبَةٍ")} (mutlak), öldürme keffâretindeki ${AR("رَقَبَةٍ مُؤْمِنَةٍ")} (mukayyed, Nisâ 92) kaydıyla sınırlanmaz.</p>`,
      cards: [
        ["Emrin aslî manası", "Vücûb"],
        ["Emir tekrar gerektirir mi?", "Hayır; sebebe bağlıysa sebeple tekrarlanır"],
        ["Mutlak emir fevr mi terâhî mi? (Hanefî çoğunluk)", "Terâhî"],
        ["Muvassa' vakit", "İbadetten geniş vakit (namaz)"],
        ["Mi'yâr vakit", "İbadete eşit vakit (Ramazan orucu)"],
        ["Zû şebeheyn vakit", "İki yönlü vakit (hac)"],
        ["Nehyin aslî manası", "Tahrîm"],
        ["Şer'î fiilden nehiy (Hanefî)", "Fiili bâtıl değil fâsid kılar"],
        ["Mutlak ne zaman mukayyede hamledilir? (Hanefî)", "Hüküm ve sebep aynı olduğunda"]
      ]
    },
    {
      id: "zuhur", title: "Zuhur ve Hafâ Dereceleri",
      body: `
        <p>Lafız, manasının açıklığına göre dört derecede açık, dört derecede kapalı olur. Çatışma olursa daha açık olan tercih edilir.</p>
        <table>
          <tr><th>Açık (artan)</th><th>Tarif</th><th>Kapalı (artan)</th><th>Tarif</th></tr>
          <tr><td><b>Zâhir</b></td><td>Manası duyulur duyulmaz anlaşılan, ama sevk edildiği asıl amaç o olmayan</td><td><b>Hafî</b></td><td>Bazı fertlere uygulanmasında kapalılık olan (yankesici “hırsız” mı?)</td></tr>
          <tr><td><b>Nas</b></td><td>Sözün asıl amacı olan mana</td><td><b>Müşkil</b></td><td>Benzerleri arasına karışmış, düşünmekle anlaşılan</td></tr>
          <tr><td><b>Müfesser</b></td><td>Tevil ve tahsis ihtimali kalmamış</td><td><b>Mücmel</b></td><td>Ancak şâriin beyanıyla anlaşılan (${AR("الصَّلَاة، الزَّكَاة، الرِّبَا")})</td></tr>
          <tr><td><b>Muhkem</b></td><td>Nesih ihtimali de olmayan</td><td><b>Müteşâbih</b></td><td>Dünyada manası bilinmesi umulmayan (hurûf-ı mukattaa)</td></tr>
        </table>
        <h4>Klasik örnekler</h4>
        <ul>
          <li>${AR("وَأَحَلَّ اللّٰهُ الْبَيْعَ وَحَرَّمَ الرِّبَا")} (Bakara 275): Alışverişin helalliği hakkında <b>zâhir</b>; alışveriş ile ribâ arasındaki farkı bildirmekte <b>nas</b>tır, çünkü âyet “alışveriş de ribâ gibidir” diyenlere cevap olarak gelmiştir.</li>
          <li>${AR("فَسَجَدَ الْمَلَائِكَةُ كُلُّهُمْ أَجْمَعُونَ")} (Hicr 30): ${AR("كُلُّهُمْ")} tahsis, ${AR("أَجْمَعُونَ")} ayrı ayrı secde etme ihtimalini kaldırdığı için <b>müfesser</b>.</li>
          <li>${AR("إِنَّ اللّٰهَ بِكُلِّ شَيْءٍ عَلِيمٌ")}: Nesih ihtimali olmadığı için <b>muhkem</b>.</li>
        </ul>`,
      cards: [
        ["Açıklık dereceleri (artan sırayla)", "Zâhir, nas, müfesser, muhkem"],
        ["Kapalılık dereceleri (artan sırayla)", "Hafî, müşkil, mücmel, müteşâbih"],
        ["Nas", "Sözün asıl amacı olan açık mana"],
        ["Müfesser", "Tevil ve tahsis ihtimali kalmamış lafız"],
        ["Muhkem", "Nesih ihtimali de olmayan lafız"],
        ["Mücmel", "Ancak şâriin beyanıyla anlaşılan lafız (salât, zekât)"],
        ["Müteşâbih", "Dünyada manasının bilinmesi umulmayan lafız"],
        [AR("وَأَحَلَّ اللّٰهُ الْبَيْعَ وَحَرَّمَ الرِّبَا") + " — bey' ile ribâ farkında", "Nas"],
        [AR("كُلُّهُمْ أَجْمَعُونَ") + " (Hicr 30)", "Müfesser"]
      ]
    },
    {
      id: "delalet", title: "Kullanım ve Delâlet: Hakikat, Mecaz ve Dört Delâlet",
      body: `
        <h4>Kullanım bakımından</h4>
        <ul>
          <li><b>Hakikat</b> ve <b>mecaz</b>: Hanefîlere göre bir lafızla aynı anda hem hakikat hem mecaz kastedilemez.</li>
          <li><b>Sarîh</b> (açık) ve <b>kinâye</b> (kapalı): Talâkta ${AR("أَنْتِ طَالِقٌ")} sarîhtir, niyet gerekmez; ${AR("اِلْحَقِي بِأَهْلِكِ")} gibi kinâyeli sözler niyet veya hâl karînesi gerektirir.</li>
        </ul>
        <h4>Nassın dört delâleti (Hanefî)</h4>
        <table>
          <tr><th>Delâlet</th><th>Tarif</th><th>Örnek</th></tr>
          <tr><td><b>İbâretü'n-nas</b></td><td>Sözün kendisi için sevk edildiği mana</td><td>${AR("لِلْفُقَرَاءِ الْمُهَاجِرِينَ")} (Haşr 8): Ganimette muhacirlerin hakkı vardır.</td></tr>
          <tr><td><b>İşâretü'n-nas</b></td><td>Söz bunun için sevk edilmemiş, ama lafızdan çıkan lâzım mana</td><td>Aynı âyette onlara “fakir” denmesi, Mekke'de bıraktıkları mallar üzerindeki mülkiyetlerinin kalktığına işaret eder.</td></tr>
          <tr><td><b>Delâletü'n-nas</b></td><td>Hükmün illeti dil yoluyla anlaşılıp benzerine geçmesi</td><td>${AR("فَلَا تَقُلْ لَهُمَا أُفٍّ")} (İsrâ 23): Ana-babayı dövmenin haramlığı evleviyetle anlaşılır.</td></tr>
          <tr><td><b>İktizâü'n-nas</b></td><td>Sözün doğru veya geçerli olması için takdiri zorunlu olan mana</td><td>${AR("حُرِّمَتْ عَلَيْكُمْ أُمَّهَاتُكُمْ")} (Nisâ 23): “annelerinizle <i>evlenmek</i>” takdir edilir.</td></tr>
        </table>
        <p>Çatışmada sıralama: ibâre > işâret > delâlet > iktizâ.</p>
        <p class="tip">Hanefîler <b>mefhûm-ı muhâlifi</b> (sınırlayıcı kaydın tersinden hüküm çıkarmayı) şer'î nasslarda delil kabul etmez; Şâfiîler kabul eder.</p>`,
      cards: [
        ["Nassın dört delâleti", "İbâre, işâret, delâlet, iktizâ"],
        ["İbâretü'n-nas", "Sözün kendisi için sevk edildiği mana"],
        ["İşâretü'n-nas", "Sevk edilmemiş ama lafızdan çıkan lâzım mana"],
        ["Delâletü'n-nas", "İlletin dil yoluyla anlaşılıp benzerine geçmesi"],
        ["İktizâü'n-nas", "Sözün doğruluğu için takdiri zorunlu mana"],
        [AR("فَلَا تَقُلْ لَهُمَا أُفٍّ") + " → dövmenin haramlığı", "Delâletü'n-nas"],
        [AR("حُرِّمَتْ عَلَيْكُمْ أُمَّهَاتُكُمْ") + " → “evlenmek” takdiri", "İktizâü'n-nas"],
        ["Delâletler çatışırsa sıra", "İbâre > işâret > delâlet > iktizâ"],
        ["Mefhûm-ı muhâlif (Hanefî)", "Şer'î nasslarda delil değildir"],
        ["Aynı lafızla hakikat ve mecaz birlikte kastedilir mi? (Hanefî)", "Hayır"]
      ]
    },
    {
      id: "sunnet", title: "Sünnet: Haberlerin Kısımları",
      body: `
        <p>İkinci delil <b>Sünnet</b>tir. Menâr haberleri râvi sayısına ve râvilerin vasıflarına göre inceler.</p>
        <h4>Râvi sayısına göre (Hanefî üçlü taksim)</h4>
        <table>
          <tr><th>Haber</th><th>Tarif</th><th>Hükmü</th></tr>
          <tr><td><b>Mütevâtir</b></td><td>Her tabakada yalan üzerinde birleşmeleri düşünülemeyen topluluğun rivayeti</td><td>Kesin bilgi (ilm-i yakîn); inkârı küfür</td></tr>
          <tr><td><b>Meşhur</b></td><td>İlk tabakada âhâd, sonra (tâbiîn ve tebe-i tâbiîn devrinde) mütevâtir derecesine ulaşan</td><td>İlm-i tuma'nîne; Kitab'a ziyade (ek hüküm) caiz</td></tr>
          <tr><td><b>Âhâd</b></td><td>Mütevâtir ve meşhur derecesine ulaşmayan</td><td>Amel gerektirir, kesin bilgi gerektirmez</td></tr>
        </table>
        <h4>Râvide aranan şartlar</h4>
        <p>Akıl, zabt, adâlet ve İslam.</p>
        <h4>Hanefî usulünün özellikleri</h4>
        <ul>
          <li><b>Mürsel</b> haber (sahâbî atlanmış) güvenilir râviden gelirse kabul edilir.</li>
          <li>Âhâd haber, <b>umûmü'l-belvâ</b> (herkesin karşılaştığı) bir konuda gelirse ve meşhur olmamışsa zayıflık sayılır.</li>
          <li>Râvi rivayetiyle çelişen amel ederse, rivayetin neshedildiği veya tevil edildiği sonucuna gidilir.</li>
          <li>Âhâd haber Kitab'ın âm ve zâhirini tahsis edemez.</li>
        </ul>`,
      cards: [
        ["Hanefîlerin haber taksimi", "Mütevâtir, meşhur, âhâd"],
        ["Mütevâtirin hükmü", "Kesin bilgi; inkârı küfür"],
        ["Meşhur haber (Hanefî)", "İlk tabakada âhâd, sonra tevâtüre ulaşan"],
        ["Meşhur haberin hükmü", "İlm-i tuma'nîne; Kitab'a ziyade caiz"],
        ["Âhâd haberin hükmü", "Amel gerektirir, kesin bilgi gerektirmez"],
        ["Râvinin şartları", "Akıl, zabt, adâlet, İslam"],
        ["Mürsel haber (Hanefî)", "Güvenilir râviden gelirse kabul"],
        ["Umûmü'l-belvâ konusunda âhâd haber", "Meşhur olmamışsa zayıflık sayılır"]
      ]
    },
    {
      id: "icma-kiyas", title: "İcmâ ve Kıyas",
      body: `
        <h4>İcmâ</h4>
        <p>Hz. Peygamber'den sonra bir asırdaki <b>müctehidlerin</b> şer'î bir hüküm üzerinde ittifakıdır.</p>
        <ul>
          <li><b>Azîmet (sarîh icmâ):</b> Hepsinin sözle veya fiille görüş bildirmesi.</li>
          <li><b>Ruhsat (sükûtî icmâ):</b> Bir kısmının görüş bildirip diğerlerinin bilerek susması. Hanefîler bunu icmâ sayar.</li>
          <li>Sahâbe icmâı en güçlüsüdür; sonraki asırların icmâı dereceli olarak daha zayıftır.</li>
        </ul>
        <h4>Kıyas</h4>
        <p>Hükmü nasla belli bir aslın hükmünü, aralarındaki ortak <b>illet</b> sebebiyle hükmü belli olmayan fer'e taşımaktır.</p>
        <p><b>Şartları (Menâr):</b></p>
        <ol>
          <li>Aslın hükmü, o asla has olmamalı (ör. Hz. Huzeyme'nin şahitliğinin iki kişi sayılması kıyasa esas olamaz).</li>
          <li>Aslın hükmü kıyasa aykırı olarak sabit olmamalı (unutarak yiyenin orucunun bozulmaması gibi).</li>
          <li>Hüküm, kendisinde nas bulunmayan fer'e aynen taşınmalı.</li>
          <li>Aslın hükmü, ta'lîlden (illet çıkarmadan) sonra değişmemeli.</li>
        </ol>
        <h4>İstihsân</h4>
        <p>Hanefîlerin özellikle kullandığı delil: Açık kıyası, daha kuvvetli bir delil (nas, icmâ, zaruret veya gizli kıyas) sebebiyle bırakmaktır. Örneğin selem akdi, ma'dûmun satışı yasak olduğu hâlde nasla caizdir.</p>`,
      cards: [
        ["İcmâ", "Bir asırdaki müctehidlerin şer'î hüküm üzerinde ittifakı"],
        ["Sükûtî icmâ", "Bir kısmı görüş bildirip diğerlerinin bilerek susması"],
        ["Sükûtî icmâ Hanefîlere göre", "İcmâdır"],
        ["En güçlü icmâ", "Sahâbe icmâı"],
        ["Kıyas", "Aslın hükmünü ortak illetle fer'e taşımak"],
        ["Kıyasa aykırı sabit hükme örnek", "Unutarak yiyenin orucunun bozulmaması"],
        ["İstihsân", "Açık kıyası daha kuvvetli bir delil sebebiyle bırakmak"],
        ["Nasla sabit istihsâna örnek", "Selem akdi"]
      ]
    },
    {
      id: "ehliyet", title: "Hüküm, Ehliyet ve Avârız",
      body: `
        <h4>Vaz'î hüküm</h4>
        <p>Teklîfî hükümlere (farz, vâcip, sünnet...) ek olarak bir şeyi başka bir şeye bağlayan hükümler: <b>sebep</b>, <b>şart</b>, <b>mâni'</b>, <b>sıhhat-fesâd-butlân</b>, <b>azîmet-ruhsat</b>.</p>
        <ul>
          <li><b>Azîmet:</b> Asıl olarak konulmuş hüküm.</li>
          <li><b>Ruhsat:</b> Bir özür sebebiyle, asıl hükmün sebebi devam ederken getirilen kolaylık (yolcunun orucu ertelemesi gibi).</li>
        </ul>
        <h4>Ehliyet</h4>
        <table>
          <tr><td><b>Ehliyet-i vücûb</b></td><td>Hak ve borçlara elverişli olmak; insan olmakla (zimmet) başlar, ana karnında nâkıs, doğumla tam olur.</td></tr>
          <tr><td><b>Ehliyet-i edâ</b></td><td>Fiilleri hukuken geçerli olmak; temyizle nâkıs, akıl ve bulûğla tam olur.</td></tr>
        </table>
        <h4>Ehliyete arız olan durumlar (avârız)</h4>
        <ul>
          <li><b>Semâvî</b> (kulun elinde olmayan): küçüklük, delilik, bunama (ateh), unutma, uyku, baygınlık, kölelik, hastalık, hayız-nifas, ölüm.</li>
          <li><b>Müktesep</b> (kulun kendi fiiliyle): cehalet, sarhoşluk, şaka (hezl), sefeh, yolculuk, hata, ikrâh.</li>
        </ul>
        <p class="tip">Avârız, ehliyeti tamamen kaldırabilir (delilik), eksiltebilir (ateh) veya yalnız bazı hükümleri değiştirebilir (yolculuk namazı kısaltır).</p>`,
      cards: [
        ["Vaz'î hükümler", "Sebep, şart, mâni', sıhhat-fesâd-butlân, azîmet-ruhsat"],
        ["Ruhsat", "Asıl hükmün sebebi sürerken özür sebebiyle getirilen kolaylık"],
        ["Ehliyet-i vücûb", "Hak ve borçlara elverişlilik (insan olmakla)"],
        ["Ehliyet-i edâ", "Fiillerin hukuken geçerliliği (akıl ve bulûğla tam)"],
        ["Ana karnındaki çocuğun ehliyeti", "Nâkıs ehliyet-i vücûb"],
        ["Semâvî avârıza örnekler", "Küçüklük, delilik, unutma, uyku, hastalık, ölüm"],
        ["Müktesep avârıza örnekler", "Cehalet, sarhoşluk, şaka, sefeh, yolculuk, hata, ikrâh"]
      ]
    }
  );
})();
