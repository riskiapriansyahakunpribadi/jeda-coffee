/* ============================================================
   BAGIAN   : Script Katalog Menu (Filter, Pencarian & Paginasi)
   FUNGSI   : Mengatur filter kategori, pencarian langsung dengan
              debounce 150ms (nama & deskripsi), tombol "Lihat Lebih
              Banyak" (+12 item per klik), dan tombol "Reset pencarian".
   CARA UBAH: Untuk menambah atau mengubah produk, edit langsung
              di file `assets/data/menu-data.js`.
   ============================================================ */

(function () {
  "use strict";

  var PAGE_SIZE = 12;
  var currentCategory = "Semua Produk";
  var searchQuery = "";
  var visibleLimit = PAGE_SIZE;

  /**
   * Tujuan   : Menunda eksekusi fungsi hingga pengguna berhenti mengetik
   *            selama `wait` milidetik (debounce).
   * Parameter: fn (Function), wait (Number ms)
   * Contoh   : debounce(handleSearch, 150)
   */
  function debounce(fn, wait) {
    var timeoutId = null;
    return function () {
      var context = this;
      var args = arguments;
      if (timeoutId) window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(function () {
        fn.apply(context, args);
      }, wait);
    };
  }

  /**
   * Tujuan   : Menyaring daftar produk berdasarkan kategori aktif dan
   *            kata kunci pencarian (tidak peka huruf besar-kecil).
   * Parameter: allItems (Array produk)
   * Contoh   : getFilteredItems(window.JEDA_MENU_ITEMS)
   */
  function getFilteredItems(allItems) {
    var q = searchQuery.trim().toLowerCase();

    return allItems.filter(function (item) {
      var matchCategory =
        currentCategory === "Semua Produk" || item.category === currentCategory;

      if (!matchCategory) return false;
      if (!q) return true;

      var nameMatch = (item.name || "").toLowerCase().indexOf(q) !== -1;
      var descMatch = (item.desc || "").toLowerCase().indexOf(q) !== -1;
      var catMatch = (item.category || "").toLowerCase().indexOf(q) !== -1;

      return nameMatch || descMatch || catMatch;
    });
  }

  /**
   * Tujuan   : Merender tombol-tombol kategori di sidebar / deret chip.
   * Parameter: categories (Array string kategori), container (HTMLElement)
   * Contoh   : renderCategories(window.JEDA_MENU_CATEGORIES, catListEl)
   */
  function renderCategories(categories, container) {
    if (!container) return;

    container.innerHTML = categories
      .map(function (cat) {
        var isActive = cat === currentCategory;
        return (
          '<button type="button" class="menu-cat-btn' +
          (isActive ? " is-active" : "") +
          '" role="tab" aria-selected="' +
          (isActive ? "true" : "false") +
          '" data-category="' +
          cat +
          '">' +
          cat +
          "</button>"
        );
      })
      .join("");
  }

  /**
   * Tujuan   : Memperbarui status visual tombol kategori yang sedang aktif.
   * Parameter: container (HTMLElement)
   */
  function updateCategoryButtons(container) {
    if (!container) return;
    var buttons = container.querySelectorAll(".menu-cat-btn");
    buttons.forEach(function (btn) {
      var cat = btn.getAttribute("data-category");
      var isActive = cat === currentCategory;
      btn.classList.toggle("is-active", isActive);
      btn.setAttribute("aria-selected", isActive ? "true" : "false");
    });
  }

  /**
   * Tujuan   : Merender kartu produk yang lolos filter ke dalam grid,
   *            mengatur visibilitas pesan kosong dan tombol "Lihat Lebih Banyak".
   * Parameter: Tidak ada
   */
  function renderCatalog() {
    var allItems = window.JEDA_MENU_ITEMS || [];
    var gridEl = document.getElementById("menu-product-grid");
    var emptyEl = document.getElementById("menu-empty-state");
    var emptyTextEl = document.getElementById("menu-empty-text");
    var loadMoreWrap = document.getElementById("menu-load-more-wrap");
    var metaEl = document.getElementById("menu-result-meta");

    if (!gridEl || !window.JedaComponents) return;

    var filtered = getFilteredItems(allItems);
    var totalCount = filtered.length;
    var sliceItems = filtered.slice(0, visibleLimit);

    /* Jika hasil kosong, tampilkan pesan ramah dan sembunyikan grid */
    if (totalCount === 0) {
      gridEl.innerHTML = "";
      gridEl.hidden = true;
      if (emptyEl) emptyEl.hidden = false;
      if (loadMoreWrap) loadMoreWrap.hidden = true;
      if (metaEl) metaEl.textContent = "Menampilkan 0 produk";

      if (emptyTextEl && searchQuery.trim() !== "") {
        emptyTextEl.textContent =
          'Tidak ditemukan produk untuk kata kunci "' +
          searchQuery.trim() +
          '" pada kategori ' +
          currentCategory +
          '. Coba kata kunci lain atau tekan tombol di bawah.';
      }
      return;
    }

    gridEl.hidden = false;
    if (emptyEl) emptyEl.hidden = true;

    /* Tampilkan informasi jumlah item */
    if (metaEl) {
      var catLabel = currentCategory === "Semua Produk" ? "semua kategori" : "kategori " + currentCategory;
      metaEl.textContent =
        "Menampilkan " +
        sliceItems.length +
        " dari " +
        totalCount +
        " produk di " +
        catLabel +
        (searchQuery.trim() ? ' untuk "' + searchQuery.trim() + '"' : "");
    }

    /* Render kartu dengan animasi fade-in bergiliran */
    gridEl.innerHTML = sliceItems
      .map(function (item, idx) {
        return window.JedaComponents.createProductCardHTML(item, idx);
      })
      .join("");

    /* Atur tombol Lihat Lebih Banyak */
    if (loadMoreWrap) {
      loadMoreWrap.hidden = visibleLimit >= totalCount;
    }

    if (window.observeReveals) {
      window.observeReveals(gridEl);
    }
  }

  /**
   * Tujuan   : Menginisialisasi seluruh event listener di halaman Menu.
   * Parameter: Tidak ada
   */
  function initMenuPage() {
    var categories = window.JEDA_MENU_CATEGORIES || ["Semua Produk"];
    var catContainer = document.getElementById("menu-category-list");
    var searchForm = document.getElementById("menu-search-form");
    var searchInput = document.getElementById("menu-search-input");
    var loadMoreBtn = document.getElementById("menu-load-more-btn");
    var resetBtn = document.getElementById("menu-reset-btn");

    if (!catContainer) return;

    renderCategories(categories, catContainer);
    renderCatalog();

    /* 1. Klik kategori: ganti kategori & kembalikan hitungan ke 12 */
    catContainer.addEventListener("click", function (e) {
      var btn = e.target.closest(".menu-cat-btn");
      if (!btn) return;
      var selectedCat = btn.getAttribute("data-category") || "Semua Produk";
      if (selectedCat === currentCategory) return;

      currentCategory = selectedCat;
      visibleLimit = PAGE_SIZE;
      updateCategoryButtons(catContainer);
      renderCatalog();

      /* Di layar mobile, geser chip aktif agar terlihat penuh di tengah */
      if (window.innerWidth < 960 && btn.scrollIntoView) {
        btn.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      }
    });

    /* 2. Pencarian langsung saat mengetik (debounce 150ms) */
    if (searchInput) {
      var onTypeSearch = debounce(function () {
        searchQuery = searchInput.value || "";
        visibleLimit = PAGE_SIZE;
        renderCatalog();
      }, 150);

      searchInput.addEventListener("input", onTypeSearch);
    }

    /* 3. Submit form pencarian */
    if (searchForm) {
      searchForm.addEventListener("submit", function (e) {
        e.preventDefault();
        if (searchInput) {
          searchQuery = searchInput.value || "";
        }
        visibleLimit = PAGE_SIZE;
        renderCatalog();
      });
    }

    /* 4. Klik tombol "Lihat Lebih Banyak" (+12 item setiap klik) */
    if (loadMoreBtn) {
      loadMoreBtn.addEventListener("click", function () {
        visibleLimit += PAGE_SIZE;
        renderCatalog();
      });
    }

    /* 5. Klik tombol "Reset pencarian" saat hasil kosong */
    if (resetBtn) {
      resetBtn.addEventListener("click", function () {
        searchQuery = "";
        currentCategory = "Semua Produk";
        visibleLimit = PAGE_SIZE;
        if (searchInput) {
          searchInput.value = "";
          searchInput.focus();
        }
        updateCategoryButtons(catContainer);
        renderCatalog();
      });
    }
  }

  document.addEventListener("DOMContentLoaded", initMenuPage);
})();