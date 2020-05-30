import { dataType } from '../dataType';
import payment from '../payment/calc';

/**
 * Если годовой платёж (включая проценты) больше половины дохода --> кредит не выдаётся
 * @param data
 */
export default (data: dataType): boolean => {
    return data.lastYearMoney / 2 > payment(data);
};
