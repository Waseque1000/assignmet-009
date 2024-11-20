import img from "../../../../src/assets/1709383406350.png";
import Marquee from "react-fast-marquee";
import { PiGraduationCapFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import OfferCountdownTimer from "../../Coundown/OfferCountdownTimer";

const Hero2 = () => {
  return (
    <div className="px-5 lg:px-20 my-20">
      {/* Main Content Section */}
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-10">
        {/* Text Section */}
        <div className="lg:pr-20 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl font-bold text-blue-500 leading-tight">
            Enhance your Vocabulary by using AI
          </h1>
          <Marquee className="text-lg sm:text-xl py-3 mt-2 bg-gray-100 rounded-lg px-4">
            Lingo Bingo offers an AI-powered tool that helps you improve your
            vocabulary and learn new words effortlessly. Start using it today!
          </Marquee>
          <p className="mt-8 text-sm sm:text-base text-gray-700">
            Step into the future of education with
          </p>
          <Link to="/">
            <div className="flex items-center justify-center lg:justify-start mt-4">
              <PiGraduationCapFill className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-2xl sm:text-4xl font-bold text-blue-600">
                Lingo Bingo
              </span>
            </div>
          </Link>
        </div>

        {/* Image Section */}
        <div className="flex justify-center lg:justify-end">
          <img
            className="w-full max-w-sm sm:max-w-md lg:max-w-lg rounded-lg shadow-lg"
            src={img}
            alt="AI Vocabulary Learning"
          />
        </div>
      </div>

      {/* Countdown Timer */}
      <div className="fixed top-1/2 right-4 transform -translate-y-1/2 z-40">
        <OfferCountdownTimer />
      </div>
    </div>
  );
};

export default Hero2;
