import styles from "../styles";

const Home = () => {
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
    </div>
  );
};

export default Home;
