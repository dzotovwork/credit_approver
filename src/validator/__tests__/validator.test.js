import checkRetirementAge from './../checkRetirementAge.js';
import checkMoneyTime from './../checkMoneyTime.js';
import checkRating from './../checkRating.js';
describe('Валидация выдачи кредита', () => {
    beforeEach(() => {
        reporter.epic('Валидация выдачи кредита');
    });
    describe('Проерка возраста', () => {
        beforeEach(() => {
            reporter.feature('Проерка возраста');
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
        it('Кредитный рейтинг: -1', async () => {
            reporter.startStep(`checkRating(-1)`);
            expect(checkRating(-1)).toBe(true);
            reporter.endStep();
        });
    });
});
