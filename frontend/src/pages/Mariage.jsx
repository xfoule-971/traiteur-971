

const Mariage = () => {
    

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
        </main>
    );
};
export default Mariage;