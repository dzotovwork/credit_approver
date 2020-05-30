/**
 * Проверка возраста заемщика
 * Если возраст превышает пенсионный возраст на момент возврата кредита --> кредит не выдаётся
 * @param sex - пол заемщика
 * @param age - возраст заемщика
 * @param time - срок кредита
 */
export default (sex: 'M' | 'F', age: number, time: number): boolean => {
    return sex === 'M' ? __checkMale(age, time) : __checkFemale(age, time);
};

/**
 * Проверка мужчин
 * @param age
 * @param time
 * @private
 */
const __checkMale = (age: number, time: number): boolean => {
    const retirementAge = 65;
    return age + time < retirementAge;
};

/**
 * Проверка женщин
 * @param age
 * @param time
 * @private
 */
const __checkFemale = (age: number, time: number): boolean => {
    const retirementAge = 60;
    return age + time < retirementAge;
};
