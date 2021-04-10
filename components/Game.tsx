import * as React from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import Alert from "./common/alert";
import Button1 from "./common/button1";
import Button2 from "./common/button2";
import Matrix from "./matrix";
import styles from "../styles/game.module.scss";
import { nextRound, restart } from "../redux/game/reducer";
import { setResult } from "../redux/result/reducer";
import { selectPage, setDirection } from "../redux/general/reducer";
import { motion } from "framer-motion";
import { mute, unmute } from "../redux/settings/reducers";
import { directionType } from "../utils/types";

const gameVarients = {
  initial: (direction: directionType) => ({
    x: direction === "right2left" ? 200 : -200,
    opacity: 0,
  }),
  enter: {
    scale: 1,
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] },
  },
  exit: (direction: directionType) => ({
    opacity: 0,
    x: direction === "right2left" ? -200 : 200,
    transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] },
  }),
};

const Game = () => {
  const result = useAppSelector((state) => state.result.result);
  const dispatch = useAppDispatch();
  const isMute = useAppSelector((state) => state.settings.isMute);
  const direction = useAppSelector((state) => state.general.direction);

  const restartMatch = () => {
    dispatch(restart());
    dispatch(setResult("NOT_DECLARED"));
  };
  const nextMatch = () => {
    dispatch(nextRound());
    dispatch(setResult("NOT_DECLARED"));
  };
  const goToConfirm = () => {
    dispatch(setDirection("left2right"));
    dispatch(selectPage("confirmReset"));
  };
  const toggleSound = () => {
    isMute ? dispatch(unmute()) : dispatch(mute());
  };
  return (
    <motion.div
      className={styles.container}
      initial="initial"
      animate="enter"
      exit="exit"
      custom={direction}
      variants={gameVarients}
    >
      <div className={styles.alertContainer}>
        {result !== "NOT_DECLARED" && <Alert />}
      </div>

      <Matrix />
      <div className={styles.lower_container}>
        <Button2 type={isMute ? "soundOff" : "soundOn"} onClick={toggleSound} />
        <Button1
          text={result === "NOT_DECLARED" ? "Restart" : "Next Round"}
          onClick={result === "NOT_DECLARED" ? restartMatch : nextMatch}
        />
        <Button2 type="restart" onClick={goToConfirm} />
      </div>
    </motion.div>
  );
};
export default Game;
