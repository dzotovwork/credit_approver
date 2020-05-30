import { dataType } from '../dataType';
import { checkRetirementAge } from './checkRetirementAge';
import payment from '../payment/calc';

/**
 * Метод проверки, выдавать кредит или нет
 * @param data
 */
export default (data: dataType): boolean => {
    return !checkRetirementAge(data);
};

/**
 * Если результат деления запрошенной суммы на срок погашения в годах более трети годового дохода --> кредит не выдаётся
 * @param data
 */
export const checkMoneyTime = (data: dataType): boolean => {
    return data.credit / data.time < data.last_year_money / 3;
};

/**
 * Если кредитный рейтинг -2 --> кредит не выдаётся
 * @param data
 */
export const checkRating = (data: dataType): boolean => {
    return data.rating === -2;
};

/**
 * Если в источнике дохода указано "безработный" --> кредит не выдаётся
 * @param data
 */
export const checkMoneyIncome = (data: dataType): boolean => {
    return data.money_income === 'безработный';
};
/**
 * Если годовой платёж (включая проценты) больше половины дохода --> кредит не выдаётся
 * @param data
 */
export const checkPayment = (data: dataType): boolean => {
    const yearPayment = payment(data); // метод для расчета платежа с процентами
    return data.last_year_money / 2 < yearPayment;
};
