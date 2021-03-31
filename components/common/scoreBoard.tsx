import * as React from "react";
import { setGameBoardDimension, setPlayer1Symbol } from "../../redux/game/reducer";
import { useAppDispatch } from "../../redux/hooks";
import styles from "../../styles/scoreBoard.module.scss";
import { getEmptyGameArray } from "../../utils/game";
type AppProps = {
  name?: string;
  score?: number;
};
const ScoreBoard = ({ name = "player1", score = 10 }: AppProps) => {
  const dispatch = useAppDispatch();
  return (
    <div className={styles.scoreboard}>
      <span
        onClick={() => {
          console.log("dfs");
          dispatch(setGameBoardDimension([2, 3]));
        }}
        className={styles.name}
      >
        {name}
      </span>
      <span className={styles.score}>{score}</span>
    </div>
  );
};

export default ScoreBoard;
