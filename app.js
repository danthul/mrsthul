var exerciseSpeed = 1000; //time between exercise images
var exerciseLength = 10000; //total exercise time
var wordPause = 2500; //pause between changing words
var wordList = ['am','and','at','are','can','come','go','for','like','got','me','here','see','not','the','play','to','said ','is','you','dad','day','he','down','in','into','it','looking','look','she','mom','they','my','went','on','where','up','will','we','your','I','out','a','what','has','this','that','want'] // e.g. ['the','look','good']
var song = new Audio('./sounds/HappyPlace.mp3')

var start = async () => {
  song.volume = 0.5

  song.play()
  var startButton = document.getElementById("startButton");
  startButton.classList.add("hidden");

  await showWords(2, wordPause)
  cycle('pushup1.png','pushup2.png', exerciseSpeed)
  await wait(exerciseLength)

  await showWords(6, wordPause)
  cycle('jumpingjack1.png','jumpingjack2.png', exerciseSpeed)
  await wait(exerciseLength)
  
  await showWords(6, wordPause)
  cycle('lunge1.png','lunge2.png', exerciseSpeed)
  await wait(exerciseLength)

  reset()
  document.getElementById("root").addEventListener("click", pause);
}


