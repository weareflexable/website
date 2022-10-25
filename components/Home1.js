import React from "react";


const Home1 = () => {
  return (
    <div name ="home">
      <div className="w-full bg-cover  bg-white py-20 pt-15 mt-15 px-4">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <p className="text-[#8109f8] text-2xl font-bold ">
              Explore the world
            </p>
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
              It&apos;s Time to enjoy with Flexable !
            </h1>
            <p>Discover the best places near your locality</p>
            <button className="bg-[#8109f8] text-white w-[200px] rounded-full font-medium my-6 mx-auto md:mx-0 py-3">
              Explore Now
            </button>
          </div>
          <img
            className="w-[1000px] animate-pulse mx-auto my-4 rounded-full mt-20 pt-10"
            src="/nightlife.jpg"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default Home1;
