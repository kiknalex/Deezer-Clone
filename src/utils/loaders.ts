import { encodeForURL } from "@/utils/helpers.ts";
import { LoaderFunction, LoaderFunctionArgs, defer } from "react-router-dom";
import { getAllGenresPromise } from "./fetchers";
import {
  Album,
  Artist,
  Genre,
  Playlist,
  Radio,
  Release,
} from "@/types/deezerApiTypes";

const proxy = "https://corsproxy.io/?";
const defaultUrl = "https://api.deezer.com";
const delay = (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(null);
    }, ms);
  });
};
export interface channelPageLoaderData {
  data: {
    genreRadios: { data: Radio[] };
    genreArtists: { data: Artist[] };
    editorialReleases: { data: Release[] };
    chartPlaylists: { data: Playlist[] };
    genreName: string;
  };
}


export const channelPageLoader = async ({ params }: LoaderFunctionArgs) => {
  const genreNameWithIdPromise = getAllGenresPromise();
  return defer({
    data: genreNameWithIdPromise.then(async (nameWithIdData) => {
      // Check if the data contains the genres array
      if (
        !nameWithIdData ||
        !nameWithIdData.data ||
        !Array.isArray(nameWithIdData.data)
      ) {
        throw new Error("Invalid genre data");
      }

      // Find the genre object within the data array
      const genreObj = nameWithIdData.data.find(
        (genre: Genre) =>
          encodeForURL(genre.name) === encodeForURL(params.channelName)
      );

      if (!genreObj) {
        throw new Error("Genre not found");
      }

      const genreId = genreObj.id;
      const genreName = genreObj.name;

      // Fetch the data using the genreId
      const genreRadios = fetch(
        proxy + defaultUrl + `/genre/${genreId}/radios`
      ).then((response) => response.json());
      const genreArtists = fetch(
        proxy + defaultUrl + `/genre/${genreId}/artists`
      ).then((response) => response.json());
      const editorialReleases = fetch(
        proxy + defaultUrl + `/editorial/${genreId}/releases`
      ).then((response) => response.json());
      const chartPlaylists = fetch(
        proxy + defaultUrl + `/chart/${genreId}/playlists`
      ).then((response) => response.json());
      const delayPromise = delay(800); // wait at least 0.8s to avoid jagged transition between spinner and page
      // Wait for all promises to resolve
      const [radios, artists, releases, playlists] = await Promise.all([
        genreRadios,
        genreArtists,
        editorialReleases,
        chartPlaylists,
        delayPromise,
      ]);

      // Return the combined data
      return {
        genreRadios: radios,
        genreArtists: artists,
        editorialReleases: releases,
        chartPlaylists: playlists,
        genreName,
      };
    }),
  });
};




export const homePageLoader = () => {
  const editorialSelectionPromise = fetch(
    proxy + defaultUrl + "/editorial/0/selection"
  ).then((response) => response.json());
  const editorialChartsPromise = fetch(
    proxy + defaultUrl + "/editorial/0/charts"
  ).then((response) => response.json());
  const editorialReleasesPromise = fetch(
    proxy + defaultUrl + "/editorial/0/releases"
  ).then((response) => response.json());
  const topArtistsPromise = fetch(proxy + defaultUrl + "/chart/0/artists").then(
    (response) => response.json()
  );

  const delayPromise = delay(800);
  return defer({
    data: Promise.all([
      editorialSelectionPromise,
      editorialChartsPromise,
      editorialReleasesPromise,
      topArtistsPromise,
      delayPromise,
    ]).then((values) => {
      const [selection, charts, releases, artists] = values;
      return { selection, charts, releases, artists };
    }),
  });
};
