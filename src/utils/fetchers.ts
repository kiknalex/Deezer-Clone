const proxy = "https://corsproxy.io/?";
const defaultUrl = "https://api.deezer.com";

export const getAllGenresPromise = async () => {
  const allGenresResponse = await fetch(proxy + defaultUrl + "/genre");
  const allGenresData = allGenresResponse.json();
  return allGenresData;
};

export const getTracklistData = async (tracklist: string) => {
  const response = await fetch(proxy + tracklist);
  const data = await response.json();
  return data;
};

export const getTrackData = async (id: number) => {
  const response = await fetch(proxy + defaultUrl + `/track/${id}`);
  const data = await response.json();
  return data;
};
