// UPDATE FIX VERCEL TANGGAL 15

import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { dataProduk, dataKuliner } from '@/data/database';

// =======================
// Interface Produk
// =======================
interface Produk {
  id: string;
  nama: string;
  foto: string;
  kategori: string;
  deskripsi: string;
  harga_atau_htm: string | number;
  kontak: string;
  map_url?: string;
  menu_atau_fasilitas?: string[];
}

// =======================
// Helper Format Rupiah
// =======================
const formatRupiah = (angka: string | number) => {
  const rawVal = String(angka).replace(/[^0-9]/g, '');
  const numberVal = parseInt(rawVal, 10);
  if (isNaN(numberVal)) return angka;

  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(numberVal);
};

// =======================
// Page Detail Produk
// =======================
export default function DetailProduk({
  params
}: {
  params: { id: string };
}) {
  const { id } = params;

  // Gabungkan semua data
  const semuaProduk: Produk[] = [...dataKuliner, ...dataProduk];

  // Cari produk berdasarkan ID
  const produk = semuaProduk.find(
    (item: Produk) => item.id === id
  );

  // Jika tidak ketemu → 404
  if (!produk) {
    return notFound();
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-6">

        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-red-600">Beranda</Link>
          <span>/</span>
          <Link href="/direktori/produk" className="hover:text-red-600">Katalog Produk</Link>
          <span>/</span>
          <span className="text-gray-900 font-semibold">{produk.nama}</span>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0 md:gap-12">

            {/* KOLOM KIRI */}
            <div className="relative aspect-square md:aspect-auto md:h-full bg-gray-100 group">
              <Image
                src={produk.foto}
                alt={produk.nama}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            {/* KOLOM KANAN */}
            <div className="p-8 md:p-12 flex flex-col justify-center">

              <div className="mb-6">
                <span className="inline-block bg-red-100 text-red-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
                  {produk.kategori}
                </span>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 leading-tight">
                  {produk.nama}
                </h1>
                <p className="text-2xl font-bold text-red-600">
                  {formatRupiah(produk.harga_atau_htm)}
                </p>
              </div>

              <div className="prose prose-gray mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Deskripsi Produk
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {produk.deskripsi}
                </p>
              </div>

              {/* Tombol Aksi */}
              <div className="flex flex-col gap-4 mt-auto">
                <a
                  href={`https://wa.me/${produk.kontak}?text=Halo, saya ingin memesan *${produk.nama}*`}
                  target="_blank"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl text-center transition-all flex items-center justify-center gap-2 shadow-lg shadow-green-200"
                >
                  Pesan via WhatsApp
                </a>

                {produk.map_url && (
                  <a
                    href={produk.map_url}
                    target="_blank"
                    className="w-full bg-white hover:bg-gray-50 text-gray-700 font-semibold py-4 rounded-xl text-center border-2 border-gray-200 transition-all flex items-center justify-center gap-2"
                  >
                    Lihat Lokasi Penjual
                  </a>
                )}
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

