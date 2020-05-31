import calc from './../calc.js';
const cloneDeep = require('lodash.clonedeep');
let data = {
    age: 20,
    sex: 'F',
    money_income: 'собственный бизнес',
    last_year_money: 10,
    rating: 0,
    credit: 1,
    time: 10,
    goal: 'автокредит',
};
describe('Калькуляция кредита', () => {
    beforeEach(() => {
        reporter.epic('Калькуляция кредита');
    });
    describe('В зависимости от источника дохода', () => {
        const params = [
            { money_income: 'собственный бизнес', result: 0.2025 },
            { money_income: 'наёмный работник', result: 0.1975 },
            { money_income: 'пассивный доход', result: 0.205 },
        ];
        beforeEach(() => {
            reporter.feature('В зависимости от источника дохода');
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
    describe('В зависимости от суммы кредита', () => {
        const params = [
            { credit: 10, result: 1.85 },
            { credit: 5, result: 0.940051 },
            { credit: 1, result: 0.195 },
            { credit: 0.5, result: 0.099005 },
            { credit: 0.1, result: 0.0205 },
        ];
        beforeEach(() => {
            reporter.feature('В зависимости от суммы кредита');
        });
        params.forEach((param) => {
            it(`Запрашиваемая сумма кредита: ${param.credit} млн`, async () => {
                const cloneData = cloneDeep(data);
                cloneData.credit = param.credit;
                cloneData.rating = 2;
                reporter.startStep(`calc ${JSON.stringify(cloneData)}`);
                reporter.addAttachment('Данные: ', JSON.stringify(cloneData), 'application/json');
                expect(calc(cloneData)).toBe(param.result);
                reporter.endStep();
            });
        });
    });
    describe('В зависимости от кредитного рейтинга', () => {
        const params = [{ rating: 2, result: 0.1975 }];
        beforeEach(() => {
            reporter.feature('В зависимости от кредитного рейтинга');
        });
        params.forEach((param) => {
            it(`Кредитный рейтинг заемщика: ${param.rating} млн`, async () => {
                const cloneData = cloneDeep(data);
                cloneData.rating = param.rating;
                cloneData.money_income = 'пассивный доход';
                reporter.startStep(`calc ${JSON.stringify(cloneData)}`);
                reporter.addAttachment('Данные: ', JSON.stringify(cloneData), 'application/json');
                expect(calc(cloneData)).toBe(param.result);
                reporter.endStep();
            });
        });
    });
});
