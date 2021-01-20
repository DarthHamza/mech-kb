import products from "./products";

const styles = {
  body: { backgroundColor: "black" },
  keyboard: { margin: "20px" },
  keyboardImage: { width: "200px", height: "200px" },
  list: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
  shopImage: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%",
  },
  text: { textAlign: "center" },
};

function App() {
  const productList = products.map((product) => {
    return (
      <div style={styles.keyboard}>
        <h3>{product.name}</h3>
        <p style={styles.text}>Price: {product.price} USD</p>
        <img
          src={product.image}
          style={styles.keyboardImage}
          alt={product.name}
        />
      </div>
    );
  });
  return (
    <div>
      <h1 styles={styles.text}>Vader's Mechanical Keyboards</h1>
      <p styles={styles.text}>
        We've got all the parts you need to either build or customize your
        keyboard
      </p>
      <img
        style={styles.shopImage}
        src="https://external-preview.redd.it/ieV4VoFLENgOJ7S-CBjQXUODx2xEx9rFb7VtIV0qMh0.jpg?auto=webp&s=ffcb1a82ed1cfb5001a8b30f17fc896bfb41a3f1"
        alt="Vador's Keyboards"
      />
      <div style={styles.list}>{productList}</div>
    </div>
  );
}

export default App;
