import React from 'react';

/**
 *
 * @param children
 * @param className
 * @returns {*}
 * @constructor
 */
const Version = ({children, className = null}) => (
    <span className={className}>
        [{children}]
    </span>
);

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 23.09.2019
 * Time: 22:46
 */
export default Version;
