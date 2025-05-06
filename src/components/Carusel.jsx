import React from "react";
import Slider from "react-slick";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

import slider1 from "../image/rasm1.jpg";
import slider2 from "../image/rasm2.jpg";
import slider3 from "../image/rasm3.jpg";
import slider4 from "../image/rasm4.jpg";
import slider5 from "../image/rasm5.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Caruselga rasm array
const images = [slider1, slider2, slider3, slider4, slider5];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="max-w-6xl mx-auto py-6">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index}>
            <img
              src={src}
              alt={`Uzum slide ${index + 1}`}
              className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

// Custom arrows
const CustomPrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 z-10"
  >
    <GoChevronLeft size={24} />
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 z-10"
  >
    <GoChevronRight size={24} />
  </button>
);

export default Carousel;
