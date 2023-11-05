import { Link } from "react-router-dom";
import FilterBar from "../components/FilterBar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCompanies, fetchJobs } from "../store/actions/actionCreators";
import LandingJobCard from "../components/LandingJobCard";
import { Tooltip } from "@mui/material";
import toast from "react-hot-toast";
import Footer from "../components/Footer";
import SkeletonJob from "../components/SkeletonJob";
import SkeletonCompany from "../components/SkeletonCompany";

export default function LandingPage() {
  const jobs = useSelector((state) => state.job.jobs);
  const jobLoading = useSelector((state) => state.job.isLoading);
  const jobError = useSelector((state) => state.job.error);

  const companies = useSelector((state) => state.company.companies);
  const companyLoading = useSelector((state) => state.company.isLoading);
  const companyError = useSelector((state) => state.company.error);

  const dispatch = useDispatch();
  const notify = () => toast.error("Maaf fitur belum dibuat!");
  const notifyError = (error) => toast.error(error || "Failed to fetch");

  const renderSkeletonJobCard = () => {
    return (
      <>
        <SkeletonJob />
        <SkeletonJob />
        <SkeletonJob />
        <SkeletonJob />
      </>
    );
  };

  const renderSkeletonCompany = () => {
    return (
      <>
        <div className="flex justify-center my-3">
          <SkeletonCompany />
        </div>
        <div className="flex justify-center my-3">
          <SkeletonCompany />
        </div>
        <div className="flex justify-center my-3">
          <SkeletonCompany />
        </div>
        <div className="flex justify-center my-3">
          <SkeletonCompany />
        </div>
        <div className="flex justify-center my-3">
          <SkeletonCompany />
        </div>
        <div className="flex justify-center my-3">
          <SkeletonCompany />
        </div>
        <div className="flex justify-center my-3">
          <SkeletonCompany />
        </div>
        <div className="flex justify-center my-3">
          <SkeletonCompany />
        </div>
      </>
    );
  };

  useEffect(() => {
    if (!jobLoading || !companyLoading) {
      dispatch({ type: "loading/true", payload: true });
    }
    dispatch(fetchJobs());
    dispatch(fetchCompanies());
  }, []);

  useEffect(() => {
    console.log(companies);
  }, [companies]);

  useEffect(() => {
    if (jobError) {
      notifyError(jobError.message);
    }
  }, [jobError]);

  useEffect(() => {
    if (companyError) {
      notifyError(companyError.message);
    }
  }, [companyError]);

  return (
    <>
      <FilterBar />
      <main className="bg-[#f7f8fb]">
        <div className="w-[80vw] mx-auto py-5">
          <div>
            <h2 className="font-semibold text-slate-800 pe-6">Direkomendasikan berdasarkan preferensimu</h2>
            <div className="flex bg-white mt-3 py-4 px-5 items-center gap-5">
              <svg viewBox="0 0 48 48" focusable="false" fill="currentColor" width="6%" height="6%" role="img">
                <defs>
                  <polygon id="group-4-a" points="0 .048 34.869 .048 34.869 46.674 0 46.674"></polygon>
                  <polygon id="group-4-c" points=".011 .004 19.008 .004 19.008 1.624 .011 1.624"></polygon>
                </defs>
                <g fill="none" fillRule="evenodd">
                  <rect width="48" height="48" fill="#FFF"></rect>
                  <g transform="translate(1)">
                    <g transform="translate(0 .107)">
                      <mask id="group-4-b" fill="#fff">
                        <use xlinkHref="#group-4-a"></use>
                      </mask>
                      <path
                        fill="#EDEDED"
                        d="M0.00710192215,22.8896967 C0.244969795,30.6202475 5.0372166,38.8209517 11.4619751,42.9275064 C16.1672311,45.9349688 22.6819267,48.1402862 27.9992195,45.4851287 C32.7578175,43.1090861 34.1865754,38.3990231 34.8421851,33.4805544 C34.8421851,33.4803993 35.3525001,29.6524943 31.9076026,25.1866568 C31.145309,24.1982801 31.0421916,21.9940481 30.9040297,20.8306044 C30.5320317,17.6975403 31.5520414,14.7961415 31.604608,11.7109921 C31.6303486,10.1905915 31.2278029,8.51683282 30.7940895,7.05675206 C29.7215132,3.44624649 27.3477965,-0.0161731546 23.190691,0.0491087062 C23.190691,0.0491087062 14.2985573,0.687041189 12.5122223,7.70507382 C12.5122223,7.70507382 11.4912822,14.850724 6.38735713,14.4678714 C6.38735713,14.4678714 -0.247978033,14.595644 0.00710192215,22.8896967"
                        mask="url(#group-4-b)"
                      ></path>
                    </g>
                    <g transform="translate(9.459 4.449)">
                      <path
                        fill="#202D60"
                        d="M0.200621547,30.4432886 C-0.231696333,32.0326926 1.26668519,31.6482895 1.26668519,31.6482895 L3.21645744,31.1604587 C2.49727152,30.4648425 1.24621677,29.2587563 0.57510063,28.633539 L0.200621547,30.4432886 Z"
                      ></path>
                      <path
                        fill="#FEFEFE"
                        d="M6.23190567,29.0704313 C5.7378724,28.6519141 4.80066677,29.0851623 4.80066677,29.0851623 C5.00473074,28.6008981 5.06008852,28.0870166 4.51643482,27.6069391 C3.86516686,27.0316524 2.92796123,27.5646067 2.92796123,27.5646067 C3.2061457,27.1752415 3.2977884,26.4841221 2.68699209,25.9885382 C1.85476466,25.3133904 1.21357584,25.5487773 1.21357584,25.5487773 L0.575178162,28.6336165 C1.2462943,29.2588338 2.49719399,30.464765 3.21653497,31.1605363 L6.88286351,30.2430237 C6.84409756,29.91801 6.88286351,29.6224584 6.23190567,29.0704313"
                      ></path>
                      <path
                        fill="#5D479C"
                        d="M30.2340921,3.86273235 C29.8870593,3.22479987 29.426985,2.86071006 29.426985,2.86071006 L27.0924994,0.932646745 C24.758169,-0.995416572 23.2573064,0.932646745 23.2573064,0.932646745 L1.21359134,25.5488703 C1.21359134,25.5488703 1.64017186,25.392566 2.24864222,25.7011429 C2.38633888,25.7707666 2.53333936,25.8639599 2.68700759,25.9884762 C3.29764885,26.4842152 3.20600614,27.1753345 2.92797674,27.5646997 C2.92797674,27.5646997 3.8650273,27.0315904 4.51629527,27.6068771 C5.05994896,28.0871097 5.00459118,28.6008361 4.80052722,29.0851003 C4.80052722,29.0851003 5.7378879,28.651852 6.23176611,29.0703692 C6.88287902,29.6223964 6.84411307,29.917948 6.88287902,30.2431168 C6.88287902,30.2431168 26.7591123,10.9238727 29.426985,7.94401163 C30.9866167,6.20202487 30.722388,4.76055177 30.2340921,3.86273235"
                      ></path>
                      <path
                        fill="#1B1B1B"
                        fillOpacity=".2"
                        d="M29.4269695,2.86071006 L27.0924839,0.932491681 C24.7581534,-0.995416572 23.2572909,0.932491681 23.2572909,0.932491681 L1.21357584,25.5487152 C1.21357584,25.5487152 1.64015636,25.392566 2.24878178,25.7011429 C5.53597932,22.3444768 21.8369065,5.72954547 23.9693439,4.12137878 C26.2087753,2.43211371 28.1292405,2.48855694 30.2340766,3.86273235 C29.8870438,3.22479987 29.4269695,2.86071006 29.4269695,2.86071006"
                      ></path>
                      <g transform="translate(16.592 30.237)">
                        <mask id="group-4-d" fill="#fff">
                          <use xlinkHref="#group-4-c"></use>
                        </mask>
                        <path
                          fill="#9CA3CD"
                          d="M18.198629,1.62368858 L0.82124891,1.62368858 C0.37388984,1.62368858 0.0113506703,1.26099435 0.0113506703,0.813790341 C0.0113506703,0.366586335 0.37388984,0.00404716524 0.82124891,0.00404716524 L18.198629,0.00404716524 C18.645833,0.00404716524 19.0085272,0.366586335 19.0085272,0.813790341 C19.0085272,1.26099435 18.645833,1.62368858 18.198629,1.62368858"
                          mask="url(#group-4-d)"
                        ></path>
                      </g>
                      <path
                        fill="#9CA3CD"
                        d="M14.2293523,31.86113 L9.2570764,31.86113 C8.8098724,31.86113 8.44717816,31.4984358 8.44717816,31.0512318 C8.44717816,30.6040278 8.8098724,30.2414886 9.2570764,30.2414886 L14.2293523,30.2414886 C14.6767114,30.2414886 15.0392505,30.6040278 15.0392505,31.0512318 C15.0392505,31.4984358 14.6767114,31.86113 14.2293523,31.86113"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
              <p className="text-slate-500">
                <span className="text-blue-600 hover:underline hover:underline-offset-4 hover:cursor-pointer font-bold" onClick={notify}>
                  Daftar
                </span>{" "}
                sekarang untuk menemukan lowongan yang dipilih hanya untukmu
              </p>
            </div>
          </div>

          <div className="mt-20">
            <div className="flex justify-between mb-5">
              <Tooltip title="Ajane iki mek 4 data awal se :v" placement="top-start">
                <h2 className="font-semibold text-slate-800 pe-6">Berdasarkan pencarian terakhirmu</h2>
              </Tooltip>
              <Link to="/jobs" className="font-semibold text-blue-600 pe-6">
                Tampilkan semua lowongan {">"}
              </Link>
            </div>

            <div className="flex flex-wrap gap-2">
              {jobLoading ? renderSkeletonJobCard() : jobs.slice(0, 4).map((job) => <LandingJobCard key={job.id} data={job} />)}
            </div>
          </div>

          <div className="mt-20">
            <h2 className="font-semibold text-slate-800 pe-6">Perusahaan ternama</h2>
            <div className="grid grid-cols-4 bg-white mt-3 py-5 px-10 items-center gap-5 w-2/3">
              {companyLoading
                ? renderSkeletonCompany()
                : companies.map((company) => (
                    <div className="flex justify-center my-3" key={company.id}>
                      <img className="max-h-10" src={company.companyLogo} />
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
