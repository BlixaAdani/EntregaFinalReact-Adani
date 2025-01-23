import { useEffect, useState } from 'react';

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

function ItemDetailContainer() {
  const pastaProducts = [
    {
      name: 'Spaghetti',
      imagePath: '/src/assets/DSC_0038 copia.jpg',
      description: 'Fideos largos clásicos con salsa bolognesa o filetto.'
    },
    {
      name: 'Ravioles',
      imagePath: '/src/assets/DSC_0432 copia.jpg',
      description: 'Ravioles clásicos de sabores y salsa a gusto.'
    },
    {
      name: 'Sorrentinos',
      imagePath: '/src/assets/DSC_0129 (2) copia.jpg',
      description: 'Sorrentinos rellenos con salsa a elección.'
    },
    {
      name: 'Ñoquis',
      imagePath: '/src/assets/DSC_0075 copia.jpg',
      description: 'Ñoquis de papa con acompañamiento de salsa y toppings.'
    },
    {
      name: 'Lasagna',
      imagePath: '/src/assets/DSC_0494 copia.jpg',
      description: 'Lasagna de cuatro pisos rellena con muzzarella, verdura y carne a elección.'
    },
    {
      name: 'Panzottis',
      imagePath: '/src/assets/DSC_0141 (2) copia.jpg',
      description: 'Raviolones rellenos con salsa a elección.'
    },
    {
      name: 'Pesto',
      imagePath: '/src/assets/IMG-20240614-WA0142.jpg',
      description: 'Salsa pesto generosa para una porción.'
    },
    {
      name: 'Tortelletis',
      imagePath: '/src/assets/DSC_0087 (2) copia.jpg',
      description: 'Mini ravioles rellenos con acompañamiento de salsa.'
    },
    {
      name: 'Tirabuzones',
      imagePath: '/src/assets/DSC_0377 copia.jpg',
      description: 'Fideos largos directos de producción por porción.'
    },
    {
      name: 'Salsa',
      imagePath: '/src/assets/IMG-20240614-WA0133.jpg',
      description: 'Salsa a elección entre filetto, bolognesa o blanca.'
    }
  ];

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(pastaProducts);
  }, []);

  return (
    <div>
      <h1>Lista de productos</h1>
      <div style={styles.container}>
        {products.map((product, index) => (
          <div key={index} style={styles.item}>
            <img src={product.imagePath} alt={product.name} style={styles.image} />
            <p><strong>{product.name}</strong></p>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemDetailContainer;