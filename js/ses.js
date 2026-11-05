// Tecvid için ses: kârî kayıtları (everyayah.com, internet gerekir) ve kullanıcının kendi kayıtları (IndexedDB, cihazda kalır).
(function () {
  const KARILER = [
    { id: "Husary_Muallim_128kbps", ad: "Mahmûd Halîl el-Husarî (muallim / öğretici)" },
    { id: "Husary_128kbps", ad: "Mahmûd Halîl el-Husarî (mürettel)" },
    { id: "Minshawy_Mujawwad_192kbps", ad: "Muhammed Sıddîk el-Minşâvî (mücevved)" },
    { id: "Alafasy_128kbps", ad: "Mişârî Râşid el-Afâsî" }
  ];
  const pad = (n) => String(n).padStart(3, "0");
  const url = (kari, sure, ayet) => `https://everyayah.com/data/${kari}/${pad(sure)}${pad(ayet)}.mp3`;

  const getKari = () => { try { return localStorage.getItem("medrese.kari") || KARILER[0].id; } catch (e) { return KARILER[0].id; } };
  const setKari = (id) => { try { localStorage.setItem("medrese.kari", id); } catch (e) { /* yoksay */ } };

  // ── IndexedDB ──
  let dbp = null;
  function db() {
    if (!dbp) dbp = new Promise((res, rej) => {
      const r = indexedDB.open("medrese-ses", 1);
      r.onupgradeneeded = () => r.result.createObjectStore("kayit");
      r.onsuccess = () => res(r.result);
      r.onerror = () => rej(r.error);
    });
    return dbp;
  }
  async function tx(mode, fn) {
    const d = await db();
    return new Promise((res, rej) => {
      const t = d.transaction("kayit", mode), st = t.objectStore("kayit");
      const req = fn(st);
      t.oncomplete = () => res(req && req.result);
      t.onerror = () => rej(t.error);
    });
  }
  const get = (key) => tx("readonly", (s) => s.get(key)).catch(() => null);
  const put = (key, blob) => tx("readwrite", (s) => s.put(blob, key));
  const del = (key) => tx("readwrite", (s) => s.delete(key));
  const keys = () => tx("readonly", (s) => s.getAllKeys()).catch(() => []);

  // ── Kayıt ──
  const supported = () => !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia && window.MediaRecorder);
  async function startRecording(key) {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const rec = new MediaRecorder(stream);
    const chunks = [];
    rec.ondataavailable = (e) => e.data.size && chunks.push(e.data);
    const done = new Promise((res) => {
      rec.onstop = async () => {
        stream.getTracks().forEach((t) => t.stop());
        const blob = new Blob(chunks, { type: rec.mimeType || "audio/webm" });
        await put(key, blob);
        res(blob);
      };
    });
    rec.start();
    return { stop: () => { rec.stop(); return done; } };
  }

  // Tek bir çalar: yeni ses başlayınca öncekini durdur
  let current = null;
  function play(src, onEnd) {
    if (current) { current.pause(); current = null; }
    const a = new Audio(src);
    current = a;
    a.onended = () => { if (onEnd) onEnd(); };
    return a.play().then(() => a);
  }
  function stop() { if (current) { current.pause(); current = null; } }

  window.Ses = { KARILER, url, getKari, setKari, get, del, keys, supported, startRecording, play, stop };
})();
