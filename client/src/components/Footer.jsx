export default function FooterBar() {
  return (
    <footer className="bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto w-[84vw] py-10">
        <div className="flex flex-col gap-2 mb-10">
          <h2 className="font-semibold text-slate-800 mb-4">Pencari kerja</h2>
          <p className="text-slate-600 hover:cursor-pointer hover:underline">Panduan mencari kerja secara aman</p>
          <p className="text-slate-600 hover:cursor-pointer hover:underline">Sumber daya karir</p>
          <p className="text-slate-600 hover:cursor-pointer hover:underline">Bantuan Karir</p>
          <p className="text-slate-600 hover:cursor-pointer hover:underline">Eksplorasi karir</p>
          <p className="text-slate-600 hover:cursor-pointer hover:underline">Eksplorasi gaji</p>
          <p className="text-slate-600 hover:cursor-pointer hover:underline">Testimoni</p>
          <p className="text-slate-600 hover:cursor-pointer hover:underline">Unduh aplikasi</p>
        </div>

        <div className="flex flex-col gap-2 mb-10">
          <h2 className="font-semibold text-slate-800 mb-4">Perusahaan</h2>
          <p className="text-slate-600 hover:cursor-pointer hover:underline"> Pasang iklan lowongan kerja</p>
          <p className="text-slate-600 hover:cursor-pointer hover:underline">Talent search</p>
          <p className="text-slate-600 hover:cursor-pointer hover:underline">Beriklan dengan kami</p>
          <p className="text-slate-600 hover:cursor-pointer hover:underline">Profil perusahaan</p>
        </div>

        <div className="flex flex-col gap-2 mb-10">
          <h2 className="font-semibold text-slate-800 mb-4">Tentang JobHub</h2>
          <p className="text-slate-600 hover:cursor-pointer hover:underline">Berkarier JobStreet</p>
          <p className="text-slate-600 hover:cursor-pointer hover:underline">Mitra internasional</p>
          <p className="text-slate-600 hover:cursor-pointer hover:underline">Tentang kami</p>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-slate-800 mb-4">Kontak</h2>
          <p className="text-slate-600 hover:cursor-pointer hover:underline"> Hubungi kami</p>
          <p className="text-slate-600 hover:cursor-pointer hover:underline">FAQ</p>
          <p className="text-slate-600 hover:cursor-pointer hover:underline">Kirim saran</p>
          <p className="text-slate-600 hover:cursor-pointer hover:underline">Media sosial</p>
        </div>
      </div>

      <hr className="w-[84vw] mx-auto border" />

      <div className="w-[84vw] mx-auto py-6 flex justify-between text-slate-800">
        <h2 className="font-semibold text-slate-800">Indonesia</h2>
        <ul className="flex gap-5">
          <li className="text-slate-600 hover:cursor-pointer hover:underline">Pernyataan privasi</li>
          <li className="text-slate-600 hover:cursor-pointer hover:underline">Persyaratan & ketentuan</li>
          <li className="text-slate-600">Hak cipta © 2023 JobHub</li>
        </ul>
      </div>
    </footer>
  );
}
