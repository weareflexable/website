"use client";
import React from "react";
// import Image from "next/image";
import NumberCard from "../ui/number-card";
import {
  useLineReveal,
  useNumberCardsAnimation,
} from "@/app/utils/animations/useAnimations";

interface numberCardBusinessData {
  number: number;
  title: string;
  description: string;
}

interface ForBusinessesProps {
  data: numberCardBusinessData[];
  title: string;
}

const ForBusinesses: React.FC<ForBusinessesProps> = ({ data, title }) => {
  const lineRef = useLineReveal();
  const cardsRef = useNumberCardsAnimation();

  return (
    <div className="md:max-w-[1200px] mx-auto py-20">
      <div className="my-10 mx-6 sm:mx-0">
        <h1 className="text-white text-6xl relative">
          {title}
          <span
            ref={lineRef}
            className="absolute -bottom-3 left-0 w-1/2 h-[3px] bg-gradient-to-r from-accent to-primary rounded-full"
          ></span>
        </h1>
      </div>
      <div
        ref={cardsRef}
        className="grid grid-cols-1 md:grid-cols-3 max-w-[1136px] mx-auto mt-20"
      >
        {data.map((card, index) => (
          <div className="flex items-center" key={index}>
            <div className="">
              <NumberCard
                number={card.number}
                title={card.title}
                description={card.description}
              />
            </div>
            {/* {index < data.length - 1 && (
              <div className="hidden md:flex items-center justify-center w-32 mb-40 arrow-container">
                <Image
                  src="/home/whiteArrow.svg"
                  alt="Arrow"
                  width={80}
                  height={80}
                  className="rotate-90 md:rotate-0"
                />
              </div>
            )} */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForBusinesses;
