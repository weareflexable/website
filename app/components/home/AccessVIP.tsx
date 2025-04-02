"use client";
import React from "react";
// import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { useAccessAnimations } from "@/app/utils/animations/useAnimations";

const accessContent = [
  {
    title: "Exclusive Experiences",
    descriptions: [
      "Skip the line at clubs and bars.",
      "Get last-minute reservations at restaurants.",
      "Secure VIP passes, memberships, and event upgrades",
    ],
  },
  {
    title: "Easy Integration",
    descriptions: [
      "Every purchase is backed by blockchain security.",
      "No risk of scalpers or scams.",
      "Your access token is yours to redeem—simple, transparent, and seamless.",
    ],
  },
];

const AccessVIP = () => {
  const animationRef = useAccessAnimations();

  return (
    <div
      className="my-20 max-w-[1200px] mx-auto px-6 relative"
      ref={animationRef}
    >
      <div
        className="rounded-4xl py-4 md:py-10 z-10 md:mx-10 px-4 flex flex-col justify-center relative"
        style={{
          background:
            "linear-gradient(to bottom, var(--accent), var(--accent-light))",
          padding: "2px",
        }}
      >
        <div className="bg-background rounded-4xl w-full h-full">
          <div className="sm:mb-12 p-4 md:p-10">
            <h1 className="text-3xl md:text-5xl font-normal text-white sm:mb-6 leading-14 text-center access-title">
              Skip the Wait. Access VIP. Experience More.
            </h1>
          </div>
          <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1200px] mx-auto px-4 md:px-10">
            {accessContent.map((section, index) => (
              <div
                key={index}
                className="hover:bg-background/30 p-8 rounded-lg hvoer:backdrop-blur-sm access-section"
              >
                <h2 className="text-4xl font-semibold text-white mb-2">
                  {section.title}
                </h2>
                <ul className="space-y-2">
                  {section.descriptions.map((desc, idx) => (
                    <li
                      key={idx}
                      className="text-2xl text-white/90 flex items-start access-bullet"
                    >
                      <span className="text-accent mr-2 bullet-point">•</span>
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center text-white text-3xl my-10 access-section px-4">
            <h1>Just show your QR code at the entrance!</h1>
          </div>
          <div
            className="text-center my-4 access-section tilt-element px-4"
            style={{ animationDelay: "0.4s" }}
          >
            <Link href="https://marketplace.flexabledats.com/" target="_blank">
              <Button
                variant="primary"
                size="lg"
                className="hover:scale-105 transition-transform duration-300 hover:shadow-glow"
              >
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessVIP;
