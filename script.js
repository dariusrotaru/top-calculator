let firstNumber = null;
let secondNumber = null;
let operator = null;

//doms
const display = document.querySelector('.display');
const digitButtons = document.querySelectorAll('.digit');
const operatorButtons = document.querySelectorAll('.operator');
const clearButton = document.querySelector('.clear');
const equalsButton = document.querySelector('.equals');
const deleteButtons = document.querySelector('.delete');


function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    if (b === 0){
        return "Error: Division by zero";
    }
    return a / b;
}

// case switch operations functions


function operateF(operator, a, b){
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a,b);
        case '*':
            return multiply(a,b);
        case '/':
            return divide(a,b);
        default:
            return 'error';
    }
}

//adding numbers to display
digitButtons.forEach(button => {
    button.addEventListener('click', () => {
        if(display.textContent === '0') {
            display.textContent = button.textContent;
        } else {
            display.textContent += button.textContent;
        }
    });
});

//handling operations and =
operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        firstNumber = parseFloat(display.textContent);
        operator = button.textContent;
        display.textContent = '0';
    });
});

equalsButton.addEventListener('click', () => {
    secondNumber = parseFloat(display.textContent);
    const result = operateF(operator, firstNumber, secondNumber);
    display.textContent = result;
})

clearButton.addEventListener('click', () => {
    firstNumber = null;
    operator = null;
    secondNumber = null;
    display.textContent = '0';
})