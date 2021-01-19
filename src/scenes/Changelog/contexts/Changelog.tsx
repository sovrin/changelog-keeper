import React, {createContext, useReducer, useEffect} from 'react';
import reducer, {Action, INITIAL, HEAD} from '../reducers/changelog';
import useBackend from '~/hooks/useBackend';

export const Context = createContext(null);
const {Provider} = Context;

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 21.11.2019
 * Time: 20:33
 */
export default ({children}) => {
    const {read} = useBackend();
    const [changelog, dispatch] = useReducer(reducer, INITIAL);
    const {releases: [head = HEAD]} = changelog;

    const context = {
        changelog,
        head,
        dispatch,
    };

    useEffect(() => {
        (async () => {
            const source = await read('CHANGELOG.md');

            dispatch({action: Action.SET_CHANGELOG, value: source});
        })();
    }, []);

    return (
        <Provider value={context}>
            {children}
        </Provider>
    );
};