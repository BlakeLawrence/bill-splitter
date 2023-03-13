import "./App.css";
import Home from "../../Pages/Home";
import Landing from "../../Pages/Landing";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Split from "../../Pages/Split";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/split" element={<Split />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
