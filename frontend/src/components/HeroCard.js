import videoTraiteur from "../assets/videos/traiteur.mp4";

const HeroCard = () => {
  return (
    <section className="hero">

        {/* VIDEO BACKGROUND */}
        <video
        className="hero__video"
        autoPlay
        loop
        muted
        playsInline
        >
        <source src={videoTraiteur} type="video/mp4" />
        </video>

        {/* CONTENU */}
        <div className="position-relative" style={{ zIndex: '999'}}>

            <h1 className="text-warning fw-bold" style={{ fontSize : '3.5em'}}>
                Traiteur d'exception
            </h1>

            <p className="text-light" style={{ fontSize : '1.5em'}}>
                Événements privés et professionnels
            </p>

            <a href="/commande" className="btn btn-warning mt-3 fw-semibold survol-btn">
                Commander
            </a>

        </div>

    </section>
  );
};

export default HeroCard;