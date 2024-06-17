import { ReactNode, RefObject, useEffect, useRef, useState } from "react";
import { tooltip } from "./HoverTooltip.css";
import { debounce } from "../../../utils/helpers";
interface HoverTooltipProps {
  onPointerEnter: () => void;
  onPointerLeave: () => void;
  buttonRef: RefObject<HTMLButtonElement>;
  className?: string;
  children: ReactNode;
}

const HoverTooltip = ({
  onPointerEnter,
  onPointerLeave,
  buttonRef,
  className,
  children,
}: HoverTooltipProps) => {
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const calculateTooltipPosition = () => {
      const tooltipElement = tooltipRef.current;
      const buttonElement = buttonRef.current;
      if (!tooltipElement || !buttonElement) return;

      const tooltipRect = tooltipElement.getBoundingClientRect();
      const buttonRect = buttonElement.getBoundingClientRect();
      const viewportWidth = window.innerWidth;

      // Calculate the tooltip's expected position based on the button's position
      const tooltipLeft =
        buttonRect.left + buttonRect.width / 2 - tooltipRect.width / 2;

      if (tooltipLeft + tooltipRect.width > viewportWidth) {
        const valueToSubtract = tooltipLeft + tooltipRect.width - viewportWidth;
        setOffset(valueToSubtract);
      } else if (tooltipLeft < 0) {
        setOffset(tooltipLeft);
      } else {
        setOffset(0);
      }
    };

    calculateTooltipPosition();

    const debouncedCalculateTooltipPosition = debounce(
      calculateTooltipPosition,
      300
    );

    window.addEventListener("resize", debouncedCalculateTooltipPosition);
    return () => {
      window.removeEventListener("resize", debouncedCalculateTooltipPosition);
    };
  }, [buttonRef]);

  return (
    <div
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      ref={tooltipRef}
      style={{ transform: `translateX(calc(-50% - ${offset}px))` }}
      className={`${tooltip} ${className && className}`}
    >
      {children}
    </div>
  );
};

export default HoverTooltip;
