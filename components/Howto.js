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
    <Container id="howto" className={"mb-28 mt-28 lg:mt-24 scroll-mt-10"}>
      <div className="text-center mb-12 font-figtree">
        <h2 className="font-bold text-4xl lg:text-6xl mb-2">How it Works</h2>
      </div>
      <Reveal keyframes={fadeInDownShorter} duration={2000} delay={200}>
        <div className="flex flex-col ml-4 lg:ml-48">
          <Reveal keyframes={fadeInLeft} duration={800} delay={200}>
            <div className="flex">
              <h3 className="font-bold text-5xl lg:text-6xl mb-16 text-accent-200 ">
                Step 1:
              </h3>
              <h3 className="font-bold text-3xl lg:text-4xl opacity-50 mt-2 lg:mt-4 ml-8">
                Pick your venue
              </h3>
            </div>
          </Reveal>

          <Reveal keyframes={fadeInRight} duration={800} delay={200}>
            <div className="flex">
              <h3 className="font-bold text-5xl lg:text-6xl mb-2 text-accent-200 ">
                Step 2:
              </h3>
              <h3 className="font-bold text-3xl lg:text-4xl mb-16 opacity-50 ml-8 w-[50%]">
                Purchase your Digital Access Token (DAT)-<br></br>Your newly
                minted DAT will appear in your account.
              </h3>
            </div>
          </Reveal>

          <Reveal keyframes={fadeInLeft} duration={800} delay={200}>
            <div className="flex">
              <h3 className="font-bold text-5xl lg:text-6xl mb-2 text-accent-200 ">
                Step 3:
              </h3>
              <h3 className="font-bold text-3xl lg:text-4xl mb-16 opacity-50 mt-2 lg:mt-4 ml-8 w-[50%]">
                Show DAT to venue to redeem exclusive access
              </h3>
            </div>
          </Reveal>

          <Reveal keyframes={fadeInRight} duration={800} delay={200}>
            <div className="flex">
              <h3 className="font-bold text-5xl lg:text-6xl mb-2 text-accent-200 ">
                Step 4:
              </h3>
              <h3 className="font-bold text-3xl lg:text-4xl mb-16 opacity-50 ml-8 w-[50%]">
                Redeem your DAT through a QR code
              </h3>
            </div>
          </Reveal>
        </div>
      </Reveal>
    </Container>
  );
};

export default Howto;
