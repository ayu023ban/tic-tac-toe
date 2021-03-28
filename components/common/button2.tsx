import {
  faUndo,
  faVolumeMute,
  faVolumeUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC, ReactElement } from "react";
import styles from "../../styles/button2.module.scss";

const icons = {
  soundOn: <FontAwesomeIcon className={styles.icon} icon={faVolumeUp} />,
  soundOff: <FontAwesomeIcon className={styles.icon} icon={faVolumeMute} />,
  restart: <FontAwesomeIcon className={styles.icon} icon={faUndo} />,
};
type Props = {
  text?: string;
  type: "soundOn" | "soundOff" | "restart" | "other";
};

const Button2: FC<Props> = ({ text, type = "other" }): ReactElement => {
  return type === "other" ? (
    <button className={styles.container}>
      <span className={styles.icon}>{text}</span>
    </button>
  ) : (
    <button className={styles.container}>{icons[type]}</button>
  );
};

export default Button2;
