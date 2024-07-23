import { sprinkles } from "@/styles/sprinkles.css";
import {
  addedDate,
  albumLink,
  artistLink,
  buttonHidden,
  buttonImage,
  buttonPlay,
  durationInfo,
  imgButtonContainer,
  linkWrapper,
  trackContainer,
  trackInfo,
  trackNameButton,
} from "./TrackRow.css";
import ButtonPlay from "@/components/util-components/Buttons/ButtonPlay/ButtonPlay";
import { Link } from "react-router-dom";
import { formatTime, unixToDateString } from "@/utils/helpers";
import { useContext } from "react";
import { MusicContext, MusicContextType } from "@/components/main-page/Mainpage";
import { Artist, Track } from "@/types/deezerApiTypes";

interface TrackRowProps {
  track: Track;
  artist: Artist;
  index: number;
  showArtist: boolean;
  showAlbum: boolean;
  showAddedDate: boolean;
  showDuration: boolean;
  handlePlayClick: (id: number, index: number) => void;
}

const TrackRow = ({
  track,
  artist,
  index,
  showArtist,
  showAlbum,
  showAddedDate,
  showDuration,
  handlePlayClick,
}: TrackRowProps) => {
  const { isPlaying, currentTrack } = useContext(
    MusicContext
  ) as MusicContextType;
  return (
    <div className={trackContainer}>
      <div className={trackInfo}>
        <div className={sprinkles({ display: "flex", alignItems: "center" })}>
          <div className={imgButtonContainer}>
            <img
              className={buttonImage}
              src={
                (track.picture_small || track.album?.cover_small) ??
                "/cover_default.jpg"
              }
              width="50"
              height="50"
              alt=""
              loading="lazy"
            />
            <ButtonPlay
              className={`${buttonPlay} ${
                track.id !== currentTrack?.id && buttonHidden
              }`}
              onClick={() => handlePlayClick(track.id, index)}
              isPlaying={isPlaying && track.id === currentTrack?.id}
            />
          </div>
          <button className={trackNameButton}>
            {index + 1}. {track.title}
          </button>
        </div>
      </div>
      {showArtist && artist && (
        <div className={linkWrapper}>
          <Link className={`${artistLink}`} to={`/artist/${artist.id}`}>
            {artist.name}
          </Link>
        </div>
      )}
      {showAlbum && track.album && (
        <div className={linkWrapper}>
          <Link className={`${albumLink}`} to={`/album/${track.album.id}`}>
            {track.album.title}
          </Link>
        </div>
      )}
      {showAddedDate && track.time_add && (
        <div className={addedDate}>{unixToDateString(track.time_add)}</div>
      )}
      {showDuration && (
        <div className={durationInfo}>
          <p>{formatTime(track.duration)}</p>
        </div>
      )}
    </div>
  );
};

export default TrackRow;
