import { useState } from "react";
import SettingsSection from "../components/SettingsSection";
import SettingRow from "../components/SettingRow";
import Toggle from "../components/Toggle";
import "../styles/Settings.css";

const ACCENT_COLORS = [
  { name: "Teal", value: "#1ce8d0" },
  { name: "Purple", value: "#4a12d9" },
  { name: "Pink", value: "#ec4899" },
  { name: "Orange", value: "#f97316" },
  { name: "Blue", value: "#3b82f6" },
];

function Settings() {
  // Account
  const [displayName, setDisplayName] = useState("Axxon Jaxxon");
  const [email] = useState("axxonjaxxon32@email.com");
  const [username, setUsername] = useState("@axxonjaxxon");
  const [password, setPassword] = useState("Atjaxx761");

  // Playback
  const [audioQuality, setAudioQuality] = useState("High");
  const [autoplay, setAutoplay] = useState(true);
  const [crossfade, setCrossfade] = useState(6);
  const [normalizeVolume, setNormalizeVolume] = useState(true);

  // Appearance
  const [theme, setTheme] = useState("Dark");
  const [accentColor, setAccentColor] = useState("#1ce8d0");

  // Notifications
  const [notifNewReleases, setNotifNewReleases] = useState(true);
  const [notifArtistUpdates, setNotifArtistUpdates] = useState(true);
  const [notifLiveChat, setNotifLiveChat] = useState(false);
  const [notifEmail, setNotifEmail] = useState(false);

  const handleSave = () => {
    console.log("Saving:", { displayName, audioQuality, theme, accentColor });
  };

  const handleSignOut = () => {
    console.log("Sign out clicked");
  };

  const handleUsername = () => {
    console.log("Username clicked");
  };

  const handlePassword = () => {
    console.log("Password clicked");
  };

  return (
    <div className="settings-page">
      <h2>Settings</h2>

      {/* ACCOUNT */}
      <SettingsSection title="Account">
        <SettingRow label="Display Name">
          <input
            type="text"
            className="settings-input"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </SettingRow>

        <SettingRow label="Email">
          <input
            type="email"
            className="settings-input"
            value={email}
            disabled
          />
        </SettingRow>

        <SettingRow label="Username">
          <input
            type="text"
            className="settings-input"
            value={username}
            onChange={handleUsername}
          />
        </SettingRow>

        <SettingRow label="Password">
          <input
            type="password"
            className="settings-input"
            value={password}
            onChange={handlePassword}
          />
        </SettingRow>

        <div className="settings-actions">
          <button className="settings-btn primary" onClick={handleSave}>
            Save Changes
          </button>
        </div>
      </SettingsSection>

      {/* PLAYBACK */}
      <SettingsSection title="Playback">
        <SettingRow
          label="Audio Quality"
          description="Higher quality uses more data"
        >
          <select
            className="settings-select"
            value={audioQuality}
            onChange={(e) => setAudioQuality(e.target.value)}
          >
            <option value="Low">Low</option>
            <option value="Normal">Normal</option>
            <option value="High">High</option>
            <option value="HiFi">HiFi (Premium)</option>
          </select>
        </SettingRow>

        <SettingRow
          label="Autoplay"
          description="Keep playing similar songs after queue ends"
        >
          <Toggle checked={autoplay} onChange={setAutoplay} />
        </SettingRow>

        <SettingRow label="Crossfade" description={`${crossfade} seconds`}>
          <input
            type="range"
            min="0"
            max="12"
            value={crossfade}
            onChange={(e) => setCrossfade(Number(e.target.value))}
            className="settings-slider"
          />
        </SettingRow>

        <SettingRow
          label="Normalize Volume"
          description="Keep volume consistent across tracks"
        >
          <Toggle checked={normalizeVolume} onChange={setNormalizeVolume} />
        </SettingRow>
      </SettingsSection>

      {/* APPEARANCE */}
      <SettingsSection title="Appearance">
        <SettingRow label="Theme">
          <div className="theme-options">
            {["Light", "Dark", "System"].map((option) => (
              <button
                key={option}
                type="button"
                className={`theme-btn ${theme === option ? "active" : ""}`}
                onClick={() => setTheme(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </SettingRow>

        <SettingRow label="Accent Color">
          <div className="color-options">
            {ACCENT_COLORS.map((color) => (
              <button
                key={color.value}
                type="button"
                className={`color-swatch ${accentColor === color.value ? "active" : ""}`}
                style={{ backgroundColor: color.value }}
                onClick={() => setAccentColor(color.value)}
                aria-label={color.name}
              />
            ))}
          </div>
        </SettingRow>
      </SettingsSection>

      {/* NOTIFICATIONS */}
      <SettingsSection title="Notifications">
        <SettingRow
          label="New Releases"
          description="Get notified when artists you follow drop new music"
        >
          <Toggle checked={notifNewReleases} onChange={setNotifNewReleases} />
        </SettingRow>

        <SettingRow
          label="Artist Updates"
          description="News, tours, and announcements"
        >
          <Toggle
            checked={notifArtistUpdates}
            onChange={setNotifArtistUpdates}
          />
        </SettingRow>

        <SettingRow
          label="Live Chat Mentions"
          description="When someone @mentions you in a chat room"
        >
          <Toggle checked={notifLiveChat} onChange={setNotifLiveChat} />
        </SettingRow>

        <SettingRow
          label="Email Newsletter"
          description="Weekly digest of new music and features"
        >
          <Toggle checked={notifEmail} onChange={setNotifEmail} />
        </SettingRow>
      </SettingsSection>

      {/* ABOUT */}
      <SettingsSection title="About">
        <SettingRow label="App Version">
          <span className="settings-version">1.0.0</span>
        </SettingRow>

        <SettingRow label="Terms of Service">
          <a href="#" className="settings-link">
            View
          </a>
        </SettingRow>

        <SettingRow label="Privacy Policy">
          <a href="#" className="settings-link">
            View
          </a>
        </SettingRow>

        <div className="settings-actions">
          <button className="settings-btn danger" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      </SettingsSection>
    </div>
  );
}

export default Settings;
