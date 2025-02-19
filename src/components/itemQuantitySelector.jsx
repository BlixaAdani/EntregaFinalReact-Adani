import { useState } from "react";
import { useCart } from "./CartContext"; // 🔹 Importa el hook `useCart`

function ItemQuantitySelector({ product }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart(); // 🔹 Usa `useCart()` para acceder al carrito

  return (
    <div>
      <button onClick={() => setQuantity(quantity - 1)} disabled={quantity <= 1}>
        -
      </button>
      <span>{quantity}</span>
      <button onClick={() => setQuantity(quantity + 1)}>+</button>
      <button onClick={() => addToCart(product, quantity)}>Agregar al carrito</button>
    </div>
  );
}

export default ItemQuantitySelector;