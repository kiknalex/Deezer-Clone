import { ReactNode, RefObject, useEffect, useRef, useState } from "react";
import { tooltip, arrowPosition, backgroundStyle } from "./HoverTooltip.css";
import { debounce } from "@/utils/helpers";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { sprinkles } from "@/styles/sprinkles.css";

interface HoverTooltipProps {
  tooltipInteractive: boolean;
  buttonRef: RefObject<HTMLButtonElement>;
  className?: string;
  children: ReactNode;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const HoverTooltip = ({
  tooltipInteractive,
  buttonRef,
  className,
  children,
  onMouseEnter,
  onMouseLeave,
}: HoverTooltipProps) => {
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [arrowOffset, setArrowOffset] = useState(0);

  useEffect(() => {
    const calculateTooltipPosition = () => {
      const buttonElement = buttonRef.current;
      const tooltipElement = tooltipRef.current;
      if (!tooltipElement || !buttonElement) return;

      const tooltipRect = tooltipElement.getBoundingClientRect();
      const buttonRect = buttonElement.getBoundingClientRect();
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      const viewportWidth = window.innerWidth;

      const buttonCenterX = buttonRect.left + buttonRect.width / 2;
      const tooltipCenterWidth = tooltipRect.width / 2;

      const tooltipLeftEdge = buttonCenterX - tooltipCenterWidth;
      const tooltipRightEdge = buttonCenterX + tooltipCenterWidth;

      if (tooltipRightEdge > viewportWidth - scrollbarWidth) {
        const overflowRight = tooltipRightEdge - viewportWidth + scrollbarWidth;
        setOffset(overflowRight);
        setArrowOffset(Math.min(overflowRight, tooltipCenterWidth - 10));
      } else if (tooltipLeftEdge < 0) {
        const overflowLeft = tooltipLeftEdge;
        setOffset(overflowLeft);
        setArrowOffset(Math.min(overflowLeft, tooltipCenterWidth - 10));
      } else {
        setOffset(0);
        setArrowOffset(0);
      }
    };

    const debouncedCalculateTooltipPosition = debounce(
      calculateTooltipPosition,
      300
    );

    window.addEventListener("resize", debouncedCalculateTooltipPosition);
    // Initial calculation
    const initialCalcTimer = setTimeout(() => {
      //  to handle incorrect offset calculation on initial render in chrome.
      calculateTooltipPosition();
    }, 200);
    return () => {
      clearTimeout(initialCalcTimer);
      window.removeEventListener("resize", debouncedCalculateTooltipPosition);
    };
  }, [buttonRef]);

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      ref={tooltipRef}
      style={{
        transform: `translateX(calc(-50% - ${offset}px))`,
        ...assignInlineVars({ [arrowPosition]: `${arrowOffset}px` }),
      }}
      className={`${tooltip} ${sprinkles({ padding: "size-1" })} ${
        tooltipInteractive && backgroundStyle
      } ${className || ""}`}
    >
      {children}
    </div>
  );
};

export default HoverTooltip;
