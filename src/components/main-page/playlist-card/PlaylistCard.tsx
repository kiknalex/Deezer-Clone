import { Link } from "react-router-dom";
import CardImgLink from "./CardImgLink/CardImgLink";
import { Artist } from "@/types/deezerApiTypes";
import { artistLink, link, tracksNumber } from "./PlaylistCard.css";
import { sprinkles } from "@/styles/sprinkles.css";
import { squareImg } from "./CardImgLink/CardImgLink.css";

interface CardProps {
  imgSrc: string;
  title: string;
  tracklist: string;
}

interface PlaylistCardProps extends CardProps {
  numberOfTracks: number;
}

interface AlbumCardProps extends CardProps {
  artist: Artist;
  releaseDate: string;
}

export const PlaylistCard = ({
  imgSrc,
  title,
  tracklist,
  numberOfTracks,
}: PlaylistCardProps) => {
  return (
    <div className={sprinkles({ display: "flex", flexDirection: "column" })}>
      <CardImgLink imgSrc={imgSrc} linkSrc={"/"} alt="" />
      <Link
        to=""
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

export const ArtistCard = ({ imgSrc, title, tracklist }: CardProps) => {
  return (
    <div
      className={sprinkles({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      })}
    >
      <CardImgLink imgSrc={imgSrc} linkSrc={"/"} shape="circle" alt={title} />
      <Link
        to=""
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
}: AlbumCardProps) => {
  return (
    <div
      className={sprinkles({
        display: "flex",
        flexDirection: "column",
      })}
    >
      <CardImgLink imgSrc={imgSrc} linkSrc={"/"} imgClass={squareImg} />
      <Link
        to=""
        className={`${sprinkles({
          fontSize: "font-size-2",
          marginTop: "size-3",
        })} ${link}`}
      >
        {title}
      </Link>
      <p className={artistLink}>
        by{" "}
        <Link to="" className={`${artistLink} ${link}`}>
          {artist.name}
        </Link>
      </p>
      <p className={artistLink}>Released on {releaseDate}</p>
    </div>
  );
};
