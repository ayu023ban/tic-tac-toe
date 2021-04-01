import { combineReducers } from "redux";
import result from "./result/reducer";
import settings from "./settings/reducers";
import sounds from "./sounds/reducers";
import player1 from "./player1/reducer";
import player2 from "./player2/reducer";
import game from "./game/reducer";

const combinedReducer = combineReducers({
  result,
  settings,
  sounds,
  player1,
  player2,
  game,
});

export default combinedReducer;
