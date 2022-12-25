import React from "react";
import Button from "./Button";
import Container from "./Container";
import { Reveal } from "react-awesome-reveal";
import { fadeInDownShorter, fadeInLeft, fadeInUp } from "../keyframes";

const Restaurants = () => {
  return (
    <div className="relative">
      <div className="bg-gradient-to-r from-[#A774B6] w-full h-[100%] object-fit absolute opacity-40"></div>
      <div className="bg-restaurant lg:bg-[right_bottom_-70rem] bg-[right_-15rem_bottom_-60rem] lg:pb-80 lg:pt-24 pt-12 pb-2">
        <Container id="restaurants" className={"lg:mb-48 mb-24 scroll-mt-28"}>
          <div className="text-center mb-12">
            <h2 className="font-bold text-4xl lg:text-6xl mb-2 mt-4">
              Restaurants
            </h2>
          </div>
          <div className="flex flex-col items-center lg:ml-60 w-[60%] ml-20 md:ml-40">
            <Reveal keyframes={fadeInDownShorter} duration={800} delay={200}>
              <h1 className="text-2xl lg:text-4xl font-figtree font-bold opacity-50 mb-8">
                So you don&apos;t have to book 4 weeks in advance. Secure
                same-day reservations at the hottest restaurants. Click below to
                find participating venues in your area.
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
    </div>
  );
};

export default Restaurants;
