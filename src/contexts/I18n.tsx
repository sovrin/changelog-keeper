import React, {createContext} from 'react';
import i18n from '../i18n';

export const Context = createContext(null);
const {Provider} = Context;

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 04.02.2020
 * Time: 20:21
 */
export default ({lang, children}) => {
    const {[lang]: context} = i18n as any;

    /**
     *
     * @param steps
     * @param target
     */
    const reduce = (steps: Array<string>, target: string) => (
        steps.slice(0)
            .reduce((acc, step, i, a) => {
                const key = step.toUpperCase();
                const {[key]: next} = acc as any;

                if (next === undefined) {
                    // eject
                    a.splice(1);
                }

                return next;
            }, target)
    );

    /**
     *
     * @param cursor
     * @param parameters
     */
    const resolve = (cursor: string, parameters: object) => {
        const steps = cursor.split('.');
        const target = reduce(steps, context);

        if (typeof target === 'function') {
            return target(parameters || {});
        } else if (typeof target === 'object') {
            return `[${cursor}.*]`;
        }

        return target || `[${cursor}]`;
    };

    const value = {
        resolve,
    };

    return (
        <Provider value={value}>
            {children}
        </Provider>
    );
}