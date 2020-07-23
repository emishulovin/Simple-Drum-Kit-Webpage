let numDrums = document.querySelectorAll(".drum").length
for (let i = 0; i < numDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", playSound);
  document.querySelectorAll(".drum")[i].addEventListener("keydown", playSound);

}


function playSound(event) {
  let drumElement = event.key ? event.key : event.target.innerHTML
  console.log(drumElement)
  let soundFile = (drumElement === 'w' ? "tom-1" :
    drumElement === 'a' ? "tom-2" :
    drumElement === 's' ? "tom-3" :
    drumElement === 'd' ? "tom-4" :
    drumElement === 'j' ? "snare" :
    drumElement === 'k' ? "crash" :
    drumElement === 'l' ? "kick-bass"
    : "")

  if (soundFile) {
    let sound = new Audio(`sounds/${soundFile}.mp3`)
    sound.play()
  }

}
