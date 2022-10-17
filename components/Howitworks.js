import React from "react";

const Howitworks = () => {
  return (
    <div className="bg-[#b66ffc] py-10 text-center ">
      <h1 className="pb-5 text-black bold text-4xl">How it works ?</h1>
      <div className="mx-24 py-8  text-2xl  bg-white rounded-full text-justify px-10">
        <ul className="list-disc italic mx-5">
          <li>Pick your venue</li>
          <li>
            Purchase your Digital Access Token (DAT) - Pay with credit card,
            Apple Pay & Google Pay
          </li>
          <li>Locate your DAT in your wallet</li>
          <li>Redeem your DAT through a QR code</li>
        </ul>
      </div>
    </div>
  );
};

export default Howitworks;
