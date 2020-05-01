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

var currentWord = 0; //always 0 don't touch
var currentSlide = 1; //always 1 don't touch
var timeout = null;
var paused = true;
var reset = () => {
  if (timeout) clearTimeout(timeout)
  currentWord = 0; //always 0 don't touch
  currentSlide = 1; //always 1 don't touch
  var timeout = null;
  paused = true;
  shuffle(wordList)
  if (song) {
    song.pause()
  }
  document.getElementById("root").innerHTML = '';
  startButton.classList.remove("hidden");
}

var pause = () => {
  paused = true
  if (song) {
    song.pause()
  }
  if (timeout) timeout = null
  startButton.classList.remove("hidden");
  document.getElementById("root").addEventListener("click", start);
}

var cycle = async (img1, img2, pause, cycleLength) =>  {
  var numOfSlides = (cycleLength/pause).toFixed(0)
  var src = document.getElementById("root")
  var img = document.createElement("img");
  img.src = `./images/${img1}`;
  src.appendChild(img);

  currentSlide = 1
  for (let index = 0; index < numOfSlides; index++) {
    if (!paused) {
      var src = document.getElementById("root")
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

var showWords = async (numWords, wordPause) => {
  for (let index = 0; index < numWords; index++) {
    if (!paused) {
      document.getElementById("root").innerHTML = `<span class='sightWord'>${wordList[currentWord]}</span>`;
      timeout = await new Promise(resolve => setTimeout(resolve, wordPause))
      if (currentWord < wordList.length - 1) {
        currentWord++
      } else {
        currentWord = 0
      }
    }
  }
  document.getElementById("root").innerHTML = '';
}

