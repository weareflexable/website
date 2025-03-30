// app/utils/animations/gsap-config.ts
"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
}

export { gsap, ScrollTrigger };

// Helper functions for common animations
export const fadeIn = (
  element: HTMLElement | null,
  duration: number = 0.6,
  delay: number = 0,
  ease: string = "power2.out"
) => {
  if (!element) return;

  return gsap.fromTo(
    element,
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      duration,
      delay,
      ease,
    }
  );
};

export const staggerElements = (
  elements: HTMLElement[] | NodeListOf<Element> | null,
  staggerTime: number = 0.1,
  duration: number = 0.6,
  ease: string = "power2.out"
) => {
  if (!elements || elements.length === 0) return;

  return gsap.fromTo(
    elements,
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      stagger: staggerTime,
      duration,
      ease,
    }
  );
};
