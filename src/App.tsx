import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DetailedResume } from "./resumes/DetailedResume";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<DetailedResume />} />
          <Route path="/resume" element={<DetailedResume />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
