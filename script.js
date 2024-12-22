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
const signChangeButton = document.querySelector('.signChange');


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
        return "Cannot divide by 0";
    }
    return a / b;
}

// case switch operations functions


function operateF(operator, a, b){
    let result;
    switch (operator) {
        case '+':
            result = add(a, b);
            break;
        case '-':
            result = subtract(a,b);
            break;
        case '*':
            result = multiply(a,b);
            break;
        case '/':
            result = divide(a,b);
            break;
        default:
            return 'error';
    }
    if(typeof result === 'string') {
        return result;
    }
    return Math.round(result * 10000000000) / 10000000000;
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

//sign change button

signChangeButton.addEventListener('click', () => {
    if (display.textContent !== '0') {
        if (display.textContent.startsWith('-')) {
            display.textContent = display.textContent.slice(1);
        } else {
            display.textContent = '-' + display.textContent;
        }
    }
})