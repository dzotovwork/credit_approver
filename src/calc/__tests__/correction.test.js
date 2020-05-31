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
        describe('Рейтинг: 0', () => {
            const params = [
                { credit: 5.1, result: 0.977551 },
                { credit: 5, result: 0.977551 },
                { credit: 4.999, result: 0.97736 }
            ];
            const cloneData = cloneDeep(data);
            cloneData.rating = 0;
            beforeEach(() => {
                reporter.story('Рейтинг: 0');
            });
            params.forEach((param) => {
                it(`Для заемщика с рейтингом: 0 и запрашиваемой суммой: ${param.credit} млн`, async () => {
                    cloneData.credit = param.credit;
                    reporter.startStep(`calc ${JSON.stringify(cloneData)}`);
                    reporter.addAttachment('Данные: ', JSON.stringify(cloneData), 'application/json');
                    expect(calc(cloneData)).toBe(param.result);
                    reporter.endStep();
                });
            });
        });
        describe('Рейтинг: -1', () => {
            const params = [
                { credit: 1.1, result: 0.2175 },
                { credit: 1, result: 0.2175 },
                { credit: 0.99999, result: 0.217498 }
            ];
            const cloneData = cloneDeep(data);
            cloneData.rating = -1;
            beforeEach(() => {
                reporter.story('Рейтинг: -1');
            });
            params.forEach((param) => {
                it(`Для заемщика с рейтингом: -1 и запрашиваемой суммой: ${param.credit} млн`, async () => {
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
