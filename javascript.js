let firstNumber = [0];
let operator;
let secondNumber = [];
const addButton = document.querySelector('.add');
const subtractButton = document.querySelector('.subtract');
const multiplyButton = document.querySelector('.multiply');
const divideButton = document.querySelector('.divide');
const clearButton = document.querySelector('.clear');
const equalsButton = document.querySelector('.equals');
const equationDisplay = document.querySelector('.readout');
const buttons = document.querySelectorAll('button');
let equationDisplayValue = [0]; //setting this as an array will give the ability better remove values from the end.
equationDisplay.textContent = equationDisplayValue;

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
    displayValue('/');
});

equalsButton.addEventListener('click', () => {
    operateAndReset()
})

clearButton.addEventListener('click', () => {
    equationDisplayValue = [0];
    equationDisplay.textContent = equationDisplayValue.join('');
    firstNumber = [0];
    secondNumber=[];
    operator = '';
})

function operateAndReset() {
    let response = operate(operator,firstNumber,secondNumber);
    equationDisplayValue = [response];
    firstNumber = [response];
    operator = '';
    secondNumber = [];
    equationDisplay.textContent = equationDisplayValue.join('');
}

function displayValue(value) {
    if (parseInt(equationDisplayValue.join('')) === 0) {
        equationDisplayValue = [value];
    } else {
        equationDisplayValue.push(value);
    };
    equationDisplay.textContent = equationDisplayValue.join('');
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
    let array = [firstNumber, secondNumber];
    if (operator === 'add'){
        return add(array);
    } else if (operator === 'subtract') {
        return subtract(array);
    } else if (operator === 'multiply') {
        return multiply(array);
    } else if (operator === 'divide') {
        return divide(array);
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