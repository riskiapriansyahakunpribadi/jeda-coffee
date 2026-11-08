/* ============================================================
   BAGIAN   : Data Timeline Perjalanan Jeda (2018-2026)
   FUNGSI   : Menyimpan kartu perjalanan yang ditampilkan di carousel
              "Dari Satu Meja ke 12 Gerai" pada halaman Cerita Kami.
              Dibaca oleh `assets/js/timeline.js` lewat window.JEDA_TIMELINE.
   CARA UBAH:
   - `year`     : tahun yang tampil di lencana kartu dan titik di bawah carousel.
   - `title`    : judul pendek kartu.
   - `desc`     : satu sampai dua kalimat cerita.
   - `imageKey` : nama kunci foto di `assets/data/images.js`
                  (contoh: timeline_2018). Jika kunci belum ada di
                  images.js, kartu akan tampil dengan latar gradasi.
   - Urutan kartu di bawah = urutan tampil di carousel.
   ============================================================ */

/* >>> EDIT DI SINI <<< */
window.JEDA_TIMELINE = [
  {
    year: "2018",
    title: "Satu Meja Kecil di Malang",
    desc: "Jeda bermula dari sebuah meja kecil tempat sekelompok teman menjual kopi susu untuk orang-orang yang butuh berhenti sejenak.",
    imageKey: "timeline_2018"
  },
  {
    year: "2019",
    title: "Gerai Pertama Dibuka",
    desc: "Outlet pertama Jeda hadir di Malang dengan ruang duduk yang nyaman, tempat Teman Jeda betah berlama-lama.",
    imageKey: "timeline_2019"
  },
  {
    year: "2020",
    title: "Jeda Sampai ke Rumah",
    desc: "Layanan antar dan paket seduh di rumah hadir saat semua orang butuh teman untuk menemani hari dari rumah.",
    imageKey: "timeline_2020"
  },
  {
    year: "2021",
    title: "Tumbuh ke Surabaya dan Yogyakarta",
    desc: "Jeda melangkah keluar dari Malang dan menyapa Teman Jeda baru di dua kota besar di Pulau Jawa.",
    imageKey: "timeline_2021"
  },
  {
    year: "2022",
    title: "Menu Pastry dan Makanan Berat",
    desc: "Selain kopi, Jeda mulai menghadirkan pastry hangat dan hidangan utama untuk menemani jeda makan siangmu.",
    imageKey: "timeline_2022"
  },
  {
    year: "2023",
    title: "Hadir di Jakarta dan Bandung",
    desc: "Konsep outlet baru dengan ruang kerja bersama dan sudut santai dihadirkan di dua kota penting ini.",
    imageKey: "timeline_2023"
  },
  {
    year: "2024",
    title: "Lahirnya JedaEvent",
    desc: "Layanan kopi untuk acara dan catering diluncurkan, siap menemani pernikahan, seminar, hingga gathering kantor.",
    imageKey: "timeline_2024"
  },
  {
    year: "2025",
    title: "Gerai ke-10 Dibuka",
    desc: "Outlet kesepuluh resmi dibuka, dan Jeda kini hadir di delapan kota di seluruh Indonesia.",
    imageKey: "timeline_2025"
  },
  {
    year: "2026",
    title: "12 Gerai di 9 Kota",
    desc: "Dari satu meja kecil, Jeda kini menemani ribuan Teman Jeda di dua belas gerai yang tersebar di sembilan kota.",
    imageKey: "timeline_2026"
  }
];