import { container } from "@/app/App.css";
import LoaderSpin from "@/components/util-components/loader-spin/LoaderSpin";
import { Suspense } from "react";
import { Await, Link, useLoaderData } from "react-router-dom";
import {
  creatorBadgeImg,
  creatorBadgeLink,
  description,
  headingContainer,
  mainImage,
  mainImageContainer,
  musicInfoList,
} from "./MusicDetailsPage.css";
import { sprinkles } from "@/styles/sprinkles.css";
import { secondsToHours } from "@/utils/helpers";
import ActionPanel from "@/components/main-page/music-details/action-panel/ActionPanel";
import TrackList from "@/components/main-page/music-details/TrackList/TrackList";
import { MusicDetails } from "@/utils/loaders";

const MusicDetailsPage = () => {
  const { musicDetails } = useLoaderData() as { musicDetails: MusicDetails };

  return (
    <Suspense fallback={<LoaderSpin />}>
      <Await resolve={musicDetails}>
        {(musicData) => (
          <>
            <section className={`${container} ${headingContainer}`}>
              <div className={mainImageContainer}>
                <img
                  className={mainImage}
                  src={musicData.cover_big || musicData.picture_big}
                  width="500"
                  height="500"
                  alt=""
                />
              </div>
              <div className={description}>
                <h1
                  className={`${sprinkles({
                    fontSize: "font-size-11",
                    marginBottom: "size-7",
                  })}`}
                >
                  {musicData.title || musicData.name}
                </h1>
                {musicData.artist && (
                  <div
                    className={sprinkles({
                      display: "flex",
                      alignItems: "center",
                      gap: "size-2",
                    })}
                  >
                    <Link to={`/artist/${musicData.artist.id}`}>
                      <img
                        className={creatorBadgeImg}
                        src={musicData.artist.picture_small}
                        width="50"
                        height="50"
                        alt="artist"
                      />
                    </Link>
                    <Link
                      to={`/artist/${musicData.artist.id}`}
                      className={creatorBadgeLink}
                    >
                      {musicData.artist.name}
                    </Link>
                  </div>
                )}
                <ul className={musicInfoList}>
                  {musicData.nb_tracks && <li>{musicData.nb_tracks} tracks</li>}
                  {musicData.duration && (
                    <li>{secondsToHours(musicData.duration)}</li>
                  )}
                  {musicData.release_date && <li>{musicData.release_date}</li>}
                  <li>{musicData.fans || musicData.nb_fan} fans</li>
                </ul>
              </div>
            </section>
            <div className={container}>
              <ActionPanel tracklist={musicData.tracklist} />
            </div>
            {musicData.tracks && (
              <div className={container}>
                <TrackList musicData={musicData} />
              </div>
            )}
          </>
        )}
      </Await>
    </Suspense>
  );
};

export default MusicDetailsPage;
