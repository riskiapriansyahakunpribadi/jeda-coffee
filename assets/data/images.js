/* ============================================================
   BAGIAN   : Pusat Data Gambar (Image Repository)
   FUNGSI   : Mengumpulkan seluruh URL gambar website di satu file
              supaya mudah diganti dengan foto asli tanpa mengedit
              banyak file HTML atau JS.
   CARA UBAH:
   1. Ganti nilai `url` dengan link foto asli atau path lokal
      (contoh: "assets/img/foto-produk.png").
   2. Jika URL dikosongkan ("") atau gagal dimuat, website otomatis
      menampilkan ilustrasi SVG gradasi sesuai jenis `fallback`:
      - "cold"  : Ilustrasi cup minuman dingin
      - "hot"   : Ilustrasi cangkir minuman hangat
      - "food"  : Ilustrasi piring makanan / pastry
      - "scene" : Ilustrasi suasana kafe / cangkir Jeda
   ============================================================ */

/* >>> EDIT DI SINI <<< */
window.JEDA_IMAGES = {

  /* ------------------------------------------------------------
     KELOMPOK 1: HERO & BANNER HALAMAN
     Rekomendasi: Rasio 4:3 atau 16:10, ukuran ideal 1200x900 px
     ------------------------------------------------------------ */
  hero_cerita: {
    url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
    alt: "Secangkir kopi latte hangat dan croissant di atas meja kayu Jeda Coffee",
    fallback: "scene"
  },
  cerita_ruang: {
    url: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1400&q=80",
    alt: "Suasana ruang duduk Jeda Coffee yang hangat dengan pencahayaan alami",
    fallback: "scene"
  },
  menu_banner: {
    url: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=900&q=80",
    alt: "Ragam sajian kopi favorit Jeda Coffee",
    fallback: "cold"
  },
  karir_hero: {
    url: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1100&q=80",
    alt: "Barista Tim Jeda sedang menyeduh kopi dengan senyum ramah",
    fallback: "scene"
  },
  event_hero: {
    url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1600&q=80",
    alt: "Booth kopi JedaEvent melayani tamu di acara pernikahan dan gathering",
    fallback: "scene"
  },

  /* ------------------------------------------------------------
     KELOMPOK 2: TIMELINE PERJALANAN KAMI (2018 - 2026)
     Rekomendasi: Rasio 4:5 (vertikal), ukuran ideal 800x1000 px
     ------------------------------------------------------------ */
  timeline_2018: {
    url: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=800&q=80",
    alt: "Meja seduh kopi pertama Jeda di sudut jalan kota Malang tahun 2018",
    fallback: "scene"
  },
  timeline_2019: {
    url: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=800&q=80",
    alt: "Interior gerai pertama Jeda Coffee di Malang tahun 2019",
    fallback: "scene"
  },
  timeline_2020: {
    url: "https://images.unsplash.com/photo-1512568400610-62da28bc8a13?auto=format&fit=crop&w=800&q=80",
    alt: "Kemasan botol kopi literan Jeda untuk dinikmati di rumah tahun 2020",
    fallback: "cold"
  },
  timeline_2021: {
    url: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=800&q=80",
    alt: "Pembukaan gerai baru Jeda Coffee di Surabaya dan Yogyakarta tahun 2021",
    fallback: "scene"
  },
  timeline_2022: {
    url: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    alt: "Sajian pastry hangat yang mulai hadir di seluruh gerai Jeda tahun 2022",
    fallback: "food"
  },
  timeline_2023: {
    url: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=800&q=80",
    alt: "Desain meja bar modern di gerai Jakarta dan Bandung tahun 2023",
    fallback: "scene"
  },
  timeline_2024: {
    url: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80",
    alt: "Tim JedaEvent menyajikan kopi di acara komunitas tahun 2024",
    fallback: "scene"
  },
  timeline_2025: {
    url: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=800&q=80",
    alt: "Suasana gerai ke-10 Jeda Coffee yang ramai pengunjung tahun 2025",
    fallback: "scene"
  },
  timeline_2026: {
    url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    alt: "Kebersamaan pelanggan dan barista di gerai ke-12 Jeda Coffee tahun 2026",
    fallback: "scene"
  },

  /* ------------------------------------------------------------
     KELOMPOK 3: GALERI INTERIOR OUTLET & EVENT
     Rekomendasi: Rasio 4:3, ukuran ideal 800x600 px
     ------------------------------------------------------------ */
  outlet_interior_1: {
    url: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80",
    alt: "Area kerja komunal dengan stopkontak di setiap meja Jeda Coffee",
    fallback: "scene"
  },
  outlet_interior_2: {
    url: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=800&q=80",
    alt: "Sudut duduk santai dengan pencahayaan hangat di sore hari",
    fallback: "scene"
  },
  outlet_interior_3: {
    url: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=800&q=80",
    alt: "Meja espresso bar tempat barista menyeduh kopi Nusantara",
    fallback: "scene"
  },
  outlet_interior_4: {
    url: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=800&q=80",
    alt: "Area semi-outdoor dengan tanaman hijau yang sejuk",
    fallback: "scene"
  },
  outlet_interior_5: {
    url: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80",
    alt: "Barista Jeda menyiapkan pesanan untuk Teman Jeda",
    fallback: "scene"
  },
  outlet_interior_6: {
    url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
    alt: "Penyajian kopi dan pastry segar setiap pagi di gerai Jeda",
    fallback: "scene"
  },
  event_galeri_1: {
    url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80",
    alt: "Meja saji JedaEvent di resepsi pernikahan outdoor",
    fallback: "scene"
  },
  event_galeri_2: {
    url: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80",
    alt: "Tamu acara kantor menikmati es kopi susu Jeda saat jeda rapat",
    fallback: "scene"
  },
  event_galeri_3: {
    url: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80",
    alt: "Deretan cup es kopi susu siap dibagikan untuk peserta seminar",
    fallback: "cold"
  },
  event_galeri_4: {
    url: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80",
    alt: "Barista menyajikan latte art langsung di hadapan tamu undangan",
    fallback: "hot"
  },

  /* ------------------------------------------------------------
     KELOMPOK 4: FOTO PRODUK MENU
     Rekomendasi: Rasio 4:5, ukuran ideal 600x750 px.
     Jika memakai PNG transparan, ubah properti `transparent: true`
     pada item terkait di `assets/data/menu-data.js`.
     ------------------------------------------------------------ */
  menu_es_kopi_jeda: {
    url: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=600&q=80",
    alt: "Es Kopi Susu Jeda dengan perpaduan espresso dan susu creamy",
    fallback: "cold"
  },
  menu_americano: {
    url: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80",
    alt: "Secangkir Americano dari biji kopi arabika Nusantara",
    fallback: "hot"
  },
  menu_latte: {
    url: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=600&q=80",
    alt: "Caffe Latte dengan busa susu lembut dan latte art",
    fallback: "hot"
  },
  menu_oat_latte: {
    url: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=600&q=80",
    alt: "Oat Latte dengan susu gandum pilihan yang gurih",
    fallback: "cold"
  },
  menu_cappuccino: {
    url: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=600&q=80",
    alt: "Cappuccino hangat dengan taburan bubuk cokelat tipis",
    fallback: "hot"
  },
  menu_flat_white: {
    url: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80",
    alt: "Flat White hangat dengan double shot ristretto",
    fallback: "hot"
  },
  menu_gula_aren: {
    url: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=600&q=80",
    alt: "Es Kopi Gula Aren organik dengan lapisan susu segar",
    fallback: "cold"
  },
  menu_espresso: {
    url: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=600&q=80",
    alt: "Satu shot Espresso pekat dengan crema keemasan",
    fallback: "hot"
  },
  menu_fusion_cold: {
    url: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=600&q=80",
    alt: "Minuman Fusion Coffee dingin khas Jeda Coffee",
    fallback: "cold"
  },
  menu_macchiato: {
    url: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&w=600&q=80",
    alt: "Minuman Macchiato dengan krim lembut di bagian atas",
    fallback: "cold"
  },
  menu_milktea: {
    url: "https://images.unsplash.com/photo-1558857563-b371033873b8?auto=format&fit=crop&w=600&q=80",
    alt: "Sajian Milk Tea dingin yang manis dan menyegarkan",
    fallback: "cold"
  },
  menu_matcha: {
    url: "https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?auto=format&fit=crop&w=600&q=80",
    alt: "Minuman Matcha Jepang berpadu susu segar",
    fallback: "cold"
  },
  menu_cokelat: {
    url: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=600&q=80",
    alt: "Minuman Cokelat Susu yang kental dan menenangkan",
    fallback: "cold"
  },
  menu_tea: {
    url: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=80",
    alt: "Es teh buah segar dengan irisan lemon dan daun mint",
    fallback: "cold"
  },
  menu_botol: {
    url: "https://images.unsplash.com/photo-1512568400610-62da28bc8a13?auto=format&fit=crop&w=600&q=80",
    alt: "Kemasan botol Jeda-IN praktis untuk dibawa pulang",
    fallback: "cold"
  },
  menu_croissant: {
    url: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80",
    alt: "Croissant panggang renyah berlapis mentega",
    fallback: "food"
  },
  menu_pastry_manis: {
    url: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80",
    alt: "Pastry manis hangat teman minum kopi",
    fallback: "food"
  },
  menu_nasi: {
    url: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=600&q=80",
    alt: "Sepiring hidangan nasi hangat khas dapur Jeda",
    fallback: "food"
  },
  menu_mie: {
    url: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80",
    alt: "Sajian mie goreng berbumbu rempah Nusantara",
    fallback: "food"
  },
  menu_snack: {
    url: "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=600&q=80",
    alt: "Camilan hangat renyah untuk teman mengobrol",
    fallback: "food"
  }
};