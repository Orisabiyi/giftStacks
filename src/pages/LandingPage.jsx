import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <>
      <header className="h-screen flex flex-col items-center justify-center gap-16 animated-gradient">
        <h1 className="text-4 text-center uppercase font-semibold w-6/12">
          Effortlessly Gift tokens and NFTs to friends and family
        </h1>
        <button className="text-18 bg-white px-20 py-5 rounded-lg hover:bg-blue-700 hover:-translate-y-3 hover:text-white hover:font-medium transition-all duration-700">
          Start Gifting
        </button>
      </header>

      <footer className="p-8 flex items-center justify-center gap-16 text-18">
        <Link className="underline underline-offset-1 hover:underline-offset-2">
          About
        </Link>
        <Link className="underline underline-offset-1 hover:underline-offset-2">
          FAQ
        </Link>
        <Link className="underline underline-offset-1 hover:underline-offset-2">
          Contact Us
        </Link>
      </footer>
    </>
  );
}
