import React, {createContext, useReducer} from 'react';
import {settings} from 'reducers';

export const Context = createContext(null);
const {Provider} = Context;

/**
 *
 * @param children
 * @param name
 * @param version
 * @constructor
 */
const Settings = ({children, name, version}) => {
    const [state, dispatch] = useReducer(settings, {
        language: 'english',
        name,
        version
    });

    const context = {
        state,
        dispatch,
    };

    return (
        <Provider value={context}>
            {children(state)}
        </Provider>
    );
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 30.06.2021
 * Time: 23:58
 */
export default Settings;
