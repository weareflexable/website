import useWindowSize from "../hooks/useWindowSize";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import Container from "./Container";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const { width } = useWindowSize();
  const toggleMenu = () => setMenu(!menu);
  const closeMenu = () => setMenu(false);

  const refMenu = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (refMenu.current) {
        if (refMenu.current.contains(e.target)) {
          return;
        }
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const closeBurger = () => {
    closeMenu();
  };

  return (
    <div className="py-4  lg:-mt-24 -mt-12">
      <div className="flex justify-between items-center">
        <div className="lg:block hidden mt-12 -ml-2">
          <Image
            src="/logos/logo.svg"
            alt="flexable-logo"
            width={200}
            height={200}
          />
        </div>
        <div className="-ml-4 lg:hidden mt-2 block z-50">
          <Image
            src="/logos/logo.svg"
            alt="flexable-logo"
            width={150}
            height={150}
          />
        </div>
        <div className="lg:block hidden">
          <ContentSidebar toggleMenu={toggleMenu} />
        </div>
        <div className="block lg:hidden lg:mb-0 mb-4 cursor-pointer z-50 mr-8">
          <Image
            onClick={toggleMenu}
            src="/menu.svg"
            alt="menu"
            width={30}
            height={30}
          />
        </div>
        {menu && width < 1024 && (
          <Fade
            duration={300}
            delay={100}
            className="rounded-b-3xl absolute py-20 top-0 flex justify-center items-center  left-0 right-0 bg-[#000000E6] z-20"
          >
            <div ref={refMenu}>
              <ContentSidebar toggleMenu={toggleMenu} />
            </div>
          </Fade>
        )}
        {/* <Logo /> */}
        {menu && width < 1024 && (
          <Fade
            duration={300}
            delay={100}
            className="rounded-b-3xl absolute py-20 top-0 flex justify-center items-center  left-0 right-0 bg-[#000000E6] z-20"
          >
            <div ref={refMenu}>
              <ContentSidebar toggleMenu={toggleMenu} />
            </div>
          </Fade>
        )}
      </div>
    </div>
  );
};

const ContentSidebar = ({ toggleMenu }) => {
  return (
    <div className="items-center flex-col lg:flex-row flex font-figtree">
      <Link href="#nightlife" scroll={false}>
        <a className="mb-3 lg:mb-0 mt-4 lg:mt-0 ml-0 lg:ml-7">Nightlife</a>
      </Link>
      <Link href="#restaurants" scroll={false}>
        <a onClick={toggleMenu} className="mb-3 lg:mb-0 ml-0 lg:ml-7">
          Restaurants
        </a>
      </Link>
      <Link href="#events" scroll={false}>
        <a
          onClick={toggleMenu}
          className="mb-3 lg:mb-0 ml-0 lg:ml-7 mr-0 lg:mr-7"
        >
          Events
        </a>
      </Link>
      <Link href="#about" scroll={false}>
        <a
          onClick={toggleMenu}
          className="mb-3 lg:mb-0 ml-0 lg:ml-0 mr-0 lg:mr-7"
        >
          About Us
        </a>
      </Link>
      <Link href="#partner" scroll={false}>
        <a
          onClick={toggleMenu}
          className="mb-3 lg:mb-0 ml-0 lg:ml-0 mr-0 lg:mr-7"
        >
          Partner With Us
        </a>
      </Link>
      <Button
        className="mb-3 lg:mb-0 ml-0 lg:ml-0 mr-0 lg:mr-7 text-black"
        variant={"primary"}
        isLink
        href={"https://marketplace.flexabledats.com/"}
      >
        Sign In
      </Button>
      <Button
        className="mb-3 lg:mb-0 ml-0 lg:ml-0 mr-0 lg:mr-7 text-black"
        variant={"primary"}
        isLink
        href={"https://marketplace.flexabledats.com/"}
      >
        Sign Up
      </Button>
    </div>
  );
};

export default Navbar;
