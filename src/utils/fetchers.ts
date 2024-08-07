import { TrackData } from "@/types/deezerApiTypes.ts";
import { DeezerAPI } from "../../deezer.ts";

declare const DZ: DeezerAPI;

export const sdkFetch = (endpoint: string) => {
  return new Promise((resolve, reject) => {
    DZ.api(endpoint, (response) => {
      if (response.error) {
        reject(response.error);
      } else {
        resolve(response);
      }
    });
  });
};

export const getAllGenresPromise = async () => {
  const promise = sdkFetch("/genre");
  return promise;
};

export const getTracklistData = async (tracklist: string) => {
  const data = await sdkFetch(`${tracklist}?limit=100`);
  return data;
};

export const getTrackData = async (id: number) => {
  try {
    const data = await sdkFetch(`/track/${id}`);
    return data as TrackData;
  } catch (error) {
    console.error('Error fetching track data:', error);
    return null;
  }
};
