import { data } from '../data';
import payment from '../payment/calc';

/**
 * Если годовой платёж (включая проценты) больше половины дохода --> кредит не выдаётся
 * @param data
 */
export default (data: data): boolean => {
    return data.lastYearMoney / 2 > payment(data);
};
