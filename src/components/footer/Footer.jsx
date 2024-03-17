import React from "react";
import logo from "./../navbar/logo.png";

const Footer = () => {
  return (
    <footer class="bg-white  shadow dark:bg-gray-900 ">
      <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <a
            href="#"
            class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img
             className="mr-2 w-14 h-14 rounded-full"
              src={logo}
              alt="Knight Coders"
            />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              KNIGHT CODERs
            </span>
          </a>
          <ul class="flex-col flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="https://github.com/muhit-khan" class="hover:underline me-4 md:me-6">
                Muhit Khan
              </a>
            </li>
            <li>
              <a href="https://github.com/MethuParoi" class="hover:underline me-4 md:me-6">
                Methu Paroi
              </a>
            </li>
            <li>
              <a href="https://github.com/akashsaha02" class="hover:underline me-4 md:me-6">
                Akash Saha
              </a>
            </li>
          </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a href="https://flowbite.com/" class="hover:underline">
            KNIGHT CODERs™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
