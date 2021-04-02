import * as React from "react";
import { useAppSelector } from "../redux/hooks";
import Cell from "./cell";
import styles from "../styles/matrix.module.scss";
import { motion } from "framer-motion";

const matrixVarients = {
  initial: { scale: 0.8, x: -200, opacity: 0 },
  enter: {
    scale: 1,
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] },
  },
  exit: {
    scale: 0.8,
    opacity: 0,
    x: -200,
    transition: { duration: 0.2, ease: [0.48, 0.15, 0.25, 0.96] },
  },
};

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
  const currentGameState = useAppSelector((state) => state.game.currentState);
  const player1Symbol = useAppSelector((state) => state.game.player1Symbol);
  const player2Symbol = useAppSelector((state) => state.game.player2Symbol);
  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={matrixVarients}
      className={styles.container}
    >
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
