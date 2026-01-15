import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { dataProduk, dataKuliner } from '@/data/database';

export default async function DetailProduk({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  // Gabungkan semua data
  const semuaProduk: any[] = [...dataKuliner, ...dataProduk];
  
  // Cari produk
  const produk = semuaProduk.find((item: any) => item.id === id);

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
          <Link href="/direktori" className="hover:text-red-600">Direktori</Link>
          <span>/</span>
          <span className="text-gray-900 font-semibold truncate max-w-[150px]">{produk.nama}</span>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0 md:gap-12">
            
            {/* Foto Produk */}
            <div className="relative aspect-square md:aspect-auto md:h-full bg-gray-100 group min-h-[300px]">
              <Image 
                src={produk.foto || '/images/placeholder.jpg'} 
                alt={produk.nama}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Info Produk */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              
              <div className="mb-6">
                <span className="inline-block bg-red-100 text-red-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
                  {produk.kategori || 'UMKM'}
                </span>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 leading-tight">
                  {produk.nama}
                </h1>
                
                {/* PERBAIKAN: Langsung tampilkan string harga dari database */}
                <p className="text-2xl font-bold text-red-600">
                  {produk.harga_atau_htm}
                </p>
              </div>

              <div className="prose prose-gray mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Deskripsi</h3>
                <p className="text-gray-600 leading-relaxed">
                  {produk.deskripsi}
                </p>
              </div>

              {/* Varian / Fasilitas */}
              {produk.menu_atau_fasilitas && (produk.menu_atau_fasilitas as any[]).length > 0 && (
                <div className="mb-8">
                  <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">
                    Varian / Fasilitas
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {(produk.menu_atau_fasilitas as any[]).map((item: any, index: number) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm border border-gray-200">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Tombol Kontak */}
              <div className="flex flex-col gap-4 mt-auto">
                <a 
                  href={`https://wa.me/${produk.kontak}?text=Halo, saya tertarik dengan *${produk.nama}*`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl text-center transition-all flex items-center justify-center gap-2 shadow-lg shadow-green-100"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.269.655 4.505 1.782 6.574l-1.06 3.877 3.96-1.042z"/></svg>
                  Pesan via WhatsApp
                </a>
                
                {produk.map_url && (
                  <a 
                    href={produk.map_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-white hover:bg-gray-50 text-gray-700 font-semibold py-4 rounded-xl text-center border-2 border-gray-200 transition-all flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                    Lihat Lokasi
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