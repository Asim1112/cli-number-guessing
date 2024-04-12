#! /usr/bin/env node

import inquirer from "inquirer"

// 1. Computer will generate a random number - DONE


// 2. User input for guessing number - DONE


// 3. Compare user input with computer generated number and show results - DONE



const generateRandom_Number = Math.floor(Math.random() * 5 + 1);


const total = await inquirer.prompt([
    {
        name: "UserGuessNumber",
        type: "number",
        message: "please guess a number between 1 to 6",
    }
]);

if(total.UserGuessNumber === generateRandom_Number){
    console.log("Congrats! you guessed right number");
}else{
    console.log("Sorry! you guessed wrong");
}