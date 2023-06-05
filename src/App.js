import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Admin from "./dashboards/Admin";
import Header from "./admin/components/Header/Header";
import CallCoordinator from "./dashboards/CallCoordinator";
import Login from "./CallCoordinator/screens/Login/Login";
import AdminLogin from "./admin/screen/Login/Login";
import Otp from "./CallCoordinator/screens/Login/Otp";
import AdminOtp from "./admin/screen/Login/Otp";
import Index from "./components/home and user/ProgressBar/Index";
import Home from "./admin/components/Home/Home";

function App() {
  const [role, setRole] = useState(null);
  const [callCoordinator, setCallCoordinator] = useState("");
  let userRole = localStorage.getItem("role");
  let loginDetails = localStorage.getItem("loginDetails");
  console.log("User Role", userRole);
  useEffect(() => {
    // setRole(1);
    setRole(userRole);
  }, [userRole]);
  const pull_data = (data) => {
    console.log("Pulled Data=>", data);
    setCallCoordinator(data);
  };
  return (
    <Router>
      <Header role={role} setRole={setRole} callCoordinator={callCoordinator} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/call-coordinator/login" element={<Login />} />
        <Route path="/call-coordinator/otp" element={<Otp setRole={() => setRole(2)} />} />
        <Route path="/admin/login" element={<AdminLogin setRole={() => setRole(1)} />} />
        <Route path="/admin/otp" element={<AdminOtp setRole={() => setRole(1)} />} />
      </Routes>
      {loginDetails && (
        <>
          {role == 1 && <Admin />}
          {role == 2 && <CallCoordinator func={pull_data} />}
        </>
      )}
    </Router>
  );
}

export default App;
