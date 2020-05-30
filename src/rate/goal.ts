import { dataType } from '../dataType';

/**
 * Расчет модификатора в зависимости от цели кредита
 * -2% для ипотеки, -0.5% для развития бизнеса, +1.5% для потребительского кредита;
 * @param data
 */
export default (data: dataType): number => {
    switch (data.goal) {
        case 'ипотека':
            return -2;
        case 'развитие бизнеса':
            return 0.5;
        case 'потребительский':
            return 1.5;
        default:
            return 0;
    }
};
