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
  const { tracks, audioRef, currentTrackIndex, startPlay, handleTrackNext } =
    useContext(MusicContext) as MusicContextType;
  console.log(tracks);
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
      {tracks && tracks.length > 0 && (
        <>
          <audio
            onLoadedData={handleLoadedData}
            onEnded={handleTrackEnded}
            ref={audioRef}
            src={tracks[currentTrackIndex].preview}
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
