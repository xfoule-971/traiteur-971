import { useState, useEffect } from "react";

const CarouselbrideCard = ({ images }) => {

  const [itemsPerSlide, setItemsPerSlide] = useState(3);

  // responsive
  useEffect(() => {

    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerSlide(1); // mobile
      } else {
        setItemsPerSlide(3); // desktop
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);

  }, []);

  // découper images
  const chunkImages = (arr, size) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  };

  const groups = chunkImages(images, itemsPerSlide);

  return (
    <div className="col-md-10">

      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">

        <div className="carousel-inner">

          {groups.map((group, index) => (

            <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>

              <div className="d-flex">

                {group.map((url, imgIndex) => (

                  <div
                  key={imgIndex}
                  className="p-1"
                  style={{ flex: `0 0 ${100 / itemsPerSlide}%` }}
                  >

                    <img
                    src={url}
                    className="d-block w-100 img-fluid"
                    alt="Slide"
                    />

                  </div>

                ))}

              </div>

            </div>

          ))}

        </div>

        {/* PREV */}
        <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
        >
          <span
          className="carousel-control-prev-icon"
          style={{ backgroundColor: "black", borderRadius: "50%" }}
          ></span>
        </button>

        {/* NEXT */}
        <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
        >
          <span
          className="carousel-control-next-icon"
          style={{ backgroundColor: "black", borderRadius: "50%" }}
          ></span>
        </button>

      </div>

    </div>
  );
};

export default CarouselbrideCard;