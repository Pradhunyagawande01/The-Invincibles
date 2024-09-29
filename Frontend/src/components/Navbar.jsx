import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";

function Navbar() {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg">
      <nav className="flex items-center justify-between p-4 container mx-auto">
        {/* Logo */}
        <Link to="/" className="text-white text-3xl font-extrabold tracking-wide">
          BSafe<span className="text-blue-400">.</span>
        </Link>

        {/* Navigation Links */}
        <ul className="flex space-x-6 md:space-x-10">
          <li>
            <Link
              to="/"
              className="text-gray-300 hover:text-blue-400 transition duration-300 text-lg font-medium"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/incident-reporting"
              className="text-gray-300 hover:text-blue-400 transition duration-300 text-lg font-medium"
            >
              Incident Reporting
            </Link>
          </li>
          <li>
            <Link
              to="/community"
              className="text-gray-300 hover:text-blue-400 transition duration-300 text-lg font-medium"
            >
              Community
            </Link>
          </li>
          <li>
            <Link
              to="/chatbot"
              className="text-gray-300 hover:text-blue-400 transition duration-300 text-lg font-medium"
            >
              Chatbot
            </Link>
          </li>
          <li>
            <Link
              to="/redzone"
              className="text-gray-300 hover:text-blue-400 transition duration-300 text-lg font-medium"
            >
              RedZone
            </Link>
          </li>
        </ul>

        {/* Profile Icon */}
        <div className="flex items-center">
          <Link to="/profile" className="relative group">
            <AiOutlineUser className="h-9 w-9 text-white transition duration-300 p-1 border-2 border-blue-400 rounded-full group-hover:border-white" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-800"></span>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
