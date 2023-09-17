let firstNumber;
let operator;
let secondNumber;
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const zero = document.querySelector('.zero');

function operate(operator, firstNumber, secondNumber) {
    firstNumber = parseInt(firstNumber.join(''));
    secondNumber = parseInt(secondNumber.join('')); //turns the arrays of numbers into each being a single numeric response
    if (operator === 'add'){
        return add([firstNumber, secondNumber]);
    } else if (operator === 'subtract') {
        return subtract([firstNumber, secondNumber]);
    } else if (operator === 'multiply') {
        return multiply([firstNumber, secondNumber]);
    } else if (operator === 'divide') {
        return divide([firstNumber, secondNumber]);
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