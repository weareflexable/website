import React from "react";

const Restaurants = () => {
  return (
    <>
      <div className="bg-white">
        <div className="items-center text-center pt-10">
          <h1 className="text-black italic text-6xl font-bold">Restaurants</h1>
          <img
            className="w-[1000px] mx-auto my-4 mt-20 pt-10"
            src="/restaurant.jpg"
            alt="/"
          />
        </div>
        <div className="max-w-[1240px] text-[#8109f8] pb-10 text-justify mx-auto pt-8 grid md:grid-cols-2">
          <p className="text-3xl mx-10 italic">
            So you don’t have to book 4 weeks in advance. Secure same-day
            reservations at the hottest restaurants.
          </p>
          <p className="text-3xl mx-10 italic">
            Click below to find participating venues in your area.
            <br />
            <button
            type="submit"
            className="text-white bg-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm w-full sm:w-auto px-5 py-2.5 mt-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  animate-pulse"
          >
            Submit
          </button>
          </p>
        </div>
      </div>
      <hr className="h-1 mx-20 animate-pulse bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  "/>
    </>
  );
};

export default Restaurants;