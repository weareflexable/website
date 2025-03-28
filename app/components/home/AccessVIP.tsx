import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

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
  return (
    <div className="relative min-h-screen w-full">
      <div className="absolute inset-0 z-0">
        <Image
          src="/home/accessVIPBg.svg"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-b from-background/70 to-background/70"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 h-screen flex flex-col justify-center">
        <div className="sm:mb-12">
          <h1 className="text-3xl md:text-5xl font-normal text-white sm:mb-6 leading-14 text-center">
            Monetize Access. Unlock New Opportunities
          </h1>
        </div>
        <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1200px] mx-auto">
          {accessContent.map((section, index) => (
            <div
              key={index}
              className="hover:bg-background/30 p-8 rounded-lg hvoer:backdrop-blur-sm"
            >
              <h2 className="text-4xl font-semibold text-white mb-2">
                {section.title}
              </h2>
              <ul className="space-y-2">
                {section.descriptions.map((desc, idx) => (
                  <li
                    key={idx}
                    className="text-2xl text-white/90 flex items-start"
                  >
                    <span className="text-accent mr-2">•</span>
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-center text-white text-3xl my-10">
          <h1>Just show your QR code at the entrance!</h1>
        </div>
        <div className="text-center my-10">
          <Link href="https://portal.flexabledats.com/" target="_blank">
            <Button variant="primary" size="lg">
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AccessVIP;
