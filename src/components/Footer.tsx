import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Kolom Kiri: Info & Kontak */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Forkom UMKM <span className="text-red-600">Umbulmartani</span></h2>
            <p className="text-gray-400 mb-8 max-w-md text-sm leading-relaxed">
              Wadah kolaborasi pelaku usaha mikro, kecil, dan menengah di Umbulmartani. Temukan produk lokal berkualitas langsung dari sumbernya.
            </p>
            
            <div className="space-y-6">
              {/* Alamat */}
              <div className="flex items-start group">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-red-500 mr-4 flex-shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">Alamat</h4>
                  <a href="https://maps.google.com" target="_blank" className="text-sm text-gray-400 hover:text-red-400 transition-colors block mt-1">
                    Grogolan, Umbulmartani, Ngemplak, Sleman, DI Yogyakarta
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start group">
                 <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-red-500 mr-4 flex-shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.269.655 4.505 1.782 6.574l-1.06 3.877 3.96-1.042z"></path></svg>
                 </div>
                 <div>
                    <h4 className="text-white font-semibold text-sm">WhatsApp</h4>
                    <a href="https://wa.me/6285740560033" target="_blank" className="text-sm text-gray-400 hover:text-red-400 transition-colors block mt-1">
                      +62 857-4056-0033
                    </a>
                 </div>
              </div>

              {/* 3. Instagram (BARU DITAMBAHKAN) */}
              <div className="flex items-start group">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-red-500 mr-4 flex-shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.644-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073 1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">Instagram</h4>
                  <a href="https://www.instagram.com/forkomumkmumbulmartani_?igsh=MWZpcGN2Y243amkyeA==" target="_blank" className="text-sm text-gray-400 hover:text-red-400 transition-colors block mt-1">
                    @umkm.umbulmartani
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start group">
                 <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-red-500 mr-4 flex-shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                 </div>
                 <div>
                    <h4 className="text-white font-semibold text-sm">Email</h4>
                    <a href="mailto:forkomumbulmartani@gmail.com" className="text-sm text-gray-400 hover:text-red-400 transition-colors block mt-1">
                      forkomumbulmartani@gmail.com
                    </a>
                 </div>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Peta */}
          <div className="w-full h-full min-h-[300px] bg-gray-800 rounded-2xl p-2 shadow-2xl">
            <iframe 
              width="100%" 
              height="100%" 
              frameBorder="0" 
              scrolling="no" 
              // Ganti src ini dengan link Embed Maps Umbulmartani yang asli
              src="https://maps.google.com/maps?q=Umbulmartani&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="rounded-xl w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
            ></iframe>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-800 bg-gray-900/50">
        <div className="container mx-auto px-6 py-6 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} <span className="text-gray-300 font-semibold">FORKOM UMKM Umbulmartani</span>. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}