import { motion } from "framer-motion";
import React from "react";
import { useAppSelector } from "../../redux/hooks";
import menuStyle from "../../styles/menu.module.scss";
import { directionType, pageType } from "../../utils/types";
import Button1 from "./button1";
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
  key?: string;
  heading: string;
  question: string;
  options: Array<{
    text: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    disabled?: boolean;
  }>;
};
const Menu = ({ heading, question, options, key }: AppProps) => {
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
      <motion.div className={menuStyle.heading}>{heading}</motion.div>
      <motion.div className={menuStyle.question}>{question}</motion.div>
      <motion.div className={menuStyle.optionContainer}>
        {options.map((option, index) => (
          <Button1 key={index} text={option.text} onClick={option.onClick} />
        ))}
      </motion.div>
    </motion.div>
  );
};
export default Menu;
