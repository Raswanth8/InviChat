import React from "react";

export default function Hero() {
  return (
    // typography in the center
    <div className="flex flex-col items-center ">
      <br />
      <p className="text-2xl font-inter">
        The Ultimate Inventory Management Platform
      </p>
      <br />
      <h1 className="text-6xl font-bold font-poppins">InviChat</h1>
      <br />
      <p className="text-base font-poppins text-slate-800">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia dolore
        voluptate eius quibusdam quo unde ipsum, vero officia fugiat, veniam at
        tempora provident quod possimus odio sit. Deleniti, earum in!
      </p>
      <br />
      <button className="text-white bg-blue-500 btn hover:bg-blue-600 font-poppins">
        Try our WhatsApp Bot ⮕
      </button>
    </div>
  );
}
