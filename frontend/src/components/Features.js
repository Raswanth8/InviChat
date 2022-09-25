import React from "react";

export default function Features() {
  return (
    <div className="flex flex-col items-center">
      <br />
      <p className="text-2xl font-inter">
        Our&nbsp;
        <text className=" italic text-blue-500">Partner</text>&nbsp; Websites
      </p>
      <br />
      <div className="grid grid-cols-3 gap-3">
        <div>
          <img
            src="https://cdn.shortpixel.ai/spai/w_748+q_lossy+ret_img+to_webp/https://tinuiti.com/wp-content/uploads/legacysitecontent/cpcs/posts_01/2018/04/10095553/Amazon-seller-central.png"
            width={200}
            height={150}
          />
        </div>
        <div>
          <img
            src="https://www.freepnglogos.com/uploads/flipkart-logo-png/flipkart-logo-transparent-vector-3.png"
            width={250}
            height={150}
          />
        </div>
        <div>
          <img
            src="https://1000logos.net/wp-content/uploads/2022/08/Myntra-Logo.png"
            width={250}
            height={150}
          />
        </div>
      </div>
    </div>
  );
}
