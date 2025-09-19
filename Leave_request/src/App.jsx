import { useMemo } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Avatars from "./components/Avatars.jsx";
import { Routes, Route, useParams, useNavigate } from "react-router-dom";
import ApplyCancelLeaveForm from "./components/ApplyCancelLeaveForm.jsx";

const Page = ({ initialLeaveType }) => {
  return (
    <>
      <Navbar />
      <Avatars initialLeaveType={initialLeaveType} />
    </>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Page initialLeaveType="out-of-office" />} />
      <Route path="/leave/long-service" element={<Page initialLeaveType="long-service-leave" />} />
      <Route path="/leave/compassionate" element={<Page initialLeaveType="compassionate-bereavement" />} />
      <Route path="/leave/restricted-flexi" element={<Page initialLeaveType="restricted-flexi-holiday" />} />
      <Route path="/leave/comp-off" element={<Page initialLeaveType="comp-off" />} />
    </Routes>
  );
}

export default App;
