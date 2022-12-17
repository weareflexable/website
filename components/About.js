import React from "react";
import Container from "./Container";
import { Reveal } from "react-awesome-reveal";
import { fadeInDownShorter, fadeInLeft, fadeInUp } from "../keyframes";

const About = () => {
  return (
    <Container id="about" className={"mb-48 mt-28 lg:mt-24 scroll-mt-20"}>
      <div className="flex flex-col items-center ">
        <div className="text-center mb-12 font-figtree">
          <h2 className="font-bold text-4xl lg:text-6xl mb-2">About</h2>
        </div>
        <Reveal keyframes={fadeInDownShorter} duration={800} delay={200}>
          <div className="w-[50%] lg:ml-80">
            <h1 className="text-2xl lg:text-4xl font-figtree font-bold opacity-50">
              Flexable partners with popular venues to get you in: with line
              skips at your favorite bar, with same-day bookings at your
              favorite restaurants, and even party passes at Greek houses. Our
              flexible platform is designed to handle any use case it is given -
              its in the name.
            </h1>
          </div>
        </Reveal>
      </div>
    </Container>
  );
};

export default About;
