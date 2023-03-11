import React from "react";
import logo from "../assets/split.png";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className=" h-screen overflow-hidden">
      <div className="w-full h-1/2 sm:h-1/2 pt-64 bg-[#05998C] flex flex-col justify-center items-center">
        <img
          src={logo}
          alt="split company logo"
          className="w-[400px] h-[400px] ml-4 z-10"
        />
      </div>
      <div className=" flex flex-col justify-center items-center w-full h-1/2 bg-white bg-[url('/src/assets/bills.png')] bg-cover opacity-30">
        <button className="bg-white w-4/12 sm:w-1/12 rounded-xl p-2 mt-24 text-[#05998C] font-medium hover:text-white hover:bg-[#05998C]">
          <Link to="/home">ENTER</Link>
        </button>
      </div>
    </div>
  );
}

export default Landing;
