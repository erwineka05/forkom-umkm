import Link from 'next/link';
import Image from 'next/image';
import { dataKuliner } from '@/data/database';

export default function KulinerPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Wisata Kuliner</h1>
          <p className="text-gray-500">Nikmati cita rasa otentik khas Umbulmartani</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dataKuliner.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
              
              {/* Gambar */}
              <div className="relative h-64 bg-gray-200">
                <Image 
                  src={item.foto} 
                  alt={item.nama}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Konten */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.nama}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.deskripsi}</p>
                
                <div className="space-y-2 text-sm text-gray-700 mb-6">
                  {/* PERBAIKAN 1: menu -> menu_atau_fasilitas */}
                  <div>
                    <strong className="block text-gray-900">Menu Andalan:</strong> 
                    <span className="text-gray-600">{item.menu_atau_fasilitas.join(', ')}</span>
                  </div>
                  
                  {/* PERBAIKAN 2: harga -> harga_atau_htm */}
                  <div className="flex justify-between items-center border-t border-gray-100 pt-2 mt-2">
                    <strong>Harga:</strong>
                    <span className="text-green-600 font-bold">{item.harga_atau_htm}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                   <a 
                      href={`https://wa.me/${item.kontak}`} 
                      target="_blank"
                      className="flex-1 bg-green-600 text-white text-center py-2 rounded-lg font-medium hover:bg-green-700 transition"
                   >
                      Pesan WA
                   </a>
                   <Link 
                      href={`/direktori/produk/${item.id}`}
                      className="flex-1 bg-gray-100 text-gray-700 text-center py-2 rounded-lg font-medium hover:bg-gray-200 transition"
                   >
                      Detail
                   </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}