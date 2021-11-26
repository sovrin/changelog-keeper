import {useContext, useMemo} from 'react';
import {Context as I18n} from 'contexts/I18n';

/**
 *
 * @param target
 * @param parameters
 */
const useI18n = (target = null, parameters = {}): any => {
    const {resolve} = useContext(I18n);

    /**
     *
     * @param cursor
     * @param parameter
     */
    const build = (cursor, parameter) => {
        if (typeof cursor === 'function') {
            return (params) => {
                const computed = cursor(params);

                return resolve(computed, parameter);
            };
        } else {
            return resolve(cursor, parameter);
        }
    };

    /**
     *
     * @param key
     * @param keys
     * @param parameters
     */
    const extract = (key, keys, parameters) => {
        const {[key]: cursor} = keys;
        const {[key]: parameter} = parameters;

        return build(cursor, parameter);
    };

    /**
     *
     * @param target
     */
    const process = (target) => {
        const processed = {};

        for (const key in target) {
            if (!target.hasOwnProperty(key)) {
                continue;
            }

            processed[key] = extract(key, target, parameters);
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
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 04.02.2020
 * Time: 20:28
 */
export default useI18n;
