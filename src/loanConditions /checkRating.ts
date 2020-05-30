import { dataType } from '../dataType';

/**
 * Если кредитный рейтинг -2 --> кредит не выдаётся
 * @param data
 */
export const checkRating = (data: dataType): boolean => {
    return data.rating === -2;
};
