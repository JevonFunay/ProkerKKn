// Data types and content for the KKN portfolio

export interface ProgramData {
  id: number;
  title: string;
  category: string;
  categoryColor: string;
  image: string;
  shortDesc: string;
  fullDesc: string;
  highlights: string[];
  timeline: string;
  target: string;
  pj: string;
}

export interface PotensiData {
  id: number;
  title: string;
  category: string;
  categoryColor: string;
  image: string;
  shortDesc: string;
  fullDesc: string;
  highlights: string[];
  timeline: string;
  target: string;
  pj: string;
}

export const programKerja: ProgramData[] = [
  {
    id: 1,
    title: "Sayembara Tas Siaga Bencana Gempa Bumi",
    category: "Kebencanaan",
    categoryColor: "bg-orange-100 text-orange-700",
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&h=500&fit=crop",
    shortDesc:
      "Edukasi kesiapsiagaan gempa bumi melalui sayembara penyusunan tas siaga bencana.",
    fullDesc:
      "Dusun Karangnongko berada di zona aktif lempeng Indo-Australia sehingga sangat rentan terhadap gempa bumi dan tsunami. Program ini mendorong warga mempersiapkan tas siaga berisi dokumen penting, obat-obatan, dan logistik darurat melalui kegiatan sayembara yang menyenangkan dan edukatif.",
    highlights: [
      "Simulasi langsung penyusunan tas siaga bersama warga",
      "Edukasi dokumen prioritas: KTP, KK, akta, buku tabungan",
      "Pengenalan jalur evakuasi dan titik kumpul terdekat",
      "Sasaran: kepala keluarga dan anggota dewasa Dusun Karangnongko",
    ],
    timeline: "Senin, 6 Juli 2026",
    target: "Masyarakat memahami isi, fungsi, dan cara mengaktifkan tas siaga bencana gempa bumi.",
    pj: "Tim Kelompok 44",
  },
  {
    id: 2,
    title: "Edukasi Keuangan Metode Amplop",
    category: "Literasi Finansial",
    categoryColor: "bg-amber-100 text-amber-700",
    image: "/ProkerReynaKelpin.jpg",
    shortDesc:
      "Peningkatan literasi keuangan rumah tangga bagi ibu-ibu PKK melalui metode amplop.",
    fullDesc:
      "Banyak keluarga di Dusun Karangnongko yang berpenghasilan tidak tetap dari hasil tangkapan nelayan, sehingga pengelolaan keuangan yang sederhana dan konsisten menjadi sangat penting. Metode amplop memisahkan anggaran ke dalam pos-pos fisik yang mudah dipahami tanpa membutuhkan aplikasi digital.",
    highlights: [
      "Pembagian pos: kebutuhan pokok, tabungan, dan dana darurat",
      "Praktik langsung menggunakan amplop berlabel per kategori",
      "Tidak memerlukan literasi digital — metode fisik sederhana",
      "Sasaran: ibu-ibu PKK dan ibu rumah tangga Dusun Karangnongko",
    ],
    timeline: "Senin, 13 Juli 2026",
    target: "Ibu-ibu PKK mampu membagi pos keuangan rumah tangga secara mandiri dan konsisten.",
    pj: "Reynathania Nonie",
  },
  {
    id: 3,
    title: "Website E-Portofolio KKN",
    category: "Teknologi",
    categoryColor: "bg-teal-100 text-teal-700",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    shortDesc:
      "Rancang bangun sistem informasi berbasis web untuk dokumentasi pengabdian KKN.",
    fullDesc:
      "Website ini dirancang sebagai arsip digital jangka panjang untuk mendokumentasikan seluruh program kerja, potensi desa, dan rekam jejak pengabdian Kelompok 44 UKDW di Dusun Karangnongko. Dibangun menggunakan teknologi modern agar ringan dan mudah diakses dari perangkat apapun.",
    highlights: [
      "Dibangun dengan Next.js, TypeScript, dan Tailwind CSS",
      "Dapat diakses publik sebagai referensi pengabdian",
      "Mendokumentasikan 7 program kerja dan 4 potensi desa",
      "Dirancang berkelanjutan untuk KKN periode berikutnya",
    ],
    timeline: "Berlangsung selama periode KKN",
    target: "Tersedia arsip digital interaktif program kerja dan potensi Dusun Karangnongko.",
    pj: "Jevon Christian",
  },
  {
    id: 4,
    title: "Batik Jumputan Teknik Shibori",
    category: "Pemberdayaan",
    categoryColor: "bg-primary-100 text-primary-700",
    image: "/ProkerWina.jpg",
    shortDesc:
      "Pelatihan pewarnaan kain metode ikat-celup Shibori untuk ibu-ibu PKK.",
    fullDesc:
      "Teknik Shibori merupakan seni pewarnaan kain asal Jepang yang dapat diterapkan dengan bahan sederhana. Pelatihan ini memberdayakan ibu-ibu PKK agar memiliki keterampilan membuat produk kain bernilai jual tinggi, membuka peluang wirausaha kreatif di lingkungan desa.",
    highlights: [
      "Pelatihan teknik ikat, lipat, dan celup kain (Shibori)",
      "Menggunakan pewarna alami dan bahan ramah lingkungan",
      "Produk jadi berpotensi dijual sebagai oleh-oleh wisata",
      "Sasaran: ibu-ibu PKK yang berminat berwirausaha kreatif",
    ],
    timeline: "Rabu, 15 Juli 2026",
    target: "Ibu-ibu PKK memiliki keterampilan dasar membuat produk kain Shibori bernilai jual.",
    pj: "Lidwina Cahya",
  },
  {
    id: 5,
    title: "Senam Hipertensi Lansia Happy",
    category: "Kesehatan",
    categoryColor: "bg-lime-100 text-lime-700",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=500&fit=crop",
    shortDesc:
      "Upaya preventif kesehatan lansia melalui senam pengendalian tekanan darah.",
    fullDesc:
      "Hipertensi merupakan salah satu masalah kesehatan yang umum dialami lansia di Dusun Karangnongko. Program ini mengadakan senam khusus hipertensi yang menyenangkan dan aman bagi lansia, dilengkapi edukasi pola makan sehat sebagai upaya preventif jangka panjang.",
    highlights: [
      "Senam gerakan ringan khusus pengendalian tekanan darah",
      "Edukasi makanan rendah garam dan gaya hidup aktif",
      "Dilaksanakan bersama kader Posyandu Lansia setempat",
      "Sasaran: warga lansia (55+ tahun) Dusun Karangnongko",
    ],
    timeline: "Kamis, 9 Juli 2026",
    target: "Lansia memperoleh edukasi dan keterampilan menjaga kesehatan secara mandiri.",
    pj: "Elisabeth Liliana",
  },
  {
    id: 6,
    title: "Mapping Wilayah Google Maps",
    category: "Infrastruktur",
    categoryColor: "bg-stone-100 text-stone-700",
    image: "https://images.unsplash.com/photo-1569336415962-a4bd9f69c07b?w=800&h=500&fit=crop",
    shortDesc:
      "Digitalisasi titik koordinat lokasi krusial Dusun Karangnongko ke Google Maps.",
    fullDesc:
      "Banyak lokasi penting di Dusun Karangnongko seperti Pustu, Balai Dusun, dan fasilitas umum belum terdaftar di Google Maps, menyulitkan warga dan pendatang menemukan lokasi tersebut. Program ini mendigitalisasi titik-titik koordinat penting agar mudah ditemukan melalui smartphone.",
    highlights: [
      "Pemetaan Pustu, Balai Dusun, dan fasilitas umum ke Google Maps",
      "Menambahkan titik warung, jasa, dan lokasi UMKM lokal",
      "Data tersimpan permanen dan bisa diakses siapa saja",
      "Meningkatkan visibilitas dusun di platform digital global",
    ],
    timeline: "Berlangsung selama periode KKN",
    target: "Lokasi-lokasi krusial Dusun Karangnongko mudah ditemukan via Google Maps.",
    pj: "Gatot Subroto",
  },
  {
    id: 7,
    title: "Peningkatan Kualitas Pelayanan UMKM",
    category: "Pemberdayaan UMKM",
    categoryColor: "bg-yellow-100 text-yellow-800",
    image: "/ProkerReynaKelpin.jpg",
    shortDesc:
      "Sosialisasi dan pelatihan kualitas pelayanan untuk membangun kepercayaan pelanggan UMKM desa.",
    fullDesc:
      "UMKM Dusun Karangnongko memiliki produk dan jasa yang potensial, namun kualitas pelayanan yang belum terstandar membuat kepercayaan pelanggan sulit dibangun secara konsisten. Program ini melatih pelaku usaha dalam komunikasi, etika, dan strategi menangani keluhan pelanggan.",
    highlights: [
      "Pelatihan teknik senyum, sapa, dan sopan dalam melayani",
      "Strategi menangani keluhan pelanggan secara efektif",
      "Cara membangun loyalitas dan word-of-mouth positif",
      "Sasaran: pelaku warung dan UMKM kecil Dusun Karangnongko",
    ],
    timeline: "Senin, 13 Juli 2026",
    target: "Pelaku UMKM menerapkan standar pelayanan prima secara konsisten dan berkelanjutan.",
    pj: "Kelpin Saktara",
  },
];

export const potensiDesa: PotensiData[] = [
  {
    id: 8,
    title: "Inovasi Olahan Hasil Laut Tahan Lama",
    category: "Potensi Kelautan",
    categoryColor: "bg-teal-100 text-teal-700",
    image: "https://images.unsplash.com/photo-1510130387422-82bed34b37e9?w=800&h=500&fit=crop",
    shortDesc:
      "Optimalisasi tangkapan nelayan menjadi produk UMKM berumur simpan panjang.",
    fullDesc:
      "Nelayan Karangnongko memiliki hasil tangkapan yang melimpah pada musim tertentu, namun sering mengalami kerugian karena tidak ada sistem pengolahan pasca-panen. Inovasi berupa produk olahan tahan lama seperti abon ikan atau ikan asin vakum dapat membuka pasar baru dan meningkatkan pendapatan nelayan.",
    highlights: [
      "Potensi produk: abon ikan, ikan asin vakum, kerupuk ikan",
      "Mengurangi kerugian saat hasil tangkapan melimpah",
      "Berpeluang masuk pasar oleh-oleh dan modern trade",
      "Butuh pelatihan pengolahan dan pengemasan higienis",
    ],
    timeline: "Rekomendasi pengembangan berkelanjutan",
    target: "Produk olahan hasil laut Karangnongko memiliki nilai tambah dan daya saing pasar.",
    pj: "Rekomendasi KKN Kelompok 44",
  },
  {
    id: 9,
    title: "Modernisasi Rengginang Beras Ketan",
    category: "Inovasi UMKM",
    categoryColor: "bg-amber-100 text-amber-700",
    image: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?w=800&h=500&fit=crop",
    shortDesc:
      "Peningkatan nilai jual rengginang lokal melalui kemasan dan varian rasa baru.",
    fullDesc:
      "Rengginang beras ketan adalah produk unggulan UMKM Karangnongko yang memiliki basis pelanggan setia. Namun kemasan lama dan keterbatasan varian rasa membuat produk ini sulit bersaing di pasar wisata yang semakin kompetitif. Modernisasi kemasan dan inovasi rasa adalah kunci meningkatkan daya jualnya.",
    highlights: [
      "Upgrade ke kemasan standing pouch ziplock agar lebih tahan lama",
      "Inovasi varian rasa: keju, balado, rumput laut, dan pedas manis",
      "Desain label menarik yang menonjolkan identitas lokal Watukarung",
      "Potensi sebagai produk oleh-oleh khas wisata pantai Pacitan",
    ],
    timeline: "Rekomendasi pengembangan berkelanjutan",
    target: "Rengginang Karangnongko dikenal dan diminati sebagai oleh-oleh wisatawan.",
    pj: "Rekomendasi KKN Kelompok 44",
  },
  {
    id: 10,
    title: "Pengembangan Homestay Inklusif",
    category: "Pariwisata",
    categoryColor: "bg-emerald-100 text-emerald-700",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=500&fit=crop",
    shortDesc:
      "Pemanfaatan kamar kosong warga menjadi penginapan transit sederhana dan terjangkau.",
    fullDesc:
      "Pantai Watukarung mulai dikenal wisatawan sebagai destinasi surfing dan pemandangan alam, namun keterbatasan penginapan membuat banyak wisatawan harus bermalam di kota. Kamar kosong milik warga berpotensi menjadi homestay sederhana yang memberikan penghasilan tambahan tanpa modal besar.",
    highlights: [
      "Lokasi strategis dekat Pantai Watukarung yang viral di media sosial",
      "Modal awal kecil: hanya membutuhkan standarisasi kamar dan fasilitas dasar",
      "Peluang paket wisata: surf, mancing, dan kuliner lokal",
      "Perlu dukungan desa wisata dan pendampingan standar hospitality",
    ],
    timeline: "Rekomendasi pengembangan berkelanjutan",
    target: "Warga memiliki pendapatan tambahan dari sektor pariwisata berbasis komunitas.",
    pj: "Rekomendasi KKN Kelompok 44",
  },
  {
    id: 11,
    title: "Budi Daya Tanaman Anti-Hama (Empon-Empon)",
    category: "Pertanian",
    categoryColor: "bg-lime-100 text-lime-700",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&h=500&fit=crop",
    shortDesc:
      "Alih fungsi lahan rawan hama dengan komoditas jahe, kunyit, dan temulawak.",
    fullDesc:
      "Lahan pertanian di Karangnongko kerap dirusak oleh hama monyet dan babi hutan, membuat petani merugi dan lahan menjadi tidak produktif. Empon-empon (tanaman rimpang) seperti jahe, kunyit, dan temulawak tidak diminati hama, mudah dirawat, dan memiliki permintaan pasar yang stabil sebagai bahan baku jamu.",
    highlights: [
      "Jahe, kunyit, dan temulawak tidak diminati hama monyet & babi hutan",
      "Permintaan pasar bahan baku jamu stabil sepanjang tahun",
      "Biaya budidaya rendah dan tidak membutuhkan irigasi intensif",
      "Berpotensi menjadi komoditas unggulan dusun jangka panjang",
    ],
    timeline: "Rekomendasi pengembangan berkelanjutan",
    target: "Lahan rawan hama tetap produktif dan menghasilkan komoditas bernilai ekonomi.",
    pj: "Rekomendasi KKN Kelompok 44",
  },
];

export const statsData = [
  { label: "Kepala Keluarga", value: "50 KK", icon: "Users" as const },
  { label: "Jumlah Penduduk", value: "± 150 Jiwa", icon: "ClipboardList" as const },
  { label: "Mata Pencaharian Utama", value: "Mayoritas Nelayan", icon: "Anchor" as const },
  { label: "Zona Wilayah", value: "Pesisir Selatan Jawa", icon: "MapPin" as const },
];

export const navLinks = [
  { label: "Beranda", href: "/" },
  { label: "Profil Tim", href: "/tim" },
  { label: "Program Kerja", href: "/#program" },
  { label: "Potensi Desa", href: "/#potensi" },
];
