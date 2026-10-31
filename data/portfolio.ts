// Semua isi portofolio ada di file ini. Ubah teks di sini, tampilan ikut berubah.

export const profile = {
  name: "Jalu Sena Purwa Andhika",
  status: "Lulusan S1 Teknik Informatika",
  intro:
    "Seorang profesional muda berlatar belakang Teknik Informatika dengan pengalaman lebih dari 5 tahun dalam organisasi dan pengelolaan kegiatan. Memadukan kemampuan administrasi, manajemen tim, pengolahan data, dan teknologi digital untuk menciptakan solusi kerja yang efektif dan terstruktur. Memiliki karakter adaptif, komunikatif, berorientasi pada hasil, serta antusias terhadap pengembangan diri dan inovasi.",
  about:
    "Lulusan S1 Teknik Informatika dengan pengalaman lebih dari 5 tahun dalam organisasi, koordinasi tim, pengelolaan administrasi, serta dokumentasi dan pelaporan kegiatan. Memiliki kemampuan dalam pengolahan data, manajemen operasional, komunikasi, dan pemecahan masalah. Adaptif, teliti, disiplin, serta mampu bekerja secara mandiri maupun kolaboratif. Memiliki ketertarikan pada pengembangan teknologi digital, UI/UX Design, dan inovasi sistem informasi.",
  location: "Ponorogo, Jawa Timur",
  email: "kayumanis101@gmail.com",
  phone: "082335331121",
  whatsapp: "6282335331121",
};

export const skills = [
  "Administrasi dan Manajemen Dokumen",
  "Microsoft Office (Word, Excel, PowerPoint)",
  "Pengolahan Data dan Administrasi",
  "Kepemimpinan (Leadership)",
  "Koordinasi dan Kolaborasi Tim",
  "Administrasi Keuangan Dasar",
  "Komunikasi Interpersonal",
  "Project Management",
  "UI/UX Design dan Prototyping",
];

export const education = [
  {
    title: "Universitas Muhammadiyah Ponorogo",
    place: "S1 Teknik Informatika",
    date: "2022 - 2026",
    note: "Lulus, menunggu jadwal wisuda.",
  },
  {
    title: "SMK PGRI 2 Ponorogo",
    place: "Pendidikan Menengah Kejuruan",
    date: "2019-2022",
  },
];

export const organisations = [
  {
    title: "Kepala Departemen Sosial Masyarakat",
    place: "BEM Fakultas Teknik, Universitas Muhammadiyah Ponorogo",
    date: "2024 - 2025",
    note: "Administrasi dan dokumentasi kegiatan, rencana kerja, open recruitment, serta koordinasi internal dan eksternal.",
  },
  {
    title: "Anggota Bidang Pertanian, Peternakan, dan Lingkungan Hidup",
    place: "DPD KNPI Kabupaten Ponorogo",
    date: "2025 - sekarang",
    note: "Koordinasi lintas bidang, perencanaan dan pelaporan program.",
  },
  {
    title: "Anggota Divisi Pendidikan",
    place: "Generasi Baru Indonesia (GenBI)",
    date: "2025",
    note: "Perencanaan dan pelaksanaan program kerja serta koordinasi jadwal dan administrasi.",
  },
  {
    title: "Anggota Bidang Pendidikan",
    place: "Karang Taruna Desa Wringinanom",
    date: "2019 - sekarang",
    note: "Koordinasi kegiatan kepemudaan, administrasi, data anggota, dan jadwal kegiatan.",
  },
];

export const workExperience = [
  {
    title: "Puldatan, Program PTSL",
    place: "Kementerian ATR/BPN, Desa Wringinanom",
    date: "Mei 2023 - November 2025",
    note: "Program Pendaftaran Tanah Sistematis Lengkap (PTSL) 2023 di Desa Wringinanom.",
  },
];

export const achievements = [
  {
    rank: "2",
    title: "Poster Digital Usaha",
    event: "Saudagar Dahlan Muda #4, UAD Fair 2025",
    level: "Tingkat Nasional",
  },
  {
    rank: "3",
    title: "Video Kreatif Usaha",
    event: "Saudagar Dahlan Muda #4, UAD Fair 2025",
    level: "Tingkat Nasional",
  },
];

export const trainings = [
  {
    title: "Pelatihan Data Analyst",
    desc: "Pengembangan kemampuan analisis data dasar.",
  },
];

export const certifications = [
  {
    title: "Sertifikasi Komputer Microsoft",
    desc: "Kompetensi aplikasi perkantoran.",
  },
  {
    title: "Sertifikasi Kewirausahaan",
    desc: "Kompetensi bidang kewirausahaan.",
  },
  {
    title: "Sertifikasi Bahasa Inggris",
    desc: "Kompetensi bahasa Inggris.",
  },
  {
    title: "LKMM-TD",
    desc: "Latihan Kepemimpinan dan Manajemen Mahasiswa Tingkat Dasar.",
  },
];

// images = daftar nama file foto di folder public/images (tulis persis sama, termasuk huruf besar/kecil dan ekstensi).
// Kartu yang images-nya kosong ([]) tidak ditampilkan. Isi nanti kalau fotonya sudah ada.
export type Category = "Organisasi" | "Prestasi" | "Pelatihan" | "Sertifikasi";

export const gallery: {
  category: Category;
  images: string[];
  title: string;
  desc: string;
}[] = [
  { category: "Organisasi", images: [], title: "DPD KNPI Ponorogo", desc: "Kegiatan organisasi tingkat kabupaten." },
  { category: "Organisasi", images: ["bem.jpeg", "bem2.jpeg"], title: "BEM Fakultas Teknik", desc: "Masa jabatan sebagai Kepala Departemen Sosial Masyarakat." },
  { category: "Organisasi", images: ["genbi.jpeg", "genbi2.jpeg"], title: "GenBI", desc: "Kegiatan Divisi Pendidikan." },
  { category: "Organisasi", images: ["kaltar.JPG", "kaltar2.JPG"], title: "Karang Taruna Wringinanom", desc: "Kegiatan kepemudaan dan pendidikan tingkat desa." },
  { category: "Prestasi", images: ["juara 2.jpg"], title: "Juara 2, UAD Fair", desc: "Poster Digital Usaha tingkat nasional." },
  { category: "Prestasi", images: ["juara 3.jpg"], title: "Juara 3, UAD Fair", desc: "Video Kreatif Usaha tingkat nasional." },
  { category: "Pelatihan", images: [], title: "Pelatihan Data Analyst", desc: "Dokumentasi pelatihan analisis data." },
  { category: "Sertifikasi", images: ["serkom1.jpg", "serkom2.jpg"], title: "Sertifikasi Microsoft", desc: "Sertifikat kompetensi aplikasi perkantoran." },
  { category: "Sertifikasi", images: [], title: "Sertifikasi Kewirausahaan", desc: "Sertifikat kompetensi kewirausahaan." },
  { category: "Sertifikasi", images: [], title: "Sertifikasi Bahasa Inggris", desc: "Sertifikat kompetensi bahasa Inggris." },
];

// Kartu proyek. image = foto di public/images. preview = gambar cadangan otomatis dari tautan (opsional).
export const projects = [
  {
    title: "UI/UX Website Desa Wringinanom",
    type: "UI/UX Design",
    desc: "Rancangan tampilan dan pengalaman pengguna untuk website Desa Wringinanom, dibuat di Figma.",
    tags: ["Figma", "UI/UX", "Website desa"],
    link: "https://www.figma.com/design/kjizcGf3zGvl6reAJ4iWne/wringinanom?node-id=158-417&t=Ty6oiLrWarnge2p6-1",
    linkLabel: "Lihat desain di Figma",
    image: "/images/ui.png",
  },
  {
    title: "Lele Manager",
    type: "Aplikasi web",
    desc: "Aplikasi mobile-first untuk mencatat dan mengelola budidaya ikan lele.",
    tags: ["Web app", "Mobile-first", "Budidaya lele"],
    link: "https://lele-manager.vercel.app",
    linkLabel: "Buka aplikasi",
    image: "/images/lele.png",
    preview: "https://image.thum.io/get/width/1200/crop/750/https://lele-manager.vercel.app",
  },
];