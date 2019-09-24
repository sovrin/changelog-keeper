import React from 'react';

/**
 *
 * @param children
 * @returns {*}
 * @constructor
 */
const Version = ({children}) => {
    return (
        <span className="version">
            {children}
        </span>
    );
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 23.09.2019
 * Time: 22:46
 */
export default Version;