const DELIMITER = ':';

/**
 *
 * @param target
 * @returns {*}
 */
export const explode = (target: string) => target.split(DELIMITER);
/**
 *
 * @param id
 * @param index
 * @param context
 */
const usePath = (id, index, context = null) => {
    const path = [
        context,
        id,
        index,
    ];

    /**
     *
     * @param entry
     */
    const filter = (entry) => {
        return entry !== null;
    };

    return path.filter(filter)
        .join(DELIMITER)
    ;
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 21.06.2020
 * Time: 16:54
 */
export default usePath;
