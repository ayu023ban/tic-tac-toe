import * as React from "react";
import { useAppDispatch } from "../redux/hooks";
import Menu from "./common/menu";
import { setMode } from "../redux/player2/reducer";
import { playSound } from "../redux/sounds/reducers";
import { selectPage, setDirection } from "../redux/general/reducer";

const SelectMode = () => {
  const dispatch = useAppDispatch();
  return (
    <Menu
      heading={"Tic Tac Toe"}
      question={"Want to play multiplayer or With the Greate A.I?"}
      options={[
        {
          text: "Multiplayer",
          onClick: () => {
            dispatch(playSound("swipeSound"));
            dispatch(setMode("human"));
            dispatch(selectPage("game"));
            dispatch(setDirection("right2left"));
          },
        },
        {
          text: "Computer",
          onClick: () => {
            dispatch(playSound("swipeSound"));
            dispatch(setMode("computer"));
            dispatch(selectPage("levelSelect"));
            dispatch(setDirection("right2left"));
          },
        },
      ]}
    />
  );
};
export default SelectMode;
