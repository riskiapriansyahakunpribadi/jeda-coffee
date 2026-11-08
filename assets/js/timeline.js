/* ============================================================
   BAGIAN   : Script Halaman Cerita Kami (Timeline & Menu Andalan)
   FUNGSI   : Merender kartu perjalanan Jeda (2018-2026) ke dalam
              carousel scroll-snap, menyinkronkan titik tahun aktif,
              dan menampilkan 4 kartu Menu Andalan di beranda.
   CARA UBAH: Untuk mengubah isi tahun atau foto perjalanan, edit
              file `assets/data/timeline-data.js`.
   ============================================================ */

(function () {
  "use strict";

  /**
   * Tujuan   : Merender carousel timeline beserta tombol tahun di bawahnya,
   *            serta mengatur navigasi klik, scroll, drag, dan keyboard.
   * Parameter: Tidak ada
   * Contoh   : initTimelineCarousel()
   */
  function initTimelineCarousel() {
    var track = document.getElementById("timeline-track");
    var yearsNav = document.getElementById("timeline-years");
    var prevBtn = document.getElementById("timeline-prev");
    var nextBtn = document.getElementById("timeline-next");
    var items = window.JEDA_TIMELINE || [];

    if (!track || !yearsNav || !items.length) return;

    /* 1. Buat kartu timeline */
    track.innerHTML = items
      .map(function (item, idx) {
        var imgHTML = window.renderResponsiveImage
          ? window.renderResponsiveImage(item.imageKey, {
              width: 640,
              height: 800,
              lazy: true,
              altOverride: item.year + " - " + item.title
            })
          : "";

        return (
          '<article class="timeline-card" data-index="' +
          idx +
          '">' +
          '  <div class="timeline-card-media">' +
          imgHTML +
          "  </div>" +
          '  <div class="timeline-card-overlay">' +
          '    <span class="timeline-year-badge">' +
          item.year +
          "</span>" +
          '    <h3 class="timeline-card-title">' +
          item.title +
          "</h3>" +
          '    <p class="timeline-card-desc">' +
          item.desc +
          "</p>" +
          "  </div>" +
          "</article>"
        );
      })
      .join("");

    /* 2. Buat tombol indikator tahun di bawah carousel */
    yearsNav.innerHTML = items
      .map(function (item, idx) {
        return (
          '<button type="button" class="timeline-year-dot' +
          (idx === 0 ? " is-active" : "") +
          '" role="tab" aria-selected="' +
          (idx === 0 ? "true" : "false") +
          '" data-index="' +
          idx +
          '">' +
          '  <span class="dot-circle"></span>' +
          '  <span class="dot-label">' +
          item.year +
          "</span>" +
          "</button>"
        );
      })
      .join("");

    var cards = track.querySelectorAll(".timeline-card");
    var dots = yearsNav.querySelectorAll(".timeline-year-dot");
    var activeIndex = 0;

    /**
     * Tujuan   : Memperbarui status aktif pada titik tahun dan tombol panah.
     * Parameter: index (Number indeks kartu aktif)
     */
    function setActiveYear(index) {
      activeIndex = Math.max(0, Math.min(index, items.length - 1));
      dots.forEach(function (dot, i) {
        var isCurrent = i === activeIndex;
        dot.classList.toggle("is-active", isCurrent);
        dot.setAttribute("aria-selected", isCurrent ? "true" : "false");
      });
      if (prevBtn) prevBtn.disabled = activeIndex === 0;
      if (nextBtn) nextBtn.disabled = activeIndex === items.length - 1;
    }

    /**
     * Tujuan   : Menggulir carousel ke kartu dengan indeks tertentu.
     * Parameter: index (Number indeks kartu tujuan)
     */
    function scrollToCard(index) {
      var targetIndex = Math.max(0, Math.min(index, cards.length - 1));
      var card = cards[targetIndex];
      if (!card) return;
      var leftPos = card.offsetLeft - track.offsetLeft;
      track.scrollTo({ left: leftPos, behavior: "smooth" });
      setActiveYear(targetIndex);
    }

    /* 3. Klik pada titik tahun */
    dots.forEach(function (dot) {
      dot.addEventListener("click", function () {
        var idx = parseInt(dot.getAttribute("data-index"), 10) || 0;
        scrollToCard(idx);
      });
    });

    /* 4. Tombol panah kiri dan kanan */
    if (prevBtn) {
      prevBtn.addEventListener("click", function () {
        scrollToCard(activeIndex - 1);
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener("click", function () {
        scrollToCard(activeIndex + 1);
      });
    }

    /* 5. Navigasi panah keyboard saat fokus berada di track */
    track.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        scrollToCard(activeIndex + 1);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        scrollToCard(activeIndex - 1);
      }
    });

    /* 6. Deteksi kartu aktif saat pengguna menggeser track */
    var scrollTimer = null;
    track.addEventListener(
      "scroll",
      function () {
        if (scrollTimer) window.clearTimeout(scrollTimer);
        scrollTimer = window.setTimeout(function () {
          var trackLeft = track.scrollLeft;
          var closestIdx = 0;
          var minDiff = Infinity;

          cards.forEach(function (card, i) {
            var cardLeft = card.offsetLeft - track.offsetLeft;
            var diff = Math.abs(cardLeft - trackLeft);
            if (diff < minDiff) {
              minDiff = diff;
              closestIdx = i;
            }
          });

          setActiveYear(closestIdx);
        }, 60);
      },
      { passive: true }
    );

    /* 7. Aktifkan geser dengan mouse (drag) */
    if (window.enableTrackDrag) {
      window.enableTrackDrag(track);
    }

    setActiveYear(0);
  }

  /**
   * Tujuan   : Menampilkan 4 kartu Menu Andalan di halaman Cerita Kami.
   * Parameter: Tidak ada
   * Contoh   : renderFeaturedMenu()
   */
  function renderFeaturedMenu() {
    var grid = document.getElementById("featured-menu-grid");
    var allMenu = window.JEDA_MENU_ITEMS || [];
    if (!grid || !allMenu.length || !window.JedaComponents) return;

    var featured = allMenu
      .filter(function (item) {
        return item.featured === true;
      })
      .slice(0, 4);

    if (featured.length < 4) {
      featured = allMenu.slice(0, 4);
    }

    grid.innerHTML = featured
      .map(function (item, idx) {
        return window.JedaComponents.createProductCardHTML(item, idx);
      })
      .join("");

    if (window.observeReveals) {
      window.observeReveals(grid);
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    initTimelineCarousel();
    renderFeaturedMenu();
  });
})();