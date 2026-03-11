import EventCard from "../components/EventCard";
import Traiteur from "../assets/images/traiteur.jpg";

import BlocEvenements from "../components/BlocEvenements";
import Mariage1 from "../assets/images/mariage1.jpg";
import Mariage2 from "../assets/images/mariage2.jpg";
import Mariage3 from "../assets/images/mariage3.jpg";

import CarouselbrideCard from "../components/CarouselbrideCard";
import Img1 from "../assets/images/img1.jpg";
import Img2 from "../assets/images/img2.jpg";
import Img3 from "../assets/images/img3.jpg";
import Img4 from "../assets/images/img4.jpg";
import Img5 from "../assets/images/img5.jpg";
import Img6 from "../assets/images/img6.jpg";

const Mariage = () => {
    const eventcard = [
        {
            title:"Notre savoir faire à votre service",
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
            image:Traiteur,
            subtitle:"traiteur"
        }
    ];

    const blocevents = [
        {
            title1:"Cocktail Dinatoire",
            description1:`Vous avez envie de rompre avec le traditionnel 
            dîner assis de mariage ? Il vous est possible de vivre des
            moments exceptionnels via ce type de formule qui peut regrouper 
            l’apéritif, l’entrée , le plat et même le dessert.`,
            image1:Mariage1,
            phototitle1:"mariage",
            title2:"Service à l’assiette et buffet",
            description2:`Vous offre le compromis entre un buffet et service à table. 
            L’entrée et le dessert sont servis à l’assiette. 
            En revanche, le plat principal est servi en buffet.
            Cela permet un moment de convivialité et vous permet également de proposer 2 choix de plats en buffet.`,
            image2:Mariage2,
            phototitle2:"mariage",
            title3:"Service à table",
            description3:`C’est le service le plus traditionnel, qui vous offre l’assurance 
            d’avoir des assiettes parfaitement dressées. Nous vous proposons des formules 
            incluant un apéritif debout avec mise en bouche et un service à l’assiette pour l’entrée, le plat et le dessert.`,
            image3:Mariage3,
            phototitle3:"mariage",
        }
    ];

    const photos = [ Img1, Img2, Img3, Img4, Img5, Img6 ];
    
    return (
        <main>
            <header className="hero-image" style={{ zIndex: '1'}}>
                <div className="d-flex flex-column align-items-center text-center" style={{ zIndex: '999'}}>
                    <h1 className="text-warning fw-bold text-center" style={{ fontSize : '3.5em'}}>
                        Mariage en Guadeloupe
                    </h1>

                    <p className="text-light w-50" style={{ fontSize : '1.5em'}}>
                        Vous cherchez un traiteur pour votre mariage ?  Nous vous accompagnons pour des évènements inoubliables.
                    </p>

                    <a href="#bloc-evenements" className="btn btn-warning text-light px-4 py-2 mt-3 survol-btn">
                        Nos formules mariages
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

            <section id="bloc-evenements" style={{ backgroundColor : '#ac9362'}}>
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
export default Mariage;