import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import { fetchCompanies, fetchJobById, putJobs } from "../stores/actions/actionCreator";
import { useSnackbar } from "notistack";

export default function UpdateJobs() {
  const { sidenavToggleHandler } = useOutletContext();
  const { id } = useParams();

  const job = useSelector((state) => state.jobReducer.job);
  const companies = useSelector((state) => state.companyReducer.companies);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const [jobForm, setJobForm] = useState({
    title: "",
    description: "",
    companyId: 0,
    authorId: 1,
    jobType: "",
  });

  const [skills, setSkills] = useState([
    {
      jobId: 0,
      name: "",
      level: "",
    },
  ]);

  useEffect(() => {
    dispatch(fetchJobById(id));
    dispatch(fetchCompanies());
  }, []);

  useEffect(() => {
    setJobForm(job);
    setSkills(job.skills);
  }, [job]);

  function changeHandler(e) {
    const { name, value } = e.target;
    setJobForm({
      ...jobForm,
      [name]: value,
    });
  }

  function renderSkillInput() {
    let result = [];
    for (let i = 0; i < skills.length; i++) {
      result.push(
        <div className="mb-4 flex" style={{ gap: "0.5rem" }} key={i}>
          <input
            type="text"
            className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:outline-none focus:transition-shadow"
            placeholder="Skill"
            aria-label="Skill Name"
            aria-describedby="skill-name-addon"
            name="name"
            value={skills[i].name}
            onChange={(e) => skillChangeHandler(e, i)}
          />
          <select
            className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:outline-none focus:transition-shadow"
            aria-label="Level"
            aria-describedby="level-addon"
            name="level"
            value={skills[i].level}
            onChange={(e) => skillChangeHandler(e, i)}
          >
            <option value="" disabled>
              -- Select Skill Level --
            </option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>
      );
    }
    return result;
  }

  function skillInputIncrement() {
    if (skills.length < 5) {
      setSkills([
        ...skills,
        {
          jobId: 0,
          name: "",
          level: "",
        },
      ]);
    }
  }

  function skillChangeHandler(e, index) {
    const { value, name } = e.target;
    const skillArray = [...skills];
    skillArray[index][name] = value;

    setSkills(skillArray);
  }

  function submitHandler(e) {
    e.preventDefault();
    const obj = jobForm;
    obj.skills = skills;
    dispatch(putJobs(obj, id));
    enqueueSnackbar(`Job with id ${id} updated successfully!`, { variant: "success" });
    navigate("/jobs");
  }

  return (
    <>
      <main className="ease-soft-in-out xl:ml-68.5 relative h-full max-h-screen rounded-xl transition-all duration-200">
        <Navbar sidenavToggleHandler={sidenavToggleHandler} title="Edit Jobs" />

        <div className="w-full px-6 py-6 mx-auto">
          <div className="flex flex-wrap">
            <form role="form" onSubmit={submitHandler} className="w-full">
              <div className="flex flex-wrap lg:flex-nowrap" style={{ gap: "1rem" }}>
                <div className="w-full" style={{ paddingTop: "0.6rem" }}>
                  <label className="mb-2 ml-1 font-bold text-xs text-slate-700">Title</label>
                  <div className="mb-4">
                    <input
                      type="text"
                      className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:outline-none focus:transition-shadow"
                      placeholder="Title"
                      aria-label="Title"
                      aria-describedby="title-addon"
                      name="title"
                      value={jobForm.title}
                      onChange={changeHandler}
                      autoComplete="title"
                    />
                  </div>

                  <label className="mb-2 ml-1 font-bold text-xs text-slate-700">Company</label>
                  <div className="mb-4">
                    <select
                      className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full  rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:outline-none focus:transition-shadow"
                      aria-label="Company Id"
                      aria-describedby="companyId-addon"
                      name="companyId"
                      value={jobForm.companyId}
                      onChange={changeHandler}
                    >
                      <option value="0" disabled>
                        -- Select Company --
                      </option>
                      {companies.map((company) => (
                        <option value={company.id} key={company.id}>
                          {company.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <label className="mb-2 ml-1 font-bold text-xs text-slate-700">Job Type</label>
                  <div className="mb-4">
                    <select
                      className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full  rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:outline-none focus:transition-shadow"
                      aria-label="Job Type"
                      aria-describedby="job-type-addon"
                      name="jobType"
                      value={jobForm.jobType}
                      onChange={changeHandler}
                      autoComplete="job-type"
                    >
                      <option value="" disabled>
                        -- Select Job Type --
                      </option>
                      <option value="full time">Full Time</option>
                      <option value="part time">Part Time</option>
                    </select>
                  </div>

                  <label className="mb-2 ml-1 font-bold text-xs text-slate-700">Description</label>
                  <div className="mb-4">
                    <textarea
                      type="text"
                      className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:outline-none focus:transition-shadow"
                      placeholder="Description"
                      aria-label="Description"
                      aria-describedby="description-addon"
                      name="description"
                      value={jobForm.description}
                      onChange={changeHandler}
                      autoComplete="current-description"
                    ></textarea>
                  </div>
                </div>

                <div className="w-full">
                  <div className="flex justify-between items-center">
                    <label className="mb-2 ml-1 font-bold text-xs text-slate-700">Skills</label>
                    <button
                      type="button"
                      onClick={skillInputIncrement}
                      to="/jobs/add"
                      className="px-2.5 py-1 mb-2 font-bold text-white align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer shadow-soft-md bg-x-25 bg-150 leading-pro ease-soft-in tracking-tight-soft bg-gradient-to-tl from-green-600 to-lime-400 hover:shadow-soft-xs active:opacity-85"
                    >
                      +
                    </button>
                  </div>
                  {renderSkillInput()}
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-block w-full lg:w-1/2 px-6 py-3 mt-6 mb-0 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer shadow-soft-md bg-x-25 bg-150 leading-pro text-xs ease-soft-in tracking-tight-soft bg-gradient-to-tl from-blue-600 to-cyan-400 hover:scale-102 hover:shadow-soft-xs active:opacity-85"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
