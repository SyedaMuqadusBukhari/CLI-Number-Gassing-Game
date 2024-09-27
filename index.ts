#! /usr/bin/env node

import inquirer from "inquirer"
// 1,computer will generate a random number

// 2,user input for gussing number

// 3,compare user input with computer generated number and shown result

const randomnumber = Math.floor(Math.random() * 10 + 1);


const answer = await inquirer.prompt([
    {
      name: "userguessednumber",
      type: "number",
      message: "please guess a number between 1-10",
    },
]);

if (answer.userguessednumber === randomnumber) {
  console.log("congtratulation you guessed right number.");
} else {
  console.log("you guessed wrong number");
}



