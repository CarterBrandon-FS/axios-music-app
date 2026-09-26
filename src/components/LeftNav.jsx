import { FaRegCompass } from "react-icons/fa";
import { HiOutlineUser } from "react-icons/hi";
import { RxDashboard } from "react-icons/rx";
import { LuMessageSquareMore, LuLibraryBig, LuSettings } from "react-icons/lu";
import { RiPlayListFill } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";

const MENU_ITEMS = [
  { to: "/user", icon: <HiOutlineUser />, label: "Profile" },
  { to: "/", icon: <RxDashboard />, label: "Dashboard" },
  { to: "/search", icon: <FaRegCompass />, label: "Explore" },
  { to: "/chat", icon: <LuMessageSquareMore />, label: "Live Chat" },
  { to: "/library", icon: <LuLibraryBig />, label: "Library" },
  { to: "/settings", icon: <LuSettings />, label: "Settings" },
];

const PLAYLISTS = [
  { to: "/liked", title: "Liked Songs", sub: "Auto Playlist" },
  { to: "/cool-chill", title: "Cool Chill", sub: "Axxon Jaxxon" },
  { to: "/old-school", title: "Old School", sub: "Axxon Jaxxon" },
  { to: "/rap", title: "Rap", sub: "Axxon Jaxxon" },
];

function LeftNav() {
  return (
    <aside className="left-nav">
      <h3>Menu</h3>
      <nav>
        {MENU_ITEMS.map(({ to, icon, label }) => (
          <NavLink key={to} to={to} end className="nav-item">
            {icon}
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>

      <h3>Playlists</h3>
      <nav>
        <Link to="/playlists" className="nav-item highlight">
          <RiPlayListFill />
          <span>Playlists</span>
        </Link>

        {PLAYLISTS.map(({ to, title, sub }) => (
          <Link key={to} to={to} className="nav-item">
            <span>
              {title}
              <small>{sub}</small>
            </span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}

export default LeftNav;
