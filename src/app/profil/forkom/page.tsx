// src/app/profil/forkom/page.tsx
import { pengurus } from "@/data/database";
import Link from "next/link";

export default function ProfilForkomPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <Link href="/" className="text-green-600 hover:underline mb-4 block">← Kembali ke Beranda</Link>
      <h1 className="text-3xl font-bold text-green-800 mb-8 border-b pb-4">Tentang Forkom UMKM</h1>
      
      {/* Visi Misi */}
      <div className="bg-white p-8 rounded-xl shadow-sm border mb-8">
        <h2 className="text-2xl font-bold mb-4">Visi & Misi</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-bold text-green-700 text-lg">Visi</h3>
            <p className="text-gray-700">Terwujudnya UMKM Umbulmartani yang mandiri, sejahtera, dan berdaya saing di era digital.</p>
          </div>
          <div>
            <h3 className="font-bold text-green-700 text-lg">Misi</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Memfasilitasi pengembangan kapasitas pelaku UMKM.</li>
              <li>Membangun jejaring pemasaran produk lokal.</li>
              <li>Mendorong legalitas dan standarisasi produk.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Pengurus */}
      <h2 className="text-2xl font-bold mb-6">Struktur Pengurus</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        {pengurus.map((org, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition">
            <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl">
               👤
            </div>
            <h3 className="font-bold text-gray-800">{org.nama}</h3>
            <p className="text-green-600 text-sm">{org.jabatan}</p>
          </div>
        ))}
      </div>
    </div>
  );
}