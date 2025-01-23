import ItemListContainer from '/src/components/ItemListContainer.jsx'


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
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <img src={product.imagePath} alt={product.name} style={styles.image} />
      <p>Precio: ${product.price || "N/A"}</p> {/* Asegúrate de tener un campo de precio */}
    </div>
  );
}

export default ItemDetailContainer;