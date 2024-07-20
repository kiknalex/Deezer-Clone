import { imageSize } from "./TrackInfo.css";
import { sprinkles } from "@/styles/sprinkles.css";
import { linkHover } from "../TrackPlaybackControls/TrackControls/TrackPreview/TrackPreview.css";
import Marquee from "@/components/util-components/marquee/Marquee";
import { useContext } from "react";
import { MusicContext, MusicContextType } from "@/app/App";
import { Link } from "react-router-dom";

const TrackInfo = () => {
  const { tracks, currentTrackIndex } = useContext(
    MusicContext
  ) as MusicContextType;
  const track = tracks[currentTrackIndex];
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
            (track?.album?.cover_small || track?.album?.cover_medium) ??
            "/cover_default.jpg"
          }
          className={`${sprinkles({ marginRight: "size-3" })} ${imageSize}`}
          key={track.md5_image}
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
        <Marquee key={track.title}>
          <Link to={`/album/${track?.album?.id}`} className={linkHover}>
            {track.title}
          </Link>
        </Marquee>
        <Marquee key={track.title + track.artist.name}>
          <Link
            to={`/artist/${track.artist.id}`}
            className={`${linkHover} ${sprinkles({
              fontSize: "font-size-2",
              color: "--gray-6",
            })}`}
          >
            {track.artist.name}
          </Link>
        </Marquee>
      </div>
    </div>
  );
};

export default TrackInfo;
