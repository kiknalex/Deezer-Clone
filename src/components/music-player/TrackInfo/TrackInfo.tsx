export const TrackInfo = ({ track }) => {
  return (
    <div>
      <div>
        <img src={track.album.cover_small} width="56" height="56" alt="" />
      </div>
      <div>
        <a href="#">{track.title}</a>
        <p>{track.artist.name}</p>
      </div>
    </div>
  );
};
