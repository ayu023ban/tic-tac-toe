const zero = "./zero.png"
const cross = "./cross.png"
let turnOfPlayer1 = true;
const position = document.querySelectorAll('.box');
const resultDiv = document.querySelector('#result');

let gameArray = [0,0,0,0,0,0,0,0,0];
for(let i=0;i<9;i++){
    position[i].addEventListener("click",()=>{run(i)});
}
function run(pos){
    let result=0
    result = resultChecker();
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
    result = resultChecker();
    console.log(gameCompleteChecker());
    if(result==1){
        resultDiv.innerHTML="<h1>congratulations player 1 won the match</h1>";
    }
    else if (result==2){
        resultDiv.innerHTML="<h1>congratulations player 2 won the match</h1>";
    }
    else if(gameCompleteChecker()){
        resultDiv.innerHTML="<h1> the match is drawn.</h1>"
    }
}

function turn(){
    turnOfPlayer1 = !turnOfPlayer1;
    return !turnOfPlayer1;
}

function resultChecker(){
    let combination = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    for(let i =0;i<8;i++){
            if(gameArray[combination[i][0]]==1&&gameArray[combination[i][1]]==1&&gameArray[combination[i][2]]==1)
            return 1;
            if(gameArray[combination[i][0]]==2&&gameArray[combination[i][1]]==2&&gameArray[combination[i][2]]==2)
            return 2;        
    }
return 0
}
function gameCompleteChecker(){
    for(let i=0;i<9;i++){if(gameArray[i]==0)return false}
    return true
}