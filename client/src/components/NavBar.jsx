import { Link, useLocation } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";

export default function Navbar() {
  const { pathname } = useLocation();

  const selectedLiClass = "text-slate-800 font-semibold border-b-2 border-slate-800";
  const notSelectedLiClass = "text-slate-600 hover:border-b-2 transition-all ease-in-out duration-75";

  return (
    <nav className="flex h-[96px] items-center justify-center">
      <div className="flex w-[84vw]">
        <Link to="/" className="me-7">
          <svg viewBox="0 0 1620.35 250" height="30">
            <path
              style={{ fill: "#0d3880" }}
              d="M 641 165.11 C 641 165.11 649.29 187.64 641.08 165.19 M 482 145.47 C 482 127.98 469.27 115.68 452.64 115.68 C 436.24 115.68 423.51 127.98 423.51 145.47 C 423.51 162.96 436.24 175.25 452.64 175.25 C 469.27 175.25 482 162.95 482 145.47 M 395.66 145.47 C 395.66 113.31 420.92 88.47 452.66 88.47 C 484.4 88.47 509.87 113.3 509.87 145.47 C 509.87 177.64 484.4 202.47 452.66 202.47 C 420.92 202.47 395.66 177.65 395.66 145.47 M 606.72 145.47 C 606.72 127.33 593.98 115.03 576.72 115.03 C 559.66 115.03 546.93 127.33 546.93 145.47 C 546.93 163.61 559.66 175.9 576.72 175.9 C 593.98 175.9 606.72 163.6 606.72 145.47 M 634.56 145.47 C 634.56 177.63 610.82 202.47 581.89 202.47 C 566.14 202.47 554.7 196.64 546.89 186.71 L 546.89 199.45 L 519.08 199.45 L 519.08 48.34 L 546.93 48.34 L 546.93 104.24 C 554.7 94.31 566.14 88.48 581.93 88.48 C 610.86 88.48 634.6 113.31 634.6 145.48 M 387.12 48.37 L 387.12 152.37 C 387.186 158.792 386.151 165.178 384.06 171.25 C 380.903 180.322 374.844 188.1 366.82 193.38 C 366.82 193.38 366.77 193.45 366.75 193.45 C 358.07 200.04 345.33 202.36 335.83 202.36 C 311.02 202.36 290.19 191.51 283.68 170.65 C 281.68 164.31 280.88 156.35 280.88 144.48 L 311.05 144.48 C 310.86 156.83 312.46 166.09 321.76 171.37 C 330.18 176.16 348.44 175.89 354.76 162.29 C 358.48 154.29 357.53 141.04 357.53 132.21 L 357.53 48.37 L 387.12 48.37 Z M 0 125 C 0 28.775 104.167 -31.366 187.5 16.747 C 270.833 64.859 270.833 185.141 187.5 233.253 C 168.498 244.224 146.942 250 125 250 C 55.964 250 0 194.036 0 125"
            ></path>
            <path
              style={{ fill: "#fff" }}
              d="M128 47.68a7.81 7.81 0 117.8 7.8 7.81 7.81 0 01-7.8-7.8M152.26 73.94a8.62 8.62 0 118.61 8.61 8.62 8.62 0 01-8.61-8.61M128 73.94a7.81 7.81 0 117.8 7.81 7.8 7.8 0 01-7.8-7.81M178.14 100.29a9.67 9.67 0 119.68 9.67 9.66 9.66 0 01-9.68-9.67M152.26 100.21a8.62 8.62 0 118.61 8.6 8.62 8.62 0 01-8.61-8.6M128 100.21a7.81 7.81 0 117.8 7.81 7.8 7.8 0 01-7.8-7.81M104.74 100.21a6.84 6.84 0 116.83 6.83 6.83 6.83 0 01-6.83-6.83M85.38 100.21a5.86 5.86 0 115.85 5.86 5.86 5.86 0 01-5.85-5.86M66.92 100.21a4.88 4.88 0 114.88 4.89 4.88 4.88 0 01-4.88-4.89M51.29 100.21a3.92 3.92 0 113.92 3.9 3.91 3.91 0 01-3.92-3.9M36.51 100.21a2.93 2.93 0 112.93 2.92 2.92 2.92 0 01-2.93-2.92M24 100.21a2 2 0 112 2 2 2 0 01-2-2M178.14 126.55a9.67 9.67 0 119.68 9.67 9.68 9.68 0 01-9.68-9.67M152.26 126.47a8.62 8.62 0 118.61 8.62 8.62 8.62 0 01-8.61-8.62M128 126.47a7.81 7.81 0 117.8 7.81 7.8 7.8 0 01-7.8-7.81M104.74 126.47a6.84 6.84 0 116.83 6.84 6.82 6.82 0 01-6.83-6.84M85.38 126.47a5.86 5.86 0 115.85 5.86 5.85 5.85 0 01-5.85-5.86M66.92 126.47a4.88 4.88 0 114.88 4.89 4.87 4.87 0 01-4.88-4.89M51.29 126.47a3.92 3.92 0 113.92 3.9 3.91 3.91 0 01-3.92-3.9M36.51 126.47a2.93 2.93 0 112.93 2.92 2.92 2.92 0 01-2.93-2.92M24 126.47a2 2 0 112 2 2 2 0 01-2-2M204.67 126.73a10.6 10.6 0 1110.6 10.59 10.61 10.61 0 01-10.6-10.59M178.14 152.81a9.67 9.67 0 119.68 9.68 9.67 9.67 0 01-9.68-9.68M152.26 152.74a8.62 8.62 0 118.61 8.61 8.62 8.62 0 01-8.61-8.61M128 152.74a7.81 7.81 0 117.8 7.81 7.81 7.81 0 01-7.8-7.81M104.74 152.74a6.84 6.84 0 116.83 6.83 6.84 6.84 0 01-6.83-6.83M85.38 152.74a5.86 5.86 0 115.85 5.86 5.85 5.85 0 01-5.85-5.86M66.92 152.74a4.88 4.88 0 114.88 4.87 4.87 4.87 0 01-4.88-4.87M51.29 152.74a3.92 3.92 0 113.92 3.91 3.92 3.92 0 01-3.92-3.91M36.51 152.74a2.93 2.93 0 112.93 2.93 2.93 2.93 0 01-2.93-2.93M24 152.74a2 2 0 113.9 0 2 2 0 01-3.9 0M152.26 179a8.62 8.62 0 118.61 8.61 8.62 8.62 0 01-8.61-8.61M128 179a7.81 7.81 0 117.8 7.81A7.82 7.82 0 01128 179M128 205.26a7.81 7.81 0 117.8 7.82 7.8 7.8 0 01-7.8-7.82"
            ></path>
            <path
              style={{ fill: "#0d3880" }}
              d="M 1136.73 172.62 C 1136.73 181.38 1134.86 188.21 1131.12 193.11 C 1127.38 198.01 1122.157 200.463 1115.45 200.47 C 1109.887 200.643 1104.588 198.094 1101.25 193.64 L 1100.59 199.45 L 1087.45 199.45 L 1087.45 121.83 L 1102.06 121.83 L 1102.06 149.67 C 1105.349 145.766 1110.248 143.587 1115.35 143.76 C 1122.017 143.76 1127.247 146.213 1131.04 151.12 C 1134.833 156.027 1136.73 162.923 1136.73 171.81 L 1136.73 172.62 Z M 1122.12 171.56 C 1122.12 166.027 1121.247 161.99 1119.5 159.45 C 1117.729 156.901 1114.759 155.458 1111.66 155.64 C 1106.993 155.64 1103.793 157.543 1102.06 161.35 L 1102.06 182.93 C 1103.847 186.77 1107.08 188.69 1111.76 188.69 C 1116.44 188.69 1119.54 186.357 1121.06 181.69 C 1121.893 178.381 1122.249 174.97 1122.12 171.56 Z M 1163 178.78 L 1173.11 144.78 L 1188.78 144.78 L 1166.78 207.95 L 1165.57 210.84 C 1162.303 217.98 1156.913 221.55 1149.4 221.55 C 1147.207 221.527 1145.028 221.19 1142.93 220.55 L 1142.93 209.51 L 1145.16 209.56 C 1147.299 209.697 1149.435 209.263 1151.35 208.3 C 1152.847 207.287 1153.971 205.812 1154.55 204.1 L 1156.27 199.61 L 1137.12 144.77 L 1152.84 144.77 L 1163 178.78 Z"
            ></path>
            <text
              style={{
                fill: "rgb(13, 56, 128)",
                fontFamily: "Albert Sans",
                fontSize: "228px",
                fontWeight: 700,
                letterSpacing: "-13.4px",
                whiteSpace: "pre",
              }}
              x="628.513"
              y="202.049"
            >
              Hub
            </text>
            <text
              style={{
                fill: "rgb(13, 56, 128)",
                fontFamily: "Albert Sans",
                fontSize: "129.882px",
                fontWeight: 700,
                letterSpacing: "-3.6px",
                whiteSpace: "pre",
              }}
              transform="matrix(0.8019829392433167, 0, 0, 0.7937759757041931, 279.7052043632448, 42.0611044475601)"
              x="1164.94"
              y="197.487"
            >
              ZENSE
            </text>
          </svg>
        </Link>
        <ul className="flex gap-6">
          <Link className={pathname === "/jobs" ? selectedLiClass : notSelectedLiClass + " hover:cursor-pointer"} to="/jobs">
            Cari lowongan
          </Link>
          <Tooltip title="Sorry, this page isn't available yet" className={notSelectedLiClass + " hover:cursor-pointer"}>
            MyJobStreet
          </Tooltip>
          <Tooltip title="Sorry, this page isn't available yet" className={notSelectedLiClass + " hover:cursor-pointer"}>
            Profil perusahaan
          </Tooltip>
          <Tooltip title="Sorry, this page isn't available yet" className={notSelectedLiClass + " hover:cursor-pointer"}>
            Tips karier
          </Tooltip>
        </ul>
      </div>
    </nav>
  );
}
