import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { pastaProducts } from '../components/pastaProducts.jsx';
import ItemQuantitySelector from '/src/components/ItemQuantitySelector.jsx';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
  },
  image: {
    height: '200px',
    objectFit: 'cover',
    borderRadius: '10px',
  },
  card: {
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    maxWidth: '400px',
    textAlign: 'center',
    backgroundColor: '#fff',
  },
};

function ItemDetailContainer() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const productId = parseInt(id, 10);
    if (!isNaN(productId)) {
      const foundProduct = pastaProducts.find((product) => product.id === productId);
      setProduct(foundProduct || false);
    }
  }, [id]);

  if (product === null) {
    return <div>Cargando detalles del producto...</div>;
  }

  if (!product) {
    return <div>Producto no encontrado.</div>;
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>{product.name}</h2>
        <img src={product.imagePath} alt={product.name} style={styles.image} />
        <p>{product.description}</p>
        <ItemQuantitySelector stock={product.stock} />
      </div>
    </div>
  );
}

export default ItemDetailContainer;