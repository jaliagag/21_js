//Queremos que la función basicCalculator, recibiendo: un número, un operador ('+', '-', '*', '/'), y otro número, resuelva la cuenta ingresada


function basicCalculator(firstNumber, operator, secondNumber) { 
    switch (operator != "") {
        case operator == "+":
            return firstNumber + secondNumber;
        case operator == "-":
            return firstNumber - secondNumber;
        case operator == "*":
            return firstNumber * secondNumber;
        case operator == "/":
            return firstNumber / secondNumber;
    }
}

console.log(basicCalculator(2, "*", 3))

module.exports = basicCalculator;
