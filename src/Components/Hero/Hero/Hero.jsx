import img from "../../../../src/assets/header_kid_d.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <div className="ml-2"></div>
      <div className="px-10 flex flex-row justify-center items-center">
        <div>
          <img src={img} alt="" />
        </div>
        <div>
          <h1 className="text-7xl font-bold text-center text-blue-600">
            Enhance Your <br />{" "}
            <span className="text-purple-500 font-bold">Vocabulary</span>
          </h1>
          <p className=" text-2xl mt-5 mb-4">
            We make learning engaging & effective, <br /> so that you are ready
            to achieve your goals
          </p>
          <div>
            <p className="text-purple-500">
              150 Million+ Words | 200+ Languages | 1000+ Courses
            </p>
          </div>
          <Link to="/learning">
            <button className="btn bg-red-600  text-white rounded-full mt-5">
              Start Learning Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
