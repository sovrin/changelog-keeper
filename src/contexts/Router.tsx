import React, {createContext, useState} from 'react';
import {router} from 'services';

export const Context = createContext(null);
const {Provider} = Context;

/**
 *
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
const Router = ({routes}) => {
    const {location} = window;
    const {register, fetch} = router();
    const [[route, data], setRoute] = useState([
        location.pathname,
        null,
    ]);

    register(routes);

    const Component = fetch(route);

    const children = (
        Component && <Component {...data}/>
    );

    return (
        <Provider value={setRoute}>
            {children}
        </Provider>
    );
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 30.06.2021
 * Time: 22:45
 */
export default Router;
