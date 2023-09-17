let firstNumber=[];
let operator;
let secondNumber=[];
const addButton = document.querySelector('.add');
const subtractButton = document.querySelector('.subtract');
const multiplyButton = document.querySelector('.multiply');
const divideButton = document.querySelector('.divide');
const clearButton = document.querySelector('.clear');
const equalsButton = document.querySelector('.equals');
const equationDisplay = document.querySelector('.readout');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => button.addEventListener('click', () =>{
    displayValue(button.value);
    addToArray(button.value);
}))

addButton.addEventListener('click', () => {
    operator = 'add';
    displayValue('+');
});

subtractButton.addEventListener('click', () => {
    operator = 'subtract';
    displayValue('-');
});

multiplyButton.addEventListener('click', () => {
    operator= 'multiply';
    displayValue('x');
});

divideButton.addEventListener('click', () => {
    operator= 'divide';
    displayValue('/')
});

function displayValue(value) {
    equationDisplay.textContent += value;
}

function addToArray(value) {
    if (!operator) {
        firstNumber.push(value);
    } else {
        secondNumber.push(value);
    }
}

function operate(operator, firstNumber, secondNumber) {
    firstNumber = parseInt(firstNumber.join(''));
    secondNumber = parseInt(secondNumber.join('')); //turns the arrays of numbers into each being a single numeric response
    if (operator === 'add'){
        add([firstNumber, secondNumber]);
    } else if (operator === 'subtract') {
        subtract([firstNumber, secondNumber]);
    } else if (operator === 'multiply') {
        multiply([firstNumber, secondNumber]);
    } else if (operator === 'divide') {
        divide([firstNumber, secondNumber]);
    }
};

function add(array) {
    function getSum(total, num) {
        return total + num;
    };
    return array.reduce(getSum,0);
};

function subtract(array) {
    function sub(total, num) {
        return total - num;
    };
    return array.reduce(sub);
};

function multiply(array) {
    function times(total, num) {
        return total * num;
    };
    return array.reduce(times);
};

function divide(array) {
    function getDivision(total, num) {
        return total / num;
    };
    return array.reduce(getDivision);
};