import { useOutletContext } from "react-router-dom";

export default function NoDetailPage() {
  const { jobCount } = useOutletContext();

  return (
    <div className="flex flex-col w-full py-24 items-center gap-5">
      <img className="w-[220px] pt-5" src="https://www.jobstreet.co.id/assets/2982a5e7e83c56a68c79.png"></img>
      <div className="text-center">
        <h2 className="font-bold text-[18px]">Ada {jobCount} lowongan untuk kamu</h2>
        <p className="text-[#5A6881]">Pilih lowongan untuk melihat lebih detail</p>
      </div>
    </div>
  );
}
