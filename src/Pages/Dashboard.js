import React, { useContext, useState } from "react";
import { appContext } from "../components/App/App";
import logo from "../assets/split.png";
import { Link } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";
import currency from "../functions/currency.js";

function Dashboard() {
  const {
    groupName,
    participants,
    billAmount,
    setBillAmount,
    tipAmount,
    setTipAmount,
  } = useContext(appContext);
  const [toggleNames, setToggleNames] = useState(false);
  const [billText, setBillText] = useState("");
  const [tipText, setTipText] = useState("");
  const [owedAfterSplittingEvenly, setOwedAfterSplittingEvenly] =
    useState(null);
  // const [ocr, setOcr] = useState({});

  const billTotal = () => {
    setBillAmount(Number(billText));
    console.log(typeof billText);
    setBillText("");
  };

  const tipTotal = () => {
    setTipAmount(Number(tipText));
    setTipText("");
  };

  const splitBillEvenly = () => {
    setOwedAfterSplittingEvenly((billAmount + tipAmount) / participants.length);
  };

  // const url = "http://localhost:5000";
  // const ocrData = async () => {
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   setOcr(data.message);
  //   console.log(ocr.line_items);
  // };
  // useEffect(() => {
  //   ocrData();
  // }, []);

  return (
    <div className="w-full h-screen flex flex-col items-center">
      <div className="flex w-full justify-between pt-6 pl-6">
        <Link to="/">
          <img
            src={logo}
            alt="split company logo"
            className="flex w-[225px] h-[225px]"
          />
        </Link>
        <h1 className="text-5xl italic text-[#38A37F] underline pt-12 pr-12">
          {groupName}
        </h1>
        <div className="flex-col justify-between mr-12 w-[200px] z-20">
          <div
            onClick={() => setToggleNames(!toggleNames)}
            className={
              participants.length > 0
                ? "bg-white w-[80px] h-[80px] flex justify-center rounded-3xl mt-12 border border-[#38A37F]"
                : ""
            }
          >
            {participants.length > 0 && (
              <div className="flex-col justify-center items-center hover:cursor-pointer text-[#38A37F]">
                <h4 className="text-sm mt-2 font-semibold">Members</h4>
                <div className="flex justify-center mt-2">
                  <BsFillPersonFill className="text-3xl" />
                  <div className="text-lg ml-2 mt-1 font-semibold">
                    {participants.length}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div
            className={
              toggleNames && participants.length > 0
                ? "flex flex-col bg-white p-4 rounded-lg mb-2 mt-2  border border-[#38A37F] fixed z-10 shadow-md shadow-[#38A37F]"
                : ""
            }
          >
            {toggleNames &&
              participants.map((person) => {
                return (
                  <div className="flex justify-between">
                    <h2
                      className="text-[#38A37F] font-bold mr-4"
                      key={person.id}
                    >
                      {person.name}
                    </h2>
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="flex flex-col items-center justify-center mr-6">
          <h1 className="text-[#38A37F] text-center text-2xl font-bold">
            Enter Bill
          </h1>
          <input
            value={billText}
            className="rounded-lg py-1 px-4 border border-[#05998C] mt-4 text-[#38A37F] text-center font-semibold outline-none"
            type="number"
            onChange={(e) => setBillText(e.target.value)}
          />

          <button
            className="bg-white border border-[#05998C]  rounded-xl p-2 mt-2 text-[#38A37F] font-medium sm:mr-6 hover:bg-[#38A37F] hover:text-white"
            onClick={billTotal}
          >
            Enter
          </button>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-[#38A37F] text-center text-2xl font-bold">
            Enter Tip
          </h1>
          <input
            value={tipText}
            className="rounded-lg py-1 px-4 border border-[#05998C] mt-4 text-[#38A37F] text-center font-semibold outline-none"
            type="number"
            onChange={(e) => setTipText(e.target.value)}
          />

          <button
            className="bg-white border border-[#05998C]  rounded-xl p-2 mt-2 text-[#38A37F] font-medium sm:mr-6 hover:bg-[#38A37F] hover:text-white"
            onClick={tipTotal}
          >
            Enter
          </button>
        </div>
      </div>
      {billAmount > 0 && (
        <div className="mt-24">
          <button
            className="bg-white border border-[#05998C]  rounded-xl px-12 py-2 mt-2 text-[#38A37F] font-medium sm:mr-6 hover:bg-[#38A37F] hover:text-white text-3xl"
            onClick={splitBillEvenly}
          >
            SPLIT
          </button>
        </div>
      )}
      <div className="flex bg-white p-4 rounded-lg mb-2 mt-12">
        {owedAfterSplittingEvenly &&
          participants.map((person) => {
            return (
              <div className=" grid auto-rows-auto auto-cols-auto">
                <div className="flex-col justify-center items-center rounded-lg mr-2 border">
                  <h2 className="text-[#38A37F] font-bold mr-8" key={person.id}>
                    {person.name}
                  </h2>
                  <h3 className="text-[#38a37f] font-semibol">
                    {currency(owedAfterSplittingEvenly)}
                  </h3>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Dashboard;
