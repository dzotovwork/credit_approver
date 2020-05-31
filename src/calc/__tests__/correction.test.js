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
        beforeEach(() => {
            reporter.feature('В зависимости от кредитного рейтинга');
        });
        describe('Рейтинг: 2', () => {
            const params = [
                { credit: 10.1, result: 1.85 },
                { credit: 10, result: 1.85 },
                { credit: 9.9, result: 1.831932 }
            ];
            const cloneData = cloneDeep(data);
            cloneData.rating = 2;
            beforeEach(() => {
                reporter.story('Рейтинг: 2');
            });
            params.forEach((param) => {
                it(`Для заемщика с рейтингом: 2 и запрашиваемой суммой: ${param.credit} млн`, async () => {
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
