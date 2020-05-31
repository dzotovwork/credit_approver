/**
 * Если в источнике дохода указано "безработный" --> кредит не выдаётся
 * @param sourceOfIncome
 */
export default (sourceOfIncome) => {
    return sourceOfIncome !== 'безработный';
};