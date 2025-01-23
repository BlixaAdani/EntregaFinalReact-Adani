import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    item: {
      width: '20%',
      height: '20%',
      gap: '20px'
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

const pastaProducts = [
    {
      id: '1',
      name: 'Spaghetti',
      imagePath: '/src/assets/DSC_0038 copia.jpg',
      description: 'Fideos largos clásicos con salsa bolognesa o filetto.',
    },
    {
      id: '2',
      name: 'Ravioles',
      imagePath: '/src/assets/DSC_0432 copia.jpg',
      description: 'Ravioles clásicos de sabores y salsa a gusto.',
    },
    {
      id: '3',
      name: 'Sorrentinos',
      imagePath: '/src/assets/DSC_0129 (2) copia.jpg',
      description: 'Sorrentinos rellenos con salsa a elección.',
    },
    {
      id: '4',
      name: 'Ñoquis',
      imagePath: '/src/assets/DSC_0075 copia.jpg',
      description: 'Ñoquis de papa con acompañamiento de salsa y toppings.',
    },
    {
      id: '5',
      name: 'Lasagna',
      imagePath: '/src/assets/DSC_0494 copia.jpg',
      description: 'Lasagna de cuatro pisos rellena con muzzarella, verdura y carne a elección.',
    },
    {
      id: '6',
      name: 'Panzottis',
      imagePath: '/src/assets/DSC_0141 (2) copia.jpg',
      description: 'Raviolones rellenos con salsa a elección.',
    },
    {
      id: '7',
      name: 'Pesto',
      imagePath: '/src/assets/IMG-20240614-WA0142.jpg',
      description: 'Salsa pesto generosa para una porción.',
    },
    {
      id: '8',
      name: 'Tortelletis',
      imagePath: '/src/assets/DSC_0087 (2) copia.jpg',
      description: 'Mini ravioles rellenos con acompañamiento de salsa.',
    },
    {
      id: '9',
      name: 'Tirabuzones',
      imagePath: '/src/assets/DSC_0377 copia.jpg',
      description: 'Fideos largos directos de producción por porción.',
    },
    {
      id: '10',
      name: 'Salsa',
      imagePath: '/src/assets/IMG-20240614-WA0133.jpg',
      description: 'Salsa a elección entre filetto, bolognesa o blanca.',
    }
  ];

  function ItemListContainer() {
    const { id } = useParams();
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      const fetchProducts = () => {
        
        const filteredProducts = id 
          ? pastaProducts.filter(product => product.categoryId === id) 
          : pastaProducts;
  
        setProducts(filteredProducts);
      };
  
      fetchProducts();
    }, [id]);
  
    if (products.length === 0) {
      return <div>No se encontraron productos.</div>;
    }
  
    return (
      <div className='bod'>
        <h1 style={styles.container}>Catálogo de productos</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', alignItems: 'center' }}>
          {products.map((product) => (
            <div key={product.id} style={styles.item}>
              <h3>{product.name}</h3>
              <img src={product.imagePath} alt={product.name} style={styles.card.image} />
              <p>{product.description}</p>
              <a href={`/item/${product.id}`}>Ver detalles</a>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default ItemListContainer;