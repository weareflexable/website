"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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
            <Link href="https://portal.flexabledats.com/" target="_blank">
              <Button variant="primary" size="lg">
                Business Portal
              </Button>
            </Link>

            <Link href="https://marketplace.flexabledats.com/" target="_blank">
              <Button variant="secondary" size="lg">
                Marketplace
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMobileMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-accent"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12" // X icon when menu is open
                    : "M4 6h16M4 12h16M4 18h16" // Hamburger icon when menu is closed
                }
              />
            </svg>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-secondary transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-20 py-6 space-y-6">
          <div className="flex flex-col items-center space-y-6">
            <Link
              href="https://portal.flexabledats.com/"
              target="_blank"
              className="w-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Button variant="primary" size="lg" className="w-48">
                Business Portal
              </Button>
            </Link>

            <Link
              href="https://marketplace.flexabledats.com/"
              target="_blank"
              className="w-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Button variant="secondary" size="lg" className="w-48">
                Marketplace
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <hr
        className={`${
          isScrolled
            ? "border-none"
            : "border-t-[0.2px] opacity-30 border-accent"
        } `}
      />
    </nav>
  );
};

export default Navbar;
