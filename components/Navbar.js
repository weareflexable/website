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
      closeMenu();
    };
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <div className="py-4">
      <Container className="flex justify-between items-center">
        <div className="-mt-14 -ml-20">
          <Image
            src="/logos/FlexableLogoWhite.svg"
            alt="flexable-logo"
            width={200}
            height={200}
          />
        </div>
        <div className="hidden sm:block">
          <ContentSidebar toggleMenu={toggleMenu} />
        </div>
        <div className="block sm:hidden cursor-pointer mb-20">
          <Image
            onClick={toggleMenu}
            src="/menu.svg"
            alt="menu"
            width={30}
            height={30}
          />
        </div>
        {menu && width < 640 && (
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
        {menu && width < 640 && (
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
      </Container>
    </div>
  );
};

const ContentSidebar = ({ toggleMenu }) => {
  return (
    <div className="items-center flex-col sm:flex-row flex font-figtree -mt-14">
      <Link href="/#nightlife">
        <a className="mb-3 sm:mb-0 mt-4 sm:mt-0 ml-0 sm:ml-7">Nightlife</a>
      </Link>
      <Link href="/#restaurants">
        <a onClick={toggleMenu} className="mb-3 sm:mb-0 ml-0 sm:ml-7">
          Restaurants
        </a>
      </Link>
      <Link href="/#events">
        <a
          onClick={toggleMenu}
          className="mb-3 sm:mb-0 ml-0 sm:ml-7 mr-0 sm:mr-7"
        >
          Events
        </a>
      </Link>
      <Link href="/about">
        <a
          onClick={toggleMenu}
          className="mb-3 sm:mb-0 ml-0 lg:ml-0 mr-0 sm:mr-7"
        >
          About Us
        </a>
      </Link>
      <Link href="/#partner">
        <a
          onClick={toggleMenu}
          className="mb-3 sm:mb-0 ml-0 lg:ml-0 mr-0 sm:mr-7"
        >
          Partner With Us
        </a>
      </Link>
      <Button
        className="mb-3 sm:mb-0 ml-0 lg:ml-0 mr-0 sm:mr-7 text-black"
        variant={"primary"}
      >
        Sign In
      </Button>
      <Button
        className="mb-3 sm:mb-0 ml-0 lg:ml-0 mr-0 sm:mr-7 text-black"
        variant={"primary"}
      >
        Sign Up
      </Button>
    </div>
  );
};

export default Navbar;
