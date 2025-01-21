import Fblogo from '/src/assets/facebook.png'
import Iglogo from '/src/assets/instagram.png'
import Wpplogo from '/src/assets/whatsapp.png'

const Footer = () => {
    return (
        <footer className="bg-light">
      <div className="container py-4">
        <div className="d-flex justify-content-center mt-3">
          <a
            className="btn btn-outline-dark mx-2"
            href="https://www.facebook.com/p/Raviolandia-Quilmes-100063698257078/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-f"></i> 
            <img src={Fblogo} alt="Facebook logo" className="ilogo" />
          </a>
          <a
            className="btn btn-outline-dark mx-2"
            href="https://www.instagram.com/raviolandia_quilmes/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i> 
            <img src={Iglogo} alt="Instagram logo" className="ilogo" />
          </a>
          <a
            className="btn btn-outline-dark mx-2"
            href="https://wa.me/5491160397216?text=Hola,%20I%20quisiera%20hacer%20un%20pedido%20o%20consultarles!"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-whatsapp"></i> 
            <img src={Wpplogo} alt="WhatsApp logo" className="ilogo" />
          </a>
        </div>
        <p className="text-center text-dark mt-3">
          &copy; 2024 Raviolandia. Todos los derechos reservados.
        </p>
      </div>
      </footer>
    );
  };
  
  export default Footer;