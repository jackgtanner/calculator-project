
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


window.addEventListener("keydown", (e) => {
    const key = document.querySelector(`button[value='${e.key}']`);
    console.log(e.key);


    switch (e.key) {
        case "Shift":
            return;
        case "Backspace":
            userChoice("clrButton");
            break;
        case "Escape":
            userChoice("clrButton");
            break;

        case "0":
            userChoice("0");
            break;
        case "1":
            userChoice("1");
            break;
        case "2":
            userChoice("2");
            break;
        case "3":
            userChoice("3");
            break;
        case "4":
            userChoice("4");
            break;
        case "5":
            userChoice("5");
            break;
        case "6":
            userChoice("6");
            break;
        case "7":
            userChoice("7");
            break;
        case "8":
            userChoice("8");
            break;
        case "9":
            userChoice("9");
            break;
        case "=":
            userChoice("=");
            break;
        case "+":
            userChoice("+");
            break;
        case "-":
            userChoice("-");
            break;
        case "%":
            userChoice("%");
            break;
        case "/":
            userChoice("%");
            break;
        case "^":
            userChoice("^2");
            break;
        case "*":
            userChoice("*");
            break;
        case "√":
            userChoice("√");
            break;
    }
});





function userChoice(button) {


    if (button === "clrButton") return reset();

    else if (screenDisplay.innerHTML > 99999999) {
        wasCleared = true;
        return screenDisplay.innerHTML = "too large"
    }

    else if (button == "%" || button == "*" || button == "+" || button == "-" || button == "^2" || button == "√" || button == "=") {
        if (operand == "") {
            if (button === "=") return;
            console.log("b")
            num1 = parseFloat(screenDisplay.innerHTML);
            operand = button;
            console.log({ num1 }, { num2 }, { operand }, { operand2 })
            wasCleared = true
            if (operand === "^2") return square();
            else if (operand === "√") return root();
            return;
        }
        else {
            operand2 = button;
            num2 = parseFloat(screenDisplay.innerHTML);
            console.log({ num1 }, { num2 }, { operand }, { operand2 })
            if (operand2 === "=") return equals();
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
    wasCleared = true;
    console.clear();
    return
}




function equals() {
    console.log({ num1 }, { num2 }, { operand }, { operand2 })

    operand2 = "";

    console.log({ num1 }, { num2 }, { operand }, { operand2 })

    if (operand === "+") {
        operand = "";
        return add();
    }
    else if (operand === "-") {
        operand = ""
        return subtract()
    }

    else if (operand === "^2") {
        operand = ""
        return square();
    }
    else if (operand === "√") {
        operand = ""
        return root();
    }
    else if (operand === "%") {
        operand = ""
        return divide();
    }
    else if (operand === "*") {
        operand = ""
        return multiply();
    }
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
    if (Number.isInteger(Math.pow(num1, 2)) != true) total = Math.pow(num1, 2).toFixed(2);
    else total = Math.pow(num1, 2);
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
    num1 = parseFloat(screenDisplay.innerHTML);
    if (Number.isInteger(Math.sqrt(num1)) != true) total = Math.sqrt(num1).toFixed(2);
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
    operand2 = ""
    return screenTotal(total);
}

function divide() {
    wasCleared = true;
    if (num2 === 0) {
        num1 = total;
        num2 = 0;
        operand2 = ""
        return screenDisplay.innerHTML = "Nice Try";
    }
    total = num1 / num2;
    num1 = total;
    num2 = 0;
    operand2 = ""
    return screenTotal(total);
}