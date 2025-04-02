"use client";
import React from "react";
// import Image from "next/image";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { useAccessAnimations } from "@/app/utils/animations/useAnimations";

const accessContent = [
  {
    title: "New Revenue Streams",
    descriptions: [
      "Monetize access - Earn more from what you already have—sell VIP access, line skips, premium tables, memberships, and event passes. Anything you want.",
    ],
  },
  {
    title: "Easy Integration",
    descriptions: [
      "No upfront costs, no new hardware—works with your existing operations",
      "Easily manage offers, pricing, and availability in real time",
      "Customers simply show their QR code to redeem access",
    ],
  },
  {
    title: "Guaranteed Authenticity",
    descriptions: [
      "Access tokens are securely minted, eliminating fraud, scalping, and fakes",
      "Control your offers and track every transaction transparently",
    ],
  },
];

const Access = () => {
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
          <div className="mb-12 sm:mb-0 p-4 md:p-10">
            <h1 className="text-4xl md:text-5xl font-semibold sm:font-normal text-white sm:mb-6 sm:leading-14 text-center access-title">
              Monetize Access. Unlock New Opportunities.
            </h1>
          </div>
          <div className="sm:block max-w-[940px] mx-auto sm:space-y-16 px-4 md:px-10">
            {accessContent.map((section, index) => (
              <div key={index} className="sm:my-4 sm:py-4 access-section">
                <h2 className="text-3xl sm:text-4xl sm:font-bold text-white mb-1">
                  {section.title}
                </h2>
                <ul className="">
                  {section.descriptions.map((desc, idx) => (
                    <li
                      key={idx}
                      className="hidden text-sm sm:text-2xl text-white/90 sm:flex items-start access-bullet"
                    >
                      <span className="text-accent mr-2 bullet-point">•</span>
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div
            className="absolute -left-16 bottom-0 w-[500px] h-[400px] rounded-full pointer-events-none z-20"
            style={{
              background: `radial-gradient(ellipse at center, #621D88 0%, #621D88 20%, #621D88 40%, #621D88 60%, transparent 30%)`,
              mixBlendMode: "screen",
              opacity: 0.3,
              filter: "blur(40px)",
            }}
          />
          <div
            className="text-center my-10 access-section tilt-element px-4"
            style={{ animationDelay: "0.4s" }}
          >
            <Link href="https://portal.flexabledats.com/" target="_blank">
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

export default Access;
