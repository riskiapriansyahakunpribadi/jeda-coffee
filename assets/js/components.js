/* ============================================================
   BAGIAN   : Komponen Bersama (Header, Footer & Kartu Produk)
   FUNGSI   : Menyisipkan Header dan Footer secara otomatis ke semua
              halaman HTML serta menyediakan pembangun kartu menu
              yang seragam.
   CARA UBAH: Untuk menambah atau mengubah menu navigasi, edit array
              `NAV_ITEMS` di bawah.
   ============================================================ */

(function () {
  "use strict";

  /* >>> EDIT DI SINI <<< */
  var NAV_ITEMS = [
    { href: "index.html", label: "Cerita Kami" },
    { href: "menu.html", label: "Menu" },
    { href: "outlet.html", label: "Outlet" },
    { href: "karir.html", label: "Karir" },
    { href: "event.html", label: "Event" }
  ];

  /**
   * Tujuan   : Mengembalikan kode SVG logo Jeda (versi teal atau putih).
   * Parameter: variant ("teal" | "white")
   * Contoh   : getLogoSvg("teal")
   */
  function getLogoSvg(variant) {
    if (variant === "white") {
      return (
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144 40" fill="none" role="img" aria-label="jeda coffee">' +
        '<rect x="2" y="4" width="32" height="32" rx="10" fill="#FFFFFF"/>' +
        '<rect x="12.5" y="12" width="4" height="16" rx="2" fill="#08475A"/>' +
        '<rect x="19.5" y="12" width="4" height="16" rx="2" fill="#1E96AB"/>' +
        '<text x="44" y="28.5" font-family="\'Poppins\', system-ui, -apple-system, sans-serif" font-size="27" font-weight="700" letter-spacing="-0.03em" fill="#FFFFFF">jeda</text>' +
        '<circle cx="114" cy="24.5" r="3.5" fill="#CDEFF5"/>' +
        "</svg>"
      );
    }
    return (
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144 40" fill="none" role="img" aria-label="jeda coffee">' +
      '<rect x="2" y="4" width="32" height="32" rx="10" fill="#0B6E80"/>' +
      '<rect x="12.5" y="12" width="4" height="16" rx="2" fill="#FFFFFF"/>' +
      '<rect x="19.5" y="12" width="4" height="16" rx="2" fill="#CDEFF5"/>' +
      '<text x="44" y="28.5" font-family="\'Poppins\', system-ui, -apple-system, sans-serif" font-size="27" font-weight="700" letter-spacing="-0.03em" fill="#08475A">jeda</text>' +
      '<circle cx="114" cy="24.5" r="3.5" fill="#1E96AB"/>' +
      "</svg>"
    );
  }

  /**
   * Tujuan   : Mendeteksi nama file halaman aktif dari URL browser.
   * Parameter: Tidak ada
   * Contoh   : getCurrentPage() -> "menu.html"
   */
  function getCurrentPage() {
    var path = window.location.pathname || "";
    var file = path.split("/").pop();
    if (!file || file === "") {
      return "index.html";
    }
    return file.toLowerCase();
  }

  /**
   * Tujuan   : Menyisipkan elemen Header dan Drawer Navigasi Mobile
   *            ke dalam `<header id="site-header">`.
   * Parameter: Tidak ada
   * Contoh   : renderHeader()
   */
  function renderHeader() {
    var headerEl = document.getElementById("site-header");
    if (!headerEl) return;

    var currentPage = getCurrentPage();

    var desktopLinks = NAV_ITEMS.map(function (item) {
      var isActive = currentPage === item.href.toLowerCase();
      return (
        '<a href="' +
        item.href +
        '" class="nav-link' +
        (isActive ? " is-active" : "") +
        '"' +
        (isActive ? ' aria-current="page"' : "") +
        ">" +
        item.label +
        "</a>"
      );
    }).join("");

    var mobileLinks = NAV_ITEMS.map(function (item) {
      var isActive = currentPage === item.href.toLowerCase();
      return (
        '<li><a href="' +
        item.href +
        '" class="mobile-nav-link' +
        (isActive ? " is-active" : "") +
        '"' +
        (isActive ? ' aria-current="page"' : "") +
        "><span>" +
        item.label +
        '</span><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 18l6-6-6-6"/></svg></a></li>'
      );
    }).join("");

    headerEl.innerHTML =
      '<div class="container site-header-inner">' +
      '  <a href="index.html" class="brand-logo" aria-label="Beranda Jeda Coffee">' +
      getLogoSvg("teal") +
      "  </a>" +
      '  <nav class="desktop-nav" aria-label="Navigasi Utama">' +
      desktopLinks +
      "  </nav>" +
      '  <button type="button" class="nav-toggle" id="nav-toggle-btn" aria-expanded="false" aria-controls="mobile-nav-drawer" aria-label="Buka menu navigasi">' +
      '    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      '      <line x1="3" y1="6" x2="21" y2="6"></line>' +
      '      <line x1="3" y1="12" x2="21" y2="12"></line>' +
      '      <line x1="3" y1="18" x2="21" y2="18"></line>' +
      "    </svg>" +
      "  </button>" +
      "</div>" +
      '<div class="mobile-nav-backdrop" id="mobile-nav-backdrop" aria-hidden="true"></div>' +
      '<aside class="mobile-nav-drawer" id="mobile-nav-drawer" aria-label="Menu Mobile" aria-hidden="true">' +
      "  <div>" +
      '    <div class="mobile-nav-head">' +
      '      <a href="index.html" class="brand-logo" aria-label="Beranda Jeda Coffee">' +
      getLogoSvg("teal") +
      "      </a>" +
      '      <button type="button" class="nav-toggle" id="nav-close-btn" aria-label="Tutup menu navigasi">' +
      '        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      '          <line x1="18" y1="6" x2="6" y2="18"></line>' +
      '          <line x1="6" y1="6" x2="18" y2="18"></line>' +
      "        </svg>" +
      "      </button>" +
      "    </div>" +
      '    <ul class="mobile-nav-list">' +
      mobileLinks +
      "    </ul>" +
      "  </div>" +
      '  <div class="mobile-nav-foot">' +
      "    <p>" +
      (window.JEDA_CONFIG ? window.JEDA_CONFIG.taglinePrimary : "Berhenti sejenak, seduh dulu.") +
      "</p>" +
      "  </div>" +
      "</aside>";
  }

  /**
   * Tujuan   : Menyisipkan elemen Footer dan tombol Kembali ke Atas
   *            ke dalam `<footer id="site-footer">`.
   * Parameter: Tidak ada
   * Contoh   : renderFooter()
   */
  function renderFooter() {
    var footerEl = document.getElementById("site-footer");
    if (!footerEl) return;

    var cfg = window.JEDA_CONFIG || {};
    var contact = cfg.contact || {};
    var socials = cfg.socials || {};

    var pageLinks = NAV_ITEMS.map(function (item) {
      return '<li><a href="' + item.href + '">' + item.label + "</a></li>";
    }).join("");

    var waHref =
      "https://wa.me/" +
      (contact.whatsappNumber || "6285771191325") +
      "?text=" +
      encodeURIComponent("Halo Jeda Coffee, saya ingin bertanya informasi mengenai Jeda.");

    footerEl.innerHTML =
      '<div class="container">' +
      '  <div class="footer-grid">' +
      '    <div class="footer-brand">' +
      '      <a href="index.html" class="brand-logo" aria-label="Beranda Jeda Coffee">' +
      getLogoSvg("white") +
      "      </a>" +
      "      <p>" +
      (cfg.footerAbout ||
        "Dari satu meja kecil, kami tumbuh jadi teman yang menemani harimu, di mana pun kamu berada.") +
      "</p>" +
      '      <div class="footer-socials">' +
      '        <a href="' +
      (socials.instagram || "https://instagram.com") +
      '" class="social-link" target="_blank" rel="noopener" aria-label="Instagram Jeda Coffee">' +
      '          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>' +
      "        </a>" +
      '        <a href="' +
      (socials.threads || "https://threads.net") +
      '" class="social-link" target="_blank" rel="noopener" aria-label="Threads Jeda Coffee">' +
      '          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12a7 7 0 1 0-4.2 6.4"/><path d="M15.5 12a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z"/><path d="M15.5 12v1.5a2.5 2.5 0 0 0 5 0V12a8.5 8.5 0 1 0-5.5 8"/></svg>' +
      "        </a>" +
      '        <a href="' +
      (socials.tiktok || "https://tiktok.com") +
      '" class="social-link" target="_blank" rel="noopener" aria-label="TikTok Jeda Coffee">' +
      '          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>' +
      "        </a>" +
      "      </div>" +
      "    </div>" +
      '    <div>' +
      '      <h2 class="footer-col-title">Halaman</h2>' +
      '      <ul class="footer-links">' +
      pageLinks +
      "      </ul>" +
      "    </div>" +
      '    <div>' +
      '      <h2 class="footer-col-title">Hubungi Kami</h2>' +
      '      <ul class="footer-contact-list">' +
      '        <li class="footer-contact-item">' +
      '          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>' +
      "          <span>" +
      (contact.officeAddress || "Malang, Jawa Timur") +
      "</span>" +
      "        </li>" +
      '        <li class="footer-contact-item">' +
      '          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>' +
      '          <a href="' +
      waHref +
      '" target="_blank" rel="noopener">WhatsApp: ' +
      (contact.whatsappDisplay || "+62 857-7119-1325") +
      "</a>" +
      "        </li>" +
      '        <li class="footer-contact-item">' +
      '          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>' +
      '          <a href="mailto:' +
      (contact.email || "halo@jedacoffee.id") +
      '">' +
      (contact.email || "halo@jedacoffee.id") +
      "</a>" +
      "        </li>" +
      "      </ul>" +
      "    </div>" +
      "  </div>" +
      '  <div class="footer-bottom">' +
      "    <span>" +
      (cfg.copyright || "© 2026 Jeda Coffee. Project portofolio, bukan bisnis nyata.") +
      "</span>" +
      "    <span>" +
      (socials.handle || "@jedacoffee.id") +
      "</span>" +
      "  </div>" +
      "</div>" +
      '<button type="button" class="back-to-top" id="back-to-top-btn" aria-label="Kembali ke bagian atas halaman">' +
      '  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="18 15 12 9 6 15"/></svg>' +
      "</button>";
  }

  /**
   * Tujuan   : Memformat angka Rupiah menggunakan Intl.NumberFormat('id-ID').
   * Parameter: amount (Number)
   * Contoh   : formatRupiah(24000) -> "Rp24.000"
   */
  function formatRupiah(amount) {
    var formatted = new Intl.NumberFormat("id-ID").format(amount || 0);
    return "Rp" + formatted;
  }

  /**
   * Tujuan   : Membuat HTML string untuk satu kartu produk menu.
   * Parameter: item (Object produk dari JEDA_MENU_ITEMS), index (Number urutan)
   * Contoh   : createProductCardHTML(item, 0)
   */
  function createProductCardHTML(item, index) {
    var imgData = window.getImage ? window.getImage(item.imageKey) : { url: "", alt: item.name, fallback: "cold" };
    var mediaClass = item.transparent ? "is-transparent" : "is-photo";
    var delay = Math.min((index % 12) * 45, 360);

    var badgeHTML = "";
    if (item.badge) {
      var badgeClass = item.badge.toLowerCase() === "baru" ? "product-badge is-new" : "product-badge";
      badgeHTML = '<span class="' + badgeClass + '">' + item.badge + "</span>";
    }

    var imgElement = window.renderResponsiveImage
      ? window.renderResponsiveImage(item.imageKey, {
          width: 400,
          height: 500,
          lazy: true,
          altOverride: item.name + " - " + item.desc
        })
      : '<img src="' + imgData.url + '" alt="' + item.name + '" width="400" height="500" loading="lazy" decoding="async">';

    return (
      '<article class="product-card" tabindex="0" data-reveal style="--reveal-delay: ' +
      delay +
      'ms" aria-label="' +
      item.name +
      ", " +
      formatRupiah(item.price) +
      '">' +
      '  <div class="product-card-media ' +
      mediaClass +
      '">' +
      badgeHTML +
      imgElement +
      '    <div class="product-desc-overlay">' +
      item.desc +
      "</div>" +
      "  </div>" +
      '  <div class="product-card-body">' +
      '    <h3 class="product-card-title">' +
      item.name +
      "</h3>" +
      '    <p class="product-card-price">' +
      formatRupiah(item.price) +
      "</p>" +
      "  </div>" +
      "</article>"
    );
  }

  /* Ekspor fungsi ke window agar bisa dipakai oleh file JS lain */
  window.JedaComponents = {
    renderHeader: renderHeader,
    renderFooter: renderFooter,
    formatRupiah: formatRupiah,
    createProductCardHTML: createProductCardHTML
  };
})();