import Image from "next/image";
import Link from "next/link";
// PERBAIKAN: Ubah 'pengurus' menjadi 'dataPengurus'
import { dataPengurus } from "@/data/database";

export default function ProfilForkomPage() {
  return (
    <div className="bg-white min-h-screen py-12">
      <div className="container mx-auto px-6">
        
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-red-600">Beranda</Link>
          <span>/</span>
          <span className="text-gray-900 font-semibold">Profil Forkom</span>
        </div>

        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Forum Komunikasi UMKM</h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Forkom UMKM Umbulmartani adalah wadah bagi para pelaku usaha mikro, kecil, dan menengah 
            untuk saling berbagi informasi, belajar, dan berkembang bersama demi kemajuan ekonomi desa.
          </p>
        </div>

        {/* Visi Misi */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-red-50 p-8 rounded-2xl border border-red-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="bg-red-600 text-white w-8 h-8 flex items-center justify-center rounded-full text-sm">V</span>
              Visi
            </h2>
            <p className="text-gray-700 italic">
              "Mewujudkan UMKM Umbulmartani yang mandiri, inovatif, dan berdaya saing global berbasis kearifan lokal."
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="bg-gray-800 text-white w-8 h-8 flex items-center justify-center rounded-full text-sm">M</span>
              Misi
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Meningkatkan kualitas produk melalui pelatihan rutin.</li>
              <li>Memperluas jaringan pemasaran digital dan konvensional.</li>
              <li>Membangun sinergi antar pelaku usaha dan pemerintah desa.</li>
            </ul>
          </div>
        </div>

        {/* Struktur Pengurus */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Struktur Pengurus</h2>
          
          {/* PERBAIKAN: Gunakan 'dataPengurus' disini */}
          {dataPengurus.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
              {dataPengurus.map((item) => (
                <div key={item.id} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden text-center group hover:-translate-y-2 transition-transform duration-300">
                  <div className="relative h-64 w-full bg-gray-200">
                    <Image 
                      src={item.foto} 
                      alt={item.nama}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{item.nama}</h3>
                    <p className="text-red-600 font-medium text-sm uppercase tracking-wider">{item.jabatan}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-10 bg-gray-50 rounded-xl border border-dashed border-gray-300">
              <p className="text-gray-500">Data pengurus belum ditambahkan.</p>
            </div>
          )}
        </div>

        {/* Program Kerja */}
        <div>
           <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Program Unggulan</h2>
           <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 border border-gray-200 rounded-xl hover:shadow-md transition">
                 <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4 text-2xl">🎓</div>
                 <h3 className="text-gray-900 font-bold mb-2">Pelatihan Rutin</h3>
                 <p className="text-sm text-gray-600">Mengadakan workshop packaging, manajemen keuangan, dan digital marketing setiap bulan.</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-xl hover:shadow-md transition">
                 <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-4 text-2xl">🌱</div>
                 <h3 className="text-gray-900 font-bold mb-2">Bazar Minggu Pahing</h3>
                 <p className="text-sm text-gray-600">Pasar kaget rutin di area Embung Umbulmartani untuk mempromosikan produk anggota.</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-xl hover:shadow-md transition">
                 <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-4 text-2xl">🤝</div>
                 <h3 className="text-gray-900 font-bold mb-2">Kemitraan Usaha</h3>
                 <p className="text-sm text-gray-600">Menjalin kerjasama dengan toko oleh-oleh dan supermarket lokal.</p>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
}