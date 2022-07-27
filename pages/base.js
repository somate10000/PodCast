import React from "react";
import Image from "next/image";
import logo from "../components/assets/logo.svg";
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoSoundcloud,
  IoLogoApple,
} from "react-icons/io5";

const Base = () => {
  return (
    <div className="grid md:grid-cols-2 md:pl-14 lg:grid-cols-3  pl-4  md:justify-around bg-[#0e053a] pt-10 pb-5 lg:pt-20 lg:pb-20">
      <div className="font-[JosefinSans] mx-[4%] lg:mx-[6%] ">
        <Image src={logo} />
        <p className="text-[15px] md:text-lg text-[#ACA7BE] mt-1">
          Lorem ipsum dolor sit amet consectetur adipiscing elit tincidunt in
          felis malesuada mollis purus id sit in aliquet lectus eget morbi dui
          felis malesuada.
        </p>
      </div>
      <div className="font-[JosefinSans] lg:ml-[28%] text-[#ACA7BE] mx-[4%] mt-2 md:ml-10 ">
        <h2 className="text-[22px] mt-2 md:mb-8 text-white font-[JosefinSansS]">
          Start A Conversation
        </h2>
        <p className="text-[15px] md:text-[18px] mt-2">hello@micro.com</p>
        <p className="text-[15px] md:text-[18px] mt-2">+01234 54678</p>
        <p className="text-[15px] md:text-[18px] mt-2">+1 (578) 034-6789</p>
      </div>
      <div className="lg:mt-12 mx-[4%] items-end lg:flex flex-col lg:pr-12  mt-4">
        <h3 className="linear" style={{ marginLeft: 5 }}>
          Follow Us On:
        </h3>
        <div className="flex gap-2 mt-3 lg:mt-5">
          <div className="lg:w-[45px] lg:h-[45px] w-[35px] h-[35px] bg-[#221D49] rounded-full flex items-center justify-center hover:bg-blue-700">
            <IoLogoFacebook size={22} color={"white"} />
          </div>
          <div className="lg:w-[45px] lg:h-[45px]  w-[35px] h-[35px] bg-[#221D49] rounded-full flex items-center justify-center hover:bg-blue-700">
            <IoLogoTwitter size={22} color={"white"} />
          </div>
          <div className="lg:w-[45px] lg:h-[45px]  w-[35px] h-[35px] bg-[#221D49] rounded-full flex items-center justify-center hover:bg-blue-700">
            <IoLogoInstagram size={22} color={"white"} />
          </div>
          <div className="lg:w-[45px] lg:h-[45px]  w-[35px] h-[35px] bg-[#221D49] rounded-full flex items-center justify-center hover:bg-blue-700">
            <IoLogoSoundcloud size={22} color={"white"} />
          </div>
          <div className="lg:w-[45px] lg:h-[45px]  w-[35px] h-[35px] bg-[#221D49] rounded-full flex items-center justify-center hover:bg-blue-700">
            <IoLogoApple size={22} color={"white"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Base;
