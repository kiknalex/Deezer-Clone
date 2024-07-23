import { ReactNode, useEffect, useRef, useState } from "react";

interface VirtualizedRowProps {
  initiallyOnScreen: boolean;
  placeholder: ReactNode;
  children: ReactNode;
}

const options = {
  root: null,
  rootMargin: "500px",
  threshold: 0,
};

const VirtualizedRow = ({
  initiallyOnScreen = false,
  placeholder,
  children,
}: VirtualizedRowProps) => {
  const [onScreen, setOnScreen] = useState(initiallyOnScreen);
  const divRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const divElement = divRef.current;
    if (!divElement) return;
    const callback: IntersectionObserverCallback = (entries) => {
      if (entries[0].isIntersecting) {
        setOnScreen(true);
      } else {
        setOnScreen(false);
      }
    };
    const observer = new IntersectionObserver(callback, options);

    observer.observe(divElement);

    return () => {
      if (divElement) {
        observer.unobserve(divElement);
      }
    };
  }, []);

  return <div ref={divRef}>{onScreen ? children : placeholder}</div>;
};

export default VirtualizedRow;
