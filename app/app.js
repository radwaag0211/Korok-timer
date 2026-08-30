// TODO: Timer 
const start = document.getElementById("start");
const restart = document.getElementById("restart");
const stopp = document.getElementById("stop");
const timer = document.getElementById("timer");

let timeleft = 1500; // total seconds 
let interval; // constantly updated (currrent time)

const updateTimer = () => {
    const minutes = Math.floor(timeleft / 60); // how many minutes inside 15000 seconds
    const seconds = timeleft % 60; 

    timer.innerHTML = `${minutes.toString().padStart(2, "0")}
    : 
    ${seconds.toString().padStart(2, "0")}`;

}; 

// when you click on the start botton 
const startTimer = () => {
    start.classList.add("hidden");
    stopp.classList.remove("hidden");
    interval = setInterval (() => {
        timeleft--;
        updateTimer();

        if (timeleft === 0) {
            clearInterval(interval);
            alert ("Times up!");
            timeleft = 1500; 
            updateTimer(); 
        }
    },
    1000); 
}

const stoppTimer = () => {
    clearInterval (interval); 
    start.classList.remove("hidden");
    stopp.classList.add("hidden");
}


const restartTimer = () => {
    clearInterval(interval); 
    timeleft = 1500; 
    start.classList.add("hidden");
    stopp.classList.remove("hidden");
    updateTimer();
}

// event listener for the buttons 
start.addEventListener("click", startTimer);
restart.addEventListener("click", restartTimer);
stopp.addEventListener("click", stoppTimer);
