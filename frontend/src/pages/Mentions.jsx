import { Helmet } from 'react-helmet';

const Mentions = () => {
    return (
        <>
            <Helmet>
                <title>traiteur-karukéra</title>
                {/*La description aux moteurs de recherche*/}
                <meta name="description" content="Votre traiteur locale pour vos évènements." />
                {/*Empêcher l'indexation de la page*/}
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>

            <main>
                <header className="hero-image" style={{ zIndex: '1'}}>
                    <div className="d-flex flex-column align-items-center text-center" style={{ zIndex: '999'}}>
                        <h1 className="text-warning fw-bold text-center" style={{ fontSize : '3.5em'}}>
                            Mentions légales
                        </h1>
                    </div>
                </header>

                <section className="container mt-5 mb-5 bg-light p-5 rounded">
                    <div className="row g-3 text-center">
                        <div className="row g-2 d-flex flex-column align-items-center text-start">
                            <h2>Editeur du site</h2>
                            <div>
                                <p className="mb-0">
                                    Nom de l'entreprise : [Nom de ton entreprise]
                                </p>
                                <p className="mb-0">
                                    Forme juridique : [Auto-entrepreneur / SARL / etc.]
                                </p> 
                                <p className="mb-0">
                                    Siège social : [Adresse de l'entreprise]
                                </p> 
                                <p className="mb-0">
                                    Téléphone : [Numéro de téléphone]
                                </p>
                                <p className="mb-0">
                                    Email : [Adresse email]
                                </p>  
                            </div>
                            <p>
                                Directeur de la publication : [Nom du responsable]
                            </p>
                        </div>
                        
                        <div className="row g-2 d-flex flex-column align-items-center text-start">
                            <h2>Hébergement</h2>
                            <div>
                                <p className="mb-0">
                                    Le site est hébergé par :
                                </p>
                                <p className="mb-0">
                                    Nom de l’hébergeur : [Nom de l’hébergeur]
                                </p> 
                                <p className="mb-0">
                                    [Adresse de l’hébergeur]
                                </p> 
                            </div>
                        </div>

                        <div className="row g-2 d-flex flex-column align-items-center text-start">
                            <h2>Propriété intellectuelle</h2>
                            <div>
                                <p className="mb-0">
                                    L’ensemble des contenus présents sur ce site (textes, images, logos, éléments graphiques) 
                                    est protégé par le droit de la propriété intellectuelle.<br/>
                                    Toute reproduction, modification ou distribution sans autorisation est interdite.
                                </p>
                            </div>
                        </div>

                        <div className="row g-2 d-flex flex-column align-items-center text-start">
                            <h2>Responsabilité</h2>
                            <div>
                                <p className="mb-0">
                                    L’éditeur du site s’efforce de fournir des informations exactes et mises à jour.<br/>
                                    Toutefois, il ne saurait être tenu responsable des erreurs ou omissions présentes sur le site.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};
export default Mentions;