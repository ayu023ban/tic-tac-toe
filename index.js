const zero = "./zero.png";
const cross = "./cross.png";
let turnOfPlayer1 = true;
const position = document.querySelectorAll(".box");
const xsvg = document.getElementsByClassName("x");
const osvg = document.getElementsByClassName("o");
const resultDiv = document.querySelector("#result");
const moderadio = document.getElementsByName("mode");
const statusdiv = document.getElementById("game-status");
let scoreboardarray = [0, 0, 0];
let mode;
resetcurrent = document.querySelector("#resetcurrent");
const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", reset);
let gameArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];
// for (let i = 0; i < 9; i++) {
//   position[i].addEventListener("click", () => {
//     play(i);
//   });
// }

async function play(pos) {
  let result = 0;
  result = resultChecker(gameArray);
  if (gameArray[pos] != 2 && gameArray[pos] != 1 && result == 0) {
    let turnplayer = turn();

    if (turnplayer) {
      // position[pos].className = "cross box";
      xanimate(xsvg[pos]);
      gameArray[pos] = 1;
    } else if (mode == "player") {
      // position[pos].className = "zero box";
      oanimate(osvg[pos]);
      gameArray[pos] = 2;
    }
    // resultPrinter();
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
  if (resultChecker(gameArray) == 1 || resultChecker(gameArray) == 2)
    return true;
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
      // position[move].className = "zero box";
      oanimate(osvg[move]);
      gameArray[move] = 2;
      turn();
      resolve("magno");
    }, 1000);
  });
};

function getresult(status) {

  
  switch (mode) {
    case "computer":
      switch (status) {
        case 2:
          soundEffects.playLose();
          statusdiv.classList.add(
            "alert-danger",
            "status-result",
            "animated",
            "wobble"
          );
          statusdiv.innerHTML = "You Lose!";
          break;
        case 1:
          soundEffects.playWin();
          statusdiv.classList.add(
            "alert-primary",
            "status-result",
            "animated",
            "tada"
          );
          statusdiv.innerHTML = "You Win!";
          break;
        case 0:
          soundEffects.playTie();
          statusdiv.innerHTML = "It's a tie!";
          statusdiv.classList.add(
            "alert-warning",
            "animated",
            "shake",
            "status-result"
          );
          break;
      }
      break;

    case "player":
      switch (status) {
        case 1:
          soundEffects.playWin();
          statusdiv.classList.add(
            "alert-primary",
            "status-result",
            "animated",
            "tada"
          );
          statusdiv.innerHTML = "Congratulations to Player 1!";
          break;
        case 2:
          soundEffects.playWin();
          statusdiv.classList.add(
            "alert-primary",
            "status-result",
            "animated",
            "tada"
          );
          statusdiv.innerHTML = "Congratulations to Player 2!";
          break;
        case 0:
          soundEffects.playTie();
          statusdiv.innerHTML = "It's a tie!";
          statusdiv.classList.add(
            "alert-warning",
            "animated",
            "shake",
            "status-result"
          );
          break;
      }
  }
}

function resultPrinter() {
  scoreboardupdater();
  result = resultChecker(gameArray);
  if (result == 1) {
    getresult(1);
  } else if (result == 2) {
    getresult(2);
  } else if (gameCompleteChecker(gameArray)) {
    getresult(0);
  }
}
const confirm = (question, option1, option2, function1, function2) => {
  return new Promise((resolve, reject) => {
    confirmdiv = document.querySelector("#custom-confirm");
    heading = document.querySelector("#heading");
    questiondiv = document.querySelector("#question");
    option1div = document.querySelector("#option1");
    option2div = document.querySelector("#option2");
    type1 = [heading, confirmdiv, questiondiv, option1div, option2div];

    container = document.querySelector("#container");
    reset = document.querySelector("#reset");
    player1picdiv = document.getElementsByClassName("player1picdiv")[0];
    player2picdiv = document.getElementsByClassName("player2picdiv")[0];
    resetcurrent = document.querySelector("#resetcurrent");
    type2 = [reset, player1picdiv, player2picdiv, resetcurrent];

    wrapper = document.getElementsByClassName("wrapper")[0];
    //wrapper.style.gridTemplateColumns = "auto";

    // type1.forEach(function (el) {
    //   el.classList.remove("none");
    // });
    type2.forEach(function(el) {
      el.classList.add("none");
    });
    questiondiv.innerHTML = question;
    option1div.innerHTML = option1;
    option2div.innerHTML = option2;
    option1div.addEventListener("click", () => {
      // type1.forEach(function (el) {
      //   el.classList.add("none");
      // });
      type2.forEach(function(el) {
        el.classList.remove("none");
      });
      wrapper.style.gridTemplateColumns = "auto auto auto";
      resolve(function1());
    });
    option2div.addEventListener("click", () => {
      // type1.forEach(function (el) {
      //   el.classList.add("none");
      // });
      type2.forEach(function(el) {
        el.classList.remove("none");
      });
      wrapper.style.gridTemplateColumns = "auto auto auto";
      reject(function2());
    });
  });
};
modeSelector();
async function reset() {
  soundEffects.playMenu();
  statusdiv.style.opacity = 0;
  let isConfirmed = await confirm(
    "Are you sure to reset this ongoing game?",
    "No",
    "Yes",
    () => {
      statusdiv.style.opacity = 1;
      return false;
    },
    () => {
      statusdiv.style.opacity = 1;
      statusdiv.className = "";
      statusdiv.innerHTML = "";
      for (let i = 0; i < 9; i++) {
        gameArray[i] = 0;
        xremover(xsvg[i]);
        oremover(osvg[i]);
        turnOfPlayer1 = true;
      }
      scoreboardarray = [0, 0, 0];
      modeSelector();
      return true;
    }
  );
}
async function modeSelector() {
  let question = "Want to play multiplayer or With the Greate A.I?";
  let option1 = "Multiplayer";
  let option2 = "With A.I";
  let mango = await confirm(
    question,
    option1,
    option2,
    () => {
      mode = "player";
      player2picselector();
      scoreboardupdater();
    },
    () => {
      mode = "computer";
      player2picselector();
      scoreboardupdater();
    }
  );
}

const oanimator = o1 => {
  return new Promise((resolve, reject) => {
    o1.classList.add("oanimate");
    soundEffects.playOMark();
    setTimeout(() => {
      resolve("ma");
    }, 300);
  });
};
async function oanimate(oo) {
  let o = oo.getElementById("o1");
  const man = await oanimator(o);
}

const x1animator = (x1, x2) => {
  return new Promise((resolve, reject) => {
    x1.classList.add("xanimate");
    setTimeout(() => {
      resolve(x2);
    }, 150);
  });
};
const x2animator = x2 => {
  return new Promise((resolve, reject) => {
    x2.classList.add("xanimate");
    resolve("fa");
  });
};
async function xanimate(x) {
  let x1 = x.getElementById("x1");
  let x2 = x.getElementById("x2");
  soundEffects.playXMark();
  const man = await x1animator(x1, x2);
  const appl = await x2animator(man);
}
const oremover = o => {
  let o1 = o.getElementById("o1");
  o1.classList.remove("oanimate");
};
const xremover = x => {
  let x1 = x.getElementById("x1");
  let x2 = x.getElementById("x2");
  x1.classList.remove("xanimate");
  x2.classList.remove("xanimate");
};

function scoreboardupdater() {
  let p1scorespan = document.querySelector("#p1score");
  let p2scorespan = document.querySelector("#p2score");
  let p2scoreboard = document.querySelector("#player2name");
  if (resultChecker(gameArray) == 1) scoreboardarray[0]++;
  if (resultChecker(gameArray) == 0 && gameCompleteChecker(gameArray))
    scoreboardarray[1]++;
  if (resultChecker(gameArray) == 2) scoreboardarray[2]++;
  if (mode == "player") {
    p2scoreboard.innerHTML = "Player2";
  } else {
    p2scoreboard.innerHTML = "A.I";
  }
  p1scorespan.innerHTML = scoreboardarray[0];
  p2scorespan.innerHTML = scoreboardarray[2];
}

function player2picselector() {
  player2pic = document.getElementsByClassName("player2pic");
  if (mode == "player") {
    player2pic[0].classList.remove("none");
    player2pic[1].classList.add("none");
  } else {
    player2pic[0].classList.add("none");
    player2pic[1].classList.remove("none");
  }
}
soundEffects.init();

soundButton = document.getElementById("sound");
soundButton.addEventListener("click", () => {
  soundicon = soundButton.querySelector("i");
  soundicon.classList.toggle("fa-volume-mute");
  soundicon.classList.toggle("fa-volume-up");

  if (soundicon.classList.contains("fa-volume-up")) {
    document.querySelectorAll("audio").forEach(audio => {
      audio.muted = false;
    });
    soundEffects.playMenu();
  } else {
    document.querySelectorAll("audio").forEach(audio => {
      audio.muted = true;
    });
  }
});

let playfunctionarray = [
  () => {
    play(0);
  },
  () => {
    play(1);
  },
  () => {
    play(2);
  },
  () => {
    play(3);
  },
  () => {
    play(4);
  },
  () => {
    play(5);
  },
  () => {
    play(6);
  },
  () => {
    play(7);
  },
  () => {
    play(8);
  }
];

function option2eventfunction() {
  if (option2div.innerHTML == "Yes") {
    soundEffects.playMenu();
  } else {
    soundEffects.playSwipe();
    for (let i = 0; i < 9; i++) {
      position[i].addEventListener("click", playfunctionarray[i]);
    }
    confirmdiv.classList.remove("slide-in-left");
    confirmdiv.classList.add("slide-out-left");
    //   const animationHandler1 = () => {
    container.classList.remove("slide-out-right");
    confirmdiv.classList.remove("slide-in-left");
    container.classList.add("slide-in-right");
    //     confirmdiv.removeEventListener("animationend", animationHandler1);
    //   };

    //   confirmdiv.addEventListener("animationend", animationHandler1);
  }
}
option2div.addEventListener("click", option2eventfunction);

function reseteventfunction() {
  soundEffects.playSwipe();
  for (let i = 0; i < 9; i++) {
    position[i].removeEventListener("click", playfunctionarray[i]);
  }
  container.classList.remove("slide-in-right");
  container.classList.add("slide-out-right");

  // const animationHandler2 = () => {
  confirmdiv.classList.remove("slide-out-left");
  confirmdiv.classList.add("slide-in-left");
  // };
  // container.addEventListener("animationend", animationHandler2);
}
resetButton.addEventListener("click", reseteventfunction);

function option1eventfunction() {
  soundEffects.playSwipe();
  // e.preventDefault();
  confirmdiv.classList.remove("slide-in-left");
  confirmdiv.classList.add("slide-out-left");
  for (let i = 0; i < 9; i++) {
    position[i].addEventListener("click", playfunctionarray[i]);
  }
  // const animationHandler = () => {
  container.classList.remove("slide-out-right");
  container.classList.add("slide-in-right");
  //   confirmdiv.removeEventListener("animationend", animationHandler);
  //   // option2div.removeEventListener('click',option2eventfunction);
  //   //   option1div.removeEventListener('click',option1eventfunction);
  //   //   resetButton.addEventListener('click',reseteventfunction);
  // };

  // confirmdiv.addEventListener("animationend", animationHandler);
}
option1div.addEventListener("click", option1eventfunction);

function resetcurrentfunction(){
  soundEffects.playMenu();
  statusdiv.style.opacity = 1;
      statusdiv.className = "";
      statusdiv.innerHTML = "";
      for (let i = 0; i < 9; i++) {
        gameArray[i] = 0;
        xremover(xsvg[i]);
        oremover(osvg[i]);
        turnOfPlayer1 = true;
      }
}
resetcurrent.addEventListener("click",resetcurrentfunction)