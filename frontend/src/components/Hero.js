import React from "react";

export default function Hero() {
  return (
    // typography in the center
    <div className="flex flex-col items-center ">
      <br />
      <p className="text-2xl">The Ultimate Inventory Management Platform</p>
      <br />
      <h1 className="text-6xl font-bold">InviChat</h1>
      <br />
      <button className="text-white bg-blue-500 btn hover:bg-blue-700">
        Try our WhatsApp Bot! ⮕
      </button>
    </div>
  );
}
