import { Link } from "react-router-dom";

import BlocContactcard from "../components/BlocContactcard";
import ContactForm from "../components/ContactForm";

const Contact = () => {
    return (
        <main>
            <header className="hero-image" style={{ zIndex: '1'}}>
                <div className="d-flex flex-column align-items-center text-center" style={{ zIndex: '999'}}>
                    <h1 className="text-warning fw-bold text-center" style={{ fontSize : '3.5em'}}>
                        Contact
                    </h1>

                    <h2 className="text-light" style={{ fontSize : '1.5em'}}>
                       Nous répondrons à toutes vos questions
                    </h2>
                </div>
            </header>

            <section className="container p-5">
                <div className="row gap-2">
                    <BlocContactcard />

                    <ContactForm />
                </div>
            </section>

            <section className="p-5 bg-light">
                <div className="text-center mx-auto" style={{maxWidth:"450px"}}>

                    <h3 className="mb-3">Vous avez un projet d'évenement?</h3>

                    <Link
                        to="/commander"
                        className="btn btn-warning w-100 fw-semibold text-light py-2 survol-btn"
                    >
                        Demander un devis
                    </Link>

                </div>
            </section>
        </main>
    );
};
export default Contact;