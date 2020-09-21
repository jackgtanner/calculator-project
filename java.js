

var total = 0;
var num1;
var num2;


var wasCleared = true;

const buttons = document.querySelectorAll('button');
const screenDisplay = document.querySelector('.screen');
screenDisplay.innerHTML = "0";


buttons.forEach((button) => {

    button.addEventListener('click', () => {
        userChoice(button.id);
    });
})

function userChoice(button) {
    if (button === "clrButton") return reset();
    else if (wasCleared === true) {
        screenDisplay.innerHTML = "";
        wasCleared = false;
    }
    else if (button === "=") return equals();
    else if (button === "+") return add();
    else if (button === "^2") return square();
    else if (button === "√") return root();

    if (screenDisplay.innerHTML > 99999999) {
        wasCleared = true;
        return screenDisplay.innerHTML = "too large"
    }

    screenDisplay.innerHTML += button;
    console.log(screenDisplay.innerHTML)
}

//a quick function to display the total variable in the screen
function screenTotal() {
    if (total > 99999999) {
        wasCleared = true;
        return screenDisplay.innerHTML = "too large"
    }
    return screenDisplay.innerHTML = total;
}


//resets the variables, consoles and html's back to when the page was first loaded in
function reset() {
    screenDisplay.innerHTML = "0";
    total = 0;
    num1 = 0;
    wasCleared = true;
    console.clear();
    return
}




function equals() {
    console.log({total});
    return screenTotal();
}


function add() {
    wasCleared = true;
    num1 = parseInt(screenDisplay.innerHTML);
    total = total + num1;
    return screenTotal();
}


function square() {
    num1 = parseInt(screenDisplay.innerHTML);
    total = num1 * num1;
    return screenTotal();
}


function root() {
    num1 = parseInt(screenDisplay.innerHTML);
    if (Number.isInteger(Math.sqrt(num1)) != true) total = Math.sqrt(num1).toFixed(8);
    else total = Math.sqrt(num1);
    return screenTotal();
}

function subtract(x, y) {
}

function multiply(array) {
}

function divide(x, y) {
}