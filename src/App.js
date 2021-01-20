import "./App.css";

const style = {
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  width: "100%",
};

function App() {
  return (
    <div className="App">
      <h1>Vader's Mechanical Keyboards</h1>
      <p className="App-link">
        We've got all the parts you need to either build or customize your
        keyboard
      </p>
      <img
        style={style}
        src="https://external-preview.redd.it/ieV4VoFLENgOJ7S-CBjQXUODx2xEx9rFb7VtIV0qMh0.jpg?auto=webp&s=ffcb1a82ed1cfb5001a8b30f17fc896bfb41a3f1"
      />
    </div>
  );
}

export default App;
