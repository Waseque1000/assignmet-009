import React from "react";
import OfferCountdownTimer from "../../Coundown/OfferCountdownTimer";
import { Link } from "react-router-dom";

const Webabout = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 font-sans">
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Mission</h2>
        <div className="bg-blue-50 p-6 rounded-lg shadow-md text-center">
          <p className="text-lg text-gray-700">
            We believe that building a strong vocabulary is the key to effective
            communication and intellectual growth.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-center mb-8">
          How We Help You Learn Vocabularies
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mr-3 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                />
              </svg>
              Interactive Learning Approach
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 mr-2 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Gamified Learning
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 mr-2 text-purple-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                Personalized Word Lists
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 mr-2 text-orange-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
                Adaptive Difficulty
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mr-3 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Learning Techniques
            </h3>
            <ol className="space-y-3 text-gray-700 list-decimal pl-5">
              <li>Context-Based Learning</li>
              <li>Spaced Repetition System</li>
              <li>Multi-Modal Learning</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Key Features
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            "Daily vocabulary challenges",
            "Progress tracking",
            "Multiple language support",
            "Vocabulary quizzes",
            "Word origin and etymology insights",
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-blue-100 p-4 rounded-lg text-center hover:bg-blue-200 transition-colors"
            >
              {feature}
            </div>
          ))}
        </div>
      </section>

      <section className="text-center bg-blue-600 text-white py-12 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Our Commitment</h2>
        <p className="max-w-2xl mx-auto mb-6 text-lg">
          We're passionate about making language learning accessible, fun, and
          effective for everyone, regardless of age or background.
        </p>
        <Link to="/learning">
          <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition-colors">
            Start Your Vocabulary Journey Today!
          </button>
        </Link>
      </section>
      {/* Fixed Countdown Timer */}
      {/* <div className="fixed top-1/2 right-4 transform -translate-y-1/2 z-50">
        <OfferCountdownTimer />
      </div> */}
    </div>
  );
};

export default Webabout;
