const start = document.getElementById("start");
let squares = document.querySelectorAll(".square")
const controls = document.querySelector("#controls")
const Pause = document.querySelector("#pause")
const Resume = document.querySelector("#resume")
const Restart = document.querySelector("#reStart")
const topBar = document.getElementById("topBar")


let mole = document.createElement("img"); 
mole.src="images/mole.png"

let score = 0;
let currentResult = document.getElementById("score")
let currentTime = document.getElementById("time-left");
let time = 60
let storedTime;
let gameDuration;
let previousSquare = null;
let isPaused = false;

function moveMole(){
    let randomPosition = Math.floor(Math.random() * 9) + 1
    let currentSquare = document.getElementById(String(randomPosition))

    currentSquare.appendChild(mole);

    squares.forEach(function(square){
        square.onclick = function(){
            if(square === currentSquare){
                score++;
                mole.remove()
                currentResult.onclick = null;
            }   
        };
    });
 
/*
    if(previousSquare){
        previousSquare.onclick = null;
    }

    if(currentSquare.contains(mole)){
        currentSquare.onclick = function(){
            score++;
        }
    }*/

   // previousSquare = currentSquare;
}

function countDown(){
        

    if(time === -1){
        alert(`GAME OVER! your score is ${score}`)
        clearInterval(gameDuration)
        // time = 60;
        // score = 0;
    }
    else{
        moveMole();
        currentTime.textContent = "Time-left: " + time;
       // storedTime = time;
        currentResult.textContent = "Score: " + score;
        time--;
    }
}

start.addEventListener("click", () => {
    start.style.display = "none";
    controls.style.display = "inline-block";
    topBar.style.display = "flex"
    gameDuration = setInterval(countDown, 1000)
})

Pause.addEventListener("click", () => {
    clearInterval(gameDuration)
    isPaused = true
})

Resume.addEventListener("click", () => {
    if(isPaused){
        gameDuration = setInterval(countDown, 1000)
        isPaused = false
    }
})

Restart.addEventListener("click", () => {
    clearInterval(gameDuration)
    time = 60;
    score = 0;
    currentTime.textContent = time;
    currentResult.textContent = score;
    gameDuration = setInterval(countDown, 1000)
})