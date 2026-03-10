import { NavLink } from "react-router-dom";
import {
    FaFacebookF,
    FaInstagram,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelopeOpenText
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

import Logo from "../assets/icons/logo.jpg";

const Footer = () => {
    return (
    <footer className="text-warning p-4">
        <div className="container">

            <div className="row gy-4">

                {/* BLOC 1 LOGO */}

                <div className="col-12 col-md-6 col-lg-3 d-flex flex-column align-items-center text-start">

                    <img
                    src={Logo}
                    alt="logo traiteur"
                    className="mb-3"
                    style={{ border: "3px solid #ffc107", width: "170px" }}
                    />

                    <p className="small w-75 text-center">
                        Traiteur spécialisé dans les événements privés et professionnels.
                    </p>

                </div>

                {/* BLOC 2 PLAN DU SITE */}

                <div className="col-12 col-md-6 col-lg-3">

                    <h5 className="mb-5">Plan du site</h5>

                    {[
                        { to: "/", label: "Accueil" },
                        { to: "/evenement", label: "Evènements" },
                        { to: "/menus", label: "Menus" },
                        { to: "/a-propos", label: "A propos" },
                        { to: "/contact", label: "Contact" },
                        { to: "/commander", label: "Commander" }
                    ].map((link) => (
                        <div key={link.to}>
                            <NavLink
                            to={link.to}
                            className="text-decoration-none text-warning survol-link"
                            >
                                {link.label}
                            </NavLink>
                        </div>
                    ))}

                </div>

                {/* BLOC 3 CONTACT */}

                <div className="col-12 col-md-6 col-lg-3">

                    <h5 className="mb-5">Contact</h5>

                    <div className="d-flex flex-column align-items-start gap-3 mb-5">

                        <a
                        href="https://www.google.com/maps"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="d-flex align-items-center text-decoration-none"
                        >
                            <FaMapMarkerAlt style={{ fontSize: "20px", color: "#ffc107" }} />
                            <span className="text-warning mx-2 survol-link">
                                2 rue de Nozières - Pointe-à-Pitre
                            </span>
                        </a>

                        <a
                        href="tel:+590690728278"
                        className="d-flex align-items-center text-decoration-none"
                        >
                            <FaPhoneAlt style={{ fontSize: "20px", color: "#ffc107" }} />
                            <span className="text-warning mx-2 survol-link">
                                0690 72 82 78
                            </span>
                        </a>

                        <a
                        href="mailto:dimitrifoule@gmail.com"
                        className="d-flex align-items-center text-decoration-none"
                        >
                            <FaEnvelopeOpenText style={{ fontSize: "20px", color: "#ffc107" }} />
                            <span className="text-warning mx-2 survol-link">
                                dimitrifoule@gmail.com
                            </span>
                        </a>

                    </div>

                </div>

                {/* BLOC 4 RESEAUX */}

                <div className="col-12 col-md-6 col-lg-3">

                    <h5 className="mb-4">Suivez-nous</h5>

                    <div className="d-flex gap-3 survol-social">

                        <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontSize: "32px", color: "#ffc107" }}
                        >
                            <FaFacebookF />
                        </a>

                        <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontSize: "32px", color: "#ffc107" }}
                        >
                            <FaInstagram />
                        </a>

                        <a
                        href="https://x.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontSize: "32px", color: "#ffc107" }}
                        >
                            <FaSquareXTwitter />
                        </a>

                    </div>

                </div>

            </div>

            {/* Ligne séparation */}

            <hr className="border-warning opacity-100" />

            {/* Liens légaux */}

            <div className="d-flex justify-content-center gap-5 flex-wrap mb-2">

                <NavLink
                to="/mentions-legales"
                className="text-decoration-none text-warning survol-link"
                >
                    Mentions légales
                </NavLink>

                <NavLink
                to="/confidentialite"
                className="text-decoration-none text-warning survol-link"
                >
                    Politique de confidentialité
                </NavLink>

                <NavLink
                to="/cookie"
                className="text-decoration-none text-warning survol-link"
                >
                    Politique des cookies
                </NavLink>

            </div>

            {/* Copyright */}

            <div className="text-center small mt-5">
                © {new Date().getFullYear()} Traiteur 971 — Tous droits réservés
            </div>

        </div>
    </footer>
    );
};

export default Footer;