import React, {createContext, useContext} from 'react';
import PropTypes from 'prop-types';

/**
 *
 */
const switched = () => {
    const Context = createContext(false);
    const {Provider} = Context;

    /**
     *
     * @param conditions
     * @param children
     * @returns {*}
     * @constructor
     */
    const Switch = ({conditions, children}) => (
        <Provider value={conditions}>
            {children}
        </Provider>
    );

    Switch.propTypes = {
        conditions: PropTypes.object.isRequired,
    };

    /**
     *
     * @param children
     * @param test
     * @param id
     * @returns {null|*}
     * @constructor
     */
    const Case = ({children, test}) => {
        const conditions = useContext(Context);

        if (test(conditions)) {
            children = (typeof children === 'function')
                ? children(conditions)
                : children
            ;

            return children || null;
        }

        return null;
    };

    Case.propTypes = {
        test: PropTypes.func.isRequired,
    };

    return {
        Switch,
        Case,
    };
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 30.08.2019
 * Time: 15:12
 */
export default switched;