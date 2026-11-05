# Medrese — Kişisel İslami İlimler Takip Uygulaması

Klasik medrese müfredatını (Osmanlı/Anadolu geleneği) ve son dönem din eğitimi müfredatını
(ilahiyat fakültesi ders yapısı) tek bir yolda birleştiren, kişisel ilerleme takip uygulaması.

## Özellikler

- **Üç müfredat görünümü**
  - **Klasik Medrese** — 4 merhale: Mukaddimât → Alet İlimleri I-II → Âlî İlimler
    (Sarf, Nahiv, Mantık, Âdâb-ı Bahs/Vaz', Belâgat, Fıkıh, Usûl, Ferâiz, Kelam, Tefsir, Hadis, Tasavvuf…)
  - **Çağdaş Müfredat** — 4 aşama: Temel → Temel İslam Bilimleri → Felsefe ve Din Bilimleri → Çağdaş Meseleler
  - **Birleşik Yol** — her merhalede klasik ve çağdaş dersler yan yana; birbirini tamamlayan dersler ⇄ ile bağlı
- **Metin bazlı ilerleme** — her kitap için *Başlanmadı / Okunuyor / Tamamlandı*; alternatif/ek metinler ayrı işaretli
- **Önkoşul önerileri** — örn. Usûl-i Fıkıh öncesi Mantık ve Nahiv
- **Ders notları** — her ders için otomatik kaydedilen not alanı
- **Çalışma günlüğü** — günlük süre hedefi, seri (streak), son 14 günün grafiği
- **Arama** — ders, kitap veya müellif adına göre
- **Ders içerikleri** — konu anlatımları (tablolar, Arapça örnekler) ve her derse ait ezber kartları:
  Tecvid, İlmihal, Akaid, Sarf, Nahiv, Mantık, Siyer, Usûl-i Hadis, Belâgat, Ferâiz, Usûl-i Fıkıh,
  Kur'an Tarihi, Mâtürîdiyye–Eş'ariyye (23 ders, ~200 kart)
- **Sınav** — her dersin kartlarından üretilen çoktan seçmeli sınav; en iyi puan saklanır
- **Aralıklı tekrar** — Leitner sistemi (1, 3, 7, 16, 35 gün); bilinmeyen kart başa döner
- **Çekim aracı** — 14 sîgada mâzî/muzâri (ma'lûm–meçhul), emir ve nehiy; ism-i fâil/mef'ûl/masdar:
  - Sülâsî mücerred 6 bab: sâlim, mehmûz (hemze imlâsı dahil), muzâaf, misâl, ecvef, nâkıs
  - Sülâsî mezîd 8 bab (sâlim): if'âl, tef'îl, mufâale, ifti'âl (ibdâl/idğam dahil), infi'âl, tefa''ul, tefâul, istif'âl
  - Emsile-i muhtelife (sâlim kökler); “ezber modu” ile hücreleri gizleyip kendini sınama
  - `#/cekim/KÖK/BAB` bağlantısıyla doğrudan açılır (ör. `#/cekim/قول/1`, `#/cekim/خرج/istifal`)
- **Sarf ve Nahiv dersleri** — Emsile, mehmûz-muzâaf, misâl-ecvef, nâkıs (motorla üretilen tablolar);
  isim/fiil cümlesi, harf-i cerler, kâne ve inne grupları, muzâriyi nasb/cezm edenler; **i'râb alıştırmaları**
- **Metinler** — Arapça ve Türkçe yan yana; tercümeyi veya harekeleri gizleme; kelime notlarından çekim aracına geçiş.
  Emsile metni ve Kırk Hadis'ten 15 hadis (tekrar kartı olarak da eklenebilir)
- **Hıfz** — 604 sayfalık mushaf haritası (zayıf/orta/sağlam), günlük plan: yeni ezber + yakın tekrar
  (son ezberlenen sayfalar) + uzak tekrar (sayfa usulü: en eski ve zayıf sayfalar önce; cüz usulü: her gün sıradaki cüz);
  sure adları, sure veya cüz bazında toplu işaretleme; baştan veya 30. cüzden geriye ezber sırası
- **Yedekleme** — JSON olarak dışa/içe aktarma
- **Çevrimdışı çalışma (PWA)** — telefona "Ana ekrana ekle" ile uygulama gibi kurulabilir; açık/koyu tema

## Çalıştırma

Derleme veya kurulum gerekmez. Herhangi bir statik sunucu yeterli:

```bash
python3 -m http.server 8000
```

Ardından `http://localhost:8000` adresini açın. (GitHub Pages ile de doğrudan yayınlanabilir.)

## Testler

```bash
node tests/sarf.test.js
```

Çekim motorunu bilinen ~200 çekime karşı doğrular.

## Yapı

```
index.html          Uygulama iskeleti
css/style.css       Görünüm
js/data/klasik.js   Klasik medrese müfredatı (dersler, metinler, müellifler, önkoşullar)
js/data/modern.js   Çağdaş müfredat + klasik↔modern köprüleri + merhale adları
js/data/dersler.js  Ders içerikleri ve ezber kartları
js/data/dersler-sarf-nahiv.js  Sarf/Nahiv derinleştirme dersleri ve i'râb alıştırmaları
js/data/metinler.js Okuma metinleri (Emsile, Kırk Hadis seçmeleri)
js/data/sureler.js  114 surenin Medine mushafındaki başlangıç sayfaları
js/store.js         İlerleme, notlar, günlük, kartlar, hıfz (localStorage)
js/sarf.js          Çekim (tasrîf) motoru
js/features.js      Ders, sınav, tekrar, hıfz ve çekim ekranları
js/app.js           Panel, müfredat, günlük, ayarlar ve yönlendirme
sw.js               Çevrimdışı önbellek
```

Müfredatı genişletmek için yalnızca `js/data/*.js` dosyalarına yeni ders/metin eklemek yeterlidir.
Yeni bir konu anlatımı eklemek için `js/data/dersler.js` içinde ilgili ders kimliğinin altına
`{ id, title, body, cards: [[ön, arka], ...] }` biçiminde bir kayıt eklenir.

> Kaynak listeleri öneri niteliğindedir; müellif nispetleri ve baskı bilgileri doğrulanmalıdır.
> Klasik geleneğe uygun olarak metinlerin bir hoca rehberliğinde okunması tavsiye edilir.
