import Link from 'next/link';
import Image from 'next/image';
import { dataWisata } from '@/data/database';

export default function WisataPage() {
  return (
    <div className="bg-white min-h-screen py-12">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Destinasi Wisata</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Jelajahi keindahan alam dan kearifan lokal di Umbulmartani. 
            Tempat yang sempurna untuk healing dan edukasi keluarga.
          </p>
        </div>

        {/* Grid Wisata */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {dataWisata.map((item) => (
            <div key={item.id} className="group bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col md:flex-row h-full">
              
              {/* Gambar (Kiri/Atas) */}
              <div className="relative w-full md:w-2/5 h-64 md:h-auto">
                <Image 
                  src={item.foto} 
                  alt={item.nama}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-red-600 shadow-sm">
                  Wisata
                </div>
              </div>

              {/* Konten (Kanan/Bawah) */}
              <div className="flex-1 p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                  {item.nama}
                </h3>
                <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                  {item.deskripsi}
                </p>

                {/* Info Fasilitas */}
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-2">Fasilitas:</h4>
                  <div className="flex flex-wrap gap-2">
                    {/* Menggunakan any untuk menghindari error typescript sementara */}
                    {(item.menu_atau_fasilitas as any[]).slice(0, 3).map((fasil: string, idx: number) => (
                      <span key={idx} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                        {fasil}
                      </span>
                    ))}
                    {(item.menu_atau_fasilitas.length > 3) && (
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">+Lainnya</span>
                    )}
                  </div>
                </div>

                {/* Harga & Tombol */}
                <div className="mt-auto flex items-center justify-between pt-6 border-t border-gray-100">
                  <div>
                    <span className="block text-xs text-gray-500">Tiket Masuk</span>
                    <span className="text-lg font-bold text-green-600">{item.harga_atau_htm}</span>
                  </div>
                  
                  {/* Cek apakah ada map_url, jika ada tampilkan tombol */}
                  {item.map_url ? (
                    <a 
                      href={item.map_url}
                      target="_blank"
                      className="flex items-center gap-2 text-red-600 font-semibold hover:text-red-700 transition-colors"
                    >
                      Lihat Peta
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                    </a>
                  ) : (
                    <span className="text-sm text-gray-400 italic">Lokasi di Desa</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}