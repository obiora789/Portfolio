//getting the Username
    var userName;
do{
userName = prompt("Please enter your name: ");
}
while(userName.length < 4);

//sound master
var audio = new Audio("All_I_do.mp3");
audio.loop = true;
audio.play();

function audioMute(){
audio.muted = !audio.muted;
}

    //declare counter
    var i=0;

   //score board   
    var score = 0;
    function displayScore() {
    display = document.getElementById("score");
    display.innerHTML = ["<p><h2>Scoreboard:</h2> "+userName+"'s Score is "+score+".</p>"];
}

//to make score stop at 0
function stopScore(){
    if(score<0){
        score = 0;
    }
}

    //takes computer guess
    var pcChoice = Math.floor(10* Math.random()) + 1;
    pcChoice = parseInt(pcChoice);
    
    //main function
function checkResult() {
      //takes user guess between 1 and 100
    var input = document.getElementById("inputNo");
    var user = input.value;
    userChoice = parseInt(user);
    
    //output Panel
    var output = document.getElementById("outputPnl");
    
    do {
        i++;
        if (pcChoice < userChoice) {
            output.innerHTML = userName + ", sorry your guess was too high.";
            score -= 5;
            stopScore();
            if(i>3){maxTrials();}
            }
        else if (pcChoice > userChoice) {
            output.innerHTML = userName + ", sorry your guess was too low.";
            score -= 5;
            stopScore();
            if(i>3){maxTrials();}
            } 
    } while(pcChoice != userChoice);
     
    if(pcChoice == userChoice){
        output.innerHTML = userName+", CORRECT!!!";
        score +=5;
        displayScore();
    }
}

//display HIGHSCORE
function highScore(){
    getScore = document.getElementById("score");
    getScore.innerHTML = "<h2>HIGHSCORE BOARD</h2><br>"+ userName +" = "+score+".";
}
    
    
    //to get no of failed attempts
function maxTrials(){
        var output = document.getElementById("outputPnl");
        output.innerHTML = "<h3>Game Over, Restart</h3>";
        document.getElementById("restart").style.display = "block";
        document.getElementById("submit").style.display = "none";
        highScore();
        i=0;
    }

//restart function
function restart(){
        document.getElementById("restart").style.display = "none";
        document.getElementById("submit").style.display = "block";
        score = 0;
        }

