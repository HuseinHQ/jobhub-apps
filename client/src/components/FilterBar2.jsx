export default function FilterBar2() {
  return (
    <>
      <div className=" flex py-3 w-full justify-center bg-[#0d3880]">
        <div className="flex w-[90vw] flex-wrap content-center gap-3">
          <input
            className="rounded focus:ring-4 focus:ring-blue-500 focus:outline-none focus:ring-inset-0 py-2 px-4 "
            placeholder="Jabatan, kata kunci, perusahaan"
          />
          <input
            className="rounded focus:ring-4 focus:ring-blue-500 focus:outline-none focus:ring-inset-0 py-2 px-4"
            placeholder="Daerah, kota atau kabupaten"
          />
          <input className="rounded focus:ring-4 focus:ring-blue-500 focus:outline-none focus:ring-inset-0 py-2 px-4" />
          <button className="bg-transparent hover:bg-slate-400 hover:bg-opacity-30 border-2 border-slate-50 transition-colors text-white py-2 px-10 rounded font-semibold">
            Cari
          </button>

          <button className="bg-transparent hover:bg-slate-400 hover:bg-opacity-30  border border-slate-50 transition-colors text-white py-2 px-3 font-medium text-xs rounded">
            Gaji
          </button>
          <button className="bg-transparent hover:bg-slate-400 hover:bg-opacity-30  border border-slate-50 transition-colors text-white py-2 px-3 font-medium text-xs rounded">
            Jenis Pekerjaan
          </button>
          <button className="bg-transparent hover:bg-slate-400 hover:bg-opacity-30  border border-slate-50 transition-colors text-white py-2 px-3 font-medium text-xs rounded">
            Tanggal ditayangkan
          </button>
        </div>
      </div>
    </>
  );
}
