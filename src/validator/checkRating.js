/**
 * Если кредитный рейтинг -2 --> кредит не выдаётся
 * @param rating
 */
export default (rating) => {
    return rating !== -2;
};