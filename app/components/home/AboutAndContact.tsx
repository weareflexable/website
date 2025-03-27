import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";

const AboutAndContact = () => {
  return (
    <div className="container mx-auto py-10 lg:py-28">
      <div className="">
        <h1 className="text-center text-white text-4xl sm:text-[55px]">
          Why Flexable?
        </h1>
        <h1 className="text-center text-white text-xl sm:text-[44px] py-4 sm:py-12">
          <span className="text-accent inline-block">Businesses - </span>Turn
          demand into revenue with ZERO upfront cost.
        </h1>
        <h1 className="text-center text-white text-xl sm:text-[44px]">
          <span className="text-accent inline-block">Consumers -</span> No wait
          times. No scams. Instant access.
        </h1>

        <div className="md:flex items-center justify-center my-20 md:space-x-6 text-center">
          <div className="">
            {" "}
            <Button variant="secondary" size="lg">
              Business Sign Up
            </Button>
          </div>
          <div className="mt-8 sm:mt-0">
            <Button variant="secondary" size="lg">
              Consumer Sign Up
            </Button>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center my-20 mx-4 sm:mx-0">
        <div className="relative max-w-[555px] h-[358px] rounded-4xl overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/home/flexableCardBg.svg"
              alt="Testimonial Background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/30 to-background/40"></div>
          </div>

          <div className="relative z-10 h-full flex flex-col justify-between px-8 md:px-16 py-12 md:p-20">
            <div className="flex-1 flex items- justify-start">
              <h2 className="text-2xl md:text-3xl font-normal text-white leading-10 text-left">
                &ldquo;Flexable has created passive income for my venue where I
                didn&apos;t know it existed before&rdquo;
              </h2>
            </div>
            <div className="text-white text-xl md:text-3xl text-left">
              <p>-Owner of XXX!</p>
            </div>
          </div>
        </div>
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

          <Button type="submit" variant="primary" className="">
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AboutAndContact;
