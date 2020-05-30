import { checkRetirementAge } from './checkRetirementAge';

function checkData(data: any) {
    let result = 'Кредит выдаётся';
    if (!checkRetirementAge(data)) {
        result = 'Кредит не выдаётся';
    }
    return result;
}

console.log(
    checkData({
        age: 59,
        sex: 'F',
        money_income: 'пассивный доход',
        last_year_money: 1,
        rating: -2,
        credit: 1,
        time: 1,
        goal: 'ипотека',
    })
);
