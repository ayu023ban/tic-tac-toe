import React, { FC, ReactElement } from "react";
import styles from "../../styles/button1.module.scss";

type Props = {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

const Button1: FC<Props> = ({ text, onClick }): ReactElement => (
  <button className={styles.container} onClick={onClick}>
    {text}
  </button>
);

export default Button1;
