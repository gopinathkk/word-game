var start = false;
var time = 0;
var timer = 30;
var keyentry;
var win = false;
var solved = 0;
var unsolved = 0;
var puzzleDisplay = [];
var puzzleWordArray = [];
var wins = document.querySelector("#wins");
var losses = document.querySelector("#losses");
var startButton = document.querySelector("#start");
var wordPuzzle = document.querySelector("#wordPuzzle");
var wins = document.querySelector("#wins");
var losses = document.querySelector("#losses");
var countDownTime = document.querySelector("#countDownTime");
var resetBtn = document.querySelector("#resetBtn")


startButton.addEventListener("click", function (event) {
  event.stopImmediatePropagation;
  start = true;
  timer = 30;
  startButton.textContent="guessing"
  win = false;
  countDownInterval();
  selectWord();
  checkKeyEntry;
});

document.addEventListener("keydown", function (event) {
  event.stopImmediatePropagation;
  keyentry = event.key;
  if (start == true) {
    checkKeyEntry();
  }
});

resetBtn.addEventListener("click", function(event){  
    solved = 0;
    unsolved=0;
    wins.textContent="Wins : " + solved;
    losses.textContent= "Losses : " + unsolved;
    
})


function countDownInterval() {
  if (start == true && win == false) {
    time = setInterval(function () {
      countDown();
    }, 1000);
  } else {
    clearInterval(time);
    timer = 10;
  }
}

function countDown() {
  if (win == false) {
    timer = timer - 1;
    if (timer <= 0) {
      start = false;
      startButton.textContent = "Start"
      clearInterval(time);
      timer = 30;
      countDownTime.textContent = "time over";
      unsolved++;
      losses.textContent = "Losses : " + unsolved;
    } else {
      countDownTime.textContent = timer;
    }
  }
}

function selectWord() {
  if (start == true) {
    var puzzleWord = words[Math.floor(Math.random() * words.length)];
    puzzleWordArray = puzzleWord.split("");
    puzzleDisplay = puzzleWord.split("");
    puzzleDisplay.fill("_");
    console.log(puzzleWordArray);
    console.log(puzzleDisplay);
    wordPuzzle.innerHTML = puzzleDisplay.join(" ");
  }
}

function checkKeyEntry() {
  if (start == true && win == false) {
    keyentry = keyentry.toLowerCase();
    for (var i = 0; i < puzzleWordArray.length; i++) {
      if (puzzleWordArray[i] == keyentry) {
        puzzleDisplay[i] = keyentry;
        wordPuzzle.innerHTML = puzzleDisplay.join(" ");
      }
    }
    if (puzzleDisplay.indexOf("_") === -1) {
      clearInterval(time);
      start = false;
      startButton.textContent = "Start"
      win = true;
      solved++;
      wins.textContent = "Wins : " + solved;
      
    }
  }
}

var words = [
  "abruptly",
  "absurd",
  "buffalo",
  "duplex",
  "fluffiness",
  "funny",
  "galaxy",
  "glowworm",
  "icebox",
  "jackpot",
  "jogging",
  "keyhole",
  "kiwifruit",
  "lucky",
  "matrix",
  "nightclub",
  "oxygen",
  "peekaboo",
  "quiz",
  "strength",
  "travel",
  "unknown",
  "wave",
  "youth",
  "zoo",
];
