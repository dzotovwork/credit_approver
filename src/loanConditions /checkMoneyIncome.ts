import { dataType } from '../dataType';

/**
 * Если в источнике дохода указано "безработный" --> кредит не выдаётся
 * @param data
 */
export const checkMoneyIncome = (data: dataType): boolean => {
    return data.money_income === 'безработный';
};
