import { encodeForURL } from "@/utils/helpers.ts";
import { LoaderFunctionArgs, defer } from "react-router-dom";
import { getAllGenresPromise, sdkFetch } from "./fetchers";
import {
  Album,
  Artist,
  Genre,
  Playlist,
  Radio,
  Release,
  Track,
} from "@/types/deezerApiTypes";

const delay = (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(null);
    }, ms);
  });
};
export interface channelLoaderData {
  data: {
    genreRadios: { data: Radio[] };
    genreArtists: { data: Artist[] };
    editorialReleases: { data: Release[] };
    chartPlaylists: { data: Playlist[] };
    genreName: string;
  };
}

export const channelLoader = ({ params }: LoaderFunctionArgs) => {
  const genreNameWithIdPromise = getAllGenresPromise();
  const dataPromise = genreNameWithIdPromise.then(async (value) => {
    const genres = value as { data: Genre[] };
    // Find the genre object within the data array
    const genreObj = genres.data.find(
      (genre: Genre) =>
        encodeForURL(genre.name) === encodeForURL(params.channelName as string)
    );

    if (!genreObj) {
      throw new Error("Genre not found");
    }

    const genreId = genreObj.id;
    const genreName = genreObj.name;

    const genreArtistsPromise = sdkFetch(`/genre/${genreId}/artists`);
    const editorialReleasesPromise = sdkFetch(`/editorial/${genreId}/releases`);
    const chartPlaylistsPromise = sdkFetch(`/chart/${genreId}/playlists`);
    const delayPromise = delay(800); // wait at least 0.8s to avoid jagged transition between spinner and page

    const [artists, releases, playlists] = await Promise.all([
      genreArtistsPromise,
      editorialReleasesPromise,
      chartPlaylistsPromise,
      delayPromise,
    ]);

    // Return the combined data
    return {
      genreArtists: artists,
      editorialReleases: releases,
      chartPlaylists: playlists,
      genreName,
    };
  });
  return defer({
    data: dataPromise,
  });
};

export interface homeLoaderData {
  data: {
    selection: Album[];
    charts: Track[];
    releases: Album[];
    artists: Artist[];
  };
}

export const homeLoader = () => {
  const editorialSelectionPromise = sdkFetch("/editorial/0/selection");
  const editorialChartsPromise = sdkFetch("/editorial/0/charts");
  const editorialReleasesPromise = sdkFetch("/editorial/0/releases");
  const topArtistsPromise = sdkFetch("/chart/0/artists");

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
    }).catch(error => console.error(error)),
  });
};

export interface SearchLoaderData {
  artists: { data: Artist[] };
  albums: { data: Album[] };
}

export const searchLoader = async ({ params }: LoaderFunctionArgs) => {
  const artistsData = await sdkFetch(`/search/artist?q=${params.searchQuery}`);
  const albumsData = await sdkFetch(`/search/album?q=${params.searchQuery}`);
  return {
    artists: artistsData,
    albums: albumsData,
  };
};


export type MusicDetails = Album | Playlist;

export const MusicDetailsLoader = async ({ params }: LoaderFunctionArgs) => {
  if (!["album", "playlist"].includes(params.type as string)) {
    throw new Error("Wrong type");
  }

  const delayPromise = delay(500);
  const musicDetailsPromise = sdkFetch(`/${params.type}/${params.id}`);

  const allPromises = Promise.all([musicDetailsPromise, delayPromise]).then(
    (values) => values[0]
  ).catch(error => console.error(error));
  return defer({ musicDetails: allPromises } );
};
