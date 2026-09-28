const GENRES = [
  "Podcasts",
  "Workout",
  "Study",
  "Party",
  "Sad",
  "Romance",
  "Commute",
  "Sleep",
  "Feel good",
];

function GenrePills() {
  return (
    <div className="genre-pills">
      {GENRES.map((genre) => (
        <button key={genre} className="genre-pill">
          {genre}
        </button>
      ))}
    </div>
  );
}

export default GenrePills;
