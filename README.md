# Deezer clone

### [Demo](https://clonedeezer.netlify.app/)

### Goals:

- Build a clone of [Deezer](https://www.deezer.com) as pixel-perfect as possible. ✅
- No libraries used except for React, react-router and vanilla-extract. ✅
- Get familiar with Typescript ecosystem. ✅
- Utilize useContext hook. ✅
- Architecture with the scaling in mind. ✅

# How it's made:

### Tech Stack:

- React
- React-router
- [Vanilla-extract css](https://github.com/vanilla-extract-css/vanilla-extract)
- Typescript

### Routing:

There are 3 main components: Header, Sidebar and MainPage.

Header and Sidebar are available at all routes, only the content of the MainPage is changing via [Outlet](https://reactrouter.com/en/main/components/outlet).

Incorrect routes are handled through <b>asterisk</b> path and <b>errorElement</b> prop.

```
<Route path="*" element={<ErrorPage />}></Route>
<Route
    path=":type/:id"
    element={<MusicDetailsPage />}
    loader={MusicDetailsLoader}
    errorElement={<ErrorPage />}
      ></Route>
```

### Data fetching:

Requests are sent with [Deezer javascript SDK](https://developers.deezer.com/sdk/javascript) wrapped in a Promise.

```
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
```

All fetching is done through react-router [loaders](https://reactrouter.com/en/main/route/loader), and most of the time, the data is deferred through [defer](https://reactrouter.com/en/main/guides/deferred) along with [React Suspense](https://react.dev/reference/react/Suspense) to display the fallback while data is loading.

#### Ensured fetching is easily customizable and future-proof, a few examples:

- <ChannelsGrid /\> component accepts any amount of items as children.
- channelLoader() fetches an array of all genres from server to acquire id of the current genre, which means it's not dependent on hardcoded values.
- Possibility to add as many fetch requests as you want <i>(within API limits)</i> to the loaders.
- <TrackList/\> component is optimized for large arrays of tracks, through custom written [Virtualized List](https://www.patterns.dev/vanilla/virtual-lists/).
- Custom written <Carousel /\> component that accepts any amount of children.

#### How is music player track fetching is handled:

Initially, the music data was fetched as an array of tracks, where each track object contained an audio link and most of the necessary information for display. However, for unknown reasons, more recent track arrays began to lack critical properties, such as the album object, any images, and even the artist information. This inconsistency led to the decision to refactor the fetching process to retrieve the current track that is about to play, ensuring all required information is available.

To support the track change buttons, which display previews of the next and previous tracks, the system needs to fetch 2 to 3 tracks simultaneously when the tracklist changes. Although this initially posed a challenge, I optimized the process using several useState hooks to store the previous, current, and next track data. As a result, after the initial bulk fetch, subsequent track data is fetched one at a time.


# Optimizations:

Todo