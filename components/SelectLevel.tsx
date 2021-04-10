import * as React from "react";
import { selectPage, setDirection } from "../redux/general/reducer";
import { useAppDispatch } from "../redux/hooks";
import { setGameLevel } from "../redux/player2/reducer";
import { playSound } from "../redux/sounds/reducers";
import Menu from "./common/menu";

const SelectLevel = () => {
  const dispatch = useAppDispatch();
  return (
    <Menu
      heading={"Tic Tac Toe"}
      question={"select Level"}
      options={[
        {
          text: "Easy",
          onClick: () => {
            dispatch(playSound("swipeSound"));
            dispatch(setGameLevel("Low"));
            dispatch(selectPage("game"));
            setDirection("right2left");
          },
        },
        {
          text: "Medium",
          onClick: () => {
            dispatch(playSound("swipeSound"));
            dispatch(setGameLevel("Medium"));
            dispatch(selectPage("game"));
            setDirection("right2left");
          },
        },
        {
          text: "Hard",
          onClick: () => {
            dispatch(playSound("swipeSound"));
            dispatch(setGameLevel("High"));
            dispatch(selectPage("game"));
            setDirection("right2left");
          },
        },
      ]}
    />
  );
};

export default SelectLevel;
