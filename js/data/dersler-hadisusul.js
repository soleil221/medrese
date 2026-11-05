// Usûl-i Hadis — İbn Hacer'in Nuhbetü'l-Fiker'i sırasıyla.
(function () {
  const AR = (s) => `<span lang="ar">${s}</span>`;
  const D = window.DERSLER;

  D["k-hadisusul"].push(
    {
      id: "turuk", title: "Haberin Yolları: Mütevâtir ve Âhâd",
      body: `
        <p>Nuhbe, haberi önce kendisine ulaşan <b>yolların (turuk) sayısına</b> göre ayırır:</p>
        <table>
          <tr><th>Kısım</th><th>Tarif</th><th>Hükmü</th></tr>
          <tr><td><b>Mütevâtir</b></td><td>Her tabakada, yalan üzerinde birleşmeleri âdeten imkânsız sayıda râvi; habere duyuya dayalı olarak ulaşırlar</td><td>Zarûrî ve kesin bilgi</td></tr>
          <tr><td><b>Meşhur</b> (müstefîz)</td><td>Her tabakada en az üç yol (tevâtür derecesine ulaşmayan)</td><td>Âhâddır</td></tr>
          <tr><td><b>Azîz</b></td><td>Hiçbir tabakada ikiden az olmayan</td><td>Âhâddır</td></tr>
          <tr><td><b>Garîb</b> (ferd)</td><td>Bir tabakada tek râvinin rivayet ettiği</td><td>Âhâddır</td></tr>
        </table>
        <ul>
          <li><b>Garîb-i mutlak:</b> Teklik senedin aslında, yani sahâbî tabakasında (ör. “İnnemâ'l-a'mâlü bi'n-niyyât” hadisinin Hz. Ömer'den yalnız bir yolla gelmesi).</li>
          <li><b>Garîb-i nisbî:</b> Teklik senedin sonraki bir tabakasında.</li>
        </ul>
        <p><b>Âhâd</b> haberler (meşhur, azîz, garîb) ya <b>makbul</b> ya da <b>merdûd</b>dur. Bundan sonraki dersler bu ayrımı inceler.</p>
        <p class="tip">Hatırlatma: Hanefî usulünde (Menâr) “meşhur” ayrı bir kategoridir ve âhâddan güçlü sayılır. Muhaddislerin taksiminde ise meşhur âhâdın bir türüdür.</p>`,
      cards: [
        ["Nuhbe'ye göre haberin dört kısmı (yollara göre)", "Mütevâtir, meşhur, azîz, garîb"],
        ["Meşhur (muhaddislere göre)", "Her tabakada en az üç yol, tevâtüre ulaşmayan"],
        ["Azîz", "Hiçbir tabakada ikiden az olmayan"],
        ["Garîb", "Bir tabakada tek râvinin rivayet ettiği"],
        ["Garîb-i mutlak", "Teklik sahâbî tabakasında"],
        ["Garîb-i nisbî", "Teklik sonraki bir tabakada"],
        ["Mütevâtirin hükmü", "Zarûrî ve kesin bilgi"],
        ["Âhâd haberin iki kısmı", "Makbul ve merdûd"]
      ]
    },
    {
      id: "makbul", title: "Makbul Haber: Sahih ve Hasen",
      body: `
        <h4>Dört makbul derece</h4>
        <table>
          <tr><th>Derece</th><th>Tarif</th></tr>
          <tr><td><b>Sahîh li-zâtihî</b></td><td>Adil ve zabtı tam râvilerin muttasıl senedle, muallel ve şâz olmaksızın rivayeti</td></tr>
          <tr><td><b>Hasen li-zâtihî</b></td><td>Aynı şartlarla, ama zabtı biraz hafif râvilerle</td></tr>
          <tr><td><b>Sahîh li-gayrihî</b></td><td>Başka yollarla desteklenmiş hasen li-zâtihî</td></tr>
          <tr><td><b>Hasen li-gayrihî</b></td><td>Zayıflığı hafif olup başka yollarla desteklenen zayıf hadis</td></tr>
        </table>
        <h4>Sika râvinin ziyadesi, şâz ve münker</h4>
        <ul>
          <li><b>Ziyâdetü's-sika:</b> Güvenilir râvinin ilave ettiği bilgi, daha güvenilirlere aykırı değilse kabul edilir.</li>
          <li><b>Şâz:</b> Makbul râvinin, kendinden daha güvenilire aykırı rivayeti. Karşılığı <b>mahfûz</b>.</li>
          <li><b>Münker:</b> Zayıf râvinin, güvenilir râviye aykırı rivayeti. Karşılığı <b>ma'rûf</b>.</li>
        </ul>
        <h4>Destekleyen rivayetler</h4>
        <ul>
          <li><b>Mütâbi':</b> Aynı sahâbîden gelen, lafız veya mana olarak benzeyen başka bir yol.</li>
          <li><b>Şâhid:</b> Başka bir sahâbîden gelen benzer hadis.</li>
          <li><b>İ'tibâr:</b> Mütâbi' ve şâhid bulmak için yolları araştırmak.</li>
        </ul>
        <h4>Çelişen hadisler (muhtelifü'l-hadîs)</h4>
        <p>Sırasıyla: <b>cem'</b> (uzlaştırma) → <b>nesih</b> (tarih biliniyorsa) → <b>tercih</b> → <b>tevakkuf</b> (hüküm vermeden bekleme).</p>`,
      cards: [
        ["Makbul haberin dört derecesi", "Sahîh li-zâtihî, hasen li-zâtihî, sahîh li-gayrihî, hasen li-gayrihî"],
        ["Hasen ile sahihin farkı", "Hasende râvinin zabtı biraz hafiftir"],
        ["Sahîh li-gayrihî", "Başka yollarla desteklenmiş hasen li-zâtihî"],
        ["Şâz", "Makbul râvinin daha güvenilire aykırı rivayeti"],
        ["Münker", "Zayıf râvinin güvenilir râviye aykırı rivayeti"],
        ["Mütâbi'", "Aynı sahâbîden gelen destekleyici yol"],
        ["Şâhid", "Başka sahâbîden gelen destekleyici hadis"],
        ["Çelişen hadislerde sıra", "Cem', nesih, tercih, tevakkuf"]
      ]
    },
    {
      id: "sakt", title: "Merdûd Haber I: Senedde Düşme (Sakt)",
      body: `
        <p>Haber ya <b>senedden bir râvinin düşmesi</b> ya da <b>râvide bir kusur (ta'n)</b> sebebiyle merdûd olur. Önce düşmeyi görelim:</p>
        <table>
          <tr><th>Tür</th><th>Düşmenin yeri</th></tr>
          <tr><td><b>Muallak</b></td><td>Senedin başından (musannif tarafından) bir veya daha fazla râvi</td></tr>
          <tr><td><b>Mürsel</b></td><td>Senedin sonundan, tâbiîden sonra (sahâbî)</td></tr>
          <tr><td><b>Mu'dal</b></td><td>Arka arkaya iki veya daha fazla râvi</td></tr>
          <tr><td><b>Munkatı'</b></td><td>Arka arkaya olmayan bir veya birkaç yerde</td></tr>
        </table>
        <h4>Gizli düşme</h4>
        <ul>
          <li><b>Müdelles:</b> Râvinin, görüştüğü ama o hadisi duymadığı şeyhinden, duymuş gibi ihtimalli bir lafızla (${AR("عَنْ")}, ${AR("قَالَ")}) rivayet etmesi. <b>Tedlîs</b> denir.</li>
          <li><b>Mürsel-i hafî:</b> Çağdaşı olduğu hâlde görüşmediği birinden rivayet.</li>
        </ul>
        <p class="tip">Mürsel hadis muhaddislerin çoğunluğuna göre zayıftır; Hanefî ve Mâlikîler güvenilir râviden gelen mürseli delil kabul eder (Menâr dersine bak).</p>`,
      cards: [
        ["Muallak", "Senedin başından (musannif tarafından) râvi düşmesi"],
        ["Mürsel", "Tâbiîden sonra sahâbînin düşmesi"],
        ["Mu'dal", "Arka arkaya iki veya daha fazla râvinin düşmesi"],
        ["Munkatı'", "Arka arkaya olmayan yerlerde düşme"],
        ["Müdelles", "Duymadığını duymuş gibi ihtimalli lafızla rivayet"],
        ["Mürsel-i hafî", "Çağdaşı olduğu ama görüşmediği kişiden rivayet"],
        ["Mürselin hükmü (Hanefî)", "Güvenilir râviden gelirse delildir"]
      ]
    },
    {
      id: "tan", title: "Merdûd Haber II: Râvide Kusur (Ta'n)",
      body: `
        <p>Nuhbe, râvideki kusurları en ağırdan hafife doğru <b>on</b> sebepte toplar:</p>
        <table>
          <tr><th>#</th><th>Kusur</th><th>Ortaya çıkan hadis türü</th></tr>
          <tr><td>1</td><td><b>Kizb</b> (yalan)</td><td>Mevzû' (uydurma)</td></tr>
          <tr><td>2</td><td><b>Töhmet-i kizb</b> (yalanla itham)</td><td>Metrûk</td></tr>
          <tr><td>3</td><td><b>Fuhş-ı galat</b> (çok hata)</td><td>Münker (bir görüşe göre)</td></tr>
          <tr><td>4</td><td><b>Gaflet</b></td><td>Münker</td></tr>
          <tr><td>5</td><td><b>Fısk</b></td><td>Münker</td></tr>
          <tr><td>6</td><td><b>Vehm</b> (yanılma)</td><td>Muallel</td></tr>
          <tr><td>7</td><td><b>Muhâlefet-i sikât</b></td><td>Müdrec, maklûb, mezîd, muzdarib, musahhaf, muharref</td></tr>
          <tr><td>8</td><td><b>Cehâlet</b> (râvinin tanınmaması)</td><td>Mübhem, mechûl</td></tr>
          <tr><td>9</td><td><b>Bid'at</b></td><td>Bid'atine davet etmiyorsa ve bid'atini desteklemiyorsa rivayeti kabul edilebilir</td></tr>
          <tr><td>10</td><td><b>Sû-i hıfz</b> (kötü ezber)</td><td>Şâz veya muhtelit</td></tr>
        </table>
        <h4>Muhâlefetin türleri</h4>
        <ul>
          <li><b>Müdrec:</b> Hadise râvinin sözünün karıştırılması.</li>
          <li><b>Maklûb:</b> Senedde veya metinde kelimelerin yer değiştirmesi.</li>
          <li><b>Muzdarib:</b> Birbirine eşit güçte, uzlaştırılamayan farklı rivayetler.</li>
          <li><b>Musahhaf / muharref:</b> Noktada veya harekede değişiklik.</li>
        </ul>
        <p class="tip">Mevzû' hadisi, uydurma olduğunu belirtmeden rivayet etmek haramdır: ${AR("مَنْ كَذَبَ عَلَيَّ مُتَعَمِّدًا فَلْيَتَبَوَّأْ مَقْعَدَهُ مِنَ النَّارِ")} (Buhârî, Müslim).</p>`,
      cards: [
        ["Râvide kusur sebebi kaç tanedir? (Nuhbe)", "On"],
        ["Yalancı râvinin hadisi", "Mevzû'"],
        ["Yalanla itham edilen râvinin hadisi", "Metrûk"],
        ["Vehm sonucu ortaya çıkan hadis", "Muallel"],
        ["Müdrec", "Hadise râvinin sözünün karıştırılması"],
        ["Maklûb", "Senedde veya metinde yer değiştirme"],
        ["Muzdarib", "Eşit güçte, uzlaştırılamayan farklı rivayetler"],
        ["Mübhem", "Senedde adı verilmeyen râvi bulunan hadis"],
        ["Bid'atçi râvinin rivayeti", "Bid'atine davet etmiyorsa kabul edilebilir"],
        ["Mevzû' hadisi rivayet etmek", "Uydurma olduğunu belirtmeden haramdır"]
      ]
    },
    {
      id: "isnad", title: "Senedin Sonu ve İsnadın Yüksekliği",
      body: `
        <h4>Senedin kime ulaştığına göre</h4>
        <table>
          <tr><td><b>Merfû'</b></td><td>Hz. Peygamber'e ait söz, fiil veya takrir</td></tr>
          <tr><td><b>Mevkûf</b></td><td>Sahâbîye ait</td></tr>
          <tr><td><b>Maktû'</b></td><td>Tâbiîye veya sonrakilere ait</td></tr>
        </table>
        <ul>
          <li><b>Sahâbî:</b> Hz. Peygamber'le mümin olarak karşılaşan ve İslam üzere ölen kişi.</li>
          <li><b>Tâbiî:</b> Bir sahâbîyle karşılaşan kişi.</li>
          <li><b>Muhadram:</b> Câhiliye ve İslam dönemini yaşayıp Hz. Peygamber'i görmeyen.</li>
        </ul>
        <h4>Âlî ve nâzil isnad</h4>
        <p>Râvi sayısı az olan senede <b>âlî</b> (yüksek), çok olana <b>nâzil</b> denir. Âlî isnad, hata ihtimali az olduğu için tercih edilir.</p>
        <ul>
          <li><b>Muvâfakat:</b> Musannifin şeyhine, onun yolundan daha az vasıtayla ulaşmak.</li>
          <li><b>Bedel:</b> Musannifin şeyhinin şeyhine daha az vasıtayla ulaşmak.</li>
          <li><b>Müsâvât:</b> Râvi sayısının musannifinkine eşit olması.</li>
        </ul>
        <h4>Râviler arası ilişkiler</h4>
        <ul>
          <li><b>Rivâyetü'l-akrân:</b> Yaşça ve isnadca denk iki râvinin birbirinden rivayeti; karşılıklı olursa <b>müdebbec</b>.</li>
          <li><b>Rivâyetü'l-ekâbir ani'l-esâğir:</b> Büyüğün küçükten rivayeti (babanın oğuldan rivayeti gibi).</li>
          <li><b>Müselsel:</b> Bütün râvilerin aynı hâl veya sözü tekrar ettiği hadis.</li>
        </ul>`,
      cards: [
        ["Merfû'", "Hz. Peygamber'e ait"],
        ["Mevkûf", "Sahâbîye ait"],
        ["Maktû'", "Tâbiîye veya sonrakilere ait"],
        ["Sahâbî", "Hz. Peygamber'le mümin olarak karşılaşıp İslam üzere ölen"],
        ["Muhadram", "Câhiliye ve İslam'ı yaşayıp Hz. Peygamber'i görmeyen"],
        ["Âlî isnad", "Râvi sayısı az olan sened"],
        ["Müdebbec", "Denk iki râvinin karşılıklı birbirinden rivayeti"],
        ["Müselsel", "Bütün râvilerin aynı hâl veya sözü tekrar ettiği hadis"]
      ]
    },
    {
      id: "tahammul", title: "Tahammül ve Edâ; Cerh ve Ta'dîl",
      body: `
        <h4>Hadis alma (tahammül) yolları ve edâ lafızları</h4>
        <table>
          <tr><th>Yol</th><th>Tarif</th><th>Edâ lafzı</th></tr>
          <tr><td><b>Semâ'</b></td><td>Hocadan işitmek (en kuvvetlisi)</td><td lang="ar">سَمِعْتُ، حَدَّثَنِي / حَدَّثَنَا</td></tr>
          <tr><td><b>Kırâat (arz)</b></td><td>Talebenin hocaya okuması</td><td lang="ar">أَخْبَرَنِي / قَرَأْتُ عَلَيْهِ</td></tr>
          <tr><td><b>İcâzet</b></td><td>Hocanın rivayet izni vermesi</td><td lang="ar">أَنْبَأَنِي</td></tr>
          <tr><td><b>Münâvele</b></td><td>Hocanın kitabını izinle vermesi</td><td>—</td></tr>
          <tr><td><b>Mükâtebe</b></td><td>Hocanın yazıyla göndermesi</td><td lang="ar">كَتَبَ إِلَيَّ</td></tr>
          <tr><td><b>İ'lâm, vasiyet, vicâde</b></td><td>Bildirme, kitabını vasiyet etme, hocanın yazısını bulma</td><td lang="ar">وَجَدْتُ بِخَطِّ فُلَانٍ</td></tr>
        </table>
        <p>${AR("عَنْ")} ile yapılan rivayete <b>an'ane</b> denir; müdellis olmayan ve görüşmesi mümkün râvilerde ittisal kabul edilir.</p>
        <h4>Cerh ve ta'dîl</h4>
        <ul>
          <li><b>Ta'dîlin en yüksek dereceleri:</b> ${AR("أَوْثَقُ النَّاسِ")} (insanların en güvenilir olanı), sonra tekrarlı vasıflar (${AR("ثِقَةٌ ثِقَةٌ")}, ${AR("ثِقَةٌ حَافِظٌ")}), sonra ${AR("ثِقَةٌ")}, sonra ${AR("صَدُوقٌ")}.</li>
          <li><b>Cerhin en ağır dereceleri:</b> ${AR("أَكْذَبُ النَّاسِ")}, sonra ${AR("كَذَّابٌ، وَضَّاعٌ")}; en hafifi ${AR("لَيِّنٌ")}, ${AR("سَيِّئُ الْحِفْظِ")}.</li>
          <li>Cerh ile ta'dîl çatışırsa, sebebi açıklanmış (<b>müfesser</b>) cerh, cerheden ehil biriyse ta'dîle tercih edilir.</li>
          <li>Cerh ve ta'dîl âdil ve bilgili, mutaassıp olmayan kimseden kabul edilir.</li>
        </ul>`,
      cards: [
        ["En kuvvetli tahammül yolu", "Semâ' (hocadan işitmek)"],
        ["Kırâat (arz)", "Talebenin hocaya okuması"],
        ["Semâ'ın edâ lafızları", "سَمِعْتُ، حَدَّثَنِي، حَدَّثَنَا"],
        ["Kırâatin edâ lafzı", "أَخْبَرَنِي"],
        ["İcâzetin edâ lafzı", "أَنْبَأَنِي"],
        ["An'ane", "عَنْ lafzıyla rivayet"],
        ["Vicâde", "Hocanın yazısını bulup rivayet etmek"],
        ["En yüksek ta'dîl lafzı", "أَوْثَقُ النَّاسِ"],
        ["En ağır cerh lafzı", "أَكْذَبُ النَّاسِ"],
        ["Cerh ile ta'dîl çatışırsa", "Ehil kişiden gelen müfesser cerh tercih edilir"]
      ]
    }
  );
})();
