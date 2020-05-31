import calc from './../calc.js';

describe('Калькуляция кредита', () => {
    beforeEach(() => {
        reporter.epic('Калькуляция кредита');
    });
    describe('В зависимости от источника дохода', () => {
        const data = {
            age: 20,
            sex: 'F',
            money_income: 'собственный бизнес',
            last_year_money: 10,
            rating: 0,
            credit: 1,
            time: 10,
            goal: 'автокредит',
        };
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
                data.money_income = param.money_income;
                reporter.startStep(`calc ${JSON.stringify(data)}`);
                reporter.addAttachment('Данные: ', JSON.stringify(data), 'application/json');
                expect(calc(data)).toBe(param.result);
                reporter.endStep();
            });
        });
    });
});
