function SpotlightArtist({
  artistName,
  mainArtwork,
  smallArtwork1,
  smallArtwork2,
  wideArtwork,
}) {
  return (
    <aside className="spotlight">
      <h2 className="spotlight-title">Spotlight Artist</h2>

      <div className="spotlight-main">
        {mainArtwork ? (
          <img src={mainArtwork} alt={artistName} />
        ) : (
          <div className="spotlight-placeholder" />
        )}
      </div>

      <div className="spotlight-row">
        <div className="spotlight-small">
          {smallArtwork1 ? (
            <img src={smallArtwork1} alt="" />
          ) : (
            <div className="spotlight-placeholder" />
          )}
        </div>
        <div className="spotlight-small">
          {smallArtwork2 ? (
            <img src={smallArtwork2} alt="" />
          ) : (
            <div className="spotlight-placeholder" />
          )}
        </div>
      </div>

      <div className="spotlight-wide">
        {wideArtwork ? (
          <img src={wideArtwork} alt="" />
        ) : (
          <div className="spotlight-placeholder" />
        )}
      </div>
    </aside>
  );
}

export default SpotlightArtist;
