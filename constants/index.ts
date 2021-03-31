const xMark = "public/images/x.svg";
const oMark = "public/images/o.svg";
export const RESULT_TYPE = {
  WIN: "WIN",
  LOSE: "LOSE",
  TIE: "TIE",
  NOT_DECLARED: "NOT_DECLARED",
};

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
