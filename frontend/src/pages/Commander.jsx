import { Helmet } from "react-helmet";

import DevisForm from "../components/DevisForm";

const Commander = () => {
    return (
        <>
            <Helmet>
                <title>traiteur-karukéra</title>
                {/*La description aux moteurs de recherche*/}
                <meta name="description" 
                content="Demandez votre devis traiteur en Guadeloupe dès maintenant : Formulaire
                en ligne, téléphone ou email : nous sommes à votre écoute." 
                />
            </Helmet>

            <header className="hero-image" style={{ zIndex: '1'}}>
                <div className="d-flex flex-column align-items-center text-center" style={{ zIndex: '999'}}>
                    <h1 className="text-warning fw-bold text-center" style={{ fontSize : '3.5em'}}>
                        Commander
                    </h1>

                    <h2 className="text-light" style={{ fontSize : '1.5em'}}>
                       Organisez votre évènement
                    </h2>
                </div>
            </header>

            <main>
                <section className="container p-5">
                    <DevisForm />
                </section>
            </main>
           
        </>
    );
};
export default Commander;