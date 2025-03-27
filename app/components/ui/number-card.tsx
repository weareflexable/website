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
    <div className="flex flex-col items-center text-center space-y-6 p-6 rounded-lg bg-secondary/1 hover:bg-secondary/10 transition-all duration-300">
      <Circle className="" number={number} size={100} />
      <div className="space-y-4">
        <h3 className="text-4xl text-accent">{title}</h3>
        <p className="text-white/80 text-2xl">{description}</p>
      </div>
    </div>
  );
};

export default NumberCard;
