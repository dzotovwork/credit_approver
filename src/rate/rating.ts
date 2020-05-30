import { data } from '../data';

/**
 * Расчет модификатора в зависимости от кредитного рейтинга
 * +1.5% для кредитного рейтинга -1, 0% для кредитного рейтинга 0,
 * -0.25% для кредитного рейтинга 1, -0.75% для кредитного рейтинга 2
 * @param rating
 */
export default (rating: -2 | -1 | 0 | 1 | 2): number => {
    switch (rating) {
        case -1:
            return 1.5;
        case 1:
            return -0.25;
        case 2:
            return -0.75;
        default:
            return 0;
    }
};
