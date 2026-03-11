import { Helmet } from "react-helmet";

const Evenement = () => {
    return (
        <>
            <Helmet>
                <title>traiteur-karukéra</title>
                {/*La description aux moteurs de recherche*/}
                <meta name="description" 
                content="Réussissez tous vos évènements en Guadeloupe avec notre service traiteur.
                Du cocktail au dîner assis, nous gérons tout pour vous. Réservez vite!" 
                />
            </Helmet>
        </>
    );
};
export default Evenement;