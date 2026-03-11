import EventCard from "../components/EventCard";
import Party from "../assets/images/party.jpg";

import BlocEvenements from "../components/BlocEvenements";
import Fete1 from "../assets/images/fete1.jpg";
import Fete2 from "../assets/images/fete2.jpg";
import Fete3 from "../assets/images/fete3.jpg";

import CarouselbrideCard from "../components/CarouselbrideCard";
import Img1 from "../assets/images/img1.jpg";
import Img2 from "../assets/images/img2.jpg";
import Img3 from "../assets/images/img3.jpg";
import Img4 from "../assets/images/img4.jpg";
import Img5 from "../assets/images/img5.jpg";
import Img6 from "../assets/images/img6.jpg";

const Fete = () => {
    const eventcard = [
        {
            title:"Envie d’apporter une touche originale à votre évènement ?",
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
            image:Party,
            subtitle:"fête"
        }
    ];

    const blocevents = [
        {
            title1:"Formule apéritive 4 éléments",
            description1:`La formule 4 éléments est parfaite pour vos cocktails légers entre 2 réunions, ou
            pour un bref échange avec vos convives. Elle convient pour les évènements ne dépassant pas 1 heure`,
            image1:Fete1,
            phototitle1:"fête",
            title2:"Formule dînatoire 12 éléments",
            description2:`Cette formule sert ici à remplacer le traditionnel repas assis 
            et présente comme avantage de regrouper l’entrée, le plat et le dessert dans une seule et même formule. `,
            image2:Fete2,
            phototitle2:"fête",
            title3:"Formules apéritives 8 éléments",
            description3:`La formule 8 éléments est parfaite pour vos cocktails après réunion 
            ou conférence, ou vous souhaitez prendre le temps d’échanger avec vos convives. 
            Elle convient donc pour les évènements d’une à deux heures.`,
            image3:Fete3,
            phototitle3:"fête",
        }
    ];

    const photos = [ Img1, Img2, Img3, Img4, Img5, Img6 ];
    
    return (
        <main>
            <header className="hero-image" style={{ zIndex: '1'}}>
                <div className="d-flex flex-column align-items-center text-center" style={{ zIndex: '999'}}>
                    <h1 className="text-warning fw-bold text-center" style={{ fontSize : '3.5em'}}>
                        Vos évènements privés
                    </h1>

                    <p className="text-light w-50" style={{ fontSize : '1.5em'}}>
                        Qu’il soit apéritif ou dinatoire, nous vous proposons un large choix de formules, 
                        susceptibles de convenir à chaque évènement.
                    </p>

                    <a href="#bloc-soiree" className="btn btn-warning fw-semibold text-light px-4 py-2 mt-3 survol-btn">
                        Nos formules évènements privés
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

            <section id="bloc-soiree" style={{ backgroundColor : '#ac9362'}}>
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
export default Fete;