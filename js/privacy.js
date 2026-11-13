/* Rellena el nombre del estudio y el email en las políticas de privacidad desde js/config.js */
(function () {
  if (typeof SITE === "undefined") return;
  document.querySelectorAll('[data-site="developer"]').forEach((n) => (n.textContent = SITE.developer));
  document.querySelectorAll('[data-site="email"]').forEach((n) => {
    n.textContent = SITE.email;
    if (n.tagName === "A") n.href = "mailto:" + SITE.email;
  });
})();
