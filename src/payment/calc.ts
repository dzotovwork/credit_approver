import { data } from '../data';
import rate from '../rate/rate';

/**
 * метод расчета годового платежа
 * Базовая ставка - 10%
 * Годовой платеж по кредиту определяется по следующей формуле:
 * (<сумма кредита> * (1 + <срок погашения> * (<базовая ставка> + <модификаторы>))) / <срок погашения>
 * @param data
 */
export default (data: data): number => {
    return (data.credit * (1 + data.time * (10 + rate(data)))) / data.time;
};
