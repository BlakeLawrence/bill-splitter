import { useContext } from "react";
import { appContext } from "../components/App/App";
import { BsFillPersonFill } from "react-icons/bs";

function Names() {
  const { groupName, setGroupNumber } = useContext(appContext);

  return (
    <div className="w-full h-screen pt-2 bg-[#05998C] flex flex-col items-center ">
      <h1 className="text-6xl mb-12">{groupName}</h1>
      <h2 className="text-white text-3xl font-semibold mb-2">
        Add the names of each participant below
      </h2>
      <BsFillPersonFill className="text-white" />
      <input className="rounded-lg" type="text" />
      <br />
      <button className="text-[#38A37F] font-bold bg-white px-2 py-1 rounded-lg">
        Add person
      </button>
      <h3 className="text-white mt-12 text-sm">
        press continue when all names have been added...
      </h3>
      <button className="text-[#38A37F] font-bold bg-white px-2 py-1 rounded-lg">
        continue
      </button>
    </div>
  );
}

export default Names;
