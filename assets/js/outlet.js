/* ============================================================
   BAGIAN   : Script Pencari Outlet & Peta Interaktif (Outlet JS)
   FUNGSI   : Merender chip filter kota, menyaring daftar gerai
              secara langsung berdasarkan input pencarian, dan
              memperbarui lokasi iframe Google Maps saat kartu diklik.
   CARA UBAH: Untuk mengubah daftar gerai, edit langsung di dalam
              file `assets/data/outlets-data.js`.
   ============================================================ */

(function () {
  "use strict";

  var selectedCity = "Semua Kota";
  var searchKeyword = "";
  var activeOutletId = "";

  /**
   * Tujuan   : Mengambil daftar unik nama kota dari data outlet.
   * Parameter: outlets (Array objek outlet)
   * Contoh   : getUniqueCities(window.JEDA_OUTLETS)
   */
  function getUniqueCities(outlets) {
    var cities = ["Semua Kota"];
    outlets.forEach(function (item) {
      if (item.city && cities.indexOf(item.city) === -1) {
        cities.push(item.city);
      }
    });
    return cities;
  }

  /**
   * Tujuan   : Membuat URL Google Maps pencarian eksternal untuk tombol
   *            "Buka di Google Maps".
   * Parameter: outlet (Object data outlet)
   * Contoh   : getExternalMapUrl(outlet)
   */
  function getExternalMapUrl(outlet) {
    var q = outlet.mapQuery || outlet.name + " " + outlet.address;
    return "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(q);
  }

  /**
   * Tujuan   : Membuat URL Google Maps embed tanpa API key untuk iframe.
   * Parameter: outlet (Object data outlet)
   * Contoh   : getEmbedMapUrl(outlet)
   */
  function getEmbedMapUrl(outlet) {
    var q = outlet.mapQuery || outlet.address || outlet.city;
    return "https://www.google.com/maps?q=" + encodeURIComponent(q) + "&output=embed";
  }

  /**
   * Tujuan   : Memperbarui iframe peta dan header peta sesuai outlet aktif.
   * Parameter: outlet (Object data outlet)
   * Contoh   : updateMapPanel(outlet)
   */
  function updateMapPanel(outlet) {
    if (!outlet) return;
    activeOutletId = outlet.id;

    var iframe = document.getElementById("outlet-map-iframe");
    var cityBadge = document.getElementById("map-active-city");
    var titleEl = document.getElementById("map-active-name");
    var extBtn = document.getElementById("map-external-btn");

    if (cityBadge) cityBadge.textContent = outlet.city;
    if (titleEl) titleEl.textContent = outlet.name;
    if (extBtn) extBtn.href = getExternalMapUrl(outlet);

    if (iframe) {
      var newSrc = getEmbedMapUrl(outlet);
      if (iframe.getAttribute("src") !== newSrc) {
        iframe.setAttribute("src", newSrc);
      }
      iframe.setAttribute("title", "Peta lokasi " + outlet.name + " di " + outlet.city);
    }

    /* Tandai kartu yang aktif di daftar */
    var cards = document.querySelectorAll(".outlet-card");
    cards.forEach(function (card) {
      var isCurrent = card.getAttribute("data-outlet-id") === activeOutletId;
      card.classList.toggle("is-active", isCurrent);
      card.setAttribute("aria-selected", isCurrent ? "true" : "false");
    });
  }

  /**
   * Tujuan   : Menyaring daftar outlet berdasarkan kota dan kata kunci.
   * Parameter: outlets (Array objek outlet)
   */
  function filterOutlets(outlets) {
    var q = searchKeyword.trim().toLowerCase();

    return outlets.filter(function (item) {
      var matchCity = selectedCity === "Semua Kota" || item.city === selectedCity;
      if (!matchCity) return false;
      if (!q) return true;

      var inName = (item.name || "").toLowerCase().indexOf(q) !== -1;
      var inCity = (item.city || "").toLowerCase().indexOf(q) !== -1;
      var inAddr = (item.address || "").toLowerCase().indexOf(q) !== -1;

      return inName || inCity || inAddr;
    });
  }

  /**
   * Tujuan   : Merender deret chip filter kota di atas panel outlet.
   * Parameter: cities (Array nama kota), container (HTMLElement)
   */
  function renderCityChips(cities, container) {
    if (!container) return;
    container.innerHTML = cities
      .map(function (city) {
        var isActive = city === selectedCity;
        return (
          '<button type="button" class="city-chip' +
          (isActive ? " is-active" : "") +
          '" role="tab" aria-selected="' +
          (isActive ? "true" : "false") +
          '" data-city="' +
          city +
          '">' +
          city +
          "</button>"
        );
      })
      .join("");
  }

  /**
   * Tujuan   : Merender kartu-kartu outlet ke dalam panel kiri.
   * Parameter: outlets (Array objek outlet)
   */
  function renderOutletList(outlets) {
    var listEl = document.getElementById("outlet-cards-list");
    var metaEl = document.getElementById("outlet-count-meta");
    if (!listEl) return;

    var filtered = filterOutlets(outlets);

    if (metaEl) {
      metaEl.textContent = "Menampilkan " + filtered.length + " dari " + outlets.length + " gerai";
    }

    if (filtered.length === 0) {
      listEl.innerHTML =
        '<div class="outlet-empty">' +
        '  <p>Tidak ditemukan gerai untuk pencarian tersebut.</p>' +
        '  <button type="button" class="btn btn-outline btn-sm" id="outlet-reset-btn">Tampilkan Semua Gerai</button>' +
        "</div>";

      var resetBtn = document.getElementById("outlet-reset-btn");
      if (resetBtn) {
        resetBtn.addEventListener("click", function () {
          selectedCity = "Semua Kota";
          searchKeyword = "";
          var inputEl = document.getElementById("outlet-search-input");
          if (inputEl) inputEl.value = "";
          renderCityChips(getUniqueCities(outlets), document.getElementById("outlet-city-chips"));
          renderOutletList(outlets);
        });
      }
      return;
    }

    /* Jika outlet yang aktif sebelumnya tidak ada di hasil filter baru, pilih yang pertama */
    var stillExists = filtered.some(function (o) {
      return o.id === activeOutletId;
    });
    if (!stillExists) {
      activeOutletId = filtered[0].id;
      updateMapPanel(filtered[0]);
    }

    listEl.innerHTML = filtered
      .map(function (item) {
        var isCurrent = item.id === activeOutletId;
        var facilitiesHTML = (item.facilities || [])
          .map(function (fac) {
            return '<span class="facility-tag">' + fac + "</span>";
          })
          .join("");

        return (
          '<article class="outlet-card' +
          (isCurrent ? " is-active" : "") +
          '" tabindex="0" role="button" aria-selected="' +
          (isCurrent ? "true" : "false") +
          '" data-outlet-id="' +
          item.id +
          '">' +
          '  <div class="outlet-card-top">' +
          '    <span class="outlet-city-tag">' +
          item.city +
          "</span>" +
          '    <h3 class="outlet-card-title">' +
          item.name +
          "</h3>" +
          "  </div>" +
          '  <p class="outlet-card-address">' +
          item.address +
          "</p>" +
          '  <div class="outlet-card-meta">' +
          '    <div class="outlet-meta-row">' +
          '      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>' +
          "      <span>" +
          item.hours +
          "</span>" +
          "    </div>" +
          '    <div class="outlet-meta-row">' +
          '      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>' +
          "      <span>" +
          item.phone +
          "</span>" +
          "    </div>" +
          "  </div>" +
          '  <div class="outlet-facilities">' +
          facilitiesHTML +
          "  </div>" +
          '  <div class="outlet-card-actions">' +
          '    <a href="' +
          getExternalMapUrl(item) +
          '" target="_blank" rel="noopener" class="outlet-gmaps-link">' +
          "      <span>Buka di Google Maps</span>" +
          '      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>' +
          "    </a>" +
          "  </div>" +
          "</article>"
        );
      })
      .join("");
  }

  /**
   * Tujuan   : Menginisialisasi halaman Outlet beserta event listener-nya.
   */
  function initOutletPage() {
    var outlets = window.JEDA_OUTLETS || [];
    var chipsContainer = document.getElementById("outlet-city-chips");
    var searchInput = document.getElementById("outlet-search-input");
    var listContainer = document.getElementById("outlet-cards-list");

    if (!outlets.length || !listContainer) return;

    activeOutletId = outlets[0].id;
    var cities = getUniqueCities(outlets);

    renderCityChips(cities, chipsContainer);
    renderOutletList(outlets);
    updateMapPanel(outlets[0]);

    /* 1. Klik chip kota */
    if (chipsContainer) {
      chipsContainer.addEventListener("click", function (e) {
        var btn = e.target.closest(".city-chip");
        if (!btn) return;
        selectedCity = btn.getAttribute("data-city") || "Semua Kota";
        renderCityChips(cities, chipsContainer);
        renderOutletList(outlets);
      });
    }

    /* 2. Ketik di kolom pencarian kota/alamat */
    if (searchInput) {
      searchInput.addEventListener("input", function () {
        searchKeyword = searchInput.value || "";
        renderOutletList(outlets);
      });
    }

    /* 3. Klik atau tekan Enter pada kartu outlet untuk memindahkan peta */
    function selectCardFromEvent(e) {
      /* Jangan halangi jika yang diklik adalah tautan eksternal Buka di Google Maps */
      if (e.target.closest(".outlet-gmaps-link")) return;

      var card = e.target.closest(".outlet-card");
      if (!card) return;

      var id = card.getAttribute("data-outlet-id");
      var found = outlets.find(function (o) {
        return o.id === id;
      });
      if (found) {
        updateMapPanel(found);
        /* Pada layar mobile, gulir halus ke peta di atas saat kartu dipilih */
        if (window.innerWidth < 960) {
          var mapPanel = document.querySelector(".outlet-map-panel");
          if (mapPanel) {
            mapPanel.scrollIntoView({ behavior: "smooth", block: "nearest" });
          }
        }
      }
    }

    listContainer.addEventListener("click", selectCardFromEvent);
    listContainer.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        if (!e.target.closest(".outlet-gmaps-link")) {
          e.preventDefault();
          selectCardFromEvent(e);
        }
      }
    });
  }

  document.addEventListener("DOMContentLoaded", initOutletPage);
})();