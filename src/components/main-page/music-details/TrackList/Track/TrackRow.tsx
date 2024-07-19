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
import { MusicContext, MusicContextType } from "@/app/App";



const TrackRow = ({
  track,
  artist,
  index,
  showArtist,
  showAlbum,
  showAddedDate,
  showDuration,
}) => {
  const { isPlaying, tracks, currentTrackIndex } = useContext(
    MusicContext
  ) as MusicContextType;
  const currentTrack = tracks[currentTrackIndex];
  return (
    <div className={trackContainer}>
      <div className={trackInfo}>
        <div className={sprinkles({ display: "flex", alignItems: "center" })}>
          <div className={imgButtonContainer}>
            <img
              className={buttonImage}
              src={track.picture_small || track.album.cover_small}
              width="50"
              height="50"
              alt=""
            />
            <ButtonPlay
              className={`${buttonPlay} ${
                track.id !== currentTrack.id && buttonHidden
              }`}
              isPlaying={isPlaying && track.id === currentTrack.id}
            />
          </div>
          <button className={trackNameButton}>
            {index}. {track.title}
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
      {showAlbum && (
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