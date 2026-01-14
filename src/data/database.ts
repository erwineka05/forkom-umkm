// src/data/database.ts
import type { UmkmItem, PengurusItem } from '@/types';

/* =======================
   DATA KULINER
======================= */
export const dataKuliner: UmkmItem[] = [
  {
    id: "k-01",
    nama: "Lemon Sereh",
    deskripsi: "Minuman dengan rasa sereh dan lemon yang menyegarkan.",
    kategori: "Kuliner",
    menu_atau_fasilitas: ["Original"],
    harga_atau_htm: "Rp 5.000 / botol",
    alamat: "Umbulmartani",
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
    alamat: "Umbulmartani",
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
    alamat: "Umbulmartani",
    kontak: "6289633462855",
    foto: "/images/produk/brownies-redvelvet.jpg",
    map_url: "https://maps.google.com"
  }
];

/* =======================
   DATA PRODUK (NON KULINER)
======================= */
export const dataProduk: UmkmItem[] = [
  {
    id: "p-01",
    nama: "Bucket Bunga Rajut Jumbo",
    deskripsi: "Buket bunga rajut handmade yang awet dan elegan.",
    kategori: "Produk",
    menu_atau_fasilitas: ["Jumbo (200k)", "Mini Buket", "Kawat Bulu"],
    harga_atau_htm: "Mulai Rp 200.000",
    alamat: "Umbulmartani",
    kontak: "6281931793244",
    foto: "/images/produk/rajut.jpg",
    map_url: "https://maps.google.com"
  }
];

/* =======================
   DATA WISATA
======================= */
export const dataWisata: UmkmItem[] = [
  {
    id: "w-01",
    nama: "Destinasi Wisata Sumber Cuwo",
    deskripsi: "Wisata air dan senja yang cocok untuk keluarga.",
    kategori: "Wisata",
    menu_atau_fasilitas: ["Gazebo", "Jogging Track", "Toilet", "Warung"],
    harga_atau_htm: "Belum diketahui",
    alamat: "Umbulmartani, Sleman",
    kontak: "628111222333",
    foto: "/images/cuwo.jpg",
    map_url: "https://maps.app.goo.gl/pbjuSpPV5JCX2k3j7"
  }
];

/* =======================
   DATA PENGURUS
======================= */
export const pengurus: PengurusItem[] = [
  {
    nama: "Bpk. Sutrisno",
    jabatan: "Ketua Forkom",
    foto: "/images/ketua.jpg"
  },
  {
    nama: "Ibu Ani",
    jabatan: "Sekretaris",
    foto: "/images/sekretaris.jpg"
  }
];

/* =======================
   DATA BERITA
======================= */
export const dataBerita = [
  {
    id: "b-01",
    title: "Gebyar PAUD Desa Umbulmartani Tahun 2025",
    date: "13 Desember 2025",
    content: "Deskripsi disini",
    image_url: "/images/icons/umkm.jpg"
  }
];
