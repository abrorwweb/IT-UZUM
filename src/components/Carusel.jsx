import { useEffect, useState } from "react";
import rasm1 from "../image/rasm1.jpg";
import rasm2 from "../image/rasm2.jpg";
import rasm3 from "../image/rasm3.jpg";
import rasm4 from "../image/rasm4.jpg";
import rasm5 from "../image/rasm5.jpg";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

const Carousel = () => {
  const slides = [rasm1, rasm2, rasm3, rasm4, rasm5];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full h-[450px] mt-10 mb-10 z-0 "> 
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          alt={`Slide ${index + 1}`}
        />
      ))}
      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <button
          onClick={() =>
            setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
          }
          className="btn btn-circle bg-white bg-opacity-50 hover:bg-opacity-75" 
        >
          <GoChevronLeft size={35} />
        </button>
        <button
          onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
          className="btn btn-circle bg-white bg-opacity-50 hover:bg-opacity-75" 
        >
          <GoChevronRight size={35} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;