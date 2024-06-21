import { ReactNode, useState, useRef, useEffect } from "react";
import { commonButton } from "./Button.css";
import { sprinkles } from "@/styles/sprinkles.css";
import HoverTooltip from "@/components/util-components/HoverTooltip/HoverTooltip";
import { tooltipVisible } from "@/components/util-components/HoverTooltip/HoverTooltip.css";

interface ButtonProps {
  onClick?: () => void;
  children: ReactNode;
  className?: string;
}

interface ButtonHoverProps extends ButtonProps {
  tooltipContent: ReactNode;
  tooltipInteractive?: boolean;
}

export const Button = ({ onClick, children, ...rest }: ButtonProps) => {
  return (
    <button onClick={onClick} {...rest}>
      {children}
    </button>
  );
};

export const ButtonHoverableWithTooltip = ({
  onClick,
  tooltipContent,
  tooltipInteractive = false,
  children,
}: ButtonHoverProps) => {
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

  const handlePointerEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setIsHovered(true);
    }, 500);
  };

  const handlePointerLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 300);
  };

  const handleTooltipPointerEnter = () => {
    if (!timeoutRef.current || !tooltipInteractive) return;

    if (tooltipInteractive) {
      clearTimeout(timeoutRef.current);
      setIsHovered(true);
    }
  };
  const handleTooltipPointerLeave = () => {
    if (!timeoutRef.current || !tooltipInteractive) return;

    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsHovered(false);
    });
  };

  return (
    <div className={sprinkles({ position: "relative" })}>
      <HoverTooltip
        tooltipInteractive={tooltipInteractive}
        onPointerEnter={handleTooltipPointerEnter}
        onPointerLeave={handleTooltipPointerLeave}
        buttonRef={buttonRef}
        className={isHovered ? tooltipVisible : ""}
      >
        {tooltipContent}
      </HoverTooltip>
      <button
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        onClick={onClick}
        ref={buttonRef}
        className={commonButton}
      >
        {children}
      </button>
    </div>
  );
};
