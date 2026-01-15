import { UmkmItem, WisataItem, BeritaItem, PengurusItem } from "@/types";

// --- DATA KULINER (Makanan & Minuman) ---
export const dataKuliner: UmkmItem[] = [
  // 1. Milik Grefy W A
  {
    id: "k-01",
    nama: "Lemon Sereh",
    deskripsi: "Minuman dengan rasa sereh dan lemon yang menyegarkan.",
    kategori: "Kuliner",
    menu_atau_fasilitas: ["Original"],
    harga_atau_htm: "Rp 5.000 / botol",
    kontak: "6289633462855", 
    foto: "/images/produk/lemon-sereh.jpg", 
    map_url: "https://maps.google.com"
  },
  {
    id: "k-02",
    nama: "Tape Ketan",
    deskripsi: "Makanan khas dengan rasa manis, sedikit asam, dan kaya probiotik.",
    kategori: "Kuliner",
    menu_atau_fasilitas: ["Cup Twinwall", "Bungkus Daun"],
    harga_atau_htm: "Rp 7.000 (Cup) - Rp 1.500 (Daun)",
    kontak: "6289633462855",
    foto: "/images/produk/tape-ketan.jpg",
    map_url: "https://maps.google.com"
  },
  {
    id: "k-03",
    nama: "Brownies Kukus Red Velvet",
    deskripsi: "Varian brownies dengan perpaduan coklat dan warna merah yang lembut.",
    kategori: "Kuliner",
    menu_atau_fasilitas: ["Slice Segitiga"],
    harga_atau_htm: "Rp 10.000 / slice",
    kontak: "6289633462855",
    foto: "/images/produk/brownies-redvelvet.jpg",
    map_url: "https://maps.google.com"
  },
  {
    id: "k-04",
    nama: "Brownies Panggang",
    deskripsi: "Kue dengan tekstur padat, lembab, dan rasa coklat yang kuat.",
    kategori: "Kuliner",
    menu_atau_fasilitas: ["Ukuran 10x10"],
    harga_atau_htm: "Rp 15.000",
    kontak: "6289633462855",
    foto: "/images/produk/brownies-panggang.jpg",
    map_url: "https://maps.google.com"
  },
  {
    id: "k-05",
    nama: "Risoles Bolognese",
    deskripsi: "Risoles dengan isian suwiran ayam rasa saus bolognese.",
    kategori: "Kuliner",
    menu_atau_fasilitas: ["Risoles Ayam"],
    harga_atau_htm: "Rp 5.000",
    kontak: "6289633462855",
    foto: "/images/produk/risol.jpg",
    map_url: "https://maps.google.com"
  },

  // 2. Milik Bu Ana (Mama Ana)
  {
    id: "k-06",
    nama: "Puding Semangka",
    deskripsi: "Puding lembut 3 lapis (Hijau, Putih, Merah) dengan tampilan mirip buah semangka asli.",
    kategori: "Kuliner",
    menu_atau_fasilitas: ["Puding Potong"],
    harga_atau_htm: "Rp 2.500",
    kontak: "6285838056235",
    foto: "/images/produk/puding-semangka.jpg",
    map_url: "https://maps.google.com"
  },
  {
    id: "k-07",
    nama: "Kue Lumpur Kentang",
    deskripsi: "Kue basah tradisional berbahan kentang kukus dengan tekstur sangat lembut dan aroma pandan.",
    kategori: "Kuliner",
    menu_atau_fasilitas: ["Kue Lumpur"],
    harga_atau_htm: "Rp 2.500",
    kontak: "6285838056235",
    foto: "/images/produk/kue-lumpur.jpg",
    map_url: "https://maps.google.com"
  },
  {
    id: "k-08",
    nama: "Pempek Mama Ana",
    deskripsi: "Pempek ikan tengiri segar dengan kuah cuka kental asam manis pedas.",
    kategori: "Kuliner",
    menu_atau_fasilitas: ["Lenjer", "Kapal Selam", "Adaan", "Kulit"],
    harga_atau_htm: "Rp 3.500",
    kontak: "6285838056235",
    foto: "/images/produk/pempek.jpg",
    map_url: "https://maps.google.com"
  },
  {
    id: "k-09",
    nama: "Tekwan Palembang",
    deskripsi: "Sup bola ikan tengiri dengan kuah udang gurih, lengkap dengan jamur kuping dan bunga sedap malam.",
    kategori: "Kuliner",
    menu_atau_fasilitas: ["Tekwan Komplit"],
    harga_atau_htm: "Rp 15.000",
    kontak: "6285838056235",
    foto: "/images/produk/tekwan.png",
    map_url: "https://maps.google.com"
  },

  // 3. Milik JK 15 (Diyan)
  {
    id: "k-10",
    nama: "Lupis Ketan JK15",
    deskripsi: "Jajanan tradisional ketan dengan gula merah dan parutan kelapa.",
    kategori: "Kuliner",
    menu_atau_fasilitas: ["Lupis"],
    harga_atau_htm: "Rp 5.000 - Rp 10.000",
    kontak: "6287873442244",
    foto: "/images/produk/lupis.jpg",
    map_url: "https://maps.google.com"
  },
  {
    id: "k-11",
    nama: "Ketan Kuning Serundeng",
    deskripsi: "Nasi ketan kuning gurih dengan taburan serundeng kelapa.",
    kategori: "Kuliner",
    menu_atau_fasilitas: ["Ketan Serundeng"],
    harga_atau_htm: "Rp 5.000 - Rp 10.000",
    kontak: "6287873442244",
    foto: "/images/produk/ketan-kuning-serundeng.jpg",
    map_url: "https://maps.google.com"
  },
  {
    id: "k-12",
    nama: "Kipo Khas Kotagede",
    deskripsi: "Jajanan mungil dari tepung ketan dengan isian unti kelapa yang dipanggang.",
    kategori: "Kuliner",
    menu_atau_fasilitas: ["Kipo"],
    harga_atau_htm: "Rp 5.000 - Rp 10.000",
    kontak: "6287873442244",
    foto: "/images/produk/kipo.jpg",
    map_url: "https://maps.google.com"
  },
  {
    id: "k-13",
    nama: "Cangklik (Kacang Sembunyi)",
    deskripsi: "Camilan renyah kacang berbalut kulit terigu manis.",
    kategori: "Kuliner",
    menu_atau_fasilitas: ["Pack 150g"],
    harga_atau_htm: "Rp 15.000",
    kontak: "6287873442244",
    foto: "/images/produk/cangklik.jpg",
    map_url: "https://maps.google.com"
  },
  {
    id: "k-14",
    nama: "Cawang (Kacang Bawang)",
    deskripsi: "Kacang bawang dengan bumbu daun jeruk dan cabe pilihan.",
    kategori: "Kuliner",
    menu_atau_fasilitas: ["Original", "Daun Jeruk", "Pedas"],
    harga_atau_htm: "Rp 15.000",
    kontak: "6287873442244",
    foto: "/images/produk/cawang.jpg",
    map_url: "https://maps.google.com"
  },

  // 4. Milik Sambel'Qu
  {
    id: "k-15",
    nama: "Sambel'Qu",
    deskripsi: "Aneka sambal rumahan pedas nikmat.",
    kategori: "Kuliner",
    menu_atau_fasilitas: ["Sambel Cumi (15k)", "Sambel Teri (15k)", "Sambel Bawang (12k)", "Sambel Terasi (12k)"],
    harga_atau_htm: "Mulai Rp 12.000",
    kontak: "6281931793244", 
    foto: "/images/produk/sambel.png",
    map_url: "https://maps.google.com"
  },

  // 5. Milik Sri Lestari Rahayu (Tiara)
  {
    id: "k-16",
    nama: "Telur Asin Tiara",
    deskripsi: "Telur asin berkualitas tinggi dari telur bebek pilihan dan pakan alami.",
    kategori: "Kuliner",
    menu_atau_fasilitas: ["Telur Asin"],
    harga_atau_htm: "Hubungi Penjual",
    kontak: "6285726160000", 
    foto: "/images/produk/telur-asin-tiara.jpg",
    map_url: "https://maps.google.com"
  },

  // 6. Milik Yuni Arti (Omoi Roti)
  {
    id: "k-17",
    nama: "Donut Omoi Roti",
    deskripsi: "Donut empuk dengan berbagai topping premium.",
    kategori: "Kuliner",
    menu_atau_fasilitas: ["Coklat", "Keju", "Kacang", "Matcha"],
    harga_atau_htm: "Rp 5.000",
    kontak: "6289509970891",
    foto: "/images/produk/donut.jpg",
    map_url: "https://maps.google.com"
  },
  {
    id: "k-18",
    nama: "Roti Kopi Omoi",
    deskripsi: "Roti aroma kopi lembut dengan isian mentega gurih.",
    kategori: "Kuliner",
    menu_atau_fasilitas: ["Roti Boy Style"],
    harga_atau_htm: "Rp 6.000",
    kontak: "6289509970891",
    foto: "/images/produk/roti-kopi.jpg",
    map_url: "https://maps.google.com"
  },
  {
    id: "k-19",
    nama: "Bomboloni",
    deskripsi: "Donat Italia dengan limpahan filling di dalamnya.",
    kategori: "Kuliner",
    menu_atau_fasilitas: ["Coklat", "Tiramisu", "Matcha", "Keju"],
    harga_atau_htm: "Rp 3.000",
    kontak: "6289509970891",
    foto: "/images/produk/bomboloni.jpg",
    map_url: "https://maps.google.com"
  },
  {
    id: "k-20",
    nama: "Kue Soes Omoi",
    deskripsi: "Kue sus kulit lembut dengan isian custard creamy.",
    kategori: "Kuliner",
    menu_atau_fasilitas: ["Vanilla", "Coklat", "Matcha"],
    harga_atau_htm: "Rp 4.000",
    kontak: "6289509970891",
    foto: "/images/produk/sus.jpg",
    map_url: "https://maps.google.com"
  },

  // 7. Milik Nur Hidayah
  {
    id: "k-21",
    nama: "Es Dawet Ireng",
    deskripsi: "Minuman jadul gula aren dan santan dengan cendol hitam pewarna alami.",
    kategori: "Kuliner",
    menu_atau_fasilitas: ["Dawet Ireng"],
    harga_atau_htm: "Rp 5.000",
    kontak: "6289673457172",
    foto: "/images/produk/dawet.jpg",
    map_url: "https://maps.google.com"
  },

  // 8. Milik Warung Pagi Sore (Fheny)
  {
    id: "k-22",
    nama: "Nasi Liwet Sunda",
    deskripsi: "Nasi liwet khas Sunda dengan tumisan bawang, salam, sereh, ayam, dan teri.",
    kategori: "Kuliner",
    menu_atau_fasilitas: ["Nasi Liwet"],
    harga_atau_htm: "Rp 12.000",
    kontak: "6281229979013",
    foto: "/images/produk/nasi-liwet.jpg",
    map_url: "https://maps.google.com"
  },
  {
    id: "k-23",
    nama: "Soto Ayam Pagi Sore",
    deskripsi: "Soto ayam rumahan dengan kuah bening rempah alami.",
    kategori: "Kuliner",
    menu_atau_fasilitas: ["Soto Ayam"],
    harga_atau_htm: "Rp 8.000",
    kontak: "6281229979013",
    foto: "/images/produk/soto.jpg",
    map_url: "https://maps.google.com"
  },
  {
    id: "k-24",
    nama: "Aneka Gorengan",
    deskripsi: "Tahu susur, tempe, gembus, pisang goreng, dan bakwan.",
    kategori: "Kuliner",
    menu_atau_fasilitas: ["Gorengan"],
    harga_atau_htm: "Mulai Rp 1.000",
    kontak: "6281229979013",
    foto: "/images/produk/gorengan.jpg",
    map_url: "https://maps.google.com"
  },

  // 9. Milik Ibu Paulina (Mursinah)
  {
    id: "k-25",
    nama: "Jadah Uti Mur",
    deskripsi: "Jadah tradisional yang pulen dan gurih.",
    kategori: "Kuliner",
    menu_atau_fasilitas: ["Jadah"],
    harga_atau_htm: "Rp 15.000",
    kontak: "6281226822494",
    foto: "/images/produk/jadah.jpg",
    map_url: "https://maps.google.com"
  },

  // 10. Milik Ibu Peni (Ibu Peri)
  {
    id: "k-26",
    nama: "Abon Ayam Ibu Peri",
    deskripsi: "Abon dari dada ayam segar tanpa lemak, dimasak dengan santan kanil murni.",
    kategori: "Kuliner",
    menu_atau_fasilitas: ["Original", "Pedas"],
    harga_atau_htm: "Hubungi Penjual",
    kontak: "6281226822494", 
    foto: "/images/produk/abon.jpg",
    map_url: "https://maps.google.com"
  },
  {
    id: "k-27",
    nama: "Brambang Goreng Ibu Peni",
    deskripsi: "Bawang goreng renyah untuk taburan masakan.",
    kategori: "Kuliner",
    menu_atau_fasilitas: ["Brambang Goreng"],
    harga_atau_htm: "Hubungi Penjual",
    kontak: "6281226822494",
    foto: "/images/produk/brambang.jpg",
    map_url: "https://maps.google.com"
  },
  {
    id: "k-28",
    nama: "Telur Asin Ibu Peni",
    deskripsi: "Telur asin homemade dengan resep khusus.",
    kategori: "Kuliner",
    menu_atau_fasilitas: ["Telur Asin"],
    harga_atau_htm: "Hubungi Penjual",
    kontak: "6281226822494",
    foto: "/images/produk/telur-peni.jpg",
    map_url: "https://maps.google.com"
  }
];

// --- DATA PRODUK (Kerajinan / Non-Kuliner) ---
export const dataProduk: UmkmItem[] = [
  // 1. Milik Sri Sukarni
  {
    id: "p-01",
    nama: "Bucket Bunga Rajut Jumbo",
    deskripsi: "Buket bunga rajut (crochet) handmade yang awet, bisa disemprot parfum, dan elegan.",
    kategori: "Produk",
    menu_atau_fasilitas: ["Jumbo (200k)", "Mini Buket", "Kawat Bulu"],
    harga_atau_htm: "Mulai Rp 200.000",
    kontak: "6281931793244",
    foto: "/images/produk/rajut.jpg",
    map_url: "https://maps.google.com"
  }
];

// --- DATA WISATA ---
export const dataWisata: WisataItem[] = [
  {
    id: "w-01",
    nama: "Destinasi Wisata Sumber Cuwo (Ngemplak I)",
    deskripsi: "Wisata air dan senja yang cocok untuk keluarga.",
    menu_atau_fasilitas: ["Gazebo", "Jogging Track", "Toilet", "Warung"],
    harga_atau_htm: "Belum diketahui",
    foto: "/images/cuwo.jpg",
    map_url: "https://maps.app.goo.gl/pbjuSpPV5JCX2k3j7"
  }
];

// --- DATA PENGURUS ---
export const dataPengurus: PengurusItem[] = [
  { id: "pg-1", nama: "Bpk", jabatan: "Ketua Forkom", foto: "/images/ketua.jpg" },
  { id: "pg-2", nama: "Ibu", jabatan: "Sekretaris", foto: "/images/sekretaris.jpg" },
];

// --- DATA BERITA ---
export const dataBerita: BeritaItem[] = [
  {
    id: "b-01",
    title: "Gebyar PAUD Desa Umbulmartani Tahun 2025",
    date: "13 Desember 2025",
    content: "Deskripsi disini",
    image_url: "/images/umkm-umbulmartani.jpg"
  }
];