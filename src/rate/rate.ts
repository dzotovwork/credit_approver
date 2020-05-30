import { data } from '../data';
import goal from './goal';
import rating from './rating';
import moneyIncome from './moneyIncome';

/**
 * Условия изменения базовой ставки:
 * Все модификаторы процентной ставки суммируются, применяется итоговый модификатор
 * @param data
 */
export default (data: data): number => {
    return goal(data.goal) + rating(data.rating) + moneyIncome(data.sourceOfIncome) - Math.log10(data.lastYearMoney);
};
