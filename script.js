let display = document.getElementById('display');
let currentInput = '0';

function clearDisplay() {
    currentInput = '0';
    updateDisplay();
}
function appendToDisplay(value) {
    if (currentInput === '0' && value !== '.') {
        currentInput = value;
    } else {
        currentInput += value;
    }
    updateDisplay();
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        updateDisplay();
    } catch (error) {
        currentInput = 'Error';
        updateDisplay();
    }
}

function updateDisplay() {
    display.textContent = currentInput;
}

