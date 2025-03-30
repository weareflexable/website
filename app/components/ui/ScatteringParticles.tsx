"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "@/app/utils/animations/gsap-config";

interface ScatteringParticleProps {
  count?: number;
  colors?: string[];
  minSize?: number;
  maxSize?: number;
  repelRadius?: number;
  repelStrength?: number;
}

const ScatteringParticles: React.FC<ScatteringParticleProps> = ({
  count = 15,
  colors = ["#805AD5", "#FFD700", "#9B59B6", "#F0B90B"],
  minSize = 5,
  maxSize = 25,
  repelRadius = 250,
  repelStrength = 20,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement[]>([]);
  const particlesDataRef = useRef<
    Array<{
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      size: number;
      color: string;
      speed: number;
      rotation: number;
    }>
  >([]);

  const cursorPosition = useRef({ x: -1000, y: -1000 });
  const viewportSize = useRef({ width: 0, height: 0 });
  const animationFrameRef = useRef<number | null>(null);
  const lastFrameTimeRef = useRef<number>(0);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const createParticlesInEffect = () => {
      const container = containerRef.current;
      if (!container) return;

      particlesRef.current.forEach((particle) => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      });

      particlesRef.current = [];
      particlesDataRef.current = [];

      viewportSize.current = {
        width: window.innerWidth,
        height: window.innerHeight,
      };

      const fragment = document.createDocumentFragment();

      for (let i = 0; i < count; i++) {
        const particle = document.createElement("div");

        const size = minSize + Math.random() * (maxSize - minSize);
        const color = colors[Math.floor(Math.random() * colors.length)];
        const x = Math.random() * viewportSize.current.width;
        const y = Math.random() * viewportSize.current.height;

        particle.className = "absolute rounded-md pointer-events-none";
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.backgroundColor = color;
        particle.style.opacity = (0.2 + Math.random() * 0.3).toString();
        particle.style.willChange = "transform";

        if (size > maxSize * 0.6) {
          particle.style.boxShadow = `0 0 ${size / 3}px ${color.replace(
            ")",
            ", 0.2)"
          )}`;
        }

        if (Math.random() > 0.6) {
          particle.style.borderRadius = "50%";
        } else {
          const rotation = Math.random() * 360;
          particle.style.transform = `rotate(${rotation}deg)`;
        }

        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;

        fragment.appendChild(particle);

        particlesRef.current.push(particle);

        particlesDataRef.current.push({
          x,
          y,
          baseX: x,
          baseY: y,
          size,
          color,
          speed: 0.5 + Math.random() * 0.8,
          rotation: Math.random() * 360,
        });
      }

      container.appendChild(fragment);

      setIsInitialized(true);
    };

    const animateParticlesInEffect = (timestamp: number) => {
      const particles = particlesRef.current;
      const particlesData = particlesDataRef.current;

      if (particles.length === 0 || !isInitialized) {
        animationFrameRef.current = requestAnimationFrame(
          animateParticlesInEffect
        );
        return;
      }

      const delta = timestamp - lastFrameTimeRef.current;
      if (delta > 16) {
        lastFrameTimeRef.current = timestamp;

        particles.forEach((particle, index) => {
          const data = particlesData[index];

          const dx = cursorPosition.current.x - data.x;
          const dy = cursorPosition.current.y - data.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < repelRadius) {
            const force = (repelRadius - distance) / repelRadius;

            const dirX = distance === 0 ? Math.random() - 0.5 : -dx / distance;
            const dirY = distance === 0 ? Math.random() - 0.5 : -dy / distance;

            const moveX = dirX * force * repelStrength * data.speed;
            const moveY = dirY * force * repelStrength * data.speed;

            data.x += moveX;
            data.y += moveY;

            if (particle.style.borderRadius !== "50%") {
              const angle = Math.atan2(dy, dx) * (180 / Math.PI);
              gsap.to(particle, {
                rotation: data.rotation + angle * 0.2,
                duration: 0.3,
                ease: "power1.out",
                overwrite: "auto",
              });
            }
          } else {
            data.x += (data.baseX - data.x) * 0.03;
            data.y += (data.baseY - data.y) * 0.03;

            data.x += Math.sin(timestamp * 0.0005 * data.speed) * 0.2;
            data.y += Math.cos(timestamp * 0.0007 * data.speed) * 0.2;

            if (particle.style.borderRadius !== "50%") {
              gsap.to(particle, {
                rotation: data.rotation,
                duration: 1.5,
                ease: "power1.out",
                overwrite: "auto",
              });
            }
          }

          const padding = Math.max(20, data.size);
          data.x = Math.max(
            padding,
            Math.min(viewportSize.current.width - padding, data.x)
          );
          data.y = Math.max(
            padding,
            Math.min(viewportSize.current.height - padding, data.y)
          );

          particle.style.transform =
            particle.style.borderRadius === "50%"
              ? `translate(${data.x}px, ${data.y}px)`
              : `translate(${data.x}px, ${data.y}px) rotate(${data.rotation}deg)`;
        });
      }

      animationFrameRef.current = requestAnimationFrame(
        animateParticlesInEffect
      );
    };

    createParticlesInEffect();

    const handleMouseMove = (e: MouseEvent) => {
      cursorPosition.current = { x: e.clientX, y: e.clientY };
    };

    const handleResize = () => {
      if (
        Math.abs(viewportSize.current.width - window.innerWidth) > 100 ||
        Math.abs(viewportSize.current.height - window.innerHeight) > 100
      ) {
        viewportSize.current = {
          width: window.innerWidth,
          height: window.innerHeight,
        };

        particlesDataRef.current.forEach((data) => {
          data.baseX = Math.random() * viewportSize.current.width;
          data.baseY = Math.random() * viewportSize.current.height;
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    if (isInitialized) {
      animationFrameRef.current = requestAnimationFrame(
        animateParticlesInEffect
      );
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      particlesRef.current.forEach((particle) => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      });
    };
  }, [
    count,
    repelRadius,
    repelStrength,
    isInitialized,
    colors,
    minSize,
    maxSize,
  ]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden -z-20"
      style={{ willChange: "contents" }}
    />
  );
};

export default ScatteringParticles;
