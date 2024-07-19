import TrackRow from "./Track/TrackRow";
import {
  addedInfo,
  albumInfo,
  artistInfo,
  durationInfo,
  durationSpan,
  trackContainer,
  trackInfo,
} from "./TrackList.css";

const TrackList = ({ musicData }) => {
  const tracks = musicData.tracks.data;
  const tracklistType: "album" | "playlist" = musicData.type;

  const showArtist = tracklistType === "playlist";
  const showAlbum = tracklistType === "playlist";
  const showAddedDate = tracklistType === "playlist";
  const showDuration = tracklistType === "album" || "playlist";
  return (
    <>
      <div className={trackContainer}>
        <p className={trackInfo}>Track</p>
        {showArtist && <p className={artistInfo}>Artist</p>}
        {showAlbum && <p className={albumInfo}>Album</p>}
        {showAddedDate && <p className={addedInfo}>Added</p>}
        {showDuration && (
          <div className={durationInfo}>
            <span className={durationSpan}>
              <i className="fa-regular fa-clock"></i>
            </span>
          </div>
        )}
      </div>
      <ul>
        {tracks.map((track, index: number) => (
          track.preview &&
          <TrackRow
            track={track}
            index={index + 1}
            key={track.id}
            artist={track.artist}
            showArtist={showArtist}
            showAlbum={showAlbum}
            showAddedDate={showAddedDate}
            showDuration={showDuration}
          />
        ))}
      </ul>
    </>
  );
};

export default TrackList;
