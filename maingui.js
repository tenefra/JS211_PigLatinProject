"use strict"

const convert = () => {
  let word = document.querySelector(".user-input").value
  word = word.toLowerCase().trim()
  const vowels = ["a", "e", "i", "o", "u"]
  let vowelIndex = 0

  // Not sure what to do here yet since the lower code uses string methods.
  // if (word.includes(" ")) {
  //   word.split(" ")
  // }

  if (vowels.includes(word[0])) {
    document.querySelector(".word-output").innerHTML = word + "yay"
  } else {
    for (let char of word) {
      if (vowels.includes(char)) {
        vowelIndex = word.indexOf(char)
        break
      }
    }
    document.querySelector(".word-output").innerHTML = word.slice(vowelIndex) + word.slice(0, vowelIndex) + "ay"
  }
}
