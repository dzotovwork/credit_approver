import { data } from './data';
import checkConditions from './loanConditions /checkConditions';
import calc from './payment/calc';

function checkData(data: data) {
    let result = 'Кредит выдаётся';
    if (!checkConditions(data)) {
        result = 'Кредит не выдаётся';
    }
    return result;
}
console.log(
    checkData({
        age: 63,
        sex: 'M',
        sourceOfIncome: 'пассивный доход',
        lastYearMoney: 100,
        rating: 2,
        credit: 1,
        time: 1,
        goal: 'ипотека',
    })
);
console.log(
    `Годовой платеж = ${calc({
        age: 63,
        sex: 'M',
        sourceOfIncome: 'пассивный доход',
        lastYearMoney: 100,
        rating: 2,
        credit: 1,
        time: 1,
        goal: 'ипотека',
    })}`
);
