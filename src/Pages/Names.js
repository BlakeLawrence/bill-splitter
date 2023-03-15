import { useContext, useState } from "react";
import { appContext } from "../components/App/App";
import { BsFillPersonFill } from "react-icons/bs";

function Names() {
  const { groupName, participants, setParticipants } = useContext(appContext);
  const [toggleNames, setToggleNames] = useState(false);

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
    <div className="w-full h-screen pt-2 bg-[#05998C] flex flex-col items-center ">
      <h1 className="text-6xl mb-12">{groupName}</h1>
      <h2 className="text-white text-3xl font-semibold mb-2">
        Add the names of each participant below
      </h2>

      <input
        value={namesText}
        className="rounded-lg"
        type="text"
        onChange={(e) => setNamesText(e.target.value)}
      />

      <br />
      <button
        className="text-[#38A37F] font-bold bg-white px-2 py-1 rounded-lg"
        onClick={addParticipants}
      >
        Add person
      </button>

      <h3 className="text-white mt-12 text-sm">
        press continue when all names have been added...
      </h3>
      <button className="text-[#38A37F] font-bold bg-white px-2 py-1 rounded-lg">
        continue
      </button>
      <div className="flex w-[200px] justify-between">
        <div
          onClick={() => setToggleNames(!toggleNames)}
          className={
            participants.length > 0
              ? "bg-white w-[50px] h-[50px] flex justify-center rounded-3xl mt-12"
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
              ? "flex flex-col bg-white p-4 rounded-lg mb-2 mt-2"
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
    </div>
  );
}

export default Names;
