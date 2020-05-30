const btn = document.getElementById('send');

btn.addEventListener('click', () => {
    console.log('allooo');
    const data = {
        age: Number(document.getElementById('age').value),
        sex: document.getElementById('sex').value,
        money_income: document.getElementById('money_income').value,
        last_year_money: Number(document.getElementById('last_year_money').value),
        rating: Number(document.getElementById('rating').value),
        credit: Number(document.getElementById('credit').value),
        time: Number(document.getElementById('time').value),
        goal: document.getElementById('goal').value,
    };
    let result = 'Кредит выдаётся';
    if (!checkConditions(data)) {
        result = 'Кредит не выдаётся';
    }
    if (result === 'Кредит не выдаётся') {
        console.log(JSON.stringify(result));
    } else {
        console.log(`Кредит выдаётся с условиями: ${calc(data)}`);
    }
});
const checkConditions = (data) => {
    return (
        checkRetirementAge(data.sex, data.age, data.time) &&
        checkMoneyTime(data.credit, data.time, data.last_year_money) &&
        checkRating(data.rating) &&
        checkMoneyIncome(data.money_income) &&
        checkPayment(data)
    );
};
/**
 * Если в источнике дохода указано "безработный" --> кредит не выдаётся
 * @param sourceOfIncome
 */
const checkMoneyIncome = (sourceOfIncome) => {
    return sourceOfIncome !== 'безработный';
};
/**
 * Если результат деления запрошенной суммы на срок погашения в годах более трети годового дохода --> кредит не выдаётся
 * @param credit - сумма запрашиваемого кредита
 * @param time - срок кредита
 * @param money - доход за последний год
 */
const checkMoneyTime = (credit, time, money) => {
    return credit / time < money / 3;
};

/**
 * Если годовой платёж (включая проценты) больше половины дохода --> кредит не выдаётся
 * @param data
 */
const checkPayment = (data) => {
    return data.last_year_money / 2 > calc(data);
};
/**
 * Если кредитный рейтинг -2 --> кредит не выдаётся
 * @param rating
 */
const checkRating = (rating) => {
    return rating !== -2;
};
/**
 * Проверка возраста заемщика
 * Если возраст превышает пенсионный возраст на момент возврата кредита --> кредит не выдаётся
 * @param sex - пол заемщика
 * @param age - возраст заемщика
 * @param time - срок кредита
 */
const checkRetirementAge = (sex, age, time) => {
    return sex === 'M' ? __checkMale(age, time) : __checkFemale(age, time);
};

/**
 * Проверка мужчин
 * @param age
 * @param time
 * @private
 */
const __checkMale = (age, time) => {
    const retirementAge = 65;
    return age + time < retirementAge;
};

/**
 * Проверка женщин
 * @param age
 * @param time
 * @private
 */
const __checkFemale = (age, time) => {
    const retirementAge = 60;
    return age + time < retirementAge;
};
/**
 * метод расчета годового платежа
 * Базовая ставка - 10%
 * Годовой платеж по кредиту определяется по следующей формуле:
 * (<сумма кредита> * (1 + <срок погашения> * (<базовая ставка> + <модификаторы>))) / <срок погашения>
 * @param data
 */
const calc = (data) => {
    return (data.credit * (1 + data.time * (10 + rate(data)))) / data.time;
};
/**
 * Расчет модификатора в зависимости от цели кредита
 * -2% для ипотеки, -0.5% для развития бизнеса, +1.5% для потребительского кредита;
 * @param goal
 */
const goal = (goal) => {
    switch (goal) {
        case 'ипотека':
            return -2;
        case 'развитие бизнеса':
            return 0.5;
        case 'потребительский':
            return 1.5;
        default:
            return 0;
    }
};
/**
 * Для пассивного дохода ставка повышается на 0.5%
 * для наемных работников ставка снижается на 0.25%
 * для заемщиков с собственным бизнесом ставка повышается на 0.25%
 * @param sourceOfIncome
 */
const moneyIncome = (sourceOfIncome) => {
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

/**
 * Условия изменения базовой ставки:
 * Все модификаторы процентной ставки суммируются, применяется итоговый модификатор
 * @param data
 */
const rate = (data) => {
    return goal(data.goal) + rating(data.rating) + moneyIncome(data.money_income) - Math.log10(data.last_year_money);
};
/**
 * Расчет модификатора в зависимости от кредитного рейтинга
 * +1.5% для кредитного рейтинга -1, 0% для кредитного рейтинга 0,
 * -0.25% для кредитного рейтинга 1, -0.75% для кредитного рейтинга 2
 * @param rating
 */
const rating = (rating) => {
    switch (rating) {
        case -1:
            return 1.5;
        case 1:
            return -0.25;
        case 2:
            return -0.75;
        default:
            return 0;
    }
};
