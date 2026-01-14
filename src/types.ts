// Tipe Data untuk Produk UMKM (Kuliner & Kerajinan)
export interface UmkmItem {
  id: string;
  nama: string;
  kategori: string;
  foto: string;
  deskripsi: string;
  harga_atau_htm: string | number;
  kontak: string;
  menu_atau_fasilitas: string[];
  map_url?: string;
}

// Tipe Data untuk Wisata
export interface WisataItem {
  id: string;
  nama: string;
  foto: string;
  deskripsi: string;
  harga_atau_htm: string | number;
  menu_atau_fasilitas: string[];
  map_url?: string;
}

// Tipe Data untuk Berita
export interface BeritaItem {
  id: string;
  title: string;
  date: string;
  content: string;
  image_url: string;
}

export interface PengurusItem {
  id: string;
  nama: string;
  jabatan: string;
  foto: string;
  periode?: string; 
}