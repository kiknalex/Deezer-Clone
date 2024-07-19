import { linkHover } from "./TrackPreview.css";
import { sprinkles } from "@/styles/sprinkles.css";
import { Track } from "@/types/deezerApiTypes";
import { imageSize, previewWidth } from "./TrackPreview.css";
import Marquee from "@/components/util-components/marquee/Marquee";
import { Link } from "react-router-dom";

const TrackPreview = ({ track }: { track: Track }) => {
  if (!track) {
    return null;
  }
  return (
    <div
      className={`${sprinkles({
        display: "flex",
        paddingX: "size-3",
        paddingY: "size-1",
      })} ${previewWidth}`}
    >
      <div>
        <img
          className={`${sprinkles({ marginRight: "size-3" })} ${imageSize}`}
          key={track.md5_image}
          src={track?.album?.cover_small ?? "/cover_default.jpg"}
          width="56"
          height="56"
          alt="Next track"
        />
      </div>
      <div
        style={{ minWidth: "0px" }}
        className={`${sprinkles({
          display: "flex",
          placeItems: "center",
          gap: "size-1",
        })}`}
      >
        <Marquee key={track.title + track.artist.name}>
          <Link
            to={`/album/${track?.album?.id}`}
            className={`${sprinkles({ fontSize: "font-size-2" })} ${linkHover}`}
          >
            {track.title}
          </Link>
          <span className={sprinkles({ paddingX: "size-1" })}>&#8226;</span>
          <Link
            to={`/artist/${track.artist.id}`}
            className={`${sprinkles({
              fontSize: "font-size-2",
            })} ${linkHover}`}
          >
            {track.artist.name}
          </Link>
        </Marquee>
      </div>
    </div>
  );
};

export default TrackPreview;
