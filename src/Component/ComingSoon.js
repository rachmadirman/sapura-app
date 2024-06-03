import React from 'react';
import "../App.css";
import Sidebar from './Sidebar';
import FooterSmall from "./FooterSmall";

const ComingSoon = () => {
  return (
    <>
    <Sidebar />
    <div className="mt-80 ml-60">
      <h1 className="text-center text-blue-500 font-bold text-8xl">ComingSoon.</h1>
    </div>
    <FooterSmall absolute />
    </>
  );
}

export default ComingSoon;