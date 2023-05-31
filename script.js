// Math functions to be called

function add(a,b) {
    console.log(a+b);
}

function subtract(a,b) {
    console.log(a-b);
}

function multiply(a,b) {
    console.log(a*b);
}

function divide(a,b) {
    console.log(a/b);
}

// The variables

let firstNumber;
let secondNumber;
let operator;

// Basic operation

function operate(op,x,y) {
    switch(op) {
        case 'add':
            add(x,y);
            break;
        case 'subtract':
            subtract(x,y);
            break;
        case 'multiply':
            multiply(x,y);
            break;
        case 'divide':
            divide(x,y);
            break;
        default:
            console.log('Invalid input');
    }
}

// Displaying things

const displayValue = document.querySelector('.display-text');

const displayNumbers = document.querySelectorAll('.numbers');
for(let i = 0; i < displayNumbers.length; i++) {
    displayNumbers[i].addEventListener('click', function() {
        displayValue.value = displayValue.value + displayNumbers[i].textContent;
    })
}
