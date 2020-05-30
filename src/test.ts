import { checkRetirementAge } from './checkRetirementAge';
import { checkMoneyTime } from './checkMoneyTime';
import { dataType } from './dataType';

/**
 * Если кредитный рейтинг -2 --> кредит не выдаётся
 * @param data
 */
function checkRating(data: dataType) {
    return data.rating === -2;
}

/**
 * Если в источнике дохода указано "безработный" --> кредит не выдаётся
 * @param data
 */
function checkMoneyIncome(data: dataType) {
    return data.money_income === 'безработный';
}

/**
 * метод расчета годового платежа TODO
 * @param data
 */
function getPayment(data: dataType) {
    return 10;
}

/**
 * Если годовой платёж (включая проценты) больше половины дохода --> кредит не выдаётся
 * @param data
 */
function checkPayment(data: dataType) {
    const yearPayment = getPayment(data); // метод для расчета платежа с процентами
    return data.last_year_money / 2 < yearPayment;
}

function checkData(data: dataType) {
    let result = 'Кредит выдаётся';
    if (
        !checkRetirementAge(data) ||
        !checkMoneyTime(data) ||
        !checkRating(data) ||
        !checkMoneyIncome(data) ||
        !checkPayment(data)
    ) {
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
