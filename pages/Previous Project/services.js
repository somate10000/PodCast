import React from "react";
import {
  MdWeb,
  MdOutlineDesignServices,
  MdChatBubbleOutline,
} from "react-icons/md";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { GiGrowth } from "react-icons/gi";
import { SiAzuredevops } from "react-icons/si";

function Services() {
  return (
    <div className="flex-col items-center justify-center my-20">
      <p className="text-center uppercase text-violet-500 ">
        <b>Services</b>
      </p>
      <h2 className="text-5xl text-center">
        Our Best <span className="font-bold">Services</span>
      </h2>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-2 gap-5 my-20 md:mx-10 md:grid-cols-3">
          <div className="flex-col items-center justify-center p-8 border rounded-md cursor-pointer group hover:bg-violet-500 hover:shadow-lg border-violet-100 hover:border-violet-500">
            <MdWeb className="text-4xl text-gray-600 group-hover:text-white" />
            <h1 className="my-2 text-xl font-semibold text-gray-800 group-hover:text-white">
              Web Development
            </h1>
          </div>
          <div className="flex-col items-center justify-center p-8 border rounded-md cursor-pointer group hover:bg-violet-500 hover:shadow-lg border-violet-100 hover:border-violet-500">
            <AiOutlineAppstoreAdd className="text-4xl text-gray-600 group-hover:text-white" />
            <h1 className="my-2 text-xl font-semibold text-gray-800 group-hover:text-white">
              App Development
            </h1>
          </div>
          <div className="flex-col items-center justify-center p-8 border rounded-md cursor-pointer group hover:bg-violet-500 hover:shadow-lg border-violet-100 hover:border-violet-500">
            <MdOutlineDesignServices className="text-4xl text-gray-600 group-hover:text-white" />
            <h1 className="my-2 text-xl font-semibold text-gray-800 group-hover:text-white">
              UI/UX Desgin
            </h1>
          </div>
          <div className="flex-col items-center justify-center p-8 border rounded-md cursor-pointer group hover:bg-violet-500 hover:shadow-lg border-violet-100 hover:border-violet-500">
            <MdChatBubbleOutline className="text-4xl text-gray-600 group-hover:text-white" />
            <h1 className="my-2 text-xl font-semibold text-gray-800 group-hover:text-white">
              AI Chatbot
            </h1>
          </div>
          <div className="flex-col items-center justify-center p-8 border rounded-md cursor-pointer group hover:bg-violet-500 hover:shadow-lg border-violet-100 hover:border-violet-500">
            <GiGrowth className="text-4xl text-gray-600 group-hover:text-white" />
            <h1 className="my-2 text-xl font-semibold text-gray-800 group-hover:text-white">
              Growth Hacking
            </h1>
          </div>
          <div className="flex-col items-center justify-center p-8 border rounded-md cursor-pointer group hover:bg-violet-500 hover:shadow-lg border-violet-100 hover:border-violet-500">
            <SiAzuredevops className="text-4xl text-gray-600 group-hover:text-white" />
            <h1 className="my-2 text-xl font-semibold text-gray-800 group-hover:text-white">
              Devops
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
