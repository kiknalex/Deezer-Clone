import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App.tsx";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
  defer,
} from "react-router-dom";
import ChannelsGrid from "./components/main-page/explore/channels/ChannelsGrid.tsx";
import ChannelGenreCards from "./components/main-page/explore/channels/channels-categories/ChannelCategoriesCards.tsx";
import ChannelPage from "./components/main-page/explore/channel-page/ChannelPage.tsx";
import { encodeForURL } from "./utils/helpers.ts";
const proxy = "https://corsproxy.io/?";
const defaultUrl = "https://api.deezer.com";
const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(null);
    }, ms);
  });
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      loader={async () => {
        return fetch(
          "https://corsproxy.io/?https://api.deezer.com/album/302127"
        );
      }}
      element={<App />}
    >
      <Route
        path="channels/explore"
        element={
          <ChannelsGrid category="Categories">
            <ChannelGenreCards />
          </ChannelsGrid>
        }
      ></Route>
      <Route
        path="channels/:channelName"
        element={<ChannelPage />}
        loader={async ({ params }) => {
          const allGenres = await fetch(proxy + defaultUrl + "/genre").then(
            (response) => response.json()
          );
          // Find the genre object that matches the encoded channel name
          const genreObj = allGenres.data.find(
            (genre) =>
              encodeForURL(genre.name) === encodeForURL(params.channelName)
          );
          const id = genreObj.id;
          const genreName = genreObj.name;
          const genreRadios = fetch(
            proxy + defaultUrl + `/genre/${id}/radios`
          ).then((response) => response.json());
          const genreArtists = fetch(
            proxy + defaultUrl + `/genre/${id}/artists`
          ).then((response) => response.json());
          const editorialReleases = fetch(
            proxy + defaultUrl + `/editorial/${id}/releases`
          ).then((response) => response.json());
          const delayLoad = delay(500);

          return defer({
            data: Promise.all([
              genreRadios,
              genreArtists,
              editorialReleases,
              delayLoad,
            ]),
            genreName
          });
        }}
      ></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
