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
    title: "Mitigasi Gempa Bumi",
    category: "Kebencanaan",
    categoryColor: "bg-red-100 text-red-700",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop",
    shortDesc:
      "Program edukasi dan simulasi kesiapsiagaan gempa bumi untuk masyarakat pesisir Dusun Karangnongko.",
    fullDesc:
      "Program mitigasi gempa bumi ini dirancang secara komprehensif untuk meningkatkan kesiapsiagaan masyarakat Dusun Karangnongko dalam menghadapi potensi bencana gempa bumi. Kegiatan meliputi sosialisasi jalur evakuasi, pelatihan P3K darurat, simulasi evakuasi bersama warga, serta pemasangan rambu-rambu peringatan di titik-titik strategis dusun. Program ini juga mencakup penyusunan dokumen Rencana Kontigensi Dusun yang dapat digunakan sebagai panduan resmi penanganan bencana.",
    timeline: "Minggu ke-1 s/d Minggu ke-3 (Juni 2026)",
    target: "Seluruh warga RT 02/RW 01 mampu menjalankan prosedur evakuasi mandiri. Terpasang 10 rambu jalur evakuasi.",
    pj: "Tim KKN 44",
  },
  {
    id: 2,
    title: "Digitalisasi & Pemetaan Google Maps",
    category: "Infrastruktur",
    categoryColor: "bg-blue-100 text-blue-700",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    shortDesc:
      "Pemetaan aset infrastruktur dusun dan digitalisasi data ke platform Google Maps.",
    fullDesc:
      "Program digitalisasi ini bertujuan untuk mendokumentasikan dan memetakan seluruh aset infrastruktur penting di Dusun Karangnongko ke dalam platform Google Maps. Proses meliputi survei lapangan menggunakan GPS, pengambilan foto 360°, pencatatan koordinat fasilitas umum (masjid, balai dusun, sekolah, puskesmas pembantu), serta penandaan jalur evakuasi dan titik kumpul. Hasil pemetaan akan dipublikasikan secara terbuka agar dapat diakses oleh siapa saja.",
    timeline: "Minggu ke-2 s/d Minggu ke-4 (Juni — Juli 2026)",
    target: "Minimal 20 titik lokasi terpetakan di Google Maps dengan foto dan deskripsi lengkap.",
    pj: "Gatot Subroto",
  },
  {
    id: 3,
    title: "Website E-Portofolio KKN",
    category: "Teknologi",
    categoryColor: "bg-emerald-100 text-emerald-700",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    shortDesc:
      "Pembangunan website dokumentasi digital sebagai arsip program kerja dan potensi desa.",
    fullDesc:
      "Website E-Portofolio ini dibangun menggunakan teknologi modern (Next.js, React, Tailwind CSS) sebagai pusat dokumentasi digital seluruh kegiatan KKN Kelompok 44. Website ini menampilkan profil dusun, realisasi program kerja, analisis potensi desa, galeri dokumentasi, serta informasi kontak. Diharapkan website ini dapat menjadi arsip permanen yang berguna bagi kelompok KKN berikutnya dan menjadi referensi bagi pemerintah desa.",
    timeline: "Minggu ke-1 s/d Minggu ke-4 (Juni — Juli 2026)",
    target: "Website live dan dapat diakses publik. Dokumentasi minimal 50 foto kegiatan.",
    pj: "Jevon Christian",
  },
];

export const potensiDesa: PotensiData[] = [
  {
    id: 4,
    title: "Pelatihan Batik Shibori Lansia",
    category: "Ekonomi Kreatif",
    categoryColor: "bg-purple-100 text-purple-700",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=500&fit=crop",
    shortDesc:
      "Pelatihan teknik batik shibori untuk kelompok lansia sebagai upaya pemberdayaan ekonomi kreatif.",
    fullDesc:
      "Pelatihan Batik Shibori ini diselenggarakan khusus untuk kelompok lansia di Dusun Karangnongko. Teknik shibori dipilih karena prosesnya yang relatif mudah dan tidak memerlukan peralatan mahal. Peserta diajarkan mulai dari persiapan kain, teknik pelipatan dan pengikatan, proses pewarnaan menggunakan pewarna alami, hingga pengemasan produk. Hasil karya batik shibori diharapkan bisa dijual sebagai produk UMKM unggulan dusun.",
    timeline: "Minggu ke-2 s/d Minggu ke-3 (Juni 2026)",
    target: "20 lansia terlatih teknik shibori. 50 produk batik siap jual.",
    pj: "Reynathania",
  },
  {
    id: 5,
    title: "Senam Pengendalian Hipertensi",
    category: "Kesehatan Publik",
    categoryColor: "bg-pink-100 text-pink-700",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=500&fit=crop",
    shortDesc:
      "Program senam rutin dan edukasi kesehatan untuk pengendalian hipertensi pada warga lansia.",
    fullDesc:
      "Program ini menggabungkan aktivitas senam rutin dengan edukasi kesehatan tentang pengendalian hipertensi. Setiap sesi dimulai dengan pengecekan tekanan darah, dilanjutkan dengan senam khusus low-impact selama 30-45 menit, lalu diakhiri dengan sesi edukasi tentang pola makan sehat, pentingnya aktivitas fisik, dan pengelolaan stres. Data tekanan darah peserta dicatat secara berkala untuk monitoring.",
    timeline: "Minggu ke-1 s/d Minggu ke-4 (Setiap Selasa & Kamis)",
    target: "Penurunan rata-rata tekanan darah peserta. 30 warga aktif berpartisipasi.",
    pj: "Elisabeth Liliana",
  },
  {
    id: 6,
    title: "Literasi Keuangan & Edukasi QRIS",
    category: "Keuangan Digital",
    categoryColor: "bg-amber-100 text-amber-700",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop",
    shortDesc:
      "Edukasi literasi keuangan digital dan pendampingan aktivasi QRIS untuk pelaku UMKM desa.",
    fullDesc:
      "Program literasi keuangan ini bertujuan untuk meningkatkan pemahaman warga, khususnya pelaku UMKM, tentang pengelolaan keuangan digital. Materi mencakup: cara membuat rekening bank, penggunaan mobile banking, pendaftaran dan aktivasi QRIS untuk usaha, pencatatan keuangan sederhana, dan tips keamanan transaksi digital. Setiap peserta UMKM akan didampingi hingga berhasil mengaktifkan QRIS untuk usahanya.",
    timeline: "Minggu ke-3 s/d Minggu ke-4 (Juli 2026)",
    target: "15 pelaku UMKM memiliki QRIS aktif. 40 warga memahami dasar keuangan digital.",
    pj: "Lidwina Cahya",
  },
];

export const statsData = [
  { label: "Total Proker", value: "7 Program", icon: "ClipboardList" as const },
  { label: "Demografi Dusun", value: "50 Kepala Keluarga", icon: "Users" as const },
  { label: "Mata Pencaharian", value: "Dominan Nelayan", icon: "Anchor" as const },
  { label: "Durasi Aksi", value: "1 Bulan Penuh", icon: "Calendar" as const },
];

export const navLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Profil KKN", href: "#profil" },
  { label: "Program Kerja", href: "#program" },
  { label: "Potensi Desa", href: "#potensi" },
];
