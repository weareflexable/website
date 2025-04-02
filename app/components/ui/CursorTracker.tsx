"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "@/app/utils/animations/gsap-config";

interface CursorTrackerProps {
  color?: string;
  brightnessSize?: number;
  brightnessIntensity?: number;
}

const CursorTracker: React.FC<CursorTrackerProps> = ({
  color = "rgba(98, 29, 136, 0.3)",
  brightnessSize = 300,
  brightnessIntensity = 0.15,
}) => {
  const brightnessRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const brightness = brightnessRef.current;

    if (!brightness) return;

    const onMouseMove = (e: MouseEvent) => {
      if (!isVisible) {
        setIsVisible(true);
      }

      gsap.to(brightness, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.8,
        ease: "power2.out",
      });
    };

    const onMouseEnter = () => {
      gsap.to(brightness, { opacity: brightnessIntensity, duration: 0.5 });
    };

    const onMouseLeave = () => {
      gsap.to(brightness, { opacity: 0, duration: 0.5 });
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [isVisible, brightnessIntensity]);

  return (
    <div
      ref={brightnessRef}
      className={`fixed top-0 left-0 rounded-full pointer-events-none z-20 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        width: `${brightnessSize}px`,
        height: `${brightnessSize}px`,
        background: `radial-gradient(circle, ${color} 0%, ${color} 30%, rgba(98, 29, 136, 0.1) 50%, transparent 70%)`,
        transform: "translate(-50%, -50%)",
        mixBlendMode: "screen",
        opacity: brightnessIntensity,
        filter: "blur(40px)",
      }}
    />
  );
};

export default CursorTracker;
