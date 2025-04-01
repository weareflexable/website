import React, { useState } from "react";
import Circle from "./circle";

interface NumberCardProps {
  number: number;
  title: string;
  description: string;
}

const NumberCard: React.FC<NumberCardProps> = ({
  number,
  title,
  description,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col items-center text-center space-y-6 p-6 rounded-lg transition-all duration-300">
      <div
        className="w-[100px] h-[100px] perspective-1000 cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`relative w-full h-full transition-transform duration-700 ease-out transform-style-3d ${
            isHovered ? "rotate-y-180" : ""
          }`}
        >
          {/* Front of circle */}
          <div className="absolute inset-0 backface-hidden">
            <Circle
              className=""
              number={number}
              size={100}
              bgFrom="secondary"
              bgTo="secondary-light"
            />
          </div>
          {/* Back of circle */}
          <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-full flex items-center justify-center">
            <Circle
              className=""
              number={number}
              size={100}
              bgFrom="black"
              bgTo="secondary-gray"
            />
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <h3 className="text-4xl text-accent">{title}</h3>
        <p className="text-white/80 text-2xl">{description}</p>
      </div>
    </div>
  );
};

export default NumberCard;
