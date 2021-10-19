import React from "react";
import "./Nav.css";
import { useState } from "react";
import { Divide as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav class="bg-opacity-0 fixed w-screen bg-white absolute lg:px-10">
      <div class=" mx-auto bg-white">
        <div class="flex flex-end justify-between py-4 px-2 text-gray-600">
          <Link to="/">
            <div class="flex items-center px-4">
              <img class="h-10 w-10 mr-2" src="https://imgur.com/C9Qnrlc.png" />
              <span>MyfriendPaul</span>
            </div>
          </Link>
          {/* //Primary Nav */}

          <div class="hidden md:flex flex items-center space-x-2 px-4">
            <div>
              <Link to="/projects" class="py-3 px-2 text-gray-600">
                Projects
              </Link>
            </div>
            <div>
              <Link to="/contact" class="py-3 px-2 text-gray-600">
                Contact
              </Link>
            </div>
            <div>
              <Link to="/resume" class="py-3 px-2 text-gray-600">
                Resume
              </Link>
            </div>
          </div>
          {/* Mobile Nav */}
          <div class="md:hidden flex items-center -mt-6">
            <button
              onClick={() => setToggle(!toggle)}
              className={toggle ? "mobile-menu" : ""}
              class="w-6 h-6 pr-12 pb-2"
            >
              <Hamburger />
            </button>
          </div>
        </div>
      </div>
      <div
        className={`flex flex-col text-right absolute w-screen px-11 ${
          toggle ? "" : "hidden"
        }`}
      >
        <Link
          to="/projects"
          class="block py-4 text-sm  text-gray-600 bg-white hover:bg-gray-300 pr-2"
        >
          Projects
        </Link>
        <Link
          to="resume"
          class="block py-4 text-sm  text-gray-600
          bg-white hover:bg-gray-300 pr-2"
        >
          Resume
        </Link>
        <Link
          to="/contact"
          class="block py-4 text-sm  text-gray-600 bg-white hover:bg-gray-300 pr-2"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
