import React from "react";
import Container from "./Container";
import { JackInTheBox, Reveal } from "react-awesome-reveal";
import { fadeInDownShorter, fadeInLeft, fadeInUp } from "../keyframes";
import Button from "./Button";

const Nightlife = () => {
  return (
    <div className="bg-nightlife bg-[right_-15rem_bottom_-15rem] md:bg-[right_bottom_-15rem] lg:bg-left-top lg:pb-80 lg:pt-24 pt-12 pb-2">
      <Container id="nightlife" className={"lg:mb-44 mb-20 scroll-mt-36"}>
        <div className="text-center mb-12 font-figtree">
          <h2 className="font-bold text-4xl lg:text-6xl mb-2 mt-4">
            Nightlife
          </h2>
        </div>
        <div className="flex flex-col items-center lg:ml-60 w-[60%] ml-20 md:ml-40">
          <Reveal keyframes={fadeInDownShorter} duration={800} delay={200}>
            <h1 className="text-2xl lg:text-4xl font-figtree font-bold mb-5 md:opacity-80 lg:opacity-50 opacity-70 mb-8">
              Who doesn&apos;t want exclusive access? Party like it&apos;s 1999
              with line skips, drink specials, event tickets, and more. Click
              below to find participating venues in your area.
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

export default Nightlife;
