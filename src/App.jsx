import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { CanvasContainer } from "./CanvasContainer";
import { Diamond } from "./Diamond";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <CanvasContainer fov={7} width={100}>
        <Diamond type={"shiny"} />
      </CanvasContainer>
      <div className="logo">
        {/* <img src="/rec_logo1.png" className="logo_img" /> */}
        <h1 className="title">RECUNITED</h1>
      </div>
      <p className="subtitle">Talente so einzigartig wie ihr Team</p>
    </div>
  );
}

export default App;
