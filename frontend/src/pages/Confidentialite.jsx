import { Helmet } from 'react-helmet';

const Confidentialite = () => {
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
                        Politique de confidentialité
                    </h1>
                </div>
            </header>
            
            <main>
                <section className="container mt-5 mb-5 bg-light p-5 rounded">
                    <div className="row g-3 text-center">
                        <div className="row g-2 d-flex flex-column align-items-center text-start">
                            <h2>Données collectées</h2>
                            <div>
                                <p className="mb-0">
                                    Lorsque vous utilisez le formulaire de contact ou de commande, 
                                    nous pouvons collecter les données suivantes :
                                </p>
                                <ul>
                                    <li>Nom et prénom</li>
                                    <li>Adresse email</li>
                                    <li>Numéro de téléphone</li>
                                    <li>Informations liées à votre événement</li>
                                </ul> 
                            </div>
                            <p>
                                Ces données sont utilisées uniquement pour répondre à votre demande.
                            </p>
                        </div>
                        
                        <div className="row g-2 d-flex flex-column align-items-center text-start">
                            <h2>Utilisation des données</h2>
                            <div>
                                <p className="mb-0">
                                    Les données collectées servent à :
                                </p>
                                <ul>
                                    <li>répondre aux demandes de contact</li>
                                    <li>établir un devis</li>
                                    <li>organiser les prestations traiteur</li>
                                </ul> 
                            </div>
                        </div>

                        <div className="row g-2 d-flex flex-column align-items-center text-start">
                            <h2>Durée de conservation</h2>
                            <div>
                                <p className="mb-0">
                                    Les données sont conservées pendant une durée maximale de 3 ans après le dernier contact.
                                </p>
                            </div>
                        </div>

                        <div className="row g-2 d-flex flex-column align-items-center text-start">
                            <h2>Vos droits</h2>
                            <div>
                                <p className="mb-0">
                                    Conformément au RGPD, vous disposez des droits suivants :
                                </p>
                                <ul>
                                    <li>droit d’accès</li>
                                    <li>droit de rectification</li>
                                    <li>droit de suppression</li>
                                </ul> 
                            </div>
                            <p>
                                Pour exercer ces droits, contactez :<br/>
                                [adresse email]
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};
export default Confidentialite;