import { dataBerita } from '@/data/database';
import Link from 'next/link';
import Image from 'next/image';

export default function BeritaPage() {
  return (
    <div className="container mx-auto px-6 py-12 bg-white">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Kabar Umbulmartani</h1>
        <p className="text-gray-500">Informasi terbaru seputar kegiatan dan prestasi UMKM</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {dataBerita.map((berita) => (
          <article key={berita.id} className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col">
            <div className="relative h-48 bg-gray-200">
               {/* Gunakan Image dengan object-cover */}
               <div className="w-full h-full relative">
                 <Image 
                   src={berita.image_url} 
                   alt={berita.title}
                   fill
                   className="object-cover"
                 />
               </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center text-xs text-gray-400 mb-3">
                 <span className="bg-red-50 text-red-600 px-2 py-1 rounded font-bold">NEWS</span>
                 <span className="mx-2">•</span>
                 <span>{berita.date}</span>
              </div>
              
              <Link href={`/berita/${berita.id}`} className="hover:text-red-600 transition-colors">
                <h2 className="text-xl font-bold text-gray-900 mb-3 leading-snug">
                  {berita.title}
                </h2>
              </Link>
              
              <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                {berita.content}
              </p>
              
              <Link href={`/berita/${berita.id}`} className="mt-auto text-red-600 font-semibold text-sm hover:underline text-left">
                Baca Selengkapnya →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}