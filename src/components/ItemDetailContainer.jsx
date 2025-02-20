import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { pastaProducts } from '../components/pastaProducts.jsx';
import ItemQuantitySelector from '/src/components/ItemQuantitySelector.jsx';
import bgImage from '/src/assets/1000143398.jpg';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '30px',
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
    <div style={styles.container} className='bod d-flex justify-content-center align-items-center vh-100'>
      <div style={styles.card} className='shadow-lg p-3 mb-5 bg-white rounded text-center'>
        <h2>{product.name}</h2>
        <img src={product.imagePath} alt={product.name} style={styles.image}/>
        <p>{product.description}</p>
        <ItemQuantitySelector stock={product.stock} className="w-100 my-2"/>
        <Link to="/item-list-container" className="w-100">Volver</Link>
      </div>
    </div>
  );
}

export default ItemDetailContainer;