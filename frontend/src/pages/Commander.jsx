import DevisForm from "../components/DevisForm";

const Commander = () => {
    return (
        <main>
            <header className="hero-image" style={{ zIndex: '1'}}>
                <div className="d-flex flex-column align-items-center text-center" style={{ zIndex: '999'}}>
                    <h1 className="text-warning fw-bold text-center" style={{ fontSize : '3.5em'}}>
                        Commander
                    </h1>

                    <h2 className="text-light" style={{ fontSize : '1.5em'}}>
                       Organisez votre évènement
                    </h2>
                </div>
            </header>

            <section className="container p-5">
                <DevisForm />
            </section>
        </main>
    );
};
export default Commander;