// const startPauseBtn = document.getElementById('start-pause-btn');
// const resetButton = document.getElementById('reset-btn');
// const displayTimer = document.getElementById('timer');

// let timeInterval;

// let timeFlip = {
//   seconds: 0,
//   minutes: 0,
//   hours: 0
// }

// let leadingZeros = {
//   leadingSeconds: 0,
//   leadingMinutes: 0,
//   leadingHours: 0
// }

// let isRunning = false;

// function startTime() {
//   timeFlip.seconds++;

//   if (timeFlip.seconds === 60) {
//     timeFlip.seconds = 0;
//     timeFlip.minutes++;

//     if (timeFlip.minutes === 60) {
//       timeFlip.minutes = 0;
//       timeFlip.hours++;
//     }
//   }

//   if (timeFlip.seconds < 10) {
//     leadingZeros.leadingSeconds = `0${timeFlip.seconds.toString()}`;
//   } else {
//     leadingZeros.leadingSeconds = timeFlip.seconds;
//   }

//   if (timeFlip.minutes < 10) {
//     leadingZeros.leadingMinutes = `0${timeFlip.minutes.toString()}`;
//   } else {
//     leadingZeros.leadingMinutes = timeFlip.minutes;
//   }

//   if (timeFlip.hours < 10) {
//     leadingZeros.leadingHours = `0${timeFlip.hours.toString()}`;
//   } else {
//     leadingZeros.leadingHours = timeFlip.hours;
//   }

//   displayTimer.innerHTML = `${leadingZeros.leadingHours}:${leadingZeros.leadingMinutes}:${leadingZeros.leadingSeconds}`;
// }

// startPauseBtn.addEventListener('click', () => {
//   if (!isRunning) {
//     timeInterval = setInterval(startTime, 1000);
//     isRunning = true;
//     startPauseBtn.innerHTML = `<i class="fa fa-pause" id='pause'></i>`;
//   } else {
//     window.clearInterval(timeInterval);
//     isRunning = false;
//     startPauseBtn.innerHTML = `<i class="fa fa-play"></i>`;
//   }
// })

// resetButton.addEventListener('click', () => {
//   window.clearInterval(timeInterval);
//   isRunning = false;
//   timeFlip.seconds = 0;
//   timeFlip.minutes = 0;
//   timeFlip.hours = 0;
//   leadingZeros.leadingSeconds = "00";
//   leadingZeros.leadingMinutes = "00";
//   leadingZeros.leadingHours = "00";
//   timerDisplay.innerHTML = `${leadingZeros.leadingHours}:${leadingZeros.leadingMinutes}:${leadingZeros.leadingSeconds}`;
//   startPauseBtn.innerHTML = `<i class="fa fa-play" aria-hidden="true"></i>`;
// })

const startStopButton = document.getElementById("start-pause-btn");
const resetButton = document.getElementById("reset-btn");
const timerDisplay = document.getElementById("timer");

const timeChange = {
  seconds: 0,
  minutes: 0,
  hours: 0
}

const leadingZeros = {
  leadingSeconds: 0,
  leadingMinutes: 0,
  leadingHours: 0
}

let timerInterval;
let isRunning = false;

function startTimer() {
  timeChange.seconds++;

  if (timeChange.seconds === 60) {
    timeChange.seconds = 0;
    timeChange.minutes++;

    if (timeChange.minutes === 60) {
      timeChange.minutes = 0;
      timeChange.hours++;
    }
  }

  if (timeChange.seconds < 10) {
    // leadingZeros.leadingSeconds = "0" + timeChange.seconds.toString();
    leadingZeros.leadingSeconds = `0${timeChange.seconds.toString()}`;
  } else {
    leadingZeros.leadingSeconds = timeChange.seconds;
  }

  if (timeChange.minutes < 10) {
    // leadingZeros.leadingMinutes = "0" + timeChange.minutes.toString();
    leadingZeros.leadingMinutes = `0${timeChange.minutes.toString()}`;
  } else {
    leadingZeros.leadingMinutes = timeChange.minutes;
  }

  if (timeChange.hours < 10) {
    // leadingZeros.leadingHours = "0" + timeChange.hours.toString();
    leadingZeros.leadingHours = `0${timeChange.hours.toString()}`;
  } else {
    leadingZeros.leadingHours = timeChange.hours;
  }

  timerDisplay.innerHTML = `${leadingZeros.leadingHours}:${leadingZeros.leadingMinutes}:${leadingZeros.leadingSeconds}`;
}

startStopButton.addEventListener('click', () => {
  if (!isRunning) {
    timerInterval = setInterval(startTimer, 1000);
    isRunning = true;
    startStopButton.innerHTML = `<i class="fa fa-pause" aria-hidden="true" id='pause'></i>`;
  } else {
    window.clearInterval(timerInterval);
    isRunning = false;
    startStopButton.innerHTML = `<i class="fa fa-play" aria-hidden="true"></i>`;
  }
})

resetButton.addEventListener('click', () => {
  window.clearInterval(timerInterval);
  isRunning = false;
  timeChange.seconds = 0;
  timeChange.minutes = 0;
  timeChange.hours = 0;
  leadingZeros.leadingSeconds = "00";
  leadingZeros.leadingMinutes = "00";
  leadingZeros.leadingHours = "00";
  timerDisplay.innerHTML = `${leadingZeros.leadingHours}:${leadingZeros.leadingMinutes}:${leadingZeros.leadingSeconds}`;
  startStopButton.innerHTML = `<i class="fa fa-play" aria-hidden="true"></i>`;
})

