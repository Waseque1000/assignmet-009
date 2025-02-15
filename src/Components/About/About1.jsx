import React from "react";
import img from "../../../src/assets/WhatsApp Image 2024-11-18 at 9.55.05 AM.jpeg";
import img1 from "../../../src/assets/images.jpeg";
import img2 from "../../../src/assets/images (1).jpeg";
import img3 from "../../../src/assets/images (2).jpeg";
import Testimonials from "../Testimonial/Testinomial";
import { Link } from "react-router-dom";

const About1 = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-12 md:py-16 flex flex-col md:flex-row items-center space-y-10 md:space-y-0">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600 leading-tight">
            Transforming <br />
            <span className="text-purple-600">Learning</span> Experiences
          </h1>

          <p className="text-gray-700 text-lg">
            We're passionate about creating innovative educational solutions
            that inspire growth, curiosity, and personal development.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 py-4">
            {[
              {
                title: "Interactive",
                description: "Engaging learning modules",
              },
              { title: "Adaptive", description: "Personalized learning paths" },
              {
                title: "Comprehensive",
                description: "Holistic educational approach",
              },
              { title: "Global", description: "Supports multiple languages" },
              { title: "Collaborative", description: "Peer-driven learning" },
              { title: "Accessible", description: "Learn anywhere, anytime" },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-4 rounded-lg text-center bg-gray-100 hover:bg-gray-200 transition duration-200"
              >
                <h3 className="font-bold text-blue-600">{feature.title}</h3>
                <p className="text-xs mt-1 text-gray-700">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className=" text-center flex-col sm:flex-row gap-4">
            <Link to="/learning">
              <button className="bg-blue-600 mr-3  text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                Get Started
              </button>
            </Link>
            <Link>
              <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition">
                Learn More
              </button>
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center relative">
          <div className="absolute w-64 h-64 bg-purple-300 rounded-lg -rotate-6 -z-10"></div>
          <img
            src={img}
            alt="Learning Experience"
            className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 object-cover rounded-lg shadow-xl"
          />
        </div>
      </div>

      {/* Vision & Mission Section */}
      <div className="container mx-auto px-6 py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          {/* Vision Section */}
          <div className="text-center md:text-left space-y-6 md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600">
              Our Vision
            </h2>
            <p className="text-gray-700 text-lg">
              To empower learners worldwide with tools and resources that foster
              lifelong learning and personal development.
            </p>
          </div>

          {/* Mission Section */}
          <div className="text-center md:text-left space-y-6 md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-600">
              Our Mission
            </h2>
            <p className="text-gray-700 text-lg">
              To create inclusive, engaging, and innovative educational
              solutions that bridge gaps and unlock potential for every learner.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-6 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {[
            { value: "500K+", label: "Happy Learners" },
            { value: "1200+", label: "Courses Offered" },
            { value: "50+", label: "Countries Reached" },
            { value: "99%", label: "User Satisfaction" },
          ].map((stat, index) => (
            <div key={index}>
              <h3 className="text-4xl font-bold text-blue-600">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-600">
            What Our Learners Say
          </h2>
          <Testimonials />
        </div>
      </div>

      {/* Footer */}
      <div className="bg-blue-600 text-white py-4 text-center">
        <p className="text-lg">Discover Your Potential | Unlock New Horizons</p>
      </div>
    </div>
  );
};

export default About1;
