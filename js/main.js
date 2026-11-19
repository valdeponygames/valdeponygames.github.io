/* Pinta la web a partir de js/config.js. No hace falta tocar este archivo. */
(function () {
  "use strict";

  // Crea un elemento con atributos e hijos (evita meter HTML a mano)
  function el(tag, attrs, children) {
    const node = document.createElement(tag);
    Object.entries(attrs || {}).forEach(([k, v]) => {
      if (v === null || v === undefined || v === false) return;
      if (k === "text") node.textContent = v;
      else if (k === "style") node.style.cssText = v;
      else if (k.startsWith("on")) node.addEventListener(k.slice(2), v);
      else node.setAttribute(k, v);
    });
    (children || []).forEach((c) => c && node.appendChild(c));
    return node;
  }

  function playUrl(p) {
    return "https://play.google.com/store/apps/details?id=" + encodeURIComponent(p.packageId);
  }

  // Textos generales
  document.querySelectorAll('[data-site="developer"]').forEach((n) => (n.textContent = SITE.developer));
  document.querySelectorAll('[data-site="email"]').forEach((n) => (n.textContent = SITE.email));
  document.getElementById("tagline").textContent = SITE.tagline;
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("email-btn").href = "mailto:" + SITE.email;

  const about = document.getElementById("about-text");
  SITE.about.forEach((t) => about.appendChild(el("p", { text: t })));

  if (SITE.googlePlayDeveloperUrl) {
    const b = document.getElementById("play-dev");
    b.href = SITE.googlePlayDeveloperUrl;
    b.hidden = false;
  }

  // Redes sociales
  const socialNames = { youtube: "▶ YouTube", instagram: "📸 Instagram", tiktok: "♪ TikTok", x: "X", itch: "🎮 itch.io" };
  const social = document.getElementById("social");
  Object.entries(SITE.social || {}).forEach(([key, url]) => {
    if (url) social.appendChild(el("a", { href: url, target: "_blank", rel: "noopener", text: socialNames[key] || key }));
  });

  /* ---------- Galería de capturas ---------- */
  const gallery = el("dialog", { class: "gallery", "aria-label": "Capturas" });
  const gTitle = el("h3", { class: "gallery__title" });
  const gCount = el("span", { class: "gallery__count" });
  const gTrack = el("div", { class: "gallery__track" });
  const gCaption = el("p", { class: "gallery__caption" });
  const gPrev = el("button", { class: "gallery__nav gallery__nav--prev", "aria-label": "Anterior", text: "‹" });
  const gNext = el("button", { class: "gallery__nav gallery__nav--next", "aria-label": "Siguiente", text: "›" });
  const gClose = el("button", { class: "gallery__close", "aria-label": "Cerrar", text: "✕" });
  gallery.append(
    el("div", { class: "gallery__head" }, [gTitle, gCount, gClose]),
    el("div", { class: "gallery__stage" }, [gPrev, gTrack, gNext]),
    gCaption
  );
  document.body.appendChild(gallery);

  let current = 0;
  function slides() { return Array.from(gTrack.children); }
  function updateInfo() {
    const s = slides();
    if (!s.length) return;
    gCount.textContent = current + 1 + " / " + s.length;
    gCaption.textContent = s[current].querySelector("img").alt;
    gPrev.disabled = current === 0;
    gNext.disabled = current === s.length - 1;
  }
  function goTo(i, smooth) {
    const s = slides();
    current = Math.max(0, Math.min(s.length - 1, i));
    const target = s[current];
    const left = target.offsetLeft - gTrack.offsetLeft - (gTrack.clientWidth - target.offsetWidth) / 2;
    gTrack.scrollTo({ left: Math.max(0, left), behavior: smooth === false ? "instant" : "smooth" });
    updateInfo();
  }
  gTrack.addEventListener("scroll", () => {
    const s = slides();
    const center = gTrack.scrollLeft + gTrack.clientWidth / 2;
    let best = 0, dist = Infinity;
    s.forEach((n, i) => {
      const d = Math.abs(n.offsetLeft - gTrack.offsetLeft + n.offsetWidth / 2 - center);
      if (d < dist) { dist = d; best = i; }
    });
    if (best !== current) { current = best; updateInfo(); }
  }, { passive: true });
  gPrev.addEventListener("click", () => goTo(current - 1));
  gNext.addEventListener("click", () => goTo(current + 1));
  gClose.addEventListener("click", () => gallery.close());
  gallery.addEventListener("click", (e) => { if (e.target === gallery) gallery.close(); });
  gallery.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") { e.preventDefault(); goTo(current - 1); }
    if (e.key === "ArrowRight") { e.preventDefault(); goTo(current + 1); }
  });
  gallery.addEventListener("close", () => { if (!gallery.open) document.body.classList.remove("no-scroll"); });

  function openGallery(p, start) {
    gTitle.textContent = p.name;
    gTrack.replaceChildren(
      ...p.screenshots.map(([file, alt]) =>
        el("figure", { class: "gallery__slide" }, [el("img", { src: p.folder + file, alt: alt, loading: "lazy", decoding: "async" })])
      )
    );
    document.body.classList.add("no-scroll");
    gallery.showModal();
    gTrack.scrollLeft = 0;
    current = 0;
    updateInfo();
    // Espera a que carguen las primeras imágenes para centrar bien la inicial
    const first = gTrack.querySelector("img");
    const center = () => goTo(start || 0, false);
    if (first && !first.complete) first.addEventListener("load", center, { once: true });
    requestAnimationFrame(center);
  }

  /* ---------- Tarjetas de proyectos ---------- */
  const grid = document.getElementById("project-grid");
  const privacyLinks = document.getElementById("privacy-links");

  SITE.projects.forEach((p) => {
    const shots = p.screenshots || [];
    const actions = [];
    if (p.published && p.packageId) {
      actions.push(
        el("a", { class: "btn btn--play", href: playUrl(p), target: "_blank", rel: "noopener" }, [
          el("span", { class: "btn--play__icon", "aria-hidden": "true", text: "▶" }),
          el("span", {}, [el("small", { text: "Disponible en" }), el("strong", { text: "Google Play" })])
        ])
      );
    }
    if (p.playInBrowserUrl) {
      actions.push(el("a", { class: "btn btn--primary", href: p.playInBrowserUrl, target: "_blank", rel: "noopener", text: "🫒 Jugar en el navegador" }));
    }
    if (shots.length) {
      actions.push(el("button", { class: "btn btn--shots", type: "button", text: "📷 Ver capturas (" + shots.length + ")", onclick: () => openGallery(p, 0) }));
    }

    const badge = p.published
      ? el("span", { class: "badge badge--ok", text: "Disponible" })
      : el("span", { class: "badge", text: p.status || "Próximamente" });

    const coverImg = el("img", { src: p.folder + p.cover, alt: p.name + ": " + p.type.toLowerCase(), width: "1200", height: "630", loading: "lazy" });
    const cover = shots.length
      ? el("button", { class: "card__cover", type: "button", style: "--c:" + (p.color || "#333"), "aria-label": "Ver capturas de " + p.name, onclick: () => openGallery(p, 0) }, [
          coverImg,
          el("span", { class: "card__zoom", "aria-hidden": "true", text: "📷 Ver capturas" })
        ])
      : el("div", { class: "card__cover", style: "--c:" + (p.color || "#333") }, [coverImg]);

    const card = el("article", { class: "card", id: p.id }, [
      cover,
      el("div", { class: "card__body" }, [
        el("div", { class: "card__meta" }, [el("span", { class: "card__type", text: p.type }), badge]),
        el("div", { class: "card__head" }, [
          el("img", { class: "card__icon", src: p.folder + p.icon, alt: "", width: "52", height: "52", loading: "lazy", style: p.iconBg ? "background:" + p.iconBg + ";padding:4px" : null }),
          el("h3", { class: "card__title", text: p.name })
        ]),
        el("p", { class: "card__desc", text: p.description }),
        el("ul", { class: "chips", "aria-label": "Idiomas" }, (p.languages || []).map((l) => el("li", { text: l }))),
        el("div", { class: "card__actions" }, actions),
        p.privacy ? el("a", { class: "link", href: p.privacy, text: "Política de privacidad" }) : null
      ])
    ]);
    grid.appendChild(card);

    if (p.privacy) privacyLinks.appendChild(el("a", { href: p.privacy, text: "Privacidad · " + p.name }));
  });
})();
