// Data types and content for the KKN portfolio

export interface ProgramData {
  id: number;
  title: string;
  category: string;
  categoryColor: string;
  image: string;
  shortDesc: string;
  fullDesc: string;
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
  timeline: string;
  target: string;
  pj: string;
}

export const programKerja: ProgramData[] = [
  {
    id: 1,
    title: "Sayembara Tas Siaga Bencana Gempa Bumi",
    category: "Kebencanaan",
    categoryColor: "bg-red-100 text-red-700",
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&h=500&fit=crop",
    shortDesc:
      "Edukasi kesiapsiagaan gempa bumi melalui sayembara penyusunan tas siaga bencana.",
    fullDesc:
      "Edukasi kesiapsiagaan masyarakat menghadapi gempa bumi melalui sayembara penyusunan tas siaga bencana yang berisi dokumen penting dan logistik darurat.",
    timeline: "Dilaksanakan selama periode KKN Kelompok 44",
    target: "Masyarakat memahami isi dan fungsi tas siaga bencana gempa bumi.",
    pj: "Tim Kelompok 44",
  },
  {
    id: 2,
    title: "Edukasi Keuangan Metode Amplop",
    category: "Literasi Finansial",
    categoryColor: "bg-amber-100 text-amber-700",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=500&fit=crop",
    shortDesc:
      "Peningkatan literasi keuangan rumah tangga bagi ibu-ibu PKK melalui metode amplop.",
    fullDesc:
      "Peningkatan literasi keuangan rumah tangga bagi ibu-ibu PKK melalui metode amplop sederhana untuk mengatur pos pengeluaran, tabungan, dan dana darurat.",
    timeline: "Dilaksanakan selama periode KKN Kelompok 44",
    target: "Ibu-ibu PKK mampu membagi pos keuangan rumah tangga secara sederhana.",
    pj: "Reynathania Nonie",
  },
  {
    id: 3,
    title: "Website E-Portofolio KKN",
    category: "Teknologi",
    categoryColor: "bg-emerald-100 text-emerald-700",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    shortDesc:
      "Rancang bangun sistem informasi berbasis web untuk dokumentasi pengabdian KKN.",
    fullDesc:
      "Rancang bangun sistem informasi berbasis web untuk mendokumentasikan rekam jejak pengabdian dan hasil pemetaan potensi berkelanjutan Dusun Karangnongko.",
    timeline: "Dilaksanakan selama periode KKN Kelompok 44",
    target: "Tersedia arsip digital program kerja dan potensi Dusun Karangnongko.",
    pj: "Jevon Christian",
  },
  {
    id: 4,
    title: "Batik Jumputan Teknik Shibori",
    category: "Pemberdayaan",
    categoryColor: "bg-purple-100 text-purple-700",
    image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=800&h=500&fit=crop",
    shortDesc:
      "Pelatihan pewarnaan kain metode ikat-celup Shibori untuk ibu-ibu PKK.",
    fullDesc:
      "Pengembangan kreativitas dan produktivitas ibu-ibu PKK melalui pelatihan pewarnaan kain metode ikat-celup (Shibori) bernilai jual.",
    timeline: "Dilaksanakan selama periode KKN Kelompok 44",
    target: "Ibu-ibu PKK memiliki keterampilan dasar membuat produk kain Shibori.",
    pj: "Lidwina Cahya",
  },
  {
    id: 5,
    title: "Senam Hipertensi Lansia Happy",
    category: "Kesehatan",
    categoryColor: "bg-pink-100 text-pink-700",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=500&fit=crop",
    shortDesc:
      "Upaya preventif kesehatan lansia melalui senam pengendalian tekanan darah.",
    fullDesc:
      "Upaya preventif kesehatan posyandu lansia melalui senam pengendalian tekanan darah dan edukasi gaya hidup sehat terukur.",
    timeline: "Dilaksanakan selama periode KKN Kelompok 44",
    target: "Lansia memperoleh edukasi gaya hidup sehat dan aktivitas fisik terukur.",
    pj: "Elisabeth Liliana",
  },
  {
    id: 6,
    title: "Mapping Wilayah Google Maps",
    category: "Infrastruktur",
    categoryColor: "bg-blue-100 text-blue-700",
    image: "https://images.unsplash.com/photo-1569336415962-a4bd9f69c07b?w=800&h=500&fit=crop",
    shortDesc:
      "Digitalisasi titik koordinat lokasi krusial Dusun Karangnongko ke Google Maps.",
    fullDesc:
      "Digitalisasi titik koordinat lokasi krusial seperti Pustu, Balai Dusun, fasilitas umum, dan toko kelontong ke dalam platform Google Maps global.",
    timeline: "Dilaksanakan selama periode KKN Kelompok 44",
    target: "Lokasi krusial dusun lebih mudah ditemukan melalui Google Maps.",
    pj: "Gatot Subroto",
  },
  {
    id: 7,
    title: "Sosialisasi Pembuatan QRIS",
    category: "Ekonomi Digital",
    categoryColor: "bg-cyan-100 text-cyan-700",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop",
    shortDesc:
      "Edukasi penggunaan dan pendampingan pembuatan QRIS bagi pelaku UMKM.",
    fullDesc:
      "Edukasi penggunaan dan pendampingan pembuatan QRIS bagi pelaku UMKM dan masyarakat desa untuk mendorong adaptasi transaksi nontunai.",
    timeline: "Dilaksanakan selama periode KKN Kelompok 44",
    target: "Pelaku UMKM dan warga memahami proses serta manfaat transaksi nontunai.",
    pj: "Kelpin Saktara",
  },
];

export const potensiDesa: PotensiData[] = [
  {
    id: 8,
    title: "Inovasi Olahan Hasil Laut Tahan Lama",
    category: "Potensi Kelautan",
    categoryColor: "bg-sky-100 text-sky-700",
    image: "https://images.unsplash.com/photo-1510130387422-82bed34b37e9?w=800&h=500&fit=crop",
    shortDesc:
      "Optimalisasi tangkapan nelayan menjadi produk UMKM berumur simpan panjang.",
    fullDesc:
      "Optimalisasi tangkapan nelayan Karangnongko menjadi produk UMKM berumur simpan panjang, seperti abon ikan atau ikan asin kemasan vakum (vacuum pack).",
    timeline: "Rekomendasi pengembangan berkelanjutan",
    target: "Produk olahan hasil laut memiliki nilai tambah dan daya simpan lebih lama.",
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
      "Peningkatan nilai jual UMKM rengginang lokal melalui pembaruan kemasan (standing pouch ziplock) dan penambahan varian rasa kekinian untuk oleh-oleh wisatawan.",
    timeline: "Rekomendasi pengembangan berkelanjutan",
    target: "Rengginang lokal lebih menarik sebagai produk oleh-oleh wisatawan.",
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
      "Pemanfaatan letak geografis kawasan Watukarung dengan memberdayakan kamar kosong milik warga menjadi penginapan transit sederhana dan terjangkau.",
    timeline: "Rekomendasi pengembangan berkelanjutan",
    target: "Warga memiliki peluang pendapatan tambahan dari sektor pariwisata.",
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
      "Solusi alih fungsi lahan yang sering diserang hama monyet dan babi hutan dengan menanam komoditas jahe, kunyit, dan temulawak untuk bahan baku jamu.",
    timeline: "Rekomendasi pengembangan berkelanjutan",
    target: "Lahan rawan hama tetap produktif melalui komoditas empon-empon.",
    pj: "Rekomendasi KKN Kelompok 44",
  },
];

export const statsData = [
  { label: "Total Proker", value: "7 Program Kerja", icon: "ClipboardList" as const },
  { label: "Demografi Dusun", value: "± 50 Kepala Keluarga", icon: "Users" as const },
  { label: "Mata Pencaharian", value: "Mayoritas Nelayan", icon: "Anchor" as const },
  { label: "Kendala Pertanian", value: "Hama Monyet & Babi Hutan", icon: "Calendar" as const },
];

export const navLinks = [
  { label: "Beranda", href: "/" },
  { label: "Profil Tim", href: "/tim" },
  { label: "Program Kerja", href: "/#program" },
  { label: "Potensi Desa", href: "/#potensi" },
];
