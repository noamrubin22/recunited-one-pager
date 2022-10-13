import styles from "../scss/app.module.scss";
import { CanvasContainer } from "./CanvasContainer";
import { Diamond } from "./Diamond";

function App() {
  return (
    <div className={styles.App}>
      <CanvasContainer fov={7}>
        <Diamond type={"shiny"} />
      </CanvasContainer>
      <a href="https://recunited.com/" target="__blank">
        <div className={styles.logo}>
          <h1 className={styles.title}>RECUNITED</h1>
        </div>
      </a>
      <p className={styles.subtitle}>Talente so einzigartig wie Ihr Team</p>
    </div>
  );
}

export default App;
