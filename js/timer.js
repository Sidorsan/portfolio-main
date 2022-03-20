const timerBlock = document.querySelector(".timer__time");
const deadLine = "31 march 2022";

let interval;

const updateClock = () => {
  const date = new Date().getTime();
  const dateDeadline = new Date(deadLine).getTime();
  const timeRemaining = (dateDeadline - date) / 1000;
  
  const day = Math.floor((timeRemaining / 60 / 60 / 24) % 24);
  const hours = Math.floor((timeRemaining / 60 / 60) % 60);
  const minutes = Math.floor((timeRemaining / 60) % 60);
  const seconds = Math.floor(timeRemaining % 60);
  
  
  const fHorse = hours < 10 ? "0" + hours : hours;
  const fMinutes = minutes < 10 ? "0" + minutes : minutes;
  const fSeconds = seconds < 10 ? "0" + seconds : seconds;

  timerBlock.textContent = `${day}d ${fHorse}h ${fMinutes}m ${fSeconds}s`;
  if (timeRemaining <= 0) {
    clearInterval(interval);
    timerBlock.textContent = `00:00:00`;
  }
};
interval = setInterval(updateClock, 500);
