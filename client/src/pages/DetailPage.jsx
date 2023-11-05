import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchJobById } from "../store/actions/actionCreators";
import toast from "react-hot-toast";

export default function DetailPage() {
  const { id } = useParams();
  const job = useSelector((state) => state.job.job);
  const dispatch = useDispatch();
  const notify = () => toast.success("Selamat anda diterima kerja!");

  useEffect(() => {
    dispatch(fetchJobById(id));
  }, [id]);

  const formatDate = () => {
    if (job.createdAt) {
      const options = { day: "numeric", month: "long", year: "numeric" };
      const currentDate = new Date(job.createdAt);

      return currentDate.toLocaleDateString("id-ID", options);
    }
  };

  return (
    <div className="flex flex-col w-full p-2 bg-white">
      <div className="flex justify-between pb-5">
        <button onClick={notify} className="py-2 px-4 font-semibold bg-[#e60278] hover:bg-[#e6028b] text-white rounded transition-colors">
          Lamar Sekarang
        </button>
        <Link to="/jobs" className="py-2 px-4 font-semibold text-[#4964e9] rounded hover:underline garis-bawah">
          Tutup
        </Link>
      </div>
      <div className="flex overflow-auto px-8 py-12 w-full">
        <div className="flex flex-col gap-1 w-full">
          <div className="mb-5">
            <img className="h-12" src={job.Company?.companyLogo}></img>
          </div>
          <h1 className="text-slate-800 font-bold">{job.title}</h1>
          <h2 className="text-slate-800 font-bold">{job.Company?.name}</h2>
          <h3 className="text-slate-800">{job.Company?.location}</h3>
          <h3 className="text-slate-800">Ditayangkan pada {formatDate()}</h3>

          {/* Deskripsi Job */}
          <h2 className="text-slate-800 font-bold mt-20">Deskripsi Pekerjaan</h2>

          <h3 className="text-slate-800 font-bold mt-8 mb-2">Job Description :</h3>
          <p className="text-slate-800">{job.description}</p>

          <h3 className="text-slate-800 font-bold mt-3 mb-2">Requirements :</h3>
          <ul className="ps-12 list-disc text-slate-800">
            {job.Skills?.map((skill, index) => (
              <li key={index}>
                {skill.level} in {skill.name}
              </li>
            ))}
          </ul>

          <h3 className="text-slate-800 font-bold mt-8 mb-2">Informasi Tambahan</h3>
          <div className="flex">
            <div className="w-1/2">
              <h3 className="text-slate-800 font-bold">Jenis Pekerjaan</h3>
              <p className="text-slate-800 -mt-1">{job.jobType}</p>
            </div>
            <div className="w-1/2">
              <h3 className="text-slate-800 font-bold">Pengunggah Pekerjaan</h3>
              <p className="text-slate-800 -mt-1">{job.User?.username}</p>
            </div>
          </div>

          <hr className="my-10" />

          <h2 className="text-slate-800 font-bold">Tentang Perusahaan</h2>
          <p className="text-slate-800">{job.Company?.description}</p>

          <h2 className="text-slate-800 font-bold mt-10">Informasi Tambahan Perusahaan</h2>
          <p className="text-slate-800 font-bold">Email</p>
          <p className="text-slate-800 -mt-2 mb-10">{job.Company?.email}</p>
          <div className="text-transparent">.</div>
        </div>
      </div>
    </div>
  );
}
