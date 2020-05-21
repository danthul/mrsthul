"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var currentWord = 0; //always 0 don't touch

var currentSlide = 1; //always 1 don't touch

var timeout = null;
var paused = true;
var root = document.getElementById("root");
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("header").innerHTML = "<div>".concat(header, "</div>");
  document.getElementById("subheader").innerHTML = "<div>".concat(subheader, "</div>");
});

var reset = function reset() {
  if (timeout) clearTimeout(timeout);
  paused = true;
  shuffle(wordList);

  if (song) {
    song.pause();
  }

  root.innerHTML = '';
  startButton.classList.remove("hidden");
  root.removeEventListener("click", pause);
  root.addEventListener("click", start);
};

var pause = function pause() {
  reset();
  root.innerHTML = "<div class=\"footer\">".concat(footer, "</div>");
};

var cycle = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(img1, img2, pause, cycleLength) {
    var numOfSlides, src, img, index;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (timeout) clearTimeout(timeout);

            if (paused) {
              _context.next = 22;
              break;
            }

            numOfSlides = (cycleLength / pause).toFixed(0);
            src = root;
            img = document.createElement("img");
            img.src = "./images/".concat(img1);
            src.appendChild(img);
            currentSlide = 1;
            index = 0;

          case 9:
            if (!(index < numOfSlides)) {
              _context.next = 22;
              break;
            }

            if (paused) {
              _context.next = 19;
              break;
            }

            src = root;
            src.innerHTML = '';
            img = document.createElement("img");

            if (currentSlide === 1) {
              img.src = "./images/".concat(img1);
              currentSlide = 2;
            } else {
              img.src = "./images/".concat(img2);
              currentSlide = 1;
            }

            src.appendChild(img);
            _context.next = 18;
            return new Promise(function (resolve) {
              return setTimeout(resolve, pause);
            });

          case 18:
            timeout = _context.sent;

          case 19:
            index++;
            _context.next = 9;
            break;

          case 22:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function cycle(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();

var showWords = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(numWords, wordPause) {
    var index;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (timeout) clearTimeout(timeout);

            if (paused) {
              _context2.next = 14;
              break;
            }

            index = 0;

          case 3:
            if (!(index < numWords)) {
              _context2.next = 13;
              break;
            }

            if (paused) {
              _context2.next = 10;
              break;
            }

            root.innerHTML = "<span class='sightWord'>".concat(wordList[currentWord], "</span>");
            _context2.next = 8;
            return new Promise(function (resolve) {
              return setTimeout(resolve, wordPause);
            });

          case 8:
            timeout = _context2.sent;

            if (currentWord < wordList.length - 1) {
              currentWord++;
            } else {
              currentWord = 0;
            }

          case 10:
            index++;
            _context2.next = 3;
            break;

          case 13:
            root.innerHTML = '';

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function showWords(_x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

var playSong = function playSong() {
  song.volume = volume;
  song.currentTime = 0; //restart the song

  paused = false;
  song.play();
  var startButton = document.getElementById("startButton");
  startButton.classList.add("hidden");
  document.getElementById("root").addEventListener("click", pause);
};

function shuffle(array) {
  var currentIndex = array.length,
      temporaryValue,
      randomIndex; // While there remain elements to shuffle...

  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1; // And swap it with the current element.

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

var exerciseSpeed = 800; //time between exercise images

var exerciseLength = 6000; //total exercise time

var wordPause = 2000; //pause between changing words

var wordList = ['am', 'and', 'at', 'are', 'can', 'come', 'go', 'for', 'like', 'got', 'me', 'here', 'see', 'not', 'the', 'play', 'to', 'said ', 'is', 'you', 'dad', 'day', 'he', 'down', 'in', 'into', 'it', 'looking', 'look', 'she', 'mom', 'they', 'my', 'went', 'on', 'where', 'up', 'will', 'we', 'your', 'I', 'out', 'a', 'what', 'has', 'this', 'that', 'want']; // e.g. ['the','look','good']

var song = new Audio('./sounds/HappyPlace.mp3');
var volume = 0.5; // 0.5 = 50%

var header = "Mrs. Thul's";
var subheader = "Sight Word Fitness!";
var footer = "Way to go!";

var start = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            shuffle(wordList);
            currentWord = 0; //always 0 don't touch

            currentSlide = 1; //always 1 don't touch

            playSong();
            _context3.next = 6;
            return showWords(6, wordPause);

          case 6:
            _context3.next = 8;
            return cycle('pushup1.jpg', 'pushup2.jpg', exerciseSpeed, exerciseLength);

          case 8:
            _context3.next = 10;
            return showWords(6, wordPause);

          case 10:
            _context3.next = 12;
            return cycle('jumpingjack1.jpg', 'jumpingjack2.jpg', exerciseSpeed, exerciseLength);

          case 12:
            _context3.next = 14;
            return showWords(6, wordPause);

          case 14:
            _context3.next = 16;
            return cycle('lunge1.jpg', 'lunge2.jpg', exerciseSpeed, exerciseLength);

          case 16:
            _context3.next = 18;
            return showWords(6, wordPause);

          case 18:
            _context3.next = 20;
            return cycle('squat1.jpg', 'squat2.jpg', exerciseSpeed, exerciseLength);

          case 20:
            _context3.next = 22;
            return showWords(6, wordPause);

          case 22:
            _context3.next = 24;
            return cycle('crunch1.jpg', 'crunch2.jpg', exerciseSpeed, exerciseLength);

          case 24:
            reset();
            document.getElementById("root").innerHTML = "<div class=\"footer\">".concat(footer, "</div>");

          case 26:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function start() {
    return _ref3.apply(this, arguments);
  };
}();