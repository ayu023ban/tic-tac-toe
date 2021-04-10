import React from "react";
import Image from "next/image";
import { useAppSelector } from "../redux/hooks";
import styles from "../styles/cell.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { setGameBoard } from "../redux/game/reducer";
import { playMove } from "../utils/game";
type AppProps = {
  row: number;
  column: number;
};

const getClasses = (
  row: number,
  column: number,
  gameBoardDimension: [number,number]
) => {
  let classes = [];
  if (row > 0) classes.push(styles["border-up"]);
  if (column > 0) classes.push(styles["border-left"]);
  if (row < gameBoardDimension[0] - 1) classes.push(styles["border-down"]);
  if (column < gameBoardDimension[1] - 1) classes.push(styles["border-right"]);
  return classes.join(" ");
};

const imageVariants = {
  initial: { scale: 0.2, opacity: 0 },
  enter: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] },
  },
  exit: {
    scale: 0.2,
    opacity: 0,
    transition: { duration: 0.2, ease: [0.48, 0.15, 0.25, 0.96] },
  },
};

const Cell = ({ row, column }: AppProps) => {
  const player1Symbol = useAppSelector((state) => state.game.player1Symbol);
  const player2Symbol = useAppSelector((state) => state.game.player2Symbol);
  const emptySymbol = useAppSelector((state) => state.game.emptySymbol);
  const currentGameState = useAppSelector((state) => state.game.currentState);
  const gameBoardDimension = useAppSelector(
    (state) => state.game.gameBoardDimension
  );
  const result = useAppSelector((state) => state.result.result);
  const classes = getClasses(row, column, gameBoardDimension);

  const play = () => {
    if (result === "NOT_DECLARED") {
      const newGameState = currentGameState.map((row) => row.map((el) => el));
      if (newGameState[row][column] === emptySymbol) {
        playMove(row, column);
      }
    }
  };

  return (
    <motion.div className={`${classes} ${styles.cell}`} onClick={play}>
      <AnimatePresence>
        <motion.div
          initial="initial"
          animate={
            currentGameState[row][column] !== emptySymbol ? "enter" : "exit"
          }
          exit="exit"
          variants={imageVariants}
        >
          {currentGameState[row][column] === player1Symbol.symbol ? (
            <Image
              src={player1Symbol.image}
              alt={player1Symbol.symbol}
              width={90}
              height={90}
            />
          ) : currentGameState[row][column] === player2Symbol.symbol ? (
            <Image
              src={player2Symbol.image}
              alt={player2Symbol.symbol}
              width={90}
              height={90}
            />
          ) : null}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default Cell;
