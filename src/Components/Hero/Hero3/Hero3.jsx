import { Link } from "react-router-dom";
import img from "../../../assets/dictionary-1ffrjz.png";

const Hero3 = () => {
  return (
    <div className="my-14 mt-16 px-4 md:px-20 text-center">
      <div className="flex flex-col md:flex-row items-center md:items-start">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src={img}
            className="w-full max-w-md mx-auto md:max-w-none"
            alt="Dictionary"
          />
        </div>

        {/* Text Section */}
        <div className="mt-8 md:mt-0 md:ml-12 md:w-1/2 text-left">
          <p className="text-lg text-blue-600 mb-3 font-bold text-center md:text-left">
            FOR EVERYONE
          </p>
          <h1 className="text-3xl md:text-4xl mb-3 font-bold text-gray-800">
            Learn the World's Largest <br className="hidden md:block" />{" "}
            Dictionary
          </h1>
          <p className="text-base md:text-lg text-gray-600">
            Our extensive dictionary covers 150 million words, 200+ languages,
            and 1000+ courses.
          </p>
          <Link to="/learning">
            <button className="btn mt-5 bg-blue-600 text-white rounded-full py-2 px-8 transition-all hover:bg-blue-700">
              Start Learning Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero3;
