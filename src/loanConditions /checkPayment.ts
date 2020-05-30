import { dataType } from '../dataType';
import payment from '../payment/calc';

/**
 * Если годовой платёж (включая проценты) больше половины дохода --> кредит не выдаётся
 * @param data
 */
export const checkPayment = (data: dataType): boolean => {
    const yearPayment = payment(data); // метод для расчета платежа с процентами
    return data.lastYearMoney / 2 < yearPayment;
};
