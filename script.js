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

let firstNumber;
let secondNumber;
let operator;

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

