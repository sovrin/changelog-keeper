import React, {createContext, useContext} from 'react';
import PropTypes from 'prop-types';

export const Context = createContext(false);

const {Provider} = Context;

/**
 *
 * @param conditions
 * @param children
 * @returns {*}
 * @constructor
 */
const Switch = ({conditions, children}) => {
    Switch.propTypes = {
        conditions: PropTypes.object.isRequired,
    };

    return (
        <Provider value={conditions}>
            {children}
        </Provider>
    );
};

/**
 *
 * @param children
 * @param test
 * @returns {null|*}
 * @constructor
 */
export const Case = ({children, test}) => {
    Case.propTypes = {
        test: PropTypes.func.isRequired,
    };

    const context = useContext(Context);

    if (test(context)) {
        children = (typeof children === 'function')
            ? children(context)
            : children
        ;

        return children || null;
    }

    return null;
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 30.08.2019
 * Time: 15:12
 */
export default Switch;