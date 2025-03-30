"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "@/app/utils/animations/gsap-config";

interface GlowingElementProps {
  children: React.ReactNode;
  glowColor?: string;
  intensity?: number;
  className?: string;
  trackCursor?: boolean;
}

const GlowingElement: React.FC<GlowingElementProps> = ({
  children,
  glowColor = "rgba(255, 215, 0, 0.2)",
  intensity = 5,
  className = "",
  trackCursor = true,
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const scaledIntensity = intensity * 0.1;

  useEffect(() => {
    const element = elementRef.current;
    const glow = glowRef.current;

    if (!element || !glow || !trackCursor) return;

    let rect = element.getBoundingClientRect();

    gsap.set(glow, {
      width: rect.width + 40,
      height: rect.height + 40,
      x: rect.width / 2,
      y: rect.height / 2,
      opacity: 0,
    });

    const onMouseMove = (e: MouseEvent) => {
      rect = element.getBoundingClientRect();

      const relX = e.clientX - rect.left;
      const relY = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const distX = Math.abs(relX - centerX) / centerX;
      const distY = Math.abs(relY - centerY) / centerY;
      const distance = Math.sqrt(distX * distX + distY * distY);

      const isWithinRange =
        relX >= -100 &&
        relX <= rect.width + 100 &&
        relY >= -100 &&
        relY <= rect.height + 100;

      if (isWithinRange) {
        const normX = Math.max(
          0,
          Math.min(1, (relX + 100) / (rect.width + 200))
        );
        const normY = Math.max(
          0,
          Math.min(1, (relY + 100) / (rect.height + 200))
        );

        const proximity = Math.max(0, 1 - distance);
        const effectIntensity = proximity * scaledIntensity;

        gsap.to(glow, {
          x: centerX + (normX - 0.5) * 50,
          y: centerY + (normY - 0.5) * 50,
          opacity: effectIntensity,
          duration: 0.5,
          ease: "power2.out",
        });

        if (proximity > 0.8) {
          gsap.to(element, {
            scale: 1 + (proximity - 0.8) * 0.05 * scaledIntensity,
            duration: 0.3,
            ease: "power2.out",
          });
        } else {
          gsap.to(element, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        }
      } else {
        gsap.to(glow, {
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
        });

        gsap.to(element, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    const handleResize = () => {
      rect = element.getBoundingClientRect();
      gsap.set(glow, {
        width: rect.width + 40,
        height: rect.height + 40,
      });
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("resize", handleResize);

    const pulseAnimation = gsap.timeline({
      repeat: -1,
      yoyo: true,
    });

    pulseAnimation.to(glow, {
      opacity: 0.1 * scaledIntensity,
      duration: 2,
      ease: "sine.inOut",
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", handleResize);
      gsap.killTweensOf(glow);
      gsap.killTweensOf(element);
      pulseAnimation.kill();
    };
  }, [scaledIntensity, trackCursor]);

  return (
    <div className={`relative ${className}`} ref={elementRef}>
      <div
        ref={glowRef}
        className="absolute rounded-full blur-xl pointer-events-none -z-10"
        style={{
          background: glowColor,
          transform: "translate(-50%, -50%)",
        }}
      />

      <div className="relative">{children}</div>
    </div>
  );
};

export default GlowingElement;
