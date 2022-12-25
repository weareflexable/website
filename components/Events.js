import React from "react";
import Button from "./Button";
import Container from "./Container";
import { Reveal } from "react-awesome-reveal";
import { fadeInDownShorter, fadeInLeft, fadeInUp } from "../keyframes";

const Events = () => {
  return (
    <div className="bg-eve bg-[right_-25rem_bottom_-14rem] lg:bg-[right_-15rem_center] lg:pb-80 lg:pt-24 pt-12 pb-2">
      <Container id="events" className={"mb-24 scroll-mt-28"}>
        <div className="text-center mb-12 font-figtree">
          <h2 className="font-bold text-4xl lg:text-6xl mb-2 mt-4">Events</h2>
        </div>
        <div className="flex flex-col items-center lg:ml-60 w-[60%] ml-20 md:ml-40">
          <Reveal keyframes={fadeInDownShorter} duration={800} delay={200}>
            <h1 className="text-2xl lg:text-4xl font-figtree font-bold opacity-80 mb-8">
              Avoid being taken by scalpers and (shudder) fake tickets when
              events are ticketed with Flexable. Our blockchain booking system
              makes sure that both the event holder and the attendee have more
              control and trust in their tickets. Rock on, friends
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

export default Events;
