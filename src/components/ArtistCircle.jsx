import { Link } from "react-router-dom";

function ArtistCircle({ id, image, name }) {
  return (
    <Link to={`/artist/${id}`} className="artist-circle">
      {image ? (
        <img src={image} alt={name} />
      ) : (
        <div className="artist-circle-placeholder" />
      )}
      {name && <p className="artist-circle-name">{name}</p>}
    </Link>
  );
}

export default ArtistCircle;
