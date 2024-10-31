import React from "react";
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Homepage() {
  const { pathname } = useLocation();

  return (
    <>
      <nav className="flex items-center px-20 py-10 text-16">
        <h1 className="text-22 font-medium">/GiftStacks/</h1>

        <ul className="flex items-center gap-16 mx-auto">
          <li
            className={`hover:bg-blue-700 hover:px-4 transition-all duration-700 ${
              pathname === "/" ? "bg-blue-700 text-white px-4" : ""
            }`}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className={`hover:bg-blue-700 hover:px-4 transition-all duration-700 ${
              pathname.includes("gift-stacks")
                ? "bg-blue-700 text-white px-4"
                : ""
            }`}
          >
            <Link to="gift-stacks">Gift</Link>
          </li>
          <li
            className={`hover:bg-blue-700 hover:px-4 transition-all duration-700 ${
              pathname.includes("my-gifts") ? "bg-blue-700 text-white px-4" : ""
            }`}
          >
            <Link to="my-gifts">My Gifts</Link>
          </li>
        </ul>

        <button className="bg-blue-700 text-white font-medium px-8 py-4 rounded-xl">
          Connect Wallet
        </button>
      </nav>
      <Outlet />
    </>
  );
}
