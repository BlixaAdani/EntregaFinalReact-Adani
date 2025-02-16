import { useState, useContext } from "react";
import { CartContext } from "../components/CartContext.jsx";

function ItemQuantitySelector({ product }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div>
      <button onClick={() => setQuantity(quantity - 1)} disabled={quantity <= 1}>
        -
      </button>
      <span>{quantity}</span>
      <button onClick={() => setQuantity(quantity + 1)}>+</button>
      <button onClick={handleAddToCart}>Agregar al carrito</button>
    </div>
  );
}

export default ItemQuantitySelector;