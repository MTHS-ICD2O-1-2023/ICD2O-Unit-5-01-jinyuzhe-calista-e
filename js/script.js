// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Calista.E
// Created on: Apr.2024
// This file contains the JS functions for index.html

const randomNumber = Math.floor(Math.random() * 6) + 1
console.log(randomNumber)

/**
 * This function checks if the user has selected the random number from above
 */

function checkNumber() {
  // input
  const userNumber = parseInt(document.getElementById("user-number").value)

  // process
  if (userNumber == randomNumber){
    // output
    document.getElementById("answer").innerHTML =
      "You have gussed the correct number!"
  }

  if (userNumber != randomNumber) {
    // output
    document.getElementById("answer").innerHTML =
      "You have gussed the wrong number!" + 
      'The correct answer is:' + randomNumber
  }
}