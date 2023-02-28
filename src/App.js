import './App.css';
import Home from "./Components/Home";
import Create from "./Components/Create";
import Edit from "./Components/Edit";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>
      </Router> 
    </div>
  );
}

export default App;