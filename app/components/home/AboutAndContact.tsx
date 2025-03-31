"use client";
import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import {
  useTestimonialCarousel,
  useTextEffectAnimation,
  useTiltOnHover,
} from "@/app/utils/animations/useAnimations";

const testimonials = [
  {
    quote:
      "Flexable has created passive income for my venue where I didn't know it existed before",
    author: "Club Owner",
    image: "/home/flexableCardBg.svg",
  },
  {
    quote:
      "We increased our revenue by 30% with minimal effort. The digital access tokens are brilliant!",
    author: "Restaurant Manager",
    image: "/home/flexableCardBg.svg",
  },
  {
    quote:
      "Our customers love skipping the line, and we love the additional revenue stream. Win-win!",
    author: "Nightclub Director",
    image: "/home/flexableCardBg.svg",
  },
];

const AboutAndContact = () => {
  const testimonialCarouselRef = useTestimonialCarousel(3);

  const textAnimationRef = useTextEffectAnimation();

  const buttonsTiltRef = useTiltOnHover(".tilt-element", 5);

  return (
    <div className="container mx-auto py-10 lg:py-28">
      <div ref={textAnimationRef}>
        <h1 className="text-center text-white text-4xl sm:text-[55px] animate-text">
          Why Flexable?
        </h1>
        <h1 className="text-center text-white text-xl sm:text-[44px] py-4 sm:py-12 animate-text">
          <span className="text-accent inline-block">Businesses - </span>Turn
          demand into revenue with ZERO upfront cost.
        </h1>
        <h1 className="text-center text-white text-xl sm:text-[44px] animate-text">
          <span className="text-accent inline-block">Consumers -</span> No wait
          times. No scams. Instant access.
        </h1>

        <div
          ref={buttonsTiltRef}
          className="md:flex items-center justify-center my-20 md:space-x-12 text-center"
        >
          <div className="tilt-element">
            <Link href="https://portal.flexabledats.com/" target="_blank">
              <Button
                variant="secondary"
                size="lg"
                className="transition-all duration-300 hover:shadow-glow"
              >
                Business Sign Up
              </Button>
            </Link>
          </div>
          <div className="mt-8 sm:mt-0 tilt-element">
            <Link href="https://marketplace.flexabledats.com/" target="_blank">
              <Button
                variant="secondary"
                size="lg"
                className="transition-all duration-300 hover:shadow-glow"
              >
                Consumer Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Testimonial Carousel */}
      <div
        ref={testimonialCarouselRef}
        className="flex justify-center items-center my-20 mx-4 sm:mx-0 relative h-[370px]"
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="testimonial-card absolute w-full max-w-[555px] h-[358px] rounded-4xl overflow-hidden"
          >
            <div className="absolute inset-0 z-0">
              <Image
                src={testimonial.image}
                alt="Testimonial Background"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-background/30 to-background/40"></div>
            </div>

            <div className="relative z-10 h-full flex flex-col justify-between px-8 md:px-16 py-12 md:p-20">
              <div className="flex-1 flex items-center justify-center">
                <h2 className="text-2xl md:text-3xl font-normal text-white leading-10 text-center">
                  &ldquo;{testimonial.quote}&rdquo;
                </h2>
              </div>
              {/* {testimonial.author && (
                <div className="text-white text-xl md:text-3xl text-right mt-6">
                  <p>- {testimonial.author}</p>
                </div>
              )} */}
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-[555px] mx-auto pt-20">
        <h2 className="text-3xl md:text-4xl text-white text-center mb-8">
          Contact Us
        </h2>
        <form className="space-y-6 mx-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="firstName" className="text-white text-sm">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="w-full bg-background/30 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:border-accent"
                placeholder="Enter your first name"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="lastName" className="text-white text-sm">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                className="w-full bg-background/30 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:border-accent"
                placeholder="Enter your last name"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-white text-sm">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full bg-background/30 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:border-accent"
              placeholder="Enter your email"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="text-white text-sm">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full bg-background/30 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:border-accent"
              placeholder="Enter your phone number"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-white text-sm">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full bg-background/30 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:border-accent resize-none"
              placeholder="Enter your message"
            ></textarea>
          </div>

          <div className="flex justify-center tilt-element">
            <Button
              type="submit"
              variant="primary"
              className="hover:shadow-glow transition-all duration-300 hover:shadow-glow"
            >
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AboutAndContact;
