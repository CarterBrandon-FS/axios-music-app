import React from "react";
import { useState } from "react";
import AlbumCard from "../components/AlbumCard";
import RankedList from "../components/RankedList";
import MoodPills from "../components/MoodPills";
import "../styles/Explore.css";

const NEW_RELEASES = [
  {
    id: 6,
    artwork: "",
    artist: "Artist Name",
    title: "Song Title / Album",
    album: "",
  },
  {
    id: 7,
    artwork: "",
    artist: "Artist Name",
    title: "Song Title / Album",
    album: "",
  },
  {
    id: 8,
    artwork: "",
    artist: "Artist Name",
    title: "Song Title / Album",
    album: "",
  },
  {
    id: 9,
    artwork: "",
    artist: "Artist Name",
    title: "Song Title / Album",
    album: "",
  },
  {
    id: 10,
    artwork: "",
    artist: "Artist Name",
    title: "Song Title / Album",
    album: "",
  },
];

const EDITOR_PICK = [
  {
    id: 16,
    artwork: "",
    artist: "Artist Name",
    title: "Song Title / Album",
    album: "",
  },
  {
    id: 17,
    artwork: "",
    artist: "Artist Name",
    title: "Song Title / Album",
    album: "",
  },
  {
    id: 18,
    artwork: "",
    artist: "Artist Name",
    title: "Song Title / Album",
    album: "",
  },
  {
    id: 19,
    artwork: "",
    artist: "Artist Name",
    title: "Song Title / Album",
    album: "",
  },
  {
    id: 20,
    artwork: "",
    artist: "Artist Name",
    title: "Song Title / Album",
    album: "",
  },
];

const TOP_HIPHOP = [
  {
    id: 101,
    artwork: "",
    artist: "Artist Name",
    title: "Song Title",
    duration: "3:56",
  },
  {
    id: 102,
    artwork: "",
    artist: "Artist Name",
    title: "Song Title",
    duration: "3:56",
  },
  {
    id: 103,
    artwork: "",
    artist: "Artist Name",
    title: "Song Title",
    duration: "3:56",
  },
  {
    id: 104,
    artwork: "",
    artist: "Artist Name",
    title: "Song Title",
    duration: "3:56",
  },
  {
    id: 105,
    artwork: "",
    artist: "Artist Name",
    title: "Song Title",
    duration: "3:56",
  },
];

const TOP_POP = [
  {
    id: 201,
    artwork: "",
    artist: "Artist Name",
    title: "Song Title",
    duration: "3:56",
  },
  {
    id: 202,
    artwork: "",
    artist: "Artist Name",
    title: "Song Title",
    duration: "3:56",
  },
  {
    id: 203,
    artwork: "",
    artist: "Artist Name",
    title: "Song Title",
    duration: "3:56",
  },
  {
    id: 204,
    artwork: "",
    artist: "Artist Name",
    title: "Song Title",
    duration: "3:56",
  },
  {
    id: 205,
    artwork: "",
    artist: "Artist Name",
    title: "Song Title",
    duration: "3:56",
  },
];

function Explore() {
  const [playingId, setPlayingId] = useState(null);
  const handlePlay = (id) => setPlayingId(id === playingId ? null : id);
  return (
    <div className="explore-page">
      <div className="explore-main">
        <section className="explore-section">
          <h2>New Releases</h2>
          <div className="explore-card-row">
            {NEW_RELEASES.map((song) => (
              <AlbumCard
                key={song.id}
                id={song.id}
                artwork={song.artwork}
                artist={song.artist}
                title={song.title}
                album={song.album}
                isPlaying={playingId === song.id}
                onPlay={handlePlay}
              />
            ))}
          </div>
        </section>

        <section className="explore-section">
          <h2>Editor's Pick</h2>
          <div className="explore-card-row">
            {EDITOR_PICK.map((song) => (
              <AlbumCard
                key={song.id}
                id={song.id}
                artwork={song.artwork}
                title={song.title}
                album={song.album}
                artist={song.artist}
                isPlaying={playingId === song.id}
                onPlay={handlePlay}
              />
            ))}
          </div>
        </section>

        <section className="explore-section">
          <MoodPills />
        </section>
      </div>

      <div className="explore-sidebar">
        <RankedList
          title="Top 5 New Hip-Hop"
          tracks={TOP_HIPHOP}
          onPlay={handlePlay}
        />

        <RankedList
          title="Top 5 New Pop"
          tracks={TOP_POP}
          onPlay={handlePlay}
        />
      </div>
    </div>
  );
}
export default Explore;
