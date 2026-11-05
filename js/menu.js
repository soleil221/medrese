// Soldan açılan çekmece menü.
(function () {
  const ac = document.getElementById("menuAc"), kapa = document.getElementById("menuKapa");
  const cek = document.getElementById("cekmece"), perde = document.getElementById("perde");
  if (!ac || !cek) return;
  let acik = false;

  function goster(v, odak) {
    if (v === acik) return;
    acik = v;
    document.body.classList.toggle("menu-acik", v);
    ac.setAttribute("aria-expanded", String(v));
    cek.setAttribute("aria-hidden", String(!v));
    if (v) {
      perde.hidden = false;
      requestAnimationFrame(() => perde.classList.add("gor"));
      const on = cek.querySelector("a.on") || cek.querySelector("a");
      setTimeout(() => (on || cek).focus({ preventScroll: true }), 180);
    } else {
      perde.classList.remove("gor");
      setTimeout(() => { if (!acik) perde.hidden = true; }, 250);
      if (odak) ac.focus({ preventScroll: true });
    }
  }

  ac.addEventListener("click", () => goster(true));
  kapa.addEventListener("click", () => goster(false, true));
  perde.addEventListener("click", () => goster(false, true));
  cek.addEventListener("click", (e) => { if (e.target.closest("a")) goster(false); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && acik) goster(false, true); });
  window.addEventListener("hashchange", () => goster(false));

  // Sola kaydırarak kapatma
  let x0 = null;
  cek.addEventListener("touchstart", (e) => { x0 = e.touches[0].clientX; }, { passive: true });
  cek.addEventListener("touchend", (e) => {
    if (x0 !== null && x0 - e.changedTouches[0].clientX > 60) goster(false);
    x0 = null;
  }, { passive: true });
})();
