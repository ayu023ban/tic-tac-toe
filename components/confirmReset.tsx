import * as React from "react";
import { useAppDispatch } from "../redux/hooks";
import Menu from "./common/menu";
import { setMode } from "../redux/player2/reducer";
import { playSound } from "../redux/sounds/reducers";
import { selectPage, setDirection } from "../redux/general/reducer";
import { restart } from "../redux/game/reducer";
import { setResult } from "../redux/result/reducer";

const ConfirmReset = () => {
  const dispatch = useAppDispatch();
  return (
    <Menu
      heading={"Tic Tac Toe"}
      question={"Are You Sure you want to reset the game series"}
      options={[
        {
          text: "Yes",
          onClick: () => {
            dispatch(restart());
            dispatch(setResult("NOT_DECLARED"));
            dispatch(setDirection("left2right"));
            dispatch(selectPage("modeSelect"));
          },
        },
        {
          text: "No",
          onClick: () => {
            dispatch(setDirection("right2left"));
            dispatch(selectPage("game"));
          },
        },
      ]}
    />
  );
};
export default ConfirmReset;
