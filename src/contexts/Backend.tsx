import React, {createContext} from 'react';
import runtime from '../runtime';

export const Context = createContext(null);
const {Provider} = Context;

/**
 *
 * @param children
 * @constructor
 */
const Backend = ({children}) => {
    /**
     *
     * @param path
     */
    const read = (path: string) => {
        return new Promise((resolve) => {
            const unsubscribe = runtime.subscribe('read_received', (data) => {
                resolve(data);
                unsubscribe();
            });

            runtime.send('read', path);
        });
    };

    const value = {
        read,
    }

    return (
        <Provider value={value}>
            {children}
        </Provider>
    );
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 23.09.2019
 * Time: 20:32
 */
export default Backend;
