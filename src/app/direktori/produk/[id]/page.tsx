import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { dataProduk, dataKuliner } from "@/data/database";
import type { UmkmItem } from "@/types";

// ==========================
// Helper: Format Rupiah
// ==========================
const formatRupiah = (angka: string | number) => {
  const rawVal = String(angka).replace(/[^0-9]/g, "");
  const numberVal = parseInt(rawVal, 10);

  if (isNaN(numberVal)) return angka;

  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(numberVal);
};

// ==========================
// Page Component
// ==========================
export default function DetailProduk({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  // Gabungkan data produk & kuliner
  const semuaProduk: UmkmItem[] = [...dataKuliner, ...dataProduk];

  // Cari produk berdasarkan ID
  const produk = semuaProduk.find((item) => item.id === id);

  // Jika tidak ditemukan → 404
  if (!produk) {
    notFound();
  }

  return (
    <main className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-6">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-red-600">
            Beranda
          </Link>
          <span>/</span>
          <Link href="/direktori/produk" className="hover:text-red-600">
            Katalog Produk
          </Link>
          <span>/</span>
          <span className="text-gray-900 font-semibold">{produk.nama}</span>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0 md:gap-12">
            {/* Gambar */}
            <div className="relative aspect-square bg-gray-100">
              <Image
                src={produk.foto}
                alt={produk.nama}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Informasi */}
            <div className="p-8 md:p-12 flex flex-col">
              <span className="inline-block bg-red-100 text-red-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
                {produk.kategori}
              </span>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {produk.nama}
              </h1>

              <p className="text-2xl font-bold text-red-600 mb-6">
                {formatRupiah(produk.harga_atau_htm)}
              </p>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Deskripsi
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {produk.deskripsi}
                </p>
              </div>

              {/* Varian / Fasilitas */}
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">
                  Varian / Fasilitas
                </h3>
                <div className="flex flex-wrap gap-2">
                  {produk.menu_atau_fasilitas.map(
                    (item: string, index: number) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm border border-gray-200"
                      >
                        {item}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Tombol Aksi */}
              <div className="mt-auto flex flex-col gap-4">
                <a
                  href={`https://wa.me/${produk.kontak}?text=${encodeURIComponent(
                    `Halo, saya tertarik dengan produk ${produk.nama}`
                  )}`}
                  target="_blank"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl text-center transition-all shadow-lg"
                >
                  Pesan via WhatsApp
                </a>

                {produk.map_url && (
                  <a
                    href={produk.map_url}
                    target="_blank"
                    className="w-full bg-white hover:bg-gray-50 text-gray-700 font-semibold py-4 rounded-xl text-center border-2 border-gray-200 transition-all"
                  >
                    Lihat Lokasi Penjual
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
