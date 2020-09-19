

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

    else if (wasCleared) {
        screenDisplay.innerHTML = "";
        wasCleared = false;
    }
    else if (button === "=") return equals(total);
    else if (button === "+") return add(total, num1);
    else if (button === "^2") return square(total, num1);








    if (screenDisplay.innerHTML > 99999999) {
        wasCleared = true;
        return screenDisplay.innerHTML = "too large"
    }

    screenDisplay.innerHTML += button;
    console.log(screenDisplay.innerHTML)

}

function equals() {
    return screenTotal();
}



function add() {
    wasCleared = true;
    num1 = parseInt(screenDisplay.innerHTML);
    total = total + num1;
    return screenTotal();
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


function square () {
    num1 = parseInt(screenDisplay.innerHTML);
    total = num1 * num1;
    return screenTotal();
}





function subtract(x, y) {
    return z = x - y;
}

function multiply(array) {
    return array.length
        ? array.reduce((accumulator, nextItem) => accumulator * nextItem)
        : 0;

}

function divide(x, y) {
    return z = x / y;
}