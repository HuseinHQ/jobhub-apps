import { Link } from "react-router-dom";
import { Tooltip } from "@mui/material";
import toast from "react-hot-toast";

export default function FilterBar() {
  const notify = () => toast.error("Fitur search belum tersedia!");

  return (
    <>
      <div className=" flex h-[245px] w-full justify-center bg-cover" style={{ backgroundImage: 'url("/fil-bar.png")' }}>
        <div className="flex flex-wrap w-4/5 content-center gap-5">
          <h2 className="text-white font-semibold w-full">Dapatkan pekerjaan yang berarti bagimu</h2>
          <Tooltip title="Fitur belum berfungsi" placement="bottom-end">
            <input
              className="rounded focus:ring-4 focus:ring-blue-500 focus:outline-none focus:ring-inset-0 py-2 px-4 lg:w-1/4 transition-all"
              placeholder="Jabatan, kata kunci, perusahaan"
            />
          </Tooltip>
          <Tooltip title="Fitur belum berfungsi" placement="bottom-end">
            <input
              className="rounded focus:ring-4 focus:ring-blue-500 focus:outline-none focus:ring-inset-0 py-2 px-4 lg:w-1/4 transition-all"
              placeholder="Daerah, kota atau kabupaten"
            />
          </Tooltip>
          <Tooltip title="Fitur belum berfungsi" placement="bottom-end">
            <select
              className="rounded focus:ring-4 focus:ring-blue-500 focus:outline-none focus:ring-inset-0 py-2 px-4 lg:w-1/4"
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
          <button onClick={notify} className=" bg-[#e60278] hover:bg-[#c93a84] transition-colors text-white py-2 px-10 rounded font-semibold">
            Cari
          </button>
        </div>
      </div>

      <div className="bg-white w-[80vw] mx-auto py-5">
        <div className="flex items-center">
          <h2 className="font-semibold text-slate-800 pe-6">Pencarian terakhir</h2>
          <Link to="/jobs" className="px-6 border-x-2 border-slate-200">
            <h2 className="font-semibold text-blue-600">Semua lowongan</h2>
            <h2 className="text-slate-800 leading-none">Semua Lokasi</h2>
          </Link>
          <Link to="/jobs" className="px-6 border-e-2 border-slate-200">
            <h2 className="font-semibold text-blue-600">Semua lowongan</h2>
            <h2 className="text-slate-800 leading-none">Semua Lokasi</h2>
          </Link>
          <Link to="/jobs" className="px-6 border-slate-200">
            <h2 className="font-semibold text-blue-600">Semua lowongan</h2>
            <h2 className="text-slate-800 leading-none">Semua Lokasi</h2>
          </Link>
        </div>
      </div>
    </>
  );
}
