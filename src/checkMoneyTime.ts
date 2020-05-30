import { dataType } from './dataType';

/**
 * Если результат деления запрошенной суммы на срок погашения в годах более трети годового дохода --> кредит не выдаётся
 * @param data
 */
export function checkMoneyTime(data: dataType) {
    return data.credit / data.time < data.last_year_money / 3;
}
