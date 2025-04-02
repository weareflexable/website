import React from "react";
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
  return (
    <div className="flex flex-col items-center text-center space-y-6 p-6 rounded-lg transition-all duration-300">
      <div className="w-[100px] h-[100px] perspective-1000 cursor-pointer">
        <div
          className={`relative w-full h-full transition-transform duration-700 ease-out`}
        >
          {/* Front of circle */}
          <div className="absolute inset-0 backface-hidden">
            <Circle
              number={number}
              size={100}
              bgFrom="secondary"
              bgTo="secondary-light"
              className="hover:shadow-glow"
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
