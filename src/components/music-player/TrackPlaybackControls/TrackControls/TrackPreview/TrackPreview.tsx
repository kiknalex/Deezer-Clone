import { linkHover } from "./TrackPreview.css";
import { sprinkles } from "@/styles/sprinkles.css";
import { Track } from "@/types/deezerApiTypes";
import { imageSize, previewWidth } from "./TrackPreview.css";
import Marquee from "@/components/util-components/marquee/Marquee";

const TrackPreview = ({ track }: { track: Track }) => {
  if (!track) {
    return null; // Return null or a placeholder when track is undefined
  }
  console.log(track);
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
      <div style={{minWidth: "0px"}}
        className={`${sprinkles({
          display: "flex",
          placeItems: "center",
          gap: "size-1",
        })}`}
      >
        <Marquee key={track.title + track.artist.name}>
        <a
          href="#"
          className={`${sprinkles({ fontSize: "font-size-2" })} ${linkHover}`}
        >
          {track.title}
        </a>
        <span className={sprinkles({paddingX: "size-1"})}>&#8226;</span>
        <a
          href="#"
          className={`${sprinkles({
            fontSize: "font-size-2",
          })} ${linkHover}`}
        >
          {track.artist.name}
        </a>
        </Marquee>
      </div>
    </div>
  );
};

export default TrackPreview;
