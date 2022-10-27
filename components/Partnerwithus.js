import React from "react";

const Partnerwithus = () => {
  return (
    <>
      <div className="mt-7 pt-7">
        <div
          name="partnerwithus"
          className="text-center text-6xl font-bold italic  pt-5"
        >
          <h1>Partner with us !</h1>
        </div>
        <div className="max-w-[1240px] mx-auto  grid md:grid-cols-2">
          <div className="flex flex-col text-[#8109f8] font-bold pt-14  mx-5 ">
            <h1 className="text-xl text-center">
              GET MORE OUT OF YOUR SPACE !
            </h1>
            <br />
            <br />
            <p className="text-xl text-justify italic text-[#8109f8]">
              The problem- <br />
              Venue owners are limited to the amount of space they own and
              operate. Until now, revenue was limited solely to the services
              they provide their patrons.
            </p>
            <br />
            <p className="text-xl text-justify italic text-[#8109f8]">
              The solution- <br></br> Through the sale of custom-designed NFTs,
              Flexable has pioneered a system for venue owners to provide
              customers with exclusive access to their services- capitalizing on
              the venue&apos;s existing popularity and increasing revenue all
              without changing the business model.
            </p>
          </div>
          <img
            className="w-[1000px] mx-5  rounded-full animate-pulse pt-10"
            src="/partner.gif"
            alt="/"
          />
        </div>
        <div className="mt-5 pt-5 text-[#8109f8] font-bold text-xl text-center">
          <h1>
            Are customers clamoring to get into your establishment? We can help
            you get them in.
          </h1>
          <br />
          <p className="text-[#8109f8] italic">
            “Flexable has created passive income for my venue where I
            didn&apos;t know it existed before” <br></br> - You, the venue
            owner, shortly after partnering with us
          </p>
          <br />
          <p className="text-[#8109f8] italic">
            “I literally only go to bars that are partnered with Flexable now. I
            love the utility!” <br /> - Someone who previously waited in lines
          </p>
        </div>
        <hr className="h-1 mx-20 mt-10 pt-10animate-pulse bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  " />
      </div>
      <div className="mt-5 pt-5 text-[#8109f8] font-bold text-3xl  underline text-center pb-10">
        <h1>Interested in becoming a partner? Drop us a line!</h1>
      </div>
      
       
      
      
    </>
  );
};

export default Partnerwithus;
