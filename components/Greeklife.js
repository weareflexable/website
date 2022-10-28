import React from "react";


const Greeklife = () => {
  return (
    <>
      <div name="greeklife" className="bg-white  mt-5 pt-5">
        <div className="items-center text-center pt-3">
          <h1 className="text-black italic text-6xl font-bold">Greek life</h1>
          <img
            className="w-[1000px] mx-auto my-4 mt-8 pt-8"
            src="/greeklife.jpg"
            alt="/"
          />
        </div>
        <div className="max-w-[1240px] text-[#8109f8] pb-10 text-justify mx-auto pt-8 ">
        
          <p className="text-3xl mx-10 italic">
            Because Chess Club parties just aren&apos;t as fun. Get
            semester-long party passes at your local frats. Click below to find
            participating venues in your area.
            <br />
            
          </p>
          <div className="flex justify-center mt-5"> <a href="https://marketplace.flexabledats.com/"><button className=' text-2xl border rounded-full  bg-purple-600 hover:bg-purple-800 shadow-lg p-2 text-white w-40  mt-2'>Search</button></a></div>
        </div>
      </div>
      <hr className="h-1 mx-20 animate-pulse bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  " />
    </>
  );
};

export default Greeklife;
