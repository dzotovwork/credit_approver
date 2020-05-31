//сделать проверки на это
// типа если пассивный доход и сумма запросса больше ляма то не выдается типа метод чек сумм
/*
Если работают несколько условий по сумме кредита - выбирается наименьшая
При пассивном доходе выдаётся кредит на сумму до 1 млн, наёмным работникам - до 5 млн, собственное дело - до 10 млн
При кредитном рейтинге -1 выдаётся кредит на сумму до 1 млн, при 0 - до 5 млн, при 1 или 2 - до 10 млн
 */
import checkRetirementAge from "src/checkRetirementAge";
import checkMoneyTime from "src/checkMoneyTime";

const checkConditions = (data) => {
    return (
        checkRetirementAge(data.sex, data.age, data.time) &&
        checkMoneyTime(data.credit, data.time, data.last_year_money) &&
        checkRating(data.rating) &&
        checkMoneyIncome(data.money_income) &&
        checkPayment(data)
    );
};