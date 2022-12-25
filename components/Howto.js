import React from "react";
import Container from "./Container";
import { Reveal } from "react-awesome-reveal";
import {
  fadeInDownShorter,
  fadeInLeft,
  fadeInRight,
  fadeInUp,
} from "../keyframes";

const Howto = () => {
  return (
    <Container id="howto" className={"mb-28 mt-20 lg:mt-24 scroll-mt-10"}>
      <div className="text-center mb-12 font-figtree">
        <h2 className="font-bold text-4xl lg:text-6xl mb-2">How it Works</h2>
      </div>
      <Reveal keyframes={fadeInDownShorter} duration={2000} delay={200}>
        <div className="flex flex-col ml-4 lg:ml-40 items-start lg:items-start">
          <Reveal keyframes={fadeInRight} duration={800} delay={200}>
            <div className="flex flex-col lg:flex-row md:flex-row mb-12 lg:mb-0">
              <h3 className="font-bold text-5xl lg:text-6xl lg:mb-16 text-accent-200 ">
                Step 1:
              </h3>
              <h3 className="font-bold text-3xl lg:text-4xl opacity-50 mt-2 lg:mt-4 lg:ml-8 md:ml-4">
                Pick your venue
              </h3>
              <h3 className="lg:text-6xl text-5xl lg:ml-8 ml-64 -mt-20 mb-8 lg:mt-0 lg:mb-0 md:mt-0 md:ml-16">
                ✅
              </h3>
            </div>
          </Reveal>

          <Reveal keyframes={fadeInLeft} duration={800} delay={200}>
            <div className="flex flex-col lg:flex-row md:flex-row ml-40 lg:ml-0">
              <h3 className="lg:text-7xl text-6xl lg:-ml-6 -ml-32 -mt-72 lg:mt-0 lg:mb-0 md:mt-0 lg:hidden md:mr-16 hidden md:block">
                💰
              </h3>
              <h3 className="font-bold text-5xl lg:text-6xl mb-2 text-accent-200 ">
                Step 2:
              </h3>
              <h3 className="font-bold text-3xl lg:text-4xl mb-16 opacity-50 lg:ml-8 md:ml-4 lg:w-[40%] md:w-full">
                Purchase your Digital Access Token (DAT)-<br></br>Your newly
                minted DAT will appear in your account.
              </h3>
              <h3 className="lg:text-7xl text-6xl lg:ml-0 -ml-32 -mt-72 mb-60 lg:mt-0 lg:mb-0 md:mt-0 md:mb-0 md:hidden lg:block">
                💰
              </h3>
            </div>
          </Reveal>

          <Reveal keyframes={fadeInRight} duration={800} delay={200}>
            <div className="flex flex-col lg:flex-row md:flex-row">
              <h3 className="font-bold text-5xl lg:text-6xl mb-2 text-accent-200 ">
                Step 3:
              </h3>
              <h3 className="font-bold text-3xl lg:text-4xl mb-16 opacity-50 mt-2 lg:mt-4 lg:ml-8 md:ml-4 w-[50%] lg:w-[28%]">
                Show DAT to venue to redeem exclusive access
              </h3>
              <h3 className="lg:text-7xl text-6xl ml-60 -mt-56 mb-40 lg:ml-0 lg:mt-0 lg:mb-0 md:mt-0 md:ml-16 md:mb-0">
                🤳🏻
              </h3>
            </div>
          </Reveal>

          <Reveal keyframes={fadeInLeft} duration={800} delay={200}>
            <div className="flex flex-col lg:flex-row md:flex-row ml-40 lg:ml-0">
              <h3 className="text-5xl -ml-32 lg:ml-0 lg:mt-0 md:mt-0 md:block lg:hidden hidden mr-16">
                🔑
              </h3>
              <h3 className="font-bold text-5xl lg:text-6xl mb-2 text-accent-200 ">
                Step 4:
              </h3>
              <h3 className="font-bold text-3xl lg:text-4xl mb-16 opacity-50 lg:ml-8 md:ml-4 lg:w-[50%]">
                Redeem your DAT through a QR code
              </h3>
              <h3 className="lg:text-7xl text-5xl -ml-32 -mt-48 mb-8 lg:ml-0 lg:mt-0 md:mt-0 md:hidden lg:block md:mb-0">
                🔑
              </h3>
            </div>
          </Reveal>
        </div>
      </Reveal>
    </Container>
  );
};

export default Howto;
