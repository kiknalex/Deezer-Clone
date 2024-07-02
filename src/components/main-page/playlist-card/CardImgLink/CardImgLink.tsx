import { useNavigate } from "react-router-dom";
import {
  buttonAction,
  buttonIcon,
  circleImg,
  linkContainer,
  listButtons,
  listButtonsCenter,
  listVisible,
  squareImg,
} from "./CardImgLink.css";

import { useState } from "react";
interface CardImgLinkProps {
  imgSrc: string;
  linkSrc: string;
  alt: string;
  shape?: "square" | "circle";
}

const CardImgLink = ({
  imgSrc,
  linkSrc,
  alt,
  shape = "square",
}: CardImgLinkProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const shapeClass = shape === "square" ? squareImg : circleImg;
  const handleMouseOver = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget && !e.currentTarget.contains(e.relatedTarget as Node)) {
      setIsHovered(false);
    }
  };

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      navigate(linkSrc);
    }
  };
  return (
    <div
      className={`${linkContainer} ${shapeClass}`}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      onClick={handleContainerClick}
    >
      <div>
        <img
          className={shapeClass}
          src={imgSrc}
          loading="lazy"
          width="250"
          height="250"
          alt={alt}
        />
      </div>
      <ul
        className={` ${isHovered && listVisible} ${
          shape === "square" ? listButtons : listButtonsCenter
        }`}
      >
        <li>
          <button aria-label="Play" className={buttonAction}>
            <span className={buttonIcon}>
              <i className={"fa-solid fa-play"}></i>
            </span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default CardImgLink;
