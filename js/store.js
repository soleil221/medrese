// Kalıcı ilerleme verisi (tarayıcının localStorage'ında tutulur).
(function () {
  const KEY = "medrese.v1";
  const empty = () => ({ texts: {}, notes: {}, logs: [], dailyGoal: 60 });

  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      return raw ? Object.assign(empty(), JSON.parse(raw)) : empty();
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
