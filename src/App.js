import "./styles.css";
import pineappleForm from "./pineappleForm.js";

export default function App() {
  return (
    <div className="App">
      <h1 style={{ fontSize: "24px" }}>
        <span role="img" aria-label="pineapple">
          🍍
        </span>
        Pineapple Express Form 🍍
      </h1>
      <pineappleForm />
    </div>
  );
}
