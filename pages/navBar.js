import React, { useState } from "react";
import Image from "next/image";
import logo from "../components/assets/logo.svg";
import {
  SearchIcon,
  LoginIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { IoLogoPaypal, IoCartOutline, IoClose, IoMenu } from "react-icons/io5/";

const catego = ["Home", "Podcast", "Host", "Blog", "Contact"];

const Variable = () => {
  return (
    <div className="w-24 h-24 bg-green-500">
      <h1>ASDFGHJKL</h1>
    </div>
  );
};

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="mx-auto">
      <div className="h-20 px-2 sm:px-[10%] xl:h-24 w-full bg-[#150849] shadow-[0_32px_64px_rgba(0,0,0,1)] flex items-center justify-between lg:px-[44px] py-[28px] ">
        <div className="mt-3">
          <Image src={logo} alt="" />
        </div>
        <div
          className="flex text-white text-[40px] cursor-pointer 1xl:hidden"
          onClick={handleClick}
        >
          {!nav ? <IoMenu /> : <IoClose />}
        </div>

        <div className="hidden text-white font-[JosefinSans] 1xl:flex text-[18px] items-center ">
          <div className="flex mr-4 space-x-8">
            {catego.map((category) => {
              return <p className="hover">{category}</p>;
            })}
          </div>
          <div className="flex ml-5 xl:space-x-7 1xl:space-x-5">
            <SearchIcon className="w-6 h-6 rounded cursor-pointer hover:bg-slate-700" />
            <LoginIcon className="w-6 h-6 rotate-180 rounded cursor-pointer hover:bg-slate-700" />
            <IoCartOutline className="w-6 h-6 rounded cursor-pointer hover:bg-slate-700" />
          </div>
          <div className="w-[133px] h-[49px] flex items-center justify-center bg-[#0051FF] cursor-pointer rounded xl:ml-8 1xl:ml-5 ">
            <IoLogoPaypal className="w-5 h-5 mr-1" />
            <p className="text-white text-[18px]">Donate</p>
          </div>
        </div>
      </div>
      <div
        className={
          !nav
            ? "hidden"
            : "h-[42vh] z-40 font-[JosefinSans]  text-lg  bg-[#150849] text-white/70 pt-2 first-letter:w-full px-4"
        }
      >
        <div className="w-[100%]  h-[1px] mb-1 bg-white/90" />
        <ul className="space-y-2">
          <li className="w-full border-b-2 cursor-pointer border-zinc-300">
            Home
          </li>
          <li className="w-full border-b-2 cursor-pointer border-zinc-300">
            Podcast
          </li>
          <li className="w-full border-b-2 cursor-pointer border-zinc-300">
            Host
          </li>
          <li className="w-full border-b-2 cursor-pointer border-zinc-300">
            Blog
          </li>
          <li className="w-full border-b-2 cursor-pointer border-zinc-300">
            Contact
          </li>
          <div className="flex items-center justify-around">
            <SearchIcon className="w-6 h-6 rounded cursor-pointer hover:bg-slate-700" />
            <LoginIcon className="w-6 h-6 rotate-180 rounded cursor-pointer hover:bg-slate-700" />
            <IoCartOutline className="w-6 h-6 rounded cursor-pointer hover:bg-slate-700" />

            <div className="w-[133px] h-[49px] flex items-center justify-center  cursor-pointer rounded xl:ml-8 1xl:ml-5 ">
              <IoLogoPaypal className="w-5 h-5 mr-1" />
              <p className="text-white text-[18px]">Donate</p>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;

{
  /*<div className="text-white font-[JosefinSans] flex text-[18px] items-center ">
          <div className="flex mr-4 space-x-8">
            {catego.map((category) => {
              return <p className="hover">{category}</p>;
            })}
          </div>
          <div className="flex ml-5 space-x-7">
            <SearchIcon className="w-6 h-6 rounded cursor-pointer hover:bg-slate-700" />
            <LoginIcon className="w-6 h-6 rotate-180 rounded cursor-pointer hover:bg-slate-700" />
            <IoCartOutline className="w-6 h-6 rounded cursor-pointer hover:bg-slate-700" />
          </div>
          <div className="w-[133px] h-[49px] flex items-center justify-center bg-[#0051FF] cursor-pointer rounded ml-8">
            <IoLogoPaypal className="w-5 h-5 mr-1" />
            <p className="text-white text-[18px]">Donate</p>
          </div>
        </div>*/
}
