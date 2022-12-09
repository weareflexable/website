import React from "react";
import Container from "./Container";
import Button from "./Button";
import Image from "next/image";

const Hero = () => {
  return (
    <Container className={"flex flex-col sm:flex-row mt-20 mb-32"}>
      <div className="w-full sm:w-[50%] pr-0 sm:pr-10 lg:pr-20 mt-[-20px] sm:mt-5 lg:mt-10">
        <h1 className="text-3xl lg:text-7xl font-bold mb-5">
          Explore the world - it&apos;s time to enjoy with Flexable !
        </h1>
        <p className="mb-8 opacity-50">
          Discover the best places near your locality
        </p>

        <div className="flex mb-0">
          <Button
            isLink
            href={"https://marketplace.flexabledats.com/"}
            className={"mr-3 text-black"}
            variant={"primary"}
          >
            Explore Now
          </Button>
        </div>
      </div>
      <div className="flex-1 mt-4 lg:mt-0">
        <div className="relative w-full h-[400px] lg:h-[500px] rounded">
          <Image
            layout="fill"
            objectFit="contain"
            objectPosition={"center"}
            src="/nightlife.png"
            alt="hero"
          />
        </div>
      </div>
    </Container>
  );
};

export default Hero;
