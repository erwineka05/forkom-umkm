'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { dataProduk, dataKuliner } from '@/data/database';

export default function HalamanProduk() {
  // State untuk Filter dan Pencarian
  const [filterKategori, setFilterKategori] = useState('Semua');
  const [searchTerm, setSearchTerm] = useState('');

  // 1. Gabungkan semua data
  const semuaProduk = [...dataKuliner, ...dataProduk];

  // 2. Logic Filtering (Kategori & Search)
  const produkTampil = semuaProduk.filter((item) => {
    // Filter Kategori
    const matchKategori = 
      filterKategori === 'Semua' ? true :
      filterKategori === 'Kuliner' ? item.kategori === 'Kuliner' :
      item.kategori !== 'Kuliner'; // Anggap selain kuliner adalah Kerajinan/Produk

    // Filter Pencarian (Nama Produk)
    const matchSearch = item.nama.toLowerCase().includes(searchTerm.toLowerCase());

    return matchKategori && matchSearch;
  });

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-6">
        
        {/* --- HEADER & CONTROLS --- */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Katalog Lengkap</h1>
          <p className="text-gray-500 mb-8">Menampilkan seluruh potensi UMKM Kalurahan Umbulmartani</p>

          {/* Search Bar & Filter */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 max-w-4xl mx-auto">
            
            {/* Input Pencarian */}
            <div className="relative w-full md:w-1/2">
              <input 
                type="text" 
                placeholder="Cari produk (misal: Lemon, Tas...)" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
              />
              <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>

            {/* Tombol Kategori */}
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
              {['Semua', 'Kuliner', 'Kerajinan'].map((kategori) => (
                <button
                  key={kategori}
                  onClick={() => setFilterKategori(kategori)}
                  className={`px-5 py-2.5 rounded-full font-medium text-sm whitespace-nowrap transition-all border ${
                    filterKategori === kategori
                      ? 'bg-red-600 text-white border-red-600 shadow-md'
                      : 'bg-white text-gray-600 border-gray-200 hover:border-red-400 hover:text-red-500'
                  }`}
                >
                  {kategori}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* --- GRID PRODUK (Desain Pilihan Anda) --- */}
        {produkTampil.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {produkTampil.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition flex flex-col overflow-hidden group">
                
                {/* Gambar */}
                <Link href={`/direktori/produk/${item.id}`} className="relative aspect-square bg-gray-100 block overflow-hidden">
                  <Image 
                     src={item.foto} 
                     alt={item.nama}
                     fill
                     className="object-cover transition-transform duration-500 group-hover:scale-110"
                     sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* Label Kategori Kecil di Pojok */}
                  <div className="absolute top-2 left-2">
                     <span className="bg-white/90 backdrop-blur text-xs font-bold px-2 py-1 rounded text-gray-700 shadow-sm">
                        {item.kategori}
                     </span>
                  </div>
                </Link>
                
                {/* Detail */}
                <div className="p-4 flex flex-col flex-grow">
                  {/* Judul Produk */}
                  <h3 className="font-bold text-gray-900 text-lg leading-tight mb-2 line-clamp-2 min-h-[3rem]">
                    <Link href={`/direktori/produk/${item.id}`} className="hover:text-red-600 transition-colors">
                        {item.nama}
                    </Link>
                  </h3>
                  
                  <p className="text-sm text-gray-500 line-clamp-2 mb-4">{item.deskripsi}</p>
                  
                  <div className="mt-auto pt-3 border-t border-dashed border-gray-100">
                    <p className="text-lg font-bold text-gray-900 mb-3">{item.harga_atau_htm}</p>
                    <a 
                      href={`https://wa.me/${item.kontak}?text=Halo, saya tertarik dengan produk ${item.nama}`} 
                      target="_blank"
                      className="block w-full bg-green-600 text-white text-center py-2.5 rounded-lg font-semibold hover:bg-green-700 transition flex items-center justify-center gap-2"
                    >
    
                      Pesan via WA
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Tampilan Jika Produk Tidak Ditemukan */
          <div className="text-center py-20">
            <div className="bg-white p-8 rounded-2xl shadow-sm inline-block max-w-md mx-auto">
                <p className="text-gray-500 text-lg mb-4">
                    Tidak ditemukan produk dengan kata kunci <span className="font-bold text-gray-800">"{searchTerm}"</span>
                </p>
                <button 
                    onClick={() => {setFilterKategori('Semua'); setSearchTerm('');}} 
                    className="text-red-600 font-semibold hover:underline"
                >
                    Reset Pencarian & Filter
                </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}