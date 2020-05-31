/**
 * Если работают несколько условий по сумме кредита - выбирается наименьшая
 * @param data
 * @param creditSum
 */
export default (data, creditSum) => Math.min(creditSum, getMaxCreditByRating(data), getMaxCreditByMoneyIncome(data));
/**
 * Расчет максимального кредита исходя из источника дохода
 * При пассивном доходе выдаётся кредит на сумму до 1 млн, наёмным работникам - до 5 млн, собственное дело - до 10 млн
 * @param data
 */
const getMaxCreditByMoneyIncome = (data) => {
    switch (data.money_income) {
        case 'пассивный доход':
            return 1;
        case 'наёмный работник':
            return 5;
        case 'собственный бизнес':
            return 10;
    }
};
/**
 * Расчет максимального кредита исходя из кредитного рейтинга
 * При кредитном рейтинге -1 выдаётся кредит на сумму до 1 млн, при 0 - до 5 млн, при 1 или 2 - до 10 млн
 * @param data
 */
const getMaxCreditByRating = (data) => {
    switch (data.rating) {
        case -1:
            return 1;
        case -0:
            return 5;
        case 1:
        case 2:
            return 10;
    }
};
