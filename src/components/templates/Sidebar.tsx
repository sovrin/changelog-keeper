import React from 'react';
import Brand from './sidebar/Brand';
import Root from '~/styles/templates/Sidebar.style';
import usePage from '~/hooks/usePage';

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