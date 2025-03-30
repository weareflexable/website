"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { gsap } from "gsap";

const Hero = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    if (overlayRef.current) {
      tl.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.2 }
      );
    }

    if (headingRef.current) {
      tl.fromTo(
        headingRef.current.querySelectorAll("span"),
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.8 },
        "-=0.6"
      );
    }

    if (buttonsRef.current) {
      tl.fromTo(
        buttonsRef.current.querySelectorAll("div"),
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.2, duration: 0.6 },
        "-=0.4"
      );
    }

    if (benefitsRef.current) {
      tl.fromTo(
        benefitsRef.current.querySelectorAll("div"),
        { x: 30, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.2, duration: 0.8 },
        "-=0.4"
      );
    }

    return () => {
      tl.kill();
    };
  }, []);

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
        <div
          ref={overlayRef}
          className="absolute inset-0 bg-gradient-to-b from-background/60 to-background/50"
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-screen flex flex-col justify-center">
        <div className="max-w-3xl ml-6 2xl:ml-32 mb-16 sm:mb-0">
          <h1
            ref={headingRef}
            className="text-3xl md:text-[44px] font-normal text-white mb-6 sm:leading-14"
          >
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
          <div ref={buttonsRef} className="md:w-1/2">
            <div className="mb-8">
              <Link href="https://portal.flexabledats.com/" target="_blank">
                <Button
                  variant="secondary"
                  size="lg"
                  className="text-lg sm:w-48"
                >
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
          <div ref={benefitsRef} className="hidden sm:block text-left">
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
