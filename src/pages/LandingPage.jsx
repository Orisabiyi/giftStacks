import React from "react";

export default function LandingPage() {
  return (
    <header className="h-screen bg-primary flex flex-col items-center justify-center gap-16">
      <h1 className="text-[4rem] text-center uppercase font-semibold w-7/12">
        Effortlessly send tokens and NFTs to friends and family
      </h1>
      <button className="text-18 bg-white px-20 py-5 rounded-lg hover:bg-secondary hover:-translate-y-3 hover:text-white hover:font-medium transition-all duration-700">
        Start Gifting
      </button>
    </header>
  );
}
