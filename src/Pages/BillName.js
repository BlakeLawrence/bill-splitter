import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { appContext } from "../components/App/App";
import logo from "../assets/split.png";

function Home() {
  const [text, setText] = useState("");
  const { setGroupName } = useContext(appContext);

  const group = () => {
    setGroupName(text);
    setText("");
  };

  const inputClassName =
    "rounded-lg py-1 px-4 border border-[#05998C] mt-6 text-[#38A37F] text-center font-semibold outline-none";

  return (
    <div className="w-full h-screen flex flex-col items-center">
      <div className="flex justify-center w-full pt-6 mb-10">
        <img
          src={logo}
          alt="split company logo"
          className="flex w-[180px] h-[180px] md:w-[225px] md:h-[225px]"
        />
      </div>
      <div></div>
      <h1 className="text-[#38A37F] text-center text-xl md:text-3xl font-bold">
        Name your group / Bill
      </h1>
      <input
        className={inputClassName}
        type="text"
        onChange={(e) => setText(e.target.value)}
      />
      <Link to="/names">
        <button
          className="bg-white border border-[#05998C]  rounded-xl p-2 mt-24 text-[#38A37F] font-medium sm:mr-6 hover:bg-[#38A37F] hover:text-white"
          onClick={group}
        >
          Continue
        </button>
      </Link>
    </div>
  );
}

export default Home;
