import React, { FC, ReactElement } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { playSound } from "../../redux/sounds/reducers";
import styles from "../../styles/button1.module.scss";

type Props = {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

const Button1: FC<Props> = ({ text, onClick }): ReactElement => {
  const dispatch = useAppDispatch();
  return (
    <button
      className={styles.container}
      onClick={(event) => {
        dispatch(playSound("menuSound"));
        if (onClick) {
          onClick(event);
        }
      }}
    >
      {text}
    </button>
  );
};

export default Button1;
