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
var interval = null;  //always null don't touch
var timeout = null;
var reset = () => {
  if (interval) clearInterval(interval)
  if (timeout) clearTimeout(timeout)
  currentWord = 0; //always 0 don't touch
  currentSlide = 1; //always 1 don't touch
  interval = null;  //always null don't touch
  var timeout = null;
  shuffle(wordList)
  if (song) {
    song.pause()
  }
  document.getElementById("root").innerHTML = '';
  startButton.classList.remove("hidden");
}

var pause = () => {
  if (song) {
    song.pause()
  }
  if (interval) clearInterval(interval)
  startButton.classList.remove("hidden");
  document.getElementById("root").addEventListener("click", start);
}

var cycle = (img1, img2, pause) =>  {
  var src = document.getElementById("root")
  var img = document.createElement("img");
  img.src = `./images/${img1}`;
  src.appendChild(img);

  currentSlide = 2
  interval = setInterval(() => {
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
  }, pause)
}

var wait = async pauseTime => {
  timeout = await new Promise(resolve => setTimeout(resolve, pauseTime))
  clearInterval(interval)
}

var showWords = async (numWords, wordPause) => {
  for (let index = 0; index < numWords; index++) {
    document.getElementById("root").innerHTML = `<span class='sightWord'>${wordList[currentWord]}</span>`;
    await new Promise(resolve => setTimeout(resolve, wordPause))
    if (currentWord < wordList.length - 1) {
      currentWord++
    } else {
      currentWord = 0
    }
  }
  document.getElementById("root").innerHTML = '';
}

