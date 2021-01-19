const DELIMITER = ':';

/**
 *
 * @param target
 * @returns {*}
 */
export const explode = (target) => target.split(DELIMITER);

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 21.06.2020
 * Time: 16:54
 */
export default (id, index, context = null) => {
    const path = [
        context,
        id,
        index,
    ];

    const filter = (entry) => {
        return entry !== null;
    }

    return path.filter(filter)
        .join(DELIMITER)
    ;
}