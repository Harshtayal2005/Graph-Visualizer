import React from "react";
import { TypeAnimation } from "react-type-animation";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate("");

  return (
    <div className="flex flex-col items-center text-white pt-12">
      <div className="sm:h-[18rem] sm:w-[18rem] h-[14rem] w-[14rem] md:h-[20rem] md:w-[20rem] bg-[#163B4B] rounded-full flex items-center justify-center text-[4rem] lg:text-[5rem] shadow-[0px_0px_100px_70px_#2c7a7b] font-dancing-script  ">
        Hello
      </div>

      <div className="px-4 flex justify-center mt-6">
        <TypeAnimation
          className="font-Noto-serif font-bold text-3xl sm:text-5xl lg:text-[3.2rem] text-center"
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "Welcome to Graph Visualizer",
            1500,
          ]}
          wrapper="span"
          speed={50}
          repeat={2}
        />
      </div>

      <div className="flex flex-col justify-center items-center mt-8 gap-8">
        <div className="px-7 ">
          <h1 className=" text-[1.5rem] sm:text-[2rem] lg:text-[2rem] font-bold font-Noto-serif text-center leading-10">
            Create and visualize graphs effortlessly
          </h1>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center mt-1 md:gap-32 mb-10">
          <button
            className="border border-black xsm:py-4 xsm:px-5 py-3 px-3 rounded-full  
            bg-gradient-to-r from-teal-600 to-teal-800 sm:text-[1.2rem] text-[0.8rem] md:text-[1.1rem] font-300  text-white mt-10"
            onClick={() => navigate("/input")}
          >
            GET STARTED
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
