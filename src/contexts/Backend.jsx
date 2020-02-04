import React, {createContext, useState, useEffect} from 'react';

export const Context = createContext(false);
const {Provider} = Context;

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 23.09.2019
 * Time: 20:32
 */
export default ({children}) => {
    const [backend, setBackend] = useState(null);

    useEffect(() => {
        window.carlo
            .loadParams()
            .then(([params]) => setBackend(params))
        ;
    }, []);

    if (!backend) {
        return null;
    }

    return (
        <Provider value={backend}>
            {children}
        </Provider>
    );
};