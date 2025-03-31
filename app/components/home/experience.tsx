"use client";
import React, { useCallback } from "react";
import { Card } from "@/app/components/ui/card";
import Image from "next/image";
import { businessData } from "@/app/constants/text";
import { Button } from "../ui/button";
import Link from "next/link";
import {
  useCardAnimations,
  useLeftRightAnimations,
  useTiltOnHover,
} from "@/app/utils/animations/useAnimations";

const cardData = [
  {
    icon: "/home/card.svg",
    iconAlt: "Card Icon",
    title: "Easy",
    titleLine2: "Payments",
    hoverTitle: "Easy Payments",
    hoverDescription:
      "Customers buy digital access tokens (DATs) using credit/debit cards.",
  },
  {
    icon: "/home/lock.svg",
    iconAlt: "Lock Icon",
    title: "Fraud-Proof",
    titleLine2: "Security",
    hoverTitle: "Fraud-Proof Security",
    hoverDescription:
      "Blockchain-backed tickets prevent counterfeiting and resale abuse.",
  },
  {
    icon: "/home/dollar.svg",
    iconAlt: "Dollar Icon",
    title: "Easy",
    titleLine2: "Payout",
    hoverTitle: "Easy Payout",
    hoverDescription:
      "Stripe integration ensures easy payouts and automated access control.",
  },
  {
    icon: "/home/revenue.svg",
    iconAlt: "Revenue Icon",
    title: "New Revenue,",
    titleLine2: "No Changes",
    hoverTitle: "New Revenue, No Changes",
    hoverDescription: "Monetize access effortlessly, with no extra hassle.",
  },
];

const Experience = () => {
  const cardsContainerRef = useCardAnimations();
  const businessSectionsRef = useLeftRightAnimations();
  const tiltRef = useTiltOnHover(".tilt-element", 7);

  const combinedRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (businessSectionsRef) {
        businessSectionsRef.current = node;
      }

      if (tiltRef) {
        tiltRef.current = node;
      }
    },
    [businessSectionsRef, tiltRef]
  );

  return (
    <div className="container mx-auto py-20">
      <div className="">
        <h1 className="text-4xl sm:text-5xl text-white text-center">
          How It Works —{" "}
          <span className="text-accent inline-block">
            Powerful Tech, Simple Experience
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-white text-start max-w-[1000px] sm:mx-auto my-10 mx-4">
          Flexable merges{" "}
          <span className="text-2xl sm:text-3xl inline-block">
            Blockchain security
          </span>{" "}
          with{" "}
          <span className="text-2xl sm:text-3xl inline-block">
            Web2 simplicity
          </span>
          . Businesses tokenize access using Digital Access Tokens while
          customers pay with credit cards—secure and simple.
        </p>
        <div className="container mx-auto px-4 py-10">
          <div
            ref={cardsContainerRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto place-items-center"
          >
            {cardData.map((card, index) => (
              <div key={index} className="card-wrapper">
                <Card
                  icon={
                    <Image
                      src={card.icon}
                      alt={card.iconAlt}
                      width={48}
                      height={48}
                      className="text-accent"
                    />
                  }
                  title={card.title}
                  titleLine2={card.titleLine2}
                  hoverTitle={card.hoverTitle}
                  hoverDescription={card.hoverDescription}
                  variant="hover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="my-20 max-w-[1000px] mx-auto">
        <h1 className="text-4xl sm:text-5xl text-white text-center py-20">
          Sell More. Skip the Wait.{" "}
          <span className="inline-block text-accent underline decoration-3 underline-offset-[10px]">
            Everyone Wins.
          </span>
        </h1>
        <div className="py-10 px-6 sm:px-0">
          <div ref={combinedRef} className="space-y-24">
            {Object.entries(businessData).map(([key, data], index) => (
              <div
                key={key}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-8 lg:gap-16 animated-section`}
              >
                {/* Image Section */}
                <div className="w-full lg:w-1/2 flex justify-start from-left tilt-element overflow-hidden">
                  <Image
                    src={data.image}
                    alt={data.title}
                    width={470}
                    height={470}
                    className="rounded-lg"
                  />
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-1/2 space-y-6 border-none border-red- rounded-4xl bg-secondary/40 min-h-72 p-8 from-right tilt-element">
                  <h2 className="text-3xl font-bold text-white">
                    {data.title}
                  </h2>
                  <div className="space-y-4">
                    {data.benefits.map((benefit, idx) => (
                      <p key={idx} className="text-white text-xl">
                        {benefit}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="text-center md:space-x-14">
        <Link href="https://portal.flexabledats.com/" target="_blank">
          <Button variant="primary" size="lg" className="w-56 hover:shadow-glow">
            Business Sign Up
          </Button>
        </Link>
        <Link href="https://marketplace.flexabledats.com/" target="_blank">
          <Button className="mt-6 w-56 hover:shadow-glow" variant="primary" size="lg">
            Consumer Sign Up
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Experience;
