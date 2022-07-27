import React from "react";
import Image from "next/image";
import { IoPlay } from "react-icons/io5";
import pod1 from "../components/assets/podcast-1.png";
import pod2 from "../components/assets/podcast-2.png";
import pod3 from "../components/assets/podcast-3.png";
import pod4 from "../components/assets/podcast-4.png";
import pod5 from "../components/assets/podcast-5.png";
import pod6 from "../components/assets/podcast-6.png";
import pod7 from "../components/assets/podcast-7.png";
import pod8 from "../components/assets/podcast-8.png";

const pod = [
  {
    id: 1,
    name: "Tube Preamps, TLM103 vs. OJ 818, Podcastage's Beanies",
    date: "Feb 15, 2022",
    ep: "Episodes: 01",
    img: pod1,
  },
  {
    id: 2,
    name: "Ask Unladylike: Late Bloomer with Forever 35",
    date: "Feb 15, 2022",
    ep: "Episodes: 02",
    img: pod2,
  },
  {
    id: 3,
    name: "How to Effectively Incentivize Team Members",
    date: "Feb 15, 2022",
    ep: "Episodes: 03",
    img: pod3,
  },
  {
    id: 4,
    name: "How to go from Start-Up to Scale-Up",
    date: "Feb 15, 2022",
    ep: "Episodes: 04",
    img: pod4,
  },
  {
    id: 5,
    name: "Deadbuttons – Tired of You | Live at Club Heavy",
    date: "Feb 15, 2022",
    ep: "Episodes: 04",
    img: pod5,
  },
  {
    id: 6,
    name: "Boogie Through the Universe with SOWO",
    date: "Feb 15, 2022",
    ep: "Episodes: 04",
    img: pod6,
  },
  {
    id: 7,
    name: "Glittering Blackness, Fall – 4 | Live at Club Heavy",
    date: "Feb 15, 2022",
    ep: "Episodes: 04",
    img: pod7,
  },
  {
    id: 8,
    name: "The Meditative Photos of Chaelinjane",
    date: "Feb 15, 2022",
    ep: "Episodes: 04",
    img: pod8,
  },
];

const Podcast = () => {
  return (
    <div className="bg-[rgb(14,5,58)] grid items-center justify-center pt-8 sm:pt-0 0xl:-mt-24 pb-8 0xl:pb-36">
      <div className="grid w-full sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 0xl:grid-cols-4">
        {pod.map((pod,index) => {
          return (
            //w-[370px]
            <div key={index} className="  sm:w-[290px] mb-10 sm:h-[380px] md:w-[310px] 0xl:w-[270px] 0xl:h-[270px] 0xl:mt-24 group cursor-pointer sm:mx-4 mx-[10%] sm:px-0">
              <Image
                src={pod.img}
                alt=""
                className="object-contain rounded-xl group-hover:opacity-70" //270px
              />
              <div className=" w-[270px] h-[270px] hover:bg-white/5 group-hover:delay-100 rounded-xl -mt-[275px]" />
              <div className="bg-green-300 pl-[45%] sm:pl-[75%]">
                <div
                  className=" w-12 h-12 mx-auto absolute -mt-[78px] 78 220 group-hover:bg-white border-2 flex items-center justify-center border-white rounded-full"
                  style={{
                    transition: "0.5s",
                    transitionDelay: "0.1ms",
                  }}
                >
                  <IoPlay
                    className="text-white group-hover:delay-100 group-hover:text-blue-500"
                    size={20}
                  />
                </div>
              </div>
              <div className="flex items-center text-[#ACA7BE] justify-between mt-2  font-[JosefinSans] text-[18px]">
                <div className="flex items-center ">
                  <div className="w-6 h-[2px] mr-2 bg-[#ACA7BE]" />
                  <p>{pod.date}</p>
                </div>
                <p>{pod.ep}</p>
              </div>
              <p
                className="text-white text-[20px] font-[JosefinSansS] mt-1 
              group-hover:underline group-hover:underline-offset-4 group-hover:ease-linear group-hover:delay-500 
              group-hover:decoration-blue-900 group-hover:transition"
              >
                {pod.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Podcast;
