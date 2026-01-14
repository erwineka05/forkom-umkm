'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { dataProduk, dataKuliner, dataWisata, dataBerita } from '@/data/database';
import { UmkmItem } from '@/types';

export default function Home() {
  const [randomProduk, setRandomProduk] = useState<UmkmItem[]>([]);

  // Format Rupiah Helper
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

  useEffect(() => {
    const semuaData = [...dataKuliner, ...dataProduk];
    const diacak = semuaData.sort(() => 0.5 - Math.random());
    setRandomProduk(diacak.slice(0, 10)); 
  }, []);

  return (
    <main className="font-sans antialiased text-gray-600">
        
        {/* --- 1. HERO SECTION --- */}
        <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Image 
                    src="/images/icons/umkm.jpg" 
                    alt="Kegiatan UMKM Umbulmartani" 
                    fill
                    className="object-cover object-center scale-105 opacity-90"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40"></div>
            </div>
        
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-red-600 blur-3xl opacity-20 pointer-events-none z-0"></div>
            
            <div className="container mx-auto px-6 relative z-10 py-20">
                <div className="max-w-3xl mx-auto text-center md:text-left">
                    <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
                        <span className="inline-block py-2 px-4 rounded-full bg-red-600/90 backdrop-blur-sm text-white text-xs font-bold tracking-widest uppercase shadow-lg">
                            Originalitas Lokal
                        </span>
                        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md py-2 px-4 rounded-full text-white shadow-lg border border-white/20">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className="text-xs font-semibold uppercase"><span className="font-bold text-red-400">100% Asli</span> Produk UMKM</p>
                        </div>
                    </div>
        
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg">
                        FORKOM UMKM <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-300">Umbulmartani</span>
                    </h1>
        
                    <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-xl mx-auto md:mx-0 drop-shadow-md">
                        Menghadirkan etalase produk unggulan, kuliner, dan kerajinan tangan langsung dari warga lokal untuk mendukung ekonomi desa.
                    </p>
        
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <Link href="/direktori/produk" className="px-8 py-4 bg-red-600 text-white rounded-full font-semibold shadow-lg shadow-red-900/50 hover:bg-red-700 hover:scale-105 transition-all duration-300 text-center">
                            Belanja Sekarang
                        </Link>
                        <Link href="/direktori/wisata" className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border-2 border-white/30 rounded-full font-semibold hover:bg-white hover:text-red-600 hover:border-white transition-all duration-300 text-center">
                            Jelajahi Wisata
                        </Link>
                    </div>
                </div>
            </div>
        </section>

        {/* --- 2. KATALOG PRODUK (Acak) --- */}
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900">Katalog Produk</h2>
                        <p className="text-gray-500 mt-2">Pilihan terbaik minggu ini untuk Anda</p>
                    </div>
                    {/* Link "Lihat Semua" tetap ke halaman daftar */}
                    <Link href="/direktori/produk" className="hidden md:flex items-center text-red-600 font-semibold hover:text-red-700 transition-colors">
                        Lihat Semua <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </Link>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {randomProduk.length > 0 ? (
                        randomProduk.map((product) => (
                            <div key={product.id} className="group bg-white rounded-2xl p-3 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col border border-gray-100">
                                
                                {/* === PERBAIKAN LINK === */}
                                <Link href={`/direktori/produk/${product.id}`} className="block relative overflow-hidden rounded-xl aspect-square">
                                    <div className="w-full h-full relative bg-gray-100">
                                        <Image 
                                            src={product.foto} 
                                            alt={product.nama} 
                                            fill
                                            className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                    </div>
                                    
                                </Link>
                                
                                <div className="mt-4 px-2 pb-2 flex flex-col flex-grow">
                                    <span className="text-xs font-bold text-red-500 uppercase mb-1 tracking-wide">
                                        {product.kategori}
                                    </span>

                                    {/* === PERBAIKAN LINK JUDUL === */}
                                    <h3 className="font-semibold text-gray-900 text-lg leading-tight line-clamp-1 hover:text-red-600 transition-colors mb-1">
                                        <Link href={`/direktori/produk/${product.id}`}>{product.nama}</Link>
                                    </h3>
                                    
                                    <p className="text-sm text-gray-500 line-clamp-1 mb-4">{product.deskripsi}</p>
                                    
                                    <div className="mt-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                                        <span className="text-lg font-bold text-gray-900">{formatRupiah(product.harga_atau_htm)}</span>
                                        
                                        <a 
                                            href={`https://wa.me/${product.kontak}?text=Halo, saya tertarik dengan produk ${product.nama}`}
                                            target="_blank"
                                            className="bg-green-600 hover:bg-green-700 text-white text-xs font-bold px-4 py-2 rounded-full transition-colors flex items-center gap-1 w-full sm:w-auto justify-center"
                                        >
                                            <span>Pesan</span>
                                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.269.655 4.505 1.782 6.574l-1.06 3.877 3.96-1.042z"/></svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        // Skeleton Loading
                        [1, 2, 3, 4].map((i) => (
                            <div key={i} className="bg-white rounded-2xl p-3 h-80 animate-pulse border border-gray-100">
                                <div className="bg-gray-200 rounded-xl w-full h-48 mb-4"></div>
                                <div className="bg-gray-200 h-4 w-3/4 mb-2 rounded"></div>
                                <div className="bg-gray-200 h-4 w-1/2 rounded"></div>
                            </div>
                        ))
                    )}
                </div>
                
                <div className="mt-10 text-center md:hidden">
                    <Link href="/direktori/produk" className="inline-block w-full px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-full hover:bg-gray-100 transition-colors">Lihat Semua Produk</Link>
                </div>
            </div>
        </section>

        {/* --- 3. WISATA SECTION --- */}
        <section className="py-24 bg-white"> 
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="md:text-4xl text-black-600 font-bold tracking-wider uppercase text-sm">Destinasi</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">Jelajahi Pesona <span className="text-red-600">Umbulmartani</span></h2>
                    <p className="text-gray-500">Nikmati pengalaman eduwisata yang memadukan keindahan alam dan kearifan lokal.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {dataWisata.map((wisata) => (
                        <Link key={wisata.id} href="/direktori/wisata" className="group block relative rounded-2xl overflow-hidden shadow-lg aspect-[3/4] md:aspect-[4/5] bg-gray-200">
                            <Image 
                                src={wisata.foto} 
                                alt={wisata.nama} 
                                fill
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="text-2xl font-bold text-white mb-2">{wisata.nama}</h3>
                                <p className="text-gray-200 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                                    {wisata.deskripsi}
                                </p>
                                <span className="inline-flex items-center text-red-400 font-semibold mt-4 text-sm uppercase tracking-wide">
                                    Lihat Detail <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="text-center mt-12">
                        <Link href="/direktori/wisata" className="inline-block px-8 py-3 border border-gray-300 text-gray-700 font-semibold rounded-full hover:bg-gray-800 hover:text-white transition-all duration-300">
                        Lihat Semua Wisata
                    </Link>
                </div>
            </div>
        </section>
        
        {/* --- 4. BERITA SECTION --- */}
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900">Kabar Umbulmartani</h2>
                    <Link href="/berita" className="hidden md:block text-gray-500 hover:text-red-600 transition-colors">Lihat Arsip Berita &rarr;</Link>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {dataBerita.slice(0, 3).map((berita) => (
                        <article key={berita.id} className="group bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                            <Link href={`/berita/${berita.id}`} className="block relative overflow-hidden aspect-video bg-gray-200">
                                    <Image 
                                        src={berita.image_url} 
                                        alt={berita.title} 
                                        fill
                                        className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    />
                            </Link>
                            <div className="p-6">
                                <div className="flex items-center text-xs text-gray-400 mb-3">
                                    <span className="bg-red-50 text-red-600 px-2 py-1 rounded-md font-medium">Berita</span>
                                    <span className="mx-2">•</span>
                                    <span>{berita.date}</span>
                                </div>
                                <h3 className="font-bold text-xl text-gray-900 mb-3 line-clamp-2 group-hover:text-red-600 transition-colors">
                                    <Link href={`/berita/${berita.id}`}>
                                        {berita.title}
                                    </Link>
                                </h3>
                                <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                                    {berita.content}
                                </p>
                                <Link href={`/berita/${berita.id}`} className="inline-block text-sm font-semibold text-gray-900 underline decoration-red-600 underline-offset-4 decoration-2 hover:text-red-600">
                                    Baca Selengkapnya
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
                    <div className="mt-8 text-center md:hidden">
                    <Link href="/berita" className="block w-full px-6 py-3 border border-gray-300 rounded-full text-center">Lihat Semua Berita</Link>
                </div>
            </div>
        </section>
    </main>
  );
}