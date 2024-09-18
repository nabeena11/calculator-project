let inputDisplay = document.getElementById('input');
let resultDisplay = document.getElementById('result');

function clearDisplay() {
    inputDisplay.textContent = '';
    resultDisplay.textContent = '';
}

function appendNumber(number) {
    if (resultDisplay.textContent === '') {
        inputDisplay.textContent += number;
    } else {
        inputDisplay.textContent = number;
        resultDisplay.textContent = '';
    }
}

function appendOperator(operator) {
    const lastChar = inputDisplay.textContent.slice(-1);
    if (['+', '-', '*', '/'].includes(lastChar)) {
        inputDisplay.textContent = inputDisplay.textContent.slice(0, -1);
    }
    inputDisplay.textContent += operator;
}

function calculateResult() {
    try {
        const result = eval(inputDisplay.textContent);
        resultDisplay.textContent = `=${result}`;
    } catch (error) {
        resultDisplay.textContent = 'Error';
    }
}
