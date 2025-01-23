import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const styles = {
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '20px',
      justifyContent: 'center',
    },
    item: {
      border: '1px solid #ddd',
      padding: '10px',
      textAlign: 'center',
    },
    image: {
      width: '150px',
      height: 'auto',
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
        // Filtra los productos según el categoryId si es necesario
        const filteredProducts = id 
          ? pastaProducts.filter(product => product.categoryId === id) 
          : pastaProducts; // Si no hay un categoryId, mostrar todos los productos
  
        setProducts(filteredProducts); // Actualiza el estado
      };
  
      fetchProducts();
    }, [id]); // El useEffect se ejecuta cuando el 'id' cambia (cuando la URL cambia)
  
    if (products.length === 0) {
      return <div>No se encontraron productos.</div>;
    }
  
    return (
      <div>
        <h1>Catálogo de productos</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {products.map((product) => (
            <div key={product.id} style={styles.item}>
              <h3>{product.name}</h3>
              <img src={product.imagePath} alt={product.name} style={styles.image} />
              <p>{product.description}</p>
              <a href={`/item/${product.id}`}>Ver detalles</a>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default ItemListContainer;