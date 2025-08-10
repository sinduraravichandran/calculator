let firstNumber = ''; 
let operator = '';
let secondNumber = '';
let fullUserInput = '';
let output = '';

const fullExpressionRegex = /-?[0-9]+\.?[0-9]*[+\-/*]-?[0-9]+\.?[0-9]*/
const firstNumberRegex = /-?[0-9]+\.?[0-9]*/
const operatorRegex = /[+\-/*]/
const secondNumberRegex = /-?[0-9]+\.?[0-9]*$/

const screen = document.querySelector("#input");
const buttons = document.querySelector("#buttons");
buttons.addEventListener("click",(event) => {

    const numbers = ["0","1","2","3","4","5","6","7","8","9"];
    const operators = ["+","-","/","*"];

    //check if it's an operator. If it is and the fullUserInput matches
    //regex, then evaluate. If not, don't evaluate yet
    if (numbers.includes(event.target.id)) {
        screen.innerText += event.target.id;
        fullUserInput += event.target.id;

    } else if (operators.includes(event.target.id)) {
        if (isFullExpression(fullUserInput)) {
            console.log("this was a full expression")
            console.log(fullUserInput);
            firstNumber = fullUserInput.match(firstNumberRegex);
            console.log(`first number ${firstNumber}`)
            console.log(typeof firstNumber)
            secondNumber = fullUserInput.match(secondNumberRegex);
            console.log(`second number ${secondNumber}`)
            operator = fullUserInput.match(operatorRegex);
            console.log(`operator ${operator}`)
            output = operate(operator, Number(firstNumber), Number(secondNumber));
            console.log(`output ${output}`)
            screen.innerText = output;
            fullUserInput = output + event.target.id;
            console.log(fullUserInput);
        } else if (!isFullExpression(fullUserInput)) {
            fullUserInput += event.target.id;
            screen.innerText += event.target.id;
        }
        
    }

   
})
    
function isFullExpression(expression) {
    if (expression.match(fullExpressionRegex)) {
        return true;
    } else {
        return false;
    }

}

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(operator, num1, num2) {
    if (operator === "+") {
        return add(num1, num2);
    } else if (operator === "-") {
        return subtract(num1, num2);
    } else if (operator === "*") {
        return multiply(num1, num2);
    } else if (operator === "/") {
        return divide(num1, num2);
    }
}



