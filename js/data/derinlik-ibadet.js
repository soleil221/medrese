// Meselelerde derinleşme: delillerin tartışması, tarihî seyir, muhakkiklerin tercihleri, usul düğümleri, sorular.
// munakasa: { taraf, delil, itiraz, cevap }  ·  seyir: [dönem, metin]  ·  tercih: { alim, metin }  ·  usul: ref listesi
window.DERINLIK = window.DERINLIK || {};
Object.assign(window.DERINLIK, {
  cem: {
    munakasa: [
      { taraf: "Cumhur", delil: "İbn Ömer, Hz. Peygamber'in acele bir yolculukta akşamla yatsıyı birleştirdiğini anlatır (Buhârî, Müslim). Muâz b. Cebel de Tebük seferinde öğle ile ikindinin hem takdim hem te'hîr yoluyla birleştirildiğini nakleder (Ebû Dâvûd, Tirmizî).",
        itiraz: "Hanefîler bunların “görünüşte cem” (cem-i sûrî) olduğunu söyler: Öğle vaktinin sonunda öğle, ikindinin başında ikindi kılınmıştır. İbn Ömer'in bazı rivayetlerinde de “şafak kaybolmadan önce indi” kaydı vardır.",
        cevap: "Enes'in rivayeti açıktır: “Güneş kaymadan yola çıkarsa öğleyi ikindi vaktine kadar geciktirir, sonra inip ikisini birlikte kılardı” (Buhârî, Müslim). Ayrıca görünüşte cem, iki vaktin sınırını dakikasıyla gözetmeyi gerektirir. Bu, yolcu için kolaylık değil ek bir zorluktur ve ruhsatın amacına ters düşer." },
      { taraf: "Hanefî", delil: "“Namaz, müminlere belirli vakitlerde farz kılınmıştır” (Nisâ 103). İbn Mes'ûd şöyle der: “Hz. Peygamber'in iki namaz dışında bir namazı vaktinin dışında kıldığını görmedim: Müzdelife'de akşamla yatsıyı birleştirdi ve o günün sabah namazını vaktinden önce kıldı” (Buhârî, Müslim).",
        itiraz: "Cumhur, “görmedim” ifadesinin bir olumsuzlama (nefy) olduğunu, başkalarının gördüğünü bildiren olumlu habere (isbât) karşı tercih edilemeyeceğini söyler: Gören, görmeyene karşı delildir.",
        cevap: "Hanefîler, İbn Mes'ûd'un Hz. Peygamber'e en yakın sahabilerden biri olduğunu ve yolculuklarında yanında bulunduğunu hatırlatır. Bu, bilgiye dayalı bir olumsuzlamadır. Vakitler mütevâtir uygulamayla sabittir; âhâd haberle bu kesinlik değiştirilemez." },
      { taraf: "Hanbelî ve ihtiyaçla cemi kabul edenler", delil: "İbn Abbâs: “Hz. Peygamber Medine'de korku ve yağmur olmaksızın öğle ile ikindiyi, akşam ile yatsıyı birleştirdi.” Neden böyle yaptığı sorulunca: “Ümmetini sıkıntıya sokmamak istedi” (Müslim).",
        itiraz: "Tirmizî, kitabındaki bütün hadislerle âlimlerin amel ettiğini, yalnız iki hadis hariç tuttuğunu söyler; bunlardan biri bu hadistir. Hanefîler hadisi görünüşte cem olarak, Şâfiîler ise yağmur veya hastalık hâline yorumlar.",
        cevap: "Hadisteki gerekçe (“ümmetini sıkıntıya sokmamak”) bir illet bildirir; bu illet ihtiyaç hâlinde tekrar bulunabilir. Nevevî, İbn Sîrîn, Mâlikîlerden Eşheb, Şâfiîlerden Kaffâl ve İbnü'l-Münzir'in, âdet edinilmemek şartıyla ihtiyaç hâlinde cemi caiz gördüğünü nakleder." }
    ],
    seyir: [
      ["Sahabe", "İbn Ömer ve Enes yolculukta cem eder; İbn Mes'ûd ise Müzdelife dışında cem bilmediğini söyler. Medine ve Kûfe geleneklerinin farkı burada belirir."],
      ["Mezhepler", "Hanefîler cemi hacla sınırlar. Mâlikî, Şâfiî ve Hanbelîler yolculukta kabul eder; Hanbelîler hastalık ve ihtiyaç hâllerini de ekleyerek en geniş görüşü benimser."],
      ["Osmanlı", "Hanefî mezhebi esas alındığından cem uygulaması hac dışında yaygınlaşmadı. Ancak Şâfiî bölgelerde (Doğu ve Güneydoğu Anadolu'nun bir kısmı gibi) yolculukta cem yaşayan bir uygulama olarak devam etti."],
      ["Bugün", "Kuzey enlemlerinde yaz aylarında yatsı vaktinin çok geç girdiği veya şafağın hiç kaybolmadığı bölgeler, uzun yolculuklar ve yoğun iş hayatı meseleyi yeniden gündeme getirdi. Avrupa'daki bazı fetva kurulları bu bölgelerde, ihtiyaç hâlinde cemi caiz görmüştür."]
    ],
    tercih: [
      { alim: "nevevi", metin: "Şerhu Müslim'de İbn Abbâs hadisinin yorumlarını tek tek tartışır ve hadisi “görünüşte cem” olarak yorumlamayı zayıf bulur. İhtiyaç hâlinde cemi caiz gören görüşü, hadisin gerekçesiyle uyumlu olduğu için güçlü sayar." },
      { alim: "ibnteymiyye", metin: "Kısaltmanın sebebinin yolculuk, birleştirmenin sebebinin ise ihtiyaç ve zorluk olduğunu söyler. Bu yüzden ona göre mukim de ihtiyaç hâlinde cem edebilir, yolcu da ihtiyaç yoksa cem etmeyebilir." },
      { alim: "kasani", metin: "Bedâi'de Hanefî görüşü vakitlerin kesinliği ilkesiyle savunur ve cem hadislerini görünüşte cem olarak yorumlamanın, âyet ile hadisleri birlikte uygulamanın tek yolu olduğunu söyler." }
    ],
    usul: ["kavram:mutevatir", "kavram:ruhsat", "kavram:amm"],
    sorular: ["“Görmedim” diyen büyük bir sahabinin olumsuzlaması ile “gördüm” diyen başka bir sahabinin haberi çatıştığında hangisini öne alırdın? Neden?", "İbn Abbâs hadisindeki gerekçe bir illet midir, yoksa bir hikmet mi? Bu ayrım hükmü nasıl değiştirir?", "Yaz aylarında yatsının gece yarısından sonra girdiği bir yerde yaşasaydın hangi görüşle amel ederdin ve bunu nasıl gerekçelendirirdin?"]
  },

  abdest: {
    munakasa: [
      { taraf: "Şâfiî (dokunma)", delil: "Mâide 6: “...veya kadınlara dokunduysanız (lâmestum)...” Lafzın hakikati el ile dokunmaktır. İbn Ömer ve İbn Mes'ûd da âyeti böyle anlamıştır.",
        itiraz: "İbn Abbâs, Kur'an'daki “lems” ve “mess” kelimelerinin cinsel ilişkiden kinâye olduğunu söyler. Hz. Âişe de geceleyin Hz. Peygamber'i yatağında bulamayınca elini aradığını ve elinin secdedeki Peygamber'in ayaklarına değdiğini anlatır (Müslim); Peygamber namazına devam etmiştir.",
        cevap: "Şâfiîler, Âişe'nin elinin bir örtü üzerinden değmiş olabileceğini söyler. Hanefîler ise bunun delile dayanmayan bir ihtimal olduğunu, zahirden ancak bir delille çıkılabileceğini hatırlatır." },
      { taraf: "Hanefî (kan)", delil: "Hanefîler, bedenden çıkan ve akan necasetin abdesti bozduğunu kıyasla temellendirir: Abdesti bozan şey, iki yoldan çıkması değil, necaset olmasıdır. Ayrıca istihâza hadisinde “O bir damar kanıdır” denilmesi, damar kanının abdest bakımından dikkate alındığını gösterir (Buhârî).",
        itiraz: "Cumhur, Zâtürrikā' gazvesinde nöbet tutarken ok isabet eden ve kanı akmasına rağmen namazına devam eden sahabinin olayını delil gösterir (Ebû Dâvûd; Buhârî bâb başlığında). Hz. Ömer de yarası kanarken namaz kılmıştır (Mâlik).",
        cevap: "Hanefîler, Zâtürrikā' olayında Hz. Peygamber'in bu namazı onayladığına dair açık bir bilgi olmadığını, Hz. Ömer'in durumunun ise kesintisiz akan kan gibi bir özür hâli olduğunu söyler." },
      { taraf: "Hanbelî (deve eti)", delil: "Câbir b. Semüre'nin rivayetine göre Hz. Peygamber'e “Koyun etinden sonra abdest alalım mı?” diye soruldu; “Dilersen” dedi. “Deve etinden sonra abdest alalım mı?” denildi; “Evet” dedi (Müslim).",
        itiraz: "Cumhur, bu emrin “Hz. Peygamber'in son uygulaması ateşte pişenden abdest almamaktı” rivayetiyle (Ebû Dâvûd, Nesâî) neshedildiğini veya buradaki abdestin elleri ve ağzı yıkamak anlamında olduğunu söyler.",
        cevap: "Hanbelîler, nesih rivayetinin ateşte pişen her şey hakkında genel, deve eti hükmünün ise özel olduğunu söyler: Özel hüküm genel hükümle kaldırılamaz. Ayrıca aynı hadiste koyun eti için “dilersen” denilerek fark gözetilmesi, burada şer'î abdestin kastedildiğini gösterir." }
    ],
    seyir: [
      ["Sahabe", "Dokunma konusunda İbn Ömer ve İbn Mes'ûd ile İbn Abbâs arasında açık bir ihtilaf vardır. Bu ihtilaf mezheplere olduğu gibi intikal etmiştir."],
      ["Mezhepler", "Her mezhep bir ölçü benimser: Hanefîler “necasetin çıkması”nı, Şâfiîler “iki yoldan çıkan” ile “dokunma”yı, Mâlikî ve Hanbelîler “şehvet”i esas alır. Ahmed b. Hanbel ise deve eti hadisiyle amel eder."],
      ["İhtiyat kaidesi", "Şâfiî fakihleri “İhtilaftan çıkmak müstehaptır” kaidesini geliştirdi: Bir Şâfiînin, Hanefîlere göre abdesti bozan kan aktığında da abdest alması müstehaptır."],
      ["Bugün", "Hac ve umrede, tavaftaki kalabalıkta kadın ve erkeğin birbirine değmesi kaçınılmazdır. Bu yüzden birçok Şâfiî âlim, tavaf sırasında dokunmanın abdesti bozmadığı görüşüyle amel edilebileceğini söylemiştir."]
    ],
    tercih: [
      { alim: "nevevi", metin: "Kendi mezhebinin görüşünü aktardıktan sonra, deve eti konusunda Ahmed b. Hanbel'in görüşünün delil bakımından daha güçlü olduğunu açıkça kabul eder. Bu, bir mezhep âliminin delil karşısındaki dürüstlüğüne güzel bir örnektir." },
      { alim: "ibnteymiyye", metin: "Dokunmanın kendi başına abdesti bozmadığını, şehvetle dokunma hâlinde ise abdest almanın müstehap olduğunu söyler. Akan kanda da abdest almayı vâcib değil, müstehap görür." },
      { alim: "ibnrusd", metin: "Bidâye'de dokunma meselesindeki ihtilafın kaynağının, lafzın hakikat ile kinâye arasında gidip gelmesi olduğunu gösterir. Bu meseleyi, “müşterek lafız” kaynaklı ihtilafların tipik örneği olarak sunar." }
    ],
    usul: ["kavram:nesh", "kavram:kiyas", "kavram:amm", "kavram:tevil"],
    sorular: ["“Lâmestum” kelimesinin iki manasından birini seçerken hangi karîneleri kullanırdın?", "Nevevî'nin deve eti konusundaki tavrı, mezhebe bağlılık ile delile bağlılık arasındaki ilişki hakkında ne söylüyor?", "Bir Hanefînin, Şâfiî bir imamın arkasında namaz kılması bu farklar yüzünden sorun oluşturur mu? Âlimler bu konuda nasıl bir ölçü koymuştur?"]
  },

  fatiha: {
    munakasa: [
      { taraf: "Şâfiî", delil: "“Fâtiha'yı okumayanın namazı yoktur” (Buhârî, Müslim). Ubâde b. Sâmit'in rivayetinde, sabah namazında arkasındakilerin okuduğunu fark eden Hz. Peygamber: “Fâtiha dışında bir şey okumayın; çünkü onu okumayanın namazı yoktur” buyurmuştur (Ebû Dâvûd, Tirmizî).",
        itiraz: "Hanefîler, A'râf 204'ün kesin bir hitap olduğunu ve âhâd haberle daraltılamayacağını söyler. “Kimin imamı varsa, imamın okuması onun okumasıdır” hadisini (İbn Mâce, Ahmed) de delil gösterirler.",
        cevap: "Şâfiîler, “imamın okuması” hadisinin senedinin zayıf veya mürsel olduğunu söyler. Ubâde hadisi ise doğrudan cemaat hakkında ve özel olduğu için genel hükmü tahsis eder." },
      { taraf: "Hanefî", delil: "A'râf 204'ün namaz hakkında indiği, İbn Mes'ûd ve Ebû Hüreyre'den nakledilir. Ahmed b. Hanbel, insanların bu âyetin namaz hakkında olduğunda ittifak ettiğini söyler.",
        itiraz: "Şâfiîler, cemaatin imamın susma anlarında (sekte) okuyabileceğini, böylece dinleme emrinin ihlal edilmeyeceğini söyler.",
        cevap: "Hanefîler, imamın Fâtiha'dan sonra Fâtiha süresince susmasının sünnette sabit olmadığını, böyle bir susmayı sırf cemaatin okuması için gerekli kılmanın bir delile dayanmadığını söyler." },
      { taraf: "Mâlikî ve Hanbelî", delil: "Ebû Hüreyre hadisi: Hz. Peygamber sesli bir namazdan sonra “Az önce biriniz benimle birlikte okudu mu?” diye sordu ve “Kur'an okurken neden benimle çekişiliyor?” buyurdu. Bunun üzerine insanlar sesli namazlarda okumayı bıraktı (Ebû Dâvûd, Tirmizî).",
        itiraz: "Buhârî, “İnsanlar okumayı bıraktı” kısmının Zührî'nin hadise eklediği kendi sözü (idrâc) olduğunu söyler.",
        cevap: "Zührî'nin sözü olsa bile, bir tâbiînin Medine'deki uygulamayı haber vermesidir. Sesli-gizli namaz ayrımı ise âyet ile hadisi birlikte uygulamanın en dengeli yoludur." }
    ],
    seyir: [
      ["Sahabe", "Ubâde b. Sâmit ve Ebû Hüreyre imamın arkasında okumayı savunur; İbn Mes'ûd, Zeyd b. Sâbit ve Câbir ise okumaz."],
      ["3. asır", "Buhârî, Hanefî görüşüne cevap olarak müstakil bir risale yazar: Cüz'ü'l-kırâa halfe'l-imâm. Beyhakī de Kitâbü'l-Kırâa'yı yazar."],
      ["Hanefî iç tartışma", "İmam Muhammed'den, gizli namazda okumanın güzel olduğuna dair bir rivayet gelir. 19. yüzyılda Hindistanlı Hanefî âlim Abdülhay el-Leknevî, İmâmü'l-kelâm adlı eserinde delilleri yeniden tartar ve gizli namazda okumanın caiz olduğu sonucuna varır."],
      ["Bugün", "Türkiye'de Diyanet Hanefî görüşünü esas alır. Farklı mezheplerden cemaatlerin bir arada bulunduğu camilerde, her birinin kendi mezhebine göre amel etmesi doğal bir uygulama olarak kabul edilir."]
    ],
    tercih: [
      { alim: "ibnrusd", metin: "Sesli ve gizli namaz ayrımını, iki delil grubunu birlikte uygulamanın en güzel yolu olarak değerlendirir." },
      { alim: "ibnteymiyye", metin: "Cemaatin sesli namazda dinlemesini, gizli namazda ve imamın kıraatini duymadığında ise okumasını tercih eder. Bu görüşün, sahabenin çoğunluğunun uygulamasına en yakın görüş olduğunu söyler." },
      { alim: "buhari", metin: "Cüz'ü'l-kırâa'da imamın arkasında Fâtiha okumanın farz olduğunu savunur ve “imamın okuması onun okumasıdır” rivayetinin yollarını tenkit eder. Bu eser, bir muhaddisin fıkhî bir tartışmaya doğrudan katılmasının örneğidir." }
    ],
    usul: ["kavram:amm", "kavram:mutevatir", "kavram:esbab", "kavram:illet"],
    sorular: ["Bir âyet ile sahih bir hadisin genel lafızları çatışıyor gibi göründüğünde, Hanefî ve Şâfiî usulleri sana hangi farklı yolları gösterir?", "Bir hadise ravinin kendi yorumunun eklenmesi (idrâc) nasıl tespit edilir? Bu tespit bir hükmü nasıl etkiler?", "Leknevî'nin mezhep içinden yaptığı tercih, bugün mezhep içi ictihad için nasıl bir model sunar?"]
  },

  teravih: {
    munakasa: [
      { taraf: "8 rekâtı savunanlar", delil: "Hz. Âişe: “Resûlullah Ramazan'da da başka zamanda da on bir rekâttan fazla kılmazdı” (Buhârî, Müslim).",
        itiraz: "Cumhur, bu hadisin Hz. Peygamber'in evinde kıldığı gece namazını (teheccüd) anlattığını, cemaatle kılınan teravihin sayısını sınırlamadığını söyler. Ayrıca İbn Abbâs ve Hz. Âişe'den on üç rekât rivayetleri de vardır; bu, sayının sınırlayıcı olmadığını gösterir.",
        cevap: "Bu görüşü savunanlar, teravihin de bir gece namazı olduğunu, Hz. Peygamber'in fiilinin en güzel örnek olduğunu, sonradan eklenen sayının ise sünnete ilave sayılacağını söyler." },
      { taraf: "20 rekâtı savunanlar", delil: "Sâib b. Yezîd: “Ömer döneminde insanlar Ramazan'da yirmi rekât kılarlardı” (Beyhakī; senedi sahih kabul edilmiştir). Sahabe buna itiraz etmemiştir. Kâsânî bu uygulamayı bir icmâ olarak görür.",
        itiraz: "Muvatta'da yine Sâib'den, Hz. Ömer'in Ubeyy b. Ka'b ile Temîm ed-Dârî'ye on bir rekât kıldırmalarını emrettiği nakledilir. Yezîd b. Rûmân'ın “yirmi üç rekât” rivayeti ise kopuktur; Yezîd, Hz. Ömer'e yetişmemiştir.",
        cevap: "Beyhakī iki rivayeti uzlaştırır: Önce on bir rekât uzun kıraatle kılınıyordu; sonra kıraat kısaltılıp rekât sayısı yirmiye çıkarıldı. Hanefî, Şâfiî ve Hanbelîlerin uygulaması da bu son durum üzerine yerleşmiştir." },
      { taraf: "36 rekât (Medine)", delil: "Medine halkı, Mekkelilerin her dört rekâttan sonra Kâbe'yi tavaf etmesine karşılık, her dinlenme arasında dört rekât fazladan kılmaya başladı. Böylece sayı 36'ya çıktı. İmam Mâlik bu uygulamayı yaklaşık yüz yıllık bir gelenek olarak nakleder.",
        itiraz: "Şâfiî, 20 rekâtın Ömer döneminin uygulaması olduğunu ve 36 rekâtın yalnızca Medine'ye ait bir uygulama olarak kalması gerektiğini söyler.",
        cevap: "Bu tartışma, teravihin sayısının bir “ölçü” değil, bir “uygulama tarzı” olduğunu göstermektedir. Rekâtın artırılıp azaltılması, kıraatin uzunluğuyla ilişkilidir." }
    ],
    seyir: [
      ["Hz. Peygamber", "Birkaç gece cemaatle kıldı, sonra farz kılınır endişesiyle bıraktı (Buhârî, Müslim). Sayı açıkça nakledilmedi."],
      ["Hz. Ömer", "İnsanları Ubeyy b. Ka'b'ın imametinde topladı ve “Bu ne güzel bir bid'at (yenilik)!” dedi (Buhârî). Bu söz, bid'at tartışmasının temel metinlerinden biri hâline geldi."],
      ["Mezhepler ve Osmanlı", "20 rekât; Hanefî, Şâfiî ve Hanbelî mezheplerinin uygulaması oldu. Osmanlı camilerinde hatimle teravih ve her dört rekâttan sonra salavat okunması gibi uygulamalar gelişti."],
      ["20. yüzyıl", "Nâsırüddin el-Elbânî, Salâtü't-terâvîh adlı eserinde 8 rekâtı savundu. Bu esere, başta Hindistanlı Hanefî âlimler olmak üzere birçok âlim reddiye yazdı. Tartışma bugün de sürmektedir."]
    ],
    tercih: [
      { alim: "ibnteymiyye", metin: "Hz. Peygamber'in sayı belirlemediğini söyler. Ona göre 11, 13, 20 veya 36 rekâtın hepsi meşrudur; doğru olan, cemaatin hâline göre kıyamın uzunluğu ile rekât sayısı arasında denge kurmaktır." },
      { alim: "kasani", metin: "Hz. Ömer'in uygulamasına sahabeden kimsenin itiraz etmemesini bir icmâ olarak değerlendirir ve 20 rekâtın sünnet olduğunu söyler." },
      { alim: "suyuti", metin: "Teravihle ilgili rivayetleri ayrı bir risalede toplar. Hz. Peygamber'den sabit bir sayı bulunmadığını, sahabe döneminde ise 20 rekât uygulamasının yerleştiğini gösterir." }
    ],
    usul: ["kavram:sahabe", "kavram:icma", "kavram:bidat"],
    sorular: ["Hz. Ömer'in “Ne güzel bir bid'at!” sözü, bid'at kavramının dar ve geniş tanımlarından hangisini destekler?", "Hz. Peygamber'in tek başına yaptığı bir uygulama ile sahabenin cemaatle oluşturduğu bir gelenek arasındaki ilişkiyi nasıl kurardın?", "Kıyamın uzunluğu ile rekât sayısı arasında denge kurma fikri, bugünkü cami uygulamaları için ne öneriyor?"]
  },

  kurban: {
    munakasa: [
      { taraf: "Hanefî", delil: "“İmkânı olduğu hâlde kurban kesmeyen namazgâhımıza yaklaşmasın” (İbn Mâce, Ahmed; Hâkim sahih sayar). Böyle bir tehdit ancak vâcib bir amelin terki için olur.",
        itiraz: "Cumhur, bu rivayetin Ebû Hüreyre'nin kendi sözü olarak (mevkûf) daha sahih olduğunu, merfû olarak nakledilmesinin hatalı olduğunu söyler.",
        cevap: "Hanefîler, böyle bir tehdidin re'y ile söylenemeyeceğini, dolayısıyla mevkûf olsa bile hükmen merfû olduğunu söyler. Ayrıca Kevser 2'deki “ve'nhar” emri de vücûb ifade eder." },
      { taraf: "Cumhur", delil: "Ümmü Seleme hadisi: “Zilhicce'nin ilk on günü girdiğinde biriniz kurban kesmek isterse saçından ve tırnağından bir şey kesmesin” (Müslim). Kurbanın kişinin isteğine bağlanması, onun vâcib olmadığını gösterir.",
        itiraz: "Hanefîler, “isterse” ifadesinin vücûbu ortadan kaldırmadığını söyler. “Namaz kılmak isteyen abdest alsın” sözü, namazın isteğe bağlı olduğunu göstermez.",
        cevap: "Cumhur, Hz. Ebû Bekir ile Hz. Ömer'in, insanlar vâcib sanmasın diye bazı yıllar kurban kesmediklerine dair rivayetleri (Beyhakī) gösterir." },
      { taraf: "Kurbanın parayla bağışlanması", delil: "Bazı çağdaş yazarlar, kurbanın amacının fakirlerin ihtiyacını karşılamak olduğunu, dolayısıyla bedelinin sadaka olarak verilebileceğini ileri sürer.",
        itiraz: "Bütün mezhepler, kurbanın kan akıtma (irâkatü'd-dem) yoluyla yapılan bir ibadet olduğunu, bu yönüyle ta'abbüdî olduğunu kabul eder. Bedeli sadaka olarak vermek kurbanın yerine geçmez. “Onların ne etleri ne de kanları Allah'a ulaşır; O'na ulaşacak olan sizin takvanızdır” (Hac 37) âyeti, kesimin kendisinin bir takva ifadesi olduğunu gösterir.",
        cevap: "Fitredeki kıymet tartışmasıyla karşılaştırıldığında fark açıktır: Fitrede amaç fakire mal ulaştırmaktır. Kurbanda ise amaç, belirli bir vakitte Allah için kan akıtmaktır. Hanefîler bile burada kıymeti kabul etmez." }
    ],
    seyir: [
      ["Sahabe", "Hz. Peygamber her yıl kurban kesti. Ebû Bekir ve Ömer'in bazı yıllar kesmediği nakledilir."],
      ["Mezhepler", "Ebû Hanîfe vâcib, diğer üç mezhep sünnet-i müekkede görüşündedir. Hanbelîlerden İbn Teymiyye vücûb görüşünü güçlü bulmuştur."],
      ["Osmanlı", "Kurban, Hanefî vücûb görüşüyle toplumun her kesiminde köklü bir gelenek hâline geldi. Mahalle ve vakıflar fakirlere kurban eti dağıtımını düzenledi."],
      ["Bugün", "Vekâletle kurban, yurt dışında kesim ve kurbanın bağış kurumları aracılığıyla yapılması yaygınlaştı. Bu uygulamaların kesim vaktine ve niyete uygunluğu çağdaş fıkhın gündemindedir."]
    ],
    tercih: [
      { alim: "ibnteymiyye", metin: "Gücü yetene kurbanın vâcib olduğu görüşünün delil bakımından daha güçlü olduğunu söyler. Bu, Hanbelî bir âlimin Hanefî görüşü tercih ettiği örneklerden biridir." },
      { alim: "ibnhazm", metin: "Kurbanın vâcib olmadığını, Ebû Bekir ve Ömer'in uygulamasının bunu açıkça gösterdiğini savunur. Hiçbir sahabiden vücûbun sahih olarak nakledilmediğini ileri sürer." }
    ],
    usul: ["kavram:derece", "kavram:sahabe", "kavram:kiyas"],
    sorular: ["Bir sahabinin re'yle söyleyemeyeceği bir sözünün “hükmen merfû” sayılması hangi gerekçeye dayanır?", "Kurban ile fitre arasındaki fark, ibadetlerde ta'abbüdî olan ile amacı anlaşılabilen (ma'kūlü'l-mana) arasındaki ayrımı nasıl gösteriyor?", "Vekâletle yurt dışında kesilen kurbanda, niyet ve vakit konusunda nelere dikkat etmek gerekir?"]
  },

  corap: {
    munakasa: [
      { taraf: "Çoraba meshi caiz görenler", delil: "Muğîre b. Şu'be: “Hz. Peygamber abdest aldı ve çoraplar (cevrabeyn) ile ayakkabılar üzerine mesh etti” (Ebû Dâvûd, Tirmizî; Tirmizî hasen sahih der).",
        itiraz: "Ebû Dâvûd, Abdurrahmân b. Mehdî'nin bu hadisi rivayet etmediğini, çünkü Muğîre'den bilinen rivayetin “mestler üzerine” olduğunu söyler. Müslim, Ahmed ve Yahyâ b. Maîn de bu lafzı şâz (güvenilir ravilere aykırı) sayar.",
        cevap: "Ebû Dâvûd'un kendisi, çoraplar üzerine mesh ettiği nakledilen sahabileri sayar: Ali, İbn Mes'ûd, Berâ b. Âzib, Enes, Ebû Ümâme, Sehl b. Sa'd ve diğerleri. Hadisin senedi tartışmalı olsa bile sahabenin uygulaması meseleyi destekler." },
      { taraf: "İnce çoraba meshi caiz görenler", delil: "İbn Teymiyye: Mesh, mestin şekline değil adına bağlı bir ruhsattır. “Su geçirmeme” ve “yürünebilme” şartları nasta yoktur. Süfyân es-Sevrî de “Muhacir ve Ensâr'ın mestleri yırtık değil miydi?” der.",
        itiraz: "Cumhur, meshin yıkamanın yerine geçen bir ruhsat olduğunu, ruhsatların konusunun dar yorumlanması gerektiğini söyler. Ayağı korumayan ve onunla yürünemeyen bir şey mest değildir.",
        cevap: "İbn Teymiyye'ye göre ruhsatın gerekçesi, ayağı soymanın zorluğudur. Bu zorluk ince çorapta da vardır. Ona göre ruhsatları daraltmak, şâriin kolaylaştırdığını zorlaştırmaktır." },
      { taraf: "Hanefî iç tartışma", delil: "Ebû Hanîfe önce yalnızca deri kaplı çoraplara meshi caiz görüyordu. Hastalığında kalın çoraplar üzerine mesh ettiği ve “İnsanları men ettiğim şeyi yaptım” diyerek görüşünden döndüğü nakledilir. Fetva, İmameyn'in kalın çoraba meshi caiz gören görüşüne göredir.",
        itiraz: "Bu rücû rivayeti, Ebû Hanîfe'nin görüşünü değiştirdiğini mi, yoksa yalnızca hastalık hâli için bir ruhsat kullandığını mı gösterir?",
        cevap: "Hanefî fakihlerin çoğu bunu, görüşün kalın çorap hakkında İmameyn'e döndüğü şeklinde anlamıştır. Kalın çorapta meshin caiz olduğu, mezhepte üzerinde ittifak edilen bir hüküm hâline gelmiştir." }
    ],
    seyir: [
      ["Sahabe", "Pek çok sahabiden çoraplar üzerine mesh ettikleri nakledilir. Ancak bu çorapların niteliği (kalın, deri kaplı veya ince) kesin olarak bilinmez."],
      ["Mezhepler", "Mest tarifi, mezheplerin şartlarını belirledi: Su geçirmeme, yürünebilme, bağlanmadan durabilme."],
      ["20. yüzyıl", "Şamlı âlim Cemâleddîn el-Kāsımî, el-Mesh ale'l-cevrabeyn adlı risalesinde rivayetleri toplayarak ruhsatı genişletti. Risalenin Ahmed Şâkir'in tahkikiyle yayımlanması, meseleyi yeniden gündeme taşıdı."],
      ["Bugün", "Günümüz çoraplarının çoğu klasik şartları taşımaz. Diyanet Hanefî görüşü esas alarak ince çoraplar üzerine meshi caiz görmez. Ancak Avrupa gibi yerlerde ve seyahatte, ruhsatı geniş tutan görüşlerle amel edenler de vardır."]
    ],
    tercih: [
      { alim: "ibnteymiyye", metin: "Ruhsatın, adı mest veya çorap olan her şeyi kapsadığını savunur. Yırtık mestlerin de, yürünebildiği sürece, mesh için uygun olduğunu söyler." },
      { alim: "nevevi", metin: "Çoraba meshin, mestin şartlarını taşıması durumunda caiz olduğunu söyler. Muğîre hadisinin muhaddislerce zayıf görüldüğünü ise açıkça belirtir." }
    ],
    usul: ["kavram:ruhsat", "kavram:kiyas", "kavram:derece", "kavram:sahabe"],
    sorular: ["Bir ruhsatın şartları nastan mı yoksa o dönemin örfünden mi çıkarılmıştır? Bu soruya verilen cevap, çoraba mesh meselesini nasıl değiştirir?", "Senedi tartışmalı bir hadisin sahabe uygulamasıyla desteklenmesi, onu delil olarak güçlendirir mi?", "Seyahatte ince çorabına mesh etmek isteyen birine, farklı mezheplerin görüşlerini nasıl anlatırdın?"]
  },

  fitre: {
    munakasa: [
      { taraf: "Cumhur", delil: "İbn Ömer: “Resûlullah fıtır sadakasını bir sâ' hurma veya bir sâ' arpa olarak farz kıldı” (Buhârî, Müslim). Ebû Saîd el-Hudrî de bunu yiyecek maddeleri olarak sayar.",
        itiraz: "Hanefîler, maddelerin belirtilmesinin, o dönemin toplumunda değerin ve ihtiyacın en yaygın ölçüsü olmalarından kaynaklandığını söyler. Amaç fakirin bayram gününde muhtaç olmamasıdır.",
        cevap: "Cumhur, ibadetlerde şâriin belirlediği şeklin ta'abbüdî olduğunu, amacın tahmin edilerek şeklin değiştirilemeyeceğini söyler. Para Hz. Peygamber döneminde de vardı; buna rağmen yiyecek belirlenmiştir." },
      { taraf: "Hanefî", delil: "Muâz b. Cebel Yemen halkına şöyle dedi: “Sadakada arpa ve mısır yerine bana hamîs ve lebîs (elbise) getirin; bu sizin için daha kolay, Medine'deki sahabe için de daha hayırlıdır” (Buhârî, bâb başlığında).",
        itiraz: "Cumhur, rivayetin kopuk olduğunu (Tâvûs, Muâz'a yetişmemiştir) ve cizye ile ilgili olabileceğini söyler.",
        cevap: "Hanefîler, Buhârî'nin bu rivayeti kesinlik bildiren bir ifadeyle ve zekât bâbında aktardığını hatırlatır. Ayrıca Muâviye'nin buğdayda yarım sâ' ölçüsünü, buğdayın arpadan daha değerli olmasına göre belirlemesi (Buhârî, Müslim), sahabenin kıymeti dikkate aldığını gösterir. Ebû Saîd bu ölçüye itiraz etmiştir." },
      { taraf: "Tâbiûn uygulaması", delil: "Ömer b. Abdülazîz'in Basra valisine, fitreyi divan maaşlarından yarım dirhem olarak toplamasını yazdığı nakledilir (İbn Ebî Şeybe). Hasan-ı Basrî de fitrede dirhem vermekte bir sakınca görmez.",
        itiraz: "Cumhur, bunların sahabe sonrası bir uygulama olduğunu ve sahabenin açık ifadesine tercih edilemeyeceğini söyler.",
        cevap: "Bu rivayetler, kıymetle ödemenin Hanefîlere özgü bir görüş olmadığını ve erken dönemde de uygulandığını gösterir." }
    ],
    seyir: [
      ["Sahabe", "Fitre yiyecek olarak verildi. Muâviye'nin buğday ölçüsü, değer düşüncesinin ilk izi oldu."],
      ["Tâbiûn", "Ömer b. Abdülazîz ve Hasan-ı Basrî'den para ile ödeme uygulaması nakledildi."],
      ["Mezhepler", "Hanefîler kıymeti caiz, hatta fakir için daha faydalıysa daha faziletli gördü. Diğer mezhepler gıda maddesinde ısrar etti; İbn Teymiyye ihtiyaç ve maslahat hâlinde kıymeti kabul etti."],
      ["Bugün", "Türkiye'de Diyanet her yıl fitreyi para olarak ilan eder. Körfez ülkelerinde ise fetva kurulları genellikle gıda maddesiyle ödemeyi esas alır; bazı yerlerde kurumlar parayı toplayıp gıdaya çevirerek dağıtır."]
    ],
    tercih: [
      { alim: "buhari", metin: "Sahîh'inde “Zekâtta eşya (araz) almak” başlıklı bir bâb açarak Muâz rivayetini burada aktarır. Bu, Buhârî'nin bu konuda Hanefîlere yakın bir tercihine işaret olarak yorumlanmıştır." },
      { alim: "ibnteymiyye", metin: "Kural olarak hadiste belirtilen maddelerin verilmesini esas alır. Ancak bir ihtiyaç veya açık bir maslahat bulunduğunda, örneğin fakir için paranın daha faydalı olduğu durumlarda, kıymetle ödemeyi caiz görür." },
      { alim: "karadavi", metin: "Fıkhu'z-zekât'ta, şehir hayatında fakirin ihtiyacının çoğunlukla para ile karşılandığını belirterek Hanefî görüşü tercih eder." }
    ],
    usul: ["kavram:kiyas", "kavram:makasid", "kavram:maslahat", "kavram:sahabe"],
    sorular: ["Bir ibadette “şekil” ile “amaç” çatıştığında hangisinin öncelikli olduğuna nasıl karar verirsin?", "Muâviye'nin ölçüsüne Ebû Saîd'in itiraz etmesi, sahabe arasında lafız ve mana eğilimlerinin bir arada bulunduğunu nasıl gösterir?", "Fitre ile kurban arasındaki fark, kıymet meselesinde neden farklı sonuçlar doğurur?"]
  },

  hilal: {
    munakasa: [
      { taraf: "Şâfiî (matla farkı)", delil: "Küreyb hadisi: İbn Abbâs, Şam'daki rü'yeti Medine için kabul etmedi ve “Resûlullah bize böyle emretti” dedi (Müslim).",
        itiraz: "Cumhur, İbn Abbâs'ın bu sözünün kendi ictihadı olabileceğini söyler. Ayrıca haber yalnızca Küreyb ile geldiği için, tek kişinin haberiyle ayın başlangıcı değiştirilmemiş olabilir; yani mesele matla farkı değil, ispatın yetersizliğidir.",
        cevap: "Şâfiîler, sahabinin “Resûlullah bize böyle emretti” demesinin merfû hükmünde olduğunu söyler. Ayrıca İbn Abbâs ispatı değil, bağlayıcılığı reddetmiştir: “Muâviye'nin rü'yeti sana yetmez mi?” sorusuna “Hayır” diye cevap vermiştir." },
      { taraf: "Hesabı kabul edenler", delil: "“Hava kapalı olursa onun için takdir edin (fakdurû lehû)” (Buhârî, Müslim). İbn Süreyc'e göre “takdir” astronomik hesap demektir.",
        itiraz: "Cumhur, aynı hadisin diğer rivayetinin bunu açıkladığını söyler: “Şâban'ı otuza tamamlayın.” Hadis kendi kendini tefsir eder.",
        cevap: "İbn Süreyc iki rivayeti hitabın muhatabına göre ayırır: “Takdir edin” emri hesap bilenlere, “otuza tamamlayın” emri ise hesap bilmeyenlere yöneliktir. Bu, iki rivayeti de boşa çıkarmadan uygulamanın bir yoludur." },
      { taraf: "Rü'yeti zorunlu görenler", delil: "“Biz ümmî bir ümmetiz; yazmayız, hesap yapmayız. Ay şöyle ve şöyledir” (Buhârî, Müslim). İbn Teymiyye, hesapla ayı belirlemenin bid'at olduğunu ve Müslümanların bunu reddettiğini söyler.",
        itiraz: "Çağdaş hesap savunucuları, hadisin bir emir değil bir durum tespiti olduğunu söyler. Hüküm, ümmetin hesap bilmemesi gerekçesine bağlanmıştır; bu gerekçe ortadan kalkınca hüküm de değişebilir. Bu görüşü en net savunan Ahmed Şâkir'dir.",
        cevap: "Rü'yeti savunanlar, ümmîliğin bir kolaylık ilkesi olduğunu, herkesin gözle doğrulayabileceği bir ölçünün uzmanlara bağımlılıktan daha uygun olduğunu söyler." }
    ],
    seyir: [
      ["Hz. Peygamber ve sahabe", "Rü'yet ve şahitlikle başlangıç; Medine ile Şam arasında farklı başlangıç (Küreyb hadisi)."],
      ["Tâbiûn ve erken fakihler", "Mutarrif b. Abdillâh ve İbn Süreyc hesaba sınırlı bir yer açar. Cumhur rü'yeti esas almaya devam eder."],
      ["8. asır", "İbn Teymiyye hesabı kesin olarak reddeder. Aynı dönemde Takıyyüddin es-Sübkî, hesabın olumsuz yönde kullanılmasını, yani imkânsız bir rü'yet şahitliğini reddetmek için kullanılmasını savunur."],
      ["Osmanlı", "Rü'yet şahitliği kadılar tarafından kabul edilir, haber şehirlere ulaştırılırdı. Muvakkithâneler ise namaz vakitlerini hesaplamakla görevliydi."],
      ["Modern dönem", "1939'da Ahmed Şâkir hesabı savundu. 1978 İstanbul Hilal Konferansı görülebilirlik ölçütlerini belirledi. 2016'da İstanbul'da yapılan kongre, küresel tek takvim önerisini kabul etti."]
    ],
    tercih: [
      { alim: "subki", metin: "Hesabın, hilalin görülemeyeceğini kesin olarak gösterdiği bir durumda, aksi yöndeki şahitliğin kabul edilmemesi gerektiğini söyler. Ona göre şahitlik zannîdir, hesap ise bu durumda kesindir; zannî olan kesin olanın önüne geçemez." },
      { alim: "ibnteymiyye", metin: "Hesapla ayın başlangıcını belirlemenin dinde bid'at olduğunu ve rü'yetin esas alınması gerektiğini savunur." },
      { alim: "zerka", metin: "Astronomik hesabın bugün kesin bilgi verdiğini, “ümmîlik” gerekçesinin ortadan kalktığını ve hesabın esas alınmasının ümmetin birliğine de hizmet edeceğini savunur." }
    ],
    usul: ["kavram:kiyas", "kavram:sahabe", "kavram:amm"],
    sorular: ["“Biz hesap yapmayız” ifadesi bir emir mi, yoksa bir durum tespiti mi? Bu ayrım hükmü nasıl değiştirir?", "Sübkî'nin görüşü, rü'yet ile hesabı birleştiren bir orta yol olarak yeterli mi?", "Ümmetin birliği ile yerel rü'yet geleneği arasında bir tercih yapmak zorunda kalsaydın hangisini öne alırdın ve neden?"]
  },

  ziynet: {
    munakasa: [
      { taraf: "Hanefî", delil: "Amr b. Şuayb hadisi: Hz. Peygamber, kızının kolundaki altın bileziklerin zekâtını vermeyen kadını uyardı (Ebû Dâvûd, Nesâî). Âişe ve Ümmü Seleme'den de benzer rivayetler vardır.",
        itiraz: "Tirmizî, “Bu konuda Hz. Peygamber'den sahih bir şey sabit değildir” der. Ayrıca Hz. Âişe'nin kendisi, himayesindeki yetimlerin altın takılarının zekâtını vermiyordu (Muvatta').",
        cevap: "Hanefîler, Âişe'nin uygulamasının yetimlerin malıyla ilgili olduğunu hatırlatır. Hanefî mezhebinde zaten çocuğun malında zekât yoktur. Dolayısıyla bu uygulama, ziynette zekât olmadığını değil, çocuğun malında zekât olmadığını gösterir." },
      { taraf: "Cumhur", delil: "Zekât, artma (nemâ) kabiliyeti olan maldan alınır. Kullanılan ziynet, ev eşyası ve elbise gibi kişinin temel ihtiyacıdır. İbn Ömer, Câbir, Enes ve Esmâ gibi sahabiler de kullanılan ziynette zekât görmezdi.",
        itiraz: "Hanefîler, altın ve gümüşün nemâ kabiliyetinin yaratılıştan geldiğini söyler. Bu madenler takı yapıldığında da değer ölçüsü olma niteliğini kaybetmez. Bu yüzden ev eşyasına kıyas edilemezler.",
        cevap: "İbn Rüşd bu ihtilafın özünü şöyle açıklar: Ziynet, işlenmemiş altın gibi para niteliğinde midir, yoksa ticaret niyeti olmayan eşya gibi midir? Benzerlik iki tarafa da çekilebildiği için ihtilaf doğmuştur." },
      { taraf: "Kazanç zekâtı (Karadâvî)", delil: "İbn Abbâs, İbn Mes'ûd ve Muâviye'den, kazancın elde edildiği anda zekâtının verileceği nakledilir. Ömer b. Abdülazîz de maaşlardan zekâtı kaynağında kesmiştir.",
        itiraz: "Cumhur, “Üzerinden bir yıl geçmedikçe malda zekât yoktur” rivayetini delil gösterir. Kazanç için ayrıca bir yılın geçmesi gerekir.",
        cevap: "Karadâvî, bu rivayetin merfû olarak zayıf olduğunu, İbn Ömer'in sözü olarak sabit olduğunu söyler. Ayrıca yıl şartının, ticaret malı gibi artma süresine ihtiyaç duyan mallar için konduğunu, maaş gibi doğrudan elde edilen gelirler için gerekmediğini savunur." }
    ],
    seyir: [
      ["Sahabe", "İbn Mes'ûd ziynette zekât görür. Âişe, İbn Ömer, Câbir, Enes ve Esmâ ise kullanılan ziynette zekât görmez."],
      ["Mezhepler", "Hanefîler vâcib, diğer üç mezhep kullanılan ziynette zekât yok görüşünde birleşir. Cumhur ise kenz, ticaret ve israf istisnalarını ekler."],
      ["Osmanlı ve Türkiye", "Hanefî görüşü esas alındı. Kadının ziynetinin aynı zamanda ailenin birikimi olması, bu görüşü pratik olarak da güçlendirdi."],
      ["Modern dönem", "Karadâvî'nin Fıkhu'z-zekât'ı (1969), kazanç zekâtı ve modern malların zekâtı tartışmalarını başlattı. Zekât kurumları bu eserden büyük ölçüde etkilendi."]
    ],
    tercih: [
      { alim: "ibnrusd", metin: "Meseleyi bir “benzerlik çatışması” olarak açıklar: Ziynet, bir yönüyle para niteliğindeki altına, öbür yönüyle kullanılan eşyaya benzer. Hangi benzerliğin ağır bastığı, müctehidin takdirine bağlıdır." },
      { alim: "karadavi", metin: "Kullanılan ziynette cumhuru tercih eder, ancak örfü aşan miktarın zekâta tâbi olduğunu söyler. Kazanç konusunda ise elde edildiği anda zekât verilmesini savunur." }
    ],
    usul: ["kavram:kiyas", "kavram:sahabe", "kavram:derece", "kavram:orf"],
    sorular: ["Hanefîlerin Âişe'nin uygulamasını “çocuğun malında zekât yok” ilkesiyle açıklaması ikna edici mi? Bu, bir mezhebin kendi usulleriyle tutarlılığı hakkında ne gösteriyor?", "Bugünkü toplumda kadının altını daha çok bir birikim aracı mı, yoksa bir süs eşyası mı? Bu soru hükmü etkiler mi?", "Maaştan aylık zekât vermek mi, yoksa yılda bir kez toplu hesap yapmak mı sana daha uygun geliyor? Hangi görüşe dayanarak?"]
  },

  hacruhsat: {
    munakasa: [
      { taraf: "Cumhur (zevalden önce taşlama olmaz)", delil: "İbn Ömer: “Vakti beklerdik; güneş zevale erince taşlardık” (Buhârî). Câbir'in rivayetinde de Hz. Peygamber teşrik günlerinde zevalden sonra taşlamıştır (Müslim).",
        itiraz: "Ruhsatı genişletenler, Hz. Peygamber'in vakti sözlü bir emirle belirlemediğini söyler. Fiil, kural olarak vücûb değil meşruiyet ve fazilet ifade eder; sahabenin beklemesi de daha faziletli olanı aradıklarını gösterir.",
        cevap: "Cumhur, “Menâsikinizi benden alın” emrinin hacdaki fiilleri bağlayıcı kıldığını, sahabenin zevali “beklemesinin” de bir vakit şartının farkında olduklarını gösterdiğini söyler." },
      { taraf: "Cumhur (tertip sünnettir)", delil: "“Yap, sakıncası yok (if'al ve lâ harac)” (Buhârî, Müslim). Hz. Peygamber o gün öne alınan veya geri bırakılan hiçbir şey için fidye istememiştir.",
        itiraz: "Ebû Hanîfe, “harac” kelimesinin günah anlamına geldiğini, sahabenin meseleyi bilmeden yaptığı için günahın kaldırıldığını, fakat fidyenin düştüğüne dair bir şey söylenmediğini savunur. İbn Abbâs'tan da “Haccında bir şeyi öne alan veya geri bırakan kurban kessin” sözü nakledilir.",
        cevap: "Cumhur, ihtiyaç anında beyanın geciktirilemeyeceğini söyler: Fidye gerekseydi Hz. Peygamber bunu o gün bildirirdi. İbn Abbâs'tan gelen rivayetin senedi de tartışmalıdır." },
      { taraf: "Şâfiî ve Hanbelî (Müzdelife)", delil: "Hz. Sevde'ye ve ailenin zayıflarına geceleyin Müzdelife'den ayrılma izni verilmiştir (Buhârî, Müslim). Bu izin gece yarısından sonra verildiği için, gece yarısından sonra ayrılmak herkes için caizdir.",
        itiraz: "Hanefîler, bu iznin bir özür sebebiyle verildiğini, dolayısıyla genel bir kural olamayacağını söyler. Asıl vakfe fecirden sonradır.",
        cevap: "Bugünkü kalabalıkta bütün hacılar bir bakıma “zayıf” konumundadır. Bu durumda ruhsatın genişletilmesi, hükmün illetinin genelleşmesinin bir sonucudur." }
    ],
    seyir: [
      ["Veda haccı", "Hz. Peygamber'in tek haccı. Bütün menâsik bu haccın rivayetlerinden çıkarıldı. Câbir'in uzun hadisi (Müslim) en önemli kaynaktır."],
      ["Tâbiûn", "Atâ ve Tâvûs gibi Mekke fakihleri ruhsatları geniş tuttu. Mekke ekolünün bu tavrı, İbn Abbâs'ın kolaylaştırıcı fıkhının bir devamıdır."],
      ["Mezhepler", "Her mezhep fiillerin vâcib ve sünnet ayrımını kendi usulüne göre yaptı. Hanefîler tertip ve vakitlerde daha sıkı, Şâfiî ve Hanbelîler daha geniş davrandı."],
      ["Modern dönem", "Hacı sayısının milyonları bulması ve yaşanan izdiham felaketleri, cemerât bölgesinin yeniden düzenlenmesine ve gün boyu taşlama uygulamasına yol açtı. Klasik azınlık görüşleri çoğunluğun uygulaması hâline geldi."]
    ],
    tercih: [
      { alim: "ibnkudame", metin: "el-Muğnî'de, kurban günü fiillerinin sırasını değiştirmenin bir şey gerektirmediğini, çünkü Hz. Peygamber'in “Sakıncası yok” sözünün mutlak olduğunu söyler." },
      { alim: "kasani", metin: "Ebû Hanîfe'nin tertibi vâcib gören görüşünü savunur. “Lâ harac” ifadesinin yalnızca günahı kaldırdığını, kefaretin ise ayrı bir mesele olduğunu açıklar." },
      { alim: "karadavi", metin: "Can güvenliğinin hacdaki vakit şartlarından önce geldiğini, izdiham koşullarında zevalden önce taşlamanın ve ruhsatların genişletilmesinin bir zorunluluk olduğunu savunur." }
    ],
    usul: ["kavram:ruhsat", "kavram:telfik", "kavram:makasid"],
    sorular: ["Hz. Peygamber'in bir fiili, onun bağlayıcı bir vakit veya şekil olduğunu tek başına gösterir mi? Fiilin delâletini nasıl belirlersin?", "“Lâ harac” ifadesi yalnızca günahı mı, yoksa fidyeyi de mi kaldırır? Bu soruya nasıl bir dilsel ve bağlamsal delille cevap verirsin?", "Kalabalık sebebiyle farklı mezheplerin ruhsatlarını birleştirmek ibadetin bütünlüğünü bozar mı?"]
  }
});
