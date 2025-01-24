import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { pastaProducts } from './pastaProducts'; // Ensure the correct path
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
  item: {
    width: '20%',
    height: '20%',
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

function ItemListContainer() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = () => {
      const filteredProducts = id
        ? pastaProducts.filter((product) => product.id === id) // Filtering by `id` for details
        : pastaProducts;

      setProducts(filteredProducts);
    };

    fetchProducts();
  }, [id]);

  if (products.length === 0) {
    return <div>No se encontraron productos.</div>;
  }

  return (
    <div className="bod">
      <h1 style={styles.container}>Catálogo de productos</h1>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        {products.map((product) => (
          <div key={product.id} style={styles.item}>
            <h3>{product.name}</h3>
            <img src={product.imagePath} alt={product.name} style={styles.card.image} />
            <p>{product.description}</p>
            <a href={`/item/${product.id}`}>Ver detalles</a> {/* Check this link */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;