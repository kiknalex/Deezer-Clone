import { ReactNode, useState, useRef, useEffect } from "react";
import HoverTooltip from "@/components/util-components/Buttons/HoverTooltip/HoverTooltip";
import { commonButton } from "./ButtonHoverableWithTooltip.css";
import { sprinkles } from "@/styles/sprinkles.css";
import { tooltipVisible } from "@/components/util-components/Buttons/HoverTooltip/HoverTooltip.css";

interface ButtonProps {
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
}

interface ButtonHoverableWithTooltip extends ButtonProps {
  tooltipContent: ReactNode;
  tooltipInteractive?: boolean;
  popoutDelay?: number;
}

export const ButtonHoverableWithTooltip = ({
  onClick,
  tooltipContent,
  tooltipInteractive = false,
  popoutDelay = 300,
  ariaLabel,
  children,
}: ButtonHoverableWithTooltip) => {
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setIsHovered(true);
    }, popoutDelay);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 300);
  };

  const handleTooltipMouseEnter = () => {
    if (!timeoutRef.current || !tooltipInteractive) return;

    if (tooltipInteractive) {
      clearTimeout(timeoutRef.current);
      setIsHovered(true);
    }
  };
  const handleTooltipMouseLeave = () => {
    if (!timeoutRef.current || !tooltipInteractive) return;

    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsHovered(false);
    });
  };

  return (
    <div
      className={sprinkles({
        position: "relative",
        display: "flex",
        justifyContent: "center",
      })}
    >
      <HoverTooltip
        tooltipInteractive={tooltipInteractive}
        onMouseEnter={handleTooltipMouseEnter}
        onMouseLeave={handleTooltipMouseLeave}
        buttonRef={buttonRef}
        className={isHovered ? tooltipVisible : ""}
      >
        {tooltipContent}
      </HoverTooltip>
      <button
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        ref={buttonRef}
        className={commonButton}
        aria-label={ariaLabel}
      >
        {children}
      </button>
    </div>
  );
};
