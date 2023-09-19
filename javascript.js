let firstNumber = [0];
let operator;
let secondNumber = [0];
const addButton = document.querySelector('.add');
const subtractButton = document.querySelector('.subtract');
const multiplyButton = document.querySelector('.multiply');
const divideButton = document.querySelector('.divide');
const clearButton = document.querySelector('.clear');
const equalsButton = document.querySelector('.equals');
const equationDisplay = document.querySelector('.readout');
const buttons = document.querySelectorAll('button');
let equationDisplayValue = [firstNumber,operator,secondNumber];
equationDisplay.textContent = equationDisplayValue.join('');

buttons.forEach(button => button.addEventListener('click', () =>{
    addToArray(button.value);
    displayValue();
}))

addButton.addEventListener('click', () => {
    if (correctNumbers(secondNumber) > 0) {
        operateAndReset();
    };
    operator = '+';
    displayValue();
});

subtractButton.addEventListener('click', () => {
    if (correctNumbers(secondNumber) > 0) {
        operateAndReset();
    };
    operator = '-';
    displayValue();
});

multiplyButton.addEventListener('click', () => {
    if (correctNumbers(secondNumber) > 0) {
        operateAndReset();
    };
    operator= 'x';
    displayValue();
});

divideButton.addEventListener('click', () => {
    if (correctNumbers(secondNumber) > 0) {
        operateAndReset();
    };
    operator= '/';
    displayValue();
});

equalsButton.addEventListener('click', () => {
    operateAndReset()
})

clearButton.addEventListener('click', () => {
    firstNumber = [0];
    secondNumber=[0];
    operator = '';
    displayValue();
})

function operateAndReset() {
    let response = operate(operator,firstNumber,secondNumber);
    equationDisplayValue = [response];
    firstNumber = [response];
    operator = '';
    secondNumber = [0];
    equationDisplay.textContent = equationDisplayValue.join('');
}

function correctNumbers(array) {
    return parseFloat(array.join(''))
}

function displayValue() {
    if (!operator) {
        equationDisplayValue = [correctNumbers(firstNumber)];
    } else if (correctNumbers(secondNumber) === 0) {
        equationDisplayValue = [correctNumbers(firstNumber),operator]
    } else {
        equationDisplayValue = [correctNumbers(firstNumber),operator,correctNumbers(secondNumber)];
    }
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
    firstNumber = correctNumbers(firstNumber);
    secondNumber = correctNumbers(secondNumber); //turns the arrays of numbers into each being a single numeric response
    let array = [firstNumber, secondNumber];
    if (operator === '+'){
        return add(array);
    } else if (operator === '-') {
        return subtract(array);
    } else if (operator === 'x') {
        return multiply(array);
    } else if (operator === '/') {
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