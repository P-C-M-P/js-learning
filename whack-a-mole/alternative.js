const start = document.getElementById("start")

let mole = document.createElement("img"); 
mole.src="images/mole.png"

let score = 0;
let currentResult = document.getElementById("score")
let currentTime = document.getElementById("time-left");
let time = 60
let gameDuration;

function moveMole(){
    let randomPosition = Math.floor(Math.random() * 9) + 1
    let currentSquare = document.getElementById(String(randomPosition))

    currentSquare.appendChild(mole);

    currentSquare.addEventListener("click", function(){
        score++;
    })

}

function countDown(){
        moveMole();
        currentTime.textContent = time;
        time--;
        currentResult.textContent = score;


    if(time === 0){
        clearInterval(gameDuration)
        alert(`GAME OVER! your score is ${score}`)
    }
}

start.addEventListener("click", () => {
    gameDuration = setInterval(countDown, 1000)
})