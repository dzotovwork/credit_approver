import { dataType } from '../dataType';
import payment from '../payment/calc';

/**
 * Если годовой платёж (включая проценты) больше половины дохода --> кредит не выдаётся
 * @param data
 */
export default (data: dataType): boolean => {
    const yearPayment = payment(data);
    return data.lastYearMoney / 2 < yearPayment;
};
