export default function ProfilDesa() {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white-900 mb-4">Profil Kalurahan Umbulmartani</h1>
        <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        
        {/* Kolom Kiri: Sejarah & Info */}
        <div className="md:col-span-2 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-white-800 mb-4">Sejarah Singkat</h2>
            <p className="text-white-600 leading-relaxed text-justify">
              Kalurahan Umbulmartani adalah salah satu kalurahan di Kapanewon Ngemplak, Sleman, Yogyakarta. 
              Nama "Umbulmartani" memiliki makna sumber kehidupan (umbul) yang memberikan kemakmuran (martani) bagi warganya.
              Wilayah ini dikenal dengan potensi pertanian yang subur dan kini berkembang pesat dengan tumbuhnya UMKM kreatif.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white-800 mb-4">Visi & Misi Kalurahan</h2>
            <div className="bg-red-50 p-6 rounded-xl border border-red-100">
              <h3 className="font-bold text-red-800 mb-2">Visi</h3>
              <p className="text-white-700 italic mb-4">"Terwujudnya Masyarakat Umbulmartani yang Makmur, Berbudaya, dan Mandiri."</p>
              <h3 className="font-bold text-red-800 mb-2">Misi Utama</h3>
              <ul className="list-disc pl-5 text-white-700 space-y-1">
                <li>Meningkatkan tata kelola pemerintahan yang bersih.</li>
                <li>Mengembangkan potensi ekonomi lokal berbasis kerakyatan.</li>
                <li>Melestarikan budaya dan kearifan lokal.</li>
              </ul>
            </div>
          </section>
        </div>

        {/* Kolom Kanan: Peta & Statistik */}
        <div className="md:col-span-1 space-y-8">
          
          {/* Widget Peta */}
          <div className="bg-white p-4 shadow-lg rounded-2xl border">
            <h3 className="font-bold text-white-900 mb-4">Lokasi Kantor Kalurahan</h3>
            <div className="aspect-square bg-gray-200 rounded-xl overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.947883279146!2d110.419!3d-7.689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5e!2z!5e0!3m2!1sid!2sid!4v1" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={true} 
                loading="lazy"
              ></iframe>
            </div>
            <p className="text-xs text-white-500 mt-3 text-center">Jl. Kaliurang KM 13, Ngemplak, Sleman</p>
          </div>

          {/* Widget Statistik */}
          <div className="bg-gray-900 text-white p-6 rounded-2xl shadow-lg">
            <h3 className="font-bold text-lg mb-4 border-b border-white-700 pb-2">Statistik Singkat</h3>
            <ul className="space-y-4">
              <li className="flex justify-between items-center">
                <span className="text-white-400">Luas Wilayah</span>
                <span className="font-bold">XXX Ha</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-white-400">Jumlah Padukuhan</span>
                <span className="font-bold">XX Dusun</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-white-400">Jumlah UMKM</span>
                <span className="font-bold text-red-400">50+ Unit</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}