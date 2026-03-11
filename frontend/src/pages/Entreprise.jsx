import EventCard from "../components/EventCard";
import Business from "../assets/images/business.jpg";

import BlocEvenements from "../components/BlocEvenements";
import Firm1 from "../assets/images/firm1.jpg";
import Firm2 from "../assets/images/firm2.jpg";
import Firm3 from "../assets/images/firm3.jpg";

import CarouselbrideCard from "../components/CarouselbrideCard";
import Img1 from "../assets/images/img1.jpg";
import Img2 from "../assets/images/img2.jpg";
import Img3 from "../assets/images/img3.jpg";
import Img4 from "../assets/images/img4.jpg";
import Img5 from "../assets/images/img5.jpg";
import Img6 from "../assets/images/img6.jpg";

const Entreprise = () => {
    const eventcard = [
        {
            title:"Une opportunité pour créer du lien",
            para1:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tristique 
            ligula porta justo pretium, ut iaculis ligula varius.
            Nunc vulputate hendrerit accumsan. Nulla commodo nibh in justo cursus ullamcorper. 
            Curabitur placerat feugiat nisi, at bibendum tellus pellentesque vitae.
            Nam in rutrum lacus. Sed vel purus ullamcorper, faucibus dui vel, consequat est. 
            Nulla maximus facilisis risus a tempor.
            In maximus porta mauris vitae interdum.`,
            para2:`Maecenas nec luctus odio. Proin at lectus in nisi fermentum eleifend. 
            Pellentesque tincidunt diam tempor, feugiat quam vel, consectetur risus. 
            Praesent eget fringilla quam, in fermentum nibh. Aliquam erat volutpat. 
            In vel est interdum, pellentesque arcu sed, rhoncus mauris. Fusce sed risus ante. 
            Cras sodales nulla sed est posuere vulputate.`,
            image:Business,
            subtitle:"travailleur"
        }
    ];

    const blocevents = [
        {
            title1:"Plats en barquette",
            description1:` Vous souhaitez déjeuner rapidement avec vos collaborateurs ?  
            Qu’il s’agisse de plats grillade, plats en sauce ou même de formule entrée-plat-dessert. 
            Nous vous proposons un large choix qui saura ravir vos papilles. `,
            image1:Firm1,
            phototitle1:"dejeuner",
            title2:"Petits déjeuners",
            description2:`Vous souhaitez accueillir vos collaborateur de la meilleure manière ? 
            Nous vous proposons un large choix de petits déjeuners…  Mini viennoiseries,  
            mini sandwiches salés, didiko, chocolat chaud… Les possibilités sont variées… `,
            image2:Firm2,
            phototitle2:"dejeuner",
            title3:"Repas avec service",
            description3:`Vous souhaitez profiter d’un repas convivial avec vos collègues, 
            clients? Nous vous offrons la possibilité d’organiser un repas dans le lieu de votre choix… 
            avec le service qui vous semblera le plus approprié… à l’assiette, en buffet, tout est imaginable. `,
            image3:Firm3,
            phototitle3:"dejeuner",
        }
    ];

    const photos = [ Img1, Img2, Img3, Img4, Img5, Img6 ];

    return (
        <main>
            <header className="hero-image" style={{ zIndex: '1'}}>
                <div className="d-flex flex-column align-items-center text-center" style={{ zIndex: '999'}}>
                    <h1 className="text-warning fw-bold text-center" style={{ fontSize : '3.5em'}}>
                        Vos évènements d'entreprise
                    </h1>

                    <p className="text-light w-50" style={{ fontSize : '1.5em'}}>
                        Vous cherchez un traiteur pour un repas d’entreprise en Guadeloupe ?  
                        Nous vous accompagnons pour tous vos évènements.
                    </p>

                    <a href="#bloc-evenements" className="btn btn-warning text-light px-4 py-2 mt-3 survol-btn">
                        Nos formules évènements d'entreprise
                    </a>
                </div>
            </header>

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

            <section id="bloc-entreprise" style={{ backgroundColor : '#ac9362'}}>
                <div>
                    {blocevents.map((item, idx) => (
                    <div key={idx}>
                        <BlocEvenements
                        title1={item.title1}
                        title2={item.title2}
                        title3={item.title3}
                        image1={item.image1}
                        image2={item.image2}
                        image3={item.image3}
                        phototitle1={item.phototitle1}
                        phototitle2={item.phototitle2}
                        phototitle3={item.phototitle3}
                        description1={item.description1}
                        description2={item.description2}
                        description3={item.description3}
                        />
                    </div>
                    ))}
                </div>
            </section>

            <section className="d-flex flex-column align-items-center text-center p-5">
                <h2 className="text-warning fw-bold mb-4" style={{fontStyle : '1.5em'}}>Voici quelques photos de ces instants</h2>

                <CarouselbrideCard images={photos} />
            </section>
        </main>
    );
};
export default Entreprise;