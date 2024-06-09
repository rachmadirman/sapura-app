import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import BatchProcess from "./Component/BatchProcess";
import BatchData from "./Component/BatchData.jsx";
import BatchDetail from "./Component/BatchDetail";
import UploadFile from "./Component/UploadFile";
import Homepagev2 from "./Component/Homepagev2"
import HomepageExist from "./Component/Homepagev3"
import LHDNConfig from "./Component/LHDNConfig"
import Login from "./Component/Login";
import ComingSoon from "./Component/ComingSoon";
import Navbar  from "./Component/Navbar";
import Profile from "./Component/Profile.jsx"
import Test from "./Component/Test.jsx"
import Help from "./Component/Help.jsx"
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      {/* <Sidebar /> */}
      <Routes>
        <Route path="/" element={<Login />} />
        {/* route */}
        <Route path="/Login" element={<Login />} />
        <Route path="/Home" element={<Homepagev2 />} />
        <Route path="/Userhome" element={<HomepageExist />} />
        <Route path="/Preview" element={<BatchProcess />} />
        <Route path="/BatchData" element={<BatchData />} />
        <Route path="/Detail" element={<BatchDetail />} />
        <Route path="/Upload" element={<UploadFile />} />
        <Route path="/Config" element={<LHDNConfig />} />
        <Route path="/Comingsoon" element={<ComingSoon />} />
        <Route path="/Navbar" element={<Navbar />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Help" element={<Help />} />
        <Route path="/Test" element={<Test />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
