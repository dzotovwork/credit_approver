/**
 * Если кредитный рейтинг -2 --> кредит не выдаётся
 * @param rating
 */
export default (rating: -2 | -1 | 0 | 1 | 2): boolean => {
    return rating !== -2;
};
