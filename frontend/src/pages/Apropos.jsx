import { Helmet } from "react-helmet";

import EquipeCard from "../components/EquipeCard";
import Equipe1 from "../assets/images/equipe1.jpg";
import Equipe2 from "../assets/images/equipe2.jpg";

const Apropos = () => {
    const equipecard = [
        {
            image1: Equipe1, 
            image2: Equipe2,
            image3: Equipe2,
            image4: Equipe1,
            description1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            In sagittis risus id nisi congue, sed iaculis odio scelerisque. 
            Ut finibus commodo libero, eu sagittis enim luctus in. Ut pretium libero vitae tortor interdum, 
            ut molestie diam gravida. Nullam imperdiet tellus tincidunt, pharetra nisi ut, suscipit neque. 
            Aliquam sit amet elit eget justo pharetra imperdiet. Morbi lectus orci, pulvinar vel rutrum eu.`,
            description2: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            In sagittis risus id nisi congue, sed iaculis odio scelerisque. 
            Ut finibus commodo libero, eu sagittis enim luctus in. Ut pretium libero vitae tortor interdum, 
            ut molestie diam gravida. Nullam imperdiet tellus tincidunt, pharetra nisi ut, suscipit neque. 
            Aliquam sit amet elit eget justo pharetra imperdiet. Morbi lectus orci, pulvinar vel rutrum eu.`,            
        }
    ]
    return (
        <>
            <Helmet>
                <title>traiteur-karukéra</title>
                {/*La description aux moteurs de recherche*/}
                <meta name="description" 
                content="Une équipe de professionnels dévoués pour votre traiteur en Guadeloupe.
                Engagement, produits frais et sourires pour toutes vos réceptions." 
                />
            </Helmet>

            <header className="hero-image" style={{ zIndex: '1'}}>
                <div className="d-flex flex-column align-items-center text-center" style={{ zIndex: '999'}}>
                    <h1 className="text-warning fw-bold text-center" style={{ fontSize : '3.5em'}}>
                        A propos de notre équipe
                    </h1>

                    <h2 className="text-light w-75" style={{ fontSize : '1.5em'}}>
                       Des fumets fabuleux pour tous vos évènemennts : c’est notre mission
                    </h2>
                </div>
            </header>

            <main>
                <section className="p-5">
                    <div>
                        {equipecard.map((item, idx) => (
                        <div key={idx}>
                            <EquipeCard
                            image1={item.image1}
                            image2={item.image2}
                            image3={item.image3}
                            image4={item.image4}
                            description1={item.description1}
                            description2={item.description2}
                            />
                        </div>
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
};
export default Apropos;