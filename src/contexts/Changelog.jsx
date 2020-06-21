import React, {createContext, useReducer, useEffect} from 'react';
import reducer, {Action} from 'reducers/changelog';
import useBackend from 'hooks/useBackend';

export const Context = createContext(null);
const {Provider} = Context;

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 21.11.2019
 * Time: 20:33
 */
export default ({children}) => {
    const {source} = useBackend();
    const [changelog, dispatch] = useReducer(reducer, {
        title: '',
        description: '',
        releases: [],
    });

    const {releases: [head]} = changelog;

    const context = {
        changelog,
        head,
        dispatch,
    };

    useEffect(() => {
        if (!source) {
            return;
        }

        dispatch({type: Action.SET_CHANGELOG, value: source});
    }, [source]);

    return (
        <Provider value={context}>
            {children}
        </Provider>
    );
};