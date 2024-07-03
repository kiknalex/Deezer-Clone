const proxy = "https://corsproxy.io/?";
const defaultUrl = "https://api.deezer.com";

export const getAllGenresPromise = async () => {
  const allGenresResponse = await fetch(proxy + defaultUrl + "/genre");
  const allGenresData = allGenresResponse.json();
  console.log(allGenresData);
  return allGenresData;
};

export const getTracksData = async (tracklist: string) => {
  const response = await fetch(proxy + tracklist);
  const data = await response.json();
  return data;
};
