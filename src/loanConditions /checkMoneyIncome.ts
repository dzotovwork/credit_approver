/**
 * Если в источнике дохода указано "безработный" --> кредит не выдаётся
 * @param sourceOfIncome
 */
export const checkMoneyIncome = (
    sourceOfIncome: 'пассивный доход' | 'наёмный работник' | 'собственный бизнес' | 'безработный'
): boolean => {
    return sourceOfIncome === 'безработный';
};
