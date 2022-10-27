import React from "react";


const Nightlife = () => {
  return (
    <>
      <div name="nightlife" className="bg-white  mt-5 pt-5">
        <div className="items-center text-center pt-3">
          <h1 className="text-black italic text-6xl font-bold">Nightlife</h1>
          <img
            className="w-[1000px] mx-auto my-4 mt-8 pt-8"
            src="/nightlife2.jpg"
            alt="/"
          />
        </div>
        {/* <div className="max-w-[1240px] text-[#8109f8] pb-10 text-justify mx-auto pt-8 grid md:grid-cols-2">
          <p className="text-3xl mx-10 italic">
            Who doesn&apos;t want exclusive access? Party like it&apos;s 1999 with line
            skips, drink specials, event tickets, and more.
          </p>
          <p className="text-3xl mx-10 italic">
            Click below to find participating venues in your area.
            <br />
            <button
            type="Search"
            className="text-white bg-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm w-full sm:w-auto px-5 py-2.5 mt-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  animate-pulse"
          >
            Search
          </button>
          </p>
        </div> */}
        <div className="max-w-[1240px] text-[#8109f8] pb-10 text-justify  mx-auto pt-8 ">
          
          <p className="text-3xl mx-10 italic">
            Who doesn&apos;t want exclusive access? Party like it&apos;s 1999
            with line skips, drink specials, event tickets, and more. Click
            below to find participating venues in your area.
            <br />
           
          </p>
          <div className="flex justify-center mt-5"> <button className=' text-2xl border rounded-full  bg-purple-600 hover:bg-purple-800 shadow-lg p-2 text-white w-40  mt-2'>Search</button></div>
         
        </div>
      </div>
      <hr className="h-1 mx-20 animate-pulse bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  " />
    </>
  );
};

export default Nightlife;
