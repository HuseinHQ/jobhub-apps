import { Tooltip } from "@mui/material";

export default function FilterBar2() {
  return (
    <>
      <div className=" flex py-3 w-full justify-center bg-[#0d3880]">
        <div className="flex w-[90vw] flex-wrap content-center gap-3">
          <Tooltip title="Fitur belum berfungsi" placement="bottom-end">
            <input
              className="rounded focus:ring-4 focus:ring-blue-500 focus:outline-none focus:ring-inset-0 py-2 px-4 w-[410px] transition-all"
              placeholder="Jabatan, kata kunci, perusahaan"
            />
          </Tooltip>
          <Tooltip title="Fitur belum berfungsi" placement="bottom-start">
            <input
              className="rounded focus:ring-4 focus:ring-blue-500 focus:outline-none focus:ring-inset-0 py-2 px-4 w-[410px] transition-all"
              placeholder="Daerah, kota atau kabupaten"
            />
          </Tooltip>
          <Tooltip title="Fitur belum berfungsi" placement="bottom-start">
            <select
              className="rounded focus:ring-4 focus:ring-blue-500 focus:outline-none focus:ring-inset-0 py-2 px-4 w-[410px]"
              placeholder="Semua Specialisasi Pekerjaan"
            >
              <option>Semua Spesialisasi Pekerjaan</option>
              <option>Akuntansi / Keuangan</option>
              <option>Sumber Daya Manusia/Personalia</option>
              <option>Penjualan / Pemasaran</option>
              <option>Seni/Media/Komunikasi</option>
              <option>Pelayanan</option>
              <option>Hotel/Restoran</option>
              <option>Pendidikan/Pelatihan</option>
              <option>Komputer/Teknologi informasi</option>
              <option>Teknik</option>
              <option>Manufaktur</option>
              <option>Bangunan/Konstruksi</option>
              <option>Sains</option>
              <option>Layanan Kesehatan</option>
              <option>Lainnya</option>
            </select>
          </Tooltip>

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
