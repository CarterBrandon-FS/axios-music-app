import { FaPlay, FaPause } from "react-icons/fa";

function AlbumCard({ id, artwork, title, artist, album, isPlaying, onPlay }) {
  return (
    <article className="album-card">
      <button
        className="album-card-art"
        onClick={() => onPlay(id)}
        aria-label={isPlaying ? `Pause ${title}` : `Play ${title}`}
      >
        {artwork ? (
          <img src={artwork} alt={title} />
        ) : (
          <div className="album-card-placeholder" />
        )}

        <span className="album-card-play">
          {isPlaying ? <FaPause /> : <FaPlay />}
        </span>
      </button>

      <h3 className="album-card-artist">{artist}</h3>
      <p className="album-card-meta">
        {title}
        {album && ` / ${album}`}
      </p>
    </article>
  );
}

export default AlbumCard;
