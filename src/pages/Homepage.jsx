import React from "react";

export default function Homepage() {
  return (
    <>
      <nav className="flex items-center px-20 py-10">
        <h1 className="text-lg">GiftStacks</h1>

        <ul className="flex items-center gap-8 mx-auto">
          <li>Home</li>
          <li>Gift</li>
          <li>My Gifts</li>
        </ul>

        <button className="bg-">Connect Wallet</button>
      </nav>
    </>
  );
}
