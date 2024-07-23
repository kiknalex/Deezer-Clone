import { MusicDetails } from "@/utils/loaders";
import TrackRow from "./TrackRow/TrackRow";
import {
  addedInfo,
  albumInfo,
  artistInfo,
  durationInfo,
  durationSpan,
  imageSkeleton,
  rowSkeletonContainer,
  textSkeleton,
  trackContainer,
  trackInfo,
} from "./TrackList.css";
import { useContext, useMemo } from "react";
import {
  MusicContext,
  MusicContextType,
} from "@/components/main-page/Mainpage";
import { getTrackData } from "@/utils/fetchers";
import VirtualizedRow from "@/components/util-components/list-virtualized/VirtualizedRow";

interface TrackListProps {
  musicData: MusicDetails;
}

const TrackList = ({ musicData }: TrackListProps) => {
  const {
    currentTrack,
    currentTracklist,
    togglePlay,
    handleTrackChange,
    handleTracklistChange,
  } = useContext(MusicContext) as MusicContextType;
  const tracks = useMemo(
    () => musicData.tracks!.data.filter((track) => track.preview),
    [musicData]
  );
  const tracklistType: "album" | "playlist" = musicData.type;
  const tracklistQuery = musicData.tracklist.replace(
    "https://api.deezer.com",
    ""
  );
  const showArtist = tracklistType === "playlist";
  const showAlbum = tracklistType === "playlist";
  const showAddedDate = tracklistType === "playlist";
  const showDuration =
    tracklistType === "album" || tracklistType === "playlist";

  const handlePlayClick = async (id: number, index: number) => {
    if (currentTracklist !== tracklistQuery) {
      handleTracklistChange(tracklistQuery, index);
      return;
    }
    const newTrack = tracks.find((track) => track.id === id)!;

    if (newTrack.id === currentTrack?.id) {
      togglePlay();
      return;
    }

    const newTrackIndex = tracks.indexOf(newTrack);
    try {
      const currentTrackData = await getTrackData(newTrack.id);
      if (!currentTrackData) {
        throw new Error("Error fetching data");
      }
      const prevTrackData =
        newTrackIndex > 0
          ? await getTrackData(tracks[newTrackIndex - 1].id)
          : null;
      const nextTrackData =
        newTrackIndex < tracks.length - 1
          ? await getTrackData(tracks[newTrackIndex + 1].id)
          : null;

      handleTrackChange(prevTrackData, currentTrackData, nextTrackData);
    } catch (error) {
      console.error("Error fetching new track in TrackRow:", error);
    }
  };

  const trackRowSkeleton = (
    <div className={rowSkeletonContainer}>
      <div className={imageSkeleton}></div>
      <div className={textSkeleton}></div>
    </div>
  );
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
        {tracks.map(
          (track, index: number) =>
            track.preview && (
              <VirtualizedRow
                initiallyOnScreen={index < 15}
                key={track.id}
                placeholder={trackRowSkeleton}
              >
                <TrackRow
                  track={track}
                  index={index}
                  artist={track.artist}
                  showArtist={showArtist}
                  showAlbum={showAlbum}
                  showAddedDate={showAddedDate}
                  showDuration={showDuration}
                  handlePlayClick={handlePlayClick}
                />
              </VirtualizedRow>
            )
        )}
      </ul>
    </>
  );
};

export default TrackList;
