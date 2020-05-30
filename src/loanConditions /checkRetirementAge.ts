/**
 * Проверка возраста заемщика
 * Если возраст превышает пенсионный возраст на момент возврата кредита --> кредит не выдаётся
 * @param data
 * @return {boolean}
 */
export const checkRetirementAge = (data: any): boolean => {
    return data.sex === 'M' ? checkMale(data) : checkFemale(data);
};

/**
 * Проверка мужчин
 * @param data
 * @return {boolean}
 */
const checkMale = (data: any) => {
    const retirementAge = 65;
    return data.age + data.time < retirementAge;
};

/**
 * Проверка женщин
 * @param data
 * @return {boolean}
 */
const checkFemale = (data: any): boolean => {
    const retirementAge = 60;
    return data.age + data.time < retirementAge;
};
