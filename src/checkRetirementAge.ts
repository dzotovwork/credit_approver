/**
 * Проверка возраста заемщика
 * Если возраст превышает пенсионный возраст на момент возврата кредита --> кредит не выдаётся
 * @param data
 * @return {boolean}
 */
export function checkRetirementAge(data: any) {
    return data.sex === 'M' ? checkMale(data) : checkFemale(data);
}

/**
 * Проверка мужчин
 * @param data
 * @return {boolean}
 */
function checkMale(data: any) {
    const retirementAge = 65;
    return data.age + data.time < retirementAge;
}

/**
 * Проверка женщин
 * @param data
 * @return {boolean}
 */
function checkFemale(data: any) {
    const retirementAge = 60;
    return data.age + data.time < retirementAge;
}
