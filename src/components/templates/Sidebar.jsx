import React from 'react';
import usePage from 'hooks/usePage';
import Brand from './sidebar/Brand';
import Root from 'styles/templates/Sidebar.style';

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
            <Brand/>
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