"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "@/app/utils/animations/gsap-config";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const rippleContainerRef = useRef<HTMLDivElement>(null);
  const particlesContainerRef = useRef<HTMLDivElement>(null);

  const [isPointer, setIsPointer] = useState(false);
  const lastMousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.body.style.cursor = "none";
    }

    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    const follower = followerRef.current;
    const rippleContainer = rippleContainerRef.current;
    const particlesContainer = particlesContainerRef.current;

    if (
      !cursor ||
      !cursorDot ||
      !follower ||
      !rippleContainer ||
      !particlesContainer
    )
      return;

    const xTo = gsap.quickTo(cursor, "x", {
      duration: 0.3,
      ease: "power2.out",
    });
    const yTo = gsap.quickTo(cursor, "y", {
      duration: 0.3,
      ease: "power2.out",
    });

    const dotXTo = gsap.quickTo(cursorDot, "x", {
      duration: 0.1,
      ease: "power1.out",
    });
    const dotYTo = gsap.quickTo(cursorDot, "y", {
      duration: 0.1,
      ease: "power1.out",
    });

    const followerXTo = gsap.quickTo(follower, "x", {
      duration: 0.6,
      ease: "power3.out",
    });
    const followerYTo = gsap.quickTo(follower, "y", {
      duration: 0.6,
      ease: "power3.out",
    });

    gsap.set(cursorDot, {
      xPercent: -50,
      yPercent: -50,
      width: 10,
      height: 10,
      borderRadius: "50%",
      backgroundColor: "#6D28D9",
      opacity: 0,
    });

    gsap.set(follower, {
      xPercent: -50,
      yPercent: -50,
      width: 40,
      height: 40,
      borderRadius: "50%",
      border: "2px solid rgba(109, 40, 217, 0.5)",
      opacity: 0,
    });

    gsap.set(cursor, {
      xPercent: -50,
      yPercent: -50,
    });

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      dotXTo(mouseX);
      dotYTo(mouseY);

      xTo(mouseX);
      yTo(mouseY);
      followerXTo(mouseX);
      followerYTo(mouseY);

      const speed = Math.sqrt(
        Math.pow(mouseX - lastMousePosition.current.x, 2) +
          Math.pow(mouseY - lastMousePosition.current.y, 2)
      );

      const cursorScale = Math.min(1 + speed * 0.01, 1.5);
      gsap.to(cursor, { scale: cursorScale, duration: 0.3 });

      const opacity = Math.min(0.2 + speed * 0.005, 0.5);
      gsap.to(follower, { opacity: opacity, duration: 0.3 });

      if (speed > 40 && rippleContainer) {
        createRipple(mouseX, mouseY, speed);
      }

      if (speed > 5 && Math.random() > 0.7) {
        createParticle(mouseX, mouseY);
      }

      lastMousePosition.current = { x: mouseX, y: mouseY };
    };

    const createRipple = (x: number, y: number, velocity: number) => {
      if (velocity < 40) return;

      const rippleSize = Math.min(100, velocity);
      const duration = 0.6 + rippleSize / 100;

      const ripple = document.createElement("div");
      ripple.className =
        "absolute -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none";
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      ripple.style.backgroundColor = "rgba(109, 40, 217, 0.15)";
      ripple.style.boxShadow = "0 0 20px rgba(109, 40, 217, 0.3)";

      rippleContainer.appendChild(ripple);

      gsap.fromTo(
        ripple,
        { width: 10, height: 10, opacity: 0.8 },
        {
          width: rippleSize,
          height: rippleSize,
          opacity: 0,
          duration: duration,
          ease: "power2.out",
          onComplete: () => {
            if (ripple.parentNode) {
              ripple.parentNode.removeChild(ripple);
            }
          },
        }
      );
    };

    const createParticle = (x: number, y: number) => {
      const particle = document.createElement("div");
      const size = 3 + Math.random() * 8;
      const isGold = Math.random() > 0.5;

      particle.className = "absolute rounded-full pointer-events-none";
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.background = isGold
        ? "rgba(255, 215, 0, 0.8)"
        : "rgba(73, 22, 81, 0.6)";
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      particle.style.boxShadow = isGold
        ? "0 0 5px 1px rgba(255, 215, 0, 0.4)"
        : "0 0 5px 1px rgba(73, 22, 81, 0.4)";

      particlesContainer.appendChild(particle);

      const angleRad = Math.random() * Math.PI * 2;
      const distance = 30 + Math.random() * 70;
      const targetX = x + Math.cos(angleRad) * distance;
      const targetY = y + Math.sin(angleRad) * distance;

      gsap.to(particle, {
        x: targetX - x,
        y: targetY - y,
        opacity: 0,
        duration: 0.6 + Math.random() * 0.8,
        ease: "power2.out",
        onComplete: () => {
          if (particlesContainer.contains(particle)) {
            particlesContainer.removeChild(particle);
          }
        },
      });
    };

    const handleElementDetection = () => {
      const hoveredElement = document.elementFromPoint(mouseX, mouseY);

      const isClickable =
        hoveredElement &&
        (hoveredElement.tagName === "BUTTON" ||
          hoveredElement.tagName === "A" ||
          hoveredElement.closest("button") ||
          hoveredElement.closest("a") ||
          hoveredElement.getAttribute("role") === "button" ||
          (hoveredElement as HTMLElement).style.cursor === "pointer" ||
          (hoveredElement.parentElement &&
            (hoveredElement.parentElement as HTMLElement).style.cursor ===
              "pointer"));

      if (isClickable !== isPointer) {
        setIsPointer(isClickable === true);

        if (isClickable) {
          gsap.to(cursor, {
            scale: 1.5,
            backgroundColor: "rgba(255, 215, 0, 0.1)",
            borderColor: "rgba(255, 215, 0, 0.8)",
            duration: 0.3,
          });
          gsap.to(cursorDot, {
            scale: 0.6,
            backgroundColor: "rgba(255, 215, 0, 1)",
            duration: 0.3,
          });
        } else {
          gsap.to(cursor, {
            scale: 1,
            backgroundColor: "rgba(73, 22, 81, 0.1)",
            borderColor: "rgba(73, 22, 81, 0.5)",
            duration: 0.3,
          });
          gsap.to(cursorDot, {
            scale: 1,
            backgroundColor: "rgba(73, 22, 81, 0.8)",
            duration: 0.3,
          });
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    const detectionInterval = setInterval(handleElementDetection, 100);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(detectionInterval);
      document.documentElement.style.cursor = "";
    };
  }, [isPointer]);

  return (
    <>
      <div
        ref={rippleContainerRef}
        className="fixed inset-0 pointer-events-none z-[999] overflow-hidden"
      />
      <div
        ref={particlesContainerRef}
        className="fixed inset-0 pointer-events-none z-[999] overflow-hidden"
      />
      <div
        ref={followerRef}
        className="fixed w-12 h-12 rounded-full pointer-events-none z-[999] opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(255,215,0,0.15) 0%, rgba(73,22,81,0.2) 70%, transparent 100%)",
          boxShadow: "0 0 15px 2px rgba(73, 22, 81, 0.1)",
        }}
      />
      <div
        ref={cursorRef}
        className="fixed w-8 h-8 border-2 border-primary/50 rounded-full pointer-events-none z-[999]"
        style={{ mixBlendMode: "exclusion" }}
      />
      <div
        ref={cursorDotRef}
        className="fixed w-2 h-2 bg-primary rounded-full pointer-events-none z-[999]"
      />
    </>
  );
};

export default CustomCursor;
