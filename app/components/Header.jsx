"use client";
import Image from "next/image";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

import { HiBars3CenterLeft } from "react-icons/hi2";
import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { MdDashboard } from "react-icons/md";

export const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {open ? (
        <div className="z-10 fixed top-0 bg-black w-10/12 h-full p-10 shadow-xl md:w-4/12">
          <img
            src="https://cdn-icons-png.freepik.com/256/3291/3291662.png?ga=GA1.1.294446207.1726121184&semt=ais_hybrid"
            className="w-10 m-auto"
            alt=""
          />
          <h1 className="text-center text-white text-xl mt-2">
            Welcome To Blog Application!
          </h1>
          <IoClose
            size={40}
            color="white"
            className="m-auto mt-2 cursor-pointer"
            onClick={() => setOpen(!open)}
          />
          <ul
            className="flex flex-col gap-4 text-white justify-center items-center
        p-10"
          >
            <div className="flex flex-col gap-2 items-center ">
              <FaHome size={30} />
              <a href="/">Home</a>
            </div>

            <div className="flex flex-col gap-2 items-center">
              <FcAbout size={35} />
              <a href="/about">About Us</a>
            </div>

            <div className="flex flex-col gap-2 items-center">
              <MdDashboard size={30} />
              <a href="/dashboard">Dashboard</a>
            </div>
          </ul>
        </div>
      ) : (
        <></>
      )}
      <header className="sticky top-0 bg-black border border-slate-700 text-white shadow-xl p-6">
        <div className="w-12/12 flex items-center justify-around md:w-10/12 m-auto">
          <div className="logo flex flex-col gap-2 items-center">
            <img
              src="https://cdn-icons-png.freepik.com/256/3291/3291662.png?ga=GA1.1.294446207.1726121184&semt=ais_hybrid"
              className="w-10"
              alt=""
            />
            <h1 className="text-center text-white text-xl mt-2">
              Welcome To Blog Application!
            </h1>
          </div>
          <div>
            <button onClick={() => setOpen(!open)}>
              <HiBars3CenterLeft size={30} />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
