// Kalıcı ilerleme verisi (tarayıcının localStorage'ında tutulur).
(function () {
  const KEY = "medrese.v1";
  const empty = () => ({
    texts: {}, notes: {}, logs: [], dailyGoal: 60,
    lessons: {},   // "kursId/dersId": tamamlanma tarihi
    quiz: {},      // "kursId/dersId": en iyi yüzde
    cards: {},     // "kursId/dersId/i": { box, due }
    hifz: { pages: {}, newPerDay: 1, nearCount: 10, farPerDay: 20, order: "bastan" }
  });
  const INTERVALS = [0, 1, 3, 7, 16, 35]; // Leitner kutusu → gün

  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) return empty();
      const d = Object.assign(empty(), JSON.parse(raw));
      d.hifz = Object.assign(empty().hifz, d.hifz);
      return d;
    } catch (e) {
      return empty();
    }
  }

  let state = load();

  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { /* depolama yoksa yalnızca oturum içinde tutulur */ }
  }

  const todayStr = (d = new Date()) => {
    const z = (n) => String(n).padStart(2, "0");
    return `${d.getFullYear()}-${z(d.getMonth() + 1)}-${z(d.getDate())}`;
  };

  window.Store = {
    get state() { return state; },
    todayStr,

    // 0 = başlanmadı, 1 = okunuyor, 2 = tamamlandı
    textStatus(courseId, textId) { return state.texts[`${courseId}/${textId}`] || 0; },
    setTextStatus(courseId, textId, s) {
      const k = `${courseId}/${textId}`;
      if (s) state.texts[k] = s; else delete state.texts[k];
      save();
    },

    note(courseId) { return state.notes[courseId] || ""; },
    setNote(courseId, text) {
      if (text.trim()) state.notes[courseId] = text; else delete state.notes[courseId];
      save();
    },

    addLog(entry) {
      state.logs.push(Object.assign({ id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6) }, entry));
      save();
    },
    removeLog(id) { state.logs = state.logs.filter((l) => l.id !== id); save(); },

    setDailyGoal(m) { state.dailyGoal = Math.max(5, m | 0); save(); },

    minutesOn(date) { return state.logs.filter((l) => l.date === date).reduce((a, l) => a + l.minutes, 0); },

    streak() {
      const days = new Set(state.logs.map((l) => l.date));
      const d = new Date();
      if (!days.has(todayStr(d))) d.setDate(d.getDate() - 1); // bugün henüz çalışılmadıysa seri dünden sayılır
      let n = 0;
      while (days.has(todayStr(d))) { n++; d.setDate(d.getDate() - 1); }
      return n;
    },

    // ── Dersler ve sınavlar ──
    lessonDone(key) { return state.lessons[key]; },
    setLessonDone(key, on) { if (on) state.lessons[key] = todayStr(); else delete state.lessons[key]; save(); },
    quizBest(key) { return state.quiz[key]; },
    recordQuiz(key, p) { state.quiz[key] = Math.max(state.quiz[key] || 0, p); save(); },

    // ── Ezber kartları (Leitner) ──
    card(key) { return state.cards[key]; },
    addCards(keys) { keys.forEach((k) => { if (!state.cards[k]) state.cards[k] = { box: 0, due: todayStr() }; }); save(); },
    removeCards(prefix) { Object.keys(state.cards).forEach((k) => { if (k.startsWith(prefix + "/")) delete state.cards[k]; }); save(); },
    dueCards() { const t = todayStr(); return Object.keys(state.cards).filter((k) => state.cards[k].due <= t); },
    gradeCard(key, ok) {
      const c = state.cards[key]; if (!c) return;
      c.box = ok ? Math.min(5, c.box + 1) : 1;
      const d = new Date(); d.setDate(d.getDate() + (ok ? INTERVALS[c.box] : 1));
      c.due = todayStr(d);
      save();
    },

    // ── Hıfz ──
    page(n) { return state.hifz.pages[n]; },
    setPage(n, data) { if (data) state.hifz.pages[n] = data; else delete state.hifz.pages[n]; save(); },
    setHifz(opts) { Object.assign(state.hifz, opts); save(); },

    exportJSON() { return JSON.stringify(state, null, 2); },
    importJSON(text) {
      const data = JSON.parse(text);
      if (typeof data !== "object" || !data.texts || !Array.isArray(data.logs)) throw new Error("Geçersiz yedek dosyası");
      state = Object.assign(empty(), data);
      save();
    },
    reset() { state = empty(); save(); }
  };
})();
