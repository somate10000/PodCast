import React from "react";
import Image from "next/image";
import { IoLogoApple, IoLogoSoundcloud, IoHeadset } from "react-icons/io5";
import hero_title from "../components/assets/hero-title.png";
import hero_img from "../components/assets/hero-banner.png";

const Hero = () => {
  return (
    //bg-[rgb(14,5,58)]
    <div className="bg-[rgb(14,5,58)]  w-full flex flex-col sm:flex-row 1xl:pb-20 xl:pb-1 pt-[65px] items-center gap-1 px-4 1xl:pt-[100px]  sm:pl-6">
      <div className="  w-full sm:w-[500px] md:px-0 sm:mx-auto  md:w-[650px] xl:w-[570px] xl:ml-16   font-[JosefinSans]">
        <div className="mb-14 md:-mt-8 xl:mb-8 ">
          <div className="mb-[70px] md:pr-12  md:-mt-8 xl:mt-4 flex xl:mb-[82px] xl:pr-6 md:mb-[75px]">
            <Image src={hero_title} className="z-10" alt="" />
          </div>
          <div>
            <p className="text-[15px] sm:text-base text-white xl:text-lg  -mt-14  md:text-lg md:mb-3 xl:mb-2">
              Lorem ipsum dolor sit amet consectetur adipiscing elit tincidunt
              in felis malesuada mollis purus id sit in aliquet lectus eget
              morbi dui felis.
            </p>
            <div className="flex flex-col md:flex-row xl:flex-col-reverse">
              <div className="w-[163px] h-[49px] flex items-center justify-center bg-[#0051FF] rounded mb-5 hover:bg-cyan-500 hover:transition-colors hover:delay-150 mt-3 cursor-pointer">
                <IoHeadset size={20} color={"white"} className="mr-2 -mt-1" />
                <p className="text-base text-white">Listen Now</p>
              </div>
              <div className="flex flex-col text-white md:flex-row md:items-center xl:mb-3 md:ml-6 xl:ml-0 xl:mt-4">
                <p className="text-transparent font-[JosefinSansS]  text-[16px] xl:text-[18px] mb-4 md:mb-0 bg-clip-text bg-gradient-to-r from-cyan-200 via-cyan-400 to-blue-500">
                  Subscribe On:
                </p>
                <div className="flex items-center mb-2">
                  <IoLogoApple className="mr-2 md:ml-5" size={18} />
                  <p className="mt-1 ml-1 text-sm md:mr-5 sm:text-base">
                    Apple Music
                  </p>
                </div>
                <div className="flex">
                  <IoLogoSoundcloud
                    className="mr-2 text-sm md:ml-4 sm:text-base"
                    size={22}
                  />
                  <p>SoundCloud</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[0px] h-[0px] rounded-[100px] 1xl:ml-3 xl:mr-20 -mt-12 1xl:h-[590px]   0xl:w-[570px]">
        <Image src={hero_img} className="rounded-[110px]" alt=""/>
      </div>
    </div>
  );
};

export default Hero;

{
  /*
  <div className="bg-[#0e053a]  w-full flex flex-col sm:flex-row pt-[65px] items-center px-5 pl-20 sm:pl-6">
        <div className="w-[450px]  sm:mx-auto md:w-[600px] xl:w-[541px] xl:mx-16 xl:mt-4  mr-10 font-[JosefinSans]">
          <div className=" h-[309px] mb-14 w-[300px] md:-mt-8 xl:mb-8">
            <Image src={hero_title} className="z-10" />
          </div>
          <div>
            <p className="text-base text-white -mt-14 md:-mt-0 md:text-lg xl:mb-4">
              Lorem ipsum dolor sit amet consectetur adipiscing elit tincidunt
              in felis malesuada mollis purus id sit in aliquet lectus eget
              morbi dui felis.
            </p>
            <div className="flex flex-col md:flex-row xl:flex-col-reverse">
              <div className="w-[163px] h-[49px] flex items-center justify-center bg-[#0051FF] rounded mb-3 hover:bg-cyan-500 hover:transition-colors hover:delay-150 mt-5 cursor-pointer">
                <IoHeadset size={20} color={"white"} className="mr-2 -mt-1" />
                <p className="text-base text-white">Listen Now</p>
              </div>
              <div className="flex flex-col text-white md:flex-row md:items-center xl:mb-3 md:ml-6 xl:ml-0 xl:mt-4">
                <p className="text-transparent font-[JosefinSansS]  text-[16px] xl:text-[18px] mb-3 md:mb-0 bg-clip-text bg-gradient-to-r from-cyan-200 via-cyan-400 to-blue-500">
                  Subscribe On:
                </p>
                <div className="flex">
                  <IoLogoApple className="mr-2 md:ml-5" size={18} />
                  <p className="ml-1 md:mr-5">Apple Music</p>
                </div>
                <div className="flex">
                  <IoLogoSoundcloud className="mr-2 md:ml-4" size={22} />
                  <p>SoundCloud</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[0px] h-[0px] rounded-[100px] overflow-hidden xl:h-[570px]  xl:w-[570px]">
          <Image src={hero_img} />
        </div>
      </div>*/
}
