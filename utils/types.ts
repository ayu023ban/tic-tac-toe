import { RESULT_TYPE, SOUNDS } from "../constants";

const resultTypes = Object.values(RESULT_TYPE);
export type resultType = typeof resultTypes[number];

const soundTypes = Object.values(SOUNDS);
export type SoundType = typeof soundTypes[number] | null;

export type gameLevelType = "Low" | "Medium" | "High";
export type turnType = "player1" | "player2";
export type player2ModeType = "human" | "computer";

export type pageType =
  | "modeSelect"
  | "levelSelect"
  | "game"
  | "confirmReset"
  | "profileSelect";
