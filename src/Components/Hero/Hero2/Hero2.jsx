import React from "react";
import img from "../../../../src/assets/1709383406350.png";
import Marquee from "react-fast-marquee";
import { PiGraduationCapFill } from "react-icons/pi";
import { Link } from "react-router-dom";

const Hero2 = () => {
  return (
    <div className="px-10 my-20">
      <div className=" flex flex-row justify-between items-center">
        <div className="pr-28">
          <h1 className="text-4xl font-bold text-blue-500">
            Enhance your Vocabulary by using Ai
          </h1>
          <Marquee className="text-2xl bg-blue-100 py-3   px-2 mt-2 -mr-8">
            I can be a React component, multiple React components, or just some
            text.
          </Marquee>
          <p className="mt-8">Step into the future of education with</p>
          <Link to="/">
            <div className="flex  items-center">
              <PiGraduationCapFill className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-4xl font-bold text-blue-600">
                Lingo Bingo
              </span>
            </div>
          </Link>
        </div>
        <div>
          <img className="mr-28" src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero2;
