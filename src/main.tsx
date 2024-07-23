import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App.tsx";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import ChannelsGrid from "./components/main-page/explore/channels/ChannelsGrid.tsx";
import ChannelGenreCards from "./components/main-page/explore/channels/channels-categories/ChannelCategoriesCards.tsx";
import ChannelPage from "./app/pages/channel-page/ChannelPage.tsx";
import {
  MusicDetailsLoader,
  channelLoader,
  firstVisitLoader,
  homeLoader,
  searchLoader,
} from "./utils/loaders.ts";
import HomePage from "./app/pages/home-page/HomePage.tsx";
import SearchPage from "./app/pages/search-page/SearchPage.tsx";
import MusicDetailsPage from "./app/pages/music-details-page/MusicDetailsPage.tsx";
import ArtistDetailsPage from "./app/pages/artist-details-page/ArtistDetailsPage.tsx";

window.DZ.init({
  channelUrl: "http://localhost:5173/",
});

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route loader={firstVisitLoader} element={<App />}>
      <Route path="" loader={homeLoader} element={<HomePage />}></Route>
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
        loader={channelLoader}
      ></Route>
      <Route
        path="search/:searchQuery"
        element={<SearchPage />}
        loader={searchLoader}
      ></Route>
      <Route path="artist/:id" element={<ArtistDetailsPage />}></Route>
      <Route
        path=":type/:id"
        element={<MusicDetailsPage />}
        loader={MusicDetailsLoader}
      ></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
