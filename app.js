var exerciseSpeed = 800; //time between exercise images
var exerciseLength = 3000; //total exercise time
var wordPause = 2000; //pause between changing words
var wordList = ['am','and','at','are','can','come','go','for','like','got','me','here','see','not','the','play','to','said ','is','you','dad','day','he','down','in','into','it','looking','look','she','mom','they','my','went','on','where','up','will','we','your','I','out','a','what','has','this','that','want'] // e.g. ['the','look','good']
var song = new Audio('./sounds/HappyPlace.mp3')
var volume = 0.5 // 0.5 = 50%

var header = "Mrs. Thul's"
var subheader = "Read & Exercise!"

var footer = "Have a good day!"

var start = async () => {
  currentWord = 0; //always 0 don't touch
  currentSlide = 1; //always 1 don't touch
  playSong();

  await showWords(6, wordPause)
  await cycle('pushup1.png','pushup2.png', exerciseSpeed, exerciseLength)

  await showWords(6, wordPause)
  await cycle('jumpingjack1.png','jumpingjack2.png', exerciseSpeed, exerciseLength)
  
  await showWords(6, wordPause)
  await cycle('lunge1.png','lunge2.png', exerciseSpeed, exerciseLength)

  await showWords(6, wordPause)
  await cycle('squat1.png','squat2.png', exerciseSpeed, exerciseLength)

  await showWords(6, wordPause)
  await cycle('crunch1.png','crunch2.png', exerciseSpeed, exerciseLength)

  reset()
  document.getElementById("root").innerHTML = `<div class="footer">${footer}</div>`
}





