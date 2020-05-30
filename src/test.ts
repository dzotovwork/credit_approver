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
 * Условия изменения базовой ставки:
 * Все модификаторы процентной ставки суммируются, применяется итоговый модификатор;
 * 1. -2% для ипотеки, -0.5% для развития бизнеса, +1.5% для потребительского кредита;
 *    +1.5% для кредитного рейтинга -1, 0% для кредитного рейтинга 0,
 * 2. -0.25% для кредитного рейтинга 1, -0.75% для кредитного рейтинга 2;
 * 3. Модификатор в зависимости от запрошенной суммы рассчитывается по формуле [-log(sum)]; например,
 *    для 0.1 млн изменение ставки составит +1%, для 1 млн - 0%, для 10 млн изменение ставки составит -1%;
 * 4. Для пассивного дохода ставка повышается на 0.5%, для наемных работников ставка снижается на 0.25%,
 *    для заемщиков с собственным бизнесом ставка повышается на 0.25%;
 * @param data
 */
function getRate(data: dataType) {
    let result = 10;
    switch (data.goal) {
        case 'ипотека':
            result = result - 2;
            break;
        case 'развитие бизнеса':
            result = result - 0.5;
            break;
        case 'потребительский':
            result = result + 1.5;
            break;
    }
    switch (data.rating) {
        case 1:
            result = result - 0.25;
            break;
        case 2:
            result = result - 0.25;
            break;
    }
    switch (data.money_income) {
        case 'пассивный доход':
            result = result + 0.5;
            break;
        case 'наёмный работник':
            result = result - 0.25;
            break;
        case 'собственный бизнес':
            result = result + 0.25;
            break;
    }
    result = result - Math.log10(data.last_year_money);
    return result;
}

/**
 * метод расчета годового платежа
 * Базовая ставка - 10%
 * Годовой платеж по кредиту определяется по следующей формуле:
 * (<сумма кредита> * (1 + <срок погашения> * (<базовая ставка> + <модификаторы>))) / <срок погашения>
 * @param data
 */
function getPayment(data: dataType) {
    const result = (data.credit * (1 + data.time * (10 + getRate(data)))) / data.time;
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
