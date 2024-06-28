// JavaScript Fundamentals

// Variables of different data types
var myString = "Hello, World!";
var myNumber = 42;
var myBoolean = true;

console.log("String:", myString);
console.log("Number:", myNumber);
console.log("Boolean:", myBoolean);

// Functions for simple operations
function add() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var result = num1 + num2;
    console.log("Add:", result);
    document.getElementById('result').textContent = "Result: " + result;
}

function subtract() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var result = num1 - num2;
    console.log("Subtract:", result);
    document.getElementById('result').textContent = "Result: " + result;
}

function multiply() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var result = num1 * num2;
    console.log("Multiply:", result);
    document.getElementById('result').textContent = "Result: " + result;
}

function divide() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    if (num2 === 0) {
        alert("Cannot divide by zero");
        return;
    }
    var result = num1 / num2;
    console.log("Divide:", result);
    document.getElementById('result').textContent = "Result: " + result;
}

// Interactive Charts and Graphs
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                beginAtZero: true
            },
            y: {
                beginAtZero: true
            }
        }
    }
});
