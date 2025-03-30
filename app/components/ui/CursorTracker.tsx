"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "@/app/utils/animations/gsap-config";

interface CursorTrackerProps {
  color?: string;
  size?: number;
  brightnessSize?: number;
  brightnessIntensity?: number;
}

const CursorTracker: React.FC<CursorTrackerProps> = ({
  color = "rgba(255, 215, 0, 0.3)",
  size = 24,
  brightnessSize = 300,
  brightnessIntensity = 0.15,
}) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorBorderRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const brightnessRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorBorder = cursorBorderRef.current;
    const follower = followerRef.current;
    const brightness = brightnessRef.current;

    if (!cursor || !cursorBorder || !follower || !brightness) return;

    document.documentElement.style.cursor = "none";

    const styleElement = document.createElement("style");
    styleElement.textContent = `
      * {
        cursor: none !important;
      }
      *:hover, a, button, [role="button"], input[type="submit"], input[type="button"], input[type="checkbox"], input[type="radio"], select, summary, .clickable, [tabindex]:not([tabindex="-1"]) {
        cursor: none !important;
      }
      /* Target specifically for cursor-pointer elements */
      [style*="cursor: pointer"], [style*="cursor:pointer"] {
        cursor: none !important;
      }
      /* Override any cursor definitions from third-party libraries */
      .cursor-pointer, .cursor-grab, .cursor-grabbing, .cursor-default, .cursor-text, .cursor-wait, .cursor-move {
        cursor: none !important;
      }
    `;
    document.head.appendChild(styleElement);

    const cursorObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "style") {
          const element = mutation.target as HTMLElement;
          if (element.style.cursor) {
            if (!element.dataset.originalCursor) {
              element.dataset.originalCursor = element.style.cursor;
            }
            element.style.setProperty("cursor", "none", "important");
          }
        }
      });
    });

    cursorObserver.observe(document.body, {
      attributes: true,
      attributeFilter: ["style"],
      subtree: true,
    });

    const intervalCheck = setInterval(() => {
      document.documentElement.style.setProperty("cursor", "none", "important");
      document.body.style.setProperty("cursor", "none", "important");

      const elementsWithCursor = document.querySelectorAll("[style*='cursor']");
      elementsWithCursor.forEach((element) => {
        if ((element as HTMLElement).style.cursor !== "none") {
          (element as HTMLElement).style.setProperty(
            "cursor",
            "none",
            "important"
          );
        }
      });

      document
        .querySelectorAll("a, button, input, select, [role='button']")
        .forEach((element) => {
          (element as HTMLElement).style.setProperty(
            "cursor",
            "none",
            "important"
          );
        });
    }, 500);

    const onMouseMove = (e: MouseEvent) => {
      if (!isVisible) {
        setIsVisible(true);
      }

      gsap.to(cursor, {
        x: e.clientX - size / 2,
        y: e.clientY - size / 2,
        duration: 0.1,
        ease: "power1.out",
      });

      gsap.to(cursorBorder, {
        x: e.clientX - size * 2,
        y: e.clientY - size * 2,
        duration: 0.15,
        ease: "power1.out",
      });

      gsap.to(follower, {
        x: e.clientX - size / 4,
        y: e.clientY - size / 4,
        duration: 0.5,
        ease: "power2.out",
      });

      gsap.to(brightness, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.8,
        ease: "power2.out",
      });
    };

    const onMouseEnter = () => {
      gsap.to(cursor, { scale: 1, opacity: 1, duration: 0.3 });
      gsap.to(cursorBorder, { scale: 1, opacity: 1, duration: 0.3 });
      gsap.to(follower, { scale: 1, opacity: 0.5, duration: 0.3 });
      gsap.to(brightness, { opacity: brightnessIntensity, duration: 0.5 });
    };

    const onMouseLeave = () => {
      gsap.to(cursor, { scale: 0, opacity: 0, duration: 0.3 });
      gsap.to(cursorBorder, { scale: 0, opacity: 0, duration: 0.3 });
      gsap.to(follower, { scale: 0, opacity: 0, duration: 0.3 });
      gsap.to(brightness, { opacity: 0, duration: 0.5 });
    };

    const onElementMouseEnter = (e: Event) => {
      const element = e.currentTarget as HTMLElement;

      gsap.to(cursor, { scale: 1.5, duration: 0.3 });
      gsap.to(cursorBorder, {
        scale: 1.5,
        borderColor: "rgba(255, 215, 0, 0.9)",
        duration: 0.3,
      });
      gsap.to(brightness, {
        opacity: brightnessIntensity * 1.5,
        scale: 1.2,
        duration: 0.3,
      });

      element.classList.add("cursor-active");
    };

    const onElementMouseLeave = (e: Event) => {
      const element = e.currentTarget as HTMLElement;

      gsap.to(cursor, { scale: 1, duration: 0.3 });
      gsap.to(cursorBorder, {
        scale: 1,
        borderColor: "rgba(255, 215, 0, 0.5)",
        duration: 0.3,
      });
      gsap.to(brightness, {
        opacity: brightnessIntensity,
        scale: 1,
        duration: 0.3,
      });

      element.classList.remove("cursor-active");
    };

    const onMouseDown = () => {
      gsap.to(cursor, { scale: 0.8, duration: 0.2 });
      gsap.to(cursorBorder, { scale: 1.2, duration: 0.2 });
      gsap.to(brightness, {
        opacity: brightnessIntensity * 2,
        scale: 1.3,
        duration: 0.2,
      });

      const ripple = document.createElement("div");
      ripple.className = "absolute rounded-full pointer-events-none";
      ripple.style.width = `${size}px`;
      ripple.style.height = `${size}px`;
      ripple.style.backgroundColor = color;
      ripple.style.opacity = "0.5";
      ripple.style.left = `${cursor.offsetLeft}px`;
      ripple.style.top = `${cursor.offsetTop}px`;
      document.body.appendChild(ripple);

      gsap.to(ripple, {
        scale: 3,
        opacity: 0,
        duration: 0.6,
        onComplete: () => {
          if (ripple.parentNode) {
            ripple.parentNode.removeChild(ripple);
          }
        },
      });
    };

    const onMouseUp = () => {
      gsap.to(cursor, { scale: 1, duration: 0.2 });
      gsap.to(cursorBorder, { scale: 1, duration: 0.2 });
      gsap.to(brightness, {
        opacity: brightnessIntensity,
        scale: 1,
        duration: 0.5,
      });
    };

    const updateClickableElements = () => {
      const clickableElements = document.querySelectorAll(
        'a, button, [role="button"], input, select, textarea, [tabindex]:not([tabindex="-1"]), label, .clickable'
      );

      clickableElements.forEach((element) => {
        element.addEventListener("mouseenter", onElementMouseEnter);
        element.addEventListener("mouseleave", onElementMouseLeave);
      });

      return () => {
        clickableElements.forEach((element) => {
          element.removeEventListener("mouseenter", onElementMouseEnter);
          element.removeEventListener("mouseleave", onElementMouseLeave);
        });
      };
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);

    const cleanupClickables = updateClickableElements();

    const observer = new MutationObserver(() => {
      cleanupClickables();
      updateClickableElements();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      cleanupClickables();
      observer.disconnect();
      cursorObserver.disconnect();
      clearInterval(intervalCheck);

      document.documentElement.style.cursor = "";
      if (styleElement.parentNode) {
        styleElement.parentNode.removeChild(styleElement);
      }
    };
  }, [color, isVisible, size, brightnessIntensity]);

  return (
    <>
      <div
        ref={brightnessRef}
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-20 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          width: `${brightnessSize}px`,
          height: `${brightnessSize}px`,
          background: `radial-gradient(circle, rgba(255, 215, 0, ${
            brightnessIntensity * 2
          }) 0%, rgba(255, 215, 0, ${brightnessIntensity}) 40%, rgba(255, 215, 0, 0) 70%)`,
          transform: "translate(-50%, -50%)",
          mixBlendMode: "soft-light",
          opacity: brightnessIntensity,
        }}
      />

      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-50 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: "rgba(255, 255, 255, 1)",
          transform: "translate(-50%, -50%)",
          mixBlendMode: "difference",
        }}
      />

      <div
        ref={cursorBorderRef}
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-40 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          width: `${size * 4}px`,
          height: `${size * 4}px`,
          //   border: `1px solid rgba(255, 215, 0, 0.5)`,
          transform: "translate(-50%, -50%)",
        }}
      />

      <div
        ref={followerRef}
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-30 ${
          isVisible ? "opacity-50" : "opacity-0"
        }`}
        style={{
          width: `${size / 2}px`,
          height: `${size / 2}px`,
          backgroundColor: color,
          transform: "translate(-50%, -50%)",
          filter: "blur(4px)",
        }}
      />
    </>
  );
};

export default CursorTracker;
