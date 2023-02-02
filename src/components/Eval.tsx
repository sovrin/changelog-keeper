import React from 'react';

/**
 *
 * @param children
 * @param test
 * @returns {*}
 * @constructor
 */
const Eval = ({children, test}) => {
    if (!test) {
        return null;
    }

    return (children);
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 21.06.2020
 * Time: 19:37
 */
export default Eval;