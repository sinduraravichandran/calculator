let firstNumber = ''; 
let operator = '';
let secondNumber = '';
let fullUserInput = '';
let output = '';

const fullExpressionRegex = /-?[0-9]+\.?[0-9]*[+\-/*]-?[0-9]+\.?[0-9]*/
const firstNumberRegex = /-?[0-9]+\.?[0-9]*/
const operatorRegex = /[+\-/*]/
const secondNumberRegex = /[+\-/*]-?[0-9]+\.?[0-9]*$/

const screen = document.querySelector("#input");
const buttons = document.querySelector("#buttons");
buttons.addEventListener("click",(event) => {

    const numbers = ["0","1","2","3","4","5","6","7","8","9"];
    const operators = ["+","-","/","*"];

    //check if it's an operator. If it is and the fullUserInput matches
    //regex, then evaluate. If not, don't evaluate yet
    if (numbers.includes(event.target.id)) {
        //if the last char that the user inputted is an operator then clear out screen
        if (operators.includes(fullUserInput[fullUserInput.length-1]) || !fullUserInput) {
            screen.innerText = event.target.id
        } else {
            screen.innerText += event.target.id; 
        }
        fullUserInput += event.target.id; 

    } else if (operators.includes(event.target.id)) {
        if (isFullExpression(fullUserInput)) {
            console.log("this was a full expression")
            console.log(fullUserInput);
            firstNumber = Number(fullUserInput.match(firstNumberRegex)[0]);
            console.log(`first number ${firstNumber}`)
            console.log(typeof firstNumber)
            //need to be able to tell the difference between operator and negative sign
            secondNumber = Number(fullUserInput.match(secondNumberRegex)[0].slice(1));
            console.log(`second number ${secondNumber}`)
            operator = fullUserInput.match(operatorRegex)[0];
            console.log(`operator ${operator}`)
            console.log(typeof operator)
            output = operate(operator, Number(firstNumber), Number(secondNumber)).toString();
            console.log(`output ${output}`)
            console.log(typeof output)
            screen.innerText = output;
            fullUserInput = output + event.target.id;
            console.log(fullUserInput);
        } else if (!isFullExpression(fullUserInput)) {
            fullUserInput += event.target.id;
        }
        
    } else if (event.target.id === "Del") {
        fullUserInput = fullUserInput.slice(0,fullUserInput.length-1);
        screen.innerText = fullUserInput;
    } else if (event.target.id === "C") {
        fullUserInput = '';
        screen.innerText = fullUserInput;
    } else if (event.target.id === "=") {
        firstNumber = Number(fullUserInput.match(firstNumberRegex)[0]);
        secondNumber = Number(fullUserInput.match(secondNumberRegex)[0].slice(1));
        operator = fullUserInput.match(operatorRegex)[0];
        output = operate(operator, Number(firstNumber), Number(secondNumber)).toString();
        screen.innerText = output;
        fullUserInput = '';
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



