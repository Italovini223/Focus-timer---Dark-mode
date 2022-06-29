const play = document.querySelector(".play")
const add = document.querySelector(".add")
const stop = document.querySelector(".stop")
const sub = document.querySelector(".sub")

const buttonRain = document.querySelector("#rain")
const buttonForest = document.querySelector("#forest")
const buttonCoffeeShop = document.querySelector("#coffeeShop")
const buttonFire = document.querySelector("#fire")

const forestSound =  document.querySelector(".forestAudio")
const rainSound = document.querySelector(".rainAudio")
const coffeeShopSound = document.querySelector(".coffeeShopAudio")
const fireSound = document.querySelector(".fireAudio")

let forestInput = document.querySelector("#forestVolume")
let rainInput = document.querySelector("#volumeRain")
let coffeeShopInput = document.querySelector("#coffeeShopVolume")
let fireInput = document.querySelector("#fireVolume")


const buttonLight = document.querySelector(".light")
const buttonDark = document.querySelector(".dark")


let minutesDisplay = document.querySelector(".minutes")
let secondsDisplay= document.querySelector(".seconds")
let seconds = Number(secondsDisplay.textContent)


export {
  play,
  add,
  stop,
  sub,
  buttonRain,
  buttonCoffeeShop,
  buttonForest,
  buttonFire,
  minutesDisplay,
  secondsDisplay,
  seconds,
  buttonLight,
  buttonDark,
  forestSound,
  rainSound,
  coffeeShopSound,
  fireSound,
  forestInput,
  rainInput,
  coffeeShopInput,
  fireInput,

}