let numDrums = document.querySelectorAll(".drum").length
for (let i = 0; i < numDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
  document.querySelectorAll(".drum")[i].addEventListener("keydown", handleClick);

}

function handleClick(event) {
  let drumElement = event.key ? event.key : event.target.innerHTML
  playSound(drumElement);
  buttonAnimation(drumElement)
}

function playSound(drumElement) {


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

function buttonAnimation(drumElement) {
  let activateButton = document.querySelector("." + drumElement)
  activateButton.classList.add("pressed")

  setTimeout(function () {
    activateButton.classList.remove("pressed")
  },50)}
