import AlbumCard from "../components/AlbumCard";
import ArtistCircle from "../components/ArtistCircle";
import QuickPlayCard from "../components/QuickPlayCard";
import ArtistPanel from "../components/ArtistPanel";
import { FaUser } from "react-icons/fa";
import "../styles/User.css";
import kdotVinyl from "../assets/kdot-vinyl.png";

const ARTISTS = [
  { id: 1, name: "" },
  { id: 2, name: "" },
  { id: 3, name: "" },
  { id: 4, name: "" },
  { id: 5, name: "" },
  { id: 6, name: "" },
  { id: 7, name: "" },
];

const QUICK_PLAYS = [
  { id: 1, title: "Title Name", subtitle: "Artist and Album Name" },
  { id: 2, title: "Title Name", subtitle: "Artist and Album Name" },
  { id: 3, title: "Title Name", subtitle: "Artist and Album Name" },
  { id: 4, title: "Title Name", subtitle: "Artist and Album Name" },
  { id: 5, title: "Title Name", subtitle: "Artist and Album Name" },
  { id: 6, title: "Title Name", subtitle: "Artist and Album Name" },
];

const FAVS = [
  { id: 1, artwork: "", artist: "", title: "", album: "" },
  { id: 2, artwork: "", artist: "", title: "", album: "" },
  { id: 3, artwork: "", artist: "", title: "", album: "" },
  { id: 4, artwork: "", artist: "", title: "", album: "" },
  { id: 5, artwork: "", artist: "", title: "", album: "" },
  { id: 6, artwork: "", artist: "", title: "", album: "" },
];

function User() {
  return (
    <div className="user-page">
      <div className="user-main">
        {/* User header */}
        <header className="user-header">
          <div className="user-avatar-large">
            <FaUser />
          </div>
          <div className="user-header-info">
            <h2>Axxon Jaxxon</h2>
            <p>Axion Premium</p>
          </div>
        </header>

        {/* Most Listened To Artist */}
        <section className="user-section">
          <h3>Most Listened To Artist</h3>
          <div className="artist-circle-row">
            {ARTISTS.map((a) => (
              <ArtistCircle key={a.id} id={a.id} image="" name={a.name} />
            ))}
          </div>
        </section>

        {/* Quick Plays */}
        <section className="user-section">
          <h3>Quick Plays</h3>
          <div className="quick-play-grid">
            {QUICK_PLAYS.map((q) => (
              <QuickPlayCard
                key={q.id}
                artwork=""
                title={q.title}
                subtitle={q.subtitle}
              />
            ))}
          </div>
        </section>

        {/* Favs */}
        <section className="user-section">
          <h3>Favs</h3>
          <div className="favs-row">
            {FAVS.map((f) => (
              <AlbumCard
                key={f.id}
                id={f.id}
                artwork={f.artwork}
                artist={f.artist}
                title={f.title}
                album={f.album}
                isPlaying={false}
                onPlay={() => {}}
              />
            ))}
          </div>
        </section>
      </div>

      <ArtistPanel
        name="Kendrick Lamar"
        trackTitle="7. Rich Spirit"
        albumTitle="Mr Morale And The Big Steppers"
        image={kdotVinyl}
        bioImage=""
        followers="69 Million"
        isFollowing={true}
      />
    </div>
  );
}

export default User;
