const zero = "./zero.png";
const cross = "./cross.png";
let turnOfPlayer1 = true;
const position = document.querySelectorAll(".box");
const resultDiv = document.querySelector("#result");
const moderadio = document.getElementsByName("mode");
let mode;

const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", reset);
let gameArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];
for (let i = 0; i < 9; i++) {
  position[i].addEventListener("click", () => {
    play(i);
  });
}
async function play(pos) {
  let result = 0;
  result = resultChecker(gameArray);
  if (gameArray[pos] != 2 && gameArray[pos] != 1 && result == 0) {
    let turnplayer = turn();

    if (turnplayer) {
      position[pos].className = "cross box";
      gameArray[pos] = 1;
    } else if (mode == "player") {
      position[pos].className = "zero box";
      gameArray[pos] = 2;
    }
    resultPrinter();
    if (mode == "computer") {
      let mango = await computerplay();
    }
    resultPrinter();
  }
}
function turn() {
  turnOfPlayer1 = !turnOfPlayer1;
  return !turnOfPlayer1;
}
function resultChecker(gameArray) {
  let combination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < 8; i++) {
    if (
      gameArray[combination[i][0]] == 1 &&
      gameArray[combination[i][1]] == 1 &&
      gameArray[combination[i][2]] == 1
    )
      return 1;
    if (
      gameArray[combination[i][0]] == 2 &&
      gameArray[combination[i][1]] == 2 &&
      gameArray[combination[i][2]] == 2
    )
      return 2;
  }
  return 0;
}
function gameCompleteChecker(gameArray) {
  for (let i = 0; i < 9; i++) {
    if (gameArray[i] == 0) return false;
  }
  return true;
}
function evaluate(gameArray) {
  if (resultChecker(gameArray) == 1) return 10;
  else if (resultChecker(gameArray) == 2) return -10;
  else return 0;
}
function minimax(gameArray, depth, turnOfPlayer1) {
  let score = evaluate(gameArray);
  if (score == 10) return 10;
  if (score == -10) return -10;
  if (gameCompleteChecker(gameArray)) return 0;
  if (turnOfPlayer1) {
    let best = -1000;
    for (let i = 0; i < 9; i++) {
      if (gameArray[i] == 0) {
        gameArray[i] = 1;
        best = Math.max(best, minimax(gameArray, depth + 1, !turnOfPlayer1));
        gameArray[i] = 0;
      }
    }
    return best;
  } else {
    let best = 1000;
    for (let i = 0; i < 9; i++) {
      if (gameArray[i] == 0) {
        gameArray[i] = 2;
        best = Math.min(best, minimax(gameArray, depth + 1, !turnOfPlayer1));
        gameArray[i] = 0;
      }
    }
    return best;
  }
}
function bestMove(gameArray) {
  let bestmove = -1;
  let bestvalue = 1000;
  for (let i = 0; i < 9; i++) {
    if (gameArray[i] == 0) {
      gameArray[i] = 2;
      let movevalue = minimax(gameArray, 0, true);
      gameArray[i] = 0;
      if (bestvalue > movevalue) {
        bestmove = i;
        bestvalue = movevalue;
      }
    }
  }

  return bestmove;
}
const computerplay = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let move = bestMove(gameArray);
      position[move].className = "zero box";
      gameArray[move] = 2;
      turn();
      resolve("magno");
    }, 300);
  });
};
function resultPrinter(mode) {
  result = resultChecker(gameArray);
  if (result == 1) {
    resultDiv.innerHTML = "<h1>congratulations player 1 won the match</h1>";
  } else if (result == 2) {
    if (mode == "player") {
      resultDiv.innerHTML = "<h1>congratulations player 2 won the match</h1>";
    } else {
      resultDiv.innerHTML = "<h1>The A.I has taken over the match</h1>";
    }
  } else if (gameCompleteChecker(gameArray)) {
    resultDiv.innerHTML = "<h1> the match is drawn.</h1>";
  }
}
const confirm = (question, option1, option2, function1, function2) => {
  return new Promise((resolve, reject) => {
    confirmdiv = document.querySelector("#custom-confirm");
    heading = document.querySelector("#heading");
    questiondiv = document.querySelector("#question");
    option1div = document.querySelector("#option1");
    option2div = document.querySelector("#option2");
    container = document.querySelector("#container");
    reset = document.querySelector("#reset")
    container.classList.add("none");
    reset.classList.add("none");
    heading.classList.remove("none");
    confirmdiv.classList.remove("none");
    questiondiv.classList.remove("none");
    option1div.classList.remove("none");
    option2div.classList.remove("none");
    questiondiv.innerHTML = question;
    option1div.innerHTML = option1;
    option2div.innerHTML = option2;
    option1div.addEventListener("click", () => {
      container.classList.remove("none");
      reset.classList.remove("none");
      heading.classList.add("none");
      confirmdiv.classList.add("none");
      questiondiv.classList.add("none");
      option1div.classList.add("none");
      option2div.classList.add("none");
      resolve(function1());
    });
    option2div.addEventListener("click", () => {
      container.classList.remove("none");
      reset.classList.remove("none");
      heading.classList.add("none");
      confirmdiv.classList.add("none");
      questiondiv.classList.add("none");
      option1div.classList.add("none");
      option2div.classList.add("none");
      reject(function2());
    });
  });
};
modeSelector();
async function reset() {
  let isConfirmed = await confirm(
    "Are you sure to reset the game?",
    "No",
    "Yes",
    () => {
      return false;
    },
    () => {
      for (let i = 0; i < 9; i++) {
        gameArray[i] = 0;
        position[i].classList.remove("zero");
        position[i].classList.remove("cross");
        resultDiv.innerHTML = "";
        turnOfPlayer1 = true;
      }
      modeSelector();
      return true;
    }
  );
}
async function modeSelector() {
  let question = "Want to play multiplayer of With the Greate A.I?";
  let option1 = "Multiplayer";
  let option2 = "With A.I";
  let mango = await confirm(
    question,
    option1,
    option2,
    () => {
      mode = "player";
    },
    () => {
      mode = "computer";
    }
  );
}
