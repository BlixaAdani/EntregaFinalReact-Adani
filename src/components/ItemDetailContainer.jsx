import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { pastaProducts } from '/src/components/pastaProducts.jsx';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: '20px',
  },
  card: {
    image: {
      height: '100px',
      objectFit: 'cover',
    },
    col: {
      height: '120px',
    },
  },
};

function ItemDetailContainer() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    
    const foundProduct = pastaProducts.find((product) => product.id === id);
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return <div>Cargando detalles del producto...</div>;
  }

  return (
    <div style={styles.container}>
      <div>
        <h2>{product.name}</h2>
        <img src={product.imagePath} alt={product.name} style={styles.card.image} />
        <p>{product.description}</p>
      </div>
    </div>
  );
}

export default ItemDetailContainer;