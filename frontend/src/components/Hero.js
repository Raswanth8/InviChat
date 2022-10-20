import React from "react";

export default function Hero() {
  return (
    // typography in the center
    <div className="flex flex-col items-center ">
      <br />
      <p className="text-3xl font-inter text-black">
        The Ultimate&nbsp;
        <text className=" italic text-blue-500">Inventory Management</text>
        &nbsp; Platform
      </p>
      <br />
      <h1 className="text-7xl font-bold font-poppins text-black">InviChat</h1>
      <br />
      <br />
      <div className="w-3/4">
        <p className="font-poppins text-slate-800 text-base">
          A microservice based inventory management platform that helps you
          manage your inventory using WhatsApp chat service. <br></br> Our
          objective is to abstract the complexity of the existing services
          through simplified system design and user friendly interface.
        </p>
      </div>
      <br />
      <br />
      <div>
        <button className="text-white bg-blue-500 btn hover:bg-blue-600 font-poppins">
          Try our WhatsApp Bot ⮕
        </button>
      </div>

      <div class="w-full mx-auto mt-20 text-center md:w-10/12">
        <img
          src="https://drive.google.com/uc?export=view&id=1M0PD82Cg9y7ryzabzrB55IZGPGYZjxox"
          class="w-full rounded-lg shadow-2xl"
        />
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}
