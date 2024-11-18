import React from "react";
import img from "../../../src/assets/WhatsApp Image 2024-11-18 at 9.55.05 AM.jpeg";

const About1 = () => {
  return (
    <div>
      <div className="bg-white">
        {/* Main Section */}
        <div className="container mx-auto px-6 py-16 flex flex-col lg:flex-row items-center">
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-6xl font-bold text-blue-500">
              Welcome to where <br /> possibilities begin
            </h1>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2 flex justify-center mt-6 lg:mt-0 relative">
            <div className="absolute w-40 h-40 lg:w-60 lg:h-60 bg-purple-500 -z-10 rounded-lg"></div>
            <img
              src={img}
              alt="Profile"
              className="relative z-10 w-48 lg:w-64 rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-black py-4 text-center">
          <p className="text-white font-medium">
            Check out our latest Vocabulary news!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About1;
