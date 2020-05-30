import { dataType } from '../dataType';
import goal from './goal';
import rating from './rating';
import moneyIncome from './moneyIncome';

/**
 * Условия изменения базовой ставки:
 * Все модификаторы процентной ставки суммируются, применяется итоговый модификатор
 * @param data
 */
export default (data: dataType): number => {
    return goal(data) + rating(data) + moneyIncome(data) - Math.log10(data.last_year_money);
};
