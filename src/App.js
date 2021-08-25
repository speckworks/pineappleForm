import "./styles.css";
import PineappleForm from "./pineappleForm.js";

export default function App() {
  return (
    <div className="App">
      <h1 style={{ fontSize: "18px" }}>
        <span role="img" aria-label="pineapple" className="pina">
          🍍
        </span>
        Pineapple Express Form
        <span role="img" aria-label="pineapple" className="pina">
          🍍
        </span>
      </h1>
      <PineappleForm />
    </div>
  );
}
