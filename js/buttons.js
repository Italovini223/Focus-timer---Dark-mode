import {
  buttonForest,
  buttonRain,
  buttonCoffeeShop,
  buttonFire,
  buttonLight,
  buttonDark,
} from "./elements.js"
import LightingChanges from "./lightingChanges.js"

let mode = LightingChanges()



export default function Buttons ({sounds}) {

  buttonForest.addEventListener("click", function() {
    sounds.playForest()
  })
  
  buttonRain.addEventListener("click", function() {
    sounds.playRain()
  })
  
  buttonCoffeeShop.addEventListener("click", function() {
  sounds.payCoffeeShop()
  })

  buttonFire.addEventListener("click", function() {
    sounds.PlayFire()
  })


  buttonLight.addEventListener("click", function() {
    mode.dark()
  })

  buttonDark.addEventListener("click", function() {
   mode.light()
  })


}

