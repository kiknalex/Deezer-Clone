import { encodeForURL } from "@/utils/helpers.ts";
import { LoaderFunctionArgs, defer } from "react-router-dom";
import { getAllGenresPromise, sdkFetchPromise } from "./fetchers";
import {
  Artist,
  Genre,
  Playlist,
  Radio,
  Release,
} from "@/types/deezerApiTypes";

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
          encodeForURL(genre.name) ===
          encodeForURL(params.channelName as string)
      );

      if (!genreObj) {
        throw new Error("Genre not found");
      }

      const genreId = genreObj.id;
      const genreName = genreObj.name;

      // Fetch the data using the genreId
      const genreRadiosPromise = sdkFetchPromise(`/genre/${genreId}/radios`);
      const genreArtistsPromise = sdkFetchPromise(`/genre/${genreId}/artists`);
      const editorialReleasesPromise = sdkFetchPromise(
        `/editorial/${genreId}/releases`
      );
      const chartPlaylistsPromise = sdkFetchPromise(
        `/chart/${genreId}/playlists`
      );
      const delayPromise = delay(800); // wait at least 0.8s to avoid jagged transition between spinner and page
      // Wait for all promises to resolve
      const [radios, artists, releases, playlists] = await Promise.all([
        genreRadiosPromise,
        genreArtistsPromise,
        editorialReleasesPromise,
        chartPlaylistsPromise,
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
  const editorialSelectionPromise = sdkFetchPromise("/editorial/0/selection");
  const editorialChartsPromise = sdkFetchPromise("/editorial/0/charts");
  const editorialReleasesPromise = sdkFetchPromise("/editorial/0/releases");
  const topArtistsPromise = sdkFetchPromise("/chart/0/artists");

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
