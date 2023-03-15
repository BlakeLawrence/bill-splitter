import "./App.css";
import Home from "../../Pages/Home";
import Landing from "../../Pages/Landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Names from "../../Pages/Names";
import { createContext, useState } from "react";

export const appContext = createContext();

function App() {
  const [groupName, setGroupName] = useState("");
  const [groupNumber, setGroupNumber] = useState(null);
  const [participants, setParticipants] = useState([]);

  return (
    <appContext.Provider
      value={{
        setGroupName,
        groupName,
        groupNumber,
        setGroupNumber,
        participants,
        setParticipants,
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/names" element={<Names />}></Route>
        </Routes>
      </Router>
    </appContext.Provider>
  );
}

export default App;
