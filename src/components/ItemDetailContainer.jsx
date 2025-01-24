import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { pastaProducts } from './pastaProducts';
import Background from '../assets/1000143398.jpg';

const styles = {
  container: {
    backgroundImage: `url(${Background})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  card: {
    image: {
      height: '600px',
      objectFit: 'cover',
    },
    col: {
      height: '120px',
    },
  },
  button: {
    width: '80px',
    height: '60px',
    backgroundColor: 'transparent',
    color: 'white',
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