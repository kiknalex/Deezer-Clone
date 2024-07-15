const proxy = "https://corsproxy.io/?";
const defaultUrl = "https://api.deezer.com";

export const sdkFetchPromise = (endpoint: string) => {
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
  const allGenresData = sdkFetchPromise("/genre");
  return allGenresData;
};

export const getTracklistData = async (tracklist: string) => {
  const data = sdkFetchPromise(tracklist);
  console.log(data);
  return data;
};

export const getTrackData = async (id: number) => {
  const data = await sdkFetchPromise(`/track/${id}`);
  return data;
};
