/**
 * Для пассивного дохода ставка повышается на 0.5%
 * для наемных работников ставка снижается на 0.25%
 * для заемщиков с собственным бизнесом ставка повышается на 0.25%
 * @param sourceOfIncome
 */
export default (sourceOfIncome) => {
    switch (sourceOfIncome) {
        case 'пассивный доход':
            return 0.5;
        case 'наёмный работник':
            return -0.25;
        case 'собственный бизнес':
            return 0.25;
        default:
            return 0;
    }
};