import React from "react";
import { MdMarkChatRead } from "react-icons/md";
export default function Contact() {
  return (
    <footer class="px-4 py-12 mx-auto max-w-7xl">
      <div class="grid grid-cols-2 gap-10 mb-3 md:grid-cols-3 lg:grid-cols-11 lg:gap-20">
        <div class="col-span-3">
          <a href="#" class="flex items-center">
            <div className="text-xl">
              <MdMarkChatRead />
            </div>
            <span className="font-semibold text-xl tracking-tight font-poppins">
              &nbsp;InviChat
            </span>
          </a>
          <p class="my-4 text-xs leading-normal text-gray-600 font-poppins text-left">
            Blockchain based Automated Inventory Management system using
            Microservices Architecture.
          </p>
        </div>
        <nav class="col-span-2 md:col-span-1 lg:col-span-2">
          <p class="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase font-inter">
            Support
          </p>
          <a
            class="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-blue-500 font-poppins"
            href="#"
          >
            Chat
          </a>
          <a
            class="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-blue-500 font-poppins"
            href="#"
          >
            Email Support
          </a>
          <a
            class="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-blue-500 font-poppins"
            href="#"
          >
            GDPR
          </a>
          <a
            class="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-blue-500 font-poppins"
            href="#"
          >
            Help
          </a>
        </nav>
        <nav class="col-span-1 md:col-span-1 lg:col-span-2 font-inter">
          <p class="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">
            Company
          </p>
          <a
            class="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-blue-500 font-poppins"
            href="#"
          >
            About Us
          </a>
          <a
            class="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-blue-500 font-poppins"
            href="#"
          >
            Privacy
          </a>
          <a
            class="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-blue-500 font-poppins"
            href="#"
          >
            Terms
          </a>
          <a
            class="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-blue-500 font-poppins"
            href="#"
          >
            Status
          </a>
        </nav>
      </div>
      <div class="flex flex-col items-start justify-between pt-10 mt-10 border-t border-gray-100 md:flex-row md:items-center">
        <p class="mb-2 text-xs text-left text-gray-600 md:mb-0 font-poppins">
          Built with ❤️ by Raswanth
        </p>
        <p class="mb-0 text-xs text-left text-gray-600 md:mb-0 font-poppins">
          © 2021 InviChat. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
