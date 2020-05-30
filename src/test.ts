import { dataType } from './dataType';
import checkConditions from './loanConditions /checkConditions';

function checkData(data: dataType) {
    let result = 'Кредит выдаётся';
    if (!checkConditions(data)) {
        result = 'Кредит не выдаётся';
    }
    return result;
}
console.log(
    checkData({
        age: 59,
        sex: 'F',
        sourceOfIncome: 'пассивный доход',
        lastYearMoney: 100,
        rating: 2,
        credit: 1,
        time: 1,
        goal: 'ипотека',
    })
);
