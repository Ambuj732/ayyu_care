import React from "react";
import Header from "../Header/Header";
import banner from "../../assets/Header/banner.png";
import appointment from "../../assets/Header/appointment.png";
import carousel1 from "../../assets/Header/carousel1.png";
import carousel2 from "../../assets/Header/carousel2.png";
import carousel3 from "../../assets/Header/carousel3.png";
import online from "../../assets/Header/online.png";
import phone from "../../assets/Header/phone.png";
import profile from "../../assets/Header/profile.png";
import Dentist from "../../assets/Header/Dentist.png";
import heart from "../../assets/Header/heart.png";
import Dermatologist from "../../assets/Header/Dermatologist.png";
import Ayurveda from "../../assets/Header/Ayurveda.png";
import eye from "../../assets/Header/eye.png";
import Urologist from "../../assets/Header/Urologist.png";
import orthopedic from "../../assets/Header/orthopedic.png";
import Gynecologist from "../../assets/Header/Gynecologist.png";
import arrow from "../../assets/Header/arrow.svg";
import arr from "../../assets/Header/arr.svg";
import apple from "../../assets/Header/apple.png";
import google from "../../assets/Header/google.png";
import Card from "./Card";
import phoneback from "../../assets/Header/phoneback.png";
import phback3 from "../../assets/Header/phback3.png";
import onlinedr from "../../assets/Header/onlinedr.png";
import call from "../../assets/Header/call.png";
import fpage from "../../assets/Header/fpage.png";
import map from "../../assets/Header/map.svg";
import email from "../../assets/Header/email.svg";
import logo from "../../assets/Header/logo.png";

// import profile from "../../assets/Header/profile.png";
// import appointment from "../../assets/Header/appointment.png";
const Carousel = () => {
  return (
    <div className="w-screen h-screen">
      <Header />
      <div className="relative  w-screen flex">
        <div className=" w-[45%] h-[600px] bg-white ">
          <img src={carousel2} className="absolute top-0 left-11" />
          <div className="absolute  w-full top-20 left-40  p-6 flex flex-col items-start ">
            <h1 className="text-7xl font-extrabold mb-7">Find A Doctor!</h1>
            <p className="text-lg text-gray-500 mt-2 mb-5">
              Amet consectetur adipisicing elit sed do eiusmod.
            </p>
            <div className="flex items-center ">
              <input
                type="text"
                placeholder="Ex. Doctor Name"
                className="w-[400px] pl-5 shadow-lg  border-[1px] border-orange-200 py-7 rounded-full  focus:outline-none"
              />
              <button className="bg-orange-500 text-white p-2 rounded-full -ml-16 shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="relative  w-[55%]">
          <img
            src={banner}
            alt="Doctor and patient"
            className="h-[600px] w-full"
          />
          <img
            src={carousel1}
            className="absolute top-0 object-contain right-7 h-full"
          />
        </div>
      </div>
      <div className="flex flex-col  items-center w-full h-[800px] bg-white">
        <div className="mt-10 flex flex-col items-center">
          <span className="text-[#ff9136] text-lg font-semibold">CATEGORY</span>
          <span className="text-5xl font-bold">Browse by specialist</span>
        </div>
        <div className="flex flex-col mb-2">
          <div className="flex mt-10 gap-7">
            <div className=" bg-white shadow-lg hover:shadow-green-700 rounded-[60px] py-7 px-[80px] flex flex-col gap-7 items-center justify-center w-64 ">
              <img src={Dentist} className="w-14 h-14 hover:scale-105" />
              <span className="font-semibold text-gray-500 text-2xl">
                Dentist
              </span>
              <div className="border-[1px] bg-orange-200 border-orange-200 flex items-center justify-center rounded-full w-14 h-14">
                <img src={arrow} className="w-7 h-7" />
              </div>
            </div>
            <div className=" bg-white  shadow-lg hover:shadow-green-700 rounded-[60px] py-7 px-[80px] flex flex-col gap-7 items-center justify-center w-64 ">
              <img src={heart} className="w-14 h-14" />
              <span className="font-semibold text-gray-500 text-2xl">
                Cardiologist
              </span>
              <div className="border-[1px] bg-orange-200 border-orange-200 flex items-center justify-center rounded-full w-14 h-14">
                <img src={arrow} className="w-7 h-7" />
              </div>
            </div>
            <div className=" bg-white shadow-lg hover:shadow-green-700 rounded-[60px] py-7 px-[80px] flex flex-col gap-7 items-center justify-center w-64 ">
              <img src={Dermatologist} className="w-14 h-14" />
              <span className="font-semibold text-gray-500 text-2xl">
                Dermatologist
              </span>
              <div className="border-[1px] bg-orange-200 border-orange-200 flex items-center justify-center rounded-full w-14 h-14">
                <img src={arrow} className="w-7 h-7" />
              </div>
            </div>
            <div className=" bg-white shadow-lg hover:shadow-green-700 rounded-[60px] py-7 px-[80px] flex flex-col gap-7 items-center justify-center w-64 ">
              <img src={Ayurveda} className="w-14 h-14" />
              <span className="font-semibold text-gray-500 text-2xl">
                Ayurveda
              </span>
              <div className="border-[1px] bg-orange-200 border-orange-200 flex items-center justify-center rounded-full w-14 h-14">
                <img src={arrow} className="w-7 h-7" />
              </div>
            </div>
          </div>
          <div className="flex mt-10 gap-7">
            <div className=" bg-white  shadow-lg hover:shadow-green-700 rounded-[60px] py-7 px-[80px] flex flex-col gap-7 items-center justify-center w-64 ">
              <img src={eye} className="w-14 h-14" />
              <span className="font-semibold text-gray-500 text-2xl text-nowrap">
                Eye Care
              </span>
              <div className="border-[1px] bg-orange-200 border-orange-200 flex items-center justify-center rounded-full w-14 h-14">
                <img src={arrow} className="w-7 h-7" />
              </div>
            </div>
            <div className=" bg-white shadow-lg hover:shadow-green-700 rounded-[60px] py-7 px-[80px] flex flex-col gap-7 items-center justify-center w-64 ">
              <img src={orthopedic} className="w-14 h-14" />
              <span className="font-semibold text-gray-500 text-2xl">
                Orthopedic
              </span>
              <div className="border-[1px] bg-orange-200 border-orange-200 flex items-center justify-center rounded-full w-14 h-14">
                <img src={arrow} className="w-7 h-7" />
              </div>
            </div>
            <div className=" bg-white shadow-lg hover:shadow-green-700 rounded-[60px] py-7 px-[80px] flex flex-col gap-7 items-center justify-center w-64 ">
              <img src={Urologist} className="w-14 h-14" />
              <span className="font-semibold text-gray-500 text-2xl">
                Urologist
              </span>
              <div className="border-[1px] bg-orange-200 border-orange-200 flex items-center justify-center rounded-full w-14 h-14">
                <img src={arrow} className="w-7 h-7" />
              </div>
            </div>
            <div className=" bg-white shadow-lg hover:shadow-green-700 rounded-[60px] py-7 px-[80px] flex flex-col gap-7 items-center justify-center w-64 ">
              <img src={Gynecologist} className="w-14 h-14" />
              <span className="font-semibold text-gray-500 text-2xl">
                Gynecologist
              </span>
              <div className="border-[1px] bg-orange-200 border-orange-200 flex items-center justify-center rounded-full w-14 h-14">
                <img src={arrow} className="w-7 h-7" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-4 justify-center items-center mt-10 border rounded-full bg-[#ff9136] px-16 py-4">
          <span className="font-semibold text-left text-white">
            All Category
          </span>
          <img src={arr} className="w-5 h-5" />
        </div>
      </div>
      <div className=" flex flex-col items-center w-full h-[900px] ">
        <div className="flex flex-col justify-center items-center mt-10 gap-4">
          <span className="text-[#ff9136] text-lg font-semibold">
            MEET OUR PROFESSIONALS
          </span>
          <span className="text-5xl font-bold">Top Rated Specialists</span>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-10">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <div className="flex gap-10 ">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <div className="flex gap-4 justify-center items-center mt-10 border rounded-full bg-[#ff9136] px-16 py-4 mb-10">
          <span className="font-semibold text-left text-white">
            All Category
          </span>
          <img src={arr} className="w-5 h-5" />
        </div>
      </div>
      <div className=" flex justify-around gap-64 items-center relative w-full h-[550px] bg-[#323232] mt-96 ">
        <img className="absolute top-0 right-4" src={carousel2} />
        <img className="absolute -bottom-20 left-8 z-1 " src={carousel2} />
        <img className="absolute top-4 left-64 " src={phoneback} />
        <div>
          <img src={phone} className="absolute  top-14 z-10 " />
        </div>
        <div className="flex flex-col gap-3">
          <span className="text-[#ff9136] text-lg font-semibold">
            DOWNLOAD APPS
          </span>
          <span className="text-5xl font-bold text-white">For Better Test</span>
          <span className="text-5xl font-bold text-white">
            Download Mobile App
          </span>
          <span className="font-normal text-lg text-white">
            Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod
            tempor
          </span>
          <span className="font-normal text-lg text-white">
            incididunt labore dolore magna.
          </span>
        </div>
        <img className="absolute top-0 right-4" src={carousel2} />
      </div>
      <div className=" flex justify-center relative w-full h-[650px] bg-[#F3EAE2]">
        <img className="absolute top-0 right-4" src={carousel2} />
        <img className="absolute -bottom-44 left-8 " src={carousel2} />
        <img className="absolute  top-24 left-48 -z-10 " src={phback3} />
        <img className="absolute   bottom-10 right-40 -z-10 " src={phback3} />
        <div className="flex flex-col justify-center absolute items-center mt-32 gap-4">
          <span className="text-[#ff9136] text-lg font-semibold">PROCESS</span>
          <span className="text-5xl font-bold">Appointment Process</span>
        </div>
        <div className=" flex justify-center items-center mt-40 gap-40">
          <div className="flex flex-col justify-center items-center gap-7">
            <div className=" bg-white  rounded-[60px] py-20 px-[70px] flex flex-col items-center justify-center w-64 gap-4 ">
              <img src={onlinedr} />
            </div>
            <div className="flex flex-col justify-center items-center text-2xl font-extrabold">
              <p>Search Best Online</p>
              <p>Doctors</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-7">
            <div className=" bg-white  rounded-[60px] py-20 px-[70px] flex flex-col items-center justify-center w-64 gap-4 ">
              <img src={profile} />
            </div>
            <div className="flex flex-col justify-center items-center text-2xl font-extrabold">
              <p>View Doctor Profile</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-7">
            <div className=" bg-white  rounded-[60px] py-20 px-[70px] flex flex-col items-center justify-center w-64 gap-4 ">
              <img src={appointment} />
            </div>
            <div className="flex flex-col justify-center items-center text-2xl font-extrabold">
              <p>Get Instant Doctor</p>
              <p>Appoinment</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center relative">
        <div className="absolute z-10 top-0  flex justify-center gap-1 items-center rounded-lg w-[80%] h-[250px] bg-[#323232]">
          <div className="border relative  border-dashed border-gray-500 w-1/2 h-[72%] mx-7 rounded-lg">
            <div className="w-40 h-2 absolute -translate-y-0.5 mx-7  bg-[#ff9136]"></div>

            <div className=" flex flex-col gap-7 justify-start px-10 pt-10 ">
              <span className="text-3xl font-extrabold text-white">
                Emergency Call
              </span>
              <div className="flex gap-4   items-center">
                <img src={call} className="w-10 h-7" />
                <div className="flex flex-col">
                  <span className="text-2xl font-semibold text-white">
                    Telephone
                  </span>
                  <span className="font-extrabold text-2xl text-[#ff9136]">
                    +9305931476
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="border border-dashed border-gray-500 w-1/2 h-[72%] mx-7 relative rounded-lg">
            <div className="w-40 h-2 absolute -translate-y-0.5 mx-7  bg-[#ff9136]"></div>
            <div className=" flex flex-col gap-7 justify-start px-10 pt-10 ">
              <span className="text-3xl font-extrabold text-white text-nowrap">
                Sign up for Newsletter today.
              </span>
              <div className="flex items-center">
                <input
                  type="text"
                  name="email"
                  placeholder="Enter Your email"
                  className="bg-[#323232] px-10 py-3 border-[1px] border-gray-500 rounded-l-3xl text-white"
                />
                <button className=" border px-9 py-3 flex gap-4 justify-center items-center bg-[#ff9136] rounded-r-3xl">
                  <span className="text-white font-extrabold">Submit now</span>
                  <img src={arr} className="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-start items-center px-20 text-white w-full relative h-[150px] bg-white"></div>
      <footer>
        <div className="flex  items-center  w-full relative h-[500px] bg-[#1A2332]">
          <img src={fpage} className="absolute top-0" />
          <img src={fpage} className="absolute top-0 right-0" />
          <div className="container  flex justify-center px-52 gap-32 ">
            <div className="w-full md:w-1/4 mb-6 ">
              <div className="flex items-center mb-4">
                <img src={logo} />
              </div>
              <p className="text-white font-semibold">
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing.
              </p>
            </div>

            {/* About Section */}
            <div className="w-full md:w-1/4 mb-6">
              <h2 className="font-bold mb-4 text-white text-2xl">About</h2>
              <ul className=" text-lg font-medium  text-white">
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Contact Us
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Download apps
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Useful Links Section */}
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h2 className="font-bold mb-4 text-white text-2xl">
                Useful Links
              </h2>
              <ul className=" text-lg font-medium  text-white">
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Specialist
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Doctors
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Join As Doctor
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info Section */}
            <div className="w-full md:w-1/4">
              <h2 className="font-bold mb-4 text-white text-2xl">
                Contact Info
              </h2>
              <ul className=" text-lg font-medium  text-white">
                <li className="mb-2 flex gap-4">
                  <img src={map} className="w-7 h-7 mt-1" />
                  5d/124 Awas Vikas, Hanspuram, Naubasta, Kanpur
                </li>
                <li className="mb-2 flex items-center">
                  <img src={map} className="w-7 h-7 mt-1" />
                  +919998887770
                </li>
                <li className="mb-2 gap-2 flex items-center">
                  <img src={email} className="w-7 h-7 mt-1" />
                  info@example.com
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-start items-center px-20 text-white w-full relative h-[100px] bg-[#272F3E]">
          <span className="font-semibold">
            Appointment Book System © 2024 All Right Reserved
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Carousel;
