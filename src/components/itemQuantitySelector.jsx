import { useState } from "react";
import { useCart } from "./CartContext";

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginTop: "10px",
  },
  button: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    backgroundColor: "#f8f9fa",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.2s ease",
  },
  buttonDisabled: {
    backgroundColor: "#ddd",
    cursor: "not-allowed",
  },
  quantity: {
    fontSize: "18px",
    fontWeight: "bold",
  },
  addButton: {
    padding: "10px 15px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#28a745",
    color: "white",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.2s ease",
  },
};

function ItemQuantitySelector({ product }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  return (
    <div style={styles.container}>
      <button
        style={{ ...styles.button, ...(quantity <= 1 ? styles.buttonDisabled : {}) }}
        onClick={() => setQuantity(quantity - 1)}
        disabled={quantity <= 1}
      >
        -
      </button>
      <span style={styles.quantity}>{quantity}</span>
      <button
        style={styles.button}
        onClick={() => setQuantity(quantity + 1)}
      >
        +
      </button>
      <button
        style={styles.addButton}
        onClick={() => addToCart(product, quantity)}
      >
        Agregar al carrito
      </button>
    </div>
  );
}

export default ItemQuantitySelector;