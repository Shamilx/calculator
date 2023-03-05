
const wrapper = document.getElementById('wrapper');
const calculatorInput = document.getElementById('calculator-input').children[0];
var problem = "";

function Solve(problem) {

    // Remove duplicate  +  ;  -  ;  /  ;  * chars

    for (let i = 0; i < problem.length; i++) {
        if (problem[i] == problem[i + 1] && (problem[i] == "+" || problem[i] == "-"
            || problem[i] == "*" || problem[i] == "/")) {
            problem = problem.substring(0, i) + problem.substring(i + 1, problem.length);
            i = i - 1;
        }
    }

    // Check if there is + - / * in the end of string



    return Function(`'use strict'; return (${problem})`)();
}

wrapper.addEventListener('click', (event) => {
    const isButton = event.target.nodeName === 'BUTTON';

    if (!isButton) {
        return;
    }

    const pressedButton = event.target.textContent;

    if (pressedButton == "AC") {
        problem = "";
        calculatorInput.textContent = "0";
        return;
    }

    if (calculatorInput.textContent.length > 9) {
        return;
    }

    if (pressedButton == "+" || pressedButton == "-"
        || pressedButton == "*" || pressedButton == "/") {

        problem += calculatorInput.textContent;
        calculatorInput.textContent = pressedButton;
        return;
    }



    if (pressedButton == "=") {
        problem += calculatorInput.textContent;

        var answer = Solve(problem);
        problem = "";
        calculatorInput.textContent = answer;
        return;
    }


    if (calculatorInput.textContent == "0")
        calculatorInput.textContent = pressedButton;
    else if (calculatorInput.textContent.length < 9)
        calculatorInput.textContent += pressedButton

})