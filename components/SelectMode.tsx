import { motion } from "framer-motion";
import * as React from "react";
import { useAppDispatch } from "../redux/hooks";
import menuStyle from "../styles/menu.module.scss";
import Button1 from "./common/button1";
import Menu from "./common/menu";
import { setMode } from "../redux/player2/reducer";
import { playSound } from "../redux/sounds/reducers";
import { selectPage } from "../redux/general/reducer";

const SelectMode = () => {
  const dispatch = useAppDispatch();
  return (
    <Menu>
      <>
        <motion.div className={menuStyle.heading}>Tic Tac Toe</motion.div>
        <motion.div className={menuStyle.question}>
          Want to play multiplayer or With the Greate A.I?
        </motion.div>
        <motion.div className={menuStyle.optionContainer}>
          <Button1
            text={"Multiplayer"}
            onClick={() => {
              dispatch(playSound("swipeSound"));
              dispatch(setMode("human"));
              dispatch(selectPage("game"));
            }}
          />
          <Button1
            text={"Computer"}
            onClick={() => {
              dispatch(playSound("swipeSound"));
              dispatch(setMode("computer"));
              dispatch(selectPage("levelSelect"));
            }}
          />
        </motion.div>
      </>
    </Menu>
  );
};
export default SelectMode;
