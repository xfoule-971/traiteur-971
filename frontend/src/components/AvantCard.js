import { Link } from "react-router-dom";

const AvantCard = ({ image, alt, title, description }) => {
    return (
        <div className="container-fluid">
            
            <div className="row justify-content-center">

                <div className="col-12 col-lg-10">

                    <div className="card rounded-0 overflow-hidden border-0">

                        <div className="row gap-5 align-items-stretch">

                            {/* IMAGE */}
                            <div className="col-md-5">
                                <img src={image} className="img-fluid shadow-warning" alt={alt}/>
                            </div>

                            {/* SLOGAN + BOUTON */}
                            <div className="col-md-6 d-flex flex-column align-items-center p-3">
                                <h2 className="text-warning mb-4">{title}</h2>
                                <p className="w-75 justif-text">
                                    {description}
                                </p>

                                <Link to="/commande">
                                    <button type="button" className="btn btn-warning fw-semibold survol-btn">Commander</button>
                                </Link>
                                
                            </div>

                        </div>
                    </div>

                </div>
                
            </div>

        </div>
    );
};
export default AvantCard;