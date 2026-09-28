const start = document.getElementById("start");
const restart = document.getElementById("restart");
const stopp = document.getElementById("stop");
const timer = document.getElementById("timer");
const progressFill = document.getElementById("progress-fill");
const beanWrap = document.getElementById("bean-wrap");
const bean = document.getElementById("bean");
const message = document.getElementById("app-message");
const focusSelect = document.getElementById("focus-select");
const breakSelect = document.getElementById("break-select");


const setMessage = (text, running) => {
    message.textContent = text;
    message.classList.toggle("running", running);
};

const dots = document.querySelectorAll(".dot");
const MAX_SESSIONS = 3;
let sessionsDone = 0; 


const updateDots = () => {
    dots.forEach((dot, i) => {
        dot.classList.toggle("done", i < sessionsDone);
    });
};

let mode = "focus"; 
let interval; 


const getTotalTime = () => {
    const minutes = mode === "focus" ? focusSelect.value : breakSelect.value;
    return Number(minutes) * 60;
};

let timeleft = getTotalTime(); 


const updateProgress = () => {
    const total = getTotalTime();
    const percent = ((total - timeleft) / total) * 100;
    progressFill.style.width = `${percent}%`;
    beanWrap.style.left = `${percent}%`;
};

const updateTimer = () => {
    const minutes = Math.floor(timeleft / 60); 
    const seconds = timeleft % 60;

    timer.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    updateProgress();
};


const lockSelects = (locked) => {
    focusSelect.disabled = locked;
    breakSelect.disabled = locked;
};


const setMode = (newMode) => {
    mode = newMode;
    timeleft = getTotalTime();
    updateTimer();
    if (mode === "focus") {
        setMessage("press start to begin", false);
    } else {
        setMessage("break time! press start", false);
    }
};

const showStartButton = () => {
    stopp.classList.add("hidden");
    start.classList.remove("hidden");
};


const startTimer = () => {
   
    if (mode === "focus" && sessionsDone === MAX_SESSIONS) {
        sessionsDone = 0;
        updateDots();
    }
    start.classList.add("hidden");
    stopp.classList.remove("hidden");
    bean.classList.add("bouncing"); 
    lockSelects(true);
    setMessage(mode === "focus" ? "until sword achieved" : "until break is over", true);

    interval = setInterval (() => {
        timeleft--;
        updateTimer();

        if (timeleft === 0) {
            clearInterval(interval);
            bean.classList.remove("bouncing");
            lockSelects(false);
            showStartButton();
            if (mode === "focus") {
                
                sessionsDone = Math.min(sessionsDone + 1, MAX_SESSIONS);
                updateDots();

                if (sessionsDone === MAX_SESSIONS) {
                    
                    setMode("focus");
                    setMessage("master sword claimed! 🗡️", true);
                    return;
                }
            }
            
            setMode(mode === "focus" ? "break" : "focus");
        }
    },
    1000);
}

const stoppTimer = () => {
    clearInterval (interval);
    bean.classList.remove("bouncing");
    lockSelects(false);
    showStartButton();
}

const restartTimer = () => {
    clearInterval(interval);
    bean.classList.remove("bouncing");
    lockSelects(false);
    showStartButton();
    setMode("focus"); 
}


focusSelect.addEventListener("change", () => {
    if (mode === "focus") setMode("focus");
});
breakSelect.addEventListener("change", () => {
    if (mode === "break") setMode("break");
});


start.addEventListener("click", startTimer);
restart.addEventListener("click", restartTimer);
stopp.addEventListener("click", stoppTimer);

updateTimer();
