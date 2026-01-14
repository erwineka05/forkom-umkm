import Image from 'next/image';
import Link from 'next/link';

export default function SejarahPage() {
  return (
    <div className="bg-white min-h-screen">
      
      {/* --- 1. HERO HEADER --- */}
      <div className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden bg-gray-900">
        {/* Gambar Background */}
        <div className="absolute inset-0 z-0">
            <Image 
              src="/images/wisata-embung.jpg" // Kita gunakan gambar embung sebagai background
              alt="Sejarah Umbulmartani"
              fill
              className="object-cover opacity-40" // Opacity biar teks terbaca
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
        </div>

        {/* Teks Judul */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in-up">
          <span className="inline-block py-1 px-3 rounded-full bg-red-600/20 text-red-100 border border-red-500/30 text-xs font-bold tracking-widest uppercase mb-4 backdrop-blur-sm">
            Profil Kalurahan
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Sejarah & Asal Usul
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Menelusuri jejak masa lalu Umbulmartani, dari sumber mata air hingga menjadi pusat kemakmuran.
          </p>
        </div>
      </div>

      {/* --- 2. KONTEN ARTIKEL --- */}
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-10">
            <Link href="/" className="hover:text-red-600">Beranda</Link>
            <span>/</span>
            <Link href="/profil/desa" className="hover:text-red-600">Profil</Link>
            <span>/</span>
            <span className="text-gray-900 font-semibold">Sejarah</span>
        </div>

        <div className="prose prose-lg prose-red text-gray-600 mx-auto text-justify leading-loose">
          
          {/* Bagian 1 */}
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
             <span className="w-2 h-8 bg-red-600 rounded-full"></span>
             Makna Nama "Umbulmartani"
          </h2>
          <p className="mb-6">
            Kalurahan Umbulmartani terbentuk dari penggabungan beberapa kalurahan lama pada masa awal kemerdekaan. 
            Nama <strong>"Umbulmartani"</strong> sendiri diambil dari dua kata dalam Bahasa Jawa yang penuh makna filosofis:
          </p>
          <ul className="list-none space-y-4 mb-8 pl-4 border-l-2 border-gray-200">
             <li className="flex gap-4">
                <span className="font-bold text-red-600 text-xl">01.</span>
                <div>
                    <strong className="block text-gray-900">Umbul</strong>
                    Berarti sumber air atau mata air yang memancar deras. Melambangkan sumber kehidupan yang tak pernah kering.
                </div>
             </li>
             <li className="flex gap-4">
                <span className="font-bold text-red-600 text-xl">02.</span>
                <div>
                    <strong className="block text-gray-900">Martani</strong>
                    Berarti memberikan kehidupan, kesuburan, atau kemakmuran bagi para petani (bumi).
                </div>
             </li>
          </ul>
          <p className="mb-10">
            Secara harfiah, Umbulmartani dapat diartikan sebagai <em>"Sumber mata air yang memberikan kehidupan dan kemakmuran bagi masyarakat agraris."</em>
          </p>

          {/* Quote Highlight */}
          <div className="my-12 p-8 bg-red-50 rounded-2xl border border-red-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 text-red-100">
               <svg width="100" height="100" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.054 15.385 14.502 17.279 14.126C16.92 13.593 16.636 13.064 16.636 12.339C16.636 10.963 17.659 10 19 10C20.341 10 21.364 10.963 21.364 12.339C21.364 16.452 18.257 21 14.017 21ZM5 21L5 18C5 16.054 6.368 14.502 8.262 14.126C7.903 13.593 7.619 13.064 7.619 12.339C7.619 10.963 8.642 10 10 10C11.341 10 12.364 10.963 12.364 12.339C12.364 16.452 9.257 21 5 21Z"/></svg>
            </div>
            <p className="italic font-medium text-gray-800 text-lg relative z-10 text-center">
              "Sebuah doa agar wilayah ini senantiasa subur, warganya makmur, dan menjadi sumber kebaikan bagi sekitarnya."
            </p>
          </div>

          {/* Bagian 2 */}
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
             <span className="w-2 h-8 bg-gray-800 rounded-full"></span>
             Sejarah Pembentukan
          </h2>
          <p className="mb-6">
            Sebelum tahun 1946, wilayah ini terdiri dari beberapa kelurahan kecil yang berdiri sendiri. Berdasarkan 
            <strong> Maklumat Pemerintah Daerah Istimewa Yogyakarta Tahun 1946</strong> tentang penggabungan kelurahan, 
            maka wilayah-wilayah kecil tersebut disatukan menjadi satu kesatuan administratif yang lebih besar di bawah 
            Kapanewon Ngemplak, Kabupaten Sleman.
          </p>
          <p className="mb-6">
            Langkah ini diambil untuk memperkuat tata kelola pemerintahan desa agar lebih efisien dan mampu memberikan 
            pelayanan yang lebih baik kepada masyarakat pasca kemerdekaan Republik Indonesia.
          </p>
          
          <div className="relative w-full h-80 my-10 rounded-2xl overflow-hidden shadow-lg group">
             <Image 
               src="/images/wisata-embung.jpg" 
               alt="Pemandangan Desa"
               fill
               className="object-cover transition-transform duration-700 group-hover:scale-110"
             />
             <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
             <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg text-sm font-bold text-gray-800 shadow">
                Lanskap Umbulmartani Masa Kini
             </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
             <span className="w-2 h-8 bg-red-600 rounded-full"></span>
             Masa Kini & Masa Depan
          </h2>
          <p>
            Kini, Umbulmartani telah bertransformasi menjadi desa yang dinamis. Tidak hanya mengandalkan sektor pertanian, 
            warga mulai mengembangkan potensi <strong>UMKM Kreatif</strong> dan <strong>Eduwisata</strong>. 
            Keberadaan Embung Umbulmartani menjadi bukti nyata bagaimana kearifan lokal dalam mengelola air dapat 
            bersinergi dengan pariwisata modern.
          </p>
        </div>

        {/* --- 3. FOOTER NAVIGASI --- */}
        <div className="mt-16 pt-10 border-t border-gray-200 text-center">
             <h3 className="text-lg font-semibold text-gray-900 mb-4">Ingin mengenal lebih jauh?</h3>
             <div className="flex justify-center gap-4">
                <Link href="/profil/desa" className="px-6 py-3 bg-white border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50 font-medium transition">
                    Lihat Profil Desa
                </Link>
                <Link href="/direktori/wisata" className="px-6 py-3 bg-red-600 text-white rounded-full font-medium hover:bg-red-700 shadow-lg shadow-red-200 transition">
                    Jelajahi Wisata
                </Link>
             </div>
        </div>

      </div>
    </div>
  );
}