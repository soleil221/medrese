// Fıkıh — Nûru'l-Îzâh sırasıyla Hanefî ibadet fıkhı.
// Hükümler Hanefî mezhebinin müftâ bih görüşlerine göre özetlenmiştir; ayrıntı ve özel durumlar için hocaya ve muteber ilmihallere başvurulmalıdır.
(function () {
  const AR = (s) => `<span lang="ar">${s}</span>`;
  const D = window.DERSLER;

  D["k-fikih1"] = [
    {
      id: "sular", title: "Kitâbü't-Tahâre: Sular ve Necâset",
      body: `
        <p>Nûru'l-Îzâh, Kitâbü't-Tahâre ile başlar. İbadetin anahtarı namaz, namazın anahtarı temizliktir.</p>
        <h4>Suların kısımları</h4>
        <table>
          <tr><th>Su</th><th>Hükmü</th></tr>
          <tr><td><b>Mutlak su</b> (yağmur, deniz, nehir, kuyu, kar suyu)</td><td>Hem temiz hem temizleyici</td></tr>
          <tr><td><b>Mekruh su</b> (kedinin artığı gibi)</td><td>Başka su yoksa kullanılır, kerahetle</td></tr>
          <tr><td><b>Müsta'mel su</b> (abdest veya gusülde kullanılmış)</td><td>Temiz ama temizleyici değil</td></tr>
          <tr><td><b>Necis su</b> (pislik düşmüş durgun az su)</td><td>Temiz de değil, temizleyici de değil</td></tr>
          <tr><td><b>Şüpheli su</b> (eşek ve katırın artığı)</td><td>Başka su yoksa abdest alınır, ayrıca teyemmüm edilir</td></tr>
        </table>
        <p><b>Çok su:</b> Hanefîlere göre bir tarafı oynatıldığında diğer tarafı oynamayacak kadar geniş su (yaygın ölçü 10×10 arşın). Rengi, tadı veya kokusu değişmedikçe necasetle kirlenmez.</p>
        <h4>Necâset</h4>
        <ul>
          <li><b>Necâset-i galîza (ağır):</b> İnsan idrarı ve dışkısı, kan, şarap, eti yenmeyen hayvanların idrarı vb. Bir dirhemden (avuç içi genişliği) fazlası namaza mânidir.</li>
          <li><b>Necâset-i hafîfe (hafif):</b> Eti yenen hayvanların idrarı vb. Bulaştığı uzvun dörtte birinden azı affedilir.</li>
        </ul>
        <h4>İstincâ</h4>
        <p>Önden veya arkadan çıkan pisliği su veya taş gibi temizleyici bir şeyle gidermektir; sünnettir. Pislik çıkış yerini bir dirhemden fazla aşarsa yıkamak farz olur.</p>`,
      cards: [
        ["Mutlak suyun hükmü", "Temiz ve temizleyici"],
        ["Müsta'mel suyun hükmü", "Temiz ama temizleyici değil"],
        ["Eşek ve katırın artığı", "Şüpheli su; abdest alınır, ayrıca teyemmüm edilir"],
        ["Necâset-i galîzada affedilen miktar", "Bir dirhem (avuç içi genişliği)"],
        ["Necâset-i hafîfede affedilen miktar", "Bulaştığı uzvun dörtte birinden azı"],
        ["Eti yenen hayvanın idrarı", "Necâset-i hafîfe"],
        ["İstincânın hükmü", "Sünnet (pislik bir dirhemi aşarsa yıkamak farz)"],
        ["Çok su ne zaman necis olur?", "Necasetle rengi, tadı veya kokusu değişirse"]
      ]
    },
    {
      id: "abdest", title: "Abdest ve Mestler Üzerine Mesh",
      body: `
        <h4>Abdestin farzları (4)</h4>
        <p>Mâide 6. âyete dayanır: yüzü yıkamak, kolları dirseklerle yıkamak, başın dörtte birini meshetmek, ayakları topuklarla yıkamak.</p>
        <h4>Abdestin başlıca sünnetleri</h4>
        <ul>
          <li>Niyet, besmele, elleri bileklere kadar yıkamak, misvak kullanmak</li>
          <li>Ağza ve burna su vermek (mazmaza, istinşâk), sık sakalı hilallemek, parmak aralarını hilallemek</li>
          <li>Uzuvları üçer kez yıkamak, başın tamamını bir kez meshetmek, kulakları meshetmek</li>
          <li><b>Tertîb</b> (âyetteki sıraya uymak) ve <b>muvâlât</b> (ara vermeden peş peşe yıkamak)</li>
        </ul>
        <h4>Abdesti bozanlar</h4>
        <ul>
          <li>Önden veya arkadan bir şey çıkması</li>
          <li>Kan, irin gibi şeylerin çıkıp yayılması; ağız dolusu kusmak</li>
          <li>Yaslanarak veya bir şeye dayanarak uyumak; bayılmak, sarhoşluk, delilik</li>
          <li>Rükûlu ve secdeli namazda, ergenin kahkahayla gülmesi</li>
        </ul>
        <h4>Mestler üzerine mesh</h4>
        <ul>
          <li>Mestler <b>abdestli olarak</b> giyilmiş olmalı ve topukları örtmeli.</li>
          <li>Süre: Mukîm için <b>bir gün bir gece</b>, misafir için <b>üç gün üç gece</b>. Süre, giydikten sonra abdestin bozulduğu andan başlar.</li>
          <li>Farz miktar: Her ayağın üstünden, el parmaklarının en küçüğü ile <b>üç parmak</b> miktarı meshetmek.</li>
          <li>Bozan şeyler: Abdesti bozan her şey, mesti çıkarmak, sürenin dolması, ayağın çoğunun ıslanması.</li>
        </ul>`,
      cards: [
        ["Abdestin farzlarının dayandığı âyet", "Mâide 6"],
        ["Tertîb", "Abdest uzuvlarını âyetteki sırayla yıkamak (sünnet)"],
        ["Muvâlât", "Uzuvları ara vermeden peş peşe yıkamak (sünnet)"],
        ["Mesh süresi (mukîm)", "Bir gün bir gece"],
        ["Mesh süresi (misafir)", "Üç gün üç gece"],
        ["Mesh süresi ne zaman başlar?", "Mesti giydikten sonra abdestin bozulduğu andan"],
        ["Mestte farz olan mesh miktarı", "Her ayağın üstünden üç parmak miktarı"],
        ["Mesti bozanlar", "Abdesti bozanlar, mesti çıkarmak, sürenin dolması"]
      ]
    },
    {
      id: "gusul-teyemmum", title: "Gusül, Teyemmüm, Hayız ve Nifas",
      body: `
        <h4>Gusül</h4>
        <p><b>Farzları (3):</b> Ağza su vermek, burna su vermek, bütün bedeni yıkamak.</p>
        <p><b>Gerektiren hâller:</b> Cünüplük (cinsel ilişki veya şehvetle meninin gelmesi), hayzın ve nifasın sona ermesi.</p>
        <p><b>Sünnet olduğu vakitler:</b> Cuma ve bayram namazları, ihrama girmek, Arafat vakfesi.</p>
        <h4>Teyemmüm</h4>
        <p><b>Farzları:</b> Niyet; temiz toprak cinsinden bir şeye iki kez vurup birinde yüzü, diğerinde dirseklerle birlikte kolları meshetmek.</p>
        <p><b>Caiz olduğu durumlar:</b></p>
        <ul>
          <li>Yaklaşık bir mil (≈ 1,8 km) uzaklıkta su bulunmaması</li>
          <li>Su kullanmanın hastalığı artıracağından veya iyileşmeyi geciktireceğinden korkmak</li>
          <li>Suyu kullanmaya engel olan düşman, yırtıcı hayvan veya susuzluk korkusu</li>
          <li>Suyu çıkaracak alet bulunmaması</li>
        </ul>
        <p>Teyemmümü, abdesti bozan şeyler ve teyemmüme izin veren özrün kalkması (suyun bulunması gibi) bozar.</p>
        <h4>Hayız ve nifas</h4>
        <ul>
          <li><b>Hayız:</b> En azı <b>3 gün</b>, en çoğu <b>10 gün</b>. İki hayız arasındaki temizlik en az 15 gündür.</li>
          <li><b>Nifas:</b> Doğumdan sonraki kanama; en azının sınırı yoktur, en çoğu <b>40 gün</b>.</li>
          <li>Bu hâllerde namaz kılınmaz ve kazası gerekmez; oruç tutulmaz ama sonra kaza edilir.</li>
        </ul>`,
      cards: [
        ["Guslün farzları", "Ağza su, burna su, bütün bedeni yıkamak"],
        ["Guslü gerektiren hâller", "Cünüplük, hayzın ve nifasın sona ermesi"],
        ["Teyemmümün farzları", "Niyet ve iki darb (yüz ve kollar)"],
        ["Teyemmüm için suyun uzaklığı", "Yaklaşık bir mil"],
        ["Hayzın en az ve en çok süresi", "En az 3, en çok 10 gün"],
        ["Nifasın en çok süresi", "40 gün"],
        ["İki hayız arasındaki en az temizlik süresi", "15 gün"],
        ["Hayızlı kadın namazı kaza eder mi?", "Hayır; orucu kaza eder"]
      ]
    },
    {
      id: "namaz-vakit", title: "Kitâbü's-Salât: Vakitler, Ezan, Farzlar ve Vacipler",
      body: `
        <h4>Namaz vakitleri</h4>
        <table>
          <tr><td><b>Sabah</b></td><td>Fecr-i sâdıktan güneşin doğuşuna kadar</td></tr>
          <tr><td><b>Öğle</b></td><td>Zevâlden, gölgenin (zevâl gölgesi hariç) iki misli olmasına kadar (İmam-ı Âzam'a göre)</td></tr>
          <tr><td><b>İkindi</b></td><td>Öğlenin bitiminden güneşin batışına kadar</td></tr>
          <tr><td><b>Akşam</b></td><td>Güneşin batışından şafağın kaybolmasına kadar</td></tr>
          <tr><td><b>Yatsı ve vitir</b></td><td>Şafağın kaybolmasından fecr-i sâdıka kadar</td></tr>
        </table>
        <p><b>Kerahet vakitleri (3):</b> Güneş doğarken, tam tepedeyken (istivâ) ve batarken. Bu vakitlerde namaz kılınmaz; yalnız o günün ikindisi batış sırasında kerahetle kılınabilir.</p>
        <h4>Ezan ve kamet</h4>
        <p>Beş vakit farz namaz ve cuma için erkeklere <b>sünnet-i müekkede</b>dir.</p>
        <h4>Namazın farzları (12)</h4>
        <p>Dışındakiler: hadesten taharet, necasetten taharet, setr-i avret, istikbâl-i kıble, vakit, niyet. İçindekiler: iftitah tekbiri, kıyâm, kırâat, rükû, sücûd, ka'de-i ahîre.</p>
        <h4>Namazın başlıca vacipleri</h4>
        <ul>
          <li>Fâtiha okumak; farzların ilk iki rekâtında, vitir ve nafilelerin her rekâtında Fâtiha'ya bir sûre veya üç kısa âyet eklemek (zamm-ı sûre)</li>
          <li>Fâtiha'yı sûreden önce okumak</li>
          <li><b>Ta'dîl-i erkân:</b> Rükû ve secdelerde, aralarındaki doğruluşlarda bir tesbih miktarı durmak</li>
          <li>Üç ve dört rekâtlı namazlarda <b>ilk oturuş</b>, oturuşlarda <b>teşehhüd</b> okumak</li>
          <li>Namazı <b>selâm</b> lafzıyla bitirmek</li>
          <li>Vitirde kunut okumak; bayram namazlarında zâid tekbirler</li>
          <li>İmamın sesli kılınan namazlarda (sabah, akşam ve yatsının ilk iki rekâtı, cuma, bayram) sesli, diğerlerinde gizli okuması</li>
        </ul>
        <p class="tip">Farzlardan biri terk edilirse namaz bâtıl olur. Vacip yanılarak terk edilirse sehiv secdesi gerekir; kasten terk edilirse namaz iade edilir.</p>`,
      cards: [
        ["Kerahet vakitleri", "Güneş doğarken, tam tepedeyken, batarken"],
        ["Öğle vaktinin sonu (İmam-ı Âzam)", "Gölgenin iki misli olması"],
        ["Yatsının vakti", "Şafağın kaybolmasından fecr-i sâdıka kadar"],
        ["Ezan ve kametin hükmü", "Erkekler için sünnet-i müekkede"],
        ["Zamm-ı sûre", "Fâtiha'ya bir sûre veya üç kısa âyet eklemek (vacip)"],
        ["Ta'dîl-i erkân", "Rükû ve secdelerde bir tesbih miktarı durmak (vacip)"],
        ["Namazdan selâm ile çıkmanın hükmü", "Vacip"],
        ["Vitirde kunutun hükmü", "Vacip"],
        ["Vacip yanılarak terk edilirse", "Sehiv secdesi gerekir"],
        ["Farz terk edilirse", "Namaz bâtıl olur"]
      ]
    },
    {
      id: "namaz-sunnet", title: "Namazın Sünnetleri, Bozanlar, Mekruhlar ve Sehiv Secdesi",
      body: `
        <h4>Namazın başlıca sünnetleri</h4>
        <ul>
          <li>İftitah tekbirinde elleri kaldırmak (erkekler kulak hizasına)</li>
          <li><b>Sübhâneke</b>, <b>eûzü</b> ve <b>besmele</b>yi okumak</li>
          <li>Fâtiha'dan sonra gizlice “âmîn” demek</li>
          <li>Rükûda ve secdede üçer kez tesbih; rükûdan kalkarken “semiallâhu limen hamideh”, “rabbenâ leke'l-hamd”</li>
          <li>Son oturuşta teşehhüdden sonra salavât ve duâ okumak</li>
          <li>Selâmda başı önce sağa, sonra sola çevirmek</li>
        </ul>
        <h4>Namazı bozanlar</h4>
        <ul>
          <li>Az veya çok konuşmak; selâm vermek veya almak</li>
          <li>Yemek ve içmek</li>
          <li><b>Amel-i kesîr:</b> Uzaktan bakan namazda olmadığını sanacağı kadar fazla hareket</li>
          <li>Göğsü kıbleden çevirmek</li>
          <li>Kahkaha ile gülmek (abdesti de bozar); dünya işi için ağlayıp inlemek</li>
          <li>Kur'an'ı manayı bozacak şekilde yanlış okumak</li>
          <li>Namazın bir farzını terk etmek; avretin bir rükün miktarı açık kalması</li>
        </ul>
        <h4>Namazın başlıca mekruhları</h4>
        <ul>
          <li>Elbise veya bedenle oynamak, parmakları çıtlatmak</li>
          <li>Gözleri yummak, etrafa bakınmak, esnemek</li>
          <li>Sıkışık olarak (def-i hâcet ihtiyacıyla) namaz kılmak</li>
          <li>Yemek hazırken ve iştah varken namaza durmak</li>
        </ul>
        <h4>Sehiv secdesi</h4>
        <p><b>Sebebi:</b> Bir vacibin yanılarak terk veya tehiri, ya da bir farzın tehiri.</p>
        <p><b>Yapılışı:</b> Son oturuşta yalnız teşehhüd okunur, sağa selâm verilir, iki secde yapılır; tekrar oturup teşehhüd, salavât ve duâlar okunur ve selâm verilir.</p>`,
      cards: [
        ["Amel-i kesîr", "Uzaktan bakanın namazda olmadığını sanacağı kadar hareket"],
        ["Namazda selâm almak", "Namazı bozar"],
        ["Namazda kahkaha", "Hem namazı hem abdesti bozar"],
        ["Sehiv secdesinin sebebi", "Vacibin yanılarak terki/tehiri veya farzın tehiri"],
        ["Sehiv secdesi nasıl yapılır?", "Son oturuşta teşehhüd, sağa selâm, iki secde, tekrar oturuş ve selâm"],
        ["Rükû ve secdedeki tesbihin hükmü", "Sünnet"],
        ["Sübhâneke okumanın hükmü", "Sünnet"],
        ["Göğsü kıbleden çevirmek", "Namazı bozar"]
      ]
    },
    {
      id: "cuma-cenaze", title: "Cuma, Bayram, Seferîlik ve Cenaze",
      body: `
        <h4>Cuma namazı</h4>
        <p><b>Kimlere farz:</b> Erkek, hür, akıllı, ergen, mukîm, sağlıklı ve gitmeye engeli olmayan Müslümanlara.</p>
        <p><b>Sahih olmasının şartları:</b> Şehir (veya hükmünde yer), öğle vakti, vakit içinde ve namazdan önce hutbe, cemaat (imamdan başka en az üç kişi), izn-i âmm (herkese açık olması).</p>
        <p>Cuma iki rekât farzdır; ilk ve son sünnetleriyle kılınır.</p>
        <h4>Bayram namazları</h4>
        <p>Hanefîlere göre cuma namazı kendilerine farz olanlara <b>vacip</b>tir. İki rekâttır; her rekâtta üçer <b>zâid tekbir</b> alınır. Hutbe namazdan <b>sonra</b> okunur.</p>
        <h4>Seferîlik</h4>
        <ul>
          <li>Mesafe: Yaklaşık <b>90 km</b> (üç günlük yol).</li>
          <li>Seferî, dört rekâtlı farzları <b>iki rekât</b> kılar (Hanefîlere göre vaciptir).</li>
          <li>Bir yerde <b>15 gün</b> veya daha fazla kalmaya niyet eden mukîm olur.</li>
          <li>Hanefîlerde namazları cem etmek yalnız hacda (Arafat ve Müzdelife'de) caizdir.</li>
        </ul>
        <h4>Cenaze namazı</h4>
        <p><b>Farz-ı kifâye</b>dir. Rükû ve secdesi yoktur; ayakta <b>dört tekbir</b> ile kılınır:</p>
        <ol>
          <li>Birinci tekbirden sonra Sübhâneke</li>
          <li>İkinci tekbirden sonra salavât</li>
          <li>Üçüncü tekbirden sonra cenaze duâsı</li>
          <li>Dördüncü tekbirden sonra selâm</li>
        </ol>
        <p>Rükünleri: dört tekbir ve kıyâm.</p>`,
      cards: [
        ["Cumanın sahih olması için cemaat", "İmamdan başka en az üç kişi"],
        ["Cuma hutbesinin zamanı", "Vakit içinde, namazdan önce"],
        ["Bayram namazının hükmü (Hanefî)", "Vacip"],
        ["Bayram namazında zâid tekbir sayısı", "Her rekâtta üçer"],
        ["Bayram hutbesinin zamanı", "Namazdan sonra"],
        ["Seferîlik mesafesi", "Yaklaşık 90 km (üç günlük yol)"],
        ["Mukîm olmak için kalma niyeti", "15 gün veya daha fazla"],
        ["Cenaze namazının hükmü", "Farz-ı kifâye"],
        ["Cenaze namazının rükünleri", "Dört tekbir ve kıyâm"],
        ["Cenaze namazında üçüncü tekbirden sonra", "Cenaze duâsı"]
      ]
    },
    {
      id: "oruc", title: "Kitâbü's-Savm: Oruç",
      body: `
        <p><b>Oruç</b>, niyet ederek tan yerinin ağarmasından (fecr-i sâdık) güneşin batışına kadar yemekten, içmekten ve cinsel ilişkiden uzak durmaktır.</p>
        <h4>Niyet</h4>
        <p>Ramazan, belirli adak ve nafile oruçlarda niyet geceden <b>dahve-i kübrâ</b>ya (gündüzün yarısına) kadar yapılabilir. Kaza, keffâret ve belirsiz adak oruçlarında geceden niyet şarttır.</p>
        <h4>Hem kaza hem keffâret gerektirenler</h4>
        <p>Ramazan orucunu, özürsüz ve kasten <b>yemek, içmek veya cinsel ilişki</b> ile bozmak. <b>Keffâret:</b> Köle azadı (günümüzde mümkün değil), bu olmazsa <b>60 gün peş peşe</b> oruç, buna da gücü yetmeyen 60 fakiri doyurur.</p>
        <h4>Yalnız kaza gerektirenler (bazıları)</h4>
        <ul>
          <li>Abdest alırken yanlışlıkla boğaza su kaçması</li>
          <li>Taş, toprak gibi gıda olmayan bir şeyi yutmak</li>
          <li>Kasten ağız dolusu kusmak</li>
          <li>Unutarak yedikten sonra orucun bozulduğunu sanıp kasten yemek</li>
          <li>Vakit girmediğini sanarak sahur yemek veya güneş battı sanarak iftar etmek</li>
        </ul>
        <h4>Orucu bozmayanlar</h4>
        <p>Unutarak yemek-içmek, ihtilâm olmak, kendiliğinden kusmak, göze ilaç damlatmak veya sürme çekmek, misvak kullanmak, yıkanmak.</p>
        <h4>Oruç tutmamayı mubah kılan özürler</h4>
        <p>Yolculuk, hastalık, hamilelik ve emzirme (kendisine veya çocuğa zarar korkusu), ihtiyarlık. İhtiyarlık dışındakiler sonra kaza eder; tutamayacak yaşlı her gün için <b>fidye</b> verir.</p>`,
      cards: [
        ["Orucun tarifi", "Niyetle fecr-i sâdıktan güneş batışına kadar yemek, içmek ve cinsel ilişkiden uzak durmak"],
        ["Ramazan orucuna niyetin son vakti", "Dahve-i kübrâ (gündüzün yarısı)"],
        ["Geceden niyet şart olan oruçlar", "Kaza, keffâret ve belirsiz adak oruçları"],
        ["Keffâret gerektiren durum", "Ramazan orucunu özürsüz, kasten yemek, içmek veya cinsel ilişkiyle bozmak"],
        ["Oruç keffâreti", "60 gün peş peşe oruç (gücü yetmeyen 60 fakiri doyurur)"],
        ["Unutarak yemek orucu bozar mı?", "Hayır"],
        ["Kasten ağız dolusu kusmak", "Yalnız kaza gerektirir"],
        ["Abdestte boğaza su kaçması", "Yalnız kaza gerektirir"],
        ["Oruç tutamayan yaşlı ne yapar?", "Her gün için fidye verir"]
      ]
    },
    {
      id: "zekat", title: "Kitâbü'z-Zekât: Zekât",
      body: `
        <h4>Zekâtın farz olmasının şartları</h4>
        <ul>
          <li>Müslüman, akıllı, ergen ve hür olmak (akıl ve ergenlik Hanefîlere göre şarttır)</li>
          <li><b>Nisâb</b> miktarı mala sahip olmak</li>
          <li>Malın aslî ihtiyaçlardan ve borçtan fazla olması</li>
          <li>Malın <b>nâmî</b> (artıcı) olması: para, ticaret malı, otlak hayvanları</li>
          <li>Üzerinden <b>bir kamerî yıl</b> (havl) geçmesi</li>
        </ul>
        <h4>Nisâb ve oran</h4>
        <ul>
          <li><b>Altın:</b> 20 miskal (Diyanet'in esas aldığı ölçü 80,18 gram)</li>
          <li><b>Gümüş:</b> 200 dirhem</li>
          <li><b>Para ve ticaret malları:</b> Altın veya gümüş nisâbının değeri</li>
          <li><b>Oran:</b> Kırkta bir (%2,5)</li>
        </ul>
        <h4>Zekâtın verileceği yerler (Tevbe 60)</h4>
        <ol>
          <li>Fakirler</li><li>Miskinler (hiçbir şeyi olmayanlar)</li><li>Zekât toplayan memurlar</li><li>Kalpleri İslam'a ısındırılacaklar (müellefe-i kulûb)</li>
          <li>Köleler (hürriyetleri için)</li><li>Borçlular</li><li>Allah yolunda olanlar</li><li>Yolda kalmışlar (ibnü's-sebîl)</li>
        </ol>
        <h4>Zekât verilemeyenler</h4>
        <p>Usûl (anne, baba, dedeler) ve fürû' (çocuklar, torunlar), eş, nisâb miktarı mala sahip zengin, gayrimüslim ve Hâşimoğulları.</p>
        <h4>Sadaka-i fıtır</h4>
        <p>Ramazan bayramına yetişen ve aslî ihtiyaçlarından fazla nisâb miktarı malı olan Müslümana <b>vacip</b>tir. Kendisi ve küçük çocukları için verir.</p>`,
      cards: [
        ["Zekât nisâbı (altın)", "20 miskal (≈ 80,18 gr)"],
        ["Zekât nisâbı (gümüş)", "200 dirhem"],
        ["Zekât oranı", "Kırkta bir (%2,5)"],
        ["Havl", "Malın üzerinden bir kamerî yılın geçmesi"],
        ["Nâmî mal", "Artıcı mal (para, ticaret malı, otlak hayvanı)"],
        ["Zekâtın verileceği sınıflar kaç tane?", "Sekiz (Tevbe 60)"],
        ["Anne-babaya zekât verilir mi?", "Hayır (usûle ve fürû'a verilmez)"],
        ["Sadaka-i fıtrın hükmü", "Vacip"],
        ["Hanefîlere göre çocuğun malına zekât düşer mi?", "Hayır (ergenlik şarttır)"]
      ]
    },
    {
      id: "hac", title: "Kitâbü'l-Hac: Hac ve Umre",
      body: `
        <p>Hac, gücü yeten Müslümana ömründe bir kez <b>farz</b>dır.</p>
        <h4>Haccın farzları</h4>
        <ul>
          <li><b>İhram</b> (şartı)</li>
          <li><b>Arafat vakfesi</b>: Arefe günü zevâlden bayramın ilk günü fecre kadar Arafat'ta bir an bulunmak (rüknü)</li>
          <li><b>Ziyaret (ifâda) tavafı</b>: Kurban bayramı günlerinde (rüknü)</li>
        </ul>
        <h4>Haccın başlıca vacipleri</h4>
        <ul>
          <li>Müzdelife vakfesi</li>
          <li>Safâ ile Merve arasında <b>sa'y</b></li>
          <li>Şeytan taşlamak (remy-i cimâr)</li>
          <li>Tıraş olmak veya saçları kısaltmak</li>
          <li>Âfâkîler (Mîkāt dışından gelenler) için <b>veda tavafı</b></li>
          <li>Kırân ve temettu' haccı yapanlar için kurban kesmek</li>
        </ul>
        <h4>Haccın çeşitleri</h4>
        <ul>
          <li><b>İfrâd:</b> Yalnız hacca niyet edilir.</li>
          <li><b>Temettu':</b> Hac aylarında önce umre yapılıp ihramdan çıkılır, sonra hac için ayrıca ihrama girilir.</li>
          <li><b>Kırân:</b> Hac ve umre için birlikte ihrama girilir.</li>
        </ul>
        <h4>Umre</h4>
        <p>Hanefîlere göre <b>sünnet-i müekkede</b>dir. Farzları: ihram ve tavaf. Vacipleri: sa'y ve tıraş.</p>`,
      cards: [
        ["Haccın farzları", "İhram, Arafat vakfesi, ziyaret tavafı"],
        ["Haccın en önemli rüknü", "Arafat vakfesi"],
        ["Arafat vakfesinin vakti", "Arefe günü zevâlden bayramın ilk günü fecre kadar"],
        ["Sa'yin hükmü", "Vacip"],
        ["Veda tavafı kimlere vaciptir?", "Âfâkîlere (Mîkāt dışından gelenler)"],
        ["Temettu' haccı", "Önce umre yapıp ihramdan çıkmak, sonra hac için ihrama girmek"],
        ["Kırân haccı", "Hac ve umreye birlikte niyet edip ihrama girmek"],
        ["Umrenin hükmü (Hanefî)", "Sünnet-i müekkede"],
        ["Umrenin farzları", "İhram ve tavaf"]
      ]
    }
  ];

  // Ders kartındaki ana metinlere Nûru'l-Îzâh bab sırasını not olarak ekle
  const k = window.KLASIK.find((c) => c.id === "k-fikih1");
  if (k) k.summary += " Dersler Nûru'l-Îzâh'ın bab sırasını takip eder.";
})();
