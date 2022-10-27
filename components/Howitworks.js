import React from "react";

const Howitworks = () => {
  return (
    <>
      <div name="about" className="w-full mt-5 pt-5">
        <div className="max-w-[1240px] mx-auto pt-3">
          <div className="text-center">
            <h2 className="text-black italic text-6xl font-bold">
              How it Works
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-4 pl-2 mt-8 pt-8 pb-20 text-center">
            <div className="border py-8 rounded-xl  hover:scale-105 duration-300">
              <p className="text-black text-2xl  mt-2">Step 1</p>
              <p className="text-3xl mt-3 italic  text-[#8109f8]">Pick your venue</p>
            </div>
            <div className="border py-8 rounded-xl hover:scale-105 duration-300">
              <p className="text-black  text-2xl  mt-2">Step 2</p>
              <p className="text-3xl mt-3 italic  text-[#8109f8]">Purchase your Digital Access Token (DAT)-<br></br>Pay with credit card, Apple Pay & Google Pay
</p>
            </div>
            <div className="border py-8 rounded-xl  hover:scale-105 duration-300">
              <p className="text-black  text-2xl  mt-2">Step 3</p>
              <p className="text-3xl mt-3 italic  text-[#8109f8]">Locate your DAT in your wallet</p>
            </div>
            <div className="border py-8 rounded-xl  hover:scale-105 duration-300">
              <p className="text-black  text-2xl  mt-2">Step 4</p>
              <p className="text-3xl mt-3 italic  text-[#8109f8]">Redeem your DAT through a QR code</p>
            </div>
          </div>
        </div>
      </div>
      <hr className="h-1 mx-20 animate-pulse bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  " />
    </>
  );
};

export default Howitworks;
