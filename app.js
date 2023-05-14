//BASIC CALCULATOR APP

//WORK TO BE DONE

//BE ABLE TO COMPUTE MORE THAN TWO NUMERICAL VALUES
//IF OPERATOR IS SELECTED FIRST, DISCARD IT. 
//GIVE . BUTTON FUNCTIONALITY
//MAKE SURE THAT THE NUMBERS DON'T OVERFLOW-X FROM THE SCREEN. MAYBE USE toFixed()???

//all buttons are targets and need event listeners
const buttons = document.querySelectorAll('button');
//screen has to be targetted and user inputs displayed.
const screenDisplay = document.querySelector('.screen');

let a = []; //first numerical combo, save the numbers in the array, turn array into string 
let b = []; //second numerical combo, save the numbers in the array, turn array into string
let operator = null; //initial value of null tells the computer that an operator hasn't been clicked on and to wait for the user to select one. 

buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    if (!isNaN(button.textContent)) { //this line is checking if the number pressed is a numerical number and not an operator. 
      if (operator === null) {
        input1(button);
      } else {
        input2(button);
      }
    } else if (button.textContent === '+') {
      operator = '+';
    } else if (button.textContent === '-') {
      operator = '-';
    } else if (button.textContent === 'x') {
      operator = '*';
    } else if (button.textContent === '/') {
      operator = '/';  
    } else if (button.textContent === '=') {
        compute();
    } else if (button.textContent === 'C') { // to clear, you need all of the following code. 
        a = []; //this resets array to empty
        b = []; //this reset array to empty
        operator = null;
        screenDisplay.textContent = 0;
    } 
  });
});

function input1(button) {
  let value = button.textContent; 
  if (value === ".") {
    a.push('.');
  }
  if (value === "." & a.includes('.')) {
    return;
  }
  a.push(value); //this populates the first array of numbers
  const input1String = a.join(''); //this turns the array of numbers into a string byt removing the commas
  screenDisplay.textContent = input1String; //this display the new string of numbers
}

function input2(button) {
  let value = button.textContent;
  if (value === ".") {
    b.push('.');
  }
  if (value === "." & b.includes('.')) {
    return;
  }
  b.push(value); //this populates the first array of numbers
  const input2String = b.join(''); //this turns the array of numbers into a string byt removing the commas
  screenDisplay.textContent = input2String; //this display the new string of numbers
}

function compute() {
  let result;
  const num1 = parseFloat(a.join('')); //this converts the string back to a number
  const num2 = parseFloat(b.join('')); //this concerts the string back to a number
  
  if (operator === '+') {
    result = num1 + num2;
  } else if (operator === '-') {
    result = num1 - num2;
  } else if (operator === '*') {
    result = num1 * num2;
  } else if (operator === '/') {
    result = num1 / num2;
  } 
  
  screenDisplay.textContent = result;
  a = [];
  b = [];
  operator = null;
}

//this gives the % button functionality
const percentage = document.querySelector('#percentage')
percentage.addEventListener('click', getPercentage);

function getPercentage() {
  let currentValue = parseFloat(screenDisplay.textContent);
  let newValue = currentValue / 100;
  screenDisplay.textContent = newValue;
}












