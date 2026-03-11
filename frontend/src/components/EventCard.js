const EventCard = ({title, para1, para2, image, subtitle}) => {
    return (
        <section className="container-fluid mt-5">

            <div className="row justify-content-center text-center">

                <div className="col-12 col-lg-10">

                    <div className="row justify-content-center align-items-start">

                        {/* PARTIE TEXTE */}
                        <div className="col-md-4 text-start p-3">

                            <h2 className="text-warning fw-bold mb-4">{title}</h2>

                            <p className="justif-text">
                               {para1}
                            </p>

                            <p className="justif-text">
                                {para2}
                            </p>

                        </div>

                        {/* IMAGE */}
                        <div className="col-md-4">
                            <img src={image} className="img-fluid" alt={subtitle} />
                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};
export default EventCard;