import { Outlet } from "react-router-dom";
import FilterBar2 from "../components/FilterBar2";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchJobs } from "../store/actions/actionCreators";
import JobCard from "../components/JobCard";

export default function JobPage() {
  const jobs = useSelector((state) => state.job.jobs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchJobs());
  }, []);

  return (
    <>
      <FilterBar2 />
      <div className="flex justify-center bg-[#f7f8fb]">
        <div className="flex max-h-[633px] w-[90vw]">
          <div className="flex flex-col w-[38%] bg-[#f7f8fb] py-5 border-r-2 gap-3 overflow-auto">
            <p className="ps-4 text-slate-800">
              <span className="font-bold">1-{jobs.length}</span> dari {jobs.length} lowongan
            </p>
            {jobs.map((job) => (
              <JobCard key={job.id} data={job} />
            ))}
          </div>
          <Outlet context={{ jobCount: jobs.length }} />
        </div>
      </div>
    </>
  );
}
