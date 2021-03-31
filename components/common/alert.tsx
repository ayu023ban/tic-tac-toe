import * as React from "react";
import { RESULT_TYPE } from "../../constants";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { playSound } from "../../redux/sounds/actions";
import styles from "../../styles/alert.module.scss";

type AppProps = { message: String };
const Alert = ({ message }: AppProps) => {
  const result = useAppSelector((state) => state.result.result);
  const isMute = useAppSelector((state) => state.settings.isMute);
  const animationEnabled = useAppSelector((state) => state.settings.animation);
  const dispatch = useAppDispatch();
  let classes;
  switch (result) {
    case RESULT_TYPE.LOSE:
      classes = `${styles["game-status"]} ${styles.danger} ${styles.animated} `;
      if (animationEnabled) classes += styles.tada;
      break;
    case RESULT_TYPE.WIN:
      classes = `${styles["game-status"]} ${styles.primary} ${styles.animated} `;
      if (animationEnabled) classes += styles.shake;
      break;
    case RESULT_TYPE.TIE:
      classes = `${styles["game-status"]} ${styles.warning} ${styles.animated} `;
      if (animationEnabled) classes += styles.wobble;
      break;
  }

  return classes !== undefined ? (
    <div
      className={classes}
      onClick={() => {
        dispatch(playSound("menuSound"));
      }}
    >
      {message}
    </div>
  ) : null;
};

export default Alert;
