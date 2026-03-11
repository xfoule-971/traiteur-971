import AvantCard from "../components/AvantCard";
import HeroCard from "../components/HeroCard";
import PrestationCard from "../components/PrestationCard";
import ReviewCard from "../components/ReviewCard";

import Repas from "../assets/images/bouillabaisse.jpg"
import Bride from "../assets/images/bride.jpg";
import Entreprise from "../assets/images/entreprise.jpg";
import Private from "../assets/images/private.jpg";

const Accueil = () => {
    const avantcard = [
        {
            image: Repas,
            alt: "Bouillabaisse",
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Curabitur imperdiet nisi sed justo finibus lobortis. Donec semper metus eros, 
            eu pretium nulla scelerisque ac. Quisque semper congue dolor ut iaculis. 
            Etiam lobortis diam ut tincidunt auctor. Praesent tristique sem nec pretium feugiat. 
            Integer consequat pellentesque diam sit amet malesuada. Fusce at ultricies mi. 
            Praesent posuere, erat consequat accumsan malesuada, est felis scelerisque sapien, 
            vitae scelerisque tortor turpis vel nulla. Sed cursus et nisi vel dignissim. 
            Nullam lobortis bibendum nisl, et molestie nibh dignissim et. Maecenas sollicitudin, 
            dolor sit amet commodo varius, augue felis dictum eros, vel maximus mi risus a quam. Integer ac tincidunt dui.`
        }
    ];

    const prestations = [
        {
            image: Bride,
            title: "Mariages",
            description: "Un service traiteur complet pour votre mariage."
        },
        {
            image: Entreprise,
            title: "Événements d'entreprise",
            description: "Buffets et repas professionnels."
        },
        {
            image: Private,
            title: "Événements privés",
            description: "Anniversaires, fêtes et réceptions."
        }
    ];

    const reviewsData = [
        { 
            id: 1, 
            userName: "Alice", 
            rating: 5, 
            comment: "Super service, je recommande !", 
            date: "12/02/2026" 
        },
        { 
            id: 2, 
            userName: "Marc", 
            rating: 4, 
            comment: "Très bon produit, livraison rapide.", 
            date: "05/03/2026" 
        },
        { 
            id: 3, 
            userName: "Julie", 
            rating: 3.5, 
            comment: "Repas correct, mais un peu cher.", 
            date: "08/03/2026" 
        },
        { 
            id: 4, 
            userName: "John", 
            rating: 2.5, 
            comment: "plats froids, et un peu cher.", 
            date: "15/03/2026" 
        },
    ];

    return (
        <main>
            <HeroCard />

            <section className="bg-light p-5">
                {avantcard.map((item, idx) => (
                    <div key={idx}>
                        <AvantCard
                        image={item.image}
                        alt={item.alt}
                        title={item.title}
                        description={item.description}
                        />
                    </div>
                ))}
            </section>

            <section className="bg-secondary-subtle p-5">
                <PrestationCard
                title="Découvrez nos différentes prestations"
                cards={prestations}
                />
            </section>

            <section className="bg-light p-5">
                <div className="container">
                    <div className="row g-3 text-center">
                        <h2 className="text-warning mb-4">Avis de nos clients</h2>
                    </div>
                    
                    <div className="row justify-content-center g-3 row-cols-1 row-cols-md-2 row-cols-lg-4">
                        {reviewsData.map((rev) => (
                            <div key={rev.id} className="col">
                                <div className="h-100">
                                    <ReviewCard review={rev} />
                                </div>  
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};
export default Accueil;