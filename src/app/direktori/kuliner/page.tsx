// src/app/direktori/kuliner/page.tsx
import { dataKuliner } from '@/data/database';
import Link from 'next/link';

export default function KulinerPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Link href="/" className="text-green-600 hover:underline">← Kembali ke Beranda</Link>
        <h1 className="text-4xl font-bold text-gray-800 mt-4">Kuliner Andalan</h1>
        <p className="text-gray-600">Jelajahi rasa otentik dari dapur warga Umbulmartani.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {dataKuliner.map((item) => (
          <div key={item.id} className="bg-white rounded-xl shadow border overflow-hidden flex flex-col md:flex-row">
            {/* Bagian Foto (Placeholder warna abu jika foto belum ada) */}
            <div className="md:w-1/3 bg-gray-200 min-h-[200px] flex items-center justify-center text-gray-500">
               Foto
            </div>
            
            {/* Bagian Info */}
            <div className="p-6 md:w-2/3 flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-bold text-gray-800">{item.nama}</h2>
                <p className="text-sm text-gray-600 mt-2 mb-4">{item.deskripsi}</p>
                <div className="text-sm space-y-1">
                   <p><strong>Menu:</strong> {item.menu.join(', ')}</p>
                   <p><strong>Harga:</strong> <span className="text-green-600 font-bold">{item.harga}</span></p>
                   <p><strong>Alamat:</strong> {item.alamat}</p>
                </div>
              </div>
              
              <div className="mt-4 flex gap-2">
                <a href={`https://wa.me/${item.kontak}`} target="_blank" className="bg-green-600 text-white px-4 py-2 rounded text-sm font-bold hover:bg-green-700 text-center flex-1">
                  Pesan WA
                </a>
                <a href={item.map} target="_blank" className="border border-gray-300 text-gray-700 px-4 py-2 rounded text-sm font-bold hover:bg-gray-50 text-center flex-1">
                  Lokasi
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}