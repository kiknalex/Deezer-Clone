import { Track } from "@/types/deezerApiTypes";
import { imageSize } from "./TrackInfo.css";
import { sprinkles } from "@/styles/sprinkles.css";
import { linkHover } from "../TrackPlaybackControls/TrackControls/TrackPreview/TrackPreview.css";
import Marquee from "@/components/util-components/marquee/Marquee";

const TrackInfo = ({ track }: { track: Track }) => {
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
          src={track?.album.cover_small ?? ""}
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
          <a href="#" className={linkHover}>
            {track.title}
          </a>
        </Marquee>
        <Marquee key={track.title + track.artist.name}>
          <a href="#" className={`${linkHover} ${sprinkles({fontSize: "font-size-2", color: "--gray-6"})}`}>
            {track.artist.name}
          </a>
        </Marquee>
      </div>
    </div>
  );
};

export default TrackInfo;
