import React from "react";

export default function Homepage() {
  return (
    <>
      <nav className="flex items-center px-20 py-10 text-16">
        <h1 className="text-lg">GiftStacks</h1>

        <ul className="flex items-center gap-8 mx-auto">
          <li>Home</li>
          <li>Gift</li>
          <li>My Gifts</li>
        </ul>

        <button className="bg-primary px-8 py-4 rounded-xl">
          Connect Wallet
        </button>
      </nav>
    </>
  );
}
