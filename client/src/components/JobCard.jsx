/* eslint-disable react/prop-types */
export default function JobCard({ data }) {
  return (
    <div className="hover:cursor-pointer hover:shadow-md transition-all border-l-4 border-blue-700 rounded bg-white p-6 w-[84%] me-3">
      <img className=" max-h-12 mb-5" src={data.Company.companyLogo} />
      <h2 className="font-bold text-[#512eaa] mb-4">{data.title}</h2>
      <h3 className="text-[14px] text-slate-800 mb-4">{data.Company.name}</h3>
      <h3 className="text-[14px] text-slate-800 mb-4 font-semibold">{data.Company.location}</h3>
      <ul className="ps-12 list-disc text-slate-800">
        {data.Skills.map((skill, index) => (
          <li key={index}>{skill.name}</li>
        ))}

        {/* <li>Free Parking</li>
        <li>Networking</li> */}
      </ul>
    </div>
  );
}
