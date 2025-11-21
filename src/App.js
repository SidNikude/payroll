import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import EmpInfoEditPage1 from "./pages/EmployeeInformationEdit/EmpInfoEditPage1";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/empinfoeditpage1" element={<EmpInfoEditPage1 />} />
      </Routes>
    </>
  );
}

export default App;
