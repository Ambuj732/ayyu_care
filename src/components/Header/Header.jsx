import React from "react";
import map from "../../assets/Header/map.svg";
import call from "../../assets/Header/call.svg";
import logo from "../../assets/Header/logo.png";
const Header = () => {
  return (
    <div className="">
      <header className="flex flex-col w-screen relative z-10">
        <div className="flex justify-around items-center p-4 gap-80 bg-[#1a2332]">
          <div className="flex gap-4 text-white font-bold">
            <div className="flex gap-2">
              <img className="w-7 h-7" src={map} />
              <span>5d/124 Awas Vikas, Hanspuram, Naubasta, Kanpur</span>
            </div>
            <div className=" h-7 border-[1px] border-gray-500"></div>
            <div className="flex">
              <img src={call} />
              <span>+9305931476</span>
            </div>
          </div>
          <div>
            <span className="text-white font-bold">Sign in</span>
          </div>
        </div>
        <div className=" flex justify-center items-center bg-white border h-28 gap-24">
          <div>
            <img src={logo} className="w-60 h-auto " />
          </div>
          <div>
            <ul className="flex gap-14 text-lg font-medium px-5 text-gray-500 ">
              <li>Home</li>
              <li>About Us</li>
              <li>Specialist</li>
              <li>Doctors</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="flex border rounded-full gap-2 bg-[#ff9136] px-7 py-3 ">
            <span className="font-bold text-white">+</span>
            <span className="font-bold  text-white text-lg">
              Join As Doctor
            </span>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
