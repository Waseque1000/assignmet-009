import { Link } from "react-router-dom";
import img from "../../../assets/dictionary-1ffrjz.png";
const Hero3 = () => {
  return (
    <div className="my-14 mt-16 text-center px-20">
      <div className="flex flex-row">
        <div>
          <img src={img} className="w-full" alt="" />
        </div>
        <div className="ml-20 text-left">
          <p className="text-1xl text-blue-600 mb-3 font-bold">FOR EVERYONE</p>
          <h1 className="text-4xl mb-3">
            Learn the World's Largest <br /> Dictionary
          </h1>
          <p>
            Our extensive dictionary covers 150 million words, 200+ languages,
            and 1000+ courses.
          </p>
          <Link to="/learning">
            <button className="btn mt-3 bg-blue-600 text-white rounded-full py-2 px-12">
              Start Learning Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero3;
