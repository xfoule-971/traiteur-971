const CarouselbrideCard = ({ images }) => {
  // Fonction pour diviser le tableau d'images en groupes de 3
  const chunkImages = (arr, size) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  };

  const groups = chunkImages(images, 3);

  return (
    <div className="col-md-9">

        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
            {groups.map((group, index) => (
                <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                <div className="d-flex">
                    {group.map((url, imgIndex) => (
                    <div key={imgIndex} className="p-1" style={{ flex: '0 0 33.333%' }}>
                        <img src={url} className="d-block w-100 img-fluid" alt="Slide" />
                    </div>
                    ))}
                </div>
                </div>
            ))}
            </div>

            {/* Bouton Précédent */}
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" style={{ backgroundColor: 'black', borderRadius: '50%' }}></span>
            <span className="visually-hidden">Précédent</span>
            </button>

            {/* Bouton Suivant */}
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" style={{ backgroundColor: 'black', borderRadius: '50%' }}></span>
            <span className="visually-hidden">Suivant</span>
            </button>
        </div>

    </div>
  );
};

export default CarouselbrideCard;