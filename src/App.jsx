import { useState } from "react";
import logo from "./logo.svg";
import styles from "../scss/app.module.scss";
import { CanvasContainer } from "./CanvasContainer";
import { Diamond } from "./Diamond";

function App() {
  return (
    <div className={styles.App}>
      <CanvasContainer fov={7} width={100}>
        <Diamond type={"shiny"} />
      </CanvasContainer>
      <div className={styles.logo}>
        <h1 className={styles.title}>RECUNITED</h1>
      </div>
      <p className={styles.subtitle}>Talente so einzigartig wie ihr Team</p>
    </div>
  );
}

export default App;
