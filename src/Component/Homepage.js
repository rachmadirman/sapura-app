import React from 'react';
import "../App.css";
import Sidebar from './Sidebar';
import FooterSmall from "./FooterSmall";

const HomePage = () => {
  return (
    <>
    <section className="absolute w-full h-full bg-izeno-gradien-1">
    <Sidebar />
    <div className='ml-96'>
      <h1 className="text-izeno-black font-bold text-8xl mt-80 ml-96">Getting Started.</h1>
    </div>
    <FooterSmall absolute />
    </section>
    </>
  );
}

export default HomePage;
