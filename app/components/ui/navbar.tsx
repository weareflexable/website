"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-secondary shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="relative w-32 h-16">
            <Image
              src="/home/logo.svg"
              alt="Logo"
              fill
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {/* <Link
              href="/"
              className="text-white hover:text-accent transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-accent transition-colors"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-white hover:text-accent transition-colors"
            >
              Services
            </Link> */}
            <Button variant="primary" size="lg">
              Business Portal
            </Button>
            <Button variant="secondary" size="lg">
              Marketplace
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </Button>
        </div>
      </div>
      <hr
        className={`${
          isScrolled ? "border-none" : "border-t-[0.5px] border-accent"
        } `}
      />
    </nav>
  );
};

export default Navbar;
