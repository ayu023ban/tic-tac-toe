import * as React from "react";
import styles from "../../styles/scoreBoard.module.scss";
type AppProps = {
  name: String;
  score: Number;
};
const ScoreBoard = ({ name = "player1", score = 10 }: AppProps) => {
  return (
    <div className={styles.scoreboard}>
      <span className={styles.name}>{name}</span>
      <span className={styles.score}>{score}</span>
    </div>
  );
};

export default ScoreBoard;
