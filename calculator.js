const add = (number1, number2) => {
    return number1 + number2;
}

const sub = (number1, number2) => {
    return number1 - number2;
}

const multi = (number1, number2) => {
    return number1 * number2;
}

const div = (number1, number2) => {
    return number1 / number2;
}

document.getElementById("add").addEventListener("click", function() {
    const number1 = parseFloat(document.getElementById("number1").value) || 0;
    const number2 = parseFloat(document.getElementById("number2").value) || 0;
    const result = add(number1, number2);
    document.getElementById("calculation-result").textContent = result;
} );

document.getElementById("subtract").addEventListener("click", function() {
    const number1 = parseFloat(document.getElementById("number1").value) || 0;
    const number2 = parseFloat(document.getElementById("number2").value) || 0;
    const result = sub(number1, number2);
    document.getElementById("calculation-result").textContent = result;
});

document.getElementById("multiply").addEventListener("click", function() {
    const number1 = parseFloat(document.getElementById("number1").value) || 0;
    const number2 = parseFloat(document.getElementById("number2").value) || 0;
    const result = multi(number1, number2);
    document.getElementById("calculation-result").textContent = result;
});

document.getElementById("divide").addEventListener("click", function() {
    const number1 = parseFloat(document.getElementById("number1").value) || 0;
    const number2 = parseFloat(document.getElementById("number2").value) || 0;
    const result = div(number1, number2);
    document.getElementById("calculation-result").textContent = result;
});



