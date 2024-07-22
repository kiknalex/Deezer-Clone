import { imageSize } from "./TrackInfo.css";
import { sprinkles } from "@/styles/sprinkles.css";
import { linkHover } from "../TrackPlaybackControls/TrackControls/TrackPreview/TrackPreview.css";
import Marquee from "@/components/util-components/marquee/Marquee";
import { useContext } from "react";
import { MusicContext, MusicContextType } from "@/app/App";
import { Link } from "react-router-dom";

const TrackInfo = () => {
  const { currentTrack } = useContext(MusicContext) as MusicContextType;
  if (!currentTrack) return null;
  return (
    <div
      className={`${sprinkles({
        display: "flex",
        width: "33",
        overflow: "hidden",
      })}`}
    >
      <div>
        <img
          src={
            (currentTrack.album?.cover_small ||
              currentTrack.album?.cover_medium ||
              currentTrack?.picture_small) ??
            "/cover_default.jpg"
          }
          className={`${sprinkles({ marginRight: "size-3" })} ${imageSize}`}
          key={currentTrack.md5_image}
          width="56"
          height="56"
          alt=""
        />
      </div>
      <div
        style={{ minWidth: "0px" }}
        className={`${sprinkles({
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "size-1",
        })}`}
      >
        <Marquee key={currentTrack.title}>
          <Link to={`/album/${currentTrack.album?.id}`} className={linkHover}>
            {currentTrack.title}
          </Link>
        </Marquee>
        <Marquee key={currentTrack.title + currentTrack.artist.name}>
          <Link
            to={`/artist/${currentTrack.artist.id}`}
            className={`${linkHover} ${sprinkles({
              fontSize: "font-size-2",
              color: "--gray-6",
            })}`}
          >
            {currentTrack.artist.name}
          </Link>
        </Marquee>
      </div>
    </div>
  );
};

export default TrackInfo;
