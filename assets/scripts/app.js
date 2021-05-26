const $num1 = document.getElementById("num1");
const $num2 = document.getElementById("num2");

const $add = document.getElementById("btn-add");
const $subtract = document.getElementById("btn-subtract");
const $multiply = document.getElementById("btn-multiply");
const $divide = document.getElementById("btn-divide");

let calcResult = document.getElementById("calc-result");


$add.onclick = function () {
    calcResult.innerText = parseInt($num1.value) + parseInt($num2.value);
};

$subtract.onclick = function () {
    calcResult.innerText =  parseInt($num1.value) - parseInt($num2.value);
};

$multiply.onclick = function () {
    calcResult.innerText = resultText = parseInt($num1.value) * parseInt($num2.value);
};

$divide.onclick = function () {
    calcResult.innerText = parseInt($num1.value) / parseInt($num2.value);;
};
