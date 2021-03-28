import React,{FC,ReactElement} from "react";
import styles from "../../styles/button1.module.scss";

type Props = {
  text: string;
};

const Button1: FC<Props> = ({ text }):ReactElement => (
  <button className={styles.container}>{text}</button>
);

export default Button1