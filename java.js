
let num1, num2, operand = "", operand2 = "";

var total = 0;
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

    else if (screenDisplay.innerHTML > 99999999) {
        wasCleared = true;
        return screenDisplay.innerHTML = "too large"
    }

    else if (button == "%" || button == "*" || button == "+" || button == "-" || button == "^2" || button == "√" || button == "=") {
        console.log("a")
        if (operand == "") {
            console.log("b")
            num1 = parseFloat(screenDisplay.innerHTML);
            operand = button;
            console.log({ num1 }, { operand });
            wasCleared = true
            if (operand === "^2") return square();
            else if (operand === "√") return root();
            return;
        }
        else {
            operand2 = button;
            console.log({ operand }, { operand2 })
            console.log("c")
            num2 = parseFloat(screenDisplay.innerHTML);
            if (button === "=") return equals();
            else if (operand === "+") return add();
            else if (operand === "-") return subtract()
            else if (operand === "^2") return square();
            else if (operand === "√") return root();
            else if (operand === "%") return divide();
            else if (operand === "*") return multiply();
        }
        return;
    }

    else if (wasCleared === true) {
        screenDisplay.innerHTML = "";
        wasCleared = false;
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


//Create a clear function to reset all variables

function reset() {
    screenDisplay.innerHTML = "0";
    total = 0;
    num1 = 0;
    num2 = 0;
    operand = operand2;
    operand2 = "";
    console.log({ operand }, { operand2 });
    wasCleared = true;
    console.clear();
    return
}




function equals() {
    operand2 = "";
    if (operand === "+") return add();
    else if (operand === "-") return subtract()
    else if (operand === "^2") return square();
    else if (operand === "√") return root();
    else if (operand === "%") return divide();
    else if (operand === "*") return multiply();
}


function add() {
    wasCleared = true;
    total = num1 + num2;
    num1 = total;
    num2 = 0;
    operand = operand2;
    operand2 = "";
    return screenTotal(total);
}


function square() {
    wasCleared = true;
    total = Math.pow(num1, 2);
    num1 = total;
    num2 = 0;
    operand = operand2;
    operand2 = "";
    return screenTotal(total);
}


function root() {
    wasCleared = true;
    num2 = 0;
    operand = operand2;
    operand2 = "";
    num1 = parseInt(screenDisplay.innerHTML);
    if (Number.isInteger(Math.sqrt(num1)) != true) total = Math.sqrt(num1).toFixed(8);
    else total = Math.sqrt(num1);
    return screenTotal(total);
}

function subtract() {
    wasCleared = true;
    total = num1 - num2;
    num1 = total;
    num2 = 0;
    operand = operand2;
    operand2 = "";
    return screenTotal(total);
}

function multiply() {
    wasCleared = true;
    total = num1 * num2;
    num1 = total;
    num2 = 0;
    operand = ""
    return screenTotal(total);
}

function divide() {
    wasCleared = true;
    if (num2 === 0) {
        num1 = total;
        num2 = 0;
        operand = ""
       return screenDisplay.innerHTML = "nice try";
    }
    total = num1 / num2;
    num1 = total;
    num2 = 0;
    operand = ""
    return screenTotal(total);
}