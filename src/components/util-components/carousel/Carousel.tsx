import { useEffect, useState } from "react";
import {
  carouselInner,
  carouselList,
  carouselStyle,
  controlButton,
} from "./Carousel.css";
import { container } from "@/app/App.css";
import { sprinkles } from "@/styles/sprinkles.css";
import { debounce } from "@/utils/helpers";

const Carousel = ({ slides, heading }) => {
  console.log("rerender");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesPerPage, setSlidesPerPage] = useState(() =>
    window.innerWidth >= 1728 ? 5 : 4
  );
  useEffect(() => {
    const updateSlidesPerPage = () => {
      if (window.innerWidth >= 1728) {
        setSlidesPerPage(5);
      } else {
        setSlidesPerPage(4);
      }
    };
    const debouncedUpdateSlidesPerPage = debounce(updateSlidesPerPage, 300);
    window.addEventListener("resize", debouncedUpdateSlidesPerPage);

    return () =>
      window.removeEventListener("resize", debouncedUpdateSlidesPerPage);
  }, []);
  const nextSlide = () => {
    setCurrentSlide(currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide - 1);
  };
  return (
    <div className={container}>
      <div className={`${carouselStyle}`}>
        <div
          className={sprinkles({
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          })}
        >
          <h2>Heading</h2>
          <div className={sprinkles({ display: "flex", gap: "size-3" })}>
            <button
              disabled={currentSlide <= 0}
              className={controlButton}
              onClick={prevSlide}
              aria-label="Previous slide"
            >
              <span className={sprinkles({ fontSize: "font-size-6" })}>
                <i className="fa-solid fa-chevron-left"></i>
              </span>
            </button>
            <button
              disabled={
                currentSlide >= Math.floor((slides.length - 1) / slidesPerPage)
              }
              className={controlButton}
              onClick={nextSlide}
              aria-label="Next slide"
            >
              <span className={sprinkles({ fontSize: "font-size-6" })}>
                <i className="fa-solid fa-chevron-right"></i>
              </span>
            </button>
          </div>
        </div>
        <div
          className={carouselInner}
          style={{
            transform: `translateX(calc(-${
              currentSlide * 100
            }% - calc(var(--carousel-gap) * ${currentSlide})))`,
          }} // calculate translate: total width - total of grid gaps
        >
          <ul className={carouselList}>
            {slides.map((slide, index) => (
              <li key={index}>{slide}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
