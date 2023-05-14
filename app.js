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
    buttons.forEach(function(button) {
        button.addEventListener('click', function(){
        //code executed when button is clicked on
        //you want the number to appear on the screen
    });
});

const screenDisplay = document.querySelector('.screen')
screenDisplay.textContent = 0; // set default to zero

let a = []; //first numerical combo, save the numbers in the array, turn array into string 

let b = []; //second numerical combo, save the numbers in the array, turn array into string

function input1() {
    let value = button.textContent;
    a.push(value); //this populated the array, but the numbers are divided by commas. 
    const input1String = a.join(''); //this turns the numbers array into a string.
    console.log(input1String);
}

function input2() {
    let value = button.textContent;
    b.push(value); //this populated the array, but the numbers are divided by commas. 
    const input2String = b.join(''); //this turns the numbers array into a string.
    console.log(input2String);
}

function add(a, b) {
    return (input1() + input2());
}
add();

function subtract(a, b) {
   return a - b;
}
subtract();

function multiply(a, b) {
    return a * b;
}
multiply();

function divide(a, b) {
    return a / b;
}

divide();










