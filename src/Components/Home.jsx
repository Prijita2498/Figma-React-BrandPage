import React from "react";
import hero_image from "../Images/hero_image.png";
import amazon from "../Images/amazon.png";
import flipkart from "../Images/flipkart.png";

function Home() {
  return (
    <div className="flex">
      <div className="w-[50%] ml-40 float-left">
        <p className=" mt-20 text-9xl text-balance font-bold">
          YOUR FEET DESERVE THE BEST
        </p>
        <p className="w-[30rem] mt-10 text-slate-400 text-lg text-wrap text-balance font-bold">
          YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.
          YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES
        </p>

        <div className="flex gap-10 mt-10">
          <button className="bg-red-600 text-white px-3 h-[35px]">
            SHOP NOW
          </button>
          <button className="text-slate-400 border border-slate-400 px-3 h-[35px]">
            CATEGORY
          </button>
        </div>

        <div className="mt-10">
          <p className="text-slate-400">Also Available On</p>
          <div className="flex mt-3">
            <img className="px-3" src={flipkart} alt="flipkart" />
            <img src={amazon} alt="amazon" />
          </div>
        </div>
      </div>

      <div className="float-right items-end">
        <img className="mt-40 h-[40rem]" src={hero_image} alt="hero_image" />
      </div>
    </div>
  );
}

export default Home;
