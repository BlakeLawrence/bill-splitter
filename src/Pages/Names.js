import { useContext, useState } from "react";
import { appContext } from "../components/App/App";
import { BsFillPersonFill } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";

function Names() {
  const { groupName, participants, setParticipants } = useContext(appContext);
  const [toggleNames, setToggleNames] = useState(false);
  const [payBill, setPayBill] = useState(false);

  const [namesText, setNamesText] = useState("");

  const addParticipants = () => {
    setParticipants([
      ...participants,
      { id: Math.random() * 1000, name: namesText },
    ]);
    setNamesText("");
  };

  const deletePerson = (id) => {
    setParticipants(participants.filter((person) => person.id !== id));
  };

  return (
    <div className="w-full h-screen pt-2  flex flex-col items-center ">
      <h1 className="text-6xl mb-12 text-[#38A37F] underline">{groupName}</h1>
      <h2 className="text-[#38A37F] text-3xl font-semibold mb-2">
        Add the names of each participant below
      </h2>

      <input
        value={namesText}
        className="rounded-lg border border-[#38A37F]"
        type="text"
        onChange={(e) => setNamesText(e.target.value)}
      />

      <br />
      <button
        className="text-[#38A37F] font-bold bg-white border border-[#38A37F] px-2 py-1 rounded-lg"
        onClick={addParticipants}
      >
        Add person
      </button>

      <h3 className="text-white mt-12 text-sm">
        press continue when all names have been added...
      </h3>
      <button
        onClick={() => setPayBill(!payBill)}
        className="text-[#38A37F] font-bold bg-white border border-[#38A37F] px-2 py-1 rounded-lg"
      >
        continue
      </button>
      <div className="flex w-[200px] justify-between">
        <div
          onClick={() => setToggleNames(!toggleNames)}
          className={
            participants.length > 0
              ? "bg-white w-[50px] h-[50px] flex justify-center rounded-3xl mt-12 border border-[#38A37F]"
              : ""
          }
        >
          {participants.length > 0 && (
            <span className="hover:cursor-pointer text-[#38A37F]">
              <BsFillPersonFill />
              {participants.length}
            </span>
          )}
        </div>
        <div
          className={
            toggleNames && participants.length > 0
              ? "flex flex-col bg-white p-4 rounded-lg mb-2 mt-2  border border-[#38A37F]"
              : ""
          }
        >
          {toggleNames &&
            participants.map((person) => {
              return (
                <div className="flex justify-between">
                  <h2 className="text-[#38A37F] font-bold mr-2" key={person.id}>
                    {person.name}
                  </h2>
                  <button
                    className="text-[9px]"
                    onClick={() => deletePerson(person.id)}
                  >
                    ❌
                  </button>
                </div>
              );
            })}
        </div>
      </div>
      {payBill && (
        <div className=" bg-white w-1/2 h-1/3 rounded-xl shadow-xl z-1  border border-[#38A37F]">
          <div
            onClick={() => setPayBill(!payBill)}
            className="flex justify-end p-2 text-red-500 cursor-pointer"
          >
            <AiFillCloseCircle />
          </div>
          <div className=" flex flex-col items-center ">
            <h3 className="text-[#38A37F] text-3xl mt-4 ">
              How would you like to pay the Bill?
            </h3>

            <span className="mt-24">
              <button className="bg-[#38A37F] text-white font-medium px-2 py-1 rounded-lg mr-4">
                Split Evenly
              </button>
              <button className="bg-[#38A37F] text-white font-medium px-2 py-1 rounded-lg">
                Pay Individually
              </button>
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Names;
