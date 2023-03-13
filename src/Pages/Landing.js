import React from "react";
import logo from "../assets/split.png";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className=" h-screen overflow-hidden">
      <div className="w-full h-1/2 sm:h-1/2 pt-64 bg-[#05998C] flex flex-col justify-center items-center ">
        <img
          src={logo}
          alt="split company logo"
          className="w-[400px] h-[400px] ml-4 z-10"
        />
      </div>
      <Link to="/home">
        <div className=" flex flex-col justify-center items-center w-full h-1/2 bg-[url('/src/assets/bills.png')] bg-cover opacity-30">
          <button className="bg-white w-4/12 sm:w-1/12 rounded-xl p-2 mt-24 text-lg text-[#38A37F] font-medium hover:text-white hover:bg-[#38A37F] z-30">
            CONTINUE
          </button>
        </div>
      </Link>
    </div>
  );
}

export default Landing;
