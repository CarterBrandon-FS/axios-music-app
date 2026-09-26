import { FaRegCompass } from "react-icons/fa";
import { HiOutlineUser } from "react-icons/hi";
import { RxDashboard } from "react-icons/rx";
import { LuMessageSquareMore, LuLibraryBig, LuSettings } from "react-icons/lu";
import { RiPlayListFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const MENU_ITEMS = [
  { to: "/user", icon: <HiOutlineUser />, label: "Profile" },
  { to: "/", icon: <RxDashboard />, label: "Dashboard" },
  { to: "/search", icon: <FaRegCompass />, label: "Explore" },
  { to: "/chat", icon: <LuMessageSquareMore />, label: "Live Chat" },
  { to: "/library", icon: <LuLibraryBig />, label: "Library" },
  { to: "/settings", icon: <LuSettings />, label: "Settings" },
];

const PLAYLISTS = [
  { title: "Liked Songs", sub: "Auto Playlist" },
  { title: "Cool Chill", sub: "Axxon Jaxxon" },
  { title: "Old School", sub: "Axxon Jaxxon" },
  { title: "Rap", sub: "Axxon Jaxxon" },
];

function LeftNav() {
  return (
    <aside className="left-nav">
      <h3>Menu</h3>
      <div className="nav-divider" />
      <nav>
        {MENU_ITEMS.map(({ to, icon, label }) => (
          <NavLink key={to} to={to} end className="nav-item">
            {icon}
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="nav-divider" />

      <h3>Playlists</h3>
      <nav>
        <div className="nav-item highlight">
          <RiPlayListFill />
          <span>Playlists</span>
        </div>

        {PLAYLISTS.map(({ title, sub }) => (
          <div key={title} className="nav-item">
            <span>
              {title}
              <small>{sub}</small>
            </span>
          </div>
        ))}
      </nav>
      <div className="nav-divider" />
    </aside>
  );
}

export default LeftNav;
