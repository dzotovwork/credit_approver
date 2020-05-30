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
        sex: 'M',
        money_income: 'пассивный доход',
        last_year_money: 1,
        rating: -2,
        credit: 1,
        time: 1,
        goal: 'ипотека',
    })
);
