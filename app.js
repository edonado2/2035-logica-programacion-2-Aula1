let secretNumber = 0;
let attempts = 0;
let numbersList = [];
let maxNumber = 10;

function textElement(element, text) {
    let elementHTML = document.querySelector(element);
    elementHTML.innerHTML = text;
    return;
}


function userAttempt() {
    let userInput = parseInt(document.getElementById('userNumber').value);
    if (userInput === secretNumber) {
        textElement('p', `Congrats, you got it! in ${attempts} ${attempts === 1 ? 'attempt' : 'attempts'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (userInput < secretNumber) {
            textElement('p', 'Nope.. is grater')
        }
        else {
            textElement('p', 'So close! is Lower')
        }

        if (userInput > 10) {
            textElement('p', `Please enter a number from 1 to ${secretNumber}`)
        }
        attempts++
        cleanBox();
    }

    return
}

function cleanBox() {
    document.getElementById('userNumber').value = '';
}

function randomNumber() {
    let number = Math.floor(Math.random() * maxNumber) + 1;
    console.log(number);
    console.log(numbersList);
    if (numbersList.length == maxNumber) {
        textElement('p', 'All numbers have been used')
    } else {
        if (numbersList.includes(number)) {
            return randomNumber();
        } else {
            numbersList.push(number);
            return number
        }
    }
}


function initialConditions() {
    textElement('h1', 'Secret number game');
    textElement('p', `Enter a number from 1 to ${maxNumber}`);
    secretNumber = randomNumber();
    attempts = 1;
}



function newGame() {
    cleanBox()
    initialConditions();
    document.getElementById('reiniciar').setAttribute('disabled', 'true')
}

initialConditions()