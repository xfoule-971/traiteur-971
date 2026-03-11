const BlocEvenements = ({
  image1, image2, image3,
  phototitle1, phototitle2, phototitle3,
  title1, title2, title3,
  description1, description2, description3
}) => {

  return (
    <div className="container p-0 bg-light">

      {/* Ligne 1 */}
      <div className="row g-0">

        <div className="col-md-4 d-flex align-items-center justify-content-center text-center p-4">
          <div>
            <h3 className="mb-4">{title1}</h3>
            <p>{description1}</p>
          </div>
        </div>

        <div className="col-md-4">
          <img src={image1} alt={phototitle1} className="img-fluid w-100"/>
        </div>

        <div className="col-md-4 d-flex align-items-center justify-content-center text-center p-4">
          <div>
            <h3 className="mb-4">{title2}</h3>
            <p>{description2}</p>
          </div>
        </div>

      </div>

      {/* Ligne 2 */}
      <div className="row g-0">

        <div className="col-md-4">
          <img src={image2} alt={phototitle2} className="img-fluid w-100"/>
        </div>

        <div className="col-md-4 d-flex align-items-center justify-content-center text-center p-4">
          <div>
            <h3 className="mb-4">{title3}</h3>
            <p>{description3}</p>
          </div>
        </div>

        <div className="col-md-4">
          <img src={image3} alt={phototitle3} className="img-fluid w-100"/>
        </div>

      </div>

    </div>
  );
};

export default BlocEvenements;