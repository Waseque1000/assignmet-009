import { useState } from "react";
import img1 from "../../../assets/download (1).jpeg"; // Add your image paths here
import img2 from "../../../assets/download.jpeg";
import img3 from "../../../assets/images.jpeg";

const testimonials = [
  {
    id: 1,
    img: img1,
    name: "Matthew Cody",
    position: "Student",
    feedback:
      "Lingo Bingo has made learning Spanish vocabulary a breeze. The interactive features and engaging exercises keep me motivated daily. I especially love how it introduces cultural context for each word—it feels like I'm exploring the world through words!",
  },
  {
    id: 2,
    img: img2,
    name: "Jane Doe",
    position: "Doctor",
    feedback:
      "This app is a game-changer for language learners! As an ESL tutor, I recommend Lingo Bingo to my students to improve their vocabulary in fun and effective ways. The clear visuals and pronunciation tools are particularly helpful for beginners.",
  },
  {
    id: 3,
    img: img3,
    name: "John Smith",
    position: "Software Engineer",
    feedback:
      "Expanding my vocabulary in multiple languages has never been easier. Lingo Bingo's fun and dynamic approach helps me stay sharp while preparing for my trips abroad. I love the streak rewards—it keeps me coming back every day!",
  },
];

const Feedback = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="flex justify-center items-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-purple-50 p-6 sm:p-8 rounded-lg shadow-lg max-w-4xl w-full">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-black">
          Life @ Lingo Bingo
        </h2>
        <div className="flex flex-col sm:flex-row items-center">
          {/* Image */}
          <img
            src={currentTestimonial.img}
            alt={currentTestimonial.name}
            className="w-32 h-32 sm:w-36 sm:h-36 rounded-lg object-cover shadow-md sm:mr-8 mb-4 sm:mb-0"
          />
          {/* Content */}
          <div className="mt-4 sm:mt-0 text-center sm:text-left">
            <h3 className="text-xl font-semibold">{currentTestimonial.name}</h3>
            <p className="text-blue-600 font-medium">
              {currentTestimonial.position}
            </p>
            <p className="text-gray-700 mt-3 text-sm sm:text-base">
              {currentTestimonial.feedback}
            </p>
          </div>
        </div>
        {/* Navigation Buttons */}
        <div className="flex justify-center items-center mt-6 space-x-4">
          <button
            onClick={handlePrev}
            className="p-2 bg-gray-300 rounded-full hover:bg-gray-400 transition"
            aria-label="Previous"
          >
            ❮
          </button>
          <button
            onClick={handleNext}
            className="p-2 bg-gray-300 rounded-full hover:bg-gray-400 transition"
            aria-label="Next"
          >
            ❯
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
