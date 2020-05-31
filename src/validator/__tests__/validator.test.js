import checkRetirementAge from './../checkRetirementAge.js';
import checkMoneyTime from './../checkMoneyTime.js';
import checkRating from './../checkRating.js';
import checkMoneyIncome from './../checkMoneyIncome.js';
import checkPayment from './../checkPayment.js';
describe('Валидация выдачи кредита', () => {
    beforeEach(() => {
        reporter.epic('Валидация выдачи кредита');
    });
    describe('Проверка возраста', () => {
        beforeEach(() => {
            reporter.feature('Проверка возраста');
            reporter.description(
                'Если возраст превышает пенсионный возраст на момент возврата кредита --> кредит не выдаётся'
            );
        });
        describe('Мужчины', () => {
            beforeEach(() => {
                reporter.story('Мужчины');
            });
            it('Возраст на момент возврата кредита = 65, кредит выдается', async () => {
                reporter.startStep(`checkRetirementAge('M', 60, 5)`);
                expect(checkRetirementAge('M', 60, 5)).toBe(true);
                reporter.endStep();
            });
            it('Возраст на момент возврата кредита < 65, кредит выдается', async () => {
                reporter.startStep(`checkRetirementAge('M', 59, 5)`);
                expect(checkRetirementAge('M', 60, 5)).toBe(true);
                reporter.endStep();
            });
            it('Возраст на момент возврата кредита = 66', async () => {
                reporter.startStep(`checkRetirementAge('M', 60, 6)`);
                expect(checkRetirementAge('M', 60, 6)).toBe(false);
                reporter.endStep();
            });
        });
        describe('Женщины', () => {
            beforeEach(() => {
                reporter.story('Женщины');
            });
            it('Возраст на момент возврата кредита = 60, кредит выдается', async () => {
                reporter.startStep(`checkRetirementAge('F', 55, 5)`);
                expect(checkRetirementAge('F', 55, 5)).toBe(true);
                reporter.endStep();
            });
            it('Возраст на момент возврата кредита < 60, кредит выдается', async () => {
                reporter.startStep(`checkRetirementAge('F', 55, 5)`);
                expect(checkRetirementAge('F', 54, 5)).toBe(true);
                reporter.endStep();
            });
            it('Возраст на момент возврата кредита = 61, кредит не выдается', async () => {
                reporter.startStep(`checkRetirementAge('F', 55, 6)`);
                expect(checkRetirementAge('F', 55, 6)).toBe(false);
                reporter.endStep();
            });
        });
    });
    describe('Валидация срока и суммы кредита', () => {
        beforeEach(() => {
            reporter.feature('Валидация срока и суммы кредита');
            reporter.description(
                'Если результат деления запрошенной суммы на срок погашения в годах более трети годового дохода --> кредит не выдаётся'
            );
        });
        it('Запрошенная сумма 600000, срок 2 года, годовой доход 900000', async () => {
            reporter.startStep(`checkMoneyTime(0.6, 2, 0.9)`);
            expect(checkMoneyTime(0.6, 2, 0.9)).toBe(true);
            reporter.endStep();
        });
        it('Запрошенная сумма 599999, срок 2 года, годовой доход 900000', async () => {
            reporter.startStep(`checkMoneyTime(0.6, 2, 0.9)`);
            expect(checkMoneyTime(0.599999, 2, 0.9)).toBe(true);
            reporter.endStep();
        });
        it('Запрошенная сумма 600001, срок 2 года, годовой доход 900000', async () => {
            reporter.startStep(`checkMoneyTime(0.600001, 2, 0.9)`);
            expect(checkMoneyTime(0.600001, 2, 0.9)).toBe(false);
            reporter.endStep();
        });
    });
    describe('Валидация кредитного рейтинга', () => {
        beforeEach(() => {
            reporter.feature('Валидация кредитного рейтинга');
            reporter.description('Если кредитный рейтинг -2 --> кредит не выдаётся');
        });
        it('Кредитный рейтинг: -2', async () => {
            reporter.startStep(`checkRating(-2)`);
            expect(checkRating(-2)).toBe(false);
            reporter.endStep();
        });
        it('Кредитный рейтинг: !-1', async () => {
            reporter.startStep(`checkRating(-1)`);
            expect(checkRating(-1)).toBe(true);
            reporter.endStep();
        });
    });
    describe('Валидация источника дохода', () => {
        beforeEach(() => {
            reporter.feature('Валидация источника дохода');
            reporter.description('Если кредитный рейтинг -2 --> кредит не выдаётся');
        });
        it('Источник дохода: безработный', async () => {
            reporter.startStep(`checkMoneyIncome('безработный')`);
            expect(checkMoneyIncome('безработный')).toBe(false);
            reporter.endStep();
        });
        it('Источник дохода: !безработный', async () => {
            reporter.startStep(`checkMoneyIncome('наёмный работник')`);
            expect(checkMoneyIncome('наёмный работник')).toBe(true);
            reporter.endStep();
        });
    });
    describe('Валидация годового платежа и годового дохода', () => {
        beforeEach(() => {
            reporter.feature('Валидация годового платежа и годового дохода');
            reporter.description(
                'Если годовой платёж (включая проценты) больше половины дохода --> кредит не выдаётся'
            );
        });
        it('Годовой платеж с процентами равен половине дохода', async () => {
            const data = {
                age: 20,
                sex: 'F',
                money_income: 'пассивный доход',
                last_year_money: 0.4,
                rating: 0,
                credit: 1,
                time: 10,
                goal: 'развитие бизнеса',
            };
            reporter.startStep(`checkPayment ${JSON.stringify(data)}`);
            expect(checkPayment(data)).toBe(true);
            reporter.endStep();
        });
        it('Годовой платеж с процентами меньше половины дохода', async () => {
            const data = {
                age: 20,
                sex: 'F',
                money_income: 'пассивный доход',
                last_year_money: 0.400001,
                rating: 0,
                credit: 1,
                time: 10,
                goal: 'развитие бизнеса',
            };
            reporter.startStep(`checkPayment ${JSON.stringify(data)}`);
            expect(checkPayment(data)).toBe(true);
            reporter.endStep();
        });
        it('Годовой платеж с процентами больше половины дохода', async () => {
            const data = {
                age: 20,
                sex: 'F',
                money_income: 'пассивный доход',
                last_year_money: 0.399,
                rating: 0,
                credit: 1,
                time: 10,
                goal: 'развитие бизнеса',
            };
            reporter.startStep(`checkPayment ${JSON.stringify(data)}`);
            expect(checkPayment(data)).toBe(false);
            reporter.endStep();
        });
    });
});
