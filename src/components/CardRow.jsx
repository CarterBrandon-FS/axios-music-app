import AlbumCard from "./AlbumCard";

function CardRow({ title, songs, playingId, onPlay }) {
  return (
    <section className="card-row">
      <h3 className="card-row-title">{title}</h3>

      <div className="card-row-scroll">
        {songs.map((song) => (
          <AlbumCard
            key={song.id}
            id={song.id}
            artwork={song.artwork}
            artist={song.artist}
            title={song.title}
            album={song.album}
            isPlaying={playingId === song.id}
            onPlay={onPlay}
          />
        ))}
      </div>
    </section>
  );
}

export default CardRow;
