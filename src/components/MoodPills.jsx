const MOODS = [
  "Hype",
  "Chill",
  "Sunday",
  "Road Trip",
  "Euphoric",
  "Party",
  "Cozy",
  "Sad",
  "Summer",
  "Gritty",
  "Confident",
  "Late Night",
  "Drive Home",
  "Dark",
  "Podcast",
];

function MoodPills() {
  return (
    <div className="mood-pills">
      {MOODS.map((mood) => (
        <button key={mood} className="mood-pill">
          {mood}
        </button>
      ))}
    </div>
  );
}

export default MoodPills;
