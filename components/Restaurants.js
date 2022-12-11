import React from "react";
import Button from "./Button";
import Container from "./Container";
import { Reveal } from "react-awesome-reveal";
import { fadeInDownShorter, fadeInLeft, fadeInUp } from "../keyframes";

const Restaurants = () => {
  return (
    <div className="bg-restaurant pb-80 pt-32">
      <Container
        id="restaurants"
        className={"mb-22 mt-20 lg:mt-24 scroll-mt-52"}
      >
        <div className="text-center mb-12">
          <h2 className="font-bold text-4xl lg:text-6xl mb-2 mt-4">
            Restaurants
          </h2>
        </div>
        <div className="flex flex-col items-center lg:ml-60 w-[60%]">
          <Reveal keyframes={fadeInDownShorter} duration={800} delay={200}>
            <h1 className="text-2xl lg:text-4xl font-figtree font-bold mb-5 opacity-70 mb-8">
              So you don&apos;t have to book 4 weeks in advance. Secure same-day
              reservations at the hottest restaurants. Click below to find
              participating venues in your area.
            </h1>
            <div className="flex mb-0">
              <Reveal keyframes={fadeInUp} duration={1000} delay={200}>
                <Button
                  isLink
                  href={"https://marketplace.flexabledats.com/"}
                  className={"mr-3 text-black"}
                  variant={"primary"}
                >
                  Search
                </Button>
              </Reveal>
            </div>
          </Reveal>
        </div>
      </Container>
    </div>
  );
};

export default Restaurants;
