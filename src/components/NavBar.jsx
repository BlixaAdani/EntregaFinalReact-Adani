import { Link, useNavigate } from 'react-router-dom';
import ravioliLogo from '/src/assets/ravioli.png';
import CartWidget from './CartWidget';
import Login from './Login';

function NavBar() {
  const navigate = useNavigate();

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
                <Link className="nav-link" to="/">Principal</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/item-list-container">Categories</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
            </ul>

            <div className="cart-widget" onClick={() => navigate("/cart")} style={{ cursor: "pointer" }}>
              <CartWidget />
            </div>

            <Login />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;