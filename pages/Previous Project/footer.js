import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="flex flex-col items-start justify-around w-full p-20 bg-gray-50 h-1/2 md:flex-row">
        <div className="p-5">
          <ul>
            <p className="pb-6 text-3xl font-bold text-gray-800">
              Stream<span className="text-violet-600">line</span>
            </p>
            <div className="flex gap-6 pb-6">
              <FaInstagram className="text-2xl text-gray-500 cursor-pointer hover:text-purple-400" />
              <FaTwitter className="text-2xl text-gray-500 cursor-pointer hover:text-blue-600" />
              <FaLinkedin className="text-2xl text-gray-500 cursor-pointer hover:text-blue-500" />
              <FaYoutube className="text-2xl text-gray-500 cursor-pointer hover:text-red-600" />
            </div>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="pb-4 text-2xl font-bold text-gray-800">Product</p>
            <li className="pb-2 text-sm font-semibold text-gray-500 cursor-pointer hover:text-violet-600">
              Web Apps
            </li>
            <li className="pb-2 text-sm font-semibold text-gray-500 cursor-pointer hover:text-violet-600">
              Apps
            </li>
            <li className="pb-2 text-sm font-semibold text-gray-500 cursor-pointer hover:text-violet-600">
              Color generator <span className="text-violet-600">New</span>
            </li>
            <li className="pb-2 text-sm font-semibold text-gray-500 cursor-pointer hover:text-violet-600">
              Themes
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="pb-4 text-2xl font-bold text-gray-800">Company</p>
            <li className="pb-2 text-sm font-semibold text-gray-500 cursor-pointer hover:text-violet-600">
              Services
            </li>
            <li className="pb-2 text-sm font-semibold text-gray-500 cursor-pointer hover:text-violet-600">
              About
            </li>
            <li className="pb-2 text-sm font-semibold text-gray-500 cursor-pointer hover:text-violet-600">
              Blog
            </li>
            <li className="pb-2 text-sm font-semibold text-gray-500 cursor-pointer hover:text-violet-600">
              Press & Media
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="pb-4 text-2xl font-bold text-gray-800">Support</p>
            <li className="pb-2 text-sm font-semibold text-gray-500 cursor-pointer hover:text-violet-600">
              Contact
            </li>
            <li className="pb-2 text-sm font-semibold text-gray-500 cursor-pointer hover:text-violet-600">
              FAQ's
            </li>
            <li className="pb-2 text-sm font-semibold text-gray-500 cursor-pointer hover:text-violet-600">
              Downloads & Resources
            </li>
            <li className="pb-2 text-sm font-semibold text-gray-500 cursor-pointer hover:text-violet-600">
              Videos
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center justify-start p-5 bg-gray-50">
        <h1 className="text-sm font-semibold text-gray-800">
          © 2021-2023 All rights reserved | Built with Local Repo by{" "}
          <span className="cursor-pointer hover:text-violet-600">
            <b>Somtee</b>
          </span>
        </h1>
      </div>
    </>
  );
}

export default Footer;
