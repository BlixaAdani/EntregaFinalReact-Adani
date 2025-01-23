import { Link } from 'react-router-dom';
import ravioliLogo from '/src/assets/ravioli.png';
import CartWidget from './CartWidget';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <img src={ravioliLogo} alt="Raviolandia Logo" width="50" />
        <span className="fw-bold">RAVIOLANDIA</span>
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
                <Link className="nav-link" to="/">
                  Principal
                </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/ItemListContainer">Categories</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/Contact">Contact</Link>
              </li>
            </ul>
            <CartWidget className="cart-widget" />
          </div>
          <form className="d-flex ms-3">
            <input
              id="search-input"
              className="form-control me-2"
              type="search"
              placeholder="Buscar"
              aria-label="Buscar en Raviolandia"
            />
            <button className="btn btn-outline-dark" type="submit">
              Buscar
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;