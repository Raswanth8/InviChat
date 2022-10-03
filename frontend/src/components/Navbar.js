import React from "react";
import { MdMarkChatRead } from "react-icons/md";
import { Link } from "react-scroll";
export default function Navbar() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-white-800 p-6 shadow-none rounded-lg">
      <div className="flex items-center flex-shrink-0 text-black mr-6">
        <div className="text-xl">
          <MdMarkChatRead />
        </div>
        <span className="font-semibold text-xl tracking-tight font-poppins">
          &nbsp;InviChat
        </span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-blue-500 hover:text-black mr-4 font-poppins"
          >
            Home
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-blue-500 hover:text-black mr-4 font-poppins"
          >
            <Link to="feature-page" smooth={true} offset={-70} duration={1200}>
              About
            </Link>
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-blue-500 hover:text-black mr-4 font-poppins"
          >
            Featured Products
          </a>
        </div>
        <div>
          <button class="text-white bg-blue-500 btn hover:bg-blue-600 font-poppins">
            Try it!
          </button>
        </div>
      </div>
    </nav>
  );
}
