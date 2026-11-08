# Jeda Coffee — Website Company Profile (Portofolio)

> **"Berhenti sejenak, seduh dulu. Teman jeda di setiap harimu."**

Project ini adalah website informasi (*company profile*) untuk brand kedai kopi fiktif bernama **Jeda Coffee**. Dirancang sebagai tautan utama di bio Instagram, TikTok, WhatsApp, dan Google Maps dengan standar tampilan, kecepatan, dan aksesibilitas setara brand kopi nasional di Indonesia.

Website ini dibangun murni menggunakan **HTML5, CSS3, dan Vanilla JavaScript (ES6)** tanpa framework, tanpa *build tool*, tanpa npm, dan tanpa backend.

---

## 1. Cara Membuka Website

Kamu tidak perlu menginstal aplikasi tambahan apa pun untuk menjalankan website ini:

### Cara A: Klik Dua Kali Langsung (`file://`)
1. Buka folder `jeda-coffee/` di File Explorer (Windows) atau Finder (Mac).
2. Klik dua kali pada file **`index.html`**.
3. Website akan langsung terbuka di browser dan semua fitur (navigasi, filter menu, pencarian, timeline, dan peta outlet) langsung berfungsi karena seluruh data disimpan sebagai variabel global `.js` (bukan `fetch()` JSON yang sering diblokir oleh protokol `file://`).

### Cara B: Menggunakan Server Statis Lokal (Opsional)
Jika kamu menggunakan Visual Studio Code:
1. Pasang ekstensi **Live Server**.
2. Klik kanan pada `index.html` lalu pilih **"Open with Live Server"**.

---

## 2. Struktur Folder & Fungsi Tiap File

```text
jeda-coffee/
├── index.html                 # Halaman Utama (Cerita Kami, Visi-Misi, Timeline, Menu Andalan)
├── menu.html                  # Halaman Katalog Menu (Pencarian, Filter 12 Kategori, Load More)
├── outlet.html                # Halaman Lokasi Gerai (Pencari 2 Panel + Peta Google Maps + Galeri)
├── karir.html                 # Halaman Karir #TimJeda (Budaya Kerja, Carousel Lowongan Poster)
├── event.html                 # Halaman Layanan #JedaEvent (Paket Catering/Booth, Galeri Event)
├── README.md                  # Dokumentasi & panduan pengubahan kode (file ini)
└── assets/
    ├── css/
    │   ├── base.css           # Variabel warna (:root), reset CSS, tipografi Poppins, grid dasar
    │   ├── components.css     # Gaya Header, Footer, tombol, kartu produk, fallback SVG, kotak CTA
    │   └── pages.css          # Gaya spesifik untuk masing-masing dari 5 halaman
    ├── js/
    │   ├── components.js      # Menyisipkan Header & Footer otomatis + fungsi kartu produk
    │   ├── main.js            # Fungsi getImage(), fallback gambar, animasi scroll, counter, menu mobile
    │   ├── timeline.js        # Logika carousel timeline tahun 2018–2026 & menu andalan di beranda
    │   ├── menu.js            # Logika filter kategori, pencarian debounce 150ms, & "Lihat Lebih Banyak"
    │   └── outlet.js          # Logika filter kota, pencarian alamat, & pembaruan iframe Google Maps
    ├── data/
    │   ├── site-config.js     # Nama brand, tagline, nomor WhatsApp, email, alamat, & link sosmed
    │   ├── images.js          # PUSAT URL GAMBAR: semua foto hero, produk, timeline, & galeri
    │   ├── menu-data.js       # Daftar 12 kategori & 50 item menu beserta harga dan deskripsi
    │   ├── outlets-data.js    # Daftar 12 lokasi gerai di 9 kota beserta jam buka & fasilitas
    │   └── timeline-data.js   # Daftar perjalanan brand dari tahun 2018 hingga 2026
    └── img/
        ├── logo.svg           # Logo Jeda versi warna teal (untuk latar terang)
        ├── logo-white.svg     # Logo Jeda versi putih (untuk latar gelap / footer)
        └── favicon.svg        # Ikon tab browser berbentuk simbol pause Jeda