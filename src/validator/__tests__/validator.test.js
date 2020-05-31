import checkRetirementAge from './../checkRetirementAge.js';
describe('Валидация выдачи кредита', () => {
    describe('Если возраст превышает пенсионный возраст на момент возврата кредита --> кредит не выдаётся', () => {
        describe('Мужчины', () => {
            it('Возраст на момент возврата кредита = 65', async () => {
                reporter.startStep('возраст 60m , срок 5');
                expect(checkRetirementAge('M', 60, 5)).toBe(true);
                reporter.endStep();
            });
            it('Возраст на момент возврата кредита = 66', async () => {
                reporter.startStep('возраст 60m , срок 6');
                expect(checkRetirementAge('M', 60, 6)).toBe(false);
                reporter.endStep();
            });
        });
    });
});
