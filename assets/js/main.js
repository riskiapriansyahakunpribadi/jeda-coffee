/* ============================================================
   BAGIAN   : Script Utama Website (Main JS)
   FUNGSI   : Mengatur fungsi gambar & fallback SVG, interaksi
              header saat scroll, drawer menu mobile, animasi
              IntersectionObserver, counter statistik, dan tombol
              kembali ke atas.
   CARA UBAH: Fungsi `getImage(key)` di bawah terhubung langsung
              dengan `assets/data/images.js`.
   ============================================================ */

(function () {
  "use strict";

  /**
   * Tujuan   : Mengambil objek gambar { url, alt, fallback } dari
   *            `window.JEDA_IMAGES` berdasarkan kunci (key).
   * Parameter: key (String nama kunci di images.js)
   * Contoh   : var hero = window.getImage("hero_cerita");
   */
  window.getImage = function (key) {
    var repo = window.JEDA_IMAGES || {};
    if (key && repo[key]) {
      return repo[key];
    }
    return {
      url: "",
      alt: "Ilustrasi sajian Jeda Coffee",
      fallback: "scene"
    };
  };

  /**
   * Tujuan   : Menghasilkan ilustrasi SVG garis (stroke) untuk fallback
   *            ketika gambar kosong atau gagal dimuat.
   * Parameter: type ("cold" | "hot" | "food" | "scene")
   * Contoh   : window.getFallbackSvg("cold")
   */
  window.getFallbackSvg = function (type) {
    if (type === "hot") {
      return (
        '<svg class="img-fallback-svg" viewBox="0 0 96 96" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
        '<path d="M24 40h40v22a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16V40z"/>' +
        '<path d="M64 44h6a8 8 0 0 1 0 16h-6"/>' +
        '<line x1="20" y1="82" x2="68" y2="82"/>' +
        '<path d="M36 28c0-4 4-6 4-10"/>' +
        '<path d="M50 28c0-4 4-6 4-10"/>' +
        "</svg>"
      );
    }
    if (type === "food") {
      return (
        '<svg class="img-fallback-svg" viewBox="0 0 96 96" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
        '<ellipse cx="48" cy="64" rx="34" ry="12"/>' +
        '<path d="M26 58c4-16 16-24 22-24s18 8 22 24"/>' +
        '<path d="M38 44c4-4 16-4 20 0"/>' +
        "</svg>"
      );
    }
    if (type === "cold") {
      return (
        '<svg class="img-fallback-svg" viewBox="0 0 96 96" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
        '<path d="M28 32h40l-4 50H32L28 32z"/>' +
        '<path d="M24 32h48"/>' +
        '<path d="M32 32c2-10 10-16 16-16s14 6 16 16"/>' +
        '<line x1="48" y1="12" x2="54" y2="48"/>' +
        "</svg>"
      );
    }
    /* Default: "scene" (cangkir kopi dengan simbol pause Jeda) */
    return (
      '<svg class="img-fallback-svg" viewBox="0 0 96 96" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      '<rect x="22" y="22" width="52" height="52" rx="14"/>' +
      '<line x1="42" y1="36" x2="42" y2="60"/>' +
      '<line x1="54" y1="36" x2="54" y2="60"/>' +
      "</svg>"
    );
  };

  /**
   * Tujuan   : Mengganti elemen `<img>` yang gagal dimuat dengan blok
   *            gradasi dan ikon SVG cangkir agar tidak ada ikon gambar rusak.
   * Parameter: imgEl (HTMLImageElement), fallbackType (String)
   * Contoh   : window.handleImageError(this, 'cold')
   */
  window.handleImageError = function (imgEl, fallbackType) {
    if (!imgEl || !imgEl.parentNode) return;
    var wrapper = document.createElement("div");
    wrapper.className = "img-fallback";
    wrapper.setAttribute("role", "img");
    wrapper.setAttribute("aria-label", imgEl.getAttribute("alt") || "Ilustrasi Jeda Coffee");
    wrapper.innerHTML = window.getFallbackSvg(fallbackType || "scene");
    imgEl.parentNode.replaceChild(wrapper, imgEl);
  };

  /**
   * Tujuan   : Membuat tag `<img>` lengkap dengan atribut performa
   *            (width, height, loading, decoding) dan fallback otomatis.
   * Parameter: key (String kunci di images.js), opts (Object opsi)
   * Contoh   : window.renderResponsiveImage("hero_cerita", { width: 800, height: 600, lazy: false })
   */
  window.renderResponsiveImage = function (key, opts) {
    var options = opts || {};
    var data = window.getImage(key);
    var width = options.width || 800;
    var height = options.height || 600;
    var loadingAttr = options.lazy === false ? 'loading="eager" fetchpriority="high"' : 'loading="lazy"';
    var altText = (options.altOverride || data.alt || "Foto Jeda Coffee").replace(/"/g, "&quot;");
    var fallbackType = data.fallback || "scene";

    if (!data.url || data.url.trim() === "") {
      return (
        '<div class="img-fallback" role="img" aria-label="' +
        altText +
        '">' +
        window.getFallbackSvg(fallbackType) +
        "</div>"
      );
    }

    return (
      '<img src="' +
      data.url +
      '" alt="' +
      altText +
      '" width="' +
      width +
      '" height="' +
      height +
      '" ' +
      loadingAttr +
      ' decoding="async" onerror="window.handleImageError(this, \'' +
      fallbackType +
      "')\">"
    );
  };

  /**
   * Tujuan   : Mengisi semua elemen `<div data-image-slot="nama_key">`
   *            di halaman HTML dengan gambar dari `images.js`.
   * Parameter: Tidak ada
   * Contoh   : hydrateImageSlots()
   */
  function hydrateImageSlots() {
    var slots = document.querySelectorAll("[data-image-slot]");
    slots.forEach(function (slot) {
      var key = slot.getAttribute("data-image-slot");
      var w = slot.getAttribute("data-width") || 800;
      var h = slot.getAttribute("data-height") || 600;
      var eager = slot.getAttribute("data-eager") === "true";
      slot.innerHTML = window.renderResponsiveImage(key, {
        width: w,
        height: h,
        lazy: !eager
      });
    });
  }

  /**
   * Tujuan   : Mengatur interaksi buka/tutup menu hamburger di mobile,
   *            termasuk penutupan dengan tombol Escape.
   * Parameter: Tidak ada
   * Contoh   : initMobileMenu()
   */
  function initMobileMenu() {
    var toggleBtn = document.getElementById("nav-toggle-btn");
    var closeBtn = document.getElementById("nav-close-btn");
    var backdrop = document.getElementById("mobile-nav-backdrop");
    var drawer = document.getElementById("mobile-nav-drawer");

    if (!toggleBtn || !drawer || !backdrop) return;

    function openMenu() {
      toggleBtn.setAttribute("aria-expanded", "true");
      drawer.setAttribute("aria-hidden", "false");
      drawer.classList.add("is-open");
      backdrop.classList.add("is-open");
      document.body.classList.add("menu-open");
      if (closeBtn) closeBtn.focus();
    }

    function closeMenu() {
      toggleBtn.setAttribute("aria-expanded", "false");
      drawer.setAttribute("aria-hidden", "true");
      drawer.classList.remove("is-open");
      backdrop.classList.remove("is-open");
      document.body.classList.remove("menu-open");
      toggleBtn.focus();
    }

    toggleBtn.addEventListener("click", function () {
      var isExpanded = toggleBtn.getAttribute("aria-expanded") === "true";
      if (isExpanded) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    if (closeBtn) {
      closeBtn.addEventListener("click", closeMenu);
    }

    backdrop.addEventListener("click", closeMenu);

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && drawer.classList.contains("is-open")) {
        closeMenu();
      }
    });
  }

  /**
   * Tujuan   : Mengatur efek bayangan header saat scroll melewati 20px
   *            dan memunculkan tombol kembali ke atas setelah 400px.
   * Parameter: Tidak ada
   * Contoh   : initScrollUI()
   */
  function initScrollUI() {
    var headerEl = document.getElementById("site-header");
    var backToTopBtn = document.getElementById("back-to-top-btn");

    function onScroll() {
      var y = window.scrollY || window.pageYOffset;
      if (headerEl) {
        if (y > 20) {
          headerEl.classList.add("is-scrolled");
        } else {
          headerEl.classList.remove("is-scrolled");
        }
      }
      if (backToTopBtn) {
        if (y > 400) {
          backToTopBtn.classList.add("is-visible");
        } else {
          backToTopBtn.classList.remove("is-visible");
        }
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    if (backToTopBtn) {
      backToTopBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  }

  /**
   * Tujuan   : Mengamati elemen `[data-reveal]` dengan IntersectionObserver
   *            agar muncul satu kali dengan jeda bergiliran 60ms per grup.
   * Parameter: rootContainer (Opsional, elemen induk yang baru dirender)
   * Contoh   : window.observeReveals()
   */
  window.observeReveals = function (rootContainer) {
    var scope = rootContainer || document;
    var elements = scope.querySelectorAll("[data-reveal]:not(.is-visible)");
    if (!elements.length) return;

    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !("IntersectionObserver" in window)) {
      elements.forEach(function (el) {
        el.classList.add("is-visible");
      });
      return;
    }

    /* Berikan jeda 60ms otomatis untuk elemen berurutan dalam satu parent */
    var groups = new Map();
    elements.forEach(function (el) {
      if (!el.style.getPropertyValue("--reveal-delay")) {
        var parent = el.parentElement;
        var count = groups.get(parent) || 0;
        el.style.setProperty("--reveal-delay", count * 60 + "ms");
        groups.set(parent, count + 1);
      }
    });

    var observer = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -30px 0px" }
    );

    elements.forEach(function (el) {
      observer.observe(el);
    });
  };

  /**
   * Tujuan   : Menjalankan animasi angka naik dari 0 ke nilai akhir
   *            selama 1,6 detik saat bagian statistik terlihat di layar.
   * Parameter: Tidak ada
   * Contoh   : initCounters()
   */
  function initCounters() {
    var counters = document.querySelectorAll("[data-counter]");
    if (!counters.length) return;

    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function formatNumber(num, suffix) {
      return new Intl.NumberFormat("id-ID").format(Math.floor(num)) + (suffix || "");
    }

    function animateCounter(el) {
      var target = parseInt(el.getAttribute("data-counter"), 10) || 0;
      var suffix = el.getAttribute("data-suffix") || "";

      if (reduceMotion) {
        el.textContent = formatNumber(target, suffix);
        return;
      }

      var duration = 1600;
      var startTime = null;

      function step(timestamp) {
        if (!startTime) startTime = timestamp;
        var progress = Math.min((timestamp - startTime) / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = formatNumber(eased * target, suffix);

        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          el.textContent = formatNumber(target, suffix);
        }
      }

      window.requestAnimationFrame(step);
    }

    if (!("IntersectionObserver" in window)) {
      counters.forEach(animateCounter);
      return;
    }

    var observer = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.35 }
    );

    counters.forEach(function (el) {
      observer.observe(el);
    });
  }

  /**
   * Tujuan   : Mengaktifkan interaksi tap pada kartu produk di layar sentuh
   *            agar deskripsi singkat muncul tanpa membuka modal.
   * Parameter: Tidak ada
   * Contoh   : initProductCardTap()
   */
  function initProductCardTap() {
    document.addEventListener("click", function (e) {
      var card = e.target.closest(".product-card");
      var allCards = document.querySelectorAll(".product-card.is-tapped");

      allCards.forEach(function (c) {
        if (c !== card) c.classList.remove("is-tapped");
      });

      if (card) {
        card.classList.toggle("is-tapped");
      }
    });
  }

  /**
   * Tujuan   : Mengaktifkan drag mouse dan tombol panah pada semua
   *            komponen `.snap-track` (carousel).
   * Parameter: trackEl (HTMLElement)
   * Contoh   : window.enableTrackDrag(trackElement)
   */
  window.enableTrackDrag = function (trackEl) {
    if (!trackEl) return;
    var isDown = false;
    var startX = 0;
    var scrollLeft = 0;

    trackEl.addEventListener("mousedown", function (e) {
      isDown = true;
      trackEl.classList.add("is-dragging");
      startX = e.pageX - trackEl.offsetLeft;
      scrollLeft = trackEl.scrollLeft;
    });

    window.addEventListener("mouseup", function () {
      if (!isDown) return;
      isDown = false;
      trackEl.classList.remove("is-dragging");
    });

    trackEl.addEventListener("mousemove", function (e) {
      if (!isDown) return;
      e.preventDefault();
      var x = e.pageX - trackEl.offsetLeft;
      var walk = (x - startX) * 1.4;
      trackEl.scrollLeft = scrollLeft - walk;
    });
  };

  /* Inisialisasi saat DOM selesai dimuat */
  document.addEventListener("DOMContentLoaded", function () {
    document.body.classList.add("page-loaded");

    if (window.JedaComponents) {
      window.JedaComponents.renderHeader();
      window.JedaComponents.renderFooter();
    }

    hydrateImageSlots();
    initMobileMenu();
    initScrollUI();
    initCounters();
    initProductCardTap();
    window.observeReveals();
  });
})();