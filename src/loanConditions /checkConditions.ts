import { dataType } from '../dataType';
import { checkRetirementAge } from './checkRetirementAge';
import { checkMoneyTime } from './checkMoneyTime';
import { checkRating } from './checkRating';
import { checkMoneyIncome } from './checkMoneyIncome';
import { checkPayment } from './checkPayment';

/**
 * Метод проверки, выдавать кредит или нет
 * @param data
 */
export default (data: dataType): boolean => {
    return (
        checkRetirementAge(data.sex, data.age, data.time) &&
        checkMoneyTime(data) &&
        checkRating(data) &&
        checkMoneyIncome(data) &&
        checkPayment(data)
    );
};
