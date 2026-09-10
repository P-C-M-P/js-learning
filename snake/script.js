document.addEventListener("DOMContentLoaded", () => {
    const currentScore = document.querySelector(".score")
    const square = document.querySelectorAll(".grid div")
    const start = document.querySelector(".start")
    const pause = document.querySelectorAll(".pause")
    const resume = document.querySelector(".resume")

    const width = 8; // honestly i don't even understand what this does
    let appleIndex = 0;
    let currentIndex = 0;// hello i'm a potato and for some reason hackatime doesn't seem to be working 
    //yayayayayya commments count towards 
    let currentSnake = [2,1,0]

    let score = 0;
    let direction = 1;
    let speed = 0.9;
    let interval = 0;
    let intervalTime = 0;

    let isPaused = false;


    function startGame(){
        currentSnake.forEach(index => square[index].classList.remove("snake"));//removes any snake from all squares
        square[appleIndex].classList.remove("apple");// remove any apples from the squares i think
        clearInterval(interval);// stops the game
        score = 0;// restores the game from a score of 0

        randomApple()
        direction = 1;
        currentScore.innerText = score;
        intervalTime = 1000;
        currentSnake = [2,1,0]
        currentIndex = 0;

        currentSnake.forEach(index => square[index].classList.add("snake"));
        interval = setInterval(moveOutcomes, intervalTime);
    }

    function pauseGame(){
        clearInterval(interval)
        isPaused = true
    }

    function resumeGame(){
        if(isPaused){
            interval = setInterval(moveOutcomes, intervalTime)
            isPaused = false
        }
    }

    function moveOutcomes(){

        if(
            (currentSnake[0] + width >= (width*width) && direction === width) || 
            (currentSnake[0] % width === width -1 && direction === 1) ||
            (currentSnake[0] % width ===  0 && direction === -1) ||
            (currentSnake[0] - width < 0 && direction === -width) ||
            square[currentSnake[0] + direction].classList.contains("snake")
        ){
            return clearInterval(interval)
            alert("hot damn you messed up!")
        }

        const tail = currentSnake.pop()
        square[tail].classList.remove("snake");
        currentSnake.unshift(currentSnake[0] + direction)

        if(square[currentSnake[0]].classList.contains("apple")){
            square[currentSnake[0]].classList.remove("apple")
            square[tail].classList.add("snake")
            currentSnake.push(tail);
            randomApple()
            score++;
            currentScore.textContent = score;
            clearInterval(interval);
            intervalTime = intervalTime * speed;
            interval = setInterval(moveOutcomes, intervalTime)
        }
        square[currentSnake[0]].classList.add("snake")
    }

    function randomApple(){
        do{
            appleIndex = Math.floor(Math.random() * square.length) 
        } while(square[appleIndex].classList.contains("snake"))
        square[appleIndex].classList.add("apple")
    }

    function control(e) {
        square[currentIndex].classList.remove("snake");

        if(e.keyCode === 39){
            direction = 1
        }
        else if(e.keyCode === 38){
            direction = -width
        }
        else if(e.keyCode === 37){
            direction = -1;
        }
        else if(e.keyCode === 40){
            direction = +width
        }
    }

    document.addEventListener("keyup", control)
    start.addEventListener("click", startGame)
    pause.addEventListener("click", pauseGame)
})