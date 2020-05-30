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
 * Расчет модификатора в зависимости от цели кредита
 * -2% для ипотеки, -0.5% для развития бизнеса, +1.5% для потребительского кредита;
 * @param data
 */
function getGoalRate(data: dataType) {
    switch (data.goal) {
        case 'ипотека':
            return -2;
        case 'развитие бизнеса':
            return 0.5;
        case 'потребительский':
            return 1.5;
        default:
            return 0;
    }
}

/**
 * Расчет модификатора в зависимости от кредитного рейтинга
 * +1.5% для кредитного рейтинга -1, 0% для кредитного рейтинга 0,
 * -0.25% для кредитного рейтинга 1, -0.75% для кредитного рейтинга 2
 * @param data
 */
function getRatingRate(data: dataType): number {
    switch (data.rating) {
        case -1:
            return 1.5;
        case 1:
            return -0.25;
        case 2:
            return -0.75;
        default:
            return 0;
    }
}

/**
 * Для пассивного дохода ставка повышается на 0.5%
 * для наемных работников ставка снижается на 0.25%
 * для заемщиков с собственным бизнесом ставка повышается на 0.25%
 * @param data
 */
function getMoneyIncomeRate(data: dataType): number {
    switch (data.money_income) {
        case 'пассивный доход':
            return 0.5;
        case 'наёмный работник':
            return -0.25;
        case 'собственный бизнес':
            return 0.25;
        default:
            return 0;
    }
}

/**
 * Условия изменения базовой ставки:
 * Все модификаторы процентной ставки суммируются, применяется итоговый модификатор
 * @param data
 */
function getBaseRate(data: dataType) {
    return getGoalRate(data) + getRatingRate(data) + getMoneyIncomeRate(data) - Math.log10(data.last_year_money);
}

/**
 * метод расчета годового платежа
 * Базовая ставка - 10%
 * Годовой платеж по кредиту определяется по следующей формуле:
 * (<сумма кредита> * (1 + <срок погашения> * (<базовая ставка> + <модификаторы>))) / <срок погашения>
 * @param data
 */
function getPayment(data: dataType) {
    return (data.credit * (1 + data.time * (10 + getBaseRate(data)))) / data.time;
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
