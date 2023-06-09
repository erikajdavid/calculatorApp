//BASIC CALCULATOR APP

//WORK TO BE DONE
//multiple inputs work, but you need to press the equals button first before adding onto the computation. 
//IF OPERATOR IS SELECTED FIRST, DISCARD IT. 
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
    } else if (button.textContent === 'AC') { // to clear, you need all of the following code. 
        a = []; //this resets array to empty
        b = []; //this reset array to empty
        operator = null;
        screenDisplay.textContent = 0;
    } else if (button.textContent === ".") {
      // Add decimal point
      if (operator === null) {
        if (!a.includes('.')) {
          a.push('.');
          screenDisplay.textContent = a.join('');
        }
      } else {
        if (!b.includes('.')) {
          b.push('.');
          screenDisplay.textContent = b.join('');
        }
      }
    }
  });
});

function input1(button) {
  let value = button.textContent; 
  if (value === ".") {
    a.push('.'); //this is to add the decimal
  }
  if (value === "." && a.includes('.')) {
    return; //this is to prevent more than one decimal
  }
  a.push(value); //this populates the first array of numbers
  const input1String = a.join('').slice(0, 10); //this turns the array of numbers into a string byt removing the commas, and limits the digits displayed to 10. 
  screenDisplay.textContent = input1String; //this display the new string of numbers
}

function input2(button) {
  let value = button.textContent;
  if (value === ".") {
    b.push('.'); //this is to add the decimal
  }
  if (value === "." && b.includes('.')) {
    return; //this is to prevent more than one decimal
  }
  b.push(value); //this populates the first array of numbers
  const input2String = b.join('').slice(0, 10);; //this turns the array of numbers into a string byt removing the commas, and limits the digits displayed to 10. 
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

  if (!num2 || !num2 && operator) { // only num1 is set or num1 and operator are set 
    //set the screen to 0
    screenDisplay.textContent = 0;
    a = [];
    operator = null;
    return;
  }

  screenDisplay.textContent = result;
  a = [result.toString()]; // Store result as the first input for next calculation
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












