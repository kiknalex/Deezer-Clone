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
import { channelPageLoader, homePageLoader } from "./utils/loaders.ts";
import HomePage from "./app/pages/home-page/HomePage.tsx";


const router = createBrowserRouter(
  createRoutesFromElements(
    
    <Route
      path=""
      loader={async () => {
        return fetch(
          "https://corsproxy.io/?https://api.deezer.com/album/302127"
        );
      }}
      element={<App />}
    >
      <Route path="" loader={homePageLoader} element={<HomePage />}></Route>
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
        loader={channelPageLoader}
      ></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
