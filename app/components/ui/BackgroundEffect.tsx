"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "@/app/utils/animations/gsap-config";

interface BackgroundEffectProps {
  intensity?: number;
}

const BackgroundEffect: React.FC<BackgroundEffectProps> = ({
  intensity = 3,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const gradientRef = useRef<HTMLDivElement>(null);
  const orbs = useRef<HTMLDivElement[]>([]);
  const mousePosRef = useRef({ x: 0, y: 0 });
  const viewportSize = useRef({ width: 0, height: 0 });

  const scaledIntensity = intensity * 0.1;

  useEffect(() => {
    const container = containerRef.current;
    const gradient = gradientRef.current;

    if (!container || !gradient) return;

    viewportSize.current = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    const createOrbs = () => {
      orbs.current.forEach((orb) => {
        if (orb.parentNode) {
          orb.parentNode.removeChild(orb);
        }
      });
      orbs.current = [];

      const orbsCount = 8;

      for (let i = 0; i < orbsCount; i++) {
        const orb = document.createElement("div");
        const size = 100 + Math.random() * 200;

        orb.className =
          "absolute rounded-full blur-3xl opacity-10 pointer-events-none";
        orb.style.width = `${size}px`;
        orb.style.height = `${size}px`;

        const isGold = i % 2 === 0;
        orb.style.background = isGold
          ? "radial-gradient(circle, rgba(255,215,0,0.6) 0%, rgba(255,215,0,0.1) 70%)"
          : "radial-gradient(circle, rgba(73,22,81,0.6) 0%, rgba(73,22,81,0.1) 70%)";

        const x = Math.random() * viewportSize.current.width;
        const y = Math.random() * viewportSize.current.height;
        orb.style.left = `${x}px`;
        orb.style.top = `${y}px`;

        container.appendChild(orb);
        orbs.current.push(orb);

        animateOrb(orb, size);
      }
    };

    const animateOrb = (orb: HTMLDivElement, size: number) => {
      const duration = 15 + Math.random() * 20;

      const tl = gsap.timeline({
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      const xRange = viewportSize.current.width * 0.3;
      const yRange = viewportSize.current.height * 0.3;

      const rect = orb.getBoundingClientRect();
      const currentX = rect.left;
      const currentY = rect.top;

      const targetX = Math.max(
        0 - size / 2,
        Math.min(
          currentX + (Math.random() * xRange * 2 - xRange),
          viewportSize.current.width - size / 2
        )
      );
      const targetY = Math.max(
        0 - size / 2,
        Math.min(
          currentY + (Math.random() * yRange * 2 - yRange),
          viewportSize.current.height - size / 2
        )
      );

      tl.to(orb, {
        x: targetX - currentX,
        y: targetY - currentY,
        duration: duration,
        ease: "sine.inOut",
        onComplete: () => {
          if (orb.parentNode) {
            animateOrb(orb, size);
          }
        },
      });

      gsap.to(orb, {
        scale: 0.8 + Math.random() * 0.4,
        opacity: 0.05 + Math.random() * 0.15,
        duration: 8 + Math.random() * 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    };

    const updateGradient = () => {
      if (!gradient) return;

      const xPercent =
        (mousePosRef.current.x / viewportSize.current.width) * 100;
      const yPercent =
        (mousePosRef.current.y / viewportSize.current.height) * 100;

      gsap.to(gradient, {
        backgroundPosition: `${xPercent}% ${yPercent}%`,
        duration: 1,
        ease: "power2.out",
      });
    };

    const updateOrbs = () => {
      const { x, y } = mousePosRef.current;
      const { width, height } = viewportSize.current;

      const normalizedX = (x / width) * 2 - 1;
      const normalizedY = (y / height) * 2 - 1;

      orbs.current.forEach((orb, index) => {
        const directionX = index % 2 === 0 ? 1 : -1;
        const directionY = index % 3 === 0 ? 1 : -1;

        const offsetX = normalizedX * 20 * scaledIntensity * directionX;
        const offsetY = normalizedY * 20 * scaledIntensity * directionY;

        gsap.to(orb, {
          x: `+=${offsetX}`,
          y: `+=${offsetY}`,
          duration: 3,
          ease: "power1.out",
          overwrite: "auto",
        });
      });
    };

    interface ThrottledMouseHandler {
      (e: MouseEvent): void;
      throttled: boolean;
    }

    const handleMouseMove = function (e: MouseEvent) {
      mousePosRef.current = { x: e.clientX, y: e.clientY };
      updateGradient();

      if (!handleMouseMove.throttled) {
        handleMouseMove.throttled = true;
        setTimeout(() => {
          updateOrbs();
          handleMouseMove.throttled = false;
        }, 100);
      }
    } as ThrottledMouseHandler;

    handleMouseMove.throttled = false;

    const handleResize = () => {
      viewportSize.current = {
        width: window.innerWidth,
        height: window.innerHeight,
      };

      createOrbs();
    };

    createOrbs();

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);

      gsap.killTweensOf(gradient);
      orbs.current.forEach((orb) => {
        gsap.killTweensOf(orb);
        if (orb.parentNode) {
          orb.parentNode.removeChild(orb);
        }
      });
    };
  }, [scaledIntensity]);

  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none -z-10"
      ref={containerRef}
    >
      <div
        ref={gradientRef}
        className="absolute inset-0 w-[200%] h-[200%] -left-1/2 -top-1/2"
        style={{
          background: `radial-gradient(circle at center, 
            rgba(73, 22, 81, 0.02) 0%, 
            rgba(255, 215, 0, 0.01) 25%, 
            rgba(73, 22, 81, 0.03) 50%, 
            rgba(73, 22, 81, 0.01) 75%,
            rgba(255, 215, 0, 0.02) 100%)`,
          backgroundSize: "200% 200%",
          backgroundPosition: "50% 50%",
        }}
      />
    </div>
  );
};

export default BackgroundEffect;
