import { GoThumbsup, GoThumbsdown } from "react-icons/go";
import { HiOutlineDotsVertical } from "react-icons/hi";
import {
  FaRepeat,
  FaBackwardStep,
  FaForwardStep,
  FaPlay,
  FaPause,
  FaShuffle,
} from "react-icons/fa6";
import {
  IoVolumeHighOutline,
  IoHeartOutline,
  IoShareSocialOutline,
  IoBluetooth,
} from "react-icons/io5";

import React, { useState } from "react";

function NowPlayingBar({
  currentSong,
  isPlaying,
  onToggle,
  onRepeat,
  onShuffle,
  onPrevious,
  onNext,
}) {
  return (
    <footer className="now-playing-bar">
      {/* Left bottom info */}
      <div className="np-left">
        <div className="np-art">
          {currentSong?.artwork && (
            <img src={currentSong.artwork} alt={currentSong.title} />
          )}
        </div>
        <div className="np-info">
          <span className="np-title">{currentSong?.title || "Song Title"}</span>
          <span className="np-artist">{currentSong?.artist || "Artist"}</span>
        </div>

        <button className="np-icon-btn" aria-label="Like">
          <GoThumbsup />
        </button>
        <button className="np-icon-btn" aria-label="Dislike">
          <GoThumbsdown />
        </button>
        <button className="np-icon-btn" aria-label="More options">
          <HiOutlineDotsVertical />
        </button>
      </div>

      {/* Center bottom play + progress */}
      <div className="np-center">
        <div className="np-controls">
          <button
            className="np-icon-btn"
            onClick={onShuffle}
            aria-label="Shuffle"
          >
            <FaShuffle />
          </button>

          <button
            className="np-icon-btn"
            onClick={onPrevious}
            aria-label="Previous"
          >
            <FaBackwardStep />
          </button>
          <button
            className="np-play-btn"
            onClick={onToggle}
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>

          <button className="np-icon-btn" onClick={onNext} aria-label="Next">
            <FaForwardStep />
          </button>

          <button
            className="np-icon-btn"
            onClick={onRepeat}
            aria-label="Repeat"
          >
            <FaRepeat />
          </button>
        </div>

        <div className="np-progress">
          <span className="np-time">0:00</span>
          <div className="np-progress-bar">
            <div className="np-progress-fill" style={{ width: "0%" }} />
          </div>
          <span className="np-time">0:00</span>
        </div>
      </div>
      {/* Right side volume + actions */}

      <div className="np-right">
        <button className="np-icon-btn" aria-label="Bluetooth">
          <IoBluetooth />
        </button>

        <button className="np-icon-btn" aria-label="Volume">
          <IoVolumeHighOutline />
        </button>
        <div className="np-volume-bar">
          <div className="np-volume-fill" style={{ width: "70%" }} />
        </div>

        <button className="np-icon-btn" aria-label="Favorite">
          <IoHeartOutline />
        </button>

        <button className="np-icon-btn" aria-label="Share">
          <IoShareSocialOutline />
        </button>
      </div>
    </footer>
  );
}

export default NowPlayingBar;
