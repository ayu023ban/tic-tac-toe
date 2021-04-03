import * as React from "react";
import { RESULT_TYPE } from "../../constants";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { playSound } from "../../redux/sounds/reducers";
import styles from "../../styles/alert.module.scss";
import { SoundType } from "../../utils/types";

const Alert = () => {
  const result = useAppSelector((state) => state.result.result);
  const isMute = useAppSelector((state) => state.settings.isMute);
  const animationEnabled = useAppSelector((state) => state.settings.animation);
  const mode = useAppSelector((state) => state.player2.mode);
  let sound: SoundType = null;
  const dispatch = useAppDispatch();
  let message = "";
  let classes;
  switch (result) {
    case RESULT_TYPE.PLAYER_2_WIN:
      message = mode === "computer" ? "You Lost!" : "Player 2 Won";
      classes = `${styles["game-status"]} ${styles.danger} ${styles.animated} `;
      sound = mode === "computer" ? "loseSound" : "winSound";
      if (animationEnabled) classes += styles.tada;
      break;
    case RESULT_TYPE.PLAYER_1_WIN:
      classes = `${styles["game-status"]} ${styles.primary} ${styles.animated} `;
      message = mode === "computer" ? "You Won!" : "Player 1 Won";
      sound = "winSound";
      if (animationEnabled) classes += styles.shake;
      break;
    case RESULT_TYPE.TIE:
      message = "It's a tie";
      sound = "tieSound";
      classes = `${styles["game-status"]} ${styles.warning} ${styles.animated} `;
      if (animationEnabled) classes += styles.wobble;
      break;
  }
  React.useEffect(() => {
    if (!isMute) {
      dispatch(playSound(sound));
    }
  });

  return classes !== undefined ? (
    <div className={classes}>{message}</div>
  ) : null;
};

export default Alert;
