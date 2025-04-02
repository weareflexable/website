import React from "react";

interface CircleProps {
  number: number;
  size?: number;
  className?: string;
  bgFrom?: string;
  bgTo?: string;
}

const Circle: React.FC<CircleProps> = ({
  number,
  size = 100,
  className = "",
  bgFrom = "secondary",
  bgTo = "secondary-light",
}) => {
  return (
    <div
      className={`flex items-center justify-center rounded-full bg-gradient-to-b from-${bgFrom} to-${bgTo} border-1 border-black  ${className}`}
      style={{
        width: size,
        height: size,
      }}
    >
      <span
        className={`text-white text-7xl `}
        // style={{
        //   textShadow:
        //     "2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000",
        // }}
      >
        {number}
      </span>
    </div>
  );
};

export default Circle;
