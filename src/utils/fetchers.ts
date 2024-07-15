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
  const allGenresData = sdkFetch("/genre");
  return allGenresData;
};

export const getTracklistData = async (tracklist: string) => {
  const data = sdkFetch(tracklist);
  return data;
};

export const getTrackData = async (id: number) => {
  const data = await sdkFetch(`/track/${id}`);
  return data;
};
