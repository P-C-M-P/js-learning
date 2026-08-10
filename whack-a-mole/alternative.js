const start = document.getElementById("start");
let squares = document.querySelectorAll(".square")

let mole = document.createElement("img"); 
mole.src="images/mole.png"

let score = 0;
let currentResult = document.getElementById("score")
let currentTime = document.getElementById("time-left");
let time = 60
let gameDuration;
let previousSquare = null;

function moveMole(){
    let randomPosition = Math.floor(Math.random() * 9) + 1
    let currentSquare = document.getElementById(String(randomPosition))

    currentSquare.appendChild(mole);

    squares.forEach(function(square){
        square.onclick = function(){
            if(square === currentSquare){
                score++;
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
        moveMole();
        currentTime.textContent = time;
        time--;
        currentResult.textContent = score;


    if(time === 0){
        clearInterval(gameDuration)
        alert(`GAME OVER! your score is ${score}`)
        time = 60;
        score = 0;
    }
}

start.addEventListener("click", () => {
    gameDuration = setInterval(countDown, 1000)
})