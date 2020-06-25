import {useContext, useMemo} from 'react';
import {Context as I18n} from 'contexts/I18n';

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 04.02.2020
 * Time: 20:28
 */
export default (target, parameters = {}) => {
    const {resolve} = useContext(I18n);

    /**
     *
     * @param cursor
     * @param parameter
     * @returns {Generator<*|(function(*=): *), void, *>}
     */
    function* build (cursor, parameter) {
        if (typeof cursor === 'function') {
            yield (params) => {
                const computed = cursor(params);

                return resolve(computed, parameter);
            };
        } else {
            yield resolve(cursor, parameter);
        }
    }

    /**
     *
     * @param key
     * @param keys
     * @param parameters
     * @returns {* | (function(*=): *) | void}
     */
    const iterate = (key, keys, parameters) => {
        const {[key]: cursor} = keys;
        const {[key]: parameter} = parameters;

        return build(cursor, parameter).next().value;
    };

    /**
     *
     * @param target
     * @returns {{}}
     */
    const process = (target) => {
        const processed = {};

        for (const key in target) {
            if (!target.hasOwnProperty(key)) {
                continue;
            }

            processed[key] = iterate(key, target, parameters);
        }

        return processed;
    };

    if (typeof target === 'function') {
        return (key) => resolve(target(key), parameters);
    }

    const snippets = useMemo(() => (
        process(target)
    ), [target, parameters]);

    return {
        resolve,
        ...snippets,
    };
}