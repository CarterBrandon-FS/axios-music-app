import RankedTrack from "./RankedTrack";

function RankedList({ title, tracks, onPlay }) {
  return (
    <section className="ranked-list">
      <h3 className="ranked-list-title">{title}</h3>

      <div className="ranked-list-body">
        {tracks.map((track, index) => (
          <RankedTrack
            key={track.id}
            rank={index + 1}
            artwork={track.artwork}
            artist={track.artist}
            title={track.title}
            duration={track.duration}
            onPlay={() => onPlay(track.id)}
          />
        ))}
      </div>
    </section>
  );
}
export default RankedList;
