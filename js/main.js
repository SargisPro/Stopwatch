// * Timer fields
const hourElement = document.querySelector('.hour');
const minuteElement = document.querySelector('.minute');
const secondElement = document.querySelector('.second');
const milisecondElement = document.querySelector('.milisecond');

// * btn
const startBtn = document.querySelector('.start');
const pausetBtn = document.querySelector('.pause');
const stopBtn = document.querySelector('.stop');
const newBtn = document.querySelector('.new');

// * Events
startBtn.addEventListener('click', () => {
  clearInterval(interval);
  interval = setInterval(stratTimer, 10);
});

pausetBtn.addEventListener('click', () => {
  clearInterval(interval);
});

stopBtn.addEventListener('click', () => {
  clearInterval(interval);
  clearFields();
});

newBtn.addEventListener('click', () => {
  const res = document.querySelector('.results');
  const resultsTime = document.createElement('div');
  const resultsBlock = document.querySelector('.results');
  resultsBlock.style.display = 'block';
  resultsTime.classList.add('results__time');
  resultsTime.textContent = `Results: ${hour}: ${minute}: ${second}: ${milisecond}`;
  res.appendChild(resultsTime);
});

// * Variables
let hour = 00,
    minute = 00,
    second = 00,
    milisecond= 00,
    interval



function stratTimer() {
  milisecond++;
  if (milisecond < 9) {
    milisecondElement.innerText = '0' + milisecond;
  };

  if(milisecond > 9 ) {
    milisecondElement.innerText = milisecond;
  };

  if ( milisecond > 99) {
    second++;
    secondElement.innerText = '0' + second;
    milisecond = 0;
    milisecondElement.innerText = '0' + milisecond;
  };

  // * Second 
  if(second < 9) {
    secondElement.innerText = '0' + second;
  };

  if (second > 9) {
    secondElement.innerText = second;
  };
  
  if (second >= 60) {
    minute++
    milisecondElement.innerText = '0' + minute;
    second = 00;
    secondElement.innerText = '0' + second;
  };
  
  // * Minutes
  if (minute < 9) {
    minuteElement.innerText = '0' + minute;
  };

  if (minute > 9) {
    minuteElement.innerText = minute;
  };

  // * Hour 
  if (minute > 59) {
    hour++;
    hourElement.innerText = '0' + hour;
    minute = 00;
  };

};


function clearFields() {
  hour = 00,
  minute = 00,
  second = 00,
  milisecond= 00
  hourElement.textContent = '00';
  minuteElement.textContent = '00';
  secondElement.textContent = '00';
  milisecondElement.textContent ='00';

    
};