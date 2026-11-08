/* ============================================================
   BAGIAN   : Data Katalog Menu (Menu Data)
   FUNGSI   : Menyimpan daftar kategori dan 50 produk menu Jeda Coffee
              yang ditampilkan di halaman Beranda, Menu, dan Event.
   CARA UBAH:
   - `price` ditulis angka murni tanpa titik (contoh: 24000).
   - `transparent`: ubah ke `true` jika memakai foto PNG tanpa latar
     agar produk tampil mengambang di atas gradasi.
   - `badge`: isi dengan "Signature", "Baru", atau `null`.
   - `featured`: isi `true` (maksimal 4 item) untuk tampil di Beranda.
   - `eventPick`: isi `true` (maksimal 4 item) untuk tampil di Event.
   ============================================================ */

window.JEDA_MENU_CATEGORIES = [
  "Semua Produk",
  "Kopi",
  "Fusion Coffee",
  "Milk Tea Series",
  "Macchiato Series",
  "Milk Series",
  "Tea Series",
  "Jeda-IN 225ml",
  "Jeda-IN 1 Liter",
  "Pastry",
  "Main Dish",
  "Side Dish"
];

/* >>> EDIT DI SINI <<< */
window.JEDA_MENU_ITEMS = [
  /* --- KOPI (8 Item) --- */
  {
    id: "kopi-01",
    name: "Es Kopi Susu Jeda",
    category: "Kopi",
    price: 24000,
    desc: "Racikan espresso Nusantara dengan susu segar creamy dan manis lembut yang pas untuk menemani jeda siangmu.",
    imageKey: "menu_es_kopi_jeda",
    transparent: false,
    badge: "Signature",
    featured: true,
    eventPick: true
  },
  {
    id: "kopi-02",
    name: "Americano",
    category: "Kopi",
    price: 22000,
    desc: "Double shot espresso arabika pilihan dengan air murni, menghadirkan karakter rasa kopi yang bersih dan menyegarkan.",
    imageKey: "menu_americano",
    transparent: false,
    badge: null
  },
  {
    id: "kopi-03",
    name: "Caffe Latte",
    category: "Kopi",
    price: 28000,
    desc: "Perpaduan seimbang antara espresso yang halus dan susu steamed bertekstur lembut.",
    imageKey: "menu_latte",
    transparent: false,
    badge: null
  },
  {
    id: "kopi-04",
    name: "Oat Latte",
    category: "Kopi",
    price: 32000,
    desc: "Espresso hangat atau dingin yang dipadukan dengan susu oat nabati yang gurih alami dan ramah di lambung.",
    imageKey: "menu_oat_latte",
    transparent: false,
    badge: "Signature",
    featured: true
  },
  {
    id: "kopi-05",
    name: "Cappuccino",
    category: "Kopi",
    price: 28000,
    desc: "Kopi klasik dengan lapisan foam susu tebal yang lembut dan taburan cokelat tipis di atasnya.",
    imageKey: "menu_cappuccino",
    transparent: false,
    badge: null
  },
  {
    id: "kopi-06",
    name: "Flat White",
    category: "Kopi",
    price: 30000,
    desc: "Ristretto ganda dengan lapisan microfoam susu tipis untuk penikmat kopi susu yang lebih intens.",
    imageKey: "menu_flat_white",
    transparent: false,
    badge: null
  },
  {
    id: "kopi-07",
    name: "Kopi Gula Aren",
    category: "Kopi",
    price: 26000,
    desc: "Espresso dan susu segar dengan manis legit gula aren organik dari petani lokal Jawa Barat.",
    imageKey: "menu_gula_aren",
    transparent: false,
    badge: "Signature",
    eventPick: true
  },
  {
    id: "kopi-08",
    name: "Espresso",
    category: "Kopi",
    price: 18000,
    desc: "Ekstraksi murni biji kopi house blend Jeda dengan crema tebal dan aroma karamel kacang yang kuat.",
    imageKey: "menu_espresso",
    transparent: false,
    badge: null
  },

  /* --- FUSION COFFEE (5 Item) --- */
  {
    id: "fusion-01",
    name: "Kopi Pandan Susu",
    category: "Fusion Coffee",
    price: 29000,
    desc: "Harum ekstrak daun pandan asli yang menyatu manis dengan es kopi susu khas Jeda.",
    imageKey: "menu_fusion_cold",
    transparent: false,
    badge: "Signature",
    featured: true
  },
  {
    id: "fusion-02",
    name: "Kopi Karamel Asin",
    category: "Fusion Coffee",
    price: 30000,
    desc: "Sensasi manis gurih saus salted caramel yang berpadu lembut dengan espresso dan susu dingin.",
    imageKey: "menu_fusion_cold",
    transparent: false,
    badge: null
  },
  {
    id: "fusion-03",
    name: "Kopi Hazelnut Cokelat",
    category: "Fusion Coffee",
    price: 31000,
    desc: "Kombinasi kacang hazelnut panggang, cokelat pekat, dan espresso untuk pecinta rasa manis kacang.",
    imageKey: "menu_cokelat",
    transparent: false,
    badge: null
  },
  {
    id: "fusion-04",
    name: "Kopi Yuzu Soda",
    category: "Fusion Coffee",
    price: 30000,
    desc: "Segarnya jeruk yuzu Jepang dan air soda berkarbonasi yang disiram shot espresso dingin.",
    imageKey: "menu_tea",
    transparent: false,
    badge: "Baru"
  },
  {
    id: "fusion-05",
    name: "Kopi Kelapa",
    category: "Fusion Coffee",
    price: 29000,
    desc: "Campuran air kelapa segar dan krim santan ringan dengan espresso yang memberikan kesegaran tropis.",
    imageKey: "menu_fusion_cold",
    transparent: false,
    badge: "Baru"
  },

  /* --- MACCHIATO SERIES (4 Item) --- */
  {
    id: "macc-01",
    name: "Jeda Signature Macchiato",
    category: "Macchiato Series",
    price: 31000,
    desc: "Kopi susu dingin dengan lapisan krim macchiato gurih lembut setebal dua jari di bagian atas.",
    imageKey: "menu_macchiato",
    transparent: false,
    badge: "Signature"
  },
  {
    id: "macc-02",
    name: "Caramel Macchiato",
    category: "Macchiato Series",
    price: 31000,
    desc: "Espresso dan susu vanila lembut yang ditutup foam macchiato serta siraman saus karamel.",
    imageKey: "menu_macchiato",
    transparent: false,
    badge: null
  },
  {
    id: "macc-03",
    name: "Matcha Macchiato",
    category: "Macchiato Series",
    price: 32000,
    desc: "Teh hijau matcha Uji pilihan yang berpadu dengan krim keju macchiato lembut di atasnya.",
    imageKey: "menu_matcha",
    transparent: false,
    badge: null
  },
  {
    id: "macc-04",
    name: "Cokelat Macchiato",
    category: "Macchiato Series",
    price: 30000,
    desc: "Cokelat hitam pekat dingin yang makin kaya rasa berkat lapisan krim macchiato gurih.",
    imageKey: "menu_cokelat",
    transparent: false,
    badge: null
  },

  /* --- MILK TEA SERIES (4 Item) --- */
  {
    id: "milktea-01",
    name: "Milk Tea Original",
    category: "Milk Tea Series",
    price: 24000,
    desc: "Seduhan daun teh hitam aromatik dengan susu kental yang wangi dan tidak bikin enek.",
    imageKey: "menu_milktea",
    transparent: false,
    badge: null
  },
  {
    id: "milktea-02",
    name: "Brown Sugar Milk Tea",
    category: "Milk Tea Series",
    price: 27000,
    desc: "Teh susu lembut dengan sirup gula aren karamel yang manis dan beraroma panggangan.",
    imageKey: "menu_milktea",
    transparent: false,
    badge: "Signature"
  },
  {
    id: "milktea-03",
    name: "Taro Milk Tea",
    category: "Milk Tea Series",
    price: 28000,
    desc: "Perpaduan teh susu dengan ubi ungu taro yang lembut, manis, dan menenangkan.",
    imageKey: "menu_milktea",
    transparent: false,
    badge: null
  },
  {
    id: "milktea-04",
    name: "Thai Tea",
    category: "Milk Tea Series",
    price: 25000,
    desc: "Racikan teh Thailand autentik beraroma rempah vanila yang diseduh bersama susu creamy.",
    imageKey: "menu_milktea",
    transparent: false,
    badge: null
  },

  /* --- MILK SERIES (4 Item) --- */
  {
    id: "milk-01",
    name: "Fresh Milk Gula Aren",
    category: "Milk Series",
    price: 24000,
    desc: "Pilihan bebas kafein berisi susu segar dingin dengan lelehan gula aren murni.",
    imageKey: "menu_gula_aren",
    transparent: false,
    badge: null
  },
  {
    id: "milk-02",
    name: "Cokelat Susu",
    category: "Milk Series",
    price: 26000,
    desc: "Cokelat kakao lokal Sulawesi yang diseduh kental bersama susu segar pilihan.",
    imageKey: "menu_cokelat",
    transparent: false,
    badge: "Signature",
    eventPick: true
  },
  {
    id: "milk-03",
    name: "Strawberry Milk",
    category: "Milk Series",
    price: 26000,
    desc: "Susu segar dingin dengan selai stroberi buatan sendiri yang masih memiliki potongan buah asli.",
    imageKey: "menu_milktea",
    transparent: false,
    badge: "Baru"
  },
  {
    id: "milk-04",
    name: "Matcha Susu",
    category: "Milk Series",
    price: 29000,
    desc: "Bubuk matcha murni yang dikocok hingga berbusa lalu dituang ke atas susu segar dingin.",
    imageKey: "menu_matcha",
    transparent: false,
    badge: null
  },

  /* --- TEA SERIES (4 Item) --- */
  {
    id: "tea-01",
    name: "Lemon Tea",
    category: "Tea Series",
    price: 20000,
    desc: "Teh hitam dingin dengan perasan jeruk lemon segar yang langsung mengusir rasa kantuk.",
    imageKey: "menu_tea",
    transparent: false,
    badge: null
  },
  {
    id: "tea-02",
    name: "Lychee Tea",
    category: "Tea Series",
    price: 24000,
    desc: "Es teh melati harum yang disajikan bersama dua buah leci utuh yang manis segar.",
    imageKey: "menu_tea",
    transparent: false,
    badge: "Signature",
    eventPick: true
  },
  {
    id: "tea-03",
    name: "Peach Tea",
    category: "Tea Series",
    price: 24000,
    desc: "Seduhan teh dingin beraroma buah persik manis dengan potongan buah peach di dalamnya.",
    imageKey: "menu_tea",
    transparent: false,
    badge: null
  },
  {
    id: "tea-04",
    name: "Melati Tea",
    category: "Tea Series",
    price: 18000,
    desc: "Teh melati Jawa klasik yang diseduh segar setiap hari, tersedia dingin maupun hangat.",
    imageKey: "menu_tea",
    transparent: false,
    badge: null
  },

  /* --- JEDA-IN 225ML (4 Item) --- */
  {
    id: "jedain225-01",
    name: "Kopi Susu 225ml",
    category: "Jeda-IN 225ml",
    price: 14000,
    desc: "Es Kopi Susu Jeda dalam kemasan botol saku 225ml yang praktis dibawa ke kampus atau kantor.",
    imageKey: "menu_botol",
    transparent: false,
    badge: null
  },
  {
    id: "jedain225-02",
    name: "Kopi Gula Aren 225ml",
    category: "Jeda-IN 225ml",
    price: 15000,
    desc: "Kopi Gula Aren favorit dalam botol sekali minum, siap disimpan di kulkas untuk stok rapat.",
    imageKey: "menu_botol",
    transparent: false,
    badge: "Signature"
  },
  {
    id: "jedain225-03",
    name: "Milk Tea 225ml",
    category: "Jeda-IN 225ml",
    price: 14000,
    desc: "Milk Tea Original dalam botol 225ml yang pas untuk suguhan acara atau bekal perjalanan.",
    imageKey: "menu_botol",
    transparent: false,
    badge: null
  },
  {
    id: "jedain225-04",
    name: "Cokelat 225ml",
    category: "Jeda-IN 225ml",
    price: 15000,
    desc: "Cokelat Susu kental dalam kemasan botol mungil yang disukai anak-anak hingga dewasa.",
    imageKey: "menu_botol",
    transparent: false,
    badge: null
  },

  /* --- JEDA-IN 1 LITER (4 Item) --- */
  {
    id: "jedain1l-01",
    name: "Kopi Susu 1 Liter",
    category: "Jeda-IN 1 Liter",
    price: 75000,
    desc: "Stok Es Kopi Susu Jeda ukuran 1 liter untuk 5-6 gelas, teman setia kerja dari rumah.",
    imageKey: "menu_botol",
    transparent: false,
    badge: "Signature"
  },
  {
    id: "jedain1l-02",
    name: "Kopi Gula Aren 1 Liter",
    category: "Jeda-IN 1 Liter",
    price: 80000,
    desc: "Botol 1 liter Kopi Gula Aren yang siap dituang kapan saja bersama keluarga di rumah.",
    imageKey: "menu_botol",
    transparent: false,
    badge: null
  },
  {
    id: "jedain1l-03",
    name: "Milk Tea 1 Liter",
    category: "Jeda-IN 1 Liter",
    price: 72000,
    desc: "Kemasan keluarga 1 liter Milk Tea Original, lebih hemat untuk dinikmati ramai-ramai.",
    imageKey: "menu_botol",
    transparent: false,
    badge: null
  },
  {
    id: "jedain1l-04",
    name: "Cokelat 1 Liter",
    category: "Jeda-IN 1 Liter",
    price: 78000,
    desc: "Sajian Cokelat Susu 1 liter yang praktis tinggal ditambah es batu di rumah.",
    imageKey: "menu_botol",
    transparent: false,
    badge: null
  },

  /* --- PASTRY (5 Item) --- */
  {
    id: "pastry-01",
    name: "Croissant Butter",
    category: "Pastry",
    price: 22000,
    desc: "Croissant klasik bertekstur renyah berlapis di luar dan lembut beraroma butter Prancis di dalam.",
    imageKey: "menu_croissant",
    transparent: false,
    badge: "Signature",
    featured: true
  },
  {
    id: "pastry-02",
    name: "Pain au Chocolat",
    category: "Pastry",
    price: 26000,
    desc: "Pastry lipat renyah berisi dua batang cokelat hitam lumer yang dipanggang hangat setiap pagi.",
    imageKey: "menu_pastry_manis",
    transparent: false,
    badge: null
  },
  {
    id: "pastry-03",
    name: "Almond Croissant",
    category: "Pastry",
    price: 28000,
    desc: "Croissant butter dengan isian krim frangipane kacang almond dan taburan irisan almond panggang.",
    imageKey: "menu_croissant",
    transparent: false,
    badge: null
  },
  {
    id: "pastry-04",
    name: "Cinnamon Roll",
    category: "Pastry",
    price: 24000,
    desc: "Roti gulung lembut beraroma kayu manis hangat dengan glasir krim keju tipis di atasnya.",
    imageKey: "menu_pastry_manis",
    transparent: false,
    badge: null
  },
  {
    id: "pastry-05",
    name: "Cheese Danish",
    category: "Pastry",
    price: 25000,
    desc: "Pastry renyah dengan isian cream cheese gurih manis yang cocok dipadukan dengan Americano.",
    imageKey: "menu_pastry_manis",
    transparent: false,
    badge: "Baru"
  },

  /* --- MAIN DISH (4 Item) --- */
  {
    id: "main-01",
    name: "Nasi Ayam Sambal Matah",
    category: "Main Dish",
    price: 32000,
    desc: "Nasi putih hangat dengan potongan ayam goreng krispi dan siraman sambal matah Bali yang segar.",
    imageKey: "menu_nasi",
    transparent: false,
    badge: "Signature"
  },
  {
    id: "main-02",
    name: "Nasi Gila Jeda",
    category: "Main Dish",
    price: 30000,
    desc: "Nasi hangat dengan tumisan sosis, bakso, ayam, dan telur berbumbu manis gurih sedikit pedas.",
    imageKey: "menu_nasi",
    transparent: false,
    badge: null
  },
  {
    id: "main-03",
    name: "Mie Goreng Jawa",
    category: "Main Dish",
    price: 28000,
    desc: "Mie goreng bumbu kemiri dan kecap manis tradisional lengkap dengan suwiran ayam dan telur mata sapi.",
    imageKey: "menu_mie",
    transparent: false,
    badge: null
  },
  {
    id: "main-04",
    name: "Nasi Goreng Kampung",
    category: "Main Dish",
    price: 29000,
    desc: "Nasi goreng rempah ulek khas rumahan dengan irisan cabai hijau, ayam suwir, dan kerupuk renyah.",
    imageKey: "menu_nasi",
    transparent: false,
    badge: null
  },

  /* --- SIDE DISH (4 Item) --- */
  {
    id: "side-01",
    name: "Kentang Goreng",
    category: "Side Dish",
    price: 20000,
    desc: "Kentang goreng potongan tebal yang renyah di luar dengan taburan bumbu bawang gurih.",
    imageKey: "menu_snack",
    transparent: false,
    badge: null
  },
  {
    id: "side-02",
    name: "Chicken Fries",
    category: "Side Dish",
    price: 24000,
    desc: "Potongan dada ayam berbalut tepung renyah disajikan dengan saus keju dan sambal.",
    imageKey: "menu_snack",
    transparent: false,
    badge: null
  },
  {
    id: "side-03",
    name: "Tahu Crispy",
    category: "Side Dish",
    price: 18000,
    desc: "Tahu putih dadu goreng tepung berbumbu cabai garam dan bawang putih goreng yang harum.",
    imageKey: "menu_snack",
    transparent: false,
    badge: "Signature"
  },
  {
    id: "side-04",
    name: "Pisang Goreng Keju",
    category: "Side Dish",
    price: 20000,
    desc: "Pisang kepok manis goreng tepung renyah dengan parutan keju cheddar dan susu kental manis.",
    imageKey: "menu_snack",
    transparent: false,
    badge: null
  }
];