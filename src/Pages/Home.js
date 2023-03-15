import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { appContext } from "../components/App/App";

function Home() {
  const [text, setText] = useState("");
  const { groupName, setGroupName } = useContext(appContext);

  console.log(groupName);

  const group = () => {
    setGroupName(text);
    console.log("after setting grouop name to text value:", groupName);
    setText("");
  };

  return (
    <div className="w-full h-screen bg-[#05998C] flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center w-full">
        <h1 className="text-white text-center text-3xl font-bold mb-8">
          Name your group / Bill
        </h1>
        <input
          value={text}
          className="rounded-lg py-1 px-2"
          type="text"
          onChange={(e) => setText(e.target.value)}
        />
        <Link to="/names">
          <button
            className="bg-white rounded-xl p-2 mt-24 text-[#05998C] font-medium sm:mr-6"
            onClick={group}
          >
            Continue
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
