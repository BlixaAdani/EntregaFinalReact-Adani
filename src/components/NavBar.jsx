import ravioliLogo from '/src/assets/ravioli.png';
import CartWidget from './CartWidget';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={ravioliLogo} alt="Raviolandia Logo" width="50" />
          <span className="fw-bold">RAVIOLANDIA</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="d-flex justify-content-between w-100 align-items-center">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Principal
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.pedidosya.com.ar/restaurantes/quilmes/raviolandia-quilmes-menu"
                >
                  PedidosYa
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./pages/contacto.html">
                  Contacto
                </a>
              </li>
            </ul>
            <CartWidget className="cart-widget" />
          </div>
          <form className="d-flex ms-3">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Buscar"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Buscar
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;