import { useCart } from "/src/components/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div>
        <h2>El carrito está vacío</h2>
        <Link to="/">Volver al catálogo</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <h3>{item.name}</h3>
            <p>Cantidad: {item.quantity}</p>
            <p>Precio: ${item.price * item.quantity}</p>
            <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <button onClick={clearCart}>Vaciar Carrito</button>
      <Link to="/checkout">Finalizar Compra</Link>
    </div>
  );
}

export default Cart;