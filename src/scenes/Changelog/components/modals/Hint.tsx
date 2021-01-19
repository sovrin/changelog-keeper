import React from 'react';
import Root from './Hint.style';

/**
 *
 * @param children
 * @returns {*}
 * @constructor
 */
const Hint = ({children}) => (
    <Root>
        {children}
    </Root>
);

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 21.06.2020
 * Time: 16:26
 */
export default Hint;