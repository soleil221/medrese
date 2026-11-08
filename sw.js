// Basit çevrimdışı önbellek: önce ağ, olmazsa önbellek.
const CACHE = "medrese-v32";
const ASSETS = ["./", "index.html", "css/style.css", "js/store.js", "js/app.js", "js/data/klasik.js", "js/data/modern.js", "js/data/dersler.js", "js/data/dersler-sarf-nahiv.js", "js/data/dersler-kafiye.js", "js/data/dersler-belagat.js", "js/data/dersler-mantik.js", "js/data/dersler-fikih.js", "js/data/tecvid-ayetler.js", "js/ses.js", "js/data/akaid-nesefi.js", "js/data/akaid-nesefi-2.js", "js/data/dersler-kelam-2.js", "js/data/dersler-hadisusul.js", "js/data/dersler-siyer.js", "js/data/eyyuhel-veled.js", "js/data/dersler-tefsir.js", "js/data/dersler-tasavvuf.js", "js/data/tahlil-amme.js", "js/data/dersler-kelam.js", "js/data/dersler-usul.js", "js/views-hafta-tahlil.js", "js/data/alimler.js", "js/data/meseleler-ibadet.js", "js/data/meseleler-muamelat.js", "js/data/meseleler-akaid.js", "js/data/kuran-anlam.js", "js/data/yollar.js", "js/data/yollar-2.js", "js/data/meseleler-yol.js", "js/data/meseleler-3.js", "js/data/derinlik-yol.js", "js/data/derinlik-3.js", "js/data/derinlik-4.js", "js/data/yollar-ek.js", "js/data/yollar-ek-2.js", "js/data/alimler-2.js", "js/data/alimler-ek.js", "js/data/alimler-derin-1.js", "js/data/alimler-derin-2.js", "js/data/alimler-derin-3.js", "js/data/alimler-derin-4.js", "js/data/alimler-yeni-1.js", "js/data/alimler-yeni-2.js", "js/data/alimler-yeni-3.js", "js/data/alimler-yeni-4.js", "js/data/alimler-yeni-5.js", "js/data/alimler-yeni-6.js", "js/data/alimler-yeni-7.js", "js/data/alimler-yeni-8.js", "js/data/alimler-yeni-9.js", "js/data/alimler-yeni-yukle.js", "js/data/meseleler-ibadet-2.js", "js/data/meseleler-aile.js", "js/data/meseleler-akaid-2.js", "js/data/meseleler-cagdas.js", "js/data/kavramlar.js", "js/data/derinlik-ibadet.js", "js/data/derinlik-muamelat.js", "js/data/derinlik-akaid.js", "js/data/derinlik-cagdas.js", "js/data/konular.js", "js/data/sozler.js", "js/data/rehberler.js", "js/data/derinlik-kavram.js", "js/data/kavramlar-2.js", "js/data/derinlik-konu.js", "js/data/konu-derin.js", "js/data/konu-derin-2.js", "js/data/sozler-2.js", "js/data/sozler-3.js", "js/data/soz-derin.js", "js/data/rehberler-2.js", "js/data/rehberler-3.js", "js/data/rehberler-4.js", "js/data/rehber-derin.js", "js/merkez.js", "js/menu.js", "js/data/kuran-anlam-2.js", "js/data/sure-liste.js", "js/data/metinler.js", "js/data/sureler.js", "js/sarf.js", "js/features.js", "manifest.json", "icons/icon.svg"];

self.addEventListener("install", (e) => e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS))));
self.addEventListener("activate", (e) => e.waitUntil(
  caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
));
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  if (new URL(e.request.url).origin !== self.location.origin) return; // kârî sesleri vb. dış kaynaklar önbelleğe alınmaz
  e.respondWith(
    fetch(e.request)
      .then((r) => { const copy = r.clone(); caches.open(CACHE).then((c) => c.put(e.request, copy)); return r; })
      .catch(() => caches.match(e.request))
  );
});
