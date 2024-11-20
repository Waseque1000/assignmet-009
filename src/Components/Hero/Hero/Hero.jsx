import img from "../../../../src/assets/header_kid_d.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-base-100 py-10">
      <div className="container mx-auto px-5 lg:px-20 flex flex-col lg:flex-row items-center justify-between">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center mb-10 lg:mb-0">
          <img
            src={img}
            alt="Learning Kid"
            className="max-w-full lg:max-w-lg rounded-lg shadow-md"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-blue-600 leading-snug">
            Enhance Your <br />
            <span className="text-purple-500 font-bold">Vocabulary</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mt-5 mb-4 text-gray-700">
            We make learning engaging & effective, <br />
            so that you are ready to achieve your goals.
          </p>
          <div className="mb-5">
            <p className="text-purple-500 text-sm sm:text-base lg:text-lg">
              150 Million+ Words | 200+ Languages | 1000+ Courses
            </p>
          </div>
          <Link to="/learning">
            <button className="btn bg-red-600 text-white rounded-full px-8 py-3 hover:bg-red-700 transition duration-200">
              Start Learning Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
