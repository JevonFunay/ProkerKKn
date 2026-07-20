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
    categoryColor: "bg-orange-100 text-orange-700 dark:bg-orange-500/15 dark:text-orange-400",
    image: "/ProkerUtama.jpeg",
    shortDesc:
      "Edukasi kesiapsiagaan gempa bumi melalui sayembara penyusunan tas siaga bencana.",
    fullDesc:
      "Dusun Karangnongko berada di zona aktif lempeng Indo-Australia sehingga sangat rentan terhadap gempa bumi dan tsunami. Program ini mendorong warga mempersiapkan tas siaga berisi dokumen penting, obat-obatan, dan logistik darurat melalui kegiatan sayembara yang menyenangkan dan edukatif.",
    highlights: [
      "Simulasi langsung penyusunan tas siaga bersama warga",
      "Edukasi dokumen prioritas: KTP, KK, akta, buku tabungan",
      "Pengenalan jalur evakuasi dan titik kumpul terdekat",
    ],
    timeline: "Senin, 13 Juli 2026",
    pj: "Tim Kelompok 44",
  },
  {
    id: 2,
    title: "Edukasi Perencanaan & Pengelolaan Keuangan Rumah Tangga dengan Metode Amplop",
    category: "Literasi Finansial",
    categoryColor: "bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-400",
    image: "/prokerreyna.webp",
    shortDesc:
      "Edukasi perencanaan dan pengelolaan keuangan rumah tangga melalui Metode Amplop beserta pencatatan pengeluaran sederhana.",
    fullDesc:
      "Beberapa keluarga di Dusun Karangnongko mengelola uang bulanan tanpa perencanaan tertulis. Pemasukan dan pengeluaran tercampur dalam satu tempat, sehingga kebutuhan pokok seperti pasar dan sekolah anak sering kehabisan jatah sebelum akhir bulan. Belum ada kebiasaan memisahkan dan mencatat pengeluaran rumah tangga secara sederhana. Menjawab tantangan literasi keuangan tersebut, program ini mengenalkan Metode Amplop: cara sederhana memisahkan uang bulanan ke dalam beberapa amplop sesuai kategori kebutuhan (pasar, sekolah anak, listrik, bensin, dan dana darurat), dilengkapi dengan pencatatan pengeluaran sederhana.",
    highlights: [
      "Praktik langsung membagi uang ke amplop bersama peserta",
      "Edukasi pencatatan sederhana pemasukan dan pengeluaran rumah tangga",
      "Pendampingan menentukan prioritas kebutuhan sesuai kondisi tiap keluarga",
    ],
    mekanisme: [
      "Peserta mengisi pre-test singkat mengenai kebiasaan mengatur keuangan sebelum materi dimulai.",
      "Fasilitator menyampaikan ilustrasi masalah keuangan rumah tangga sehari-hari.",
      "Praktik langsung membagi uang bulanan ke amplop sesuai kategori kebutuhan, melibatkan peserta menentukan prioritas dan nominal.",
      "Praktik mencatat pengeluaran di buku catatan sederhana setiap kali amplop digunakan.",
      "Peserta mengisi post-test, menerima amplop dan buku catatan sebagai alat praktik mandiri di rumah.",
    ],
    timeline: "Rabu, 8 Juli 2026",
    pj: "Reynathania Nonie",
  },
  {
    id: 3,
    title: "Website E-Portofolio KKN",
    category: "Teknologi",
    categoryColor: "bg-teal-100 text-teal-700 dark:bg-teal-500/15 dark:text-teal-400",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    shortDesc:
      "Rancang bangun sistem informasi berbasis web untuk dokumentasi pengabdian KKN.",
    fullDesc:
      "Website ini dirancang sebagai arsip digital jangka panjang untuk mendokumentasikan seluruh program kerja, potensi desa, dan rekam jejak pengabdian Kelompok 44 UKDW di Dusun Karangnongko. Dibangun menggunakan teknologi modern agar ringan dan mudah diakses dari perangkat apapun.",
    highlights: [
      "Dibangun dengan Next.js, TypeScript, dan Tailwind CSS",
      "Dapat diakses publik sebagai referensi pengabdian",
      "Mendokumentasikan 7 program kerja dan 4 potensi proker",
      "Dirancang berkelanjutan untuk KKN periode berikutnya",
    ],
    timeline: "Berlangsung selama periode KKN",
    pj: "Jevon Christian",
  },
  {
    id: 4,
    title: "Batik Jumputan Teknik Shibori",
    category: "Pemberdayaan",
    categoryColor: "bg-primary-100 text-primary-700 dark:bg-primary-500/15 dark:text-primary-400",
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
    timeline: "Senin, 6 Juli 2026",
    pj: "Lidwina Cahya",
  },
  {
    id: 5,
    title: "Senam Hipertensi Lansia Happy",
    category: "Kesehatan",
    categoryColor: "bg-lime-100 text-lime-700 dark:bg-lime-500/15 dark:text-lime-400",
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
    title: "Digitalisasi Informasi Geospasial Dusun Karangnongko Berbasis GIS, OpenStreetMap, dan Google Maps",
    category: "Pemetaan Digital",
    categoryColor: "bg-stone-100 text-stone-700 dark:bg-stone-500/15 dark:text-stone-400",
    image: "/ProkerGatot.jpg",
    shortDesc:
      "Pemetaan batas wilayah dusun dan digitalisasi lokasi penting melalui GIS, OpenStreetMap, dan Google Maps.",
    fullDesc:
      "Dusun Karangnongko memiliki berbagai potensi berupa fasilitas umum, UMKM, serta destinasi wisata yang belum sepenuhnya terdokumentasi secara digital. Selain itu, informasi mengenai batas wilayah dusun belum tersedia dalam platform pemetaan digital yang mudah diakses masyarakat. Kondisi tersebut menyebabkan masyarakat, pendatang, maupun wisatawan mengalami kesulitan dalam memperoleh informasi lokasi maupun memahami cakupan wilayah Dusun Karangnongko. Melalui program ini dilakukan pemetaan batas wilayah dusun menggunakan teknologi Geographic Information System (GIS), digitalisasi data spasial melalui OpenStreetMap, serta pendataan lokasi-lokasi penting seperti balai dusun, UMKM, lapangan olahraga, balai masyarakat, dan objek wisata. Selanjutnya, data tersebut dipublikasikan ke platform Google Maps sehingga dapat diakses oleh masyarakat secara luas. Program ini diharapkan dapat meningkatkan aksesibilitas informasi wilayah, mendukung promosi potensi dusun, serta menjadi data spasial yang bermanfaat bagi pemerintah desa dalam pengembangan wilayah.",
    highlights: [
      "Koordinasi dengan Kepala Dusun terkait batas wilayah administrasi",
      "Survei lapangan dan validasi lokasi fasilitas umum serta potensi dusun",
      "Digitalisasi batas wilayah menggunakan QGIS",
      "Digitasi batas wilayah ke OpenStreetMap menggunakan JOSM",
      "Pendataan lokasi penting: Balai Dusun, UMKM, Lapangan Voli, Balai Masyarakat, Goa, dan fasilitas lainnya",
      "Pengajuan lokasi baru ke Google Maps melalui Google Maps Contributor",
      "Validasi hasil pemetaan dan publikasi data spasial",
    ],
    mekanisme: [
      "Melakukan koordinasi dengan Kepala Dusun untuk memperoleh informasi mengenai batas wilayah dan lokasi-lokasi penting.",
      "Melaksanakan survei lapangan untuk mengumpulkan koordinat dan dokumentasi fasilitas umum, UMKM, serta potensi wisata.",
      "Mengolah data spasial menggunakan QGIS untuk menghasilkan peta batas wilayah Dusun Karangnongko.",
      "Melakukan digitasi batas wilayah ke OpenStreetMap menggunakan aplikasi JOSM sesuai hasil survei lapangan.",
      "Menambahkan dan memperbarui data lokasi penting pada Google Maps agar dapat diakses oleh masyarakat.",
      "Melakukan pengecekan dan validasi terhadap hasil pemetaan sebelum dipublikasikan.",
      "Menyusun peta digital Dusun Karangnongko sebagai media informasi wilayah.",
    ],
    timeline: "Berlangsung selama periode KKN",
    pj: "Gatot Subroto",
  },
  {
    id: 7,
    title: "Edukasi QRIS: Cara Mudah Bertransaksi Digital untuk UMKM dan Masyarakat",
    category: "Literasi Digital",
    categoryColor: "bg-sky-100 text-sky-700 dark:bg-sky-500/15 dark:text-sky-400",
    image: "/prokerkelpin.webp",
    shortDesc:
      "Sosialisasi penggunaan QRIS bagi pelaku UMKM, Ibu PKK, dan masyarakat Dusun Karangnongko agar lebih percaya diri bertransaksi digital.",
    fullDesc:
      "Saat ini pembayaran digital semakin sering digunakan dalam kehidupan sehari-hari. Namun, masih banyak pelaku UMKM dan masyarakat yang belum memahami cara menggunakan QRIS, terutama di daerah yang memiliki keterbatasan sinyal. Padahal, QRIS dapat membantu proses pembayaran menjadi lebih praktis karena cukup menggunakan satu kode QR untuk berbagai aplikasi pembayaran. Program ini memberikan pemahaman mengenai apa itu QRIS, manfaatnya, cara membuat QRIS, cara menggunakannya dengan benar, serta solusi saat jaringan internet kurang stabil dan tips agar transaksi digital tetap aman.",
    highlights: [
      "Pengenalan apa itu QRIS dan manfaatnya bagi UMKM maupun masyarakat",
      "Edukasi cara membuat QRIS melalui aplikasi merchant",
      "Demonstrasi cara menerima dan melakukan pembayaran menggunakan QRIS",
      "Tanya jawab mengenai kendala penggunaan QRIS, termasuk saat sinyal kurang baik",
      "Praktik langsung menggunakan QRIS bersama peserta",
    ],
    mekanisme: [
      "Peserta mengikuti penyampaian materi mengenai QRIS oleh mahasiswa KKN Kelompok 44.",
      "Peserta diperkenalkan manfaat QRIS bagi UMKM maupun masyarakat.",
      "Demonstrasi cara membuat QRIS Merchant menggunakan aplikasi GoPay Merchant.",
      "Simulasi pembayaran menggunakan QRIS antara peserta dan pemateri.",
      "Sesi tanya jawab mengenai penggunaan QRIS serta solusi ketika mengalami kendala sinyal.",
      "Penutupan dan dokumentasi bersama.",
    ],
    timeline: "Rabu, 8 Juli 2026",
    pj: "Kelpin Saktara Tirta",
  },
];

export const potensiDesa: PotensiData[] = [
  {
    id: 8,
    title: "Pembangunan Tempat Pembakaran Sampah Terpusat",
    category: "Lingkungan",
    categoryColor: "bg-lime-100 text-lime-700 dark:bg-lime-500/15 dark:text-lime-400",
    image: "/potensisampah.jpeg",
    shortDesc:
      "Fasilitas pengelolaan sampah terpusat khusus dusun untuk mengatasi kebiasaan membuang sampah sembarangan.",
    fullDesc:
      "Kebiasaan membuang sampah sembarangan masih banyak dijumpai di Dusun Karangnongko karena belum tersedia fasilitas pengelolaan sampah. Pembangunan tempat pembakaran sampah terpusat khusus di dusun ini diharapkan menjadi solusi agar sampah rumah tangga terkumpul dan tertangani di satu titik, sehingga lingkungan dusun menjadi lebih bersih dan sehat.",
    highlights: [
      "Menjawab masalah membuang sampah sembarangan yang masih marak",
      "Sampah rumah tangga terkumpul dan tertangani di satu titik",
      "Mencegah penumpukan sampah liar di lingkungan dusun",
      "Perlu kesepakatan warga untuk lokasi dan pengelolaannya",
    ],
    timeline: "Rekomendasi pengembangan berkelanjutan",
    pj: "Rekomendasi KKN Kelompok 44",
  },
  {
    id: 9,
    title: "Digitalisasi UMKM Rengginang",
    category: "Ekonomi Digital",
    categoryColor: "bg-sky-100 text-sky-700 dark:bg-sky-500/15 dark:text-sky-400",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
    shortDesc:
      "Perluasan pemasaran rengginang beras ketan yang saat ini hanya melayani pesanan langsung dan telepon.",
    fullDesc:
      "UMKM rengginang beras ketan di Dusun Karangnongko saat ini hanya melayani pemesanan dengan datang langsung atau menelepon pengelolanya. Digitalisasi sederhana, mulai dari pendaftaran lokasi usaha di Google Maps, katalog produk digital, hingga pemasaran melalui media sosial, dapat memperluas jangkauan pembeli tanpa mengubah proses produksi rumahan yang sudah berjalan. Namun ada satu hal yang harus dipikirkan terlebih dahulu: usaha ini sepenuhnya dijalankan oleh para simbah, sehingga digitalisasi tidak mungkin diterapkan oleh pengelola yang sekarang. Langkah awalnya adalah mencari penerus dari generasi muda dusun yang bersedia melanjutkan usaha sekaligus menerapkan digitalisasinya.",
    highlights: [
      "Pemesanan saat ini terbatas datang langsung atau via telepon",
      "Pendaftaran lokasi usaha di Google Maps agar mudah ditemukan",
      "Katalog produk dan promosi melalui media sosial",
      "Harus dicari penerus yang mampu menerapkan digitalisasi, karena tidak mungkin dijalankan para simbah pengelola saat ini",
    ],
    timeline: "Rekomendasi pengembangan berkelanjutan",
    pj: "Rekomendasi KKN Kelompok 44",
  },
  {
    id: 10,
    title: "Pembuatan Titik Kumpul Bencana",
    category: "Kebencanaan",
    categoryColor: "bg-orange-100 text-orange-700 dark:bg-orange-500/15 dark:text-orange-400",
    image: "/assembly-point-scaled.webp",
    shortDesc:
      "Penetapan titik kumpul evakuasi warga karena dusun sama sekali belum memilikinya.",
    fullDesc:
      "Hingga saat ini Dusun Karangnongko sama sekali belum memiliki titik kumpul evakuasi, padahal wilayahnya berada di zona rawan gempa bumi. Penetapan titik kumpul yang aman dan mudah dijangkau, dilengkapi papan penunjuk arah evakuasi, sangat dibutuhkan agar warga mengetahui tempat berkumpul saat terjadi keadaan darurat. Rekomendasi ini melengkapi program mitigasi bencana yang telah dijalankan KKN Kelompok 44.",
    highlights: [
      "Dusun belum memiliki titik kumpul evakuasi sama sekali",
      "Wilayah berada di zona rawan gempa lempeng Indo-Australia",
      "Perlu lokasi lapang yang aman dan mudah dijangkau seluruh warga",
      "Dilengkapi papan penunjuk arah dan sosialisasi jalur evakuasi",
    ],
    timeline: "Rekomendasi pengembangan berkelanjutan",
    pj: "Rekomendasi KKN Kelompok 44",
  },
  {
    id: 11,
    title: "Sistem Anti-Hama untuk Kebun Warga",
    category: "Pertanian",
    categoryColor: "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&h=500&fit=crop",
    shortDesc:
      "Perlindungan kebun warga dari serangan hama monyet dan babi hutan yang merusak hasil pertanian.",
    fullDesc:
      "Kebun warga Dusun Karangnongko kerap dirusak oleh hama monyet dan babi hutan, sehingga hasil pertanian yang seharusnya menjadi penghasilan sampingan sering gagal dipanen. Diperlukan sistem anti-hama yang efektif, mulai dari pagar pengaman kebun, alat pengusir hama sederhana, hingga pemilihan komoditas yang tidak diminati hama, agar lahan warga kembali produktif dan kerugian petani dapat ditekan.",
    highlights: [
      "Hama monyet dan babi hutan menjadi masalah utama kebun warga",
      "Pemasangan pagar pengaman atau pembatas kebun",
      "Alat pengusir hama sederhana yang mudah dirawat warga",
      "Pemilihan komoditas yang tidak diminati hama sebagai alternatif",
    ],
    timeline: "Rekomendasi pengembangan berkelanjutan",
    pj: "Rekomendasi KKN Kelompok 44",
  },
];

export const statsData = [
  { label: "Kepala Keluarga", value: "69 KK", icon: "Users" as const },
  { label: "Jumlah Penduduk", value: "± 169 Jiwa", icon: "ClipboardList" as const },
  { label: "Mata Pencaharian Utama", value: "Mayoritas Nelayan", icon: "Anchor" as const },
];

export const navLinks = [
  { label: "Beranda", href: "/" },
  { label: "Berita", href: "/#berita" },
  { label: "Profil Tim", href: "/tim" },
  { label: "Program Kerja", href: "/#program" },
  { label: "Potensi Proker", href: "/#potensi" },
];
