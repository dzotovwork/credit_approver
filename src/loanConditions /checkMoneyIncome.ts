/**
 * Если в источнике дохода указано "безработный" --> кредит не выдаётся
 * @param sourceOfIncome
 */
export default (
    sourceOfIncome: 'пассивный доход' | 'наёмный работник' | 'собственный бизнес' | 'безработный'
): boolean => {
    return sourceOfIncome === 'безработный';
};
