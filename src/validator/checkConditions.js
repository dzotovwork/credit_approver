import checkRetirementAge from './checkRetirementAge.js';
import checkMoneyTime from './checkMoneyTime.js';
import checkRating from './checkRating.js';
import checkMoneyIncome from './checkMoneyIncome.js';
import checkPayment from './checkPayment.js';

/**
 * Метод проверки выдачи кредита
 * @param data
 */
export default (data) =>
    checkRetirementAge(data.sex, data.age, data.time) &&
    checkMoneyTime(data.credit, data.time, data.last_year_money) &&
    checkRating(data.rating) &&
    checkMoneyIncome(data.money_income) &&
    checkPayment(data);
