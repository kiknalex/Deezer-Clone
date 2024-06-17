import { ReactNode, RefObject, useEffect, useRef, useState } from "react";
import { tooltip, arrowPosition } from "./HoverTooltip.css";
import { debounce } from "../../../utils/helpers";
import { assignInlineVars } from "@vanilla-extract/dynamic";
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
  const [arrowOffset, setArrowOffset] = useState(0);
  useEffect(() => {
    const calculateTooltipPosition = () => {
      const tooltipElement = tooltipRef.current;
      const buttonElement = buttonRef.current;
      if (!tooltipElement || !buttonElement) return;

      const tooltipRect = tooltipElement.getBoundingClientRect();
      const buttonRect = buttonElement.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      // Calculate the tooltip's expected position based on the button's position
      const tooltipLeft =
        buttonRect.left + buttonRect.width / 2 - tooltipRect.width / 2;

      if (tooltipLeft + tooltipRect.width + scrollbarWidth > viewportWidth) { // if tooltips position overflows adjust accordingly
        const valueToSubtract =
          tooltipLeft + tooltipRect.width + scrollbarWidth - viewportWidth;
        setOffset(valueToSubtract);

        if (valueToSubtract + 10 < tooltipRect.width / 2) { // calculate arrow offset based on tooltip offset and width
          setArrowOffset(valueToSubtract);
        } else {
          setArrowOffset(tooltipRect.width / 2 - 10); // Adjust to a sensible default
        }
      } else {
        setOffset(0);
        setArrowOffset(0);
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
      style={{
        transform: `translateX(calc(-50% - ${offset}px))`,
        ...assignInlineVars({ [arrowPosition]: `${arrowOffset}px` }),
      }}
      className={`${tooltip} ${className && className}`}
    >
      {children}
    </div>
  );
};

export default HoverTooltip;
