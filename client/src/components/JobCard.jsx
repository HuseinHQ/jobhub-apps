import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function JobCard({ data }) {
  const navigate = useNavigate();
  function gotoDetail(id) {
    navigate("/jobs/" + id);
  }

  const getDay = () => {
    if (data && data.createdAt) {
      const createdAtDate = new Date(data.createdAt);
      const currentDate = new Date();
      const timeDifference = currentDate - createdAtDate;
      const dayCount = Math.floor(timeDifference / (24 * 60 * 60 * 1000));

      return dayCount;
    }
  };

  return (
    <div
      onClick={() => gotoDetail(data.id)}
      className="hover:cursor-pointer hover:shadow-md transition-all border-l-4 border-blue-700 rounded bg-white p-6 me-2"
    >
      <img className=" max-h-12 mb-5" src={data.Company.companyLogo} />
      <h2 className="font-bold text-[#512eaa]">{data.title}</h2>
      <h3 className="text-[14px] text-slate-800 mb-4">{data.Company.name}</h3>
      <h3 className="text-[14px] text-slate-800 mb-4 font-semibold">{data.Company.location}</h3>
      <p className="text-[#5a6881] text-sm">{getDay() + " hari yang lalu"}</p>
      {/* <ul className="ps-12 list-disc text-slate-800">
        {data.Skills.map((skill, index) => (
          <li key={index}>{skill.name}</li>
        ))}
      </ul> */}
    </div>
  );
}
