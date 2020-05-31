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
    describe('В зависимости от источника дохода', () => {
        beforeEach(() => {
            reporter.feature('В зависимости от источника дохода');
        });
        describe('Источник дохода: собственный бизнес', () => {
            const params = [{ credit: 10.1, result: 1.9 }];
            const cloneData = cloneDeep(data);
            cloneData.rating = 1;
            cloneData.money_income = 'собственный бизнес';
            beforeEach(() => {
                reporter.story('Источник дохода: собственный бизнес');
            });
            params.forEach((param) => {
                it(`Для заемщика с источником дохода: собственный бизнес и запрашиваемой суммой: ${param.credit} млн`, async () => {
                    cloneData.credit = param.credit;
                    reporter.startStep(`calc ${JSON.stringify(cloneData)}`);
                    reporter.addAttachment('Данные: ', JSON.stringify(cloneData), 'application/json');
                    expect(calc(cloneData)).toBe(param.result);
                    reporter.endStep();
                });
            });
        });
    });
});
