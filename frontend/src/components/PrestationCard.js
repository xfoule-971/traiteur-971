import { Link } from "react-router-dom";

const PrestationCard = ({ title, cards }) => {

  return (
    <div className="container text-center">

      <h2 className="text-warning mb-4">{title}</h2>

      <div className="row g-4 justify-content-center">

        {cards.map((card, index) => (

          <div key={index} className="col-12 col-md-4 d-flex justify-content-center">

            <div className="card rounded-0 bg-secondary shadow-warning" style={{ width: "20rem" }}>

              <img
                src={card.image}
                className="card-img-top rounded-0"
                alt={card.title}
              />

              <div className="card-body text-light">

                <h5 className="card-title">{card.title}</h5>

                <p className="card-text">{card.description}</p>

                <Link to="/contact">

                  <button className="btn btn-warning fw-semibold text-light survol-btn">
                    En savoir plus
                  </button>

                </Link>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );

};

export default PrestationCard;