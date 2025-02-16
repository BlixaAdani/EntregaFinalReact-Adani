import { useCart } from "/src/components/CartContext.jsx";

function CartWidget() {
  const { cart } = useCart();

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    return (
        <div className="cart-widget position-relative">
            <img src="\src\assets\tray-dish-svgrepo-com.svg" alt=""
            style={{width: "30px", height: "50px"}}/>
            
      <i className="bi bi-cart2 fs-4"></i>
      <span
        className="position-absolute top-40 start-100 translate-middle badge rounded-pill bg-danger"
        style={{ fontSize: "0.8rem" }}
      >
        {totalItems > 0 && <span>{totalItems}</span>}
      </span>
      </div>
    )
}

export default CartWidget;