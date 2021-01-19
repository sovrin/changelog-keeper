import React, {createContext} from 'react';
import * as backend from '../backend';

export const Context = createContext(null);
const {Provider} = Context;

export const isNeutralino = backend.isNeutralino;

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 23.09.2019
 * Time: 20:32
 */
export default ({children}) => (
    <Provider value={backend}>
        {children}
    </Provider>
);