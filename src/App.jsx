import "./App.css";
import TopNavBar from "./components/TopNavBar";
import LeftNav from "./components/LeftNav";
import NowPlayingBar from "./components/NowPlayingBar";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import User from "./pages/User";
import Details from "./pages/Details";
import Explore from "./pages/Explore";
import ComingSoon from "./pages/ComingSoon";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(null);
  const [currentArtist, setCurrentArtist] = useState(null);
  const [currentAlbum, setCurrentAlbum] = useState(null);

  const handleToggle = () => setIsPlaying(!isPlaying);
  const handleSong = (song) => setCurrentSong(song);
  const handleArtist = (artist) => setCurrentArtist(artist);
  const handleAlbum = (album) => setCurrentAlbum(album);

  const handlePrevious = () => console.log("Previous");
  const handleNext = () => console.log("Next");
  const handleRepeat = () => console.log("Repeat");
  const handleShuffle = () => console.log("Shuffle");

  return (
    <>
      <div className="app">
        <TopNavBar />

        <div className="app-body">
          <aside className="left-column">
            <LeftNav />
          </aside>

          <main className="page-content">
            <Routes>
              {/* Main pages */}
              <Route path="/" element={<Dashboard />} />
              <Route path="/search" element={<Explore />} />
              <Route path="/details" element={<Details />} />
              <Route path="/user" element={<User />} />

              {/* Menu stub pages
              <Route path="/chat" element={<ComingSoon title="Live Chat" />} />
              <Route path="/library" element={<ComingSoon title="Library" />} />
              <Route
                path="/settings"
                element={<ComingSoon title="Settings" />}
              />

              {/* Sidebar playlist stubs (optional) */}
              {/* <Route
                path="/playlists"
                element={<ComingSoon title="Playlists" />}
              />
              <Route
                path="/liked"
                element={<ComingSoon title="Liked Songs" />}
              />
              <Route
                path="/cool-chill"
                element={<ComingSoon title="Cool Chill" />}
              />
              <Route
                path="/old-school"
                element={<ComingSoon title="Old School" />}
              />
              <Route path="/rap" element={<ComingSoon title="Rap" />} />  */}

              {/* Fallback */}
              <Route path="*" element={<ComingSoon title="Page Not Found" />} />
            </Routes>
          </main>
        </div>
      </div>

      <NowPlayingBar
        currentSong={currentSong}
        currentArtist={currentArtist}
        currentAlbum={currentAlbum}
        isPlaying={isPlaying}
        onToggle={handleToggle}
        onPrevious={handlePrevious}
        onNext={handleNext}
        onShuffle={handleShuffle}
        onRepeat={handleRepeat}
      />
    </>
  );
}

export default App;
