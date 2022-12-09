import React from "react";
import Link from "next/link";
import Button from "./Button";
import Container from "./Container";

const Navbar = () => {
  return (
    <div className="py-4">
      <Container className="flex justify-between items-center">
        {/* <Logo /> */}
        <div>
          <h1 className="font-pacifico text-3xl">Flexable</h1>
        </div>
        <div className="items-center hidden sm:flex ">
          <Link href="/">
            <a className="mr-7">Nightlife</a>
          </Link>
          <Link href="/">
            <a className="mr-7">Restaurants</a>
          </Link>
          <Link href="/">
            <a className="mr-7">Events</a>
          </Link>
          <Link href="/">
            <a className="mr-7">About Us</a>
          </Link>
          <Link href="/">
            <a className="mr-7">Partner With Us</a>
          </Link>
          <Button className="mr-7 text-black" variant={"primary"}>
            Sign In
          </Button>
          <Button className="mr-7 text-black" variant={"primary"}>
            Sign Up
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
