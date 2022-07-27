import React from "react";
import Image from "next/image";
import newsletter from "../components/assets/newsletter-bg.jpg";

const SignUp = () => {
  return (
    <div className="bg-[#0e053a]">
      <div className="flex mx-[7%] lg:px-[3%] xl:px-0 lg:mx-[3%] xl:mx-[6%] h-[400px] sm:h-[295px] justify-center  lg:h-[250px] ">
        <Image alt="" src={newsletter} className="object-cover h-full rounded-2xl" />
        <div className="flex flex-col lg:flex-row items-center md:justify-center  md:h-[300px]  mx-[10%]   absolute  text-white">
          <div className="mx-3 mt-14 md:-mt-5 sm:mt-10  lg:w-[450px] xl:w-[510px]">
            <h3 className="text-[25px] md:text-[32px] font-[JosefinSanss]">
              Sign Up For Our Newsletter. It’s Free!
            </h3>
            <p className="text-[15px] md:mb-6 md:mt-3 md:text-[18px] font-[JosefinSans]">
              Lorem ipsum dolor sit amet consectetur adipiscing elit tincidunt
              todeiy felis malesuada mollis purus id sit in aliquet.
            </p>
          </div>
          <div className="w-[93%] md:hidden  h-[57px] mt-5 flex items-center  bg-white/40 border pl-5 pr-[2px] border-white rounded">
            <input
              placeholder="Your Email Address"
              className="font-[JosefinSans] w-full h-full pr-5 placeholder:text-white text-[18px] bg-transparent  outline-none "
            />
          </div>
          <button className="w-[93%] md:hidden h-[50px] sm:mt-3 sm:w-[50%] mt-8 flex items-center justify-center bg-[#0051FF] rounded ">
            <p className="text-white text-[17px] mt-1 font-[JosefinSans]">
              Subscribe
            </p>
          </button>
          <div className="w-0 h-0 md:w-[510px] lg:w-[400px] xl:w-[510px] hidden md:flex  md:h-[57px]  items-center  bg-white/40 border pl-5 pr-[2px] border-white rounded">
            <input
              placeholder="Your Email Address"
              className="font-[JosefinSans] w-full h-full pr-5 placeholder:text-white text-[18px] bg-transparent  outline-none "
            />

            <button className="md:w-[200px] md:h-[50px]   flex items-center justify-center bg-[#0051FF] rounded ">
              <p className="text-white text-[17px] mt-1 font-[JosefinSans]">
                Subscribe
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

{
  /*
<div className=" flex items-center justify-between  px-12  absolute h-[270px] w-[1170px] text-white">
        <div className="w-[510px] ">
          <h3 className="text-[30px] font-[JosefinSanss]">
            Sign Up For Our Newsletter. It’s Free!
          </h3>
          <p className="text-[18px] font-[JosefinSans]">
            Lorem ipsum dolor sit amet consectetur adipiscing elit tincidunt
            todeiy felis malesuada mollis purus id sit in aliquet.
          </p>
        </div>
        <div className="w-[510px] h-[57px] flex items-center  bg-white/40 border pl-5 pr-[2px] border-white rounded">
          <input
            placeholder="Your Email Address"
            className="font-[JosefinSans] w-full h-full pr-5 placeholder:text-white text-[18px] bg-transparent  outline-none "
          />

          <button className="w-[200px] h-[50px]   flex items-center justify-center bg-[#0051FF] rounded ">
            <p className="text-white text-[17px] mt-1 font-[JosefinSans]">
              Subscribe
            </p>
          </button>
        </div>
      </div>*/
}
