export default function FilterBar() {
  return (
    <>
      <div className=" flex h-[245px] w-full justify-center bg-cover" style={{ backgroundImage: 'url("/fil-bar.png")' }}>
        <div className="flex flex-wrap w-4/5 content-center gap-3">
          <h2 className="text-white font-semibold w-full">Dapatkan pekerjaan yang berarti bagimu</h2>
          <input
            className="rounded focus:ring-4 focus:ring-blue-500 focus:outline-none focus:ring-inset-0 py-2 px-4 lg:w-1/4"
            placeholder="Jabatan, kata kunci, perusahaan"
          />
          <input
            className="rounded focus:ring-4 focus:ring-blue-500 focus:outline-none focus:ring-inset-0 py-2 px-4 lg:w-1/4"
            placeholder="Daerah, kota atau kabupaten"
          />
          <input className="rounded focus:ring-4 focus:ring-blue-500 focus:outline-none focus:ring-inset-0 py-2 px-4 lg:w-1/4" />
          <button className=" bg-[#e60278] hover:bg-[#c93a84] transition-colors text-white py-2 px-10 rounded font-semibold">Cari</button>
        </div>
      </div>
    </>
  );
}
