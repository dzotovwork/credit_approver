import calc from './../calc.js';

describe('Калькуляция кредита', () => {
    beforeEach(() => {
        reporter.epic('Калькуляция кредита');
    });
    describe('В зависимости от источника дохода', () => {
        beforeEach(() => {
            reporter.feature('В зависимости от источника дохода');
        });
        it('Для заемщиков с собственным бизнесом', async () => {
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
            reporter.startStep(`calc ${JSON.stringify(data)}`);
            expect(calc(data)).toBe(0.2025);
            reporter.endStep();
        });
    });
});
