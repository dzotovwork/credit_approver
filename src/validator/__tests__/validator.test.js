import checkRetirementAge from './../checkRetirementAge.js';
describe('Валидация выдачи кредита', () => {
    beforeEach(() => {
        reporter.epic('Валидация выдачи кредита');
        reporter.feature('Если возраст превышает пенсионный возраст на момент возврата кредита --> кредит не выдаётся');
    });
    describe('Мужчины', () => {
        beforeEach(() => {
            reporter.story('Мужчины');
        });
        it('Возраст на момент возврата кредита = 65, кредит выдается', async () => {
            reporter.startStep('возраст 60 , срок 5, кредит не выдается');
            expect(checkRetirementAge('M', 60, 5)).toBe(true);
            reporter.endStep();
        });
        it('Возраст на момент возврата кредита = 66', async () => {
            reporter.startStep('возраст 60 , срок 6');
            expect(checkRetirementAge('M', 60, 6)).toBe(false);
            reporter.endStep();
        });
    });
    describe('Женщины', () => {
        beforeEach(() => {
            reporter.story('Женщины');
        });
        it('Возраст на момент возврата кредита = 60, кредит выдается', async () => {
            reporter.startStep('возраст 55 , срок 5');
            expect(checkRetirementAge('F', 55, 5)).toBe(true);
            reporter.endStep();
        });
        it('Возраст на момент возврата кредита = 61, кредит не выдается', async () => {
            reporter.startStep('возраст 55 , срок 6');
            expect(checkRetirementAge('F', 55, 6)).toBe(false);
            reporter.endStep();
        });
    });
});
