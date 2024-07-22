import { useState, useContext } from "react";

import { playerLayout, playerPosition } from "./Player.css";
import { sprinkles } from "@/styles/sprinkles.css";

import TrackPlaybackControls from "./TrackPlaybackControls/TrackPlaybackControls";
import AudioControls from "./AudioControls/AudioControls";
import PlaybackInfo from "./TrackPlaybackControls/PlaybackInfo/PlaybackInfo";
import TrackControls from "./TrackPlaybackControls/TrackControls/TrackControls";
import TrackInfo from "./TrackInfo/TrackInfo";
import { MusicContext, MusicContextType } from "@/app/App";

const Player = () => {
  const [audioReady, setAudioReady] = useState(false);
  const { tracks, audioRef, currentTrack, startPlay, handleTrackNext } =
    useContext(MusicContext) as MusicContextType;
  const handleLoadedData = () => {
    if (audioRef.current && audioRef.current.readyState > 2) {
      setAudioReady(true);
      startPlay();
    }
  };
  const handleTrackEnded = () => {
    handleTrackNext();
  };

  return (
    <>
      {tracks.length > 0 && currentTrack && (
        <>
          <audio
            onLoadedData={handleLoadedData}
            onEnded={handleTrackEnded}
            ref={audioRef}
            src={currentTrack.preview}
          ></audio>

          {audioReady ? (
            <div
              style={{ minWidth: "700px" }}
              className={`${sprinkles({
                paddingX: "size-3",
              })} ${playerLayout} ${playerPosition}`}
            >
              <TrackInfo />
              <TrackPlaybackControls>
                <TrackControls />
                <PlaybackInfo />
              </TrackPlaybackControls>
              <AudioControls />
            </div>
          ) : null}
        </>
      )}
    </>
  );
};

export default Player;
