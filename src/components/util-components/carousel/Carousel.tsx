import { useState } from 'react';
import { carouselInner, carouselList, carouselStyle, slideStyle } from './Carousel.css';

const Carousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide(currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide - 1);
  };

  return (
    <div className={carouselStyle}>
      <div className={carouselInner} style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        <ul className={carouselList}>
        {slides.map((slide, index) => (
          <li key={index} className={slideStyle}>
            {slide}
          </li>
        ))}
        </ul>
      </div>
      <button className="carousel-control prev" onClick={prevSlide}>&#10094;</button>
      <button className="carousel-control next" onClick={nextSlide}>&#10095;</button>
    </div>
  );
};

export default Carousel;
