import React, {createContext, useReducer, useEffect} from 'react';
import reducer, {Action, INITIAL, HEAD} from '../reducers/changelog';
import {useBackend} from 'hooks';

export const Context = createContext(null);
const {Provider} = Context;

/**
 *
 * @param children
 * @constructor
 */
const Changelog = ({children}) => {
    const {read} = useBackend();
    const [changelog, dispatch] = useReducer(reducer, INITIAL);
    const {releases: [head = HEAD]} = changelog;

    const context = {
        changelog,
        head,
        dispatch,
    };

    useEffect(() => {
        read('CHANGELOG.md').then((source) => {
            dispatch({action: Action.SET_CHANGELOG, value: source});
        });
    }, []);

    return (
        <Provider value={context}>
            {children}
        </Provider>
    );
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 21.11.2019
 * Time: 20:33
 */
export default Changelog;
