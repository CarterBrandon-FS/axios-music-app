import { VscVerifiedFilled } from "react-icons/vsc";

function ArtistPanel({
  name,
  trackTitle,
  albumTitle,
  image,
  bioImage,
  followers,
  isFollowing,
}) {
  return (
    <aside className="artist-panel">
      <div className="artist-panel-header">
        <h2>{name}</h2>
        <p className="artist-panel-track">{trackTitle}</p>
        <p className="artist-panel-album">{albumTitle}</p>
      </div>

      <div className="artist-panel-photo">
        {image ? (
          <img src={image} alt={name} />
        ) : (
          <div className="artist-panel-placeholder" />
        )}
      </div>

      <div className="artist-panel-about">
        <h3>About The Artist</h3>
        <div className="artist-panel-bio">
          {bioImage ? (
            <img src={bioImage} alt="" />
          ) : (
            <div className="artist-panel-bio-placeholder" />
          )}
        </div>
      </div>

      <div className="artist-panel-footer">
        <div className="artist-panel-name">
          <span>
            {name} <VscVerifiedFilled className="verified-icon" />
          </span>
          <small>{followers} Monthly Listeners</small>
        </div>
        <button className="follow-btn">
          {isFollowing ? "Following" : "Follow"}
        </button>
      </div>
    </aside>
  );
}

export default ArtistPanel;
