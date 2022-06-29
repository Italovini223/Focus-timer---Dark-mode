
const playLight = document.querySelector(".playLight")
const playDark = document.querySelector(".playDark")
const stopLight = document.querySelector(".stopLight")
const stopDark = document.querySelector(".stopDark")
const addLight = document.querySelector(".addLight")
const addDark= document.querySelector(".addDark")
const subLight = document.querySelector(".subLight")
const subDark = document.querySelector(".subDark")


import {
  buttonLight, 
  buttonDark, 
  buttonForest,
  buttonRain,
  buttonCoffeeShop,
  buttonFire,
  forestInput,
  rainInput,
  coffeeShopInput,
  fireInput
} from "./elements.js"

function changeButtons (remove, add) {
  remove.classList.add("hide")
  add.classList.remove("hide")
}



function buttonsDark () {
   changeButtons(buttonLight, buttonDark)
    changeButtons(playLight, playDark)
    changeButtons(stopLight, stopDark)
    changeButtons(addLight, addDark)
    changeButtons(subLight, subDark)



  

    buttonFire.classList.add("onFocusButton", "buttonDark")
    buttonCoffeeShop.classList.add("onFocusButton", "buttonDark")
    buttonForest.classList.add("onFocusButton", "buttonDark")
    buttonRain.classList.add("onFocusButton", "buttonDark")

    forestInput.classList.add("inputDark")
    rainInput.classList.add("inputDark")
    coffeeShopInput.classList.add("inputDark")
    fireInput.classList.add("inputDark")
}

function buttonsLight() {
  changeButtons(buttonDark, buttonLight)
  changeButtons(playDark, playLight)
  changeButtons(stopDark, stopLight)
  changeButtons(addDark, addLight)
  changeButtons(subDark, subLight)


  buttonFire.classList.remove("onFocusButton", "buttonDark")
  buttonCoffeeShop.classList.remove("onFocusButton", "buttonDark")
  buttonForest.classList.remove("onFocusButton", "buttonDark")
  buttonRain.classList.remove("onFocusButton", "buttonDark")

  forestInput.classList.remove("inputDark")
  rainInput.classList.remove("inputDark")
  coffeeShopInput.classList.remove("inputDark")
  fireInput.classList.remove("inputDark")
}

export default function LightingChanges () {
  function dark() {
    document.body.style.background = "black"
    document.body.style.color = "white"

    buttonsDark()

  }

  function light() {
    document.body.style.background = "white"
    document.body.style.color = "black"

    buttonsLight()
  }

  return {
    light,
    dark
  }
}