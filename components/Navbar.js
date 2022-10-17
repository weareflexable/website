import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  return (
    <nav class="bg-white px-2 sm:px-4 py-5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 ">
      <div class="container flex flex-wrap justify-between items-center mx-auto">
        <a href="http://localhost:3000//" class="flex items-center">
          <img src="/logo1.png" class="mr-3 h-6 sm:h-9" alt="Flexable Logo" />
          <span class="self-center text-4xl italic font-semibold whitespace-nowrap dark:text-white">
            Flexable
          </span>
        </a>
        <div class="flex md:order-2  items-center">
          <a
            href="#"
            class="text-gray-800 text-2xl  font-semibold hover:text-purple-600 mr-4"
          >
            Login
          </a>
          <a
            href="#"
            class="text-gray-800 text-2xl  font-semibold border px-4 py-1 rounded-full hover:text-purple-600 hover:border-purple-600"
          >
            Register
          </a>
        </div>
        <div
          class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
              <Link to="home" smooth={true} class="cursor-pointer" duration={500}>
                <h1 className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                    HOME
                </h1>
              </Link>
            </li>
         
            <li>
              <Link to="nightlife" smooth={true} class="cursor-pointer" duration={500}>
                <h1 className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  NIGHTLIFE
                </h1>
              </Link>
            </li>
            <li>
              <Link to="restaurants" smooth={true} class="cursor-pointer" duration={500}>
                <h1 className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  RESTAURANTS
                </h1>
              </Link>
            </li>
            <li>
              <Link to="greeklife" smooth={true} class="cursor-pointer" duration={500}>
                <h1 className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  GREEKLIFE
                </h1>
              </Link>
            </li>
            <li>
              <Link to="about us" smooth={true} class="cursor-pointer" duration={500}>
                <h1 className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                 ABOUT US
                </h1>
              </Link>
            </li>
            <li>
              <Link to="partnerwithus" smooth={true} class="cursor-pointer" duration={500}>
                <h1 className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  PARTNER WITH US !
                </h1>
              </Link>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
