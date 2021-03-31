const xMark = "public/images/x.svg";
const oMark = "public/images/o.svg";
export const RESULT_TYPE = {
  PLAYER_1_WIN: "PLAYER_1_WIN",
  PLAYER_2_WIN: "PLAYER_2_WIN",
  TIE: "TIE",
  NOT_DECLARED: "NOT_DECLARED",
} as const;

export const SOUNDS = {
  boardSound: "boardSound",
  bubbleSound: "bubbleSound",
  loseSound: "loseSound",
  menuSound: "menuSound",
  oMarkSound: "oMarkSound",
  swipeSound: "swipeSound",
  tieSound: "tieSound",
  winSound: "winSound",
  xMarkSound: "xMarkSound",
} as const;

export const SYMBOLS = [
  { symbol: "X", image: xMark },
  { symbol: "O", image: oMark },
];
