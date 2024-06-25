import React from "react";
import img1 from "../../assets/Card/img1.jpg";
import heart from "../../assets/Card/heart.svg";

const Card = () => {
  return (
    <div className=" w-[260px] h-[430px] rounded-xl overflow-hidden shadow-md mt-10  bg-white">
      <div className="relative">
        <img
          className="w-full h-56 object-cover hover:scale-105"
          src={img1}
          alt="Doctor"
        />
        <div className=" absolute flex justify-center items-center border rounded-full w-12 h-12 bg-[#FFF1E5] top-4 right-4">
          <img src={heart} className="w-7 h-7" />
        </div>
      </div>
      <div className="px-6 py-10">
        <div className="font-bold text-2xl mb-2 text-gray-500">
          Dr komal Tiwari
        </div>
        <p className="text-gray-700 text-base">Ayurveda</p>
        <div className="flex items-center mt-2">
          <svg
            className="w-5 h-5 text-yellow-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09L5.64 11.908 1 7.545l6.06-.99L10 1l2.94 5.555L19 7.545l-4.64 4.363L15.878 18 10 15z" />
          </svg>
          <svg
            className="w-5 h-5 text-yellow-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09L5.64 11.908 1 7.545l6.06-.99L10 1l2.94 5.555L19 7.545l-4.64 4.363L15.878 18 10 15z" />
          </svg>
          <svg
            className="w-5 h-5 text-yellow-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09L5.64 11.908 1 7.545l6.06-.99L10 1l2.94 5.555L19 7.545l-4.64 4.363L15.878 18 10 15z" />
          </svg>
          <svg
            className="w-5 h-5 text-yellow-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09L5.64 11.908 1 7.545l6.06-.99L10 1l2.94 5.555L19 7.545l-4.64 4.363L15.878 18 10 15z" />
          </svg>
          <svg
            className="w-5 h-5 text-yellow-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09L5.64 11.908 1 7.545l6.06-.99L10 1l2.94 5.555L19 7.545l-4.64 4.363L15.878 18 10 15z" />
          </svg>
          <span className="text-gray-700 ml-2">2 reviews</span>
        </div>
        <div className="flex items-center mt-4">
          <svg
            className="w-5 h-5 text-gray-600"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C8.134 2 5 5.134 5 9c0 7.166 7 13 7 13s7-5.834 7-13c0-3.866-3.134-7-7-7zm0 9c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2z" />
          </svg>
          <span className="text-gray-700 ml-2">kolkata</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
