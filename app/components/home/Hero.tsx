import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative min-h-screen w-full">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/home/herobg.svg"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        {/* Purple Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-screen flex flex-col justify-center">
        <div className="max-w-3xl ml-6 2xl:ml-32 mb-16 sm:mb-0">
          <h1 className="text-3xl md:text-[44px] font-normal text-white mb-6 sm:leading-14">
            <span className="inline-block">Unlock</span>{" "}
            <span className="text-accent inline-block">
              Exclusive Experiences
            </span>{" "}
            <span className="text-white inline-block">and</span>{" "}
            <span className="text-accent inline-block">Maximize Revenue</span>{" "}
            <span className="text-white inline-block">with Flexable</span>
            <span className="text-white inline-block">
              —The Future of Venue Access
            </span>
          </h1>{" "}
        </div>
        <div className="flex mx-auto w-full max-w-[1000px] justify-center items-center md:mt-20 2xl:ml-32 text-center">
          <div className="md:w-1/2">
            <div className="mb-8">
              <Link href="https://portal.flexabledats.com/" target="_blank">
                <Button variant="secondary" size="lg" className="text-lg sm:w-48">
                  I&apos;m a Business
                </Button>
              </Link>
            </div>

            <div className="">
              <Link
                href="https://marketplace.flexabledats.com/"
                target="_blank"
              >
                <Button variant="secondary" size="lg" className="text-lg w-48">
                  I&apos;m a Consumer
                </Button>
              </Link>
            </div>
          </div>
          <div className="hidden sm:block text-left">
            <div className="text-white inline-block text-2xl">
              Businesses earn more with ZERO upfront costs.
            </div>
            <div className="text-white inline-block text-2xl">
              Consumers skip the wait and enjoy premium experiences.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
