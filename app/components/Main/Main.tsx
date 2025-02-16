import { Chart } from "../Chart/Chart";
import { Symbols } from "../Symbols/Symbols";
import styles from "./Main.module.css";
export const Main = () => {
  return (
    <div>
      <div className={styles.titleCont}>
        <h1>U.S. STOCKS</h1>
      </div>
      <div className={styles.mainCont}>
        <div className={styles.mainContentCont}>
          <Symbols />
          <Chart />
        </div>
      </div>
    </div>
  );
};
