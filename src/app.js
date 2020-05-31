import checkConditions from "./checkConditions.js";
import calc from "./calc.js";

const btn = document.getElementById('send');

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
    console.log('hello from button');
    let result = 'Кредит выдаётся';
    if (!checkConditions(data)) {
        result = 'Кредит не выдаётся';
        alert(result);
    } else {
        alert(`${result} с годовым платежом: ${calc(data)} млн.`);
    }
});
