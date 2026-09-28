function QuickPlayCard({ artwork, title, subtitle }) {
  return (
    <div className="quick-play-card">
      {artwork ? (
        <img src={artwork} alt={title} className="quick-play-art" />
      ) : (
        <div className="quick-play-art quick-play-placeholder" />
      )}

      <div className="quick-play-info">
        <h4>{title}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}

export default QuickPlayCard;
