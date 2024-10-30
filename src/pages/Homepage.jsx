import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <>
      <nav className="flex items-center px-20 py-10 text-16">
        <h1 className="text-22 font-medium">/GiftStacks/</h1>

        <ul className="flex items-center gap-16 mx-auto">
          <li className="hover:bg-primary hover:px-4 transition-all duration-700">
            <Link>Home</Link>
          </li>
          <li className="hover:bg-primary hover:px-4 transition-all duration-700">
            <Link>Gift</Link>
          </li>
          <li className="hover:bg-primary hover:px-4 transition-all duration-700">
            <Link>My Gifts</Link>
          </li>
        </ul>

        <button className="bg-primary px-8 py-4 rounded-xl">
          Connect Wallet
        </button>
      </nav>
      <Outlet />
    </>
  );
}
