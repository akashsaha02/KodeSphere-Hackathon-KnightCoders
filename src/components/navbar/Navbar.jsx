import React from "react";
import logo from "./logo.png";

const Navbar = () => {
  return (
    <nav className="bg-opacity-100 bg-sky-600 p-4 flex ">
      <div className="container mx-auto justify-between items-center flex">
        <div className="flex space-x-4 items-center">
          <img src={logo} alt="Logo" className="mr-2 w-14 h-14 rounded-full" />
          <h1 className="text-xl font-bold text-white">
            KNIGHT CODERs' HOME
          </h1>
        </div>

        {/* Right section with search box */}
        <div className="relative hidden sm:block ">
          {/* Magnifying glass icon */}
          <div className="p-3 absolute top-1/2 transform -translate-y-1/2 text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M11 4a7 7 0 11-4.172 12.156l-3.84 3.84a1 1 0 11-1.415-1.414l3.84-3.84A7 7 0 0111 4zm0 2a5 5 0 100 10 5 5 0 000-10z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search your device"
            className=" pl-10 pr-4 py-2 rounded-xl bg-white border border-gray-300 text-gray-700 focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
