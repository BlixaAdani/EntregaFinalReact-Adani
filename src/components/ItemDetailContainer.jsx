import ItemListContainer from '/src/components/ItemListContainer.jsx'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  productList: {
    width: '100%',
    height: '20%',
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
};

function ItemDetailContainer() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = ItemListContainer.find(pastaProduct => pastaProduct.id === id);
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return <div>Cargando...</div>;
  }

  return (
      <div style={styles.container}>
        <div style={styles.productList} id="product-list">
          <div style={styles.card}>
            <img
              src="example.jpg"
              alt="Product"
              style={styles.card.image}
            />
            <div style={styles.card.col}>
            </div>
          </div>
        </div>
      </div>
  );
}

export default ItemDetailContainer;