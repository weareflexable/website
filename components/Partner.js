import React from "react";
import Container from "./Container";
import { Reveal } from "react-awesome-reveal";
import { fadeInDownShorter, fadeInLeft, fadeInUp } from "../keyframes";

const Partner = () => {
  return (
    <div className="bg-partner_mobile lg:bg-partner bg-center-top lg:bg-left pt-24 lg:pt-28">
      <Container id="partner" className={"mb-48 scroll-mt-10"}>
        <div className="flex flex-col items-center ">
          <div className="text-center mb-12">
            <h2 className="font-bold text-4xl lg:text-6xl mb-2">
              Partner With Us
            </h2>
          </div>
          <Reveal keyframes={fadeInDownShorter} duration={500} delay={200}>
            <div className="lg:w-[50%] lg:ml-80 mb-8">
              <h2 className="font-bold text-3xl lg:text-5xl mb-4">
                The Problem
              </h2>
              <h1 className="text-xl lg:text-3xl font-figtree font-bold opacity-80 lg:opacity-70">
                Venue owners are limited to the amount of space they own and
                operate. Until now, revenue was limited solely to the services
                they provide their patrons.
              </h1>
            </div>
            <div className="lg:w-[50%] lg:ml-80 mb-8">
              <h2 className="font-bold text-3xl lg:text-5xl mb-4">
                The Solution
              </h2>
              <h1 className="text-xl lg:text-3xl font-figtree font-bold opacity-80 lg:opacity-70">
                Through the sale of custom-designed NFTs, Flexable has pioneered
                a system for venue owners to provide customers with exclusive
                access to their services- capitalizing on the venue's existing
                popularity and increasing revenue all without changing the
                business model.
              </h1>
            </div>
            <div className="lg:w-[50%] w-[75%] lg:ml-80">
              <h1 className="text-xl lg:text-3xl font-figtree font-bold opacity-100 lg:opacity-70 lg:mb-8 mb-4">
                Are customers clamoring to get into your establishment? We can
                help you get them in.
              </h1>
              <h1 className="text-xl lg:text-3xl font-figtree font-bold opacity-80 lg:opacity-70 mb-4">
                “Flexable has created passive income for my venue where I didn't
                know it existed before” - You, the venue owner, shortly after
                partnering with us
              </h1>
              <h1 className="text-xl lg:text-3xl font-figtree font-bold opacity-80 lg:opacity-70 mb-8">
                “I literally only go to bars that are partnered with Flexable
                now. I love the utility!” - Someone who previously waited in
                lines
              </h1>
            </div>
          </Reveal>
        </div>
      </Container>
    </div>
  );
};

export default Partner;
