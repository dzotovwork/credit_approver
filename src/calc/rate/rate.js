import goal from './goal.js';
import rating from './rating.js';
import moneyIncome from './moneyIncome.js';

/**
 * Условия изменения базовой ставки:
 * Все модификаторы процентной ставки суммируются, применяется итоговый модификатор
 * @param data
 * @param approvedSum
 */
export default (data, approvedSum) => {
    return goal(data.goal) + rating(data.rating) + moneyIncome(data.money_income) + -Math.log10(approvedSum) / 100;
};
