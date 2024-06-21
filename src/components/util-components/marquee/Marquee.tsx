import React, { useRef, useEffect, useState, ReactNode } from "react";
import { marquee, marqueeWrapper, maskImage } from "./Marquee.css";
import { debounce } from "@/utils/helpers";

interface MarqueeProps {
  className?: string;
  children: ReactNode;
}

const Marquee: React.FC<MarqueeProps> = ({ className, children }) => {
  const [needsDuplicate, setNeedsDuplicate] = useState(false);
  const [translateWidth, setTranslateWidth] = useState(0);
  const [duration, setDuration] = useState(0);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const isHovered = useRef(false);
  const paddingLeft = 24;
  const hoverTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const calculateAnimation = () => {
      const marqueeElement = marqueeRef.current;
      const wrapperElement = wrapperRef.current;

      if (marqueeElement && wrapperElement) {
        const wrapperWidth =
          wrapperElement.childElementCount === 2
            ? wrapperElement.scrollWidth / 2
            : wrapperElement.scrollWidth;
        const marqueeWidth = marqueeElement.offsetWidth;

        if (wrapperWidth > marqueeWidth) {
          // Calculates if element overflows
          setNeedsDuplicate(true); // triggers state to add 2nd element for smooth marquee animation.
          setTranslateWidth(wrapperWidth + paddingLeft);
          setDuration(wrapperWidth * 20);
        } else {
          setNeedsDuplicate(false);
        }
      }
    };
    const calculateAnimationDebounced = debounce(calculateAnimation, 300);
    calculateAnimation();
    window.addEventListener("resize", calculateAnimationDebounced);

    return () => {
      window.removeEventListener("resize", calculateAnimationDebounced);
    };
  }, [paddingLeft]);

  const startAnimation = () => {
    const wrapperElement = wrapperRef.current;
    if (wrapperElement && wrapperElement.getAnimations().length < 1) {
      // avoid adding more than 1 animation
      const animation = wrapperElement.animate(
        [
          { transform: "translateX(0)" },
          { transform: `translateX(-${translateWidth}px)` },
        ],
        { duration: duration, iterations: 1 }
      );

      animation.onfinish = () => {
        if (isHovered.current) {
          startAnimation();
        }
      };
    }
  };

  const handleMouseEnter = () => {
    if (needsDuplicate) {
      hoverTimeoutRef.current = window.setTimeout(() => {
        isHovered.current = true;
        startAnimation();
      }, 1000);
    }
  };

  const handleMouseLeave = () => {
    if (needsDuplicate) {
      isHovered.current = false;
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
        hoverTimeoutRef.current = null;
      }
    }
  };

  return (
    <div
      className={`${marquee} ${needsDuplicate && maskImage}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={marqueeRef}
    >
      <div className={`${marqueeWrapper}`} ref={wrapperRef}>
        <div>
          <p className={`${className}`}>{children}</p>
        </div>
        {needsDuplicate && (
          <div style={{ paddingLeft: `${paddingLeft}px` }}>
            <p className={`${className}`}>{children}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Marquee;
