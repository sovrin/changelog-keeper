import {useContext, useMemo} from 'react';
import {Context as I18n} from 'contexts/I18n';

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 04.02.2020
 * Time: 20:28
 */
export default (keys, parameters = {}) => {
    const {resolve} = useContext(I18n);

    /**
     *
     */
    const process = (keys, parameters) => {
        const processed = {};

        for (const key in keys) {
            if (!keys.hasOwnProperty(key)) {
                continue;
            }

            let {[key]: cursor} = keys;
            let {[key]: parameter} = parameters;

            if (typeof cursor === 'function') {
                processed[key] = (params) => {
                    const computed = cursor(params);

                    return resolve(computed, parameter);
                };
            } else {
                processed[key] = resolve(cursor, parameter);
            }
        }

        return processed;
    };

    const snippets = useMemo(() => (
        process(keys, parameters)
    ), [keys, parameters]);

    return {
        resolve,
        ...snippets,
    };
}