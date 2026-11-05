// Basit çevrimdışı önbellek: önce ağ, olmazsa önbellek.
const CACHE = "medrese-v4";
const ASSETS = ["./", "index.html", "css/style.css", "js/store.js", "js/app.js", "js/data/klasik.js", "js/data/modern.js", "js/data/dersler.js", "js/data/dersler-sarf-nahiv.js", "js/data/dersler-kafiye.js", "js/data/metinler.js", "js/data/sureler.js", "js/sarf.js", "js/features.js", "manifest.json", "icons/icon.svg"];

self.addEventListener("install", (e) => e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS))));
self.addEventListener("activate", (e) => e.waitUntil(
  caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
));
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    fetch(e.request)
      .then((r) => { const copy = r.clone(); caches.open(CACHE).then((c) => c.put(e.request, copy)); return r; })
      .catch(() => caches.match(e.request))
  );
});
