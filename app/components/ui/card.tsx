import * as React from "react";
import { cn } from "../../lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode;
  title: string;
  titleLine2?: string;
  description?: string;
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
      variant = "default",
      size = "default",
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col items-center justify-center rounded-lg transition-all duration-300",
          // Size variants
          size === "sm" && "p-4",
          size === "default" && "p-6",
          size === "lg" && "p-8",
          size === "xl" && "p-10",

          // Style variants
          variant === "default" && "bg-white/5 hover:bg-white/10",
          variant === "hover" &&
            "w-[250px] bg-gradient-to-b from-secondary to-secondary-light hover:from-primary/30 hover:to-secondary/30 hover:scale-105 border border-white rounded-4xl",
          variant === "gradient" &&
            "bg-gradient-to-br from-primary via-secondary to-secondary-light hover:from-secondary-light hover:via-secondary hover:to-primary hover:scale-105",
          variant === "glass" &&
            "bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-white/30",
          variant === "bordered" &&
            "border-2 border-accent hover:border-primary hover:bg-accent/10",

          className
        )}
        {...props}
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
        {/* {description && (
          <p
            className={cn(
              "text-gray-300 text-center",
              size === "sm" && "text-xs",
              size === "default" && "text-sm",
              size === "lg" && "text-base",
              size === "xl" && "text-lg"
            )}
          >
            {description}
          </p>
        )} */}
      </div>
    );
  }
);

Card.displayName = "Card";

export { Card };
