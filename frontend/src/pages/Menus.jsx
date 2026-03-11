import { Helmet } from "react-helmet";

import { Link } from "react-router-dom";

import EventCard from "../components/EventCard";
import Cuistot from "../assets/images/cuistot.jpg";

import PrestationCard from "../components/PrestationCard";
import Private from "../assets/images/private.jpg";
import Salade from "../assets/images/salade.jpg";
import Asperge from "../assets/images/asperge.jpg";

const Menus = () => {
    const eventcard = [
        {
            title:"Notre cuisine",
            para1:`Nous élaborons des menus avec des produits frais
            et adaptés à votre évènement.`,
            para2:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tristique 
            ligula porta justo pretium, ut iaculis ligula varius.
            Nunc vulputate hendrerit accumsan. Nulla commodo nibh in justo cursus ullamcorper. 
            Curabitur placerat feugiat nisi, at bibendum tellus pellentesque vitae.
            Nam in rutrum lacus. Sed vel purus ullamcorper, faucibus dui vel, consequat est. 
            Nulla maximus facilisis risus a tempor`,
            image:Cuistot,
            subtitle:"cuisinier"
        }
    ];

    const formules = [
        {
            image: Private,
            title: "Cocktail dinatoire",
            description: "Bouchées raffinées et service convivial"
        },
        {
            image: Salade,
            title: "Buffet",
            description: "Variété de plats chauds et froids"
        },
        {
            image: Asperge,
            title: "Repas à l'assiette",
            description: "Service gastronomique pour vos événements"
        }
    ]; 

    return (
        <>
            <Helmet>
                <title>traiteur-karukéra</title>
                {/*La description aux moteurs de recherche*/}
                <meta name="description" 
                content="Parcourez notre carte traiteur : buffets froids, dîners assis et cocktails
                dinatoires. Le meilleur du terroir de Guadeloupe dans votre assiette." 
                />
            </Helmet>

            <header className="hero-image" style={{ zIndex: '1'}}>
                <div className="d-flex flex-column align-items-center text-center" style={{ zIndex: '999'}}>
                    <h1 className="text-warning fw-bold text-center" style={{ fontSize : '3.5em'}}>
                        Nos formules de menus
                    </h1>

                    <p className="text-light w-50" style={{ fontSize : '1.5em'}}>
                       Découvrez nos formules adaptées à tous vos types évènements
                    </p>

                    <a href="#bloc-formules" className="btn btn-warning fw-semibold text-light px-4 py-2 mt-3 survol-btn">
                        Nos formules évènements d'entreprise
                    </a>
                </div>
            </header>

            <main>
                <section className="p-5">
                    <div>
                        {eventcard.map((item, idx) => (
                        <div key={idx}>
                            <EventCard
                            title={item.title}
                            para1={item.para1}
                            para2={item.para2}
                            image={item.image}
                            subtitle={item.subtitle}
                            />
                        </div>
                        ))}
                    </div>
                </section>

                <section className="bg-light p-5">
                    <PrestationCard
                    title="Découvrez nos différentes formules de menus"
                    cards={formules}
                    />
                </section>

                <section className="container p-5">

                    <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-5">

                        <div className="text-center mx-auto" style={{maxWidth:"450px"}}>
                            <h3 className="mb-3">Des questions sur nos formules?</h3>
                            <Link
                            to="/contact"
                            className=
                            "btn btn-warning w-100 fw-semibold text-light px-5 py-2 survol-btn"
                            >
                                Poser vos questions
                            </Link>
                        </div>

                        <div className="text-center mx-auto" style={{maxWidth:"450px"}}>

                        <h3 className="mb-3">Vous avez un projet d'évenement?</h3>

                        <Link
                        to="/commander"
                        className=
                        "btn btn-warning w-100 fw-semibold text-light py-2 survol-btn"
                        >
                            Demander un devis
                        </Link>

                    </div>

                    </div>

                </section>
            </main>
        </>
    );
};
export default Menus;