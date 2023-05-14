//BASIC CALCULATOR APP

//all buttons are targets and need event listeners
//screen has to be targetted and user inputs displayed. 
//user enters initial numbers
//numbers are displayed on the screen. 
//value is stored and stays on the display screen
//operand is clicked on
//user enters second value.
//initial value disappears but the value is remembered. 
//user clicks equals 
//calculation computes. 

const buttons = document.querySelectorAll('button');
    buttons.forEach(function(button){
        button.addEventListener('click', function(){
        //code executed when button is clicked on
        //you want the number to appear on the screen
    });
});

const screenDisplay = document.querySelector('.screen')
screenDisplay.textContent = '0'; // set default to zero








/*
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
let accumulativeCalculation;

//create function to calculate 
function calculate(button) {
    const value = button.textContent;
    if (value === 'C') {
        calculation = [];
        screenDisplay.textContent = '0';
    } else if (value === '&#61;') {
        screenDisplay.textContent = eval(accumulativeCalculation);
    } else {
        calculation.push(value); //this will save the numbers the user clicks on in the calculation array
        //in the console, you'll see that the numbers are seperated by commas, and you don't want that. you want to turn it into a string.
    
        accumulativeCalculation = calculation.join(''); //this is now a string
        //you cannot use the toString() method on an array, it will display the numbers seperated by a comma. 
        //join('') in this case will join all of the numbers in the array into a string with no commas. 
        console.log(accumulativeCalculation);
    
        screenDisplay.textContent = accumulativeCalculation; // this will display the number array you converted into a string on the screen.  
    }
};

//target clear button and save in a variable.
const clear = document.querySelector('.clear');
//add event listener
clear.addEventListener('click', clearDisplay) 

//function to clear screen
//currently, this function clears to zero BUT, when you press on a number, it adds to the number that was previous deleted. 
function clearDisplay() {
    screenDisplay.textContent = 0;
};

//target negative button and save in a variable.
//this currently isn't working the way you want it to. 
const negative = document.querySelector('.negative');
//add event listener
negative.addEventListener('click', makeItNegative);

//function to turn number negative
function makeItNegative() {
    const negativeSymbol = '-';
    screenDisplay.textContent = negativeSymbol.join(screenDisplay.textConent);
}
*/


