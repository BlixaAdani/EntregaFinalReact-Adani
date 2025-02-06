import img1 from '/src/assets/DSC_0444.jpg';
import img2 from '/src/assets/DSC_0510.jpg';
import img3 from '/src/assets/DSC_0488.jpg';

const Reel = () => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <a href="/pages/carrito.html">
            <img src={img1} className="d-block w-100" alt="Pasta dish 1" />
          </a>
        </div>
        <div className="carousel-item">
          <a href="/pages/carrito.html">
            <img src={img2} className="d-block w-100" alt="Pasta dish 2" />
          </a>
        </div>
        <div className="carousel-item">
          <a href="/pages/carrito.html">
            <img src={img3} className="d-block w-100" alt="Pasta dish 3" />
          </a>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Reel;