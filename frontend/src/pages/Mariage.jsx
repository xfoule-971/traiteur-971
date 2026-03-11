import EventCard from "../components/EventCard";
import Traiteur from "../assets/images/traiteur.jpg";

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

            <section className="mb-5">
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
        </main>
    );
};
export default Mariage;