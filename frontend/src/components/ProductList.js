import React from "react";

export default function ProductList() {
  return (
    <section id="prod-display">
      <div className="flex flex-col items-center">
        <p className="text-3xl font-inter">
          Current&nbsp;
          <text className=" italic text-blue-500">Trending</text>&nbsp; Products
        </p>
        <br />
        <div className="grid grid-cols-2 gap-3 ">
          <div class="max-w-sm rounded overflow-hidden shadow-md">
            <img
              class="w-full"
              src="https://tailwindcss.com/img/card-top.jpg"
              alt="Product 1"
            />
            <div class="px-6 py-4">
              <div class="text-xl mb-2 font-inter">Product Name</div>
              <p class="text-gray-600 font-poppins text-justify">
                So I started to walk into the water. I won't lie to you boys, I
                was terrified. But I pressed on, and as I made my way past the
                breakers a strange calm came over me.
              </p>
              <div class="text-l mb-2 font-inter ">Price: $100</div>
              <button className="text-white bg-blue-500 btn hover:bg-blue-600 font-poppins">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <br />
    </section>
  );
}
