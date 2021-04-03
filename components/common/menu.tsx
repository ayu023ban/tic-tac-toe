import { motion } from "framer-motion";
import React from "react";
import menuStyle from "../../styles/menu.module.scss";

const menuVarient = {
  initial: { scale: 1, x: 200, opacity: 0 },
  enter: {
    scale: 1,
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] },
  },
  exit: {
    scale: 1,
    opacity: 0,
    x: -200,
    transition: { duration: 0.2, ease: [0.48, 0.15, 0.25, 0.96] },
  },
};

type AppProps = {
  children: JSX.Element;
  key?: string;
};
const Menu = ({ children, key }: AppProps) => {
  return (
    <motion.div
      key={key}
      initial="initial"
      animate="enter"
      exit="exit"
      variants={menuVarient}
      className={menuStyle.container}
    >
      {children}
    </motion.div>
  );
};
export default Menu;
