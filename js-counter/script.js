let counter = document.getElementById("counter");
let count = 0;
const decrease = document.getElementById("decrease")
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");

decrease.onclick = function(){
    count--;
    counter.textContent = count;
    counter.style.color = "red";
}
reset.onclick = function(){
    count = 0;
    counter.textContent = count;
    counter.style.color = "black";
}
increase.onclick = function(){
    count++;
    counter.textContent = count;
    counter.style.color = "green";
}

