var currentWord = 0; //always 0 don't touch
var currentSlide = 1; //always 1 don't touch
var timeout = null;
var paused = true;
var root = document.getElementById("root")

document.addEventListener("DOMContentLoaded", function(){
  document.getElementById("header").innerHTML = `<div>${header}</div>`
  document.getElementById("subheader").innerHTML = `<div>${subheader}</div>`
});

var reset = () => {
  if (timeout) clearTimeout(timeout)
  paused = true;
  shuffle(wordList)
  if (song) {
    song.pause()
  }
  root.innerHTML = '';
  startButton.classList.remove("hidden");
  root.removeEventListener("click", pause)
  root.addEventListener("click", start);
}

var pause = () => {
  reset()
  root.innerHTML = `<div class="footer">${footer}</div>`
}

var cycle = async (img1, img2, pause, cycleLength) =>  {
  if (timeout) clearTimeout(timeout)
  if (!paused) {
    var numOfSlides = (cycleLength/pause).toFixed(0)
    var src = root
    var img = document.createElement("img");
    img.src = `./images/${img1}`;
    src.appendChild(img);
  
    currentSlide = 1
    for (let index = 0; index < numOfSlides; index++) {
      if (!paused) {
        var src = root
        src.innerHTML = '';
        var img = document.createElement("img");
        if (currentSlide === 1) {
          img.src = `./images/${img1}`;
          currentSlide = 2;
        } else {
          img.src = `./images/${img2}`;
          currentSlide = 1
        }
    
        src.appendChild(img);
        timeout = await new Promise(resolve => setTimeout(resolve, pause))
      }
    }  
  }
}

var showWords = async (numWords, wordPause) => {
  if (timeout) clearTimeout(timeout)
  if (!paused) {
    for (let index = 0; index < numWords; index++) {
      if (!paused) {
        root.innerHTML = `<span class='sightWord'>${wordList[currentWord]}</span>`;
        timeout = await new Promise(resolve => setTimeout(resolve, wordPause))
        if (currentWord < wordList.length - 1) {
          currentWord++
        } else {
          currentWord = 0
        }
      }
    }
    root.innerHTML = '';  
  }
}

var playSong =  () => {
  song.volume = volume
  song.currentTime = 0 //restart the song
  paused = false
  song.play()
  var startButton = document.getElementById("startButton");
  startButton.classList.add("hidden");
  document.getElementById("root").addEventListener("click", pause);
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

