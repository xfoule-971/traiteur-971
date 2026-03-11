import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import Mistake from "../assets/images/mistake.jpg";

const Erreur = () => {
    return (
        <>
            <Helmet>
                <title>traiteur-karukéra</title>
                {/*La description aux moteurs de recherche*/}
                <meta name="description" content="Votre traiteur locale pour vos évènements." />
                {/*Empêcher l'indexation de la page*/}
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>

            <header className="hero-image" style={{ zIndex: '1'}}>
                <div className="d-flex flex-column align-items-center text-center" style={{ zIndex: '999'}}>
                    <h1 className="text-warning fw-bold text-center" style={{ fontSize : '3.5em'}}>
                        404
                    </h1>
                </div>
            </header>
            
            <main>
                <section className="container p-5 d-flex flex-column align-items-center justify-content-center">
                                    
                    {/* Image responsive */}
                    <img
                        src={Mistake}
                        alt="Erreur"
                        className="img-fluid mb-4"
                        style={{ maxWidth: "100%", width: "50%", height: "50%" }}
                    />

                    {/* Texte */}
                    <h2 className="my-3">La page que vous avez demandée est introuvable</h2>
                    <h3>Ou la page a peut-être été supprimée</h3>

                    {/* Bouton */}
                    <Link to="/">
                        <button type="button" className="btn btn-warning fw-semibold text-light mt-3 survol-btn">
                            Retour à la page d'accueil
                        </button>
                    </Link>
                </section>
            </main>
        </>
    );
};
export default Erreur;