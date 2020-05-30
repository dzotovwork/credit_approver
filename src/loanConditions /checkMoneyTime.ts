/**
 * Если результат деления запрошенной суммы на срок погашения в годах более трети годового дохода --> кредит не выдаётся
 * @param credit - сумма запрашиваемого кредита
 * @param time - срок кредита
 * @param money - доход за последний год
 */
export default (credit: number, time: number, money: number): boolean => {
    return credit / time < money / 3;
};
