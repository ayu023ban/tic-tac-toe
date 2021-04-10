import * as React from "react";
import { useAppSelector } from "../redux/hooks";
import Cell from "./cell";
import styles from "../styles/matrix.module.scss";
import { motion } from "framer-motion";
import { playComputerMove } from "../utils/game";
import { usePrevious } from "../utils/hooks";

type AppProps = {};

const getRow = (rowId: number, columnDimension: number) => {
  let res = [];
  for (let j = 0; j < columnDimension; j++) {
    res.push(<Cell row={rowId} column={j} key={j} />);
  }
  return res;
};

const Matrix = ({}: AppProps) => {
  const gameBoardDimension = useAppSelector(
    (state) => state.game.gameBoardDimension
  );
  const player2Mode = useAppSelector((state) => state.player2.mode);
  const turn = useAppSelector((state) => state.game.turn);
  const result = useAppSelector((state) => state.result.result);
  const prevResult = usePrevious(result);
  React.useEffect(() => {
    if (
      result === "NOT_DECLARED" &&
      player2Mode === "computer" &&
      turn === "player2"
    ) {
      setTimeout(() => playComputerMove(), prevResult !== result ? 100 : 300);
    }
  }, [result, turn]);

  return (
    <motion.div className={styles.container}>
      {Array.apply(null, Array(gameBoardDimension[0])).map((el, index) => {
        return (
          <div className={styles.row} key={index}>
            {getRow(index, gameBoardDimension[1])}
          </div>
        );
      })}
    </motion.div>
  );
};

export default Matrix;
