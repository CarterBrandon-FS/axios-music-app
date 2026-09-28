import jheneHero from "../assets/jheneaiko-hero.png";

function HeroBanner({ subtitle, title, trackInfo }) {
  return (
    <section className="hero-banner">
      <div className="hero-banner-content">
        <p className="hero-banner-subtitle">{subtitle}</p>
        <h2 className="hero-banner-title">{title}</h2>
        <p className="hero-banner-tracks">{trackInfo}</p>
      </div>

      <div className="hero-banner-art">
        <img src={jheneHero} alt={title} />
      </div>
    </section>
  );
}

export default HeroBanner;
