import React from "react";
import {
  FaMicrosoft,
  FaDiscord,
  FaApple,
  FaAmazon,
  FaUber,
} from "react-icons/fa";

function Clients() {
  return (
    <div className="flex-col items-center justify-center my-40 ">
      <p className="text-center uppercase text-violet-500">
        <b>Clients</b>
      </p>
      <h2 className="text-5xl text-center">
        Awesome<span className="font-bold"> Clients</span>
      </h2>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-3 gap-8 mt-10 md:grid-cols-5">
          <FaMicrosoft className="text-6xl text-gray-300 cursor-pointer hover:text-black" />
          <FaDiscord className="text-6xl text-gray-300 cursor-pointer hover:text-black" />
          <FaApple className="text-6xl text-gray-300 cursor-pointer hover:text-black" />
          <FaAmazon className="text-6xl text-gray-300 cursor-pointer hover:text-black" />
          <FaUber className="text-6xl text-gray-300 cursor-pointer hover:text-black" />
        </div>
      </div>
    </div>
  );
}

export default Clients;
