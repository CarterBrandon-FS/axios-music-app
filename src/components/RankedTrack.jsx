import { FaPlay } from "react-icons/fa";

function RankedTrack({ rank, artwork, artist, title, duration, onPlay }) {
  return (
    <button className="ranked-track" onClick={onPlay}>
      <span className="ranked-number">{rank}.</span>

      {artwork ? (
        <img src={artwork} alt={title} className="ranked-art" />
      ) : (
        <div className="ranked-art ranked-placeholder" />
      )}

      <div className="ranked-info">
        <span className="ranked-artist">{artist}</span>
        <span className="ranked-title">{title}</span>
      </div>

      <span className="ranked-duration">{duration}</span>

      <span className="ranked-play">
        <FaPlay />
      </span>
    </button>
  );
}

export default RankedTrack;
