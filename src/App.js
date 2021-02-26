import img from "./dua_lipa.webp";
import { useState } from "react";

import "./App.css";

function App() {
  const [counter, setCounter] = useState(101);
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => setCounter(counter + 1)}>increase</button>
        Number is {counter}
        <button onClick={() => setCounter(counter - 1)}>decrease</button>
        <p>Dua Lipa 💕</p>
        <img
          src={img}
          loading="lazy"
          className="App-img"
          alt="Dua Lipa"
          width="1280"
          height="1923"
        />
      </header>
    </div>
  );
}

export default App;
