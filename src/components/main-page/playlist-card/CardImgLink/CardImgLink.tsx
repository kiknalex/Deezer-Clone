import { useNavigate, useOutletContext } from "react-router-dom";
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

import { useContext, useState } from "react";
import { getTracksData } from "@/utils/fetchers";
import { MusicContext, MusicContextType } from "@/app/App";
interface CardImgLinkProps {
  imgSrc: string;
  linkSrc: string;
  alt: string;
  shape?: "square" | "circle";
  tracklist: string;
}

const CardImgLink = ({
  imgSrc,
  linkSrc,
  alt,
  shape = "square",
  tracklist,
}: CardImgLinkProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const {handleTracklistChange} = useContext(MusicContext) as MusicContextType;
  const shapeClass = shape === "square" ? squareImg : circleImg;
  const handleMouseOver = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.relatedTarget && !e.currentTarget.contains(e.relatedTarget as Node)) {
      setIsHovered(false);
    }
  };

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      navigate(linkSrc);
    }
  };
  const handlePlayClick = async () => {
    handleTracklistChange(tracklist);
  }
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
          <button
            onClick={handlePlayClick}
            aria-label="Play"
            className={buttonAction}
          >
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
