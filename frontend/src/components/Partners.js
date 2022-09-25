import React from "react";

export default function Partners() {
  return (
    <div className="flex flex-col items-center">
      <p className="text-3xl font-inter">
        Our&nbsp;
        <text className=" italic text-blue-500">Partner</text>&nbsp; Websites
      </p>
      <br />
      <div className="grid grid-cols-2 gap-3 ">
        <div>
          <img
            src="https://pngimg.com/uploads/amazon/amazon_PNG13.png"
            width={300}
            height={200}
            className="object-contain"
          />
        </div>
        <div>
          <img
            src="https://www.freepnglogos.com/uploads/flipkart-logo-png/flipkart-logo-transparent-vector-3.png"
            width={300}
            height={200}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
