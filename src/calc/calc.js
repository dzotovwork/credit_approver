import rate from './rate/rate.js';
import correction from './correction.js';

/**
 * метод расчета годового платежа
 * Базовая ставка - 10%
 * Годовой платеж по кредиту определяется по следующей формуле:
 * (<сумма кредита> * (1 + <срок погашения> * (<базовая ставка> + <модификаторы>))) / <срок погашения>
 * @param data
 */
export default (data) => {
    return Number(
        (
            (correction(data, data.credit) * (1 + data.time * (0.1 + rate(data, correction(data, data.credit))))) /
            data.time
        ).toFixed(6)
    );
};
