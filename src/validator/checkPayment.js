import calc from './../calc/calc.js';

/**
 * Если годовой платёж (включая проценты) больше половины дохода --> кредит не выдаётся
 * @param data
 */
export default (data) => {
    console.log(`calc = ${calc(data)}`);
    return data.last_year_money / 2 >= calc(data);
};
