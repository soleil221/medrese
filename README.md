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
- **Yedekleme** — JSON olarak dışa/içe aktarma
- **Çevrimdışı çalışma (PWA)** — telefona "Ana ekrana ekle" ile uygulama gibi kurulabilir; açık/koyu tema

## Çalıştırma

Derleme veya kurulum gerekmez. Herhangi bir statik sunucu yeterli:

```bash
python3 -m http.server 8000
```

Ardından `http://localhost:8000` adresini açın. (GitHub Pages ile de doğrudan yayınlanabilir.)

## Yapı

```
index.html          Uygulama iskeleti
css/style.css       Görünüm
js/data/klasik.js   Klasik medrese müfredatı (dersler, metinler, müellifler, önkoşullar)
js/data/modern.js   Çağdaş müfredat + klasik↔modern köprüleri + merhale adları
js/store.js         İlerleme, notlar ve günlük (localStorage)
js/app.js           Görünümler ve yönlendirme
sw.js               Çevrimdışı önbellek
```

Müfredatı genişletmek için yalnızca `js/data/*.js` dosyalarına yeni ders/metin eklemek yeterlidir.

> Kaynak listeleri öneri niteliğindedir; müellif nispetleri ve baskı bilgileri doğrulanmalıdır.
> Klasik geleneğe uygun olarak metinlerin bir hoca rehberliğinde okunması tavsiye edilir.
