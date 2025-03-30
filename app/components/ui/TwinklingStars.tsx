"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "@/app/utils/animations/gsap-config";

interface TwinklingStarsProps {
  count?: number;
  minSize?: number;
  maxSize?: number;
  twinkleSpeed?: number;
  repelRadius?: number;
  repelStrength?: number;
  shootingStarFrequency?: number;
}

interface StarData {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  size: number;
  depth: number;
  speed: number;
  twinkleDuration: number;
  twinkleDelay: number;
  color: string;
  velocityX: number;
  velocityY: number;
}

const TwinklingStars: React.FC<TwinklingStarsProps> = ({
  count = 100,
  minSize = 1,
  maxSize = 3,
  repelRadius = 150,
  repelStrength = 12,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const starsRef = useRef<HTMLDivElement[]>([]);
  const starsDataRef = useRef<StarData[]>([]);

  const cursorPosition = useRef({ x: -1000, y: -1000 });
  const viewportSize = useRef({ width: 0, height: 0 });
  const animationFrameRef = useRef<number | null>(null);
  const lastFrameTimeRef = useRef<number>(0);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const createStarsInEffect = () => {
      const starContainer = containerRef.current;
      if (!starContainer) {
        console.error("Star container not found");
        return;
      }

      starsRef.current.forEach((star) => {
        if (star.parentNode) {
          star.parentNode.removeChild(star);
        }
      });

      starsRef.current = [];
      starsDataRef.current = [];

      viewportSize.current = {
        width: window.innerWidth,
        height: window.innerHeight,
      };

      for (let i = 0; i < count; i++) {
        const star = document.createElement("div");

        const depth = 0.1 + Math.random() * 0.9;
        const size = minSize + (maxSize - minSize) * depth;
        const color = `rgb(${255}, ${255}, ${255})`;
        const x = Math.random() * viewportSize.current.width;
        const y = Math.random() * viewportSize.current.height;

        const baseX = x;
        const baseY = y;

        const twinkleDuration = 2 + Math.random() * 4;
        const twinkleDelay = Math.random() * 3;

        starsDataRef.current.push({
          x,
          y,
          baseX,
          baseY,
          size,
          depth,
          color,
          speed: 0.3 + Math.random() * 0.7,
          twinkleDuration,
          twinkleDelay,
          velocityX: 0,
          velocityY: 0,
        });

        star.className = "absolute rounded-full pointer-events-none";
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.background = `radial-gradient(circle at center, ${color} 0%, rgba(255,255,255,0.7) 50%, transparent 100%)`;
        star.style.boxShadow = `0 0 ${
          size * 3
        }px ${size}px rgba(255, 255, 255, 0.7)`;

        star.style.filter = `blur(${0.2 * (1 - depth)}px)`;

        star.style.left = `${x}px`;
        star.style.top = `${y}px`;
        star.style.opacity = "0.8";
        star.style.zIndex = "0";

        starContainer.appendChild(star);
        starsRef.current.push(star);

        gsap.to(star, {
          opacity: 0.3 + Math.random() * 0.3,
          duration: twinkleDuration * 0.5,
          delay: twinkleDelay,
          yoyo: true,
          repeat: -1,
          repeatDelay: Math.random() * 5,
          ease: "sine.inOut",
        });

        gsap.to(star, {
          scale: 0.7 + Math.random() * 0.4,
          duration: twinkleDuration,
          delay: twinkleDelay + Math.random() * 2,
          yoyo: true,
          repeat: -1,
          repeatDelay: Math.random() * 3,
          ease: "sine.inOut",
        });
      }

      setIsInitialized(true);
    };

    const animateStarsInEffect = (timestamp: number) => {
      const stars = starsRef.current;
      const starsData = starsDataRef.current;

      if (stars.length === 0 || !isInitialized) {
        animationFrameRef.current = requestAnimationFrame(animateStarsInEffect);
        return;
      }

      const delta = timestamp - lastFrameTimeRef.current;
      if (delta > 16) {
        lastFrameTimeRef.current = timestamp;

        const cursorX = cursorPosition.current.x;
        const cursorY = cursorPosition.current.y;

        const effectRadius = repelRadius * 1.2;

        const minX = cursorX - effectRadius * 3;
        const maxX = cursorX + effectRadius * 3;
        const minY = cursorY - effectRadius * 3;
        const maxY = cursorY + effectRadius * 3;

        stars.forEach((star, index) => {
          const data = starsData[index];

          const damping = 0.95;

          let forceX = 0;
          let forceY = 0;

          const inArea =
            data.x >= minX &&
            data.x <= maxX &&
            data.y >= minY &&
            data.y <= maxY;

          let distanceSquared = Infinity;
          let effectRadiusSquared = 0;

          if (inArea) {
            const dx = cursorX - data.x;
            const dy = cursorY - data.y;
            distanceSquared = dx * dx + dy * dy;
            effectRadiusSquared = Math.pow(effectRadius * data.depth, 2);

            if (distanceSquared < effectRadiusSquared) {
              const distance = Math.sqrt(distanceSquared);
              const strength =
                repelStrength *
                2 *
                Math.pow(1 - distance / (effectRadius * data.depth), 2);

              const dirX =
                distance < 0.1 ? Math.random() - 0.5 : -dx / distance;
              const dirY =
                distance < 0.1 ? Math.random() - 0.5 : -dy / distance;

              forceX = dirX * strength * data.speed;
              forceY = dirY * strength * data.speed;

              data.velocityX += forceX;
              data.velocityY += forceY;

              gsap.to(star, {
                opacity: Math.min(1.0, 0.6 + data.depth * 0.4),
                boxShadow: `0 0 ${data.size * 4}px ${
                  data.size
                }px rgba(255, 255, 255, ${0.8 * data.depth})`,
                duration: 0.2,
                overwrite: "auto",
              });
            }
          }

          const returnStrength = 0.015 * data.speed;
          data.velocityX += (data.baseX - data.x) * returnStrength;
          data.velocityY += (data.baseY - data.y) * returnStrength;

          data.velocityX *= damping;
          data.velocityY *= damping;

          if (
            Math.abs(data.velocityX) < 0.05 &&
            Math.abs(data.velocityY) < 0.05
          ) {
            data.velocityX += (Math.random() - 0.5) * 0.02 * data.depth;
            data.velocityY += (Math.random() - 0.5) * 0.02 * data.depth;
          }

          data.x += data.velocityX;
          data.y += data.velocityY;

          if (!inArea || distanceSquared >= effectRadiusSquared) {
            gsap.to(star, {
              boxShadow: `0 0 ${data.size * 2}px ${
                data.size / 2
              }px rgba(255, 255, 255, ${0.4 * data.depth})`,
              duration: 0.8,
              overwrite: "auto",
            });

            if (!inArea) {
              data.x +=
                Math.sin(timestamp * 0.0001 * data.speed) * 0.02 * data.depth;
              data.y +=
                Math.cos(timestamp * 0.00015 * data.speed) * 0.02 * data.depth;
            }
          }

          const padding = data.size * 2;

          if (data.x < -padding) {
            data.x = viewportSize.current.width + padding;
            data.baseX = data.x;
          } else if (data.x > viewportSize.current.width + padding) {
            data.x = -padding;
            data.baseX = data.x;
          }

          if (data.y < -padding) {
            data.y = viewportSize.current.height + padding;
            data.baseY = data.y;
          } else if (data.y > viewportSize.current.height + padding) {
            data.y = -padding;
            data.baseY = data.y;
          }

          star.style.transform = `translate(${data.x}px, ${data.y}px)`;
        });
      }

      animationFrameRef.current = requestAnimationFrame(animateStarsInEffect);
    };

    createStarsInEffect();

    if (isInitialized) {
      animationFrameRef.current = requestAnimationFrame(animateStarsInEffect);
    }

    const handleMouseMove = (e: MouseEvent) => {
      cursorPosition.current = { x: e.clientX, y: e.clientY };
    };

    const handleResize = () => {
      viewportSize.current = {
        width: window.innerWidth,
        height: window.innerHeight,
      };
      createStarsInEffect();
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      starsRef.current.forEach((star) => {
        gsap.killTweensOf(star);
        if (star.parentNode) {
          star.parentNode.removeChild(star);
        }
      });
    };
  }, [count, repelRadius, repelStrength, isInitialized, minSize, maxSize]);

  return (
    <>
      <div
        ref={containerRef}
        className="fixed inset-0 pointer-events-none overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse at bottom, rgba(20, 20, 40, 0.1) 0%, rgba(5, 5, 15, 0) 100%)",
          willChange: "contents",
          zIndex: 0,
        }}
      />
    </>
  );
};

export default TwinklingStars;
