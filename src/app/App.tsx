import { RefObject, createContext, useRef, useState } from "react";
import { app } from "./App.css";
import { darkTheme, lightTheme, loggedIn } from "./theme.css";

import { TrackData, Track } from "@/types/deezerApiTypes"; // Assuming Track type is defined

import Player from "@/components/music-player/Player";
import Sidebar from "@/components/sidebar/Sidebar";
import { useLoaderData } from "react-router-dom";
import Header from "@/components/header/Header";
import Mainpage from "@/components/main-page/Mainpage";
import { getTrackData, getTracklistData } from "@/utils/fetchers";
import { firstVisitLoaderData } from "@/utils/loaders";

export type MusicContextType = {
  tracks: Track[];
  currentTracklist: string | null;
  isPlaying: boolean;
  prevTrack: TrackData | null;
  currentTrack: TrackData | null;
  nextTrack: TrackData | null;
  audioRef: RefObject<HTMLAudioElement>;
  handleTracklistChange: (tracklist: string, index: number) => Promise<void>;
  handleTrackNext: () => void;
  handleTrackPrevious: () => void;
  handleTrackChange: (
    prev: TrackData | null,
    current: TrackData,
    next: TrackData | null
  ) => void;
  startPlay: () => void;
  stopPlay: () => void;
  togglePlay: () => void;
};
export const MusicContext = createContext<MusicContextType | null>(null);

const App = () => {
  const initialLoadData = useLoaderData() as firstVisitLoaderData;
  initialLoadData;
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
  console.log("rerender app");
  const handleTracklistChange = async (tracklist: string, index: number) => {
    try {
      const newTracks = (await getTracklistData(tracklist)) as {
        data: Track[];
      };
      if (newTracks.data.length <= 0) return;
      const filteredTracks = newTracks.data.filter(track => track.preview);
      if (!index) {
        const currentTrackData = (await getTrackData(
          filteredTracks[0].id
        )) as TrackData;
        const nextTrackData = filteredTracks[1]?.id
          ? ((await getTrackData(filteredTracks[1].id)) as TrackData)
          : null;
        handleTrackChange(null, currentTrackData, nextTrackData);
      } else {
        const prevTrackData = filteredTracks[index - 1]?.id
          ? ((await getTrackData(filteredTracks[index - 1].id)) as TrackData)
          : null;
        const currentTrackData = (await getTrackData(
          filteredTracks[index].id
        )) as TrackData;
        const nextTrackData = filteredTracks[index + 1]?.id
          ? ((await getTrackData(filteredTracks[index + 1].id)) as TrackData)
          : null;

        handleTrackChange(prevTrackData, currentTrackData, nextTrackData);
      }
      setTracks(filteredTracks);
      setCurrentTracklist(tracklist);
    } catch (error) {
      console.error("Error handling tracklist change:", error);
    }
  };

  const handleTrackChange = (
    prev: TrackData | null = null,
    current: TrackData,
    next: TrackData | null = null
  ) => {
    setPrevTrack(prev);
    setCurrentTrack(current);
    setNextTrack(next);
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
    handleTrackChange,
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
