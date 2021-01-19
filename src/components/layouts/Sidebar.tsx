import React from 'react';
import usePage from '~/hooks/usePage';
import Root from './Sidebar.style';

/**
 *
 * @param children
 * @returns {*}
 * @constructor
 */
const Sidebar = ({children}) => {
    const {id} = usePage();

    return (
        <Root id={id}>
            {children}
        </Root>
    );
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 16.11.2019
 * Time: 00:24
 */
export default Sidebar;