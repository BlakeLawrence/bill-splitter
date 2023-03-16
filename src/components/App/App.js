import "./App.css";
import BillName from "../../Pages/BillName";
import Landing from "../../Pages/Landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Names from "../../Pages/Names";
import { createContext, useState } from "react";
import Dashboard from "../../Pages/Dashboard";

export const appContext = createContext();

function App() {
  const [groupName, setGroupName] = useState("");
  const [groupNumber, setGroupNumber] = useState(null);
  const [participants, setParticipants] = useState([]);
  const [billAmount, setBillAmount] = useState(null);
  const [tipAmount, setTipAmount] = useState(null);

  return (
    <appContext.Provider
      value={{
        setGroupName,
        groupName,
        groupNumber,
        setGroupNumber,
        participants,
        setParticipants,
        billAmount,
        setBillAmount,
        tipAmount,
        setTipAmount,
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/bill-name" element={<BillName />}></Route>
          <Route path="/names" element={<Names />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </Router>
    </appContext.Provider>
  );
}

export default App;
