const $num1 = document.getElementById("num1");
const $num2 = document.getElementById("num2");

const $add = document.getElementById("btn-add");
const $subtract = document.getElementById("btn-subtract");
const $multiply = document.getElementById("btn-multiply");
const $divide = document.getElementById("btn-divide");

let calcResult = document.getElementById("calc-result");
let ans;

$add.onclick = function () {
    ans = parseInt($num1.value) + parseInt($num2.value);
    overwrite();
};

$subtract.onclick = function () {
    ans =  parseInt($num1.value) - parseInt($num2.value);
    overwrite();
};

$multiply.onclick = function () {
    ans =  parseInt($num1.value) * parseInt($num2.value);
    overwrite();
};

$divide.onclick = function () {
    ans =  parseInt($num1.value) / parseInt($num2.value);
    overwrite();
};

const overwrite = () => {
    if ($num1.value && $num2.value) {
        calcResult.innerText = ans;
    } else {
        calcResult.innerText = '数字を入力してください。';
    }
};


