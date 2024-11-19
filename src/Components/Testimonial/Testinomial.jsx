import React from "react";
import Slider from "react-slick";
import img1 from "../../../src/assets/images.jpeg";
import img2 from "../../../src/assets/images (1).jpeg";
import img3 from "../../../src/assets/images (2).jpeg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rahim",
      feedback:
        "This platform transformed my learning experience! Highly recommended.",
      image: img1,
    },
    {
      name: "Moon",
      feedback:
        "The courses are amazing, and the platform is so intuitive to use.",
      image: img2,
    },
    {
      name: "Mahbeen",
      feedback: "I love how engaging and interactive the modules are. A++",
      image: img3,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-6">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-lg shadow-lg text-center bg-gray-100 mx-4"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
              />
              <p className="text-gray-700 italic mb-4">
                "{testimonial.feedback}"
              </p>
              <h3 className="text-blue-600 font-bold mt-2">
                - {testimonial.name}
              </h3>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
