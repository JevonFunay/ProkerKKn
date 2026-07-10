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
  mekanisme?: string[];
  timeline: string;
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
    ],
    timeline: "Senin, 6 Juli 2026",
    pj: "Tim Kelompok 44",
  },
  {
    id: 2,
    title: "Edukasi Keuangan Metode Amplop",
    category: "Literasi Finansial",
    categoryColor: "bg-amber-100 text-amber-700",
    image: "/prokerreyna.webp",
    shortDesc:
      "Peningkatan literasi keuangan rumah tangga bagi ibu-ibu PKK melalui metode amplop.",
    fullDesc:
      "Sebagian besar penduduk Dusun Karangnongko bermata pencaharian sebagai nelayan dengan penghasilan yang tidak tetap (tidak menentu). Fluktuasi pendapatan harian, mingguan, atau musiman membuat pengelolaan keuangan menjadi tantangan tersendiri. Banyak keluarga kesulitan mengatur pengeluaran karena pendapatan yang tidak pasti, sehingga seringkali terjadi kehabisan uang sebelum akhir bulan atau kesulitan menyisihkan untuk kebutuhan darurat. Metode amplop membantu memisahkan anggaran ke dalam pos-pos fisik (kebutuhan pokok, tabungan, dana tak terduga) agar pengeluaran lebih terkontrol dan teratur meskipun pendapatan tidak stabil.",
    highlights: [
      "Pembagian pos: kebutuhan pokok, tabungan, dan dana darurat",
      "Praktik langsung menggunakan amplop berlabel per kategori",
      "Tidak memerlukan literasi digital — metode fisik sederhana",
    ],
    timeline: "Senin, 8 Juli 2026",
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
    pj: "Jevon Christian",
  },
  {
    id: 4,
    title: "Batik Jumputan Teknik Shibori",
    category: "Pemberdayaan",
    categoryColor: "bg-primary-100 text-primary-700",
    image: "/ProkerWina.webp",
    shortDesc:
      "Pelatihan pewarnaan kain metode ikat-celup Shibori untuk ibu-ibu PKK.",
    fullDesc:
      "Teknik Shibori merupakan seni pewarnaan kain asal Jepang yang dapat diterapkan dengan bahan sederhana. Pelatihan ini memberdayakan ibu-ibu PKK agar memiliki keterampilan membuat produk kain bernilai jual tinggi, membuka peluang wirausaha kreatif di lingkungan desa.",
    highlights: [
      "Pelatihan teknik ikat, lipat, dan celup kain (Shibori)",
      "Menggunakan pewarna alami dan bahan ramah lingkungan",
      "Produk jadi berpotensi dijual sebagai oleh-oleh wisata",
    ],
    timeline: "Rabu, 15 Juli 2026",
    pj: "Lidwina Cahya",
  },
  {
    id: 5,
    title: "Senam Hipertensi Lansia Happy",
    category: "Kesehatan",
    categoryColor: "bg-lime-100 text-lime-700",
    image: "/prokerlili.webp",
    shortDesc:
      "Posyandu Lansia dan Cek Kesehatan Gratis sebagai upaya deteksi dini dan pencegahan komplikasi hipertensi pada lansia Dusun Karangnongko.",
    fullDesc:
      "Dusun Karangnongko memiliki jumlah penduduk lanjut usia yang cukup tinggi sehingga pelayanan kesehatan lansia menjadi salah satu kebutuhan utama masyarakat. Mayoritas lansia memiliki riwayat hipertensi yang memerlukan pemantauan tekanan darah secara rutin agar komplikasi seperti stroke, penyakit jantung, dan gagal ginjal dapat dicegah sedini mungkin. Melalui kegiatan Posyandu Lansia dan Cek Kesehatan Gratis, program ini bertujuan memantau kondisi kesehatan lansia, mendeteksi penyakit secara dini, serta memberikan edukasi mengenai pola hidup sehat agar kualitas hidup lansia tetap optimal.",
    highlights: [
      "Senam anti-hipertensi bersama peserta",
      "Edukasi terkait hipertensi dan pencegahannya",
      "Pemeriksaan berat badan, tinggi badan, dan lingkar perut",
      "Pemeriksaan tekanan darah",
      "Pemeriksaan gula darah",
      "Pengisian skrining formulir Cek Kesehatan Gratis",
    ],
    mekanisme: [
      "Peserta melakukan registrasi dan mengambil nomor urut antrian.",
      "Peserta melakukan senam anti-hipertensi bersama.",
      "Peserta mengikuti edukasi mengenai hipertensi, pola makan rendah garam, dan aktivitas fisik.",
      "Peserta melakukan pengisian identitas diri sesuai nomor urut.",
      "Dilakukan pemeriksaan berat badan, tinggi badan, dan lingkar perut.",
      "Peserta melakukan pemeriksaan tekanan darah.",
      "Peserta menjalani pemeriksaan gula darah.",
      "Kegiatan diakhiri dengan pengisian formulir Cek Kesehatan Gratis bagi peserta yang belum mengisi.",
    ],
    timeline: "Kamis, 9 Juli 2026",
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
    pj: "Gatot Subroto",
  },
  {
    id: 7,
    title: "Peningkatan Kualitas Pelayanan UMKM",
    category: "Pemberdayaan UMKM",
    categoryColor: "bg-yellow-100 text-yellow-800",
    image: "/prokerkelpin.webp",
    shortDesc:
      "Sosialisasi dan pelatihan kualitas pelayanan untuk membangun kepercayaan pelanggan UMKM desa.",
    fullDesc:
      "UMKM Dusun Karangnongko memiliki produk dan jasa yang potensial, namun kualitas pelayanan yang belum terstandar membuat kepercayaan pelanggan sulit dibangun secara konsisten. Program ini melatih pelaku usaha dalam komunikasi, etika, dan strategi menangani keluhan pelanggan.",
    highlights: [
      "Pelatihan teknik senyum, sapa, dan sopan dalam melayani",
      "Strategi menangani keluhan pelanggan secara efektif",
      "Cara membangun loyalitas dan word-of-mouth positif",
    ],
    timeline: "Senin, 13 Juli 2026",
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
