import React from "react";
import Image from "next/image";
import Favicon from "../public/19362653.jpg"; //4565.jp

function HeroPage() {
  return (
    <div className="mx-0 min-w-7xl md:mx-20 ">
      <div className="flex flex-col items-center justify-between my-15 mt-20 md:flex-row">
        <div className="flex-col px-10">
          <h1 className="text-6xl font-bold text-violet-500">
            We are the{" "}
            <span className="text-violet-900">complete solution</span> for your{" "}
            <span className="border-b border-blue-200 text-violet-900">
              brand
            </span>
          </h1>
          <p className="mt-5 mb-10 text-2xl text-gray-400">
            we build beautiful & scalable web and mobile applications.
          </p>
          <button className="px-8 border-2 border-blue-500 rounded-md text-violet-400 hover:bg-violet-500 hover:shadow-lg h-14 hover:text-white">
            See Our Work
          </button>
        </div>
        <div className="px-1 m-5 sm:-my-4 ">
          <Image src={Favicon} width={1000} height={1000} objectFit="contain" />
        </div>
      </div>
    </div>
  );
}

export default HeroPage;
