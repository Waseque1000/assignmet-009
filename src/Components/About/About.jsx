import React from "react";
import { FaSchool } from "react-icons/fa";
import About1 from "./About1";
import Feedback from "./Feedback/Feedback";

const About = () => {
  return (
    <div>
      <div>
        <h1 className=" text-center mb-8 text-5xl font-bold text-blue-600">
          Fulfill your learning needs
        </h1>
      </div>
      <div>
        <About1 />
      </div>
      <div className="my-20 text-center  px-40 ">
        <h1 className=" text-center mb-8 text-4xl font-bold text-blue-600">
          Skills are the key to unlocking potential{" "}
        </h1>
        <p className="text-black">
          Mordan Language is a learning platform that empowers learners to
          improve their performance in various domains. It is a platform that
          allows learners to learn more effectively and effectively in the areas
          of English, Math, Science, and more.
        </p>
      </div>
      <Feedback />
    </div>
  );
};

export default About;
