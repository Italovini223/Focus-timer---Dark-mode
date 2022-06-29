import {
  forestSound,
  rainSound,
  coffeeShopSound,
  fireSound,
  forestInput,
  rainInput,
  coffeeShopInput,
  fireInput
} from"./elements.js"



function changeVolume (input, audio) {
  let Volume = input.value / 100
  audio.volume = Volume
}

export default function setVolume() {

  function forest() {
    forestInput.addEventListener("change", () => {
     changeVolume(forestInput, forestSound)
    })
  }

  function rain () {
    rainInput.addEventListener("change", () => {
      changeVolume(rainInput, rainSound)
    })
  }

  function coffeeShop () {
    coffeeShopInput.addEventListener("change", () => {
      changeVolume(coffeeShopInput, coffeeShopSound)
    })
  }

  function fire() {
    fireInput.addEventListener("change",() => {
      changeVolume(fireInput, fireSound)
    })
  }

  return {
    forest,
    rain,
    coffeeShop,
    fire
  }
}
