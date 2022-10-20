import React from "react";

export default function Features() {
  return (
    <section id="feature-page">
      <div className="flex flex-col items-center">
        <p className="text-3xl font-inter text-black">
          Our&nbsp;
          <text className=" italic text-blue-500">Product</text>&nbsp; Features
        </p>
        <section class="grid grid-cols-1 gap-20 px-4 py-24 mx-auto max-w-7xl lg:px-16 xl:px-24 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="w-12 h-12 mb-4 text-blue-500"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <h3 class="mb-3 text-lg leading-tight text-black font-inter">
              Abstracted System Design
            </h3>
            <p class="text-base leading-relaxed text-gray-600 font-poppins text-justify">
              Our system is designed in a way that operations on your inventory
              would be automated using abstracted microservice and cloud
              technologies to maximize your sales and profits by reaching out
              the targeted customers.
            </p>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="w-12 h-12 mb-4 text-blue-500"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
              />
            </svg>
            <h3 class="mb-3 text-lg leading-tight text-black font-inter">
              Powerful Recommendation Engine
            </h3>
            <p class="text-base leading-relaxed text-gray-600 font-poppins text-justify">
              A hybrid approach of content-based and collaborative filtering are
              used on both text and graphic data passed inside the system, to
              provide the best recommendations to the users using neural
              networks and machine learning algorithms.
            </p>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="w-12 h-12 mb-4 text-blue-500"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"
              />
            </svg>
            <h3 class="mb-3 text-lg leading-tight text-black font-inter">
              User Analytics and Privacy
            </h3>
            <p class="text-base leading-relaxed text-gray-600 font-poppins text-justify">
              Blockchain technology is used to ensure the privacy of the users
              and sellers through the use of distibuted storage and smart
              contracts. The activity of the users is also analyzed to provide
              insights for further optimization.
            </p>
          </div>
        </section>
      </div>
    </section>
  );
}
