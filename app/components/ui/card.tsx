"use client";

import * as React from "react";
import { cn } from "../../lib/utils";
import { useState } from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode;
  title: string;
  titleLine2?: string;
  description?: string;
  hoverTitle?: string;
  hoverDescription?: string;
  variant?: "default" | "hover" | "gradient" | "glass" | "bordered";
  size?: "sm" | "default" | "lg" | "xl";
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      icon,
      title,
      titleLine2,
      hoverTitle,
      hoverDescription,
      variant = "default",
      size = "default",
      ...props
    },
    ref
  ) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col items-center justify-center rounded-lg transition-all duration-500 ease-in-out",
          // Size variants
          size === "sm" && "p-4",
          size === "default" && "p-6",
          size === "lg" && "p-8",
          size === "xl" && "p-10",

          // Style variants
          variant === "default" && "bg-white/5 hover:bg-white/10",
          variant === "hover" &&
            "w-[250px] h-[250px] relative overflow-hidden bg-gradient-to-b from-secondary to-secondary-light border border-white rounded-4xl",
          variant === "gradient" &&
            "bg-gradient-to-br from-primary via-secondary to-secondary-light hover:from-secondary-light hover:via-secondary hover:to-primary hover:scale-105",
          variant === "glass" &&
            "bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-white/30",
          variant === "bordered" &&
            "border-2 border-accent hover:border-primary hover:bg-accent/10",

          className
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          background:
            variant === "hover" && isHovered
              ? "white"
              : variant === "hover"
              ? "linear-gradient(to bottom, var(--color-secondary), var(--color-secondary-light))"
              : "",
        }}
        {...props}
      >
        {variant === "hover" && (
          <div
            className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center"
            style={{
              opacity: isHovered ? 1 : 0,
              transform: isHovered ? "translateY(0)" : "translateY(10px)",
              transition: "opacity 400ms ease-in-out, transform 400ms ease-out",
            }}
          >
            <h3 className="font-medium text-primary text-xl mb-4">
              {hoverTitle || title}
            </h3>
            <p className="text-primary text-sm">{hoverDescription}</p>
          </div>
        )}

        <div
          className="flex flex-col items-center"
          style={{
            opacity: variant === "hover" && isHovered ? 0 : 1,
            transform:
              variant === "hover" && isHovered
                ? "translateY(-10px)"
                : "translateY(0)",
            transition: "opacity 300ms ease-in-out, transform 300ms ease-out",
          }}
        >
          <div
            className={cn(
              "text-accent",
              size === "sm" && "text-2xl mb-2",
              size === "default" && "text-4xl mb-4",
              size === "lg" && "text-5xl mb-4",
              size === "xl" && "text-6xl mb-6"
            )}
          >
            {icon}
          </div>
          <div className="flex flex-col items-center gap-1">
            <h3
              className={cn(
                "font-normal text-white text-center",
                size === "sm" && "text-base",
                size === "default" && "text-xl",
                size === "lg" && "text-2xl",
                size === "xl" && "text-3xl"
              )}
            >
              {title}
            </h3>
            {titleLine2 && (
              <h3
                className={cn(
                  "font-normal text-white text-center",
                  size === "sm" && "text-base",
                  size === "default" && "text-xl",
                  size === "lg" && "text-2xl",
                  size === "xl" && "text-3xl"
                )}
              >
                {titleLine2}
              </h3>
            )}
          </div>
        </div>
      </div>
    );
  }
);

Card.displayName = "Card";

export { Card };
