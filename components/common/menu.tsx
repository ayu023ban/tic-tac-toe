import { motion } from "framer-motion";
import React from "react";
import { useAppSelector } from "../../redux/hooks";
import menuStyle from "../../styles/menu.module.scss";
import { directionType, pageType } from "../../utils/types";
const menuVarient = {
  initial: (direction: directionType) => ({
    scale: 1,
    x: direction === "right2left" ? 200 : -200,
    opacity: 0,
  }),
  enter: {
    scale: 1,
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] },
  },
  exit: (direction: directionType) => ({
    scale: 1,
    opacity: 0,
    x: direction === "right2left" ? -200 : 200,
    transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] },
  }),
};

type AppProps = {
  children: JSX.Element;
  key?: string;
};
const Menu = ({ children, key }: AppProps) => {
  const direction = useAppSelector((state) => state.general.direction);
  return (
    <motion.div
      key={key}
      initial="initial"
      animate="enter"
      exit="exit"
      custom={direction}
      variants={menuVarient}
      className={menuStyle.container}
    >
      {children}
    </motion.div>
  );
};
export default Menu;
