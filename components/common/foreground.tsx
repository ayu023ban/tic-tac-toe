import React from "react";
import styles from "../../styles/foreground.module.scss";
type AppProps = {
  children: JSX.Element;
};
const ForeGround = ({ children }: AppProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.page2}></div>
      <div className={styles.page3}></div>
      <div className={styles.page}>{children}</div>
    </div>
  );
};

export default ForeGround;
