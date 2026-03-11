import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelopeOpenText } from "react-icons/fa";

const BlocContactcard = () => {
    return (
        <div className="col md-3 bg-primary rounded-2" style={{maxHeight: "60vh"}}>

            <div className="d-flex flex-column justify-content-between gap-5 p-4">

                <div>
                    <h3 className="text-warning fw-bold d-inline-block border-bottom border-warning border-4 pb-2 mb-5">
                        Votre traiteur en toute circonstance
                    </h3>

                    <h3 className="text-warning" style={{ fontSize: "1.5em" }}>
                        Plus votre demande sera détaillée et précise,
                        mieux nous pourrons vous répondre.
                    </h3>

                    <p className="text-warning mt-5">
                        Vous avez des questions :
                        <ul>
                            <li>"Quels sont vos tarifs ?"</li>
                            <li>"Êtes-vous disponible le 15 août ?"</li>
                            <li>"Faites-vous des livraisons ?"</li>
                            <li>Plus encore ?</li>
                        </ul>
                    </p>
                </div>

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
            
        </div>
    );
};
export default BlocContactcard;