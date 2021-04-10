import { motion } from "framer-motion";
import * as React from "react";
import { selectPage, setDirection } from "../redux/general/reducer";
import { useAppDispatch } from "../redux/hooks";
import { setGameLevel } from "../redux/player2/reducer";
import { playSound } from "../redux/sounds/reducers";
import menuStyle from "../styles/menu.module.scss";
import { directionType } from "../utils/types";
import Button1 from "./common/button1";
import Menu from "./common/menu";

const SelectLevel = ({ direction }: { direction: directionType }) => {
  const dispatch = useAppDispatch();
  return (
    <Menu>
      <>
        <motion.div className={menuStyle.heading}>Tic Tac Toe</motion.div>
        <motion.div className={menuStyle.question}>select Level</motion.div>
        <motion.div className={menuStyle.optionContainer}>
          <Button1
            text={"Easy"}
            onClick={() => {
              dispatch(playSound("swipeSound"));
              dispatch(setGameLevel("Low"));
              dispatch(selectPage("game"));
              setDirection("right2left");
            }}
          />
          <Button1
            text={"Medium"}
            onClick={() => {
              dispatch(playSound("swipeSound"));
              dispatch(setGameLevel("Medium"));
              dispatch(selectPage("game"));
              setDirection("right2left");
            }}
          />
          <Button1
            text={"Hard"}
            onClick={() => {
              dispatch(playSound("swipeSound"));
              dispatch(setGameLevel("High"));
              dispatch(selectPage("game"));
              setDirection("right2left");
            }}
          />
        </motion.div>
      </>
    </Menu>
  );
};

export default SelectLevel;
