import goal from "./goal.js";
import rating from "./rating.js";
import moneyIncome from "./moneyIncome.js";
/**
 * Условия изменения базовой ставки:
 * Все модификаторы процентной ставки суммируются, применяется итоговый модификатор
 * @param data
 */
export default (data) => {
    return goal(data.goal) + rating(data.rating) + moneyIncome(data.money_income) - Math.log10(data.last_year_money);
};