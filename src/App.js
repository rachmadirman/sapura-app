import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import BatchProcess from "./Component/BatchProcess";
import BatchDetail from "./Component/BatchDetail";
import UploadFile from "./Component/UploadFile";
import Sidebar from "./Component/Sidebar";
import HomePage from "./Component/Homepage";
import LHDNConfiguration from "./Component/LHDNConfiguration";
import Login from "./Component/Login";
import ComingSoon from "./Component/ComingSoon";
import Navbar  from "./Component/Navbar";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      {/* <Sidebar /> */}
      <Routes>
        <Route path="/" element={<Login />} />
        {/* route */}
        <Route path="/Login" element={<Login />} />
        <Route path="/Home" element={<HomePage />} />
        <Route path="/Preview" element={<BatchProcess />} />
        <Route path="/Detail" element={<BatchDetail />} />
        <Route path="/Upload" element={<UploadFile />} />
        <Route path="/Config" element={<LHDNConfiguration />} />
        <Route path="/Comingsoon" element={<ComingSoon />} />
        <Route path="/Navbar" element={<Navbar />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
