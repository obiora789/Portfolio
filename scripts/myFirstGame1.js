//My Complete First Game

//getting the Username
    var userName;
do{
userName = prompt("Please enter your name: ");
}
while(userName.length < 3);

(function playerRegex() {
    let regex = /^[A-Za-z]+$/ig;
    let result = regex.test(userName);
    if (result) {
        return result;
    }else {
        alert("Enter your Name to Play");
        document.querySelector('body').innerText = "Refresh and Enter your Name";
        return false;
    }
})();

//sound master
let audio = new Audio();
audio.src = "../sounds/All_I_do.mp3";
audio.play();
audio.loop = true;


function audioMute(){
audio.muted = !audio.muted;
}
    //declare counter
    var counter = 0;

   //score board   
    var score = 0;
    var highScore;
    function displayScore() {
    display = document.getElementById("score");
    display.innerHTML = [userName+"'s Score: "+score+"\n"];
    
    //to display highScore
        if (score > highScore){
            highScore = score;
            display.innerHTML = ["<p>Highscore = "+highScore+"</p>"];        
        }
}

//to make score stop at 0
function stopScore(){
    if(score<0){
        score = 0;
    }
}


//main function
function checkResult() {
    //takes computer guess
    var pcChoice = Math.floor(10 * Math.random()) + 1;
    pcChoice = parseInt(pcChoice);

    //takes user guess between 1 and 10
    var input = document.getElementById("inputNo");
    var user = input.value;
    userChoice = parseInt(user);
    
    //output Panel
    var output = document.getElementById("outputPnl");
    var message;
    counter++;
    if (userChoice < pcChoice) {
        message = userName + ", sorry your guess is too low.";
        output.innerHTML = message;
        score-=5;
        if (counter>4 && [score-=5]){
            maxTrials();
        }
        stopScore();
    }
    else if (userChoice > pcChoice) {
        message = userName + ", sorry your guess is too high.";
        output.innerHTML= message;
        score-=5;
        if (counter>4 && [score-=5]){
            maxTrials();
        }
        stopScore();
    }
    else if(userChoice == pcChoice) {
        message = userName + ", CORRECT!!!";
        output.innerHTML = message;
        score+=5;
        counter = 0;
        }
    else {
        output.innerHTML = "Invalid selection";
        score-=5;
        if (counter>4 && [score-=5]){
            maxTrials();
        }
        stopScore();
    }
displayScore();
}
    //to get no of failed attempts
function maxTrials(){
        output = document.getElementById("outputPnl");
        output.innerHTML = "<p class='div'>Game Over, Restart</p>";
        document.getElementById("restart").style.display = "block";
        document.getElementById("submit").style.display = "none";
        counter = 0;
    }

function restart(){
        document.getElementById("restart").style.display = "none";
        document.getElementById("submit").style.display = "block";
        score = 0;
        output = document.getElementById("outputPnl");
        output.innerHTML = "<p class='div'>Watch this Space!</p>";
        }
