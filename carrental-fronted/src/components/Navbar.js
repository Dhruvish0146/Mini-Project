import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-purple-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-white text-3xl font-bold tracking-wide hover:text-gray-200"
            >
              Car<span className="text-purple-400">Rental</span>System
            </Link>
          </div>
          <div className="hidden md:block">
            <ul className="flex space-x-4">
              <li className="nav-item">
                <Link
                  to="/carList"
                  className="text-white font-bold hover:text-gray-200 bg-purple-300 bg-opacity-50 py-2 px-4 rounded-lg"
                >
                  CarList
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/bookingCarList"
                  className="text-white font-bold hover:text-gray-200 bg-purple-300 bg-opacity-50 py-2 px-4 rounded-lg"
                >
                  BookingCarList
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
