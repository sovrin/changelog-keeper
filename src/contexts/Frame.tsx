import React, {createContext, useState} from 'react';
import runtime from '../runtime';

export const Context = createContext(null);
const {Provider} = Context;

/**
 *
 * @param children
 * @constructor
 */
const Frame = ({children}) => {
    const [title, setTitle] = useState();

    /**
     *
     */
    const close = () => {
        return new Promise((resolve) => {
            runtime.send('window.close');

            return resolve(true);
        });
    };


    /**
     *
     */
    const minimize = () => {
        return new Promise((resolve) => {
            runtime.send('window.minimize');

            return resolve(true);
        });
    };

    /**
     *
     */
    const maximize = () => {
        return new Promise((resolve) => {
            runtime.send('window.maximize');

            return resolve(true);
        });
    };

    /**
     *
     */
    const develop = () => {
        return new Promise((resolve) => {
            runtime.send('window.devTools');

            return resolve(true);
        })
    }

    const value = {
        minimize,
        maximize,
        close,
        develop,
        title,
        setTitle
    }

    return (
        <Provider value={value}>
            {children}
        </Provider>
    );
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 02.02.23
 * Time: 22:24
 */
export default Frame;
