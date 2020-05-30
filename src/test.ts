import { checkRetirementAge } from './checkRetirementAge';
import { checkMoneyTime } from './checkMoneyTime';
import { dataType } from './dataType';

function checkRaring(data: dataType) {
    return data.rating === -2;
}

function checkData(data: dataType) {
    let result = 'Кредит выдаётся';
    if (!checkRetirementAge(data) || !checkMoneyTime(data) || !checkRaring(data)) {
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
