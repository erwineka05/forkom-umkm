'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // State untuk membuka/menutup menu profil di mobile
  const [profileOpen, setProfileOpen] = useState(false);
  
  const pathname = usePathname();

  // Efek Scroll (Header transparan -> Putih)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper link aktif
  const isActive = (path: string) => pathname === path ? "text-red-600 font-bold" : "text-gray-600 hover:text-red-600";

  return (
    <>
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-white'
        }`}
      >
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          
          {/* 1. LOGO */}
          <Link href="/" className="flex items-center gap-2 group">
             <div className="relative h-10 w-10">
                <Image 
                  src="/images/icons/logo.png" 
                  alt="Logo" 
                  fill
                  className="object-contain transition-transform group-hover:scale-105"
                  sizes="(max-width: 768px) 40px, 40px"
                />
             </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900 leading-none">UMKM</span>
              <span className="text-sm font-medium text-red-600 tracking-widest uppercase leading-none">Umbulmartani</span>
            </div>
          </Link>

          {/* 2. MENU DESKTOP */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className={`text-sm font-medium transition-colors ${isActive('/')}`}>Beranda</Link>
            
            {/* DROPDOWN PROFIL (Baru Ditambahkan) */}
            <div className="relative group">
              <button className={`flex items-center gap-1 text-sm font-medium transition-colors ${pathname.startsWith('/profil') ? 'text-red-600 font-bold' : 'text-gray-600 hover:text-red-600'}`}>
                Profil
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              
              {/* Isi Dropdown */}
              <div className="absolute left-0 top-full pt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden py-1">
                  <Link href="/profil/desa" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600">
                    Profil Desa
                  </Link>
                  <Link href="/profil/sejarah" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600">
                    Sejarah
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/direktori/produk" className={`text-sm font-medium transition-colors ${isActive('/direktori/produk')}`}>Produk</Link>
            <Link href="/direktori/wisata" className={`text-sm font-medium transition-colors ${isActive('/direktori/wisata')}`}>Wisata</Link>
            <Link href="/berita" className={`text-sm font-medium transition-colors ${isActive('/berita')}`}>Kabar Terbaru</Link>
          </div>

          {/* 3. TOMBOL WHATSAPP (Diupdate jadi Merah agar konsisten) */}
          <a href="https://wa.me/6285740560033"
            target="_blank" 
            className="hidden md:inline-flex items-center bg-red-600 text-white px-6 py-2.5 rounded-full font-medium text-sm hover:bg-red-700 transition-colors shadow-lg shadow-red-200">
            <span>WhatsApp Kami</span>
          </a>

          {/* 4. TOMBOL HAMBURGER (Mobile) */}
          <div className="md:hidden">
            <button 
              onClick={() => setSidebarOpen(true)} 
              className="text-gray-800 p-2 focus:outline-none hover:bg-gray-100 rounded-md"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* 5. SIDEBAR MOBILE (Overlay) */}
      <div className={`fixed inset-0 z-[60] md:hidden transition-opacity duration-300 ${sidebarOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        
        {/* Latar Belakang Gelap */}
        <div 
          className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm"
          onClick={() => setSidebarOpen(false)}
        ></div>

        {/* Panel Menu Putih */}
        <div className={`fixed right-0 top-0 bottom-0 w-64 bg-white shadow-2xl p-6 transition-transform duration-300 transform ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'} overflow-y-auto`}>
          
          <div className="flex justify-between items-center mb-8">
            <span className="text-xl font-bold text-gray-900">Menu</span>
            <button onClick={() => setSidebarOpen(false)} className="p-2 text-gray-500 hover:text-red-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          <nav className="flex flex-col space-y-2">
            <Link href="/" onClick={() => setSidebarOpen(false)} className={`block px-4 py-2 rounded-lg ${isActive('/')}`}>Beranda</Link>
            
            {/* MENU PROFIL MOBILE (Accordion) */}
            <div>
              <button 
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center justify-between w-full px-4 py-2 rounded-lg text-gray-600 hover:text-red-600"
              >
                <span className={pathname.startsWith('/profil') ? "font-bold text-red-600" : ""}>Profil</span>
                <svg className={`w-4 h-4 transition-transform ${profileOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              
              {/* Sub-menu Profil */}
              {profileOpen && (
                <div className="pl-4 space-y-1 mt-1 border-l-2 border-gray-100 ml-4">
                   <Link href="/profil/desa" onClick={() => setSidebarOpen(false)} className="block px-4 py-2 text-sm text-gray-500 hover:text-red-600">Profil Desa</Link>
                   <Link href="/profil/sejarah" onClick={() => setSidebarOpen(false)} className="block px-4 py-2 text-sm text-gray-500 hover:text-red-600">Sejarah</Link>
                </div>
              )}
            </div>

            <Link href="/direktori/produk" onClick={() => setSidebarOpen(false)} className={`block px-4 py-2 rounded-lg ${isActive('/direktori/produk')}`}>Produk</Link>
            <Link href="/direktori/wisata" onClick={() => setSidebarOpen(false)} className={`block px-4 py-2 rounded-lg ${isActive('/direktori/wisata')}`}>Wisata</Link>
            <Link href="/berita" onClick={() => setSidebarOpen(false)} className={`block px-4 py-2 rounded-lg ${isActive('/berita')}`}>Kabar Terbaru</Link>
          </nav>

          <div className="mt-8 border-t pt-6">
            <a href="https://wa.me/6285740560033"
              target="_blank" className="flex items-center justify-center w-full bg-red-600 text-white px-5 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors shadow-lg">
              WhatsApp Kami
            </a>
          </div>
        </div>
      </div>
    </>
  );
}