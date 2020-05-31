import calc from './../calc/calc.js';

/**
 * Если годовой платёж (включая проценты) больше половины дохода --> кредит не выдаётся
 * @param data
 */
export default (data) => {
    console.log(`calc = ${calc(data)}`)
    console.log(`last_year_money = ${data.last_year_money}`)
    return data.last_year_money / 2 > calc(data);
};
