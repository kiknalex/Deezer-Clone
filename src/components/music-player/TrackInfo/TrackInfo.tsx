import { Track } from "../../../types/deezerApiTypes";
import {  imageSize, linkHover } from "./TrackInfo.css";
import { sprinkles } from "../../../styles/sprinkles.css";

export const TrackInfo = ({ track }: { track: Track }) => {
  return (
    <div className={`${sprinkles({ display: "flex"})} `}>
      <div>
        <img src={track.album.cover_small} className={`${sprinkles({marginRight: "size-3"})} ${imageSize}`} width="56" height="56" alt="" />
      </div>
      <div className={`${sprinkles({display: "flex", flexDirection: "column", justifyContent: "center", gap: "size-1"})}` }>
        <a href="#" className={`${sprinkles({color: "textPrimary", fontSize: "font-size-3"})} ${linkHover}`}>{track.title}</a>
        <a href="#" className={`${sprinkles({color: "textSecondary", fontSize: "font-size-2"})} ${linkHover}`}>{track.artist.name}</a>
      </div>
    </div>
  );
};
