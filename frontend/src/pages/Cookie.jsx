import { Helmet } from 'react-helmet';

const Cookie = () => {
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
                        Politique des cookies
                    </h1>
                </div>
            </header>
            
            <main>
                <section className="container mt-5 mb-5 bg-light p-5 rounded">
                    <div className="row g-3 text-center">
                        <div className="row g-2 d-flex flex-column align-items-center text-start">
                            <h2>Qu’est-ce qu’un cookie ?</h2>
                            <div>
                                <p className="mb-0">
                                    Un cookie est un petit fichier enregistré sur votre appareil 
                                    lorsque vous naviguez sur un site internet.
                                </p>
                            </div>
                        </div>
                        
                        <div className="row g-2 d-flex flex-column align-items-center text-start">
                            <h2>Cookies utilisés</h2>
                            <div>
                                <p className="mb-0">
                                    Ce site peut utiliser des cookies pour :
                                </p>
                                <ul>
                                    <li>améliorer l’expérience utilisateur</li>
                                    <li>mesurer l’audience du site</li>
                                </ul> 
                            </div>
                        </div>

                        <div className="row g-2 d-flex flex-column align-items-center text-start">
                            <h2>Gestion des cookies</h2>
                            <div>
                                <p className="mb-0">
                                    Vous pouvez configurer votre navigateur pour refuser ou supprimer les cookies.
                                </p>
                                <p>
                                    Pour plus d’informations, consultez les paramètres de votre navigateur.
                                </p>
                            </div>
                        </div>

                    </div>
                </section>
            </main>
        </>
    );
};
export default Cookie;