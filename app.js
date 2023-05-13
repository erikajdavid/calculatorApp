//BASIC CALCULATOR APP

//target screen and save in a variable
//when a user clicks on a number, you want it to display on the screen
const screenDisplay = document.querySelector('.screen') 
//when the user clicks on any button, you want it to appear on the screen or perform an operation. 
//target button and save in a variable. 
const buttons = document.querySelectorAll('button');
//use the forEach() method
//add the eventListener to each button
buttons.forEach(button => button.addEventListener('click', () => calculate(button)));

//you want to save the numbers the user clicks on in an array
let calculation = [];
let accumulativeCalculation

//create function to calculate 
function calculate(button) {
    const value = button.textContent;

    calculation.push(value); //this will save the numbers the user clicks on in the calculation array
    //in the console, you'll see that the numbers are seperated by commas, and you don't want that. you want to turn it into a string.

    accumulativeCalculation = calculation.join(''); //this is now a string
    console.log(accumulativeCalculation);

    screenDisplay.textContent = accumulativeCalculation; // this will display the number array you converted into a string on the screen.  
};

//experiement with eval method. 

//??????????????