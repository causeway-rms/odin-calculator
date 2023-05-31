// Math functions to be called

function add(a,b) {
    displayValue.value = a+b;
}

function subtract(a,b) {
    displayValue.value = a-b;
}

function multiply(a,b) {
    displayValue.value = a*b;
}

function divide(a,b) {
    displayValue.value = a/b;
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
            break;
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

// Value storage and triggering function

const selectOperator = document.querySelectorAll('.operators');
for(let i =0; i < selectOperator.length; i++) {
    selectOperator[i].addEventListener('click', function() {
        if (firstNumber == undefined) {
            firstNumber = parseInt(displayValue.value);
            operator = selectOperator[i].id;
            displayValue.value = "";
        }
        else {
            secondNumber = parseInt(displayValue.value);
            operate(operator,firstNumber,secondNumber);
        }
    });
};