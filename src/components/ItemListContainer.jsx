import { useEffect, useState } from 'react';
import { pastaProducts } from '/src/components/pastaProducts.jsx';
import { Link } from 'react-router-dom'

const styles = {
  title: {
    display: 'flex',
    alignSelf: 'center',
    justifySelf: 'center',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  item: {
    width: '20%',
    height: 'auto',
    gap: '30px 30px 30px 30px',
    backgroundColor: 'rgba(240, 219, 136, 0.87)',
    boderRadius: '30px',
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

function ItemListContainer() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(pastaProducts);
  }, []);

  if (products.length === 0) {
    return <div>No se encontraron productos.</div>;
  }

  return (
    <div className='bod'>
      <h1 className='title text-center'>Catálogo de productos</h1>
      <div style={styles.container}>
        {products.map((product) => (
          <div key={product.id} style={styles.item} className='row row-cols-1'>
            <h3>{product.name}</h3>
            <img src={product.imagePath} alt={product.name} style={styles.card.image} />
            <p>{product.description}</p>
            <Link to={`/item/${product.id}`}>Ver detalles</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;