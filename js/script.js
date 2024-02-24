let displayValue = "";
let operator = null;
let operand1 = null;

function appendNumber(number) {
    displayValue += number;
    document.getElementById("display").value = displayValue;
    // alert(displayValue)
    // alert(number)
}

function appendOperator(op) {
    if (displayValue !== "") {
        operand1 = parseFloat(displayValue);
        operator = op;
        displayValue = "";
    }
}

function clearDisplay() {
    displayValue = "";
    operator = null;
    operand1 = null;
    document.getElementById("display").value = "";
}

function calculate() {
    if (displayValue !== "" && operator !== null) {
        let operand2 = parseFloat(displayValue);
        let result = null;

        switch (operator) {
            case "+":
                result = operand1 + operand2;
                break;
            case "-":
                result = operand1 - operand2;
                break;
            case "*":
                result = operand1 * operand2;
                break;
            case "/":
                if (operand2 !== 0) {
                    result = operand1 / operand2;
                } else {
                    result = "Error: Cannot divide by zero";
                }
                break;
        }

        displayValue = result;
        document.getElementById("display").value = displayValue;
    }
}
