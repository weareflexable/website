// app/utils/animations/useGsapAnimations.ts
"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "./gsap-config";

export const useFadeIn = (delay = 0) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;

    gsap.fromTo(
      element,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay,
        ease: "power3.out",
      }
    );

    return () => {
      gsap.killTweensOf(element);
    };
  }, [delay]);

  return elementRef;
};

export const useScrollStagger = (childSelector: string, staggerDelay = 0.1) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const children = container.querySelectorAll(childSelector);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 75%",
      },
    });

    tl.fromTo(
      children,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: staggerDelay,
        ease: "power2.out",
      }
    );

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === container) {
          trigger.kill();
        }
      });
    };
  }, [childSelector, staggerDelay]);

  return containerRef;
};

export const useParallaxScroll = (direction = "up", intensity = 30) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;
    const yDirection = direction === "up" ? intensity : -intensity;

    gsap.fromTo(
      element,
      { y: 0 },
      {
        y: yDirection,
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [direction, intensity]);

  return elementRef;
};

export const useCardAnimations = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const cards = container.querySelectorAll(".card-wrapper");

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 80%",
        end: "top 30%",
        toggleActions: "play none reverse none",
      },
    });

    timeline.fromTo(
      cards,
      {
        y: 50,
        opacity: 0,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.35,
        ease: "power2.out",
      }
    );

    return () => {
      timeline.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === container) {
          trigger.kill();
        }
      });
    };
  }, []);

  return containerRef;
};

export const useLeftRightAnimations = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const sections = container.querySelectorAll(".animated-section");

    sections.forEach((section) => {
      const leftPart = section.querySelector(".from-left");
      const rightPart = section.querySelector(".from-right");

      if (leftPart) {
        gsap.fromTo(
          leftPart,
          {
            x: -100,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 75%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      if (rightPart) {
        gsap.fromTo(
          rightPart,
          {
            x: 100,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 75%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (
          trigger.vars.trigger &&
          container.contains(trigger.vars.trigger as Element)
        ) {
          trigger.kill();
        }
      });
    };
  }, []);

  return containerRef;
};

export const useTiltOnHover = (selector = ".tilt-element", intensity = 10) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const elements = container.querySelectorAll(selector);

    const cleanupFunctions: (() => void)[] = [];

    elements.forEach((element) => {
      const el = element as HTMLElement;

      const handleMouseMove = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect();

        const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;

        gsap.to(el, {
          rotationY: x * intensity,
          rotationX: -y * intensity,
          transformPerspective: 800,
          ease: "power2.out",
          duration: 0.4,
          overwrite: true,
        });
      };

      const handleMouseLeave = () => {
        gsap.to(el, {
          rotationY: 0,
          rotationX: 0,
          transformPerspective: 800,
          ease: "elastic.out(1, 0.3)",
          duration: 1.2,
        });
      };

      el.addEventListener("mousemove", handleMouseMove);
      el.addEventListener("mouseleave", handleMouseLeave);

      cleanupFunctions.push(() => {
        el.removeEventListener("mousemove", handleMouseMove);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    });

    return () => {
      cleanupFunctions.forEach((cleanup) => cleanup());
    };
  }, [selector, intensity]);

  return containerRef;
};

export const useLineReveal = () => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;

    gsap.fromTo(
      element,
      {
        width: 0,
        opacity: 0.5,
        filter: "blur(2px)",
      },
      {
        width: "50%",
        opacity: 1,
        filter: "blur(0px)",
        duration: 1.2,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: element.parentElement,
          start: "top bottom",
          toggleActions: "play none none none",
        },
        onComplete: () => {
          createShiningDot(element);
        },
      }
    );

    const createShiningDot = (lineElement: HTMLElement) => {
      const dot = document.createElement("div");
      dot.className = "shining-dot";

      Object.assign(dot.style, {
        position: "absolute",
        width: "6px",
        height: "6px",
        borderRadius: "50%",
        backgroundColor: "#FFD700",
        boxShadow:
          "0 0 8px 4px rgba(255, 215, 0, 0.8), 0 0 12px 6px rgba(255, 255, 255, 0.6)",
        top: "-1.5px",
        left: "0",
        pointerEvents: "none",
        zIndex: "10",
        opacity: "0",
      });

      lineElement.appendChild(dot);

      const shineTimeline = gsap.timeline({
        repeat: -1,
        repeatDelay: 2,
      });

      shineTimeline
        .to(dot, { opacity: 0, duration: 0.01 })
        .set(dot, { left: "0px" })
        .to(dot, { opacity: 1, duration: 0.2 })
        .to(dot, {
          left: lineElement.offsetWidth + "px",
          duration: 1.5,
          ease: "power1.inOut",
        })
        .to(dot, { opacity: 0, duration: 0.2 });

      return shineTimeline;
    };

    const pulseTimeline = gsap.timeline({
      repeat: -1,
      repeatDelay: 4,
      scrollTrigger: {
        trigger: element.parentElement,
        start: "top bottom",
      },
    });

    pulseTimeline
      .to(element, {
        boxShadow: "0 0 6px 1px rgba(255, 215, 0, 0.5)",
        duration: 1.5,
        ease: "sine.inOut",
      })
      .to(element, {
        boxShadow: "0 0 0px 0px rgba(255, 215, 0, 0)",
        duration: 1.5,
        ease: "sine.inOut",
      });

    return () => {
      pulseTimeline.kill();
      gsap.killTweensOf(element);
      const dots = element.querySelectorAll(".shining-dot");
      dots.forEach((dot) => dot.remove());

      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === element.parentElement) {
          trigger.kill();
        }
      });
    };
  }, []);

  return elementRef;
};

export const useNumberCardsAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const cards = container.querySelectorAll(".number-card-container");
    const arrows = container.querySelectorAll(".arrow-container");

    const cardsTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top bottom",
        toggleActions: "play none none none",
      },
    });

    cardsTimeline.fromTo(
      cards,
      {
        y: 60,
        opacity: 0,
        scale: 0.9,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.3,
        ease: "back.out(1.5)",
        onComplete: () => {
          cards.forEach((card, index) => {
            const duration = 2 + Math.random() * 1.5;
            const delay = Math.random() * 0.5;
            const distance = -5 - Math.random() * 5;

            if (index % 3 === 0) {
              gsap.to(card, {
                y: distance,
                duration: duration,
                delay: delay,
                ease: "sine.inOut",
                repeat: -1,
                yoyo: true,
                yoyoEase: "sine.inOut",
              });
            } else if (index % 3 === 1) {
              gsap.to(card, {
                y: distance * 0.8,
                rotation: 0.8,
                duration: duration + 0.4,
                delay: delay,
                ease: "sine.inOut",
                repeat: -1,
                yoyo: true,
                yoyoEase: "sine.inOut",
                transformOrigin: "center center",
              });
            } else {
              gsap.to(card, {
                y: distance * 1.2,
                scale: 1.03,
                duration: duration - 0.3,
                delay: delay,
                ease: "sine.inOut",
                repeat: -1,
                yoyo: true,
                yoyoEase: "sine.inOut",
              });
            }
          });
        },
      }
    );

    const arrowsTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top bottom",
      },
      delay: cards.length * 0.3 + 0.4,
    });

    arrowsTimeline.fromTo(
      arrows,
      {
        opacity: 0,
        x: -20,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.out",
        onComplete: () => {
          const arrowsArray = Array.from(arrows);
          const arrowPulseTimeline = gsap.timeline({
            repeat: -1,
            repeatDelay: 1,
          });

          arrowsArray.forEach((arrow, index) => {
            const img = arrow.querySelector("img");
            if (img) {
              const singleArrowTimeline = gsap.timeline();

              singleArrowTimeline
                .to(img, {
                  filter: "brightness(1.5)",
                  duration: 0.8,
                  ease: "sine.inOut",
                })
                .to(img, {
                  filter: "brightness(1)",
                  duration: 0.8,
                  ease: "sine.inOut",
                });

              arrowPulseTimeline.add(singleArrowTimeline, index * 0.7);
            }
          });
        },
      }
    );

    return () => {
      cardsTimeline.kill();
      arrowsTimeline.kill();

      gsap.killTweensOf(cards);
      gsap.killTweensOf(arrows);

      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === container) {
          trigger.kill();
        }
      });
    };
  }, []);

  return containerRef;
};

export const useAccessAnimations = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const title = container.querySelector(".access-title");
    const sections = container.querySelectorAll(".access-section");
    const bullets = container.querySelectorAll(".access-bullet");

    const titleTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top bottom",
        toggleActions: "play none none none",
      },
    });

    if (title) {
      titleTimeline.fromTo(
        title,
        {
          opacity: 0,
          y: 40,
          filter: "blur(4px)",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "power2.out",
        }
      );
    }

    const sectionsTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top bottom",
        toggleActions: "play none none none",
      },
      delay: 0.3,
    });

    sectionsTimeline.fromTo(
      sections,
      {
        opacity: 0,
        x: -30,
        filter: "blur(2px)",
      },
      {
        opacity: 1,
        x: 0,
        filter: "blur(0px)",
        duration: 0.8,
        stagger: 0.25,
        ease: "power2.out",
      }
    );

    const bulletsTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top bottom",
      },
      delay: 0.6,
    });

    bulletsTimeline.fromTo(
      bullets,
      {
        opacity: 0,
        x: 20,
        scale: 0.8,
      },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.4)",
        onComplete: () => {
          bullets.forEach((bullet) => {
            const bulletPoint = bullet.querySelector(".bullet-point");
            if (bulletPoint) {
              gsap.to(bulletPoint, {
                color: "#ffd700",
                duration: 0.3,
                repeat: 1,
                yoyo: true,
                ease: "power1.inOut",
              });
            }
          });
        },
      }
    );

    const background = container.querySelector(".access-bg");
    if (background) {
      gsap.to(background, {
        y: "10%",
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    return () => {
      titleTimeline.kill();
      sectionsTimeline.kill();
      bulletsTimeline.kill();

      if (title) gsap.killTweensOf(title);
      gsap.killTweensOf(sections);
      gsap.killTweensOf(bullets);
      if (background) gsap.killTweensOf(background);

      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === container) {
          trigger.kill();
        }
      });
    };
  }, []);

  return containerRef;
};

export const useTestimonialCarousel = (autoplaySpeed = 5) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const cards = container.querySelectorAll(".testimonial-card");

    if (cards.length <= 1) return;

    gsap.set(cards, {
      opacity: 0,
      display: "none",
      scale: 0.9,
      rotationX: -5,
      x: -80,
      transformOrigin: "center center",
    });

    gsap.set(cards[0], {
      opacity: 1,
      display: "block",
      scale: 1,
      rotationX: 0,
      x: 0,
    });

    let currentIndex = 0;
    let nextIndex = 0;
    let timeline: gsap.core.Timeline;

    const showNextCard = () => {
      if (timeline) timeline.kill();

      nextIndex = (currentIndex + 1) % cards.length;

      const slideDirection = nextIndex % 2 === 0 ? 80 : -80;

      timeline = gsap.timeline({
        onComplete: () => {
          currentIndex = nextIndex;
        },
      });

      timeline.to(cards[currentIndex], {
        opacity: 0,
        scale: 0.9,
        rotationX: 5,
        x: -slideDirection,
        duration: 1,
        ease: "power2.inOut",
      });

      timeline.set(
        cards[nextIndex],
        {
          display: "block",
          opacity: 0,
          scale: 0.9,
          rotationX: -5,
          x: slideDirection,
        },
        "<0.5"
      );

      timeline.to(
        cards[nextIndex],
        {
          opacity: 1,
          scale: 1,
          rotationX: 0,
          x: 0,
          duration: 1,
          ease: "power2.out",
        },
        "<0.5"
      );

      timeline.set(cards[currentIndex], { display: "none" });
    };

    const goToCard = (index: number) => {
      if (index === currentIndex) return;

      if (timeline) timeline.kill();

      const oldIndex = currentIndex;
      nextIndex = index;

      const slideDirection = index > currentIndex ? 80 : -80;

      timeline = gsap.timeline({
        onComplete: () => {
          currentIndex = nextIndex;
        },
      });

      timeline.to(cards[oldIndex], {
        opacity: 0,
        scale: 0.9,
        x: -slideDirection,
        rotationX: 5,
        duration: 0.8,
        ease: "power2.inOut",
      });

      timeline.set(
        cards[nextIndex],
        {
          display: "block",
          opacity: 0,
          scale: 0.9,
          rotationX: -5,
          x: slideDirection,
        },
        "<0.4"
      );

      timeline.to(
        cards[nextIndex],
        {
          opacity: 1,
          scale: 1,
          rotationX: 0,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "<0.4"
      );

      timeline.set(cards[oldIndex], { display: "none" });
    };

    const createNavDots = () => {
      const dotsContainer = document.createElement("div");
      dotsContainer.className =
        "dots-container absolute bottom-6 left-0 right-0 flex justify-center space-x-2";
      container.appendChild(dotsContainer);

      for (let i = 0; i < cards.length; i++) {
        const dot = document.createElement("button");
        dot.className = `nav-dot w-2 h-2 rounded-full transition-all duration-300 ${
          i === 0 ? "bg-accent scale-125" : "bg-white/50"
        }`;
        dot.setAttribute("aria-label", `View testimonial ${i + 1}`);

        dot.addEventListener("click", () => {
          if (i !== currentIndex) {
            clearInterval(intervalId);
            goToCard(i);
            intervalId = setInterval(showNextCard, autoplaySpeed * 1000);
          }
        });

        dotsContainer.appendChild(dot);
      }

      return dotsContainer;
    };

    const dotsContainer = createNavDots();

    const updateActiveDot = () => {
      const dots = dotsContainer.querySelectorAll(".nav-dot");
      dots.forEach((dot, i) => {
        if (i === currentIndex) {
          dot.classList.add("bg-accent", "scale-125");
          dot.classList.remove("bg-white/50");
        } else {
          dot.classList.remove("bg-accent", "scale-125");
          dot.classList.add("bg-white/50");
        }
      });
    };

    gsap.ticker.add(updateActiveDot);

    let intervalId = setInterval(showNextCard, autoplaySpeed * 1000);

    const createNavButtons = () => {
      const prevBtn = document.createElement("button");
      prevBtn.className =
        "absolute left-4 top-1/2 -translate-y-1/2 bg-background/20 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center hover:bg-accent/30 transition-colors z-20";
      prevBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white"><polyline points="15 18 9 12 15 6"></polyline></svg>`;
      prevBtn.setAttribute("aria-label", "Previous testimonial");

      const nextBtn = document.createElement("button");
      nextBtn.className =
        "absolute right-4 top-1/2 -translate-y-1/2 bg-background/20 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center hover:bg-accent/30 transition-colors z-20";
      nextBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white"><polyline points="9 18 15 12 9 6"></polyline></svg>`;
      nextBtn.setAttribute("aria-label", "Next testimonial");

      prevBtn.addEventListener("click", () => {
        clearInterval(intervalId);
        goToCard((currentIndex - 1 + cards.length) % cards.length);
        intervalId = setInterval(showNextCard, autoplaySpeed * 1000);
      });

      nextBtn.addEventListener("click", () => {
        clearInterval(intervalId);
        goToCard((currentIndex + 1) % cards.length);
        intervalId = setInterval(showNextCard, autoplaySpeed * 1000);
      });

      container.appendChild(prevBtn);
      container.appendChild(nextBtn);

      return [prevBtn, nextBtn];
    };

    const navButtons = createNavButtons();

    let startX: number;
    let endX: number;

    container.addEventListener(
      "touchstart",
      (e) => {
        startX = e.touches[0].clientX;
        clearInterval(intervalId);
      },
      { passive: true }
    );

    container.addEventListener(
      "touchmove",
      (e) => {
        endX = e.touches[0].clientX;
      },
      { passive: true }
    );

    container.addEventListener(
      "touchend",
      () => {
        const threshold = 50;
        if (startX - endX > threshold) {
          goToCard((currentIndex + 1) % cards.length);
        } else if (endX - startX > threshold) {
          goToCard((currentIndex - 1 + cards.length) % cards.length);
        }

        intervalId = setInterval(showNextCard, autoplaySpeed * 1000);
      },
      { passive: true }
    );

    container.addEventListener("mouseenter", () => {
      clearInterval(intervalId);
    });

    container.addEventListener("mouseleave", () => {
      clearInterval(intervalId);
      intervalId = setInterval(showNextCard, autoplaySpeed * 1000);
    });

    return () => {
      clearInterval(intervalId);
      gsap.ticker.remove(updateActiveDot);

      if (dotsContainer.parentNode) {
        dotsContainer.parentNode.removeChild(dotsContainer);
      }

      navButtons.forEach((btn) => {
        if (btn.parentNode) {
          btn.parentNode.removeChild(btn);
        }
      });

      if (timeline) timeline.kill();
      gsap.set(cards, { clearProps: "all" });
    };
  }, [autoplaySpeed]);

  return containerRef;
};

export const useTextEffectAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const headings = container.querySelectorAll(".animate-text");
    const accentElements = container.querySelectorAll(".text-accent");

    gsap.set(container, { position: "relative", zIndex: 5 });

    const headingTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top bottom",
        toggleActions: "play none none none",
      },
    });

    headings.forEach((heading, index) => {
      const element = heading as HTMLElement;

      headingTimeline.fromTo(
        element,
        {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: index * 0.3,
          ease: "power2.out",
        }
      );

      headingTimeline.fromTo(
        element,
        {
          textShadow: "0 0 0 rgba(255,215,0,0)",
        },
        {
          textShadow: "0 0 10px rgba(255,215,0,0.5)",
          duration: 0.8,
          repeat: 1,
          yoyo: true,
          ease: "power2.inOut",
        },
        "-=0.2"
      );
    });

    const accentTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top bottom",
      },
    });

    accentElements.forEach((element, index) => {
      accentTimeline.fromTo(
        element,
        {
          scale: 0.8,
          opacity: 0.7,
          textShadow: "0 0 0 rgba(255,215,0,0)",
        },
        {
          scale: 1.1,
          opacity: 1,
          textShadow: "0 0 15px rgba(255,215,0,0.8)",
          duration: 0.7,
          delay: 0.3 + index * 0.2,
          ease: "back.out(1.7)",
        }
      );

      accentTimeline.to(element, {
        scale: 1,
        textShadow: "0 0 8px rgba(255,215,0,0.5)",
        duration: 0.5,
        ease: "power1.out",
      });

      gsap.to(element, {
        textShadow: "0 0 8px rgba(255,215,0,0.7)",
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "sine.inOut",
        delay: Math.random() * 0.5,
      });
    });

    return () => {
      headingTimeline.kill();
      accentTimeline.kill();

      gsap.killTweensOf(headings);
      gsap.killTweensOf(accentElements);

      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === container) {
          trigger.kill();
        }
      });
    };
  }, []);

  return containerRef;
};
