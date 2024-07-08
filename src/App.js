import "./styles.css";
import ProgressBar from "./components/ProgressBar";
import { useState } from "react";

export default function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="component">
      {show && <ProgressBar />}
      <button
        onClick={() => setShow(!show)}
        style={{
          order: "1",
          margin: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Toggle
      </button>
    </div>
  );
}
