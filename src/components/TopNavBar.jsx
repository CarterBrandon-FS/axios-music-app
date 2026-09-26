import { FaSearch, FaMicrophone, FaBell } from "react-icons/fa";
import logo from "../assets/axion-logo.png";

function TopNavBar() {
  return (
    <header className="top-nav">
      <img src={logo} className="logo" />

      <form className="search-bar" onSubmit={(e) => e.preventDefault()}>
        <FaSearch className="search-icon" />
        <input type="text" placeholder="Search Music, Artist, Genre" />
        <FaMicrophone className="mic-icon" />
      </form>

      <nav className="top-nav-actions">
        <button className="ultra-btn">Get ULTRA</button>
        <button className="avatar">A</button>
        <span className="user-text">
          <strong>Axxon Jaxxon</strong>
          <small>Premium</small>
        </span>

        <button className="icon-btn" aria-label="Notifications">
          <FaBell />
        </button>
      </nav>
    </header>
  );
}

export default TopNavBar;
