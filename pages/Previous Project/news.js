import React from "react";
import { FcBbc } from "react-icons/fc";
import { SiCnn, SiDesignernews } from "react-icons/si";

function News() {
  return (
    <div className="flex-col items-center justify-center my-20">
      <p className="text-center uppercase text-violet-500">
        <b>Press</b>
      </p>
      <h2 className="text-5xl text-center ">
        Press <span className="font-bold">Attention</span>
      </h2>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 gap-5 mx-10 my-20 md:grid-cols-3">
          <div className="flex-col items-center justify-center p-8 border rounded-lg cursor-pointer group hover:border-violet-500 border-violet-100">
            <FcBbc className="text-4xl text-gray-600 " />
            <h2 className="my-2 text-xl font-semibold text-gray-800 group-hover:text-violet-500">
              Best Agency for apps & web product with quality work.
            </h2>
            <a
              href="#"
              className="text-xl text-violet-500 group-hover:text-violet-500"
            >
              Read More...
            </a>
          </div>
          <div className="flex-col items-center justify-center p-8 border rounded-lg cursor-pointer group hover:border-violet-500 border-violet-100">
            <SiCnn className="text-4xl text-gray-600 " />
            <h2 className="my-2 text-xl font-semibold text-gray-800 group-hover:text-violet-500">
              Product Hunt for Online Programming Courses & tutorials.
            </h2>
            <a
              href="#"
              className="text-xl text-violet-500 group-hover:text-violet-500"
            >
              Read More...
            </a>
          </div>
          <div className="flex-col items-center justify-center p-8 border rounded-lg cursor-pointer group hover:border-violet-500 border-violet-100">
            <SiDesignernews className="text-4xl text-gray-600 " />
            <h2 className="my-2 text-xl font-semibold text-gray-800 group-hover:text-violet-500">
              Best Agency for didgital products with full ownership.
            </h2>
            <a
              href="#"
              className="text-xl text-violet-500 group-hover:text-violet-500"
            >
              Read More...
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
