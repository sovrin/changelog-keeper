import React, {createContext, useEffect, useState} from 'react';
import i18n from '../i18n';

export const Context = createContext(null);
const {Provider} = Context;

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 04.02.2020
 * Time: 20:21
 */
export default ({lang, children}) => {
    const {[lang]: context} = i18n;

    const reduce = (steps, target) => (
        steps.slice(0).reduce((acc, step, i, a) => {
            const key = step.toUpperCase();
            const {[key]: next} = acc;

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
     * @returns {T}
     */
    const resolve = (cursor, parameters) => {
        const steps = cursor.split('.');
        const target = reduce(steps, context);

        if (typeof target === 'function') {
            return target(parameters || {});
        }

        return target;
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