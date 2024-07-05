import { ReactNode, RefObject, useEffect, useRef, useState } from "react";
import { tooltip, arrowPosition, backgroundStyle } from "./HoverTooltip.css";
import { debounce } from "@/utils/helpers";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { sprinkles } from "@/styles/sprinkles.css";
interface HoverTooltipProps {
  tooltipInteractive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  buttonRef: RefObject<HTMLButtonElement>;
  className?: string;
  children: ReactNode;
}

const HoverTooltip = ({
  tooltipInteractive,
  onMouseEnter,
  onMouseLeave,
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
      const viewportWidth = document.documentElement.clientWidth;

      const buttonCenterX = buttonRect.left + buttonRect.width / 2;
      const tooltipRightEdge = buttonCenterX + tooltipRect.width / 2;

      if (tooltipRightEdge > viewportWidth) {
        const overflow = tooltipRightEdge - viewportWidth;
        const tooltipCenterWidth = tooltipRect.width / 2;
        setOffset(overflow);
        setArrowOffset(Math.min(overflow, tooltipCenterWidth - 10));
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
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      ref={tooltipRef}
      style={{
        transform: `translateX(calc(-50% - ${offset}px))`,
        ...assignInlineVars({ [arrowPosition]: `${arrowOffset}px` }),
      }}
      className={`${tooltip} ${sprinkles({
        padding: "size-1",
      })} ${className || ""} ${tooltipInteractive && backgroundStyle}`}
    >
      {children}
    </div>
  );
};

export default HoverTooltip;
