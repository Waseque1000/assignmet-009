import React from "react";
import img from "../../../../src/assets/1709383406350.png";
import Marquee from "react-fast-marquee";
import { PiGraduationCapFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import OfferCountdownTimer from "../../Coundown/OfferCountdownTimer";

const Hero2 = () => {
  return (
    <div className="px-20 my-20">
      <div className=" px-20 py-20 text-right  ">{/* TODO: */}</div>
      <div className=" flex flex-row justify-between items-center">
        <div className="pr-28">
          <h1 className="text-4xl font-bold text-blue-500">
            Enhance your Vocabulary by using Ai
          </h1>
          <Marquee className="text-2xl   py-3   px-2 mt-2 -mr-8">
            Lingo Bingo offers an AI-powered tool that helps you improve your
            vocabulary and learn new words effortlessly. Start using it today!
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
      <div className="fixed top-1/2 right-4 transform -translate-y-1/2 z-40">
        <OfferCountdownTimer />
      </div>
    </div>
  );
};

export default Hero2;
