import { dataWisata } from '@/data/database';
import Link from 'next/link';
import Image from 'next/image';

export default function HalamanWisata() {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white-900 mb-4">Destinasi Eduwisata</h1>
        <p className="text-white-500">Nikmati keindahan alam dan kearifan lokal Umbulmartani</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {dataWisata.map((item) => (
          <div key={item.id} className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 flex flex-col md:flex-row h-full">
            
            {/* Foto Wisata */}
            <div className="md:w-1/2 relative min-h-[250px] bg-gray-200">
               <Image 
                 src={item.foto} 
                 alt={item.nama}
                 fill
                 className="object-cover transition-transform duration-700 group-hover:scale-105"
               />
               <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Wisata
               </div>
            </div>

            {/* Info Wisata */}
            <div className="p-8 md:w-1/2 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">{item.nama}</h2>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">{item.deskripsi}</p>
                
                <div className="space-y-3">
                   <div className="flex items-start">
                      <span className="w-6 text-red-500">🏷️</span>
                      <span className="text-sm font-semibold text-gray-700">{item.harga_atau_htm}</span>
                   </div>
                   <div className="flex items-start">
                      <span className="w-6 text-red-500">📍</span>
                      <span className="text-sm text-gray-600">{item.alamat}</span>
                   </div>
                   <div className="flex items-start">
                      <span className="w-6 text-red-500">✨</span>
                      <span className="text-sm text-gray-600">{item.menu_atau_fasilitas.join(', ')}</span>
                   </div>
                </div>
              </div>

              <div className="mt-8">
                <a 
                  href={item.map_url} 
                  target="_blank"
                  className="inline-flex items-center text-red-600 font-bold hover:text-red-800 transition-colors"
                >
                  Lihat di Google Maps &rarr;
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}