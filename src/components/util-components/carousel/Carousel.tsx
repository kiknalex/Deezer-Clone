import { useState } from "react";
import {
  carouselInner,
  carouselList,
  carouselStyle,
  slideStyle,
  varGap,
  
} from "./Carousel.css";
import { container } from "@/app/App.css";
import { sprinkles } from "@/styles/sprinkles.css";

const Carousel = ({ slides, heading }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide(currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide - 1);
  };

  return (
    <div className={container}>
      <div className={`${carouselStyle}`}>
        <div className={sprinkles({display: "flex", justifyContent: "space-between"})}>
          <h2>Heading</h2>
          <div>
          <button className="carousel-control prev" onClick={prevSlide}>
            &#10094;
          </button>
          <button className="carousel-control next" onClick={nextSlide}>
            &#10095;
          </button>
          </div>
        </div>
        <div
          className={carouselInner}
          style={{ transform: `translateX(calc(-${currentSlide * 100}% - calc(var(--carousel-gap) * ${currentSlide})))` }} // calculate translate: total width - grid gaps
        >
          <ul className={carouselList}>
            {slides.map((slide, index) => (
              <li key={index} className={slideStyle}>
                {slide}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
