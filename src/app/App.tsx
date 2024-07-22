import { RefObject, createContext, useRef, useState } from "react";
import { app } from "./App.css";
import { darkTheme, lightTheme, loggedIn } from "./theme.css";

import { TrackData, Track } from "@/types/deezerApiTypes"; // Assuming Track type is defined

import Player from "@/components/music-player/Player";
import Sidebar from "@/components/sidebar/Sidebar";
import { useLoaderData } from "react-router-dom";
import Header from "@/components/header/Header";
import Mainpage from "@/components/main-page/Mainpage";
import { getTrackData, getTracklistPromise } from "@/utils/fetchers";
import { firstVisitLoaderData } from "@/utils/loaders";

export type MusicContextType = {
  tracks: Track[];
  currentTracklist: string | null;
  isPlaying: boolean;
  prevTrack: TrackData | null;
  currentTrack: TrackData | null;
  nextTrack: TrackData | null;
  audioRef: RefObject<HTMLAudioElement>;
  handleTracklistChange: (tracklist: string) => Promise<void>;
  handleTrackNext: () => void;
  handleTrackPrevious: () => void;
  startPlay: () => void;
  stopPlay: () => void;
  togglePlay: () => void;
};
export const MusicContext = createContext<MusicContextType | null>(null);

const App = () => {
  const initialLoadData = useLoaderData() as firstVisitLoaderData;
  console.log(initialLoadData);
  const [tracks, setTracks] = useState<Track[]>(
    initialLoadData.albumData.tracks!.data
  );
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTracklist, setCurrentTracklist] = useState<string | null>(null);
  const [currentTrack, setCurrentTrack] = useState<TrackData>(
    initialLoadData.currentTrack
  );
  const [nextTrack, setNextTrack] = useState<TrackData | null>(
    initialLoadData.nextTrack || null
  );
  const [prevTrack, setPrevTrack] = useState<TrackData | null>(null);

  const [darkMode, setDarkMode] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleDarkModeClick = () => {
    setDarkMode(!darkMode);
  };

  const handleTracklistChange = async (tracklist: string) => {
    const newTracks = (await getTracklistPromise(tracklist)) as {
      data: Track[];
    };
    console.log(newTracks);
    if (newTracks.data.length > 0) {
      const currentTrackData = (await getTrackData(
        newTracks.data[0].id
      )) as TrackData;
      const nextTrackData = newTracks.data[1]?.id
        ? ((await getTrackData(newTracks.data[1].id)) as TrackData)
        : null;
      setCurrentTrack(currentTrackData);
      setNextTrack(nextTrackData);
      setPrevTrack(null);

      setTracks(newTracks.data);
      setCurrentTracklist(tracklist);
    }
  };
  const handleTrackNext = async () => {
    if (!nextTrack) return;

    const nextTrackInfo = tracks.find(
      (track) => track.id === nextTrack.id
    ) as Track;
    const nextTrackIndex = tracks.indexOf(nextTrackInfo);
    if (tracks[nextTrackIndex + 1]) {
      const nextTrackData = (await getTrackData(
        tracks[nextTrackIndex + 1].id
      )) as TrackData;
      setNextTrack(nextTrackData);
    } else {
      setNextTrack(null);
    }
    setCurrentTrack(nextTrack);
    setPrevTrack(currentTrack);
  };
  const handleTrackPrevious = async () => {
    if (!prevTrack) return;

    const prevTrackInfo = tracks.find(
      (track) => track.id === prevTrack.id
    ) as Track;
    const prevTrackIndex = tracks.indexOf(prevTrackInfo);
    if (tracks[prevTrackIndex - 1]) {
      const prevTrackData = (await getTrackData(
        tracks[prevTrackIndex - 1].id
      )) as TrackData;
      setPrevTrack(prevTrackData);
    } else {
      setPrevTrack(null);
    }
    setCurrentTrack(prevTrack);
    setNextTrack(currentTrack);
  };
  const stopPlay = () => {
    const audioElement = audioRef.current;
    if (!audioElement) return;

    audioElement.pause();
    setIsPlaying(false);
  };

  const startPlay = () => {
    if (!navigator.userActivation.hasBeenActive) return; // checks if user has interacted at least once with the document

    const audioElement = audioRef.current;
    if (!audioElement) return;

    audioElement.play();
    setIsPlaying(true);
  };
  const togglePlay = () => {
    const audioElement = audioRef.current;
    if (!audioElement) return;

    isPlaying ? stopPlay() : startPlay();
  };
  const contextValue = {
    tracks,
    currentTracklist,
    isPlaying,
    audioRef,
    prevTrack,
    currentTrack,
    nextTrack,
    handleTracklistChange,
    handleTrackNext,
    handleTrackPrevious,
    startPlay,
    stopPlay,
    togglePlay,
  };
  return (
    <div className={`${app} ${darkMode ? darkTheme : lightTheme} ${loggedIn}`}>
      <Header onClick={handleDarkModeClick} darkMode={darkMode} />
      <MusicContext.Provider value={contextValue}>
        {tracks.length > 0 && <Player />}
        <Mainpage />
      </MusicContext.Provider>
      <Sidebar />
    </div>
  );
};

export default App;
