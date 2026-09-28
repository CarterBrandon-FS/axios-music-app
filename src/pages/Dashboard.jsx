import React from "react";
import GenrePills from "../components/GenrePills";
import { useState } from "react";
import CardRow from "../components/CardRow";
import HeroBanner from "../components/HeroBanner";
import SpotlightArtist from "../components/SpotlightArtist";
import "../styles/Dashboard.css";

const REPLAY_SONGS = [
  // placeholder data- will be replaced with api later
  {
    id: 1,
    artwork: "",
    artist: "Album Title",
    title: "Album",
    album: "Artist",
  },
  {
    id: 2,
    artwork: "",
    artist: "Album Title",
    title: "Album",
    album: "Artist",
  },
  {
    id: 3,
    artwork: "",
    artist: "Album Title",
    title: "Album",
    album: "Artist",
  },
  {
    id: 4,
    artwork: "",
    artist: "Album Title",
    title: "Album",
    album: "Artist",
  },
  {
    id: 5,
    artwork: "",
    artist: "Album Title",
    title: "Album",
    album: "Artist",
  },
];

const HOT20_SONGS = [
  {
    id: 6,
    artwork: "",
    artist: "Album Title",
    title: "Album",
    album: "Artist",
  },
  {
    id: 7,
    artwork: "",
    artist: "Album Title",
    title: "Album",
    album: "Artist",
  },
  {
    id: 8,
    artwork: "",
    artist: "Album Title",
    title: "Album",
    album: "Artist",
  },
  {
    id: 9,
    artwork: "",
    artist: "Album Title",
    title: "Album",
    album: "Artist",
  },
  {
    id: 10,
    artwork: "",
    artist: "Album Title",
    title: "Album",
    album: "Artist",
  },
];

function Dashboard() {
  const [playingId, setPlayingId] = useState(null);

  const handlePlay = (id) => {
    setPlayingId(id === playingId ? null : id);
  };

  return (
    <div className="dashboard">
      <div className="dashboard-main">
        <h2>Dashboard</h2>

        <GenrePills />

        <HeroBanner
          subtitle="Curated Jhené Aiko playlist"
          title="Westside Whimsy"
          trackInfo="Featuring the #1 song 'So Good' feat. Kendrick Lamar, plus Wildcat(s), Ghost, Love Bomb, Ceiling, Break — with collaborations from Ab-Soul, Tyga, Larry June, and OHMA"
        />

        <CardRow
          title="Replay"
          songs={REPLAY_SONGS}
          playingId={playingId}
          onPlay={handlePlay}
        />

        <CardRow
          title="Hot 20"
          songs={HOT20_SONGS}
          playingId={playingId}
          onPlay={handlePlay}
        />
      </div>

      <SpotlightArtist
        artistName="Jhené Aiko"
        mainArtwork=""
        smallArtwork1=""
        smallArtwork2=""
        wideArtwork=""
      />
    </div>
  );
}

export default Dashboard;
