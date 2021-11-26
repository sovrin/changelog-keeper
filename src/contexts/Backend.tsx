import React, {createContext} from 'react';
import backend from 'adapters';

export const Context = createContext(null);
const {Provider} = Context;

/**
 *
 * @param children
 * @constructor
 */
const Backend = ({children}) => (
    <Provider value={backend}>
        {children}
    </Provider>
);

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 23.09.2019
 * Time: 20:32
 */
export default Backend;
