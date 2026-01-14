import { dataBerita } from '@/data/database';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

// Fungsi ini menangkap parameter ID dari URL (misal: b-01)
// Note: Di Next.js 15+, params adalah Promise
export default async function DetailBerita({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params; // Await params untuk Next.js terbaru
  
  // Cari berita yang ID-nya cocok
  const berita = dataBerita.find((item) => item.id === id);

  // Jika tidak ketemu, tampilkan halaman 404
  if (!berita) {
    return notFound();
  }

  return (
    <div className="container mx-auto px-6 py-12 max-w-4xl">
      <Link href="/berita" className="text-gray-500 hover:text-red-600 mb-6 inline-block font-medium">
        ← Kembali ke Daftar Berita
      </Link>

      {/* Header Berita */}
      <div className="mb-8">
        <span className="text-red-600 font-bold tracking-wider text-sm uppercase">Berita Terkini</span>
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2 mb-4 leading-tight">
          {berita.title}
        </h1>
        <p className="text-gray-400">{berita.date} • Oleh Admin Forkom</p>
      </div>

      {/* Gambar Utama */}
      <div className="relative w-full h-[400px] bg-gray-200 rounded-2xl overflow-hidden mb-10 shadow-lg">
        <Image 
          src={berita.image_url} 
          alt={berita.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Isi Konten */}
      <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
        {/* Karena data dummy kita isinya pendek, kita buat seolah-olah panjang */}
        <p className="font-semibold text-xl mb-6">
          {berita.content}
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
}