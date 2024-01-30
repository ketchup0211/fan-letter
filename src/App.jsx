import { useState } from "react";
import chimMap from "./assets/chim-ha-ha.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <img src={chimMap} alt="chim-ha-ha-map"></img>
    </>
  );
}

export default App;
