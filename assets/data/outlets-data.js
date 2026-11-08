/* ============================================================
   BAGIAN   : Data Lokasi Gerai (Outlets Data)
   FUNGSI   : Menyimpan 12 lokasi gerai Jeda Coffee di 9 kota untuk
              ditampilkan pada daftar outlet dan peta interaktif.
   CATATAN  : Seluruh nomor bangunan, telepon, dan nama gerai di bawah
              bersifat FIKTIF untuk keperluan portofolio, menggunakan
              nama jalan nyata yang dikenal di masing-masing kota.
   CARA UBAH:
   - Ganti `name`, `city`, `address`, `hours`, dan `phone` dengan
     data gerai asli.
   - Ganti `lat` dan `lng` dengan titik koordinat dari Google Maps
     (klik kanan lokasi di Google Maps -> salin angka koordinat).
   - `mapQuery` digunakan untuk mengarahkan iframe peta dan tombol
     "Buka di Google Maps".
   ============================================================ */

/* >>> EDIT DI SINI <<< */
window.JEDA_OUTLETS = [
  {
    id: "mlg-ijen",
    name: "Jeda Coffee Ijen (Flagship)",
    city: "Malang",
    address: "Jl. Besar Ijen No. 18, Oro-oro Dowo, Kec. Klojen, Kota Malang, Jawa Timur 65119",
    hours: "Setiap Hari, 07.00 – 22.00 WIB",
    phone: "(0341) 551-201",
    lat: -7.9731,
    lng: 112.6238,
    mapQuery: "Jl. Besar Ijen, Malang, Jawa Timur",
    facilities: ["Wi-Fi", "Dine In", "Takeaway", "Parkir"]
  },
  {
    id: "mlg-soehat",
    name: "Jeda Coffee Soekarno Hatta",
    city: "Malang",
    address: "Jl. Soekarno Hatta No. 42B, Jatimulyo, Kec. Lowokwaru, Kota Malang, Jawa Timur 65141",
    hours: "Setiap Hari, 08.00 – 23.00 WIB",
    phone: "(0341) 551-209",
    lat: -7.9436,
    lng: 112.6155,
    mapQuery: "Jl. Soekarno Hatta, Lowokwaru, Malang",
    facilities: ["Wi-Fi", "Dine In", "Takeaway", "Parkir"]
  },
  {
    id: "sby-tunjungan",
    name: "Jeda Coffee Tunjungan",
    city: "Surabaya",
    address: "Jl. Tunjungan No. 64, Genteng, Kec. Genteng, Surabaya, Jawa Timur 60275",
    hours: "Setiap Hari, 07.30 – 22.30 WIB",
    phone: "(031) 534-8810",
    lat: -7.2592,
    lng: 112.7378,
    mapQuery: "Jl. Tunjungan, Genteng, Surabaya",
    facilities: ["Wi-Fi", "Dine In", "Takeaway"]
  },
  {
    id: "sby-gubeng",
    name: "Jeda Coffee Dharmawangsa",
    city: "Surabaya",
    address: "Jl. Dharmawangsa No. 91, Airlangga, Kec. Gubeng, Surabaya, Jawa Timur 60286",
    hours: "Setiap Hari, 07.00 – 22.00 WIB",
    phone: "(031) 502-4412",
    lat: -7.2725,
    lng: 112.7562,
    mapQuery: "Jl. Dharmawangsa, Gubeng, Surabaya",
    facilities: ["Wi-Fi", "Dine In", "Takeaway", "Parkir"]
  },
  {
    id: "jog-prawirotaman",
    name: "Jeda Coffee Prawirotaman",
    city: "Yogyakarta",
    address: "Jl. Prawirotaman No. 27, Brontokusuman, Kec. Mergangsan, Kota Yogyakarta, DIY 55153",
    hours: "Setiap Hari, 08.00 – 22.30 WIB",
    phone: "(0274) 387-119",
    lat: -7.8191,
    lng: 110.3711,
    mapQuery: "Jl. Prawirotaman, Yogyakarta",
    facilities: ["Wi-Fi", "Dine In", "Takeaway", "Parkir"]
  },
  {
    id: "jog-kaliurang",
    name: "Jeda Coffee Kaliurang KM 5",
    city: "Yogyakarta",
    address: "Jl. Kaliurang KM 5.5 No. 14, Caturtunggal, Kec. Depok, Kab. Sleman, DIY 55281",
    hours: "Setiap Hari, 07.30 – 23.00 WIB",
    phone: "(0274) 554-302",
    lat: -7.7609,
    lng: 110.3804,
    mapQuery: "Jl. Kaliurang KM 5, Sleman, Yogyakarta",
    facilities: ["Wi-Fi", "Dine In", "Takeaway", "Parkir"]
  },
  {
    id: "jkt-melawai",
    name: "Jeda Coffee Blok M Melawai",
    city: "Jakarta Selatan",
    address: "Jl. Melawai Raya No. 21, Melawai, Kec. Kebayoran Baru, Jakarta Selatan, DKI Jakarta 12160",
    hours: "Setiap Hari, 07.00 – 22.30 WIB",
    phone: "(021) 722-9104",
    lat: -6.2442,
    lng: 106.7995,
    mapQuery: "Jl. Melawai Raya, Kebayoran Baru, Jakarta Selatan",
    facilities: ["Wi-Fi", "Dine In", "Takeaway"]
  },
  {
    id: "bdg-braga",
    name: "Jeda Coffee Braga",
    city: "Bandung",
    address: "Jl. Braga No. 58, Braga, Kec. Sumur Bandung, Kota Bandung, Jawa Barat 40111",
    hours: "Setiap Hari, 07.30 – 22.30 WIB",
    phone: "(022) 421-7731",
    lat: -6.9175,
    lng: 107.6095,
    mapQuery: "Jl. Braga, Sumur Bandung, Kota Bandung",
    facilities: ["Wi-Fi", "Dine In", "Takeaway"]
  },
  {
    id: "smg-pemuda",
    name: "Jeda Coffee Pemuda",
    city: "Semarang",
    address: "Jl. Pemuda No. 108, Sekayu, Kec. Semarang Tengah, Kota Semarang, Jawa Tengah 50132",
    hours: "Setiap Hari, 07.30 – 22.00 WIB",
    phone: "(024) 355-6091",
    lat: -6.9786,
    lng: 110.4139,
    mapQuery: "Jl. Pemuda, Semarang Tengah, Kota Semarang",
    facilities: ["Wi-Fi", "Dine In", "Takeaway", "Parkir"]
  },
  {
    id: "dps-renon",
    name: "Jeda Coffee Renon",
    city: "Denpasar",
    address: "Jl. Raya Puputan No. 88, Panjer, Kec. Denpasar Selatan, Kota Denpasar, Bali 80234",
    hours: "Setiap Hari, 07.30 – 22.30 WITA",
    phone: "(0361) 244-510",
    lat: -8.6725,
    lng: 115.2328,
    mapQuery: "Jl. Raya Puputan Renon, Denpasar, Bali",
    facilities: ["Wi-Fi", "Dine In", "Takeaway", "Parkir"]
  },
  {
    id: "mdn-merdeka",
    name: "Jeda Coffee Kesawan",
    city: "Medan",
    address: "Jl. Jenderal Ahmad Yani No. 39, Kesawan, Kec. Medan Barat, Kota Medan, Sumatera Utara 20111",
    hours: "Setiap Hari, 08.00 – 22.30 WIB",
    phone: "(061) 451-8290",
    lat: 3.5852,
    lng: 98.6756,
    mapQuery: "Jl. Jenderal Ahmad Yani Kesawan, Medan",
    facilities: ["Wi-Fi", "Dine In", "Takeaway", "Parkir"]
  },
  {
    id: "mks-panakkukang",
    name: "Jeda Coffee Boulevard Panakkukang",
    city: "Makassar",
    address: "Jl. Boulevard No. 15, Masale, Kec. Panakkukang, Kota Makassar, Sulawesi Selatan 90231",
    hours: "Setiap Hari, 08.00 – 22.30 WITA",
    phone: "(0411) 425-718",
    lat: -5.1547,
    lng: 119.4472,
    mapQuery: "Jl. Boulevard Panakkukang, Makassar",
    facilities: ["Wi-Fi", "Dine In", "Takeaway", "Parkir"]
  }
];