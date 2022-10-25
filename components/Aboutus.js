import React from "react";

const Aboutus = () => {
  return (
    <>
      <div name="about us" className=" mt-10 pt-10">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-6 lg:px-6">
          <div class="max-w-screen-1200pxl text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 class="mb-4 text-6xl tracking-tight font-bold text-center text-gray-900 dark:text-white">
              About us
            </h2>
            <p class="mb-4 text-3xl italic ml-5 mt-5 pt-5 text-[#8109f8]">
              Flexable partners with popular venues to get you in: with line
              skips at your favorite bar, with same-day bookings at your
              favorite restaurants, and even party passes at Greek houses.
            </p>
           
           
          </div>
        </div>

        <hr className="h-1 mx-20 animate-pulse bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  " />
      </div>
    </>
  );
};

export default Aboutus;

