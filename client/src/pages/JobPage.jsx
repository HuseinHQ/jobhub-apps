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

  useEffect(() => {
    console.log(jobs);
  }, [jobs]);

  return (
    <>
      <FilterBar2 />
      <div className="flex">
        <div className="flex items-end flex-col w-[38vw] mb-5 border-r-2 gap-3">
          <p className="self-start ps-[20%] mt-3">
            <span className="font-bold">{jobs.length}</span> lowongan
          </p>
          {jobs.map((job) => (
            <JobCard key={job.id} data={job} />
          ))}

          {/* <JobCard />
          <JobCard /> */}
        </div>
        <Outlet />
      </div>
    </>
  );
}
