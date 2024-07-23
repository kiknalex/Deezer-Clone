import { useNavigate } from "react-router-dom";
import {
  buttonAction,
  buttonIcon,
  buttonVisible,
  circleImg,
  linkContainer,
  listButtons,
  listButtonsCenter,
  squareImg,
} from "./CardImgLink.css";

import { useContext } from "react";
import { MusicContext, MusicContextType } from "@/components/main-page/Mainpage";
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
  const navigate = useNavigate();
  const { currentTracklist, isPlaying, handleTracklistChange, togglePlay } =
    useContext(MusicContext) as MusicContextType;
  const shapeClass = shape === "square" ? squareImg : circleImg;
  const tracklistQuery = tracklist.replace("https://api.deezer.com", "");
  
  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      navigate(linkSrc);
    }
  };
  const handlePlayClick = () => {
    currentTracklist !== tracklistQuery
      ? handleTracklistChange(tracklistQuery)
      : togglePlay();
  };
  return (
    <div
      className={`${linkContainer} ${shapeClass}`}
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
      <ul className={`${shape === "square" ? listButtons : listButtonsCenter}`}>
        <li
          className={
            isPlaying && currentTracklist === tracklistQuery
              ? buttonVisible
              : ""
          }
        >
          <button
            onClick={handlePlayClick}
            aria-label="Play"
            className={`${buttonAction} ${
              isPlaying && currentTracklist === tracklistQuery
                ? buttonVisible
                : ""
            }`}
          >
            <span className={buttonIcon}>
              {isPlaying && currentTracklist === tracklistQuery ? (
                <i className="fa-solid fa-pause"></i>
              ) : (
                <i className={"fa-solid fa-play"}></i>
              )}
            </span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default CardImgLink;
