
const screen = document.getElementById("screen");
const clearScreen = document.getElementById("clearSceen");
const divi = document.getElementById("divi");
const multi = document.getElementById("multi");
const subStr = document.getElementById("subStr");
const addi = document.getElementById("addi");
const equal = document.getElementById("equal");
const numbers = document.getElementsByClassName("number");

let curentNumbers = [];

let curentNumber = 0

let oparation

let previousNumber = 0

//Numbers Botton

Array.from(numbers).forEach((number) => {

    number.addEventListener("click", () => {

        if (curentNumbers.length > 11) {
            curentNumbers.shift();
        }

        curentNumbers.push(number.getAttribute("value"));
        screen.innerHTML = curentNumbers.join("");
        curentNumber = curentNumbers.join("");
        curentNumber = parseInt(curentNumber);
    })
})

//Ac Button

clearScreen.addEventListener("click", () => {

    curentNumber = 0;
    curentNumbers = [];
    screen.innerHTML = 0;
    oparation = "";
    previousNumber = 0
})

// setprevious number

const setpreviousNumber = () => {

    if (oparation == "+") {

        previousNumber = previousNumber + curentNumber

    } else if (oparation == "-") {

        previousNumber = previousNumber - curentNumber

    } else if (oparation == "*") {

        previousNumber = previousNumber * curentNumber

    } else if (oparation == "/") {

        previousNumber = previousNumber / curentNumber
    }
}

// Addition button

const Addition = () => {

    if (previousNumber == 0) {

        previousNumber = curentNumber
        screen.innerHTML = previousNumber + "+";
        curentNumber = 0;
        curentNumbers = [];
        oparation = "+"

    } else {

        setpreviousNumber()
        screen.innerHTML = previousNumber + "+";
        curentNumber = 0;
        curentNumbers = [];
        oparation = "+"

    }

}

addi.addEventListener("click", Addition)


// substruction button

const substruction = () => {

    if (previousNumber == 0) {

        previousNumber = curentNumber
        screen.innerHTML = previousNumber + "-";
        curentNumber = 0;
        curentNumbers = [];
        oparation = "-"

    } else {

        setpreviousNumber()
        screen.innerHTML = previousNumber + "-";
        curentNumber = 0;
        curentNumbers = [];
        oparation = "-"

    }

}


subStr.addEventListener("click", substruction)


// multiaplication button 

const multiaplication = () => {

    if (previousNumber == 0) {

        previousNumber = curentNumber
        screen.innerHTML = previousNumber + "*";
        curentNumber = 0;
        curentNumbers = [];
        oparation = "*"

    } else {

        setpreviousNumber()
        screen.innerHTML = previousNumber + "*";
        curentNumber = 0;
        curentNumbers = [];
        oparation = "*"

    }
}

multi.addEventListener("click", multiaplication)

// divition

const divition = () => {

    if (previousNumber == 0) {

        previousNumber = curentNumber
        screen.innerHTML = previousNumber + "/";
        curentNumber = 0;
        curentNumbers = [];
        oparation = "/"

    } else {

        setpreviousNumber()
        screen.innerHTML = previousNumber + "/";
        curentNumber = 0;
        curentNumbers = [];
        oparation = "/"

    }
}

divi.addEventListener("click", divition)


// equal button

const Equal = () => {

    if (curentNumber == 0) {

        screen.innerHTML = previousNumber
        curentNumber = 0

    } else {

        setpreviousNumber()
        screen.innerHTML = previousNumber
        curentNumber = 0
    }

}

equal.addEventListener("click", Equal)

