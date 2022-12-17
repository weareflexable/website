import React from "react";
import Container from "./Container";
import Button from "./Button";
import Image from "next/image";
import { Reveal } from "react-awesome-reveal";
import { fadeInDownShorter, fadeInLeft, fadeInUp } from "../keyframes";

const Hero = () => {
  return (
    <div className="bg-landing  pt-12 pb-2 -mt-48 z-0">
      <Container
        id="/"
        className={"flex flex-col sm:flex-row mb-32 lg:mb-44 pb-56 lg:pb-20"}
      >
        <div className="lg:w-[60%] w-[50%] pr-0 sm:pr-10 lg:pr-20 mt-20 mt-60 w-[60%] ml-24 lg:mt-48">
          <Reveal keyframes={fadeInLeft} duration={800} delay={200}>
            <h1 className="text-5xl lg:text-7xl font-figtree font-bold mb-5">
              Get exclusive access to popular venues with Flexable.
            </h1>
          </Reveal>
          <Reveal keyframes={fadeInDownShorter} duration={1000} delay={800}>
            <p className="mb-8 opacity-50 font-figtree">
              Discover line skips, last minute reservations, party passes and
              more near you!
            </p>
          </Reveal>

          <div className="flex mb-0">
            <Reveal keyframes={fadeInUp} duration={1000} delay={200}>
              <Button
                isLink
                href={"https://marketplace.flexabledats.com/"}
                className={"mr-3 text-black"}
                variant={"primary"}
              >
                Explore Now
              </Button>
            </Reveal>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
