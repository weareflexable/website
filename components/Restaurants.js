import React from "react";


const Restaurants = () => {
  return (
    <>
      <div name="restaurants" className="bg-white mt-5 pt-5">
        <div className="items-center text-center pt-3">
          <h1 className="text-black italic text-6xl font-bold">Restaurants</h1>
          <img
            className="w-[1000px] mx-auto my-4  mt-8 pt-8"
            src="/restaurant.jpg"
            alt="/"
          />
        </div>
        <div className="max-w-[1240px] text-[#8109f8] pb-10 text-justify mx-auto pt-8 ">
          
          <p className="text-3xl mx-10 italic">
            So you don’t have to book 4 weeks in advance. Secure same-day
            reservations at the hottest restaurants. Click below to find
            participating venues in your area.
            <br />
            
          </p>
          <div className="flex justify-center mt-5"> <button className=' text-2xl border rounded-full  bg-purple-600 hover:bg-purple-800 shadow-lg p-2 text-white w-40  mt-2'>Search</button></div>
        </div>
      </div>
      <hr className="h-1 mx-20 animate-pulse bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  " />
    </>
  );
};

export default Restaurants;
