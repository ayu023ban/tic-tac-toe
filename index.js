const zero = "./zero.png"
const cross = "./cross.png"
let turnOfPlayer1 = true;
const position = document.querySelectorAll('.box');
const resultDiv = document.querySelector('#result');
const moderadio = document.getElementsByName('mode');
let mode;
moderadio.forEach(i => {
    if(i.checked){
        mode = i.value;
    }
});

let gameArray = [0,0,0,0,0,0,0,0,0];
for(let i=0;i<9;i++){
    position[i].addEventListener("click",()=>{runplayermode(i)});
}


function runplayermode(pos){
    let result=0
    result = resultChecker(gameArray);
    if(gameArray[pos]!=2&&gameArray[pos]!=1&&result==0){
    let turnplayer = turn();
    if(turnplayer){
        position[pos].className="cross box";
        gameArray[pos]=1;
    }
    else{
        position[pos].className="zero box";
        gameArray[pos]=2;
    }
}
    result = resultChecker(gameArray);
    if(result==1){
        resultDiv.innerHTML="<h1>congratulations player 1 won the match</h1>";
    }
    else if (result==2){
        resultDiv.innerHTML="<h1>congratulations player 2 won the match</h1>";
    }
    else if(gameCompleteChecker(gameArray)){
        resultDiv.innerHTML="<h1> the match is drawn.</h1>"
    }
}

function turn(){
    turnOfPlayer1 = !turnOfPlayer1;
    return !turnOfPlayer1;
}

function resultChecker(gameArray){
    let combination = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    for(let i =0;i<8;i++){
            if(gameArray[combination[i][0]]==1&&gameArray[combination[i][1]]==1&&gameArray[combination[i][2]]==1)
            return 1;
            if(gameArray[combination[i][0]]==2&&gameArray[combination[i][1]]==2&&gameArray[combination[i][2]]==2)
            return 2;        
    }
return 0
}
function gameCompleteChecker(gameArray){
    for(let i=0;i<9;i++){if(gameArray[i]==0)return false}
    return true
}

function evaluate(gameArray){
    if(resultChecker(gameArray)==1)return 10;
    else if(resultChecker(gameArray)==2)return -10;
    else return 0;
}



function minimax(gameArray,depth,turnOfPlayer1){
    let score = evaluate(gameArray);
    if(score == 10)return 10;
    if(score==-10)return -10;
    if(gameCompleteChecker(gameArray))return 0;
    if(turnOfPlayer1){
        let best = -1000;
        for (let i=0; i<9;i++){
            if(gameArray[i]==0){
                gameArray[i]=1;
                best = Math.max(best,minimax(gameArray,depth+1,!turnOfPlayer1));
                gameArray[i]=0;
            }
        }
        return best;    
    }
    else{
        let best = 1000;
        for(let i=0;i<9;i++){
            if(gameArray[i]==0){
                gameArray[i]=2;
                best = Math.min(best,minimax(gameArray,depth+1,!turnOfPlayer1));
                gameArray[i]=0;
            }
        }
        return best;
    }
}

function bestMove(gameArray){
    let bestmove = -1;
    let bestvalue = 1000;
    for(let i = 0;i<9;i++){
        if(gameArray[i]==0){
            gameArray[i]=2;
            let movevalue = minimax(gameArray,0,true);
            gameArray[i]=0; 
            if(bestvalue>movevalue){
                bestmove = i;
                bestvalue = movevalue;
            }

        }
        
    }
    
    return bestmove;
}


function show(gameArray){
    let result="";
    for(let i=0;i<9;i++){
        result =result + " "+ gameArray[i];
    }
}

function computerplay(){
    let move = bestMove(gameArray);
}