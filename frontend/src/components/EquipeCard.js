const EquipeCard = ({ image1, image2, image3, image4, description1, description2 }) => {
    return (
        <div className="container">
            <div className="row g-0 d-flex flex-column flex-md-row justify-content-center align-items-center">

                {/* Bloc images n°1 */}
                <div className="col md-4">
                    <div className="d-flex flex-column align-items-center text-center gap-2">
                        <img src={image1} className="img-fluid team" alt="équipe"/>
                        <img src={image2} className="img-fluid team" alt="équipe"/>
                    </div>
                </div>
                
                {/* Bloc texte */}
                <div className="col md-4">
                    <div className="d-flex flex-column align-items-center gap-4 text-center bg-light p-3">
                        <h3 className="text-warning fw-bold">Notre équipe pour vous</h3>
                        <p className="justif-text">
                            {description1}
                        </p>
                        <p className="justif-text"> 
                            {description2}
                        </p>
                    </div>
                </div>
                
                {/* Bloc images n°2 */}
                <div className="col md-4">
                    <div className="d-flex flex-column align-items-center text-center gap-2">
                        <img src={image3} className="img-fluid team" alt="équipe"/>
                        <img src={image4} className="img-fluid team" alt="équipe"/>
                    </div>
                </div>
                
            </div>
        </div>
    );
};
export default EquipeCard;