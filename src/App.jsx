import "./App.css";
import TopNavBar from "./components/TopNavBar";
import LeftNav from "./components/LeftNav";
import NowPlayingBar from "./components/NowPlayingBar";
import { useState } from "react";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(null);
  const [currentArtist, setCurrentArtist] = useState(null);
  const handleToggle = () => setIsPlaying(!isPlaying);
  const handleSong = (song) => setCurrentSong(song);
  return (
    <>
      <div className="layout">
        <TopNavBar />

        <div className="left-column">
          <LeftNav />
        </div>
      </div>
      <div className="footer">
        <NowPlayingBar
          currentSong={currentSong}
          isPlaying={isPlaying}
          onToggle={handleToggle}
          handleSong={handleSong}
          currentArtist={currentArtist}
        />
      </div>
    </>
  );
}

export default App;
