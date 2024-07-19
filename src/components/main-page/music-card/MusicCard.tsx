import { Link } from "react-router-dom";
import CardImgLink from "./CardImgLink/CardImgLink";
import { Artist } from "@/types/deezerApiTypes";
import { artistLink, link, tracksNumber } from "./MusicCard.css";
import { sprinkles } from "@/styles/sprinkles.css";

interface CardProps {
  imgSrc: string;
  title: string;
  tracklist: string;
  id: number;
}

interface PlaylistCardProps extends CardProps {
  numberOfTracks: number;
}

interface AlbumCardProps extends CardProps {
  artist: Artist;
  releaseDate?: string;
}

export const PlaylistCard = ({
  imgSrc,
  title,
  tracklist,
  numberOfTracks,
  id
}: PlaylistCardProps) => {
  return (
    <div className={sprinkles({ display: "flex", flexDirection: "column" })}>
      <CardImgLink imgSrc={imgSrc} linkSrc={`/playlist/${id}`} alt="" tracklist={tracklist} />
      <Link
        to={`/playlist/${id}`}
        className={`${sprinkles({
          fontSize: "font-size-2",
          marginTop: "size-3",
        })} ${link}`}
      >
        {title}
      </Link>
      <p className={tracksNumber}>{numberOfTracks} tracks</p>
    </div>
  );
};

export const ArtistCard = ({ imgSrc, title, tracklist, id }: CardProps) => {
  return (
    <div
      className={sprinkles({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      })}
    >
      <CardImgLink
        imgSrc={imgSrc}
        linkSrc={`/artist/${id}`}
        shape="circle"
        alt={title}
        tracklist={tracklist}
      />
      <Link
        to={`/artist/${id}`}
        className={`${sprinkles({
          fontSize: "font-size-2",
          marginTop: "size-3",
        })} ${link}`}
      >
        {title}
      </Link>
    </div>
  );
};

export const AlbumCard = ({
  imgSrc,
  title,
  tracklist,
  artist,
  releaseDate,
  id
}: AlbumCardProps) => {
  return (
    <div
      className={sprinkles({
        display: "flex",
        flexDirection: "column",
      })}
    >
      <CardImgLink
        imgSrc={imgSrc}
        linkSrc={`/album/${id}`}
        alt={title}
        tracklist={tracklist}
      />
      <Link
        to={`/album/${id}`}
        className={`${sprinkles({
          fontSize: "font-size-2",
          marginTop: "size-3",
        })} ${link}`}
      >
        {title}
      </Link>
      <p className={artistLink}>
        by{" "}
        <Link to={`/artist/${artist.id}`} className={`${artistLink} ${link}`}>
          {artist.name}
        </Link>
      </p>
      {releaseDate && <p className={artistLink}>Released on {releaseDate}</p>}
    </div>
  );
};
