import React,{FC,ReactElement} from "react";
import styles from "../../styles/button.module.scss";

type Props = {
  text: string;
};

const Button: FC<Props> = ({ text }):ReactElement => (
  <button className={styles.container}>{text}</button>
);

export default Button