import { dataType } from '../dataType';
import checkMoneyTime from './checkMoneyTime';
import checkMoneyIncome from './checkMoneyIncome';
import checkPayment from './checkPayment';
import checkRetirementAge from './checkRetirementAge';
import checkRating from './checkRating';

/**
 * Метод проверки, выдавать кредит или нет
 * @param data
 */
export default (data: dataType): boolean => {
    return (
        checkRetirementAge(data.sex, data.age, data.time) &&
        checkMoneyTime(data.credit, data.time, data.lastYearMoney) &&
        checkRating(data.rating) &&
        checkMoneyIncome(data.sourceOfIncome) &&
        checkPayment(data)
    );
};
