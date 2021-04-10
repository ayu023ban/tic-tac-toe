import {
  faUndo,
  faVolumeMute,
  faVolumeUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC, ReactElement } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { playSound } from "../../redux/sounds/reducers";
import styles from "../../styles/button2.module.scss";

const icons = {
  soundOn: <FontAwesomeIcon className={styles.icon} icon={faVolumeUp} />,
  soundOff: <FontAwesomeIcon className={styles.icon} icon={faVolumeMute} />,
  restart: <FontAwesomeIcon className={styles.icon} icon={faUndo} />,
};
type Props = {
  text?: string;
  type: "soundOn" | "soundOff" | "restart" | "other";
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

const Button2: FC<Props> = ({
  text,
  type = "other",
  onClick,
}): ReactElement => {
  const dispatch = useAppDispatch();
  return type === "other" ? (
    <button
      className={styles.container}
      onClick={(event) => {
        dispatch(playSound("menuSound"));
        if (onClick) {
          onClick(event);
        }
      }}
    >
      <span className={styles.icon}>{text}</span>
    </button>
  ) : (
    <button
      className={styles.container}
      onClick={(event) => {
        dispatch(playSound("menuSound"));
        if (onClick) {
          onClick(event);
        }
      }}
    >
      {icons[type]}
    </button>
  );
};

export default Button2;
