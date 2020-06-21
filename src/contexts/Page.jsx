import React, {createContext, useEffect, useState} from 'react';
import useUnique from 'hooks/useUnique';

export const Context = createContext(null);
const {Provider} = Context;

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 21.11.2019
 * Time: 20:06
 */
export default ({children}) => {
    const [id, setId] = useState(null);

    const context = {
        id,
    };

    useEffect(() => {
        const build = useUnique();

        setId(build());
    }, []);

    return (
        <Provider value={context}>
            {children}
        </Provider>
    );
}