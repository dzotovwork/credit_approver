import calc from './../calc.js';
const cloneDeep = require('lodash.clonedeep');
let data = {
    age: 20,
    sex: 'M',
    money_income: 'собственный бизнес',
    last_year_money: 10,
    rating: 0,
    credit: 2,
    time: 10,
    goal: 'автокредит',
};
describe('Расчет одобренной суммы кредита', () => {
    beforeEach(() => {
        reporter.epic('Расчет одобренной суммы кредита');
    });
    describe('В зависимости от кредитного рейтинга', () => {
        const params = [
            { money_income: 'собственный бизнес', result: 0.2025 },
            { money_income: 'наёмный работник', result: 0.1975 },
            { money_income: 'пассивный доход', result: 0.205 },
        ];
        beforeEach(() => {
            reporter.feature('В зависимости от кредитного рейтинга');
        });
        params.forEach((param) => {
            it(`Для заемщика с источником дохода: ${param.money_income}`, async () => {
                const cloneData = cloneDeep(data);
                cloneData.money_income = param.money_income;
                reporter.startStep(`calc ${JSON.stringify(cloneData)}`);
                reporter.addAttachment('Данные: ', JSON.stringify(cloneData), 'application/json');
                expect(calc(cloneData)).toBe(param.result);
                reporter.endStep();
            });
        });
    });
});
