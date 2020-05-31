import checkConditions from './validator/checkConditions.js';
import calc from './calc/calc.js';
import correction from './calc/correction.js';

const btn = document.getElementById('send');
const btnAllure = document.getElementById('allure');

btn.addEventListener('click', () => {
    const data = {
        age: Number(document.getElementById('age').value),
        sex: document.getElementById('sex').value,
        money_income: document.getElementById('money_income').value,
        last_year_money: Number(document.getElementById('last_year_money').value),
        rating: Number(document.getElementById('rating').value),
        credit: Number(document.getElementById('credit').value),
        time: Number(document.getElementById('time').value),
        goal: document.getElementById('goal').value,
    };
    let result = 'Кредит выдаётся';
    if (!checkConditions(data)) {
        result = 'Кредит не выдаётся';
        alert(result);
    } else {
        alert(
            `${result} с годовым платежом: ${calc(data)} млн.\n Запрашивали: ${data.credit} , Одобрили: ${correction(
                data,
                data.credit
            )}`
        );
    }
});
btnAllure.addEventListener('click', () => {
    window.open('./allure-report/index.html');
});
