import calc from './../calc/calc.js';

/**
 * Если годовой платёж (включая проценты) больше половины дохода --> кредит не выдаётся
 * @param data
 */
export default (data) => data.last_year_money / 2 > calc(data);
