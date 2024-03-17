// LESSON 3 - Programming Tasks  

// FUNCTIONS  
// Function Definition - Add Numbers  
function add (number1, number2) {
    return number1 + number2;
}

function addNumbers () {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);

    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

const sumButton = document.querySelector('#addNumbers');
sumButton.addEventListener('click', addNumbers);

// Function Expression - Subtract Numbers  
function subtract (num1, num2) {
    return num1 - num2;
}
function SubtractNumbers() {
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);

    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
}

const subButton = document.querySelector('#subtractNumbers');
subButton.addEventListener('click', SubtractNumbers);

// Arrow Function - Multiply Numbers  
const multiply = (num1, num2) => num1 * num2;

let multiplyNumbers = () => {
    let multiplyNumber1 = Number(document.querySelector('#factor1').value);
    let multiplyNumber2 = Number(document.querySelector('#factor2').value);

    document.querySelector('#product').value = multiply(multiplyNumber1, multiplyNumber2);
}

const multButton = document.querySelector('#multiplyNumbers');
multButton.addEventListener('click', multiplyNumbers);

// Open Function Use - Divide Numbers  
const divide = (num1, num2) => num1 / num2;

function divideNumbers () {
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);

    document.querySelector('#quotient').value = divide(dividend, divisor);
}

const divideButton = document.querySelector('#divideNumbers');
divideButton.addEventListener('click', divideNumbers);

// Decision Structure  
const getTotalButton = document.querySelector('#getTotal');

function getTotal() {
    let subtotal = parseFloat(document.querySelector('#subtotal').value);
    if (document.querySelector('#member').checked) {
        subtotal *= 0.8;
    }
    let formattedTotal = subtotal.toFixed(2);

    document.querySelector('#total').textContent = `$${formattedTotal}`;
}
getTotalButton.addEventListener('click', getTotal);


// ARRAY METHODS - Functional Programming  
// Output Source Array  
let sourceArray = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
let array = document.querySelector('#array');
array.innerHTML = sourceArray;

// Output Odds Only Array  
let oddsArray = sourceArray.filter((number) => number % 2 !== 0);
let odds = document.querySelector('#odds');
odds.innerHTML = oddsArray;

// Output Evens Only Array  
let evensArray = sourceArray.filter((number) => number % 2 === 0);
let evens = document.querySelector('#evens');
evens.innerHTML = evensArray; 

// Output Sum of Org. Array  
let sumArray = sourceArray.reduce((sum, number) => sum + number, 0);
let sum = document.querySelector('#sumOfArray');
sum.innerHTML = sumArray

// Output Multiplied by 2 Array  
let twiceArray = sourceArray.map((number) => number * 2);
let twice = document.querySelector('#multiplied');
twice.innerHTML = twiceArray;

// Output Sum of Multiplied by 2 Array  
let doubleSum = sourceArray.map((number) => number * 2).reduce((sum, number) => sum + number, 0);
sumOfMultiplied = document.querySelector('#sumOfMultiplied');
sumOfMultiplied.innerHTML = doubleSum;